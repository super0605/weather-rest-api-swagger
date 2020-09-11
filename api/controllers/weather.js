import util from "util";
import * as DAO from "../daos/index.js";
import * as Swagger from "./swagger.js";
import API from "../utils/API.js";
import apiConfig from "../config/apiConfig.js";

const dao = DAO.getInstance("memory");
const api = new API();

import express from "express";
export const router = express.Router();

/**
 * @swagger
 * /weather/:
 *   get:
 *     description: Retrieve an specific weather based on the zipcode
 *     tags:
 *       - weather
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: zipcodes
 *         description: multiple zipcode of the current weather to retrieve.
 *         in: query
 *         required: true
 *         type: array
 *         items:
 *            type: number
 *       - name: apikey
 *         description: Your registered API key.
 *         in: query
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: weather
 *         schema:
 *            type: array
 *            items:
 *              type: object
 *              properties:
 *                zipcode:
 *                  type: number
 *                weather:
 *                  $ref: '#/definitions/Weather'
 */
router.get("/", async (req, res, next) => {
  const prefix = "/v2.0";
  let zipCodes = req.query.zipcodes;
  let apiKey = req.query.key;

  try {
    zipCodes = zipCodes.split(",");
    let results = await Promise.all(
      zipCodes.map((zipcode) =>
        api.callApi({
          url: `${prefix}/current?postal_code=${zipcode}&key=${apiKey || apiConfig.apiKey}`,
          method: "get",
        })
      )
    );

    results = results.map((r) => r.data);
    Swagger.validateModel("CurrentWeather", results);

    let formattedWeather = zipCodes.map((zipcode, index) => {
      let formatData = {
        zipcode: zipcode,
        weather: results[index],
      };
      return formatData;
    });

    console.log(util.inspect(formattedWeather, { showHidden: true, depth: 10, colors: true }));
    res.send(formattedWeather);
  } catch (error) {
    console.error(error);
  }
});

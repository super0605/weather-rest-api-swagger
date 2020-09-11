/**
 * @swagger
 * definitions:
 *  CurrentWeather:
 *    type: object
 *    properties:
 *      count:
 *        type: integer
 *      data:
 *        type: array
 *        items:
 *          $ref: '#/definitions/Weather'
 *  Weather:
 *    type: object
 *    properties:
 *       city_name:
 *         type: string
 *       state_code:
 *         type: string
 *       country_code:
 *         type: string
 *       timezone:
 *         type: string
 *       lat:
 *         type: number
 *       lon:
 *         type: number
 *       station:
 *         type: string
 *       vis:
 *         type: integer
 *       rh:
 *         type: integer
 *       dewpt:
 *         type: number
 *       wind_dir:
 *         type: integer
 *       wind_cdir:
 *         type: string
 *       wind_cdir_full:
 *         type: string
 *       wind_speed:
 *         type: number
 *       temp:
 *         type: number
 *       app_temp:
 *         type: number
 *       clouds:
 *         type: integer
 *       weather:
 *         $ref: '#/definitions/weather_model_2'
 *       datetime:
 *         type: string
 *       ob_time:
 *         type: string
 *       ts:
 *         type: number
 *       sunrise:
 *         type: string
 *       sunset:
 *         type: string
 *       slp:
 *         type: number
 *       pres:
 *         type: number
 *       aqi:
 *         type: number
 *       uv:
 *         type: number
 *       solar_rad:
 *         type: number
 *       ghi:
 *         type: number
 *       dni:
 *         type: number
 *       dhi:
 *         type: number
 *       elev_angle:
 *         type: number
 *       hour_angle:
 *         type: number
 *       pod:
 *         type: string
 *       precip:
 *         type: number
 *       snow:
 *         type: number
 *  weather_model_2:
 *    type: object
 *    properties:
 *      icon:
 *         type: string
 *      code:
 *         type: string
 *      description:
 *         type: string
 */

import axios from "axios";
import apiConfig from "../config/apiConfig.js";

const accessToken = null; // once it need access token, it can be added token

export default class API {
  constructor(baseURL = apiConfig.apiBaseUrl, defaultToken = false) {
    this.baseURL = baseURL;

    this.instance = axios.create({
      baseURL: this.baseURL,
      headers: {
        "Content-Type": "application/json",
      },
    });
    this.instance.interceptors.request.use((config) => {
      let token = defaultToken || accessToken;
      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }

      return config;
    });
    this.instance.interceptors.response.use(
      (response) => {
        return response;
      },
      (data) => {
        if (data && data.response && data.response.status) {
          if (data.response.status === 401) {
            // Needs proper fixing, patching it to fix infinite reload
            console.log("Unauthorized: please check your api key or authentication credentials");
          }
        }
        return Promise.reject(data.response);
      }
    );
  }

  callApi({ method = "get", ...rest }) {
    return this.instance({ method, ...rest });
  }
}

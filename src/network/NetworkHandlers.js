import axios from "axios";
import { getTimeZone } from "./DateTimeAPIs";

export const getTimeFromWorldTimeAPI = tmz => {
  return axios.get(getTimeZone(tmz));
}

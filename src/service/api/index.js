import axios from "axios";
import { onRun } from "../confing";



export const fetcher_get = (url, options = {}) =>
  axios.get(onRun+url, { ...options }).then((response) => {
    return response.data;
  });


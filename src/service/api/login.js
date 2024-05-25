import axios from "axios";
import { onRun } from "../confing";

export const getcaptcha = () => {
  axios
    .get(`${onRun}/captcha`)
    .then((response) =>{response.data})
    .catch((err) => {
      console.log(err);
    });
};

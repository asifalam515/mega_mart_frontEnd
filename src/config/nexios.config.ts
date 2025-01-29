import { Nexios } from "nexios-http";
import { NexiosOptions } from "nexios-http/types/interfaces";
import { cookies } from "next/headers";

const nexiosInstance = new Nexios({
  baseURL: "http://localhost:5000/",
  credentials: "include",

  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
export default nexiosInstance;

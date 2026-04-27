import { HTTP_PROXY_LIST } from "../consts";

export const getHttpProxy = async () => {
  const list = (await (await fetch(HTTP_PROXY_LIST)).text()).split("\n");
};

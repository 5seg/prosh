import { CHECK_ENDPOINT } from "../consts";

export const checkProxy = async (proxy: string) => {
  try {
    const res = await fetch(CHECK_ENDPOINT, {
      proxy,
      signal: AbortSignal.timeout(3000),
    });
    return res.ok;
  } catch {
    return false;
  }
};

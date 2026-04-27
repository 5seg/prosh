import { parseArgs } from "util";
import type { proxyTypes } from "../types";
import logger from "fivelog";

interface parsedArgs {
  type: proxyTypes;
}

export const getParsedArgs = (): parsedArgs => {
  const { values } = parseArgs({
    args: Bun.argv,
    options: {
      http: {
        type: "boolean",
      },
      https: {
        type: "boolean",
      },
    },
    strict: false,
    // allowPositionals: true,
  });
  if (values.http && values.https) {
    logger.warn(
      "Duplicate flags were found. (--http, --https) --http takes precedence.",
    );
    return {
      type: "http",
    };
  }
  if (values.https) return { type: "https" };
  return { type: "http" };
};

import logger from "fivelog";

if (Bun.argv.includes("--silent")) {
  ["log", "warn", "error", "info", "debug"].forEach((method) => {
    //@ts-ignore
    console[method] = () => {};
  });
}

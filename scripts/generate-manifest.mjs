import { readdir, writeFile } from "node:fs/promises";
import path from "node:path";

const menuDir = path.resolve("menus");

const files = (await readdir(menuDir))
  .filter((file) => file.endsWith(".js"))
  .sort();

await writeFile(
  path.join(menuDir, "manifest.json"),
  JSON.stringify(files, null, 2) + "\n",
  "utf8"
);

console.log("Generated menu manifest:", files);

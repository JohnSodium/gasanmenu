import { readdir, writeFile } from "node:fs/promises";
import path from "node:path";

const menuDir = path.resolve("menus");

const files = (await readdir(menuDir))
  .filter((file) => file.endsWith(".js"))
  .sort();

if (files.length === 0) {
  throw new Error("No weekly menu files found in menus/");
}

await writeFile(
  path.join(menuDir, "manifest.json"),
  JSON.stringify(files, null, 2) + "\n",
  "utf8"
);

console.log("Generated manifest.json:");
console.log(JSON.stringify(files, null, 2));

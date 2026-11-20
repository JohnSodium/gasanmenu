import { readdir, writeFile } from "node:fs/promises";

const files = (await readdir("./menus"))
  .filter(file => /^\d{4}-\d{2}-\d{2}\.js$/.test(file))
  .sort();

await writeFile(
  "./menus/manifest.json",
  JSON.stringify(files, null, 2) + "\n"
);

console.log(`Found ${files.length} weekly menu files.`);

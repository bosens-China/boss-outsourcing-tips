/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require("fs");
const path = require("path");
const core = require("@actions/core");
const zip = require("bestzip");

zipFiles();

async function zipFiles() {
  try {
    // Get inputs
    const filesToZip = core.getInput("files");
    const cwd = core.getInput("cwd");
    // Parse local package.json file
    const package = JSON.parse(fs.readFileSync("package.json").toString());
    // Compose name of zip archive
    const zipName = package.name + package.version + ".zip";
    // Prepare array of files to zip
    const source = filesToZip.split(",").map((f) => f.trim());
    // Zip files
    await zip({
      source: source,
      destination: zipName,
      cwd: cwd,
    });
    // Compose relative path to zip archive
    const archivePath = path.join(cwd, zipName);
    // Log result
    console.log(`Successfully zipped files ${filesToZip} into ${archivePath}`);
    // Set outputs
    core.setOutput("archive", archivePath);
    core.setOutput("name", package.name);
    core.setOutput("version", package.version);
  } catch (error) {
    // Process error
    console.error(error.stack);
    core.setFailed(error.message);
  }
}

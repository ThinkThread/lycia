#!/usr/bin/env node
const { Command } = require("commander");
const hlsDownloader = require("node-hls-downloader");

const program = new Command();

program
  .name("lycia")
  .description("CLI to some JavaScript string utilities")
  .version("1.0.0");

program
  .command("start")
  .description("Start the downloader")
  .requiredOption("-u, --streamUrl <streamUrl>", "URL to start")
  .requiredOption("-d --segmentsDir <segmentsDir>", "Path to download")
  .option("-o, --output <outputFile>", "Output file", "output.mp4")
  .option("-q, --quality <quality>", "Quality of the download", "best")
  .option("-l, --live <live>", "Download live stream", true)
  .action((options) => {
    return hlsDownloader.download(options);
  });

program.parse();

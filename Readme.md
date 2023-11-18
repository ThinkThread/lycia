# Lycia

## Description

`Lycia` is a command-line interface (CLI) tool that provides an easy and efficient way to utilize JavaScript string utilities. This tool is particularly useful for downloading video streams using HLS (HTTP Live Streaming) technology.

## Features

- **Download HLS Streams:** Quickly download video streams.
- **Customizable Download Options:** Control over various aspects of the download, such as quality and output file name.
- **Support for Live Streams:** Ability to download live streaming content.

## Installation

To install `Lycia`, run the following command:

```bash
npm install -g lycia
```

## Usage

After installation, you can use `Lycia`` to download video streams. Here are some common commands and options:

## Start Downloading

```bash
lycia start -u <URL> -d <PathToDownload>
```

### Options

- -u, --streamUrl <streamUrl>: URL of the stream.
- -d, --segmentsDir <segmentsDir>: Directory to save the segments.
- -o, --output <outputFile>: Name of the output file.
- -q, --quality <quality>: Quality of the download.
- -l, --live <live>: Download live stream flag.

## Example

```bash
lycia start -u http://example.com/stream.m3u8 -d subFolder
```

#! /usr/bin/env node
import { Command } from "@commander-js/extra-typings";
import { initCommand } from "./commands/init";
import { doCommand } from "./commands/do";
import chalk from "chalk";

async function main() {
  const cloaca = new Command()
    .name("cloaca")
    .description(
      "Command Line Optimizing Assistive Code Agent\n\nThe only tool you'll ever need."
    )
    .version("0.1.0");

  cloaca.addCommand(initCommand);
  cloaca.addCommand(doCommand);

  cloaca.parse(process.argv);
}

main();

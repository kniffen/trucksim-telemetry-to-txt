import { Command, Option } from 'commander';

export interface Options {
  templatePath: string;
  outputPath: string;
  interval: number;
}

const program = new Command();

program
  .requiredOption('-t, --template-path <path>', 'Path to template')
  .requiredOption('-o, --output-path <path>', 'Path to output text file')
  .option('-i, --interval <number>', 'Update interval in milliseconds');

program.parse(process.argv);

const opts = program.opts();

export const options: Options = {
  templatePath: opts.templatePath,
  outputPath: opts.outputPath || 'output.txt',
  interval: parseInt(opts.interval) || 1000
};

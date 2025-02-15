import fs from 'node:fs';
import tst from 'trucksim-telemetry';
import { options } from './options';
import { formatTemplate } from './formatTemplate';

const telemetry = tst();

telemetry.watch({interval: options.interval}, (data) => {
  const template: string = fs.readFileSync(options.templatePath, 'utf8');

  // @ts-ignore
  fs.writeFileSync(options.outputPath, formatTemplate(data, template));
});

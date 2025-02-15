interface JsonData {
  [key: string]: string | number | boolean | JsonData | undefined;
}

export function formatTemplate(jsonData: JsonData, template: string): string {
  let output = template;
  const placeholders = template.match(/{[^}]+}/g) || [];

  for (const placeholder of placeholders) {
    const path = placeholder.slice(1, -1);
    const value = getValueFromPath(jsonData, path);
    output = output.replace(placeholder, String(value));
  }

  return output;
}

function getValueFromPath(data: JsonData, path: string): string {
  const keys = path.split('.');
  let value = `{${path}}`;
  let obj = data;
  for (const key of keys) {
    if (obj[key] === undefined) {
      break;
    } else if (typeof obj[key] === 'object') {
      obj = obj[key];
    } else {
      value = obj[key].toString();
    }
  }

  return value;
}
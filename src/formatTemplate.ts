interface JsonData {
  [key: string]: string | number | boolean | JsonData | undefined;
}

export function formatTemplate(jsonData: JsonData, template: string): string {
  let output = template;
  const placeholders = template.match(/{[^}]+}/g) || [];

  for (const placeholder of placeholders) {
    const [path, formatter] = placeholder.slice(1, -1).split('|');
    const value = getValueFromPath(jsonData, path?.trim() || '');
    const formattedValue = formatter ? applyFormatter(value, formatter.trim()) : value;
    output = output.replace(placeholder, formattedValue);
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

function applyFormatter(value: string, formatter: string): string {
  try {
    const func = new Function('value', `return (${formatter})(value);`);
    return func(value);
  } catch (error) {
    console.error(`Error applying formatter: ${formatter}`, error);
    return value;
  }
}
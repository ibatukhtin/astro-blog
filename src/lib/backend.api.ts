export function getEnvironmentVariable(varName: string, defaultValue: string): string {
  return import.meta.env[varName] ?? defaultValue;
}

export function getRequestUrl(urlPath: string) {
  const API_URL = getEnvironmentVariable('API_UR', 'https://triplay-backend-dot-triplay-development.ey.r.appspot.com/api');
  return `${ API_URL }${ urlPath }`;
}

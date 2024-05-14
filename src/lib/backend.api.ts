export function getRequestUrl(urlPath: string) {
  const API_URL = 'https://triplay-backend-dot-triplay-development.ey.r.appspot.com/api'
  return `${ API_URL }${ urlPath }`;
}

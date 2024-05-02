interface Props {
  endpoint: string;
  query?: Record<string, string>;
  wrappedByKey?: string;
  wrappedByList?: boolean;
}

/**
 * Fetches data from the Strapi API
 * @param endpoint - The endpoint to fetch from
 * @param query - The query parameters to add to the url
 * @param wrappedByKey - The key to unwrap the response from
 * @param wrappedByList - If the response is a list, unwrap it
 * @returns
 */
export default async function fetchApi<T>({
                                            endpoint,
                                            query,
                                            wrappedByKey,
                                            wrappedByList,
                                          }: Props): Promise<T> {
  if (endpoint.startsWith('/')) {
    endpoint = endpoint.slice(1);
  }

  const url = new URL(`http://34.107.22.76:1337/api/${endpoint}`);
  const mergedOptions = {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer 2f6a558ef2c6f1c77b1911bb3cf9afe86f6c0857a5dcc8968a9ccfe1ba2d9b74248d7abca871b74cbc6801f067cd69bd94acca5051977fd413d2dc0c0f07e4c6eb0d767394a46a7e1d667e00ab0699330d051bbc457fd1ce1dd0993779313a4e5621d82ee1c81457a3cfd2e4e70fb2bf358396122253c23934d46236a4a7d06a`
    }
  };

  if (query) {
    Object.entries(query).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });
  }
  const res = await fetch(url.toString(), mergedOptions);
  let data = await res.json();

  if (wrappedByKey) {
    data = data[wrappedByKey];
  }

  if (wrappedByList) {
    data = data[0];
  }

  return data as T;
}

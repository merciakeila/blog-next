export const fetchJson = async <T>(url: string): Promise<T> => {
  const rawData = fetch(url);
  const jsonData = (await rawData).json();
  return jsonData;
};

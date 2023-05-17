/*
 * Builds the query parameter part of URL
 */
export default function buildQueryParams(queryParams: {
  [key: string]: string | undefined;
}) {
  let path = "?";

  for (let [k, v] of Object.entries(queryParams)) {
    if (v) path += `${k}=${v}&`;
  }

  path = path.slice(0, path.length - 1); // to remove last &

  return path;
}

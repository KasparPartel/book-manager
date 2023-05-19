import { SortDirection } from "@/models/page";

export interface SearchParams {
  page: string;
  size: string;
  sort: string;
  direction: SortDirection;
}

/*
 * Builds the query parameter part of URL
 */
export default function buildQueryParams(queryParams: Partial<SearchParams>) {
  console.log(queryParams);

  let path = "?";

  for (let [k, v] of Object.entries(queryParams)) {
    if (v) path += `${k}=${v}&`;
  }

  path = path.slice(0, path.length - 1); // to remove last &

  return path;
}

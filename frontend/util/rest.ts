import { PageRequest } from "@/models/page";

export const buildParams = (filter: Partial<PageRequest>): String => {
  const { pageIndex, pageSize, sort, direction } = filter;
  let params = "?";

  if (pageIndex != null) {
    params += `page=${pageIndex}&`;
  }
  if (pageSize != null) {
    params += `size=${pageSize}&`;
  }
  if (sort != undefined) {
    params += `sort=${sort + "," + direction ?? ""}&`;
  }

  params = params.slice(0, params.length - 1); // to remove last &

  return params;
};

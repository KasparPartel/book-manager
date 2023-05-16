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
  if (sort != null) {
    params += `sort=${sort + "," + direction ?? ""}&`;
  }

  return params;
};

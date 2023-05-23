import { PageRequest } from "@/models/page";
import { SearchParams } from "@/util/params";

const createFilter = (searchParams: Partial<SearchParams>): PageRequest => {
  const filter: PageRequest = {
    pageIndex: parseInt(searchParams.page ?? "1", 10) - 1,
    pageSize: parseInt(searchParams.size ?? "35", 10),
    sort: searchParams.sort ?? undefined,
    direction: searchParams.direction ?? undefined,
  };

  return filter;
};

export default createFilter;

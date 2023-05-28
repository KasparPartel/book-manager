import { Page, PageRequest } from "@/models/page";
import Checkout from "@/models/checkout";
import PaginationFilter from "@/components/PaginationFilter";
import ItemsPerPageFilter from "@/components/ItemsPerPageFilter";
import SortingFilter from "@/components/SortingFilter";
import { SearchParams } from "@/util/params";
import createFilter from "@/util/filterFactory";
import { buildParams } from "@/util/rest";
import PageHeading from "@/components/styling/PageHeading";
import FilterContainer from "@/components/styling/FilterContainer";
import CheckoutShort from "@/app/checkouts/CheckoutShort";
import { Suspense } from "react";

const getCheckouts = async (filter: PageRequest) => {
  const url =
    process.env.NEXT_PUBLIC_API_ROOT +
    "checkout/getCheckouts" +
    buildParams(filter);
  const res = await fetch(url, { cache: "no-cache" });
  return res.json();
};

interface CheckoutsPageProps {
  searchParams: Partial<SearchParams>;
}

export default async function CheckoutsPage({
  searchParams,
}: CheckoutsPageProps) {
  const filter: PageRequest = createFilter(searchParams);
  const page: Page<Checkout> = await getCheckouts(filter);

  return (
    <section className="flex flex-col gap-6">
      <PageHeading text="Checkouts" />
      <FilterContainer>
        <Suspense fallback={<p>Loading filters...</p>}>
          <PaginationFilter
            url="/checkouts"
            totalPages={page.totalPages}
            searchParams={searchParams}
          />
          <div className="flex gap-2">
            <ItemsPerPageFilter
              url="/checkouts"
              options={[35, 50, 75]}
              searchParams={searchParams}
            />
            <SortingFilter
              url="/checkouts"
              sortOn={"borrowerLastName"}
              searchParams={searchParams}
            />
          </div>
        </Suspense>
      </FilterContainer>

      <section className="flex flex-col gap-2">
        <Suspense fallback={<p>Loading checkouts...</p>}>
          {page.content.map((checkout, i) => (
            <CheckoutShort key={checkout.id} checkout={checkout} />
          ))}
        </Suspense>
      </section>
    </section>
  );
}

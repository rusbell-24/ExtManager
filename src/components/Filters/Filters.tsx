import { useCallback } from "react";
import Button from "../Button/Button";
import { useExtensions } from "../../context/useExtensions";
import type { Filter } from "../../context/extensions";

const FILTER_OPTIONS: Filter[] = ["All", "Active", "Inactive"];

const Filters = () => {
  const { filter, setFilter } = useExtensions();

  const handleFilterChange = useCallback(
    (filterValue: Filter) => {
      setFilter(filterValue);
    },
    [setFilter],
  );

  return (
    <div className="mb-6 md:flex md:place-content-between md:items-center md:mb-10">
      <h2 className="dark:text-Neutral-0 text-center text-[2.125rem] font-bold mb-6 md:mb-0">
        Extensions List
      </h2>
      <div className="flex justify-between md:gap-4">
        {FILTER_OPTIONS.map((filterOption) => (
          <Button
            key={filterOption}
            active={filter === filterOption}
            onClick={() => handleFilterChange(filterOption)}
            textSmall={false}
          >
            {filterOption}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Filters;

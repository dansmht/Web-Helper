import { useMemo, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';

export type UseDebouncedQueryFilterParams<T> = {
  initialItems: T[];
  filterPredicate: (item: T, query: string) => boolean;
  debounceDelay?: number;
  searchParamKey?: string;
};

export type UseDebouncedQueryFilterResult<T> = {
  filteredItems: T[];
  filter: string;
  setFilter: (value: string) => void;
};

export const useDebouncedQueryFilter = <T>({
  initialItems,
  filterPredicate,
  debounceDelay = 300,
  searchParamKey = 'filter',
}: UseDebouncedQueryFilterParams<T>): UseDebouncedQueryFilterResult<T> => {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParamValue = searchParams.get(searchParamKey) ?? '';
  const [debouncedQuery, setDebouncedQuery] = useState(queryParamValue);

  const setFilter = (value: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (value) {
      newParams.set(searchParamKey, value);
    } else {
      newParams.delete(searchParamKey);
    }
    setSearchParams(newParams);
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(queryParamValue);
    }, debounceDelay);

    return () => {
      clearTimeout(handler);
    };
  }, [queryParamValue, debounceDelay]);

  const filteredItems = useMemo(() => {
    if (!debouncedQuery.trim()) return initialItems;

    return initialItems.filter((item) => filterPredicate(item, debouncedQuery));
  }, [initialItems, debouncedQuery, filterPredicate]);

  return { filteredItems, filter: queryParamValue, setFilter };
};

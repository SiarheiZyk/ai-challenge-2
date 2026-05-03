import { createContext, useContext, useMemo, useState } from 'react';
import { DEFAULT_FILTERS } from '../utils/constants';

const FiltersContext = createContext(null);

export function FiltersProvider({ children }) {
  const [filters, setFilters] = useState(DEFAULT_FILTERS);

  const value = useMemo(() => ({ filters, setFilters }), [filters]);

  return <FiltersContext.Provider value={value}>{children}</FiltersContext.Provider>;
}

export function useFilters() {
  const context = useContext(FiltersContext);
  if (!context) {
    throw new Error('useFilters must be used within a FiltersProvider');
  }

  return context;
}

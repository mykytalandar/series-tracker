import { createContext } from "react";
import { useSeries } from "../features/useSeries/useSeries";
import type { Series, SeriesFormData } from "../types/Series";

interface SeriesContextType {
  series: Series[];
  addSeries: (data: SeriesFormData) => void;
}

export const SeriesContext = createContext<SeriesContextType | null>(null);

export const SeriesProvider = ({ children }: { children: React.ReactNode }) => {
  const value = useSeries();

  return (
    <SeriesContext.Provider value={value}>{children}</SeriesContext.Provider>
  );
};

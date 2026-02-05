import { useSeries } from "../features/useSeries/useSeries";
import { SeriesContext } from "./SeriesContext";

export const SeriesProvider = ({ children }: { children: React.ReactNode }) => {
  const value = useSeries();

  return (
    <SeriesContext.Provider value={value}>{children}</SeriesContext.Provider>
  );
};
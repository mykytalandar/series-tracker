import { createContext } from "react";
import type { SeriesContextType } from "./types";

export const SeriesContext = createContext<SeriesContextType>({
  series: [],
  addSeries: () => {},
  deleteSeries: () => {},
  updateSeries: () => {},
});



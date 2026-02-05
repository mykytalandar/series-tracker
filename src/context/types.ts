import type { Series, SeriesFormData } from "../types/Series";

export interface SeriesContextType {
  series: Series[];
  addSeries: (data: SeriesFormData) => void;
  deleteSeries: (id: string) => void;
  updateSeries: (id: string, data: SeriesFormData) => void;
}
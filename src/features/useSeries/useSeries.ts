import { useLocalStorage } from "../../hooks/useLocalStorage";
import type { Series, SeriesFormData } from "../../types/Series";

const LOCAL_STORAGE_KEY = 'serises-tracker';

const id =
  crypto.randomUUID?.() ?? // crypto.randomUUID() is not supported in some environments (e.g. older mobile Safari).
  Date.now().toString(); // The optional chaining prevents a crash, and Date.now() provides a safe fallback ID.




export const useSeries = () => {
    const [series, setSeries] = useLocalStorage<Series[]>(LOCAL_STORAGE_KEY, []);

    const addSeries = (data: SeriesFormData) => {
        setSeries(prev => [...prev, {id: id, ...data}])
    }

    const deleteSeries = (id: string) => {
        setSeries(prev => prev.filter(seriesItem => seriesItem.id !== id))
    }

    const updateSeries = (id: string, data: SeriesFormData) => {
        setSeries(prev => prev.map(seriesItem => seriesItem.id === id ? {...seriesItem, ...data} : seriesItem))
    }

    return {
        series,
        addSeries,
        deleteSeries,
        updateSeries,
    }
}

import { useLocalStorage } from "../../hooks/useLocalStorage";
import type { Series } from "../../types/Series";

const LOCAL_STORAGE_KEY = 'serises-tracker';

export const useSeries = () => {
    const [series, setSeries] = useLocalStorage<Series[]>(LOCAL_STORAGE_KEY, []);

    const addSeries = (data: Omit<Series, 'id'>) => {
        setSeries(prev => [...prev, {id: crypto.randomUUID(), ...data}])
    }

    return {
        series,
        addSeries,
    }
}

import { useContext } from "react";
import { SeriesContext } from "../../context/SeriesContext";
import { SeriesCard } from "../SeriesCard/SeriesCard";

export const SeriesList: React.FC = () => {
    const { series } = useContext(SeriesContext);
    return (
        <div>
            <h2>Список сериалов:</h2>
            {series.map(seriesItem=> (
                <SeriesCard key={seriesItem.id} series={seriesItem} />
            ))}
        </div>
    );
}
import { SeriesContext } from "../../context/SeriesContext";
import { SeriesCard } from "../SeriesCard/SeriesCard";

export const SeriesList: React.FC = () => {
    const { series } = SeriesContext;
    return (
        <div>
            <h2>Список сериалов:</h2>
            {series.map((seriesItem) => {})}
            <SeriesCard/>
        </div>
    );
}
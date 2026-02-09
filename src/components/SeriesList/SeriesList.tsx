import { useContext } from "react";
import { SeriesContext } from "../../context/SeriesContext";
import { SeriesCard } from "../SeriesCard/SeriesCard";
import style from "./SeriesList.module.css";

export const SeriesList: React.FC = () => {
  const { series } = useContext(SeriesContext);
  return (
    <div className={style["series-list"]}>
      {series.length === 0 ? (
        <p>No series added yet.</p>
      ) : (
        <>
          <div className={style["series-list-header"]}>
            <h2 className={style["series-list-title"]}>Watching</h2>
            {series.length > 0 && (
              <span className={style["series-count"]}>
                {series.length} series
              </span>
            )}
          </div>
          {series.map((seriesItem) => (
            <SeriesCard key={seriesItem.id} series={seriesItem} />
          ))}
        </>
      )}
    </div>
  );
};

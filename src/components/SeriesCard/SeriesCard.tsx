import { useContext } from "react";
import type { Series } from "../../types/Series";
import { SeriesContext } from "../../context/SeriesContext";
import style from "./SeriesCard.module.css";

type Props = {
  series: Series;
};

export const SeriesCard: React.FC<Props> = ({ series }) => {
  const { deleteSeries } = useContext(SeriesContext);

  return (
    <article className={style.card}>
      <h3>{series.title}</h3>
      <div>
        <span>Season {series.season}</span>
        <span>Episode {series.episode}</span>
        <span>minute {series.minute}</span>
      </div>
      <button onClick={() => deleteSeries(series.id)}>Delete</button>
    </article>
  );
};

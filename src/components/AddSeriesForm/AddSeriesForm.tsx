import { useContext, useState } from "react";
import type { SeriesFormData } from "../../types/Series";
import { SeriesContext } from "../../context/SeriesContext";
import styles from "./AddSeriesForm.module.css";
import { AddButton } from "../AddButton/AddButton";

export const AddSeriesForm: React.FC = () => {
  const [title, setTitle] = useState("");
  const [season, setSeason] = useState<number | "">("");
  const [episode, setEpisode] = useState<number | "">("");
  const [minute, setMinute] = useState<number | "">("");

  const { addSeries } = useContext(SeriesContext);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!title || !season || !episode || !minute) {
      return;
    }

    const newSeries: SeriesFormData = {
      title: title,
      season: season,
      episode: episode,
      minute: minute,
    };

    addSeries(newSeries);

    setTitle("");
    setSeason(1);
    setEpisode(1);
    setMinute(0);
  };

  return (
    <form action="/" onSubmit={handleSubmit} className={styles.form}>
      <h3 className={styles["form-title"]}>ADD SERIES</h3>
      <label htmlFor="title">
        TITLE
        <input
          type="text"
          name="title"
          value={title}
          className={styles.input}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Breaking Bad"
        />
      </label>

      <div className={styles["inputs-container"]}>
        <label htmlFor="season">
          SEASON
          <input
            type="number"
            inputMode="numeric"
            name="season"
            value={season}
            className={styles.input}
            onChange={(e) =>
              setSeason(e.target.value === "" ? "" : +e.target.value)
            }
            placeholder="1"
          />
        </label>

        <label htmlFor="episode">
          EPISODE
          <input
            type="number"
            inputMode="numeric"
            name="episode"
            value={episode}
            className={styles.input}
            onChange={(e) =>
              setEpisode(e.target.value === "" ? "" : +e.target.value)
            }
            placeholder="1"
          />
        </label>

        <label htmlFor="minute">
          MINUTE
          <input
            type="number"
            inputMode="numeric"
            name="minute"
            value={minute}
            className={styles.input}
            onChange={(e) =>
              setMinute(e.target.value === "" ? "" : +e.target.value)
            }
            placeholder="0"
          />
        </label>

        <AddButton type="submit" title="Add" />
      </div>
    </form>
  );
};

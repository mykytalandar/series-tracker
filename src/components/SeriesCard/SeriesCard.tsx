import { useContext, useState } from "react";
import type { Series, SeriesFormData } from "../../types/Series";
import { SeriesContext } from "../../context/SeriesContext";
import style from "./SeriesCard.module.css";
import { AddButton } from "../AddButton/AddButton";

type Props = {
  series: Series;
};

export const SeriesCard: React.FC<Props> = ({ series }) => {
  const { deleteSeries, updateSeries } = useContext(SeriesContext);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<SeriesFormData | null>(null);

  const handleClick = () => {
    setFormData({
      title: series.title,
      season: series.season,
      episode: series.episode,
      minute: series.minute,
    });

    setIsEditing(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      if (prev === null) {
        return null;
      }
      return {
        ...prev,
        [name]: name === "title" ? value : value === "" ? "" : Number(value),
      };
    });
  };

  const handleSave = () => {
    updateSeries(series.id, formData as SeriesFormData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData(null);
    setIsEditing(false);
  };

  return (
    <article className={style.card}>
      {/* TITLE + ACTIONS */}
      <div className={style["title-wrapper"]}>
        {!isEditing ? (
            <h3 className={style.title}>{series.title}</h3>         
        ) : (
          <>
            <input
              type="text"
              name="title"
              value={formData?.title || ""}
              className={style.input}
              onChange={(e) => handleChange(e)}
            />
            <div className={style["actions-wrapper"]}>
              <AddButton action={handleSave} title="Save" />
              <AddButton action={handleCancel} title="Cancel" />
            </div>
          </>
        )}
      </div>
      {/* CONTENT */}
      {!isEditing ? (
        <div className={style.content}>
          <span className={style.text}>
            season: <span className={style["text-value"]}>{series.season}</span>
          </span>
          <span className={style.text}>
            episode: <span className={style["text-value"]}>{series.episode}</span>
          </span>
          <span className={style.text}>
            minute: <span className={style["text-value"]}>{series.minute}</span>
          </span>
        </div>
      ) : (
        <form action="/" onSubmit={(e) => e.preventDefault()} className={style.form}>
          <input
            type="number"
            name="season"
            value={formData?.season || ""}
            className={style.input}
            onChange={(e) => handleChange(e)}
            inputMode="numeric"
          />
          <input
            type="number"
            inputMode="numeric"
            name="episode"
            value={formData?.episode || ""}
            className={style.input}
            onChange={(e) => handleChange(e)}
          />
          <input
            type="number"
            inputMode="numeric"
            name="minute"
            value={formData?.minute || ""}
            className={style.input}
            onChange={(e) => handleChange(e)}
          />
        </form>
      )}
      <div className={style["buttons-wrapper"]}>
        {!isEditing ? (
          <>
            <AddButton action={() => deleteSeries(series.id)} title="Delete" />
            <AddButton action={handleClick} title="Edit" />
          </>
        ) : (
          <></>
        )}
      </div>
    </article>
  );
};

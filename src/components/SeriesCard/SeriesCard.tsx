import { useContext, useState } from "react";
import type { Series, SeriesFormData } from "../../types/Series";
import { SeriesContext } from "../../context/SeriesContext";
import style from "./SeriesCard.module.css";
import { AddButton } from "../AddButton/AddButton";
import { iconsColor } from "../../types/colors";

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
      <div className={style["content-wrapper"]}>
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke={iconsColor}
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path d="m17 2-5 5-5-5"></path>
              <rect width="20" height="15" x="2" y="7" rx="2"></rect>
            </svg>
            <span className={style.text}>s: {series.season}</span>
            <span className={style.text}>e: {series.episode}</span>
            <div className={style["minute-wrapper"]}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke={iconsColor}
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <path d="M12 6v6l4 2"></path>
                <circle cx="12" cy="12" r="10"></circle>
              </svg>
              <span className={style.text}>{series.minute}m</span>
            </div>
          </div>
        ) : (
          <form
            action="/"
            onSubmit={(e) => e.preventDefault()}
            className={style.form}
          >
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
      </div>
      <div className={style["buttons-wrapper"]}>
        {!isEditing ? (
          <>
            <button onClick={handleClick} className={style.button}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke={iconsColor}
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                <path d="m15 5 4 4"></path>
              </svg>
            </button>
            <button onClick={() => deleteSeries(series.id)} className={style.button}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke={iconsColor}
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <path d="M10 11v6"></path>
                <path d="M14 11v6"></path>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                <path d="M3 6h18"></path>
                <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              </svg>
            </button>
            {/* <AddButton action={() => deleteSeries(series.id)} title="Delete" />
            <AddButton action={handleClick} title="Edit" /> */}
          </>
        ) : (
          <></>
        )}
      </div>
      {/* </div> */}
    </article>
  );
};

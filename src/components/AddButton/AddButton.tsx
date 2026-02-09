import style from "./AddButton.module.css";

type Props = {
  action?: () => void;
  type?: "button" | "submit";
  title: string;
};

export const AddButton: React.FC<Props> = ({ action, type, title }) => {
  return (
    <button
      onClick={action}
      className={style["add-button"]}
      type={type || "button"}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <path d="M5 12h14"></path>
        <path d="M12 5v14"></path>
      </svg>
      <span className={style["add-button-text"]}>{title}</span>
    </button>
  );
};

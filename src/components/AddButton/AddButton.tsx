import style from "./AddButton.module.css";

type Props = {
  action?: () => void;
  type?: "button" | "submit";
  title: string;
  children?: React.ReactNode;
};

export const AddButton: React.FC<Props> = ({ action, type, title, children }) => {
  return (
    <button
      onClick={action}
      className={style["add-button"]}
      type={type || "button"}
    >
      {children}
      <span className={style["add-button-text"]}>{title}</span>
    </button>
  );
};

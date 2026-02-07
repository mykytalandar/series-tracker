import style from "./AddButton.module.css";

type Props = {
  action?: () => void
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
      {title}
    </button>
  );
};

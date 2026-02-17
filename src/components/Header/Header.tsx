import { Clapperboard } from "lucide-react";
import { iconsColor } from "../../types/colors";
import style from "./Header.module.css";

export const Header: React.FC = () => {
  return (
    <header className={style.header}>
      <div className={style["title-line"]}>
        <Clapperboard size={24} color={iconsColor} />
        <h1 className={style.title}>Series Tracker</h1>
      </div>
      <h2 className={style.subtitle}>Keep track of where you left off.</h2>
    </header>
  );
};

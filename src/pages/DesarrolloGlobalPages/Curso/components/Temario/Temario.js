import { temarios } from "../../data";
import "../../styles/collapseTemario.css";
import { TemarioItem } from "./TemarioItem";
export const Temario = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
      className="accordion"
      id="accordionExample5"
    >
      {temarios.map((temario, index) => {
        return <TemarioItem key={index} indice={index} {...temario} />;
      })}
    </div>
  );
};

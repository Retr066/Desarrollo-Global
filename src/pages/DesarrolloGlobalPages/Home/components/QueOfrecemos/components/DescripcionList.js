import { queOfrecemos } from "../../../data";
import { DescripcionItem } from "./DescripcionItem";
export const DescripcionList = () => {
  return (
    <div className="grid  grid-cols-1 xs:grid-cols-2 sm:grid-cols-2  lg:grid-cols-4 auto-rows-auto gap-4">
      {queOfrecemos.map((queOfrece, index) => (
        <DescripcionItem key={index} {...queOfrece} />
      ))}
    </div>
  );
};

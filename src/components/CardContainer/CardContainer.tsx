import Card from "../Card/Card";
import { useExtensions } from "../../context/useExtensions";

const CardContainer = () => {
  const { filter, extensions } = useExtensions();

  const dataFiltered = extensions.filter((item) => {
    if (filter === "Active") return item.isActive;
    if (filter === "Inactive") return !item.isActive;
    return true;
  });

  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-3">
      {dataFiltered.map((extension) => (
        <Card key={extension.name} {...extension} />
      ))}
    </div>
  );
};

export default CardContainer;

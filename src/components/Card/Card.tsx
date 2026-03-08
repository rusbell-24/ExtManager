import Button from "../Button/Button";
import { Toggle } from "rsuite";
import "rsuite/Toggle/styles/index.css";
import type { CardType } from "../../types/cardType";
import { useExtensions } from "../../context/useExtensions";
import { useCallback } from "react";

const Card = ({ logo, name, description, isActive }: CardType) => {
  const { setExtensions } = useExtensions();

  const onToggle = useCallback(() => {
    setExtensions((prev) =>
      prev.map((extension) =>
        extension.name === name
          ? { ...extension, isActive: !extension.isActive }
          : extension,
      ),
    );
  }, [name, setExtensions]);

  const onRemove = useCallback(() => {
    setExtensions((prev) =>
      prev.filter((extension) => extension.name !== name),
    );
  }, [name, setExtensions]);

  return (
    <div className="bg-Neutral-0 rounded-2xl p-4 shadow-xl dark:bg-Neutral-800 ">
      <div className="flex gap-4 items-start mb-10">
        <img src={logo} alt={`${name} logo`} />
        <div>
          <h3 className="text-[1.25rem] font-bold mb-2 dark:text-Neutral-0">
            {name}
          </h3>
          <p className="text-Neutral-600 text-[0.9375rem] dark:text-Neutral-300">
            {description}
          </p>
        </div>
      </div>
      <div className="flex place-content-between">
        <Button onClick={onRemove} textSmall={true}>
          Remove
        </Button>
        <Toggle
          onClick={onToggle}
          checked={isActive}
          color="red"
          aria-label={`Toggle ${name} extension`}
        />
      </div>
    </div>
  );
};

export default Card;

type ButtonProps = {
  textSmall: boolean;
  active?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
};

const Button = ({ textSmall, onClick, children, active }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={` border border-Neutral-300 px-5 py-2 rounded-full bg-Neutral-0 
        hover:text-Neutral-0 cursor-pointer hover:bg-red-500 transition-colors
        dark:text-Neutral-0 dark:hover:bg-red-500 
        ${active ? "bg-red-500 text-Neutral-0" : "dark:bg-Neutral-800"}  
        ${textSmall ? "text-base" : "text-[1.25rem]"}
        `}
    >
      {children}
    </button>
  );
};

export default Button;

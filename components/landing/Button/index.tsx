import { HTMLProps } from "react";

export type ButtonColor = "yellow";

interface ButtonProps
  extends Omit<HTMLProps<HTMLButtonElement>, "type" | "className"> {
  color: ButtonColor;
}

/**
 * Button
 */
const Button = ({ color, ...rest }: ButtonProps) => {
  let buttonStyle = "";

  switch (color) {
    case "yellow":
      buttonStyle += "bg-yellow-300 border border-slate-300";
      break;
  }

  return (
    <button
      type="button"
      className={`w-fit p-2 rounded-lg font-medium ${buttonStyle}`}
      {...rest}
    />
  );
};

export default Button;

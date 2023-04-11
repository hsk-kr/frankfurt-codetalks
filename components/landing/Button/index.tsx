import { HTMLProps } from "react";

export type ButtonColor = "yellow" | "gray";

interface ButtonProps extends Omit<HTMLProps<HTMLButtonElement>, "type"> {
  color: ButtonColor;
}

/**
 * Button
 */
const Button = ({ color, className, ...rest }: ButtonProps) => {
  let buttonStyle = "";

  switch (color) {
    case "yellow":
      buttonStyle += "bg-yellow-300 text-gray-800";
      break;
    case "gray":
      buttonStyle += "bg-gray-500 text-white";
      break;
  }

  const finalClassName = `w-fit p-2 rounded-lg font-medium ${buttonStyle} ${
    className || ""
  }`;

  return <button type="button" className={finalClassName} {...rest} />;
};

export default Button;

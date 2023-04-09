import { HTMLProps } from "react";

export type ButtonColor = "yellow";

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
      buttonStyle += "bg-yellow-300 border border-slate-300";
      break;
  }

  const finalClassName =
    className + `w-fit p-2 rounded-lg font-medium ${buttonStyle}`;

  return <button type="button" className={finalClassName} {...rest} />;
};

export default Button;

import { ButtonHTMLAttributes, Fragment } from "react";
import { FaSpinner } from "react-icons/fa6";
import { cn } from "@/lib/cn";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isLoading?: boolean;
};

export const Button = ({
  children,
  className,
  isLoading,
  disabled,
  type = "button",
  ...buttonProps
}: ButtonProps) => {
  return (
    <button
      className={ cn("p-2 cursor-pointer rounded-md border-primary bg-surface hover:text-background hover:bg-primary disabled:cursor-not-allowed disabled:opacity-50 transition", className) }
      type={ type }
      disabled={ disabled || isLoading }
      { ...buttonProps }
    >
      <div className="flex items-center justify-center relative">
        { children }
        { isLoading ? (
          <FaSpinner className="ml-2 animate-spin w-6 h-6" />
        ) : (
          <Fragment />
        ) }
      </div>
    </button>
  );
};

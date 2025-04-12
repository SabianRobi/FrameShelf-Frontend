import { ButtonHTMLAttributes, Fragment } from "react";
import { FaSpinner } from "react-icons/fa6";

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
      className={`p-2 cursor-pointer rounded-md border-[#F6B17A] border-1 border-dashed bg-[#424769] hover:border-solid  hover:text-[#F6B17A] hover:bg-[#F6B17A11] disabled:cursor-default disabled:hover:border-dashed disabled:hover:bg-[#424769] disabled:hover:text-inherit disabled:opacity-50 ${className}`}
      type={type}
      disabled={disabled || isLoading}
      {...buttonProps}
    >
      <div className="flex items-center justify-center relative">
        {children}
        {isLoading ? (
          <FaSpinner className="absolute right-0 animate-spin w-6 h-6" />
        ) : (
          <Fragment />
        )}
      </div>
    </button>
  );
};

import { type ButtonHTMLAttributes } from "react";
import { FaSpinner } from "react-icons/fa6";
import { cn } from "@/lib/cn";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    isLoading?: boolean;
};

export const Button = ({ children, className, isLoading, disabled, type = "button", ...buttonProps }: ButtonProps) => (
    <button
        className={cn(
            "border-primary bg-surface hover:text-background hover:bg-primary cursor-pointer rounded-md p-2 transition disabled:cursor-not-allowed disabled:opacity-50",
            className
        )}
        disabled={disabled || isLoading}
        type={type}
        {...buttonProps}
    >
        <div className="relative flex items-center justify-center">
            {children}
            {isLoading && <FaSpinner className="ml-2 h-6 w-6 animate-spin" />}
        </div>
    </button>
);

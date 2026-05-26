import type { HTMLProps, ReactNode } from "react";

type MovieDetailCardProps = {
    title: string;
    children: ReactNode;
} & HTMLProps<HTMLDivElement>;

export const MovieDetailCard = ({ children, title, ...divProps }: MovieDetailCardProps) => (
    <div {...divProps} className={`rounded-md bg-[#424769] p-2 ${divProps.className}`}>
        <h2 className="text-cen text-xl font-bold">{title}</h2>
        <hr className="pb-2" />
        {children}
    </div>
);

import { HTMLProps, ReactNode } from "react";

type MovieDetailCardProps = {
  title: string;
  children: ReactNode;
} & HTMLProps<HTMLDivElement>;

export const MovieDetailCard = ({
  children,
  title,
  ...divProps
}: MovieDetailCardProps) => {
  return (
    <div
      {...divProps}
      className={`bg-[#424769] p-2 rounded-md ${divProps.className}`}
    >
      <h2 className="text-xl text-cen font-bold">{title}</h2>
      <hr className="pb-2" />
      {children}
    </div>
  );
};

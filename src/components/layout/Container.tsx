import type { ReactNode } from "react";

export const Container = ({ children }: { children: ReactNode }) => (
    <div className="mx-auto max-w-[1200px]">{children}</div>
);

import { ReactNode } from "react";

export const Container = ({ children }: { children: ReactNode }) => {
    return (
        <div className="max-w-[1200px] p-2 mx-auto">
            {children}
        </div>
    )
}

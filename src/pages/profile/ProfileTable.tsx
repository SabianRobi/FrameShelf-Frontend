import type { PropsWithChildren } from "react";
import { useAppSelector } from "@/redux/store";
import dayjs from "dayjs";

export const ProfileTable = () => {
    const user = useAppSelector(state => state.user.user);

    return (
        <table className="bg-primary/10 rounded">
            <tbody>
                <TableRow>
                    <TableData>Name: </TableData>
                    <TableData>{user?.displayName}</TableData>
                </TableRow>
                <TableRow>
                    <TableData>Username: </TableData>
                    <TableData>{user?.username}</TableData>
                </TableRow>
                <TableRow>
                    <TableData>Account created at: </TableData>
                    <TableData>{dayjs(user?.createdAt).format("YYYY.MM.DD. HH:mm:ss")}</TableData>
                </TableRow>
                <TableRow>
                    <TableData>ID: </TableData>
                    <TableData>{user?.id}</TableData>
                </TableRow>
            </tbody>
        </table>
    );
};

const TableRow = ({ children }: PropsWithChildren) => <tr className="even:bg-primary/10">{children}</tr>;

const TableData = ({ children }: PropsWithChildren) => <td className="p-2">{children}</td>;

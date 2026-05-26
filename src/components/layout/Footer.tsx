import { FaGithub } from "react-icons/fa6";
import { Container } from "./Container";
import { useAppSelector } from "@/redux/store";
import { Link } from "react-router-dom";

export const Footer = () => {
    const currentYear = new Date().getFullYear();
    const appVersion: string | undefined = import.meta.env.VITE_APP_VERSION;
    const backendVersion: string | undefined = useAppSelector(state => state.backend.info?.build.version);

    return (
        <div className="bg-surface p-2 py-4">
            <Container>
                <div className="text-foreground/60 flex items-center justify-between gap-4">
                    <div className="flex flex-col text-xs">
                        <p>FE: {appVersion ? `v${appVersion}` : "unknown"}</p>
                        <p>BE: {backendVersion ? `v${backendVersion}` : "unknown"}</p>
                    </div>
                    <div className="flex gap-4">
                        <p className="text-center text-sm">
                            &copy; {currentYear + " "}
                            <Link to="/">FrameShelf</Link>. All rights reserved.
                        </p>
                    </div>
                    <div>
                        <Link
                            className="text-xl"
                            target="_blank"
                            to="https://github.com/SabianRobi/FrameShelf-Frontend"
                        >
                            <FaGithub />
                        </Link>
                    </div>
                </div>
            </Container>
        </div>
    );
};

import { FaGithub } from "react-icons/fa6";
import { Container } from "./Container";
import { useAppSelector } from '@/redux/store';
import { Link } from 'react-router-dom';

export const Footer = () => {
    const currentYear = new Date().getFullYear();
    const appVersion: string | undefined = import.meta.env.VITE_APP_VERSION;
    const backendVersion: string | undefined = useAppSelector((state) => state.backend.info?.build.version);

    return (
        <div className="bg-surface p-2 py-4">
            <Container>
                <div className="flex items-center justify-between gap-4 text-foreground/60">
                    <div className="flex flex-col text-xs">
                        <p>FE: { appVersion ? `v${appVersion}` : "unknown" }</p>
                        <p>BE: { backendVersion ? `v${backendVersion}` : "unknown" }</p>
                    </div>
                    <div className="flex gap-4">
                        <p className="text-sm text-center">
                            &copy; { currentYear + " " }
                            <Link to="/" >
                                FrameShelf
                            </Link>
                            . All rights reserved.
                        </p>
                    </div>
                    <div>
                        <Link to="https://github.com/SabianRobi/FrameShelf-Frontend" target="_blank" className="text-xl">
                            <FaGithub />
                        </Link>
                    </div>
                </div >
            </Container >
        </div >
    );
};

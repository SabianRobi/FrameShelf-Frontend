import { FaGithub } from "react-icons/fa6";
import { Container } from "./Container.tsx";

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className="bg-surface p-2 py-4">
            <Container>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-foreground/60">
                    <p className="text-sm text-center">
                        &copy; {currentYear} <a href="/">
                            FrameShelf
                        </a>. All rights reserved.
                    </p>

                    <a href="https://github.com/SabianRobi/FrameShelf-Frontend" target="_blank" className="text-xl">
                        <FaGithub />
                    </a>
                </div>
            </Container>
        </div>
    );
}

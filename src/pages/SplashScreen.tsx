import { cn } from "@/lib/cn";
import { useEffect, useState } from 'react';

type SplashScreenProps = {
    visible: boolean;
};

export const SplashScreen = ({ visible }: SplashScreenProps) => {
    const [ currentQuote, setCurrentQuote ] = useState("");

    const quotes = [
        "Netflix forgot what you watched. FrameShelf didn't.",
        "Clean UI. Dirty movie opinions.",
        "Your watchlist. Finally not held together by screenshots.",
        "Track movies. Judge taste. Pretend it's productivity.",
        "Helping humanity remember what Ryan Gosling was in again.",
        "Less scrolling. More watching. Slightly fewer bad decisions.",
        "Track films faster than studios reboot franchises.",
        "Built with caffeine, APIs, and questionable sleep schedules.",
        "The place where unfinished watchlists come to die.",
        "Because your memory is as bad as mine."
    ];

    useEffect(() => {
        setCurrentQuote(quotes[ Math.floor(Math.random() * quotes.length) ]);
    }, []);

    return (
        <div className={ cn("fixed inset-0 flex justify-center items-center bg-background transition-opacity duration-300", visible ? "opacity-100" : "opacity-0 pointer-events-none") }>
            <div className="animate-pulse flex flex-col justify-center items-center gap-4">
                <p className="text-5xl font-bold">
                    FrameShelf
                </p>

                <p className="text-lg italic text-muted-foreground animate-fade-in">
                    { currentQuote }
                </p>
            </div>
        </div>
    );
};

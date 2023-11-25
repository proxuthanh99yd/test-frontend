import { FC, useState } from "react";

interface ScrollButtonProps {}

export const ScrollButton: FC<ScrollButtonProps> = () => {
    const [visible, setVisible] = useState<boolean>(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 200) {
            setVisible(true);
        } else if (scrolled <= 200) {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
            /* you can also use 'auto' behaviour 
         in place of 'smooth' */
        });
    };

    window.addEventListener("scroll", toggleVisible);

    return (
        <button
            className="scroll-button"
            onClick={scrollToTop}
            style={{ display: visible ? "inline" : "none" }}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 15.75l7.5-7.5 7.5 7.5"
                />
            </svg>
        </button>
    );
};

import { FC, ReactNode } from "react";

interface SectionProps {
    className?: string;
    title: string;
    subTitle: string;
    content: ReactNode;
}

export const Section: FC<SectionProps> = ({
    className,
    title,
    subTitle,
    content,
}) => {
    return (
        <section className={`${className} section`}>
            <h2>{title}</h2>
            <p>{subTitle}</p>
            {content}
        </section>
    );
};

import { FC } from "react";

interface Article {
    id: string;
    image: string;
    date: string;
    title: string;
    content: string;
}

const articles: Article[] = [
    {
        id: "e1452671-7957-5e1d-8f36-7b25b42456f4",
        image: "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/photo-1469920783271-4ee08a94d42d-960x636.jpg",
        date: "DECEMBER 10, 2016",
        title: "Memorial Day to Someone Told Me to Travel",
        content:
            "Meh synth Schlitz, tempor duis single-origin coffee next level ethnic fingerstache...",
    },
    {
        id: "db8622e3-0c64-5058-917e-752c1781731c",
        image: "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-212388-960x636.jpeg",
        date: "DECEMBER 10, 2016",
        title: "7 Tips For Nomads On A Budget Trips",
        content:
            "Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache...",
    },
    {
        id: "56d8e7cd-fe5e-5f58-a18e-2c2f5e076f1a",
        image: "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-24484-960x636.jpg",
        date: "DECEMBER 10, 2016",
        title: "Taking A Travel Blog Victory Lap",
        content:
            "Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache...",
    },
];

interface ArticleItemsProps {}

export const ArticleItems: FC<ArticleItemsProps> = () => {
    return (
        <div className="article-items container">
            {articles.map((article) => {
                return (
                    <a key={article.id} href="#!" className="article-wrapper">
                        <div className="image">
                            <img src={article.image} alt="" />
                        </div>
                        <div className="content-wrapper">
                            <a className="date">{article.date}</a>
                            <a className="title">{article.title}</a>
                            <p className="content">{article.content}</p>
                            <a href="#!" className="read-more">
                                Read More{" "}
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
                                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                    />
                                </svg>
                            </a>
                        </div>
                    </a>
                );
            })}
        </div>
    );
};

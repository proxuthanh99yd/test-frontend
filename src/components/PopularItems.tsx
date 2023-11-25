import { FC } from "react";

interface Popular {
    id: string;
    name: string;
    image: string;
}

const populars: Popular[] = [
    {
        id: "c5cb0849-e724-51f0-9c92-d0178b9c774b",
        name: "Tokyo",
        image: "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Tokyo_Dollarphotoclub_72848283-copy-700x466.jpg",
    },
    {
        id: "5cd17ac1-db19-5df7-8ac1-70b0977c35f2",
        name: "Seoul",
        image: "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/bf1202aedf2c5b6a57d379575619a488-700x466.jpg",
    },
    {
        id: "42e8855b-8106-55ec-bec7-96f0870ee7cc",
        name: "Paris",
        image: "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/1600x1200-4-700x466.jpg",
    },
    {
        id: "5755ea78-0db5-53f4-8f6c-77d27d1c38fd",
        name: "London",
        image: "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-1-700x466.jpg",
    },
];

interface PopularItemsProps {}

export const PopularItems: FC<PopularItemsProps> = () => {
    return (
        <div className="popular-items container">
            {populars.map((popular) => {
                return (
                    <a key={popular.id} href="#!">
                        <img src={popular.image} alt="" />
                        <h5>{popular.name}</h5>
                    </a>
                );
            })}
        </div>
    );
};

import { FC } from "react";
const usDollar = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
});

const timeSince = (date: Date): string => {
    const seconds = Math.floor((Date.now() - date.getTime()) / 1000);

    let interval = seconds / 31536000;

    if (interval > 1) {
        return Math.floor(interval) + " years";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
        return Math.floor(interval) + " months";
    }
    interval = seconds / 86400;
    if (interval > 1) {
        return Math.floor(interval) + " days";
    }
    interval = seconds / 3600;
    if (interval > 1) {
        return Math.floor(interval) + " hours";
    }
    interval = seconds / 60;
    if (interval > 1) {
        return Math.floor(interval) + " minutes";
    }
    return Math.floor(seconds) + " seconds";
};

interface ValueTripItemsProps {}
const discountCalculate = (price: number, discount: number): string => {
    return usDollar.format(price - (price * discount) / 100);
};
interface ValueTrip {
    id: string;
    name: string;
    location: string;
    stars: number;
    reviews: number;
    time: Date;
    price: number;
    discount: number;
    image: string;
}

const valueTrip: ValueTrip[] = [
    {
        id: "09cbbecb-36e6-5c19-b356-0b58c97cc564",
        name: "French Autumn",
        location: "City Tours, Urban",
        stars: 4,
        reviews: 4,
        time: new Date("2023-11-23"),
        price: 5000,
        discount: 0,
        image: "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-211051-700x466.jpeg",
    },
    {
        id: "dc2ce5fd-9e64-56c1-9725-7709145f92bb",
        name: "Grand Switzerland",
        location: "Shopping, Mountain, Snow & Ice",
        stars: 5,
        reviews: 4,
        time: new Date("2023-11-20"),
        price: 6000,
        discount: 0,
        image: "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-197657-700x466.jpeg",
    },
    {
        id: "af03b6ba-2503-57d4-88b3-aab561450f42",
        name: "Discover Japan",
        location: "City Tours, Iconic",
        stars: 3,
        reviews: 6,
        time: new Date("2023-11-24"),
        price: 3000,
        discount: 16,
        image: "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-96420-700x466.jpeg",
    },
];

export const ValueTripItems: FC<ValueTripItemsProps> = () => {
    return (
        <div className="value-trips container">
            {valueTrip.map((trip) => {
                return (
                    <a key={trip.id} href="#!" className="value-trip-item">
                        <div className="image">
                            <img src={trip.image} alt="" />
                            <div className="price">
                                {trip.discount > 0 && (
                                    <span className="origin-price">
                                        {usDollar.format(trip.price)}
                                    </span>
                                )}
                                <span className="discount-price">
                                    {discountCalculate(
                                        trip.price,
                                        trip.discount
                                    )}
                                </span>
                            </div>
                            {trip.discount > 0 && (
                                <div className="discount-label">Sale</div>
                            )}
                        </div>
                        <div className="content">
                            <p className="name">{trip.name}</p>
                            <span className="location">{trip.location}</span>
                            <div className="content-bottom">
                                <div className="rating">
                                    <span className="stars">
                                        {Array.from({ length: 5 }, (_, i) => {
                                            if (i < trip.stars) {
                                                return (
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth={1.5}
                                                        stroke="currentColor"
                                                        className="green-star"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                                        />
                                                    </svg>
                                                );
                                            } else {
                                                return (
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth={1.5}
                                                        stroke="currentColor"
                                                        className="gray-star"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                                        />
                                                    </svg>
                                                );
                                            }
                                        })}
                                    </span>
                                    <span className="reviews">
                                        {trip.reviews} reviews
                                    </span>
                                </div>
                                <span className="time">
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
                                            d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                    {timeSince(trip.time)}
                                </span>
                            </div>
                        </div>
                    </a>
                );
            })}
        </div>
    );
};

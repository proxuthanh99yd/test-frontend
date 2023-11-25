import { FC, useState } from "react";

interface HeroBackgroundProps {
    className?: string;
    ytLink: string;
}

const getIdYt = (url: string): string | null => {
    const regExp =
        /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);

    return match && match[2].length === 11 ? match[2] : null;
};
export const HeroBackground: FC<HeroBackgroundProps> = ({
    className,
    ytLink,
}) => {
    const [showAdvSearch, setShowAdvSearch] = useState(false);
    return (
        <>
            <div className={`${className} video-background`}>
                <div className="video-foreground">
                    <iframe
                        src={`https://www.youtube.com/embed/${getIdYt(
                            ytLink
                        )}?controls=0&autoplay=1&mute=1&playsinline=1&loop=10`}
                        allow="autoplay; fullscreen; picture-in-picture"
                    ></iframe>
                </div>
            </div>
            <form action="" className="hero-form ">
                <div className="form-group container">
                    <div className="form-input">
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Destination, city"
                        />
                        <span className="icon">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                                />
                            </svg>
                        </span>
                    </div>
                    <div className="form-input">
                        <select className="form-control">
                            <option value="">Any Month</option>
                            <option value="january">January</option>
                            <option value="february">February</option>
                            <option value="march">March</option>
                            <option value="april">April</option>
                            <option value="may">May</option>
                            <option value="june">June</option>
                            <option value="july">July</option>
                            <option value="august">August</option>
                            <option value="september">September</option>
                            <option value="october">October</option>
                            <option value="november">November</option>
                            <option value="december">December</option>
                        </select>
                        <span className="icon">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                                />
                            </svg>
                        </span>
                    </div>
                    <div className="form-input">
                        <select className="form-control">
                            <option value="date">Sort By Date</option>
                            <option value="price_low">Price Low to High</option>
                            <option value="price_high">
                                Price High to Low
                            </option>
                            <option value="name">Sort By Name</option>
                            <option value="popular">Sort By Popularity</option>
                            <option value="review">Sort By Review Score</option>
                        </select>
                        <span className="icon">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                                />
                            </svg>
                        </span>
                    </div>
                    <div className="form-input">
                        <input
                            className="form-control"
                            type="submit"
                            value="Search"
                        />
                    </div>
                </div>
                {showAdvSearch && (
                    <div className="form-group container second">
                        <div className="form-input">
                            <select className="form-control">
                                <option value="">All Categories</option>
                                <option value="mountain">Mountain</option>
                                <option value="rural">Rural</option>
                                <option value="snow-ice">Snow &amp; Ice</option>
                                <option value="wildlife">Wildlife</option>
                            </select>
                            <span className="icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                    />
                                </svg>
                            </span>
                        </div>
                        <div className="form-input">
                            <select className="form-control">
                                <option value="">Any Destinations</option>
                                <option value="277">Tokyo</option>
                                <option value="278">Seoul</option>
                                <option value="279">Paris</option>
                                <option value="284">London</option>
                                <option value="285">Venice</option>
                                <option value="287">Miami</option>
                                <option value="289">Rome</option>
                                <option value="270">Prague</option>
                                <option value="291">California</option>
                                <option value="292">Kyoto</option>
                                <option value="293">Hong Kong</option>
                                <option value="294">Santorini</option>
                            </select>
                            <span className="icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                    />
                                </svg>
                            </span>
                        </div>
                        <div className="form-input">
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Max budget ex. 500"
                            />
                            <span className="icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </span>
                        </div>
                    </div>
                )}

                <div className="adv-search container">
                    <button
                        onClick={() => setShowAdvSearch((curr) => !curr)}
                        type="button"
                    >
                        {!showAdvSearch ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                />
                            </svg>
                        ) : (
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
                        )}
                        Advanced Search
                    </button>
                </div>
            </form>
        </>
    );
};

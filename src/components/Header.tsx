import { FC, useEffect, useRef, useState } from "react";
interface NavbarInterface {
    id: string;
    name: string;
    link: string;
    child?: NavbarInterface[];
}

const menu: NavbarInterface[] = [
    {
        id: "a1728597-b590-5776-948a-20daa7b46833",
        name: "Home",
        link: "",
        child: [
            {
                id: "cec10501-333c-557d-929e-6b3126f10082",
                name: "Home 1 - Background Image",
                link: "",
            },
            {
                id: "7f47420c-55f2-5fa8-b5f7-17361f55e186",
                name: "Home 2 - Youtube Video",
                link: "",
            },
            {
                id: "c220d6bd-0fca-5882-9464-bf405f0d8a62",
                name: "Home 3 – Google Inspired",
                link: "",
            },
            {
                id: "037c6227-1b02-5d3e-a5a2-19f586098086",
                name: "Home 4 – Travel Site",
                link: "",
            },
        ],
    },
    {
        id: "b0132407-2e38-524f-b6ae-7e99f2fd6b67",
        name: "Tours",
        link: "",
        child: [
            {
                id: "21a5f4f6-dd81-5b33-a15e-b4565928727c",
                name: "Tours Classic Fullwidth",
                link: "",
                child: [
                    {
                        id: "57318b33-51d2-5dc1-a590-69ff9b6ba6f9",
                        name: "2 columns",
                        link: "",
                    },
                ],
            },
            {
                id: "b0d8aa7e-4156-5e8e-9c16-958dcc76e460",
                name: "Tour Classic Sidebar",
                link: "",
                child: [
                    {
                        id: "6d255bff-4d0d-5141-856d-38bf94d82a5b",
                        name: "2 columns",
                        link: "",
                    },
                ],
            },
            {
                id: "f7f12849-6e03-5fa4-9d8d-86836f119d69",
                name: "Tour Grid Fullwidth",
                link: "",
                child: [
                    {
                        id: "85b3fd2a-ccca-54ef-a17a-24e842853337",
                        name: "2 columns",
                        link: "",
                    },
                ],
            },
            {
                id: "73c52919-2dc0-5249-b55b-9ffa0e9b2f38",
                name: "Tour Grid Sidebar",
                link: "",
                child: [
                    {
                        id: "416353c5-c856-5235-ad7d-df398fd12727",
                        name: "2 columns",
                        link: "",
                    },
                ],
            },
            {
                id: "97b059a1-922a-53ad-a22f-d9af8b0e2a3d",
                name: "Tour List Sidebar",
                link: "",
                child: [
                    {
                        id: "0b7db9bf-c7c1-52d3-8bc4-4e7237baa79d",
                        name: "2 columns",
                        link: "",
                    },
                ],
            },
            {
                id: "65005306-5f68-53a9-8444-f13453794d49",
                name: "Tour Header Type",
                link: "",
                child: [
                    {
                        id: "baedbe41-b014-5914-a3e9-ca075eab46dd",
                        name: "2 columns",
                        link: "",
                    },
                ],
            },
            {
                id: "0049cb01-d2a6-5cb2-89ef-d7f5cd332348",
                name: "Tour Categories",
                link: "",
                child: [
                    {
                        id: "c4ba6dfc-60b0-5085-9744-8d48079c22e0",
                        name: "2 columns",
                        link: "",
                    },
                ],
            },
        ],
    },
    {
        id: "cf2cc1f2-72ed-5436-a119-28da5b1bd775",
        name: "Booking",
        link: "",
        child: [
            {
                id: "cfbb9b64-9638-5103-a6c5-b60fb9b4da9f",
                name: "Online Payment for Booking",
                link: "",
                child: [
                    {
                        id: "08ecd394-e620-582e-ac11-942aea511238",
                        name: "2 columns",
                        link: "",
                    },
                ],
            },
            {
                id: "fbec31c9-ebaa-5aef-84c9-0ca53f154dde",
                name: "Custom Booking Form",
                link: "",
                child: [
                    {
                        id: "01313ac3-47b5-5a4b-a79f-1af7a089f5ca",
                        name: "2 columns",
                        link: "",
                    },
                ],
            },
            {
                id: "757fdbc2-a488-5067-a2b4-33807134c344",
                name: "Tour Durations",
                link: "",
                child: [
                    {
                        id: "590d2ba0-4282-5f27-b11f-f5559621781c",
                        name: "2 columns",
                        link: "",
                    },
                ],
            },
            {
                id: "b11a8b4b-be46-52b6-80d1-a84fe16145d8",
                name: "Custom Booking URL for Affiliate Tour",
                link: "",
            },
            {
                id: "975b90ef-6bf7-5094-b883-92aae8ffa51b",
                name: "Custom Booking using custom HTML & Shortcode",
                link: "",
            },
            {
                id: "d0c86710-78e9-5a46-92b7-33f97ee88ef5",
                name: "Header Options",
                link: "",
                child: [
                    {
                        id: "27a7fe19-49f9-5aad-899d-8f2ec59f41be",
                        name: "2 columns",
                        link: "",
                    },
                ],
            },
            {
                id: "03a57174-a56e-5d00-adcd-edea17df9069",
                name: "Layout Options",
                link: "",
                child: [
                    {
                        id: "48958b5e-85fb-5e45-93eb-74c9628fda77",
                        name: "2 columns",
                        link: "",
                    },
                ],
            },
        ],
    },
    {
        id: "2dcdbd39-bf37-5cbd-9a6e-c743682c441c",
        name: "Destinations",
        link: "",
        child: [
            {
                id: "18e77c31-8024-53fe-884b-de8c6fd1cb9f",
                name: "Destination Fullwidth",
                link: "",
            },
            {
                id: "23241f07-6231-5cc5-b93b-c04d9c0322a6",
                name: "Destination + Video Header",
                link: "",
            },
            {
                id: "9ff4944e-ad3d-5ba0-9877-dca9587b3d06",
                name: "Destination Right Sidebar",
                link: "",
            },
            {
                id: "2bfd3b3c-ad3b-5dda-b71b-5e328c2d223f",
                name: "Destination Left Sidebar",
                link: "",
            },
            {
                id: "94134861-e79f-5b5d-83e1-d33b101b60f8",
                name: "Single Destination",
                link: "",
            },
            {
                id: "4d9166a0-4924-550f-99c5-a0f44b2808c6",
                name: "Single Destination + Video",
                link: "",
            },
        ],
    },
    {
        id: "d0ccfa54-e84b-56ff-a9a1-ca06c4040187",
        name: "Pages",
        link: "",
        child: [
            {
                id: "875a8586-e6e1-5303-956e-34d5477c922c",
                name: "About Us",
                link: "",
            },
            {
                id: "987815af-a01f-51fe-a9dc-defda39c1907",
                name: "Contact Us",
                link: "",
            },
            {
                id: "dab9b9e1-ec98-59f6-9107-88a2b9cceacc",
                name: "FAQs",
                link: "",
            },
            {
                id: "13f853f1-76a4-51bf-b29d-3e720add3cc8",
                name: "Gallery",
                link: "",
            },
            {
                id: "194d0db7-8dfb-5af9-bb71-1b092c6e4ae0",
                name: "Page Fullwidth",
                link: "",
            },
            {
                id: "484b720d-5a40-53ea-8a8b-6b8b0f28fb10",
                name: "Page + Video Background Header",
                link: "",
            },
            {
                id: "daca2db7-3a42-5c1e-9f0c-79eeab2a8fce",
                name: "Page Right Sidebar",
                link: "",
            },
            {
                id: "8905cd90-5b81-526e-996c-633db785795d",
                name: "Page Left Sidebar",
                link: "",
            },
        ],
    },
    {
        id: "97651044-b9b6-5163-866f-02c613dada04",
        name: "Blog",
        link: "",
        child: [
            {
                id: "458c9817-1a75-5c1d-861b-b0fa77e48905",
                name: "Blog Right Sidebar",
                link: "",
            },
            {
                id: "265d046e-835d-52eb-a83b-2a28e126c7d6",
                name: "Blog Left Sidebar",
                link: "",
            },
            {
                id: "8cdb0f6e-453a-52ce-9bc7-3a7841c4fcf9",
                name: "Blog Fullwidth",
                link: "",
            },
            {
                id: "d20f88e4-c1d6-587b-9e8f-8ab4b0082d33",
                name: "Blog Grid Right Sidebar",
                link: "",
            },
            {
                id: "0509930a-18a2-563b-987e-2bcab6d4cfe3",
                name: "Blog Grid Left Sidebar",
                link: "",
            },
            {
                id: "d498c533-0692-5c70-9c39-0e3d1ecd8fee",
                name: "Blog Grid Fullwidth",
                link: "",
            },
            {
                id: "dfe2e530-91af-5f66-aa81-9c515bad955a",
                name: "Blog Full + Grid Right Sidebar",
                link: "",
            },
            {
                id: "a17ef2e8-a116-580e-a94d-ace391d537c1",
                name: "Blog Full + Grid Left Sidebar",
                link: "",
            },
            {
                id: "4f2339dd-cd9e-55e2-817f-92c6caed2c8c",
                name: "Blog Full + Grid Fullwidth",
                link: "",
            },
        ],
    },
    {
        id: "1ef3cdca-9ab0-5344-82de-10f900f7684b",
        name: "Shortcodes",
        link: "",
        child: [
            {
                id: "00979106-9b59-5f92-b603-89194c023769",
                name: "Accordion & Toggles",
                link: "",
            },
            {
                id: "c3967af6-d52a-53f8-b8c2-ea6c168703c7",
                name: "Alert Boxes",
                link: "",
            },
            {
                id: "767c45a0-db4f-505c-b250-e95e7254a512",
                name: "Animated Content",
                link: "",
            },
            {
                id: "0a85ca84-097b-5f1c-819d-c63fe90c0981",
                name: "Buttons & Social Icons",
                link: "",
            },
            {
                id: "411a4c51-5fdc-5ab5-a25d-ee041c88f352",
                name: "Columns",
                link: "",
            },
            {
                id: "26500dfd-d0d0-54e9-a9e6-c4d8cdea21d1",
                name: "Google Maps",
                link: "",
            },
            {
                id: "db89f74b-8d0e-5d0d-974f-64308652a676",
                name: "Image Frame & Animation",
                link: "",
            },
            {
                id: "a62ca183-dfd0-5939-a30b-f9866791db7a",
                name: "Image Teasers",
                link: "",
            },
            {
                id: "250ec774-acb1-5a52-b27c-5f2500715068",
                name: "Pricing Tables",
                link: "",
            },
            {
                id: "bce9e4df-905a-51c9-b726-c0bccab0058d",
                name: "Tabs",
                link: "",
            },
        ],
    },
    {
        id: "f06c39f6-9352-5484-9ea4-2388609bc27d",
        name: "Shop",
        link: "",
        child: [
            {
                id: "230a4a2d-5db6-55ea-b3ed-2318ea6fafee",
                name: "Shop Fullwidth",
                link: "",
            },
            {
                id: "290bcd4d-6ce3-51b0-8bde-76d739a8eb99",
                name: "Shop Sidebar",
                link: "",
            },
            {
                id: "b1f1f912-b204-5d94-9532-4b6871ca7666",
                name: "Single Product Fullwidth",
                link: "",
            },
            {
                id: "5203c894-92ad-5b12-a6f6-8355bdd86dc5",
                name: "Single Product With Sidebar",
                link: "",
            },
        ],
    },
];

interface headerProps {}

export const Header: FC<headerProps> = () => {
    const [scroll, setScroll] = useState<boolean>(true);
    const scrollPreviousRef = useRef<number>(0);
    const scrollCurrentRef = useRef<number>(0);
    const [menuToggle, setMenuToggle] = useState<boolean>(false);
    const [scrollTop, setScrollTop] = useState<number>(0);
    useEffect(() => {
        const handleScroll = () => {
            if (
                scrollPreviousRef.current < scrollCurrentRef.current &&
                window.scrollY > 70
            ) {
                setScroll(false);
            } else {
                setScroll(true);
            }
            scrollPreviousRef.current = scrollCurrentRef.current;
            scrollCurrentRef.current = window.scrollY;
            setScrollTop(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    const handleMenuToggle = (value: boolean) => {
        setMenuToggle(value);
        if (value) {
            document.body.classList.add("hide-scrollbar");
        } else {
            document.body.classList.remove("hide-scrollbar");
        }
    };
    return (
        <>
            <header
                className={`header-wrapper ${
                    scroll
                        ? scrollTop < 200
                            ? "scroll-up"
                            : "bg-white scroll-up"
                        : "scroll-down"
                }`}
            >
                <div className="container header-inner">
                    <div className="logo-wrapper">
                        {scroll && scrollTop < 200 ? (
                            <img
                                src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/themes/grandtour/images/logo@2x_white.png"
                                alt=""
                            />
                        ) : (
                            <img
                                src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/themes/grandtour/images/logo@2x.png"
                                alt=""
                            />
                        )}
                    </div>
                    <nav className="menu-wrapper">
                        <ul className="menu-inner">
                            {menu.map((item) => {
                                return (
                                    <li
                                        key={item.id}
                                        className={`menu-item ${
                                            scroll && scrollTop < 200
                                                ? "text-white"
                                                : ""
                                        }`}
                                    >
                                        <a href="#!">
                                            {item.name}{" "}
                                            {item?.child &&
                                                item.child.length > 0 && (
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth={1.5}
                                                        stroke="currentColor"
                                                        className="icon-chevron-down"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                                        />
                                                    </svg>
                                                )}
                                        </a>
                                        <ul className="sub-menu-inner">
                                            {item?.child &&
                                                item.child.length > 0 &&
                                                item.child.map((parentItem) => {
                                                    return (
                                                        <li
                                                            key={parentItem.id}
                                                            className="sub-menu-item"
                                                        >
                                                            <a href="#!">
                                                                {
                                                                    parentItem.name
                                                                }
                                                                {parentItem?.child &&
                                                                    parentItem
                                                                        .child
                                                                        .length >
                                                                        0 && (
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            fill="none"
                                                                            viewBox="0 0 24 24"
                                                                            strokeWidth={
                                                                                1.5
                                                                            }
                                                                            stroke="currentColor"
                                                                            className="icon-chevron-right"
                                                                        >
                                                                            <path
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                                d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                                                            />
                                                                        </svg>
                                                                    )}
                                                            </a>
                                                            <ul className="sub-menu-child-inner">
                                                                {parentItem?.child &&
                                                                    parentItem
                                                                        .child
                                                                        .length >
                                                                        0 &&
                                                                    parentItem.child.map(
                                                                        (
                                                                            childItem
                                                                        ) => {
                                                                            return (
                                                                                <li
                                                                                    className="sub-menu-child-item"
                                                                                    key={
                                                                                        childItem.id
                                                                                    }
                                                                                >
                                                                                    <a href="#!">
                                                                                        {
                                                                                            childItem.name
                                                                                        }
                                                                                    </a>
                                                                                </li>
                                                                            );
                                                                        }
                                                                    )}
                                                            </ul>
                                                        </li>
                                                    );
                                                })}
                                        </ul>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                    <button
                        onClick={() => handleMenuToggle(true)}
                        className={`icon-menu-mobile ${
                            scroll && scrollTop < 200 ? "text-white" : ""
                        }`}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className=""
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                            />
                        </svg>
                    </button>
                    <div
                        className={`cart-wrapper ${
                            scroll && scrollTop < 200 ? "text-white" : ""
                        }`}
                        cart-qty="10"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="icon-cart"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                            />
                        </svg>
                    </div>
                </div>
            </header>
            <div
                onClick={() => handleMenuToggle(false)}
                className={`menu-mobile-overlay ${!menuToggle ? "hidden" : ""}`}
            ></div>
            <div className={`menu-mobile ${!menuToggle ? "hidden" : ""}`}>
                <button
                    onClick={() => handleMenuToggle(false)}
                    className="btn-close"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className=""
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
                <ul className="menu-mobile-inner">
                    {menu.map((item) => {
                        return (
                            <li key={item.id} className="menu-mobile-item">
                                <a href="#!">{item.name}</a>
                            </li>
                        );
                    })}
                </ul>
                <ul className="sidebar-wrapper">
                    <li className="sidebar-item">
                        <a>
                            <img
                                src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-131729-700x466.jpeg"
                                alt=""
                            />
                            <span className="tour-price">$3,900</span>
                            <div className="portfolio-info">
                                <h5>Swiss Alps Trip</h5>
                                <span>
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
                                            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                        />
                                    </svg>
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
                                            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                        />
                                    </svg>
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
                                            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                        />
                                    </svg>
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
                                            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                        />
                                    </svg>
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
                                            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                        />
                                    </svg>
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
                                            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                        />
                                    </svg>
                                </span>
                            </div>
                        </a>
                    </li>
                    <li className="sidebar-item">
                        <a>
                            <img
                                src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-225630-700x466.jpeg"
                                alt=""
                            />
                            <span className="tour-price">
                                <span className="price">$4,900</span>
                                <span className="price-discount">$4,200</span>
                            </span>
                            <div className="portfolio-info">
                                <h5>5 Lake of Fuji San</h5>
                                <span>
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
                                            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                        />
                                    </svg>
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
                                            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                        />
                                    </svg>
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
                                            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                        />
                                    </svg>
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
                                            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                        />
                                    </svg>
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
                                            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                        />
                                    </svg>
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
                                            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                        />
                                    </svg>
                                </span>
                            </div>
                        </a>
                    </li>
                </ul>
                <ul className="social-wrapper">
                    <li className="social-item">
                        <a href="#!">
                            <svg
                                fill="#000000"
                                version="1.1"
                                id="Capa_1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                width="64px"
                                height="64px"
                                viewBox="0 0 60.734 60.733"
                                xmlSpace="preserve"
                            >
                                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                <g
                                    id="SVGRepo_tracerCarrier"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <g id="SVGRepo_iconCarrier">
                                    {" "}
                                    <g>
                                        {" "}
                                        <path d="M57.378,0.001H3.352C1.502,0.001,0,1.5,0,3.353v54.026c0,1.853,1.502,3.354,3.352,3.354h29.086V37.214h-7.914v-9.167h7.914 v-6.76c0-7.843,4.789-12.116,11.787-12.116c3.355,0,6.232,0.251,7.071,0.36v8.198l-4.854,0.002c-3.805,0-4.539,1.809-4.539,4.462 v5.851h9.078l-1.187,9.166h-7.892v23.52h15.475c1.852,0,3.355-1.503,3.355-3.351V3.351C60.731,1.5,59.23,0.001,57.378,0.001z" />{" "}
                                    </g>{" "}
                                </g>
                            </svg>
                        </a>
                    </li>
                    <li className="social-item">
                        <a href="#!">
                            <svg
                                width="64px"
                                height="64px"
                                viewBox="0 -2 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M10.29 7377c7.547 0 11.675-6.156 11.675-11.495 0-.175 0-.349-.012-.522A8.265 8.265 0 0024 7362.89a8.273 8.273 0 01-2.356.637 4.07 4.07 0 001.804-2.235 8.303 8.303 0 01-2.606.98 4.153 4.153 0 00-5.806-.175 4.006 4.006 0 00-1.187 3.86 11.717 11.717 0 01-8.457-4.22 4.005 4.005 0 001.271 5.392 4.122 4.122 0 01-1.863-.505v.051c.001 1.923 1.378 3.579 3.292 3.96a4.144 4.144 0 01-1.852.069c.537 1.646 2.078 2.773 3.833 2.806A8.315 8.315 0 014 7375.185a11.754 11.754 0 006.29 1.812"
                                    transform="translate(-60 -7521) translate(56 160)"
                                    stroke="none"
                                    strokeWidth={1}
                                    fillRule="evenodd"
                                />
                            </svg>
                        </a>
                    </li>
                    <li className="social-item">
                        <a href="#!">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="64px"
                                height="64px"
                                viewBox="0 0 512 512"
                            >
                                <path d="M34.354.5h45.959l29.604 91.096h2.863L141.013.5h46.353l-53.107 133.338v94.589H88.641V138.08L34.354.5zm157.839 98.157c0-13.374 5.495-24.003 16.493-31.938 10.984-7.934 25.749-11.901 44.3-11.901 16.893 0 30.728 4.192 41.506 12.55 10.805 8.358 16.193 19.112 16.193 32.287v89.2c0 14.771-5.301 26.373-15.868 34.782-10.579 8.408-25.151 12.625-43.684 12.625-17.859 0-32.143-4.342-42.866-13.024-10.709-8.683-16.074-20.36-16.074-35.057V98.657zm42.012 92.767c0 4.766 1.44 8.409 4.354 11.029 2.907 2.595 7.055 3.867 12.451 3.867 5.532 0 9.93-1.297 13.18-3.942 3.256-2.669 4.891-6.313 4.891-10.954V97.359c0-3.768-1.672-6.812-4.99-9.132-3.318-2.321-7.679-3.494-13.081-3.494-4.972 0-9.027 1.173-12.133 3.494-3.119 2.32-4.672 5.364-4.672 9.132v94.065zM459.992 57.588v172.711h-40.883v-19.063c-7.547 7.037-15.381 12.375-23.541 16.069-8.146 3.643-16.068 5.489-23.729 5.489-9.455 0-16.592-2.57-21.383-7.71-4.791-5.141-7.186-12.85-7.186-23.13V57.588h40.895v132.39c0 4.117.861 7.061 2.57 8.907 1.723 1.822 4.492 2.745 8.322 2.745 3.018 0 6.824-1.223 11.4-3.643 4.604-2.42 8.82-5.514 12.65-9.282V57.588h40.885zM421.68 363.262c-2.008-2.221-5.203-3.368-9.594-3.368-4.59 0-7.883 1.147-9.879 3.368-1.996 2.245-2.994 5.963-2.994 11.153v10.754h25.473v-10.754c0-5.19-.998-8.908-3.006-11.153zm-120.825 80.966c2.195.898 4.516 1.322 6.961 1.322 3.543 0 6.113-.849 7.785-2.595 1.67-1.722 2.494-4.591 2.494-8.533v-62.178c0-4.191-1.023-7.36-3.068-9.531-2.059-2.171-5.064-3.244-8.957-3.244-2.059 0-4.092.399-6.102 1.198-2.008.823-3.991 2.096-5.95 3.792v75.402c2.346 2.046 4.628 3.493 6.837 4.367zm189.641-131.641c0-29.941-30.754-54.219-68.654-54.219-54.068-1.822-109.396-2.62-165.842-2.521-56.427-.1-111.756.698-165.843 2.521-37.881 0-68.633 24.277-68.633 54.219-2.277 23.678-3.263 47.381-3.175 71.085-.087 23.703.898 47.406 3.175 71.11 0 29.916 30.752 54.192 68.633 54.192 54.087 1.797 109.416 2.596 165.843 2.521 56.446.075 111.774-.724 165.842-2.521 37.9 0 68.654-24.276 68.654-54.192 2.27-23.704 3.254-47.407 3.154-71.11.1-23.704-.884-47.407-3.154-71.085zM121.251 463.465v1.797H88.778V321.644H55.182V295.497h99.672V321.644h-33.603v141.821zM236.768 341.33v123.932h-28.831v-13.698c-5.327 5.064-10.848 8.882-16.592 11.527-5.757 2.619-11.334 3.942-16.748 3.942-6.662 0-11.684-1.847-15.065-5.515-3.387-3.692-5.078-9.231-5.078-16.617V339.558h28.844v94.988c0 2.92.599 5.065 1.802 6.363 1.217 1.322 3.175 1.971 5.876 1.971 2.127 0 4.803-.873 8.047-2.595 3.231-1.747 6.2-3.967 8.914-6.662V339.558h28.831v1.772zm111.007 29.517v68.74c0 8.808-2.258 15.544-6.773 20.235-4.518 4.641-11.055 6.986-19.588 6.986-5.639 0-10.652-.898-15.07-2.695-4.428-1.821-8.532-4.616-12.325-8.384v9.532h-29.105V295.496h29.105v54.068c3.893-3.793 8.009-6.662 12.376-8.608 4.379-1.971 8.809-2.969 13.273-2.969 9.107 0 16.094 2.645 20.896 7.935 4.803 5.289 7.211 12.999 7.211 23.13v1.795zm106.59 3.793v31.564h-55.152v21.581c0 6.513.947 11.029 2.844 13.549 1.908 2.521 5.152 3.793 9.742 3.793 4.779 0 8.135-1.073 10.043-3.219 1.896-2.121 2.844-6.837 2.844-14.123v-8.607h29.68V430.28c0 12.7-3.605 22.257-10.84 28.694-7.225 6.438-18.016 9.631-32.375 9.631-12.912 0-23.066-3.418-30.49-10.229-7.41-6.812-11.127-16.193-11.127-28.096v-57.411c0-10.754 4.078-19.512 12.213-26.299 8.146-6.762 18.689-10.155 31.588-10.155 13.199 0 23.328 3.144 30.416 9.406 7.061 6.264 10.615 15.296 10.615 27.048v1.771z" />
                            </svg>
                        </a>
                    </li>
                    <li className="social-item">
                        <a href="#!">
                            <svg
                                width="64px"
                                height="64px"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M173.876 7239c-5.477 0-9.876 4.435-9.876 9.959 0 4.1 2.407 7.53 5.893 9.12 0-1.867-.013-1.626 1.41-7.699-.782-1.578-.174-4.183 1.577-4.183 2.43 0 .779 3.603.498 5.02-.249 1.088.581 1.925 1.577 1.925 1.909 0 3.153-2.427 3.153-5.271 0-2.176-1.493-3.767-4.066-3.767-4.575 0-5.735 5.096-4.149 6.695.399.604 0 .632 0 1.423-.277.836-2.49-.38-2.49-3.514 0-2.846 2.324-6.193 7.054-6.193 3.734 0 6.224 2.761 6.224 5.69 0 3.933-2.158 6.779-5.311 6.779-1.079 0-2.075-.586-2.407-1.256-.603 2.346-.725 3.535-1.66 4.854.913.25 1.826.418 2.822.418 5.477 0 9.875-4.435 9.875-9.958-.248-5.607-4.647-10.042-10.124-10.042"
                                    transform="translate(-220 -7399) translate(56 160)"
                                    stroke="none"
                                    strokeWidth={1}
                                    fillRule="evenodd"
                                />
                            </svg>
                        </a>
                    </li>
                    <li className="social-item">
                        <a href="#!">
                            <svg
                                width="64px"
                                height="64px"
                                viewBox="0 0 24 24"
                                fill="#0F0F0F"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g>
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M12 18a6 6 0 100-12 6 6 0 000 12zm0-2a4 4 0 100-8 4 4 0 000 8z"
                                    />
                                    <path d="M18 5a1 1 0 100 2 1 1 0 000-2z" />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M1.654 4.276C1 5.56 1 7.24 1 10.6v2.8c0 3.36 0 5.04.654 6.324a6 6 0 002.622 2.622C5.56 23 7.24 23 10.6 23h2.8c3.36 0 5.04 0 6.324-.654a6 6 0 002.622-2.622C23 18.44 23 16.76 23 13.4v-2.8c0-3.36 0-5.04-.654-6.324a6 6 0 00-2.622-2.622C18.44 1 16.76 1 13.4 1h-2.8c-3.36 0-5.04 0-6.324.654a6 6 0 00-2.622 2.622zM13.4 3h-2.8c-1.713 0-2.878.002-3.778.075-.877.072-1.325.202-1.638.361a4 4 0 00-1.748 1.748c-.16.313-.29.761-.36 1.638C3.001 7.722 3 8.887 3 10.6v2.8c0 1.713.002 2.878.075 3.778.072.877.202 1.325.361 1.638a4 4 0 001.748 1.748c.313.16.761.29 1.638.36.9.074 2.065.076 3.778.076h2.8c1.713 0 2.878-.002 3.778-.075.877-.072 1.325-.202 1.638-.361a4 4 0 001.748-1.748c.16-.313.29-.761.36-1.638.074-.9.076-2.065.076-3.778v-2.8c0-1.713-.002-2.878-.075-3.778-.072-.877-.202-1.325-.361-1.638a4 4 0 00-1.748-1.748c-.313-.16-.761-.29-1.638-.36C16.278 3.001 15.113 3 13.4 3z"
                                    />
                                </g>
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="option-btn">
                <a href="" className="tooltip">
                    <span className="tooltiptext">Choose theme styling</span>
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
                            d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                        />
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                    </svg>
                </a>
                <a
                    href="https://themes.themegoods.com/grandtour/landing/showcase/"
                    className="tooltip"
                    target="_blank"
                >
                    <span className="tooltiptext">Showcase</span>
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
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                        />
                    </svg>
                </a>
                <a
                    href="https://themes.themegoods.com/grandtour/doc"
                    className="tooltip"
                    target="_blank"
                >
                    <span className="tooltiptext">Theme Documentation</span>
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
                            d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                        />
                    </svg>
                </a>
                <a
                    href="https://1.envato.market/EnokD"
                    className="tooltip"
                    target="_blank"
                >
                    <span className="tooltiptext">Purchase Them</span>
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
                            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                        />
                    </svg>
                </a>
            </div>
        </>
    );
};

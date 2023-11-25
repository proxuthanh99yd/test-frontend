import { FC } from "react";

interface Service {
    id: string;
    image: string;
    title: string;
    subTitle: string;
}

const serviceItems: Service[] = [
    {
        id: "adc61140-52f7-531b-ab43-4ccf814502e4",
        image: "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Map-Marker-300x300.png",
        title: "Handpicked Hotels",
        subTitle:
            "Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa",
    },
    {
        id: "a4cf115a-cb95-5060-83aa-57c8697ad197",
        image: "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Worldwide-Location-300x300.png",
        title: "World Class Service",
        subTitle:
            "Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa",
    },
    {
        id: "f2825da6-c545-5e40-9bc7-dd932f939ab1",
        image: "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Hot-Air-Balloon-300x300.png",
        title: "Best Price Guarantee",
        subTitle:
            "Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa",
    },
];

interface ServiceItemsProps {}

export const ServiceItems: FC<ServiceItemsProps> = () => {
    return (
        <div className="service-items container">
            {serviceItems.map((service) => {
                return (
                    <div key={service.id} className="service-inner">
                        <div className="image">
                            <img src={service.image} alt="" />
                        </div>
                        <div className="content-wrapper">
                            <h5>{service.title}</h5>
                            <p>{service.subTitle}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

import {
    ArticleItems,
    Footer,
    Header,
    HeroBackground,
    PopularItems,
    ScrollButton,
    Section,
    ServiceItems,
    ValueTripItems,
} from "./components";

function App() {
    return (
        <>
            <Header />
            <Section
                content={
                    <HeroBackground ytLink="https://www.youtube.com/watch?v=JPe2mwq96cw" />
                }
                className="hero-section"
                title="Where do you want to go?"
                subTitle="Trips, experiences, and places. All in one service."
            />
            <Section
                content={<PopularItems />}
                title="Popular Destinations"
                subTitle="World's best tourist destinations"
            />
            <Section
                content={<ValueTripItems />}
                title="Best Value Trips"
                subTitle="Best offers trips from us"
            />
            <Section
                content={<ServiceItems />}
                title="Why Choose Us"
                subTitle="Here are reasons you should plan trip with us"
            />
            <div className="parallax">
                <img
                    src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-24377.jpg"
                    alt=""
                />
            </div>
            <Section
                content={<ArticleItems />}
                title="Articles & Tips"
                subTitle="Explore some of the best tips from around the world"
            />
            <Footer />
            <ScrollButton />
        </>
    );
}

export default App;

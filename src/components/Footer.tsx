import { FC } from "react";

interface footerProps {}

export const Footer: FC<footerProps> = () => {
    return (
        <footer>
            <div className="container footer-top">
                <div className="awards">
                    <h5 className="title">Our Awards</h5>
                    <p className="text">
                        London is a megalopolis of people, ideas and frenetic
                        energy. The capital and largest city of the United
                        Kingdom.
                    </p>
                    <img
                        src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/awards.png"
                        alt=""
                    />
                </div>
                <div className="contact">
                    <h5 className="title">Contact Info</h5>
                    <p className="text">
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
                                d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                            />
                        </svg>
                        1-567-124-44227
                    </p>
                    <p className="text">
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
                                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                            />
                        </svg>
                        184 Main Street East Perl Habour 8007
                    </p>
                    <p className="text">
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
                        Mon - Sat 8.00 - 18.00 Sunday CLOSED
                    </p>
                    <div className="social-network">
                        <span className="icon icon-fa">
                            <svg
                                fill="currentColor"
                                height="64px"
                                width="64px"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 310 310"
                                xmlSpace="preserve"
                            >
                                <path d="M81.703 165.106h33.981V305a5 5 0 005 5H178.3a5 5 0 005-5V165.765h39.064a5 5 0 004.967-4.429l5.933-51.502a5 5 0 00-4.966-5.572h-44.996V71.978c0-9.732 5.24-14.667 15.576-14.667h29.42a5 5 0 005-5V5.037a5 5 0 00-5-5h-40.545A39.746 39.746 0 00185.896 0c-7.035 0-31.488 1.381-50.804 19.151-21.402 19.692-18.427 43.27-17.716 47.358v37.752H81.703a5 5 0 00-5 5v50.844a5 5 0 005 5.001z" />
                            </svg>
                        </span>
                        <span className="icon icon-twitter">
                            <svg
                                width="64px"
                                height="64px"
                                viewBox="0 -2 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M10.29 7377c7.547 0 11.675-6.156 11.675-11.495 0-.175 0-.349-.012-.522A8.265 8.265 0 0024 7362.89a8.273 8.273 0 01-2.356.637 4.07 4.07 0 001.804-2.235 8.303 8.303 0 01-2.606.98 4.153 4.153 0 00-5.806-.175 4.006 4.006 0 00-1.187 3.86 11.717 11.717 0 01-8.457-4.22 4.005 4.005 0 001.271 5.392 4.122 4.122 0 01-1.863-.505v.051c.001 1.923 1.378 3.579 3.292 3.96a4.144 4.144 0 01-1.852.069c.537 1.646 2.078 2.773 3.833 2.806A8.315 8.315 0 014 7375.185a11.754 11.754 0 006.29 1.812"
                                    transform="translate(-60 -7521) translate(56 160)"
                                    fill="currentColor"
                                    stroke="none"
                                    strokeWidth={1}
                                    fillRule="evenodd"
                                />
                            </svg>
                        </span>
                        <span className="icon icon-youtube">
                            <svg
                                fill="currentColor"
                                width="64px"
                                height="64px"
                                viewBox="0 0 32 32"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M22.396 21.104H21.2v-.707c0-.299.298-.597.596-.597h.103c.302 0 .603.298.603.597v.707h-.106zM17.795 19.6c-.298 0-.6.2-.6.498v3.405c0 .298.205.5.6.5.301 0 .602-.202.602-.5v-3.5c-.002-.203-.301-.403-.602-.403zm7.406-1.9v6.497c0 1.604-1.402 2.803-3.003 2.803H9.797c-1.6 0-2.998-1.3-2.998-2.803V17.7c0-1.599 1.301-2.802 2.998-2.802H22.1c1.699 0 3.101 1.204 3.101 2.802zm-14.502 7.204v-6.809H12.2v-.992H8.1v.992h1.299v6.899l1.3-.09zm4.501-5.8h-1.203v4.492c0 .204-.197.301-.397.301-.101 0-.302-.097-.302-.395v-4.506h-1.3V23.8c0 .298 0 .696.301.899.602.398 1.698-.096 1.901-.697v.795h1v-5.693zm4.098 4.098V20.2c0-1.203-.901-1.899-1.998-.902v-2.299h-1.302v7.799h1.001l.104-.495c1.4 1.295 2.195.397 2.195-1.101zm3.997-.402h-.99v.703c0 .298-.205.5-.509.5h-.198c-.302 0-.494-.202-.494-.5v-1.401h2.191v-2.396c-.193-1.104-1.697-1.309-2.492-.706-.203.202-.408.405-.5.706-.103.3-.207.691-.207 1.294v1.8c0 3.096 3.5 2.705 3.199 0zm-4.9-9.801c.107.203.201.3.303.399.104.104.301.104.501.104.204 0 .298-.104.504-.203.097-.097.3-.3.396-.498v.498H21.5V7.301h-1.104v4.698c0 .301-.192.502-.494.502-.301 0-.498-.201-.498-.502V7.4h-1.198v5.101c.093.197.093.3.189.498zm-4.297-3.397c0-.6 0-1 .103-1.401.097-.3.301-.599.499-.798a1.66 1.66 0 01.999-.301c.3 0 .598.098.803.2.197.101.396.3.498.498.104.203.195.401.301.603 0 .199.102.5.102.998V11c0 .602 0 .999-.102 1.202 0 .299-.104.496-.301.698a1.237 1.237 0 01-.498.498 1.86 1.86 0 01-.803.201c-.298 0-.599 0-.8-.099-.199-.103-.397-.203-.5-.399a5.108 5.108 0 01-.299-.703c-.102-.299-.102-.7-.102-1.197l.1-1.599zm1.102 2.397c0 .301.301.603.601.603.301 0 .596-.302.596-.603V8.798c0-.301-.295-.599-.596-.599-.3 0-.601.298-.601.599v3.201zM11.3 13.6h1.3V9.001L14.2 5h-1.503L11.9 8.001 10.999 5H9.6l1.7 4.001V13.6z" />
                            </svg>
                        </span>
                        <span className="icon icon-pinterest">
                            <svg
                                width="64px"
                                height="64px"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M173.876 7239c-5.477 0-9.876 4.435-9.876 9.959 0 4.1 2.407 7.53 5.893 9.12 0-1.867-.013-1.626 1.41-7.699-.782-1.578-.174-4.183 1.577-4.183 2.43 0 .779 3.603.498 5.02-.249 1.088.581 1.925 1.577 1.925 1.909 0 3.153-2.427 3.153-5.271 0-2.176-1.493-3.767-4.066-3.767-4.575 0-5.735 5.096-4.149 6.695.399.604 0 .632 0 1.423-.277.836-2.49-.38-2.49-3.514 0-2.846 2.324-6.193 7.054-6.193 3.734 0 6.224 2.761 6.224 5.69 0 3.933-2.158 6.779-5.311 6.779-1.079 0-2.075-.586-2.407-1.256-.603 2.346-.725 3.535-1.66 4.854.913.25 1.826.418 2.822.418 5.477 0 9.875-4.435 9.875-9.958-.248-5.607-4.647-10.042-10.124-10.042"
                                    transform="translate(-220 -7399) translate(56 160)"
                                    fill="currentColor"
                                    stroke="none"
                                    strokeWidth={1}
                                    fillRule="evenodd"
                                />
                            </svg>
                        </span>
                        <span className="icon icon-instagram">
                            <svg
                                width="64px"
                                height="64px"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g fill="currentColor">
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
                        </span>
                    </div>
                </div>
                <div className="recent">
                    <h5 className="title">Recent Trips</h5>
                    <div className="recent-items">
                        <img
                            src="https://live.staticflickr.com/8688/28760131762_e4a64b20c4_q.jpg"
                            alt=""
                        />
                        <img
                            src="https://live.staticflickr.com/8688/28760131762_e4a64b20c4_q.jpg"
                            alt=""
                        />
                        <img
                            src="https://live.staticflickr.com/8688/28760131762_e4a64b20c4_q.jpg"
                            alt=""
                        />
                        <img
                            src="https://live.staticflickr.com/8688/28760131762_e4a64b20c4_q.jpg"
                            alt=""
                        />
                        <img
                            src="https://live.staticflickr.com/8688/28760131762_e4a64b20c4_q.jpg"
                            alt=""
                        />
                        <img
                            src="https://live.staticflickr.com/8688/28760131762_e4a64b20c4_q.jpg"
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <div className="container">
                <div
                    style={{ borderBottom: "1px solid rgb(238 238 238 / 30%)" }}
                />
            </div>
            <div className="container footer-bottom">
                <p>© Copyright Grand Tour Theme Demo - Theme by ThemeGoods</p>
                <div className="others">
                    <a href="#!">Home</a>
                    <a href="#!">Tours</a>
                    <a href="#!">Blog</a>
                    <a href="#!">Purchase Theme</a>
                </div>
            </div>
        </footer>
    );
};

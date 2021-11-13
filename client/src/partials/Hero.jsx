export default function Hero({img, title, subtitle}) {
    return (
        <div className="hero">
            <div className="hero-container">
                <h1 className="hero-title text-center add-font-medium-shadow">{title}</h1>
                <h4 className="hero-subtitle text-center add-font-medium-shadow">{subtitle}</h4>

                <div className="hero-more add-font-medium-shadow">
                </div>
            </div>

            <svg width="1440" height="725" viewBox="0 0 1440 725" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_f_1_69)">
                <path d="M313.771 550.105C54.5237 596.946 -4.0178 730.219 -0.882666 791H1439V138.018C1381.43 129.839 1239.78 167.349 1133.75 382.816C1001.22 652.151 637.83 491.554 313.771 550.105Z" fill="url(#paint0_linear_1_69)" fill-opacity="0.6"/>
                </g>
                <defs>
                <filter id="filter0_f_1_69" x="-501" y="-363" width="2440" height="1654" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_1_69"/>
                </filter>
                <linearGradient id="paint0_linear_1_69" x1="791.13" y1="355.848" x2="1173.8" y2="959.201" gradientUnits="userSpaceOnUse">
                <stop stop-color="#B92454"/>
                <stop offset="1" stop-color="#610B27"/>
                </linearGradient>
                </defs>
            </svg>

            <img className="hero-img" src={img} alt="hero-image" />
        </div>
    )
};
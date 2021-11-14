export default function Partners({upperlabel, label, title, text, partners, id}) {
    return (
        <div className="block block--partners" id={ id ?? "partners" }>
            <div className="block-container">
                {upperlabel()}
                {label()}
                {title()}
                {text()}

                <div className="block-rows">
                    <div className="row">
                        {
                            partners.map((partner, index) => {
                                return (
                                    <div className="col-md-6 col-xs-12" key={index}>
                                        <div className="partner" data-aos="fade-up" data-aos-delay={index * 200}>
                                            <img className="partner-logo" src={partner.logo} alt="logo" />
                                            <img className="partner-bg" src={partner.background} alt="background" />
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
};

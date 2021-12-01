export default function Factors({ id, title, factors }) {
    return (
        <div className="block block--factors" id={ id ?? "factors" }>
            <div className="block-container">
                {title()}

                <div className="factors">
                    {
                        factors.map((factor, index) => {
                            return (
                                <div className="factor" data-aos="fade-up" data-aos-delay={index * 200} key={ index }>
                                    <div className="factor-icon">
                                        {factor.icon}
                                    </div>

                                    <span className="factor-label">{factor.label}</span>
                                    <h4 className="factor-title"><span>{factor.title}</span></h4>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
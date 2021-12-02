import { useState } from "react"

export default function PossiblePartners({ id, title, partners }) {
    const [ showPossible, setShowPossible ] = useState(false);

    return (
        <div className="block block--possible-partners" id={id ?? "possible-partners"}>
            <div className="block-container">
                {title()}
                
                <div className="partners-button">
                    <span className={showPossible ? 'show-button' : 'hide-button'} onClick={() => setShowPossible(!showPossible)}><strong>{showPossible ? 'Hide possible partners' : 'Show possible partners'}</strong></span>
                </div>

                <div className="partners-container">
                    {
                        partners.map((partner, index) => {
                            return (
                                <span key={index} className={`partner${ showPossible ? partner.active ?  ' possible' : '' : ''  }`}>
                                    {partner.name}
                                </span>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
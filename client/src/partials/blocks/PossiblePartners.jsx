import { useState } from "react"

export default function PossiblePartners({ id, title, partners }) {
    const [ showPossible, setShowPossible ] = useState(false);

    return (
        <div className="block block--possible-partners" id={id ?? "possible-partners"}>
            <div className="block-container">
                {title()}
                
                <div className="partners-button">
                    <span onClick={() => setShowPossible(!showPossible)}>{showPossible ? 'Hide possible partners' : 'Show possible partners'}</span>
                </div>

                <div className="partners-container">
                    {
                        partners.map((partner, index) => {
                            return (
                                <span key={index} className={`partner${ !partner.possible ? showPossible ? ' fade-down' : '' : ''  }`}>
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
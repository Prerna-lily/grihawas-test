// TermsAndConditions.js
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './TermsAndConditions.css';
import logoOrange from './images/logo y.png';
import { FormContext } from '../FormContext';

const TermsAndConditions = () => {
    const navigate = useNavigate();
    const { updateFormData } = useContext(FormContext);
    const [agreed, setAgreed] = useState(false);

    const handleCheckboxChange = (event) => {
        setAgreed(event.target.checked);
    };

    const handleNext = () => {
        if (agreed) {
            updateFormData({ agreedToTerms: true });
            navigate('/registration/summary');
        } else {
            alert('Please read and agree to the Terms & Conditions to proceed.');
        }
    };

    const handleBack = () => {
        navigate('/registration/flat-details');
    };

    return (
        <div className="terms-container">
            <div className="logo-container">
                <a onClick={() => navigate('/')}>
                    <img src={logoOrange} alt="Logo" className="logo" />
                </a>
            </div>
            <br/>
            <br/>
            <h2>Terms & Conditions</h2>
            <div className="terms-content">
                <ol>
                    <li>
                        <strong>Instruction for Booking</strong>
                        <ol type="a">
                            <li>Applicants must be citizens of India and must be 18 years of age or older at the time of
                                registration.</li>
                            <li>Online registration is available on our official website: www.grihawas.com. The
                                registration amount can be paid online through the available payment options on the
                                website.</li>
                            <li>For offline registration, applicants may download the form from our website, fill it, and
                                submit it along with a Cheque/DD at our Head Office or with an authorized selling agent.
                                The Cheque/DD should be in favor of "SDPLPPL SPLS Awasiya Yojna Collection
                                Escrow Account".</li>
                        </ol>
                    </li>
                    <li>
                        <strong>Registration and Other Charges</strong>
                        <ol type="a">
                            <li>Registration Charges, Stamp Duty, Charges and incidental expenses thereto as
                                applicable at the time of registration shall be extra and is to be borne by the purchaser.
                            </li>
                            <li>Other Statutory Charges and taxes as applicable, levied or Increased from time to time
                                shall be extra and are to be borne by the purchaser.</li>
                        </ol>
                    </li>
                    <li>
                        <strong>Modes of Payment</strong>
                        <ol type="a">
                            <li>All payments from outstation locations are to be paid online or via Drafts/Cheque/local
                                cheques payable to The "SDPLPPL SPLS Awasiya Yojna Collection Escrow
                                Account" purchaser must insist on a duly signed receipt from authorized personnel.
                                Developer shall not be responsible for any cash given by the applicant to any agent.
                            </li>
                            <li>That the schedule of installments under Payment Plan shall be final and binding on the
                                intending Allottee(s). It is made clear that time for payment is the essence of this
                                allotment.</li>
                            <li>That in exceptional circumstances, the Builder may, in its sole discretion condone the
                                delay In payment by charging interest @18% per annum. In the event of the Builder
                                waiving the right of forfeiture and accepting the payment on that account, no right
                                whatsoever, would accrue to any other defaulter intending Allottee(s).</li>
                        </ol>
                    </li>
                    <li>
                        <strong>Delayed Payments</strong>
                        <ol type="a">
                            <li>Interest at the rate of MCLR +1% PER Annum shall be charged on all delayed payments
                                of installments.</li>
                        </ol>
                    </li>
                    <li>
                        <strong>Cancellation Charges</strong>
                        <ol type="a">
                            <li>In the case if the applicant doesn't accept the unit offered in draw or after accepting does
                                not pay first installment within 10 days, his/her application money shall be forfeited and
                                the said unit can be allotted to some other applicant.</li>
                            <li>The cancellation charge will be 10% of the total amount of the flat and interest (if any)
                                post the execution builder buyer agreement.</li>
                        </ol>
                    </li>
                    <li>
                        <strong>Additions & Alterations</strong>
                        <ol type="a">
                            <li>The cost of any additions and alterations made over and above specification mentioned
                                in the brochure at the request of the purchaser shall be charged extra.</li>
                            <li>The name of the applicant cannot be changed in the registration form or processes
                                thereafter if allotment is made.</li>
                        </ol>
                    </li>
                    <li>
                        <strong>Possession</strong>
                        <ol type="a">
                            <li>Since it is a large project having a number of buildings, the construction will be
                                completed in phases. All the major common facilities will be completed only after
                                completion of construction of all the phases. As such the intending Allottee(s) must take
                                the possession of his/her/their own flats as soon as it is made available for possession.
                            </li>
                            <li>That the developer shall complete the development/construction of the flat as per the
                                date mentioned in Allotment Agreement with an extended period of 6 months thereof. In
                                case of delay in construction of the said flat attributable of delay of Developer, the
                                Developer would pay a penalty at the time of possession as per UP RERA provisions for
                                the delay beyond three months to the intending Allottee, provided however that the
                                intending Allottee has made payment of all installments towards the sale consideration
                                amount of the said flat in time and without making any delay to the Developer.</li>
                            <li>That in case the intending Allottee(s) fail to take possession of Apartment within given
                                "Fit-out-period", Rs 5/-per sq. ft. Per month will be charged as watch and ward charges
                                and will be increased automatically by 10% every year from 1st April. In case the
                                possession is not taken till three months from the due date, allotment can be cancelled
                                and action can be taken as per clauses and the balance amount would be refunded
                                without interest.</li>
                            <li>The company shall handover the possession of the completed Flat to the purchaser only
                                on payment of all dues to the company.</li>
                        </ol>
                    </li>
                    <li>
                        <strong>Changes in Drawings/ Designs</strong>
                        <ol type="a">
                            <li>Due to any unforeseen requirement of authority/company, company has every right to
                                change the designs and specifications</li>
                        </ol>
                    </li>
                    <li>
                        <strong>Documents to be submitted along with the application form</strong>
                        <ol type="a">
                            <li>Employment ID; 2. Copy of PAN Card, 3. Address Proof, 4. Photograph of all Applicants;
                                5. Booking Cheques. Note: This registration will be governed/superseded by a buyer
                                agreement & the terms contained therein.</li>
                        </ol>
                    </li>
                    <li>
                        <strong>Scope of Usage and Restrictions</strong>
                        <ol type="a">
                            <li>That the intending Allottee(s) is aware that various apartment are being allotted to
                                various persons under uniform terms and conditions. The intending Allottee(s) agrees
                                that he will use the said apartment for residential purpose and shall not use the aforesaid
                                apartment for any other purpose which may or likely to cause nuisance to intending
                                Allottee(s) of other apartments in this Complex, to crowd the passages or to use it for
                                any illegal or immoral purpose.</li>
                            <li>That the Apartment shall be used for activities as are permissible under the Law.</li>
                        </ol>
                    </li>
                    <li>
                        <strong>Arbitration & Disputes</strong>
                        <ol type="a">
                            <li>In the event of any dispute whatsoever arising between the parties in any way connected
                                with the allotment of the said apartment, the same shall be referred to the sole arbitration
                                of a person to be appointed by the “DEVELOPER”. The intending Allottee(s) hereby
                                confirms that he/she/they shall have no objection to this appointment and the decision of
                                the arbitrator will be final and binding on all parties. The arbitration proceedings shall
                                always be held in the city of Ghaziabad, India. The Arbitration and Conciliation Act, 1996
                                or any statutory amendments/modifications shall govern the arbitration proceedings
                                thereof for the time being in force. The Allahabad High Court and the Courts subordinate
                                to it alone shall have jurisdiction in all matters arising out of or touching and/or
                                concerning this allotment.</li>
                        </ol>
                    </li>
                    <li>
                        <strong>NRI/Foreign National</strong>
                        <ol type="a">
                            <li>That in case of NRI/Foreign National intending Allottee(s) the observance of the
                                provision of the Foreign Exchange Management Act 1999 and any other law as may be
                                prevailing shall be the responsibility of the intending Allottee(s).</li>
                        </ol>
                    </li>
                    <li>
                        <strong>Payment Responsibility</strong>
                        <ol type="a">
                            <li>That is case, the intended allottee makes any payment to any other person/company,
                                except "SDPLPPL SPLS Awasiya Yojna Collection Escrow Account". against
                                his/her/their booked flat, then the intending allottee will be solely responsible and liable
                                for the said payment.</li>
                            <li>If the applicant does not disclose full details or gives false information his registration
                                may be cancelled and he will not be eligible for refund of deposit.</li>
                            <li>For income calculation, total income of the family including that of spouse and children is
                                considered.</li>
                        </ol>
                    </li>
                    <li>
                        <strong>Affordable Housing Policy Benefits</strong>
                        <ol type="a">
                            <li>Benefits under the U.P. Government's Affordable Housing Policy are provided solely by
                                the government.</li>
                            <li>The developer is not liable if these benefits are revised, withdrawn, or if the applicant is
                                ineligible.</li>
                        </ol>
                    </li>
                    <li>
                        <strong>Other Terms and Conditions</strong>
                        <ol type="a">
                            <li>Other terms and conditions mentioned in the Allotment Agreement shall apply.</li>
                            <li>In case, the flat is completed before the scheduled date of completion, the entire balance
                                outstanding as on such date of completion shall become due and payable,
                                notwithstanding the installments and due dates mentioned herein.</li>
                            <li>That the intending Allottee(s) has/have to pay monthly Maintenance charges as decided
                                by the builder at the time of offer of possession to the Maintenance Body of the project
                                apartment or any other ground whatsoever.</li>
                            <li>That the Interest Free Security Deposit given by the intending allottee(s) to the Builder or
                                nominee of the Builder is transferable to the intending Allottee(s)/Resident Welfare
                                Association (RWA) at the time of termination of the "Maintenance Agreement" or transfer
                                of maintenance to the RWA of the Complex. At the time of handing over of maintenance
                                of the Project/Complex the charge over the following will be handed over to the RWA.
                            </li>
                            <li>All existing lifts, corridors, passages, parks underground & overhead water tanks, fire
                                fighting equipment with motors and motor room.</li>
                            <li>Note: Open spaces, lobbies, staircases, lifts, terraces, roofs, spaces for commercial,
                                school, parking spaces (except what has been allotted by an agreement to intending
                                Allottee(s) or tot-lots, space for public amenities, shopping centres or any other space
                                will remain the property of the Builder.</li>
                            <li>That if for any reason, whether within or outside the control of the Builder, the whole or
                                part of the scheme is abandoned, no claim will be preferred, except that money received
                                from the intending Allottee(s) will be refunded in full, without interest.</li>
                            <li>This is clear that this project is Developed by SDPL Project Private Limited
                                (“DEVELOPER”).</li>
                        </ol>
                    </li>
                </ol>
            </div>
            <div className="checkbox-container">
                <label>
                    <input
                        type="checkbox"
                        checked={agreed}
                        onChange={handleCheckboxChange}
                    />
                    I have read and agree to the aforementioned Terms & Conditions and wish to proceed with the
                    registration.
                </label>
            </div>
            <div className="button-container">
                <button className="back-button" onClick={handleBack}>Back</button>
                <button className="next-button" onClick={handleNext} disabled={!agreed}>
                    Next
                </button>
            </div>
            <p>By proceeding with online registration, the applicant agrees to abide by these Terms & Conditions.
                The registration process and allotment shall be governed by the Buyer Agreement.</p>
        </div>
    );
};

export default TermsAndConditions;
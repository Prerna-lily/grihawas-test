import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css'; // Import your main CSS file
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'font-awesome/css/font-awesome.min.css'; // Import Font Awesome CSS
import { useEffect, useState } from 'react';
import { useRef } from 'react';

// Image imports (Important:  Webpack needs these to be explicitly imported)
import logoOrange from './images/logo-orange.png';
import logoGrihawas from './images/logo-grihawas.png';
import connectivityNew from './images/connectivity-new.png';
import inProject from './images/in-project.png';
import tick from './images/tick.png';
import news1_1 from './images/news1_1.jpg';
import News2 from './images/News2.jpg';
import swamiFundLogo from './images/SWAMIH-fund-logo.jpeg';
import downloadIcon from './images/download.png';
import newFinalTableN from './images/new-final-table-n.png';
import homeBanner1 from './images/home_banner1.png';
import slide1 from './images/slide1.png';
import slide2 from './images/slide2.png';
import slide3 from './images/slide3.png';
import slide4 from './images/slide4.png';
import img1 from './images/img1.png';
import img2 from './images/img2.png';
import img3 from './images/img3.png';
import img4 from './images/img4.png';
import img5 from './images/img5.png';
import image1 from './images/image1.png'; // Import image1 for CSS
import tec from './images/tec.png'; // Import tec for CSS

const HomePage = () => {
    const navigate = useNavigate();
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [homeBanner1, slide1, slide2, slide3, slide4]; // Array of your slider images
    const slides2 = [img1, img2, img3, img4, img5]; // Array of your slider images

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 3000);

        // Clearing the code for cleaner code
        return () => clearInterval(timer);
    }, [slides.length]);

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
    };

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    };

    const goToRegistration = () => {
        navigate('/registration/applicant');
        // Use a setTimeout to allow the component to render after navigation
        setTimeout(() => {
            const form = document.getElementById('registrationForm');
            if (form) {
                form.scrollIntoView({ behavior: 'smooth', block: 'start' });
            } else {
                console.error("Registration form not found!");
            }
        }, 100); // Adjust the timeout value (in milliseconds) as needed
    };

    const downloadPdf = (pdfUrl) => {
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = pdfUrl.substring(pdfUrl.lastIndexOf('/') + 1);
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };


    return (
        <div id="wrapper">

            {/* Navigation */}
            <div className="nav-wrapper">
                <div className="container-fluid">
                    <div className="col-sm-12">
                        <nav className="navbar" role="navigation">
                            <div className="container-fluid">
                                <div className="navbar-brand">
                                    <a href="http://www.grihawas.com/">
                                        <img src={logoOrange} alt="log" className="navbar-logo" />
                                    </a>
                                </div>
                                <ul className="nav navbar-nav menuCenter">
                                        <li><a href="https://grihawas.com/project.html">The Project</a></li>
                                        <li><a href="https://grihawas.com/plan.html">Location</a></li>
                                        <li><a href="https://grihawas.com/layout.html">Site Layout</a></li>
                                        <li><a href="https://grihawas.com/floor.html">Floor Plan</a></li>
                                        <li><a href="https://grihawas.com/news.html">News</a></li>
                                        <li><a href="https://grihawas.com/specification.html">Specification</a></li>
                                        <li><a href="https://grihawas.com/feature.html">Features</a></li>
                                        <li><a href="https://grihawas.com/construction-status.html">Construction Status</a></li>
                                        <li><a href="https://grihawas.com/draw.php">Draw Result</a></li>
                                        <li><a href="https://grihawas.com/contact-us.php">Contact</a></li>
                                    </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
                                  {/* Image Slider Section */}
   <div className="image-slider1">
        <button className="slide-arrow prev" onClick={prevSlide}>
                ‹ {/* Left arrow */}
        </button>
        <img src={slides[currentSlide]} alt={`Slider Image ${currentSlide + 1}`} />
            <button className="slide-arrow next" onClick={nextSlide}>
                › {/* Right arrow */}
            </button>
   </div>

            <div className="slider_footer">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-3 padding0">
                            <div className="col1">
                                <p>3 Room set <br />
                                    <b>Rs.26.35 Lakh* GST 1% </b>
                                </p>
                            </div>
                        </div>
                        <div className="col-sm-6 slide-txt padding0">
                            <div className="slide_txting">
                                <p><strong>Date of Draw: 17th November, 2024 </strong></p>
                            </div>
                        </div>
                        <div className="col-sm-3 padding0 centerAlign">
                            <div className="col2">
                                <h2> UPRERA <br />PRJ3286</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Home Container */}
            <div className="homeContainer">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="logo-home centerAlign">
                                <img src={logoGrihawas} alt="logo" width="200px" />
                            </div>
                        </div>
                        <div className="col-sm-12 centerAlign">
                            <h3 className="uttar-heading">उत्तर - प्रदेश सरकार का सपना , सबका घर हो अपना </h3>
                            <p style={{ lineHeight: '2' }}>
                                "रोटी" और "कपड़ा" के बाद "आवास" मनुष्य की बुनियादी आवश्यकता है परंतु वर्तमान समय में समाज के एक वर्ग को
                                इस बुनियादी सुविधा को पाना असंभव प्रतीत होता है जबकि समाज का यह वर्ग राष्ट्र के आर्थिक विकास में सबसे
                                महत्वपूर्ण भूमिका निभाता है। हम उन सभी नौकरी पेशा एवं छोटे व्यापार करने वाले वर्ग की बात कर रहे हैं जिनके
                                लिए सभी सुविधाओं से सुसज्जित आवास पाना एक स्वप्न मात्र है, यह सभी लोग अपनी क्षमता अनुसार केवल कच्ची एवं
                                अनधिकृत कॉलोनियों में आवास लेने के लिए बाध्य है। जहां एक कॉलोनी की मूलभूत सुविधाएं जैसे सीवरेज, पानी का
                                कनेक्शन, बच्चों के खेलने का स्थान, पार्क एवं पार्किंग तक उपलब्ध नहीं है तथा कई बार प्राधिकरण की कार्यवाही
                                होने पर वह अपने जीवन भर की कमाई से तैयार आशियाने से हाथ धो बैठते हैं।
                            </p>
                            <p style={{ lineHeight: '2' }}>
                                उत्तर प्रदेश सरकार इस बारे में जागरूक है कि समाज के समस्त आय वर्गों को आर्थिक क्षमता अनुसार आवास की
                                उपलब्धता जनकल्याण में सुधार तथा राज्य एवं राष्ट्र के आर्थिक विकास में सबसे महत्वपूर्ण भूमिका निभाता है। यद्यपि केंद्र एवं राज्य
                                सरकार द्वारा शहरी क्षेत्रों में दुर्लभ एवं अल्प आय वर्ग के परिवारों को अफोर्डेबल हाउसिंग मुहैया कराने हेतु
                                समय-समय पर कई नीतियां निर्धारित की गई है और योजनाएं भी संचालित की गई है, परंतु समाज के निम्न-मध्यम आय वर्ग
                                के परिवारों की आवासीय समस्या के समाधान हेतु अलग से कोई नीति निर्धारित नहीं थी।
                            </p>
                            <p style={{ lineHeight: '2' }}>
                                सरकार के सीमित संसाधनों से उक्त मांग को पूर्ण करना संभव नहीं था। उपरोक्त के दृष्टिगत प्रदेश में आवासीय
                                समस्या के समाधान हेतु राज्य शहरी आवास एवं पर्यावास नीति घोषित की गई, जिसके क्रम में समाज के निम्न- मध्यम आय
                                वर्ग को किफायती आवास मुहैया कराने के उद्देश्य से उत्तर प्रदेश सरकार की अफॉर्डेबल Housing नीति का निर्धारण
                                करते हुए उसके अधीन उत्तर प्रदेश में अफॉर्डेबल आवासों के निर्माण कार्य के लिए निजी सहयोग लेने का निर्णय लिया
                                गया ।
                            </p>
                            <h4 style={{ fontWeight: 'bold' }}>एस पी एल एस आवासीय योजना में इन्ही उद्देश्यों को पाने का प्रयास किया गया है।</h4>
                            <br/>
                            {/* Download Section */}
<div className="download-section">
    <div className="download-section-inner">
        <div className="container">
            <h2>Download</h2>
            <div className="row">
                <div className="col-sm-4">
                    <button className="btn btn-primary download-btn" onClick={() => downloadPdf('https://www.grihawas.org/wp-content/uploads/2024/pdf/Ghaziabad_Master_Plan_2031.pdf')}>
                        <span className="button-text" style={{ padding: '10px 25px' }}>Ghaziabad Master Plan</span>
                    </button>
                    <p style={{ display: 'none' }}>img/Ghaziabad-Master-Plan.pdf</p>
                </div>
                <div className="col-sm-4">
                    <button className="btn btn-primary download-btn" onClick={() => downloadPdf('https://www.grihawas.org/wp-content/uploads/2024/pdf/Griha_Awas_Affodable_HousingLicence_Certificate.pdf')}>
                        <span className="button-text">Affordable Licence</span>
                    </button>
                    <p style={{ display: 'none' }}>img/Affordable-Licence.pdf</p>
                </div>
                <div className="col-sm-4">
                    <button className="btn btn-primary download-btn" onClick={() => downloadPdf('https://www.grihawas.org/wp-content/uploads/2024/pdf/Griha_Awas_RERA_Extension_Certificate.pdf')}>
                        <span className="button-text">Project RERA</span>
                    </button>
                    <p style={{ display: 'none' }}>img/Project-RERA.pdf</p>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-4">
                    <button className="btn btn-primary download-btn" onClick={() => downloadPdf('https://www.grihawas.org/wp-content/uploads/2024/09/Griha_Awas_Payment_Plan_N.pdf')}>
                        <span className="button-text">Payment Plan</span>
                    </button>
                    <p style={{ display: 'none' }}>img/Payment-Plan.pdf</p>
                </div>
                <div className="col-sm-4">
                    <button className="btn btn-primary download-btn" onClick={() => downloadPdf('https://www.grihawas.org/wp-content/uploads/2024/08/Griha_Awas_Shop_Layout-1.pdf')}>
                        <span className="button-text">Shop Layout</span>
                    </button>
                    <p style={{ display: 'none' }}>img/Shop-Layout.pdf</p>
                </div>
                <div className="col-sm-4">
                    <button className="btn btn-primary download-btn" onClick={() => downloadPdf('https://www.grihawas.org/wp-content/uploads/2024/09/Griha_Awas_Shop_Payment_Plan_N.pdf')}>
                        <span className="button-text">Shop Payment Plan</span>
                    </button>
                    <p style={{ display: 'none' }}>img/Shop-Payment-Plan.pdf</p>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-4">
                    <button className="btn btn-primary download-btn" onClick={() => downloadPdf('https://www.grihawas.org/wp-content/uploads/2024/10/Griha_Awas_Brochure-1N.pdf')}>
                        <span className="button-text">Project Brochure</span>
                    </button>
                    <p style={{ display: 'none' }}>img/Project-Brochure.pdf</p>
                </div>
                <div className="col-sm-4">
                    <button className="btn btn-primary download-btn" onClick={() => downloadPdf('https://www.grihawas.org/wp-content/uploads/2024/10/Griha_Awas_Application_Form_N.pdf')}>
                        <span className="button-text">Registration Form</span>
                    </button>
                    <p style={{ display: 'none' }}>img/Form-Download.pdf</p>
                </div>
            </div>
        </div>
    </div>
</div>
                            <br />
                            <br/>
                            <h3>आवासीय योजना की विशेषताएं</h3>
                            <div className="flat-chart centerAlign">
                    
                    {/* <img src="img/flat-detail-chart.png" alt="flat chart" width="100%" name="Grihawas Costing" /> */}
                    <img src={newFinalTableN} alt="flat chart" width="100%" name="Grihawas Costing" />
                    </div>
                    <br/>
                    <br/>
                    {/*Registration button */}
                    
        {/*Registration button */}

        <div className="buttonWrapper"> {/* Add this wrapper */}
                <button className="register-btn"style={{ /* Removed btn btn-primary classes */
                color: 'white',                /* Text to White */
                backgroundColor: 'red',        /* Background red */
                fontWeight: 'bold',           /* Make font bold */
                fontSize: '1.5em',          /* Make to scale it up*/
                textShadow: '2px 2px 4px #000000', /* textShadow  Set to dark! */
                border: '2px solid #333',
                outline: '2px solid black',
                borderRadius: '15px', // Add a border radius
                boxShadow: '3px 2px 5px rgba(0, 0, 0, 0.8)', //Added Shadow
                padding: '10px 20px', //Added paddding,
             }} onClick={goToRegistration}>REGISTER NOW</button>
             </div>
                        <br/>
                        <br/>
                            <div className="col-sm-12">
                                <div className="subcity">
                                    <img className="swami-fund" src={swamiFundLogo} alt="स्वामी इन्वेस्टमेंट फंड" />
                                    <h3 style={{ fontWeight: 'bold', textAlign: 'center', paddingTop: '15px' }}>यह योजना स्वामी इन्वेस्टमेंट फंड 1 द्वारा फंडेड है।</h3>
                                    <h4 style={{ fontWeight: 'bold', textAlign: 'center' }}>यह फंड वित्त मंत्रालय (भारत सरकार) द्वारा प्रायोजित एवं एस० बी० आई० कैप वेंचर्स द्वारा प्रबंधित है।</h4>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Section 1 */}
                    
                    <div className="section1 home_sec">
                <div className="container">
                     <div className="row">
                <div className="logos" align="center">
                  <img alt="logos" width="auto" height="auto" src={connectivityNew} />
                   </div>
                 <div className="logos" align="center">
                <img src={inProject} alt="logos" width="auto" height="auto" />
                 </div>
                     </div>
                     </div>
            </div>

                    {/* Section 2 */}
                    <div className="section2">
                    <div className="container">
                    <div className="row">
                 <ul className="list_tick">
                <li>प्रोजेक्ट के लाभ</li>
                 <li><img alt="tick" src={tick} /></li>
                <li>अतुल्यनीय मूल्य </li>
                 <li><img alt="tick" src={tick} /></li>
                 <li>क्लब सुविधा </li>
                   <li><img alt="tick" src={tick} /></li>
                   <li>स्विमिंग पूल </li>
                    <li><img alt="tick" src={tick} /></li>
                     <li>24x7 सुरक्षा</li>
                    <li><img alt="tick" src={tick} /></li>
                   <li>पावर बैकअप</li>
                      </ul>
                    </div>
                  </div>
              </div>

                    {/* Section 3 */}
                    <div className="section3">
                        <div className="container">
                            <div className="col-sm-12">
                                <div className="user_benefit">
                                    <div className="heds">
                                        <h3>उत्तर प्रदेश सरकार के लाभ</h3>
                                    </div>
                                    <div className="cnts">
                                        <ul className="bullets">
                                            <li style={{ textAlign: 'left', fontSize: '16px' }}>रियायती मूल्य</li>
                                            <li style={{ textAlign: 'left' }}> <span style={{ fontSize: '16px' }}>बाहरी विकास शुल्क नहीं</span></li>
                                            <li style={{ textAlign: 'left', fontSize: '16px' }}>केवल 1% जीएसटी<br /></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 4 */}
                <div className="section4">

                    <div className="container-fluid">
                        <div className="row">

                            <div className="col-sm-10 bg_lay">

                                <div className="col-sm-6">
                                    <div className="circle">
                                        <h2><a href="plan.html">The Location</a></h2>

                                    </div>
                                    <div className="cir_cnt">

                                        <p>Strategically located at Close Proximity of NH-24, Delhi-meerut Expressway, Eastern Peripheral Expressway</p>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="circle">

                                        <h2><a href="layout.html">Site Layout</a></h2>
                                    </div>
                                    <div className="cir_cnt">
                                        <p>Spread over 10 acres with all modern ameneties of recreation, health and security</p>
                                    </div>

                                </div>

                            </div>

                            <div className="col-sm-2">
                                <div className="box1 bxes">
                                    <h1><a href="t1floor.html">3 Room Set [T1 New]</a></h1>
                                    <p><a href="t1floor.html">+2 Toilets</a></p>
                                    <p> </p>
                                </div>
                                <div className="box2 bxes">
                                    <h1><a href="t3floor.html">3 Room Set [T3]</a></h1>
                                    <p><a href="t3floor.html">+2 Toilet</a></p>
                                    <p> </p>
                                </div>
                                <div className="box3 bxes">
                                    <h1><a href="t5floor.html">3 Room Set [T5]</a></h1>
                                    <p><a href="t5floor.html">+2 Toilets</a></p>
                                    <p> </p>
                                    <p> </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


                   {/* Image Slider Section */}
   <div className="image-slider">
        <button className="slide-arrow prev" onClick={prevSlide}>
            ‹ {/* Left arrow */}
        </button>
            <div className="slides">
                 <img src={slides2[currentSlide]} alt={`Image ${currentSlide + 1}`} />
            </div>
            <button className="slide-arrow next" onClick={nextSlide}>
            › {/* Right arrow */}
            </button>
         </div>

                {/* Section 5 */}
               {/* Section 5 */}
     {/* Section 5 */}
<div className="section5">
  <div className="container">
      <div className="ratio ratio-16x9">
  <iframe src="https://www.youtube.com/embed/q-n_2cfhKM0"
 title="YouTube video"
allowFullScreen></iframe>
          </div>
     </div>
    </div>

                {/* Counter Wrap */}
                <div className="counter-wrap" style={{ display: 'none' }}>
                    <div className="container counter-section">
                        <div className="row">
                            <div className="col-sm-4 centerAlign">
                                <p><b>कुल भवनों की सख्या</b> </p>
                                <span className="count">1663</span>
                            </div>
                            <div className="col-sm-4 centerAlign">
                                <p><b>कुल ड्रॉ द्वारा आबंटन</b> </p>
                                <span className="count">860</span>
                            </div>
                            <div className="col-sm-4 centerAlign">
                                <p><b>कुल आवेदन</b> </p>
                                <span className="count">1820</span>
                            </div>
                        </div>
                    </div>
                </div>

                            {/* Footer */}
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="calling">
                                <p>For More Detail and Query</p>
                                <h1>Call : 987-0100-774</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row middle-footer">
                        <div className="col-sm-2"></div>
                        <div className="col-sm-4">
                            <div className="ad1 add">
                                <div className="hd">
                                    <h3>Site Office</h3>
                                </div>
                                <div className="add_cnr">
                                    <p>SPLS Grihawas, Govind Puram Extension,<br /> NH-24, Ghaziabad U.P. 201017.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="ad1 add">
                                <div className="hd">
                                    <h3>Ghaziabad Office</h3>
                                </div>
                                <div className="add_cnr">
                                    <p>C-14, 2nd Floor, RDC, Raj Nagar,<br /> Ghaziabad, U.P-201001</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-2"></div>
                    </div>
                </div>

                <div className="row download_sec">
                    <div className="col-sm-12 col-md-12 col-lg-12" center="true"> {/* Added center="true" */}
                        <div className="download">
                            <h5><a href="https://grihawas.com/img/grihawas-prospectus.pdf" target="_blank"
                    rel="noopener noreferrer">Download Complete Prospectus</a></h5>
                           <a href="https://grihawas.com/img/grihawas-prospectus.pdf" target="_blank" rel="noopener noreferrer"><i><img src={downloadIcon} alt="Download Icon" /></i> </a>
                        </div>
                    </div>
                </div>
            </div>


            <div className="col-sm-12 copy" style={{ textAlign: 'center', paddingTop: '15px', backgroundColor: '#333' }}>
     <p style={{ color: 'white' }}>Sitemap Privacy Policy Terms of Use © 2017 Grihawas.com, All Rights Reserved <a href="https://grihawas.com/disclaimer.html" style={{ color: 'white' }}>Disclaimer</a> *T&C Apply</p>
     </div>

            </div>
            </div>
    );
};

export default HomePage;
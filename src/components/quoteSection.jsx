import React from "react";

function QuoteSection() {
    return (
        <div id="quote-box" style={{marginTop:'10%'}}>
            <div className="row g-0 border border-info">
                <div className="col-md-4 text-center position-relative" style={{backgroundColor: 'black', color: 'white'}}>
                    <h3 style={{marginTop:'120px'}}>"There is nothing impossible<br/> to they who will try"</h3>
                    <p className="fs-5 fw-light">-Alexander the great</p>
                    <a href="#" className="btn btn-outline-primary text-white ms-1 position-absolute bottom-0 end-0" style={{border:'none'}}>More quotes</a>    
                </div>
                <div className="col-md-8" id="quote-img">
                </div>
            </div>
        </div>
     );
}

export default QuoteSection;
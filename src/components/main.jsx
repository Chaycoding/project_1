import React from "react";
import { Link } from "react-router-dom";

function Mainbody () {
    const [state] = React.useState({
        articlesLeftCorner: 'Article1',
        articlesMiddle: 'Article2',
        articlesRightCorner: 'Article3'
    });


    return ( 
        <div class="row row-cols-1 row-cols-md-3 g-4 ms-1 text-center mt-2" style={{paddingTop:'5%'}}>
            <div class="col">
                <div class="card h-100">
                    <Link to='/article1'>
                    <div class="card-body img-suggestion1 img-sugg position-relative" id="suggestions-main">
                        <h5 class="card-title position-absolute top-50 start-50 translate-middle" id="suggestion-text">{state.articlesLeftCorner}</h5>
                    </div>
                    </Link>
                </div>
            </div>
            <div class="col">
                <div class="card h-100" >
                <Link to='/article2'>
                <div class="card-body img-suggestion2 img-sugg position-relative" id="suggestions-main">
                    <h5 class="card-title position-absolute top-50 start-50 translate-middle" id="suggestion-text">{state.articlesMiddle}</h5>
                </div>
                </Link>
                
                </div>
            </div>
            <div class="col">
                <div class="card h-100" >
                <a href="#" class="btn p-0" >
                <div class="card-body img-suggestion3 img-sugg position-relative" id="suggestions-main">
                    <h5 class="card-title position-absolute top-50 start-50 translate-middle" id="suggestion-text">{state.articlesRightCorner}</h5>
                </div>
                </a>

                </div>
            </div>
        </div>
            
     );
}

export default Mainbody ;
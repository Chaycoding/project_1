import './footer.css'
import React from "react";
import bkimg from './images/footerimg.png'

function Footer () {
    return ( 
        <div id='footer'>
        <div class="card text-center bg-dark text-white" id='footerSec2' >
            <div class="row g-0">
                <div class="col-md-4">
                    <img src={bkimg} class="img-fluid" id='foot-logo' alt="..."/>
                    <p className="card-text">Articles to read on a sunday morning<br/> with a cup of coffee</p>
                </div>
                <div class="col-md-8">
                    <div class="card-body position-absolute top-50 start-50 translate-middle-y">
                    <h5 class="card-title">Contact us at </h5>
                    <a href="#" class="btn btn-primary">Facebook</a>
                    <a href="#" class="btn btn-success ms-1">Whatsapp</a>
                    <a href="#" class="btn btn-outline-primary text-white ms-1">Email</a>
                    <p class="card-text">Copyright &copy; Chayticles</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

  

export default Footer ;
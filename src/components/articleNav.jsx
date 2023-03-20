import { Link } from "react-router-dom";

function ArticleNav(props) {
    return ( 
        <div className="sticky-top" style={{borderBottom:'white solid 0.01px'}}>
            <div className="nav-ani1 nav-box position-absolute start-50"></div>
            <div className="nav-ani2 nav-box position-absolute start-50"></div>

            <nav className="navbar navbar-expand-sm navbar-dark" style={{height:'60px', opacity: 0.95}}>
                <div className="container-fluid">
                    <h3 className="pt-1 ms-4" id="nav-section" style={{fontWeight:'400', fontFamily:'Lato'}}>{props.contenttype}</h3>
                <Link to='/' className="navbar-brand mb-0 h1 position-absolute" id="nav-name" href="#" style={{fontFamily: 'Montserrat',  fontSize: '2rem', left: '45%'}}>
                Chayticles
                </Link>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                
                </div>
            </div>
        </nav>
    </div>
     );
}

export default ArticleNav;
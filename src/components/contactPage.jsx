import ArticleNav from "./articleNav";

function Contactinfo() {
    return (
        <div>

            <ArticleNav/>
        <div style={{paddingBottom:'50%', paddingTop:'10%'}}>
            <div className="row g-0">
                <img src="./Images/contactimg.jpg" alt="" style={{width:'65%', marginLeft:'15%', borderRadius:'20px', height:'300px'}} />
            </div>

            <div className="row g-0 text-white ps-5 pt-5">
                    <div className="col-md-8" style={{borderRight:'solid black 1px'}}>
                        <h1 className="text-center">Would you like to write articles? <span style={{color:'rgb(75, 8, 95)'}}> Contact us!</span></h1>
                        <h3 className="ms-5" style={{marginTop:'15%'}}>
                            We believe that everyone should be free to learn <br/>without any barriers.
                        </h3>
                        <h3 className="mt-5 ms-5">
                            If you have the talent to write amazing articles on subjects you love please contact us and make your knowledge available to everyone!!

                        </h3>
                    </div>
                    <div className="col-md-1">
                    </div>
                    <div className="col-md-3">
                        <div style={{marginTop:'30%'}}>
                        <button className="btn btn-outline-primary social social-f">Facebook</button>
                        <button className="btn btn-outline-primary mt-3 social social-i">Instagram</button>
                        <button className="btn btn-outline-primary mt-3 social social-t">Twitter</button>
                        </div>
                    </div>
            </div>
        </div>
        </div>
     );
}

export default Contactinfo;
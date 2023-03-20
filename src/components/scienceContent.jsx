import ArticleNav from "./articleNav";
import img1 from './images/contentfirstimg.jpg'
import img2 from './images/cti2.jpg'
import img3 from './images/cti3.jpg'
import img4 from './images/cti4.jpg'
import img5 from './images/cti5.jpg'
import img6 from './images/cti6.jpg'
import img7 from './images/cti7.jpg'
import img8 from './images/cti8.jpg'
import img9 from './images/cti9.jpg'
import img10 from './images/cti10.jpg'
import img11 from './images/cti11.jpg'
import img12 from './images/cti12.jpg'
import img13 from './images/cti13.jpg'
import img14 from './images/cti14.jpg'
import img15 from './images/cti15.jpg'
import img16 from './images/cti16.jpg'


function ScienceContent() {
    return ( 
        <div style={{marginBottom:'170%'}}>
            <ArticleNav contenttype='Science'/>
            <div className="position-absolute text-white" style={{width:'1100px', left:120}}>
                <h2 className="pt-5">Science</h2>
                <div className="d-flex" id="contenttitle">
                    <button className="btn" id="content-title-buttons">Tech</button>
                    <button className="btn ms-3" id="content-title-buttons">Health</button>
                    <button className="btn ms-3" id="content-title-buttons">Astronomy</button>
                    <button className="btn ms-3" id="content-title-buttons">Nuclear</button>
                </div>

                <div>
                    <div className="row g-0 mt-4">
                        <div className="col-md-5">
                                <h4 style={{marginTop:'100px'}}>How does it work?</h4>
                                <p className="pt-2" style={{wordBreak:"break-all", paddingRight:'40px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, cumque? Tempora sequi deserunt, sint dolores aut minus doloribus quod, harum nostrum atque ea laboriosam! Totam optio ad fugit facere assumenda ipsam voluptate officia necessitatibus ratione in accusamus, minima odit, laboriosam perspiciatis quos quidem expedita aliquam! Laboriosam numquam rerum facilis tenetur?</p>
                                <p className="pt-2" style={{fontSize:'10px', opacity:0.6}}>16h ago <span style={{fontSize:'15px', paddingLeft:'5px'}}>By Benjamin Franklin</span> </p>
                        </div>
                        <div className="col-md-7" id="content-first-img" style={{backgroundImage: `url(${img1})`}}>                        
                        </div>
                    </div>
                    <div className="row g-0">
                        <p style={{textAlign:'end', opacity:0.6, borderBottom:'1px solid white'}}>  Balloons are lovely</p>
                    </div>
                </div>
                
                <div style={{borderBottom: '1px solid #8c8d8d', paddingBottom:'20px'}}>
                    <div className="row g-0 pt-5">
                        <div className="col-md-4">
                            <div className="row g-0" style={{borderRight:'1px solid #8c8d8d'}}>
                                <div style={{marginLeft:'17px'}}>
                                <div  style={{backgroundImage: `url(${img2})`, height:'200px', width:'90%'}} id='smallercontent'></div>
                                <p style={{textAlign:'end', opacity:0.6, marginRight:'37px'}}>  Balloons are lovely</p>
                                <h4 style={{marginTop:'-10px'}} >How does it work?</h4>
                                <p  style={{wordBreak:"break-all", paddingRight:'40px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat id ipsum quam sint omnis voluptatibus, fugit, mollitia modi ducimus ab dolores porro sapiente harum fugiat.</p>
                                <p style={{fontSize:'10px', opacity:0.6, marginTop:'-15px'}}>16h ago <span style={{fontSize:'15px', paddingLeft:'5px'}}>By Benjamin Franklin</span> </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                        <div className="row g-0" style={{borderRight:'1px solid #8c8d8d'}}>
                                <div style={{marginLeft:'17px'}}>
                                <div  style={{backgroundImage: `url(${img3})`, height:'200px', width:'90%'}} id='smallercontent'></div>
                                <p style={{textAlign:'end', opacity:0.6, marginRight:'37px'}}>  Balloons are lovely</p>
                                <h4 style={{marginTop:'-10px'}} >How does it work?</h4>
                                <p  style={{wordBreak:"break-all", paddingRight:'40px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat id ipsum quam sint omnis voluptatibus, fugit, mollitia modi ducimus ab dolores porro sapiente harum fugiat.</p>
                                <p style={{fontSize:'10px', opacity:0.6, marginTop:'-15px'}}>16h ago <span style={{fontSize:'15px', paddingLeft:'5px'}}>By Benjamin Franklin</span> </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                        <div className="row g-0" style={{borderLeft:'1px solid #8c8d8d'}}>
                                <div style={{marginLeft:'17px'}}>
                                <div  style={{backgroundImage: `url(${img8})`, height:'200px', width:'90%'}} id='smallercontent'></div>
                                <p style={{textAlign:'end', opacity:0.6, marginRight:'37px'}}>  Balloons are lovely</p>
                                <h4 style={{marginTop:'-10px'}} >How does it work?</h4>
                                <p  style={{wordBreak:"break-all", paddingRight:'40px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat id ipsum quam sint omnis voluptatibus, fugit, mollitia modi ducimus ab dolores porro sapiente harum fugiat.</p>
                                <p style={{fontSize:'10px', opacity:0.6, marginTop:'-15px'}}>16h ago <span style={{fontSize:'15px', paddingLeft:'5px'}}>By Benjamin Franklin</span> </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{marginTop:'70px', borderBottom: '1px solid #8c8d8d', paddingBottom:'20px'}}>
                    <div className="row g-0 ms-3">
                        <div className="col">
                        <div className="row g-0 ps-3" style={{borderRight:'1px solid #8c8d8d'}}>   
                            <div  style={{backgroundImage: `url(${img4})`, height:'100px', width:'90%'}} id='smallercontent'></div>
                            <p className="mt-3" style={{wordBreak:"break-all", paddingRight:'40px'}}>Lorem, ipsum dolor consectetur adipisicing elit. </p>
                        </div>
                        </div>

                        <div className="col">
                        <div className="row g-0 ps-3" style={{borderRight:'1px solid #8c8d8d'}}>   
                            <div  style={{backgroundImage: `url(${img5})`, height:'100px', width:'90%'}} id='smallercontent'></div>
                            <p className="mt-3" style={{wordBreak:"break-all", paddingRight:'40px'}}>Lorem, ipsum dolor consectetur adipisicing elit. </p>
                        </div>
                        </div>
                        <div className="col">
                        <div className="row g-0 ps-3" style={{borderRight:'1px solid #8c8d8d'}}>   
                            <div  style={{backgroundImage: `url(${img6})`, height:'100px', width:'90%'}} id='smallercontent'></div>
                            <p className="mt-3" style={{wordBreak:"break-all", paddingRight:'40px'}}>Lorem, ipsum dolor consectetur adipisicing elit. </p>
                        </div>
                        </div>
                        <div className="col">
                            <div className="row g-0 ps-3" style={{borderRight:'1px solid #8c8d8d'}}>   
                            <div  style={{backgroundImage: `url(${img7})`, height:'100px', width:'90%'}} id='smallercontent'></div>
                            <p className="mt-3" style={{wordBreak:"break-all", paddingRight:'40px'}}>Lorem, ipsum dolor consectetur adipisicing elit. </p>
                        </div>
                        </div>
                        <div className="col">
                            <div className="row g-0 ps-3">   
                            <div  style={{backgroundImage: `url(${img8})`, height:'100px', width:'90%'}} id='smallercontent'></div>
                            <p className="mt-3" style={{wordBreak:"break-all", paddingRight:'40px'}}>Lorem, ipsum dolor consectetur adipisicing elit. </p>
                        </div>
                        </div>
                    </div>
                </div>
                <div style={{marginTop:'70px', borderBottom: '1px solid #8c8d8d', paddingBottom:'20px'}}>
                    <div className="row g-0 ms-3">
                        <div className="col">
                        <div className="row g-0 ps-3" style={{borderRight:'1px solid #8c8d8d'}}>   
                            <div  style={{backgroundImage: `url(${img9})`, height:'100px', width:'90%'}} id='smallercontent'></div>
                            <p className="mt-3" style={{wordBreak:"break-all", paddingRight:'40px'}}>Lorem, ipsum dolor consectetur adipisicing elit. </p>
                        </div>
                        </div>

                        <div className="col">
                        <div className="row g-0 ps-3" style={{borderRight:'1px solid #8c8d8d'}}>   
                            <div  style={{backgroundImage: `url(${img10})`, height:'100px', width:'90%'}} id='smallercontent'></div>
                            <p className="mt-3" style={{wordBreak:"break-all", paddingRight:'40px'}}>Lorem, ipsum dolor consectetur adipisicing elit. </p>
                        </div>
                        </div>
                        <div className="col">
                        <div className="row g-0 ps-3" style={{borderRight:'1px solid #8c8d8d'}}>   
                            <div  style={{backgroundImage: `url(${img11})`, height:'100px', width:'90%'}} id='smallercontent'></div>
                            <p className="mt-3" style={{wordBreak:"break-all", paddingRight:'40px'}}>Lorem, ipsum dolor consectetur adipisicing elit. </p>
                        </div>
                        </div>
                        <div className="col">
                            <div className="row g-0 ps-3" style={{borderRight:'1px solid #8c8d8d'}}>   
                            <div  style={{backgroundImage: `url(${img12})`, height:'100px', width:'90%'}} id='smallercontent'></div>
                            <p className="mt-3" style={{wordBreak:"break-all", paddingRight:'40px'}}>Lorem, ipsum dolor consectetur adipisicing elit. </p>
                        </div>
                        </div>
                        <div className="col">
                            <div className="row g-0 ps-3">   
                            <div  style={{backgroundImage: `url(${img13})`, height:'100px', width:'90%'}} id='smallercontent'></div>
                            <p className="mt-3" style={{wordBreak:"break-all", paddingRight:'40px'}}>Lorem, ipsum dolor consectetur adipisicing elit. </p>
                        </div>
                        </div>
                    </div>
                </div>
                <div style={{marginTop:'70px', borderBottom: '1px solid #8c8d8d', paddingBottom:'20px'}}>
                    <div className="row g-0 ms-3">
                        <div className="col">
                        <div className="row g-0 ps-3" style={{borderRight:'1px solid #8c8d8d'}}>   
                            <div  style={{backgroundImage: `url(${img14})`, height:'100px', width:'90%'}} id='smallercontent'></div>
                            <p className="mt-3" style={{wordBreak:"break-all", paddingRight:'40px'}}>Lorem, ipsum dolor consectetur adipisicing elit. </p>
                        </div>
                        </div>

                        <div className="col">
                        <div className="row g-0 ps-3" style={{borderRight:'1px solid #8c8d8d'}}>   
                            <div  style={{backgroundImage: `url(${img15})`, height:'100px', width:'90%'}} id='smallercontent'></div>
                            <p className="mt-3" style={{wordBreak:"break-all", paddingRight:'40px'}}>Lorem, ipsum dolor consectetur adipisicing elit. </p>
                        </div>
                        </div>
                        <div className="col">
                        <div className="row g-0 ps-3" style={{borderRight:'1px solid #8c8d8d'}}>   
                            <div  style={{backgroundImage: `url(${img16})`, height:'100px', width:'90%'}} id='smallercontent'></div>
                            <p className="mt-3" style={{wordBreak:"break-all", paddingRight:'40px'}}>Lorem, ipsum dolor consectetur adipisicing elit. </p>
                        </div>
                        </div>
                        <div className="col">
                            <div className="row g-0 ps-3" style={{borderRight:'1px solid #8c8d8d'}}>   
                            <div  style={{backgroundImage: `url(${img2})`, height:'100px', width:'90%'}} id='smallercontent'></div>
                            <p className="mt-3" style={{wordBreak:"break-all", paddingRight:'40px'}}>Lorem, ipsum dolor consectetur adipisicing elit. </p>
                        </div>
                        </div>
                        <div className="col">
                            <div className="row g-0 ps-3">   
                            <div  style={{backgroundImage: `url(${img7})`, height:'100px', width:'90%'}} id='smallercontent'></div>
                            <p className="mt-3" style={{wordBreak:"break-all", paddingRight:'40px'}}>Lorem, ipsum dolor consectetur adipisicing elit. </p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
     );
}

export default ScienceContent;
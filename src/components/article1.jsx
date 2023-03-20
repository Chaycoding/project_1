import ArticleNav from "./articleNav";

function ArticleOne(props) {
    const image = {backgroundImage: props.image}

    return ( 
        <div>
            <ArticleNav/>
        <div className="text-white" style={{paddingBottom:'25%'}}>
            <div className="article-image" style={image}>
            </div>
            <p className="text-muted ps-5" style={{marginTop: '60px'}}>{props.img}</p>
            <div className="container pt-5" >
            <h6 style={{fontWeight:700}}>By {props.author}</h6>

            <div style={{display: 'inline'}} >
            <p style={{fontSize: '12px', display: 'inline'}}>{props.date}  </p>
            </div>
            <div className="text-end position-absolute" style={{display: 'inline', right:'116px'}}>
            <p style={{fontSize: '12px', display: 'inline'}}>{props.readLength}  </p>
            </div>
            
            <h1 className="text-center pt-5">{props.name}</h1>
            <p>{props.content.paragraph1}</p>     
            <p style={{paddingTop:'20px'}}>{props.content.paragraph2}</p>     
            </div>
        </div>
        </div>
     );
}

export default ArticleOne;
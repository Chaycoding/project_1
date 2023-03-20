import {Link} from 'react-router-dom';

function Content() {
    return ( 
        <div style={{marginTop:'5%', marginBottom:'200px'}}  >
            <div class="row g-0 text-white justify-content-evenly" style={{height:'250px'}}>
                <div class="col-md-3">
                    <p className="card-text fw-bold pt-5"  style={{fontSize: '2rem', marginTop:'75px'}}>Articles to read on a<br/> sunday morning<br/> with a cup of coffee</p>
                </div>
                <div class="col-md-7 pt-5" >
                    <div className="row g-0">
                    <div class="col-md-4">
                        <Link to='/content'><button className="btn subjectButton subjectButton-art btn-primary">Art</button></Link>
                    </div>
                    <div class="col-md-4">
                        <Link to='/content'><button className="btn subjectButton subjectButton-econ btn-primary">Economics</button></Link>
                    </div>
                    <div class="col-md-4">
                        <Link to='/content'><button className="btn subjectButton subjectButton-history btn-primary">History</button></Link>
                    </div>
                    </div>
                    <div className="row g-0">
                    <div class="col-md-4">
                        <Link to='/content'><button className="btn subjectButton subjectButton-health btn-primary">Health</button></Link>
                    </div>
                    <div class="col-md-4">
                        <Link to='/content'><button className="btn subjectButton subjectButton-sports btn-primary">Sports</button></Link>
                    </div>
                    <div class="col-md-4">
                        <Link to='/content'><button className="btn subjectButton subjectButton-gaming btn-primary">Gaming</button></Link>
                    </div>
                    </div>
                    <div className="row g-0">
                    <div class="col-md-4">
                        <Link to='/content'><button className="btn subjectButton subjectButton-tech btn-primary">Technology</button></Link>
                    </div>
                    <div class="col-md-4">
                        <Link to='/content'><button className="btn subjectButton subjectButton-science btn-primary">Science</button></Link>
                    </div>
                    <div class="col-md-4">
                        <Link to='/content'><button className="btn subjectButton subjectButton-lit btn-primary">Literature</button></Link>
                    </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Content;
import Styles from '../styles/Home.module.css'
import Client from './components/Client';
import Featured from './components/Featured';

const index = () => {
  return (
    <div>
      <div className={Styles.header}>
        <div className={Styles.top +" container"}>
          <h1 class="animate__animated animate__backInLeft">MetaConstruct</h1>
          <h4>Lorem, ipsum dolor.</h4>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
      </div>
      <div className={Styles.stat + " container"}>
        <div className="row" style={{height:"100%"}}>
          <div className="col-sm a container d-flex justify-content-center align-items-center flex-column">
            <h4>5+ <span className="text-secondary"> Years of Expierence</span>
            </h4>
          </div>
          <div className="col-sm a container d-flex justify-content-center align-items-center flex-column">
            <h4>10+ <span className="text-secondary">Companies</span>
            </h4>
          </div>
          <div className="col-sm a container d-flex justify-content-center align-items-center flex-column">
            <h4>50+ <span className="text-secondary">Buildings</span>
            </h4>
          </div>
          <div className="col-sm a container d-flex justify-content-center align-items-center flex-column">
            <h4>1000+ <span className="text-secondary"> Happy Customers</span>
            </h4>
          </div>
        </div>
      </div>
      <Featured/>
      <Client/>
    </div>
  );
}

export default index;
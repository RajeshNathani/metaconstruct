import Styles from '../styles/Home.module.css'
import Clients from './components/Clients';
import Featured from './components/Services';
import Galary from './components/Projects';
import About from './components/About'
import Floating from './components/Floating';

const index = () => {
  return (
    <div>
      <div className={Styles.header}>
        <div className={Styles.top + " container"}>
          <h1 class="animate__animated animate__backInLeft">MetaConstruct</h1>
          <h4>Lorem, ipsum dolor.</h4>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
      </div>
      <About></About>
      <Clients />
      <Galary />
      <Featured />
      <Floating />
    </div>
  );
}

export default index;
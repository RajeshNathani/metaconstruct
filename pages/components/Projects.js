import Styles from '../../styles/Home.module.css'
import ProjectModal from './ProjectModal';

const Galary = () => {
    return (

        <div className={Styles.galary}>
            <div className={Styles.c}> <br />
                <h1>Featured Work</h1>
                <div class="col-md-12">
                    <div class="row">
                        <div class={Styles.gal}>
                            <ProjectModal name="first" src='https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' text='lorem ipsum' />
                            <ProjectModal name="second" src='https://images.pexels.com/photos/2442904/pexels-photo-2442904.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' text='lorem ipsum second' />
                            <img src="https://images.pexels.com/photos/4353719/pexels-photo-4353719.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                            <img src="https://images.pexels.com/photos/262367/pexels-photo-262367.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                            <img src="https://preview.ibb.co/i0PmHk/1.jpg" alt="" />
                            <img src="https://images.pexels.com/photos/1534411/pexels-photo-1534411.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                            <img src="https://preview.ibb.co/i0PmHk/1.jpg" alt="" />
                        </div>

                    </div>
                </div>
            </div>
        </div>

    );
}

export default Galary;
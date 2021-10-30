import Styles from '../../styles/Home.module.css'
import Image from 'next/image'
import kit from '../../public/images/kitchen.jpg'
import off from '../../public/images/office.jpg'
import Link from 'next/link'
const Featured = () => {
    return (
        <div>
            <div className={Styles.featured}>
                <h1 data-aos="fade-up">Services</h1>
                <p className="text-secondary">We Take Pride in Our Work</p> <br />
                <div className="row">
                    <div className="col-sm">
                        <div className={Styles.cardf}>
                            <Image className={Styles.cimg} src={kit} alt="Kitchen" width={320} height={250}></Image>
                            <div className={Styles.middle}>
                                <div className={Styles.overText}>Modular Kitchen</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className={Styles.cardf}>
                            <Image className={Styles.cimg} src={off} alt="Office" width={320} height={250}></Image>
                            <div className={Styles.middle}>
                                <div className={Styles.overText}>Office</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className={Styles.cardf}>
                            <Image className={Styles.cimg} src={off} alt="Office" width={320} height={250}></Image>
                            <div className={Styles.middle}>
                                <div className={Styles.overText}>Office</div>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <Link href='#'><a className='btn btn-warning'> See All Services</a></Link>
            </div>
        </div>
    );
}

export default Featured;
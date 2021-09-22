import Styles from '../../styles/Home.module.css'
import avatar from '../../public/images/avatar.jpg'
import Image from 'next/image';
const Client = () => {
    return (
        <div>
            <div className={Styles.client}>
                <h1>What Our Clients Say</h1> <br />
                    <div className="row">
                        <div className="col-sm">
                        <div className={Styles.testimonial}>
                                <p className={Styles.description}>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium ad asperiores at atque culpa dolores eaque fugiat hic illo ipsam ipsum minima modi necessitatibus nemo officia, omnis perferendis placeat quaerat quas quis ratione rerum sint sit vitae. Animi architecto consequatur delectus eos id.
                                </p>
                                <div className={Styles.pic}>
                                    <Image src={avatar} height={100} width={100}/>
                                </div>
                                <h3 class={Styles.title}>Williamson</h3>
                                <span className={Styles.post}>House Owner</span>
                        </div>
                        </div>
                            <div className="col-sm">
                            <div className={Styles.testimonial}>
                                <p className={Styles.description}>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium ad asperiores at atque culpa dolores eaque fugiat hic illo ipsam ipsum minima modi necessitatibus nemo officia, omnis perferendis placeat quaerat quas quis ratione rerum sint sit vitae. Animi architecto consequatur delectus eos id.
                                </p>
                                <div className={Styles.pic}>
                                    <Image src={avatar} height={100} width={100}/>
                                </div>
                                <h3 class={Styles.title}>Williamson</h3>
                                <span className={Styles.post}>Office Owner</span>
                        </div>
                            </div>
                            
                </div>
            </div>
        </div>
    );
}

export default Client;
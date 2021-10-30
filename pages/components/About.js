import Styles from '../../styles/Home.module.css'

const About = () => {
    return (
        <div>
            <div className={Styles.about}>
                <div className="container">
                    <h1 data-aos="fade-up">About</h1> <br />
                    <p className="lead">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo mollitia ad autem asperiores aperiam rerum sed. Dolores inventore, ullam cupiditate earum mollitia eveniet quibusdam, temporibus vero at optio laudantium rem eum aperiam quod odit. Sequi ad, expedita consequuntur, modi excepturi veniam odit fugiat, facere vitae ut voluptates quod. Eum, quibusdam.
                    </p>
                </div><br />
                <div className="container">
                    <h1 data-aos="fade-up">Our Vision</h1><br />
                    <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus voluptas, possimus vitae fuga ex tempora praesentium necessitatibus natus cumque aliquid ab odit obcaecati quaerat? Atque tempora a voluptates nisi ab cumque dolorum eveniet vel molestiae! Ea eius laborum quas? Consequatur cumque, voluptatibus ad iste qui neque necessitatibus at odit dolorem?</p>
                </div>
            </div>
        </div>
    );
}

export default About;
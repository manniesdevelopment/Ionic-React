import React from 'react';
import { IonSlides, IonSlide, IonContent, IonItem, IonButton, IonIcon } from '@ionic/react';
import { Link } from 'react-router-dom';

import { arrowForwardCircle, arrowForward } from 'ionicons/icons'
// Optional parameters to pass to the swiper instance. See http://idangero.us/swiper/api/ for valid options.
const slideOpts = {
    initialSlide: 1,
    speed: 400
};

export const Slider: React.FC = () => {

    return (
        <IonContent className="ion-padding" scroll-y="false">
            <IonSlides>

                <IonSlide>
                    <div >
                        <img src="./assets/slide-1.png" />
                        <h2>Welcome</h2>
                        <p>The <b>ionic conference app</b> is a practical preview of the ionic framework in action, and a demonstration of proper code use.</p>
                    </div>
                </IonSlide>

                <IonSlide>
                    <div>
                        <img src="./assets/slide-2.png" />
                        <h2>What is Ionic?</h2>
                        <p><b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.</p>
                    </div>
                </IonSlide>

                <IonSlide>
                    <div>
                        <img src="./assets/slide-3.png" />
                        <h2>What is Ionic Appflow?</h2>
                        <p><b>Ionic Appflow</b> is a powerful set of services and features built on top of Ionic Framework that brings a totally new level of app development agility to mobile dev teams.</p>
                    </div>
                </IonSlide>

                <IonSlide>
                    <div>
                        <img src="./assets/slide-4.png" />
                        <h2>Let's Dive</h2>
                        <IonButton fill="clear" routerLink="/SignUp">Join the League <IonIcon slot="end" icon={arrowForward}></IonIcon></IonButton>

                        <IonButton fill="clear" routerLink="/Login" > Already In?? <IonIcon slot="end" icon={arrowForward}></IonIcon></IonButton>
                    </div>
                </IonSlide>

            </IonSlides>
        </IonContent>
    )

}

export default Slider;
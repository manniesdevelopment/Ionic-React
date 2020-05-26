import React, { useState } from 'react';
import { IonInput, IonCard, IonItem, IonButton, IonCardContent, IonIcon } from '@ionic/react';
import { arrowForward } from 'ionicons/icons';
import Axios from 'axios';
const SignUp = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [verifypassword, setVerifyPassword] = useState('');

    const handleSignUp = (e) => {
        e.preventDefault();
        document.getElementById("login").innerHTML = "Logging In."
        console.log(email + '  ' + password + '-----')
        let payload = {
            name: "Manasvi",
            email: "manny@gmail.com",
            password: "Manny@123",
            password2: "Manny@123"
        }

        Axios.post('http://3.105.129.161/api/users/register', payload, { mode: 'no-cors', headers: { 'Access-Control-Allow-Origin': '*' } }).then((res) => {
            console.log(res);
            window.location = '/pages/';
        },
            (err) => {
                console.log(err);
            }
        )

    }

    return (
<>
        <IonCard >
            <img src='./assets/Login.png' alt="Login Image" />
            <IonCardContent>
                <form>
                    {/* <IonItem> */}
                    <IonInput autofocus="true" value={name} onInput={(e) => { setName(e.target.value) }} type="text" placeholder="Name" />
                    {/* </IonItem> */}
                    <br />
                    {/* <IonItem> */}
                    {/* <br /> */}
                    <IonInput value={email} onInput={(e) => { setEmail(e.target.value) }} type="text" placeholder="Email ID" />
                    {/* </IonItem> */}

                    {/* <br /><IonItem> */}
                    <br />
                    <IonInput value={password} onInput={(e) => { setPassword(e.target.value) }} type="text" placeholder="Password" />
                    {/* </IonItem> */}

                    {/* <br /><IonItem> */}
                    <br />
                    <IonInput value={verifypassword} onInput={(e) => { setVerifyPassword(e.target.value) }} type="text" placeholder="Confirm Password" />
                    {/* </IonItem> */}

                    <br />

                    {/* <IonItem> */}
                    <IonButton expand="block" id="login" onClick={handleSignUp} > Sign UP</IonButton>
                    {/* </IonItem> */}
                </form>
            </IonCardContent>
        </IonCard>

        <IonButton expand="block" fill="clear" routerLink="/SignUp">Missing Out on Password <IonIcon slot="end" icon={arrowForward}></IonIcon></IonButton>

        <IonButton expand="block" fill="clear" routerLink="/Login">Already A Member!!<IonIcon slot="end" icon={arrowForward}></IonIcon></IonButton>

</>


    );
}

export default SignUp;
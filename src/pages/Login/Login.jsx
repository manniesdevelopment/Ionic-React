import React, { useState } from 'react';
import { IonInput, IonCard, IonItem, IonButton, IonCardContent, IonIcon } from '@ionic/react';
import { arrowForward } from 'ionicons/icons';
import Axios from 'axios';
const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        document.getElementById("login").innerHTML = "Logging In."
        console.log(email + '  ' + password + '-----')
        let payload = {
            "email": email,
            "password": password,
        }
        // console.log(typeOf(payload));
        // const response = fetch("http://3.105.129.161/api/users/login", {
        //     method: 'POST', // *GET, POST, PUT, DELETE, etc.
        //     mode: 'cors', // no-cors, *cors, same-origin
        //     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        //     credentials: 'same-origin', // include, *same-origin, omit
        //     headers: {
        //         'Content-Type': 'application/json'
        //         // 'Content-Type': 'application/x-www-form-urlencoded',
        //     },
        //     redirect: 'follow', // manual, *follow, error
        //     referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        //     body: JSON.stringify(payload) // body data type must match "Content-Type" header
        // }).then((res) => {
        //     console.log(res)
        // }, (err) => { document.getElementById("login").innerHTML = "Login" });
        Axios.post('http://3.105.129.161/api/users/login', payload).then((res) => {
            if (res.success) window.location = "feed";
        })
        // let response = await Axios.post('http://3.105.129.161/api/users/login', payload);
        // try {
        //     if (response.success) window.location = "feed"
        // }
        // catch (e) { console.log(e) };

    }

    return (
<>
        <IonCard>
            <img src='./assets/Login.png' alt="Login Image" />
            <IonCardContent>
                <form>
                    {/* <IonItem> */}
                    <IonInput autofocus="true" value={email} onInput={(e) => { setEmail(e.target.value) }} type="text" placeholder="Email ID" />
                    {/* </IonItem> */}
                    <br />
                    {/* <IonItem> */}
                    <br />
                    <IonInput required={true} value={password} onInput={(e) => { setPassword(e.target.value) }} type="text" placeholder="Password" />
                    {/* </IonItem> */}

                    <br />

                    {/* <IonItem> */}
                    <IonButton expand="block" id="login" onClick={handleLogin} > Login</IonButton>
                    {/* </IonItem> */}
                </form>
            </IonCardContent>
        </IonCard>

        <IonButton expand="block" fill="clear" routerLink="/SignUp">Missing Out on Password <IonIcon slot="end" icon={arrowForward}></IonIcon></IonButton>

        <IonButton expand="block" fill="clear" routerLink="/SignUp">Still Not A Member<IonIcon slot="end" icon={arrowForward}></IonIcon></IonButton>

</>


    );
}

export default Login;
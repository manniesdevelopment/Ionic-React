import Menu from './components/Menu';
import Slider from './components/Slider/Slider';
import Page from './pages/Page';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
// import Reaction from './components/Reactions/Reactions';
import React, { useState } from 'react';
import { IonApp, IonRouterOutlet, IonSplitPane, IonButton, IonItem, IonContent } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route, Link } from 'react-router-dom';
import { AndroidFingerprintAuth } from '@ionic-native/android-fingerprint-auth';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App = () => {

  // let getFingerPrintInfo = async () => {
  //   let fingerPrint = await AndroidFingerprintAuth.decrypt('IonicApp');

  // }
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem("LoggedIn"));
  // if (loggedIn && AndroidFingerprintAuth.isAvailable) {
  //   getFingerPrintInfo();
  // }


  if (!loggedIn) {
    return (
      <IonApp>
        <IonContent>

          <IonReactRouter>
            <IonRouterOutlet>
              <IonContent>
                <Route path='/Login' component={Login} exact={true} />
                <Route path='/SignUp' component={SignUp} exact={true} />
                <Route path='/' component={Slider} exact={true} />
              </IonContent>
            </IonRouterOutlet>
          </IonReactRouter>
        </IonContent>
      </IonApp>
    );
  }
  else {
    return (
      <IonApp>
        <IonReactRouter>
          <IonSplitPane contentId="main">
            <Menu />
            <IonRouterOutlet id="main">
              <Route path="/page/:name" component={Page} exact />
              <Route path="/Slider" component={Slider} exact />
              <Route path="/Login" component={Login} exact />
              <Redirect from="/" to="/page/News" exact />
            </IonRouterOutlet>
          </IonSplitPane>
        </IonReactRouter>
      </IonApp>
    );
  }
};

export default App;


import {AuthMethods, AuthProviders} from "angularfire2";

 export const firebaseConfig = {
    apiKey: "AIzaSyBJrZAmdn03X-DIkTNe0-QuI-emyFi5A2c",
    authDomain: "final-project-recording-85878.firebaseapp.com",
    databaseURL: "https://final-project-recording-85878.firebaseio.com",
    storageBucket: "final-project-recording-85878.appspot.com",
    messagingSenderId: "525883602704"
  };



export const authConfig = {
    provider: AuthProviders.Password,
    method: AuthMethods.Password
};
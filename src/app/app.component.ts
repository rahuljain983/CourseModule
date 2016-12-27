import { Component } from '@angular/core';
import { firebaseConfig } from "../environments/firebase.config";
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from "angularfire2";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'application works!';
  course$: FirebaseListObservable<any>;
  courseObject$: FirebaseObjectObservable<any>;


  constructor( private af : AngularFire )  
  {
    //Method that is used when get data from firebase.js
 // firebase.initializeApp(firebaseConfig);
  // var root = firebase.database().ref();
  // root.on('value',function (snapshot)
  // {
  //     console.log(snapshot.val());
  // });

    this.course$  = af.database.list('courses');
    this.courseObject$  = af.database.object('courses/-KZMzXljX22ZaNZQtp6e/description')


  this.course$.subscribe(
    val => console.log(val)
  );
//or
  this.course$.subscribe(console.log);

  this.courseObject$.subscribe(console.log);

  }

  // Similiarly we can also create methods for remove update etc
   addList() 
   {
    this.course$.push('Hello');   
   }

   removeList() 
   {
     this.course$.remove('-K_0-9hc1q650lXfxirl');
   }
}

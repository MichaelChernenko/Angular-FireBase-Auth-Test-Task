import { Injectable } from '@angular/core';
import 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class UserService {

  constructor(
    public db: AngularFirestore,
    public afAuth: AngularFireAuth
  ) { }

  getCurrentUser() {
    return new Promise<any>((resolve, reject) => {
      let user = firebase.auth().onAuthStateChanged(user => {
        user ? resolve(user) : reject('No user logged in');
      })
    })
  }
}

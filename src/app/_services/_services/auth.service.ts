import { Injectable } from '@angular/core';
import { CanActivate, Router } from "@angular/router";
import { AngularFireModule } from 'angularFire2';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  public user_displayName: any;
  public user_email: any;
  public _user: Observable<firebase.User>;
  public userDetails: firebase.User = null;
public photoUrl:any;
  constructor(public _firebaseAuth: AngularFireAuth, private _firebasedb: AngularFireDatabase, private router: Router) {
    _firebaseAuth.authState.subscribe((user: any) => {
      if (user) {
        this.userDetails = user;
        console.log(this.userDetails);
        this.user_displayName = user.displayName;
        console.log(this.user_displayName);
        this.user_email = user.email;
        console.log(this.user_email);
        this.photoUrl = user.photoUrl;
        return user;
      }
      else {
        this.userDetails = null;
      }
    }
    );
  }

  get user(): Observable<firebase.User> {
    return this._user;
  }

  set user(value: Observable<firebase.User>) {
    this._user = value;
  }

  get authenticated(): boolean {
    return this._user !== null;
  }



  signInWithGoogle(): Promise<any> {
    const provider = new firebase.auth.GoogleAuthProvider()
    return this.oAuthLogin(provider);
  }
  private oAuthLogin(provider): Promise<any> {
    return this._firebaseAuth.auth.signInWithPopup(provider)
      // .then((credential) => {
      //   this._firebaseAuth = credential.user
      //   this.updateUserData()
      // })
      .catch(error => console.log(error));
  }
  isLoggedIn() {
    if (this.userDetails == null) {
      return false;

    } else {
      return true;
    }
  }
  get currentUser(): any {
    return this.isLoggedIn ? this.userDetails : null;
  }
  // Returns
  get currentUserObservable(): any {
    return this._firebaseAuth.authState
  }
  // Returns current user UID
  get currentUserId(): string {
    return this.isLoggedIn ? this.userDetails.uid : '';
  }
  // Returns current user display name or Guest
  get currentUserDisplayName(): string {
    if (!this._firebaseAuth) {
      return 'Guest'
    } else {
      return this._firebaseAuth['displayName'] || 'User without a Name'
    }
  }
  /**
   *
   *
  addUserInfo(){
    //We saved their auth info now save the rest to the db.
    this.userDetails.push({
      email: this.email,
      displayName: this.displayName
    });
  }*/
  //// Email/Password Auth ////
  emailSignUp(email: string, password: string) {
    return this._firebaseAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((user) => {
        this._firebaseAuth = user
        this.updateUserData()
      })
      .catch(error => console.log('ERROR @ AuthService#createUserWithEmailAndPassword() :', error));
  }

  emailLogin(email: string, password: string) : Promise<any>{
    return this._firebaseAuth.auth.signInWithEmailAndPassword(email, password)
      .then((user) => {
        this._firebaseAuth = user
        this.updateUserData()
      })
      .catch(error => console.log('ERROR @ AuthService#createUserWithEmailAndPassword() :', error));
  }


// saveUserInfoFromForm(uid, name, email) {
//     return this._firebasedb.object('registeredUsers/' + uid).set({
//       name: name,
//       email: email,
//     });
//   }
  // Sends email allowing user to reset password
  /* resetPassword(email: string) {
     const fbAuth = firebase.auth();
 
     return fbAuth.sendPasswordResetEmail(email)
       .then(() => console.log('email sent'))
       .catch((error) => console.log(error))
   }*/

  //Sign Out

  logout() {
    this._firebaseAuth.auth.signOut()
      .then((res) => this.router.navigate(['/']));
  }
  //// Helpers ////
  private updateUserData(): void {
    // Writes user name and email to realtime db
    // useful if your app displays information about users or for admin features
    const path = `users/${this.currentUserId}`; // Endpoint on firebase
    const userRef: AngularFireObject<any> = this._firebasedb.object(path);

    const data = {
      user_email: this.user_email,
      name: this.user_displayName
    }

    userRef.update(data)
      .catch(error => console.log(error));

  }

}


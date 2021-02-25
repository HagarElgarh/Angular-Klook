import { Injectable } from '@angular/core';
import { FirebaseApp } from '@angular/fire';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { User } from './../viewModels/user';
// import { User as FirebaseUser } from 'firebase'
import firebase from "firebase/app"

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // itemss: Observable<User[]>;
  user:Observable<firebase.User|null>

  // user:Observable<firebase.>
  constructor(private afAuth : AngularFireAuth,private fb:AngularFirestore) { 
    this.user = afAuth.user
    // this.itemss=this.fb.collection<User>('user').valueChanges();

  }

  signup(email:string , password:string){
    ////old////
    // return this.afAuth.createUserWithEmailAndPassword(email,password)
    ////old////


  }

  login(email:string,password:string){
    ////old////
    // return this.afAuth.signInWithEmailAndPassword(email,password)
    ////old////

    console.log("auth",email,password);
    return this.fb.collection<User>('users', ref => ref.where('Email', '==', email).where('Password', '==', password))
    .snapshotChanges();



  }

  checkforAdmin(email:string,password:string){

    return this.fb.collection<User>('user', ref => ref.where('Email', '==', email).where('Password', '==', password))
    .valueChanges();
  
  }
  
  userId:string=''
  
  addUser(itemm:User){

    ////old////

    // return this.fb.doc('user/'+id).set({
    //   Password : Password,
    //   Email : Email,
    //   Type:type,
    //   JoinDate:Date.now()
  // })

    ////old////

    return this.fb.collection('users').add(itemm).then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
     return docRef.id;
    })
      .catch(function (error) {
        console.error("Error adding document: ", error);
        return "error"
      });

      


  }

  logout(){
    ////old////
    return this.afAuth.signOut();
    ////old////


  }

  getalluser(){
    
    return this.fb.collection<User>('user' ,ref => ref.where( 'Type' , '==', 'user' ))
    .snapshotChanges();

  }

  getalladmin(){
    
    return this.fb.collection<User>('user' ,ref => ref.where( 'Type' , '==', 'admin' ))
    .snapshotChanges();

  }

  getbyID(idd:string){
    // const [userDetails, setUserDetails] = useState('')
return this.fb.collection('users').doc(idd).get()
        // .then(snapshot => setUserDetails(snapshot.data()))

  }

  deleteCoffeeOrder(id:string) {
    return this.fb.collection("user").doc(id).delete();
    // this.afAuth.currentUser
  }

}

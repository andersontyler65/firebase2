

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import firebase from 'firebase'
import SignUp from './components/auth/signup'
import ItWorked from './components/auth/itworked'


// Initialize Firebase
 var config = {
   apiKey: "AIzaSyC7AGL7Y2U7F7P1kwWVH9NMnDA_o61nTPk",
   authDomain: "new2-5bdf8.firebaseapp.com",
   databaseURL: "https://new2-5bdf8.firebaseio.com",
   projectId: "new2-5bdf8",
   storageBucket: "new2-5bdf8.appspot.com",
   messagingSenderId: "519851609112"
 };
 firebase.initializeApp(config);







export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userEmail: null
    }
    //this.authCheck = this.authCheck.bind(this)
    //this.toggleLogin = this.toggleLogin.bind(this)
    this.signIn = this.signIn.bind(this)
  }


  // authCheck() {
  //   firebase.auth().onAuthStateChanged(function(user) {
  //   if (user) {
  //     // User is signed in.
  //     var displayName = user.displayName;
  //     var email = user.email;
  //     var emailVerified = user.emailVerified;
  //     var photoURL = user.photoURL;
  //     var isAnonymous = user.isAnonymous;
  //     var uid = user.uid;
  //     var providerData = user.providerData;
  //     console.log(email)
  //     this.setState({auth: true})
  //     // ...
  //   } else {
  //     // User is signed out.
  //     // ...
  //     console.log('Not today fuckface')
  //   }
  //  })
  // }

  componentDidMount() {
    this.authListener()
  }

  authListener() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log(user.email)
        this.setState({userEmail: user.email})

      } else {
        console.log('no user signed in')
        this.setState({userEmail: null})
      }
      })
  }

  // toggleLogin() {
  //   this.state.auth ? this.setState({auth: false}) : this.setState({auth: true})
  // }

  // async componentDidMount() {
  //   firebase.auth().onAuthStateChanged(user => {
  //     console.log(user.email)
  //     //user ? this.setState({auth: true}) : this.setState({auth: false})
  //     })
  // }



  signIn(email, password) {
    //console.log(email, password)
    //console.log(this.state.userEmail)
    firebase.auth().signInWithEmailAndPassword(email, password)
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage)
        // ...
      })
  }

  signUp(email, password) {
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode, errorMessage)
      // ...
    })
  }

  logOut() {
    firebase.auth().signOut()
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.userEmail ? <ItWorked logOut={this.logOut}/> : <SignUp signIn={this.signIn} signUp={this.signUp} toggleLogin={this.toggleLogin}/>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

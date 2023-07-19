import React, { Component } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAh3WvrCCSVVN6BTfQvJ2uqe7JjJBu6aKk",
    authDomain: "e-commerce-54ec8.firebaseapp.com",
    projectId: "e-commerce-54ec8",
    storageBucket: "e-commerce-54ec8.appspot.com",
    messagingSenderId: "128432139371",
    appId: "1:128432139371:web:819273d7ed7358786c152e",
    measurementId: "G-TKGTQZSDCW"
  };
  
  firebase.initializeApp(firebaseConfig);  



const styles = {
  container: {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f1f1f1',
    borderRadius: '5px',
  },
  title: {
    fontSize: '24px',
    textAlign: 'center',
    marginBottom: '20px',
  },
  inputField: {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  signupButton: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#4caf50',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  signupButtonHover: {
    backgroundColor: '#45a049',
  },
  errorMessage: {
    color: 'red',
    marginTop: '10px',
  },
};

export default class Inscription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errorMessage: null,
    };
  }

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSignUp = () => {
    const { email, password } = this.state;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        // Inscription réussie, effectue les actions appropriées
      })
      .catch((error) => {
        this.setState({ errorMessage: error.message });
      });
  };

  render() {
    const { email, password, errorMessage } = this.state;

    return (
      <div style={styles.container}>
        <h1 style={styles.title}>Page d'inscription</h1>
        <input
          type="email"
          name="email"
          value={email}
          onChange={this.handleInputChange}
          placeholder="Adresse e-mail"
          style={styles.inputField}
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={this.handleInputChange}
          placeholder="Mot de passe"
          style={styles.inputField}
        />
        <button
          onClick={this.handleSignUp}
          style={styles.signupButton}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = styles.signupButtonHover.backgroundColor;
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = styles.signupButton.backgroundColor;
          }}
        >
          S'inscrire
        </button>
        {errorMessage && <p style={styles.errorMessage}>{errorMessage}</p>}
      </div>
    );
  }
}

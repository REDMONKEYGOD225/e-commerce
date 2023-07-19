import React, { Component } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

import Accueil from './accueil';

const styles = {
  connectionContainer: {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f1f1f1',
    borderRadius: '5px',
  },
  inputField: {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  loginButton: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#4caf50',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  loginButtonHover: {
    backgroundColor: '#45a049',
  },
  errorMessage: {
    color: 'red',
    marginTop: '10px',
  },
};

export default class Connection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errorMessage: null,
      isLoggedIn: false, // État de connexion
    };
  }

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleLogin = () => {
    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        // Connexion réussie, effectue les actions appropriées
        this.setState({ isLoggedIn: true }); // Met à jour l'état de connexion
      })
      .catch((error) => {
        this.setState({ errorMessage: error.message });
      });
  };

  render() {
    const { email, password, errorMessage, isLoggedIn } = this.state;

    // Vérifie si l'utilisateur est connecté et redirige vers la page d'accueil
    if (isLoggedIn) {
      return <Accueil />;
    }

    return (
      <div style={styles.connectionContainer}>
        <h1>Page de connexion</h1>
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
        <button onClick={this.handleLogin} style={styles.loginButton}>
          Se connecter
        </button>
        {errorMessage && <p style={styles.errorMessage}>{errorMessage}</p>}
      </div>
    );
  }
}

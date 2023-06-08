import React, { useState } from 'react';

const Connecter = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // État de connexion

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Effectuez ici votre logique de connexion
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
    // Réinitialisez les champs du formulaire
    setUsername('');
    setEmail('');
    setPassword('');
    setIsLoggedIn(true); // Mettre à jour l'état de connexion
  };

  const handleLogout = () => {
    // Effectuez ici votre logique de déconnexion
    setIsLoggedIn(false); // Mettre à jour l'état de connexion
  };

  return (
    <div style={{ marginLeft: '500px', backgroundColor: 'blueviolet', color: 'white', height: '350px', width: '400px' }}>
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-4">
          <div className="input-group">
            <input type="text" className="form-control" id="validationDefaultUsername" placeholder="USERNAME" aria-describedby="inputGroupPrepend2" required value={username} onChange={handleUsernameChange} />
          </div>
        </div> <br />

        <div className="col-md-6">
          <input type="email" className="form-control" placeholder="g-mail" id="validationDefault03" required value={email} onChange={handleEmailChange} />
        </div> <br />

        <div className="col-md-3">
          <input type="password" className="form-control" placeholder="entrez le mot de passe" id="validationDefault05" required value={password} onChange={handlePasswordChange} />
        </div> <br />

        <div className="col-12">
          <button className="btn btn-primary1" type="submit">CONNEXION</button>
        </div>

        {isLoggedIn && (
          <div className="col-12">
            <button className="btn btn-primary2" type="button" onClick={handleLogout}>DÉCONNEXION</button>
          </div>
        )}
      </form>
    </div>
  );
};

export default Connecter;

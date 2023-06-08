import React, { useState } from 'react';

const Inscription = () => {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleNomChange = (e) => {
    setNom(e.target.value);
  };

  const handlePrenomChange = (e) => {
    setPrenom(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Effectuez ici votre logique d'inscription
    console.log('Nom:', nom);
    console.log('Prénom:', prenom);
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
    // Réinitialisez les champs du formulaire
    setNom('');
    setPrenom('');
    setUsername('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div style={{ marginLeft: '500px', backgroundColor: 'blueviolet', color: 'white', height: '350px', width: '400px' }}>
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-4">
          <input type="text" className="form-control" id="validationDefault01" placeholder="NOM" required value={nom} onChange={handleNomChange} />
        </div> <br />

        <div className="col-md-4">
          <input type="text" className="form-control" id="validationDefault02" placeholder="PRÉNOM" required value={prenom} onChange={handlePrenomChange} />
        </div> <br />

        <div className="col-md-4">
          <div className="input-group">
            <input type="text" className="form-control" id="validationDefaultUsername" placeholder="USERNAME" aria-describedby="inputGroupPrepend2" required value={username} onChange={handleUsernameChange} />
          </div>
        </div> <br />

        <div className="col-md-6">
          <input type="email" className="form-control" placeholder="g-mail" id="validationDefault03" required value={email} onChange={handleEmailChange} />
        </div> <br />

        <div className="col-md-3">
          <input type="password" className="form-control" placeholder="confirmer le mot de passe" id="validationDefault05" required value={confirmPassword} onChange={handleConfirmPasswordChange} />
        </div> <br />

        <div className="col-md-3">
          <input type="password" className="form-control" placeholder="crée un mot de passe" id="validationDefault05" required value={password} onChange={handlePasswordChange} />
        </div> <br />

        <div className="col-12">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required />
            <label className="form-check-label" htmlFor="invalidCheck2">
              Agree to terms and conditions
            </label>
          </div>
        </div>
        <div className="col-12">
          <button className="btn btn-primary" type="submit">INSCRIPTION</button>
        </div>
      </form>
    </div>
  );
};

export default Inscription;

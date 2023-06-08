import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Accueil from './components/Accueil';
import Produits from './components/Produits';
import AjouterProduit from './components/AjouterProduit';
import Connecter from './components/Connecter';
import Inscription from './components/Inscription';
import { FirebaseApp } from 'firebase/app';

function App() {
  const [activeContent, setActiveContent] = useState('accueil');

  // Fonction pour changer le contenu actif en fonction du lien cliqué
  const handleContentChange = (content) => {
    setActiveContent(content);
  };

  // Fonction pour rendre le contenu actif
  const renderActiveContent = () => {
    switch (activeContent) {
      case 'accueil':
        return <Accueil />;
      case 'produits':
        return <Produits />;
      case 'ajouter-produit':
        return <AjouterProduit />;
      case 'Connecter':
        return <Connecter />;
        case 'Inscription':
        return <Inscription />;
      default:
        return null;
    }
  };
  

  return (
    <div className="App">
      <Navbar onContentChange={handleContentChange} />
      {renderActiveContent()}
    </div>
  );
}

export default App;

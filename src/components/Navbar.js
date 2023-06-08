import React from 'react';

export default function Navbar({ onContentChange }) {
  const handleLinkClick = (content) => {
    onContentChange(content);
  };

  return (
    <nav>
      <ul style={{display: "flex", flexDirection: "row", justifyContent: "space-around", backgroundColor: "yellow", height: "50px",}}>
        
          <a onClick={() => handleLinkClick('accueil')} href="#accueil" style={{textDecoration: "none", marginTop: "10px"}} >
            Accueil
          </a>
        
        
          <a onClick={() => handleLinkClick('produits')} href="#produits" style={{textDecoration: "none", marginTop: "10px"}}>
            Produits
          </a>
        
          <a onClick={() => handleLinkClick('ajouter-produit')} href="#ajouter-produit" style={{textDecoration: "none", marginTop: "10px"}}>
            Ajouter un produit
          </a>
        
          <a onClick={() => handleLinkClick('Connecter')} href="#Connecter" style={{textDecoration: "none", marginTop: "10px"}}>
            Connection
          </a>
        
          <a onClick={() => handleLinkClick('Inscription')} href="#Inscription" style={{textDecoration: "none", marginTop: "10px"}}>
            Inscription
          </a>
        
      </ul>
    </nav>
  );
}

import React, { Component } from 'react';
import Photo1 from "./images/kinder bueno.jpg";
import Photo2 from "./images/prod_img-3394663_05053827101066_a1l1..jpg_j.webp";
import Photo3 from "./images/boite de nutella.jpg"

export default class Produits extends Component {
  handleVoir = (produit) => {
    // Logique pour afficher les détails du produit
    console.log("Voir le produit :", produit);
  };

  handleModifier = (produit) => {
    // Logique pour modifier le produit
    console.log("Modifier le produit :", produit);
  };

  handleSupprimer = (produit) => {
    // Logique pour supprimer le produit
    console.log("Supprimer le produit :", produit);
  };

  render() {
    // Supposons que vous ayez une liste de produits dans le state du composant
    const produits = [
      { id: 1, photo: Photo1, nom: 'KINDER BUENO', description: 'lorem ipsum dolor', prix: 10.99 },
      { id: 2, photo: Photo2, nom: 'MIEL POPS', description: 'lorem ipsum dolor', prix: 19.99 },
      { id: 3, photo: Photo3, nom: 'NUTELLA', description: 'lorem ipsum dolor', prix: 7.99 }
    ];

    return (
      <div style={{ marginLeft: "300px", backgroundColor: "gray", color: "white", height: "auto", width: "800px" }}>
        <h2 style={{ marginLeft: "200px" }}>Liste des produits</h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">N°</th>
              <th scope="col">PHOTO</th>
              <th scope="col">NOM</th>
              <th scope="col">DESCRIPTION</th>
              <th scope="col">PRIX EN FCFA</th>
              <th scope="col">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {produits.map((produit) => (
              <tr key={produit.id}>
                <td>{produit.id}</td>
                <td>
                  <img
                    src={produit.photo}
                    alt={`Photo du produit ${produit.nom}`}
                    style={{ width: '100px', height: '100px' }}
                  />
                </td>
                <td>{produit.nom}</td>
                <td>{produit.description}</td>
                <td>{produit.prix}</td>
                <td>
                  <button className="btn btn-primary btn-sm" onClick={() => this.handleVoir(produit)}>Voir</button>
                  <button className="btn btn-secondary btn-sm" onClick={() => this.handleModifier(produit)}>Modifier</button>
                  <button className="btn btn-danger btn-sm" onClick={() => this.handleSupprimer(produit)}>Supprimer</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

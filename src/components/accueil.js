import React, { Component } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

export default class Accueil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [], // Tableau pour stocker les données des produits
    };
    
  }

  componentDidMount() {
    // Récupère les données des produits depuis Firebase
    firebase
      .database()
      .ref('products')
      .once('value')
      .then((snapshot) => {
        const productsData = snapshot.val();
        // Convertit les données en un tableau d'objets
        const productsArray = Object.entries(productsData).map(([key, value]) => ({
          id: key,
          ...value,
        }));
        this.setState({ products: productsArray });
      })
      .catch((error) => {
        console.log('Erreur lors de la récupération des données des produits:', error);
      });
      
      /*handleViewProduct = (productId) => {
        console.log(`Voir le produit ${productId}`);
      };
      
      handleEditProduct = (productId) => {
        console.log(`Modifier le produit ${productId}`);
      };
      
      handleDeleteProduct = (productId) => {
        console.log(`Supprimer le produit ${productId}`);
      };*/
      
  }

  render() {
    const { products } = this.state;
    

    return (
      <div>
        <h1>Page d'accueil</h1>
        <div style={{ width: '100%', height: '100vh' }}>
  <table style={{ width: '100%', height: '100%', borderCollapse: 'collapse' }}>
    <thead>
      <tr>
        <th style={{ border: '1px solid black' }}>Image</th>
        <th style={{ border: '1px solid black' }}>Nom du produit</th>
        <th style={{ border: '1px solid black' }}>Description</th>
        <th style={{ border: '1px solid black' }}>Prix</th>
        <th style={{ border: '1px solid black' }}>Actions</th>
      </tr>
    </thead>
    <tbody>
      {products.map((product, index) => (
        <tr key={product.id} style={{ backgroundColor: 'red' }}>
          <td style={{ border: '1px solid black' }}>
            <img src={product.image} alt={product.nom} style={{ width: '50px', height: '50px' }} />
          </td>
          <td style={{ border: '1px solid black' }}>{product.nom}</td>
          <td style={{ border: '1px solid black' }}>{product.description}</td>
          <td style={{ border: '1px solid black' }}>{product.prix}</td>
          <td style={{ border: '1px solid black' }}>
            <button /*onClick={() => handleViewProduct(product.id)}*/>Voir</button>
            <button /*onClick={() => handleEditProduct(product.id)}*/>Modifier</button>
            <button /*onClick={() => handleDeleteProduct(product.id)}*/>Supprimer</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

      </div>
    );
  }
}

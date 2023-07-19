import React, { Component } from 'react';

export default class NavBar extends Component {
  render() {
    const { onPageChange } = this.props;

    return (
      <nav>
        <ul>
          <li>
            <button onClick={() => onPageChange('connection')}>Connexion</button>
          </li>
          <li>
            <button onClick={() => onPageChange('inscription')}>Inscription</button>
          </li>
        </ul>
      </nav>
    );
  }
}

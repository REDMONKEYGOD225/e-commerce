import React, { Component } from 'react';
import NavBar from './components/navbar';
import Connection from './components/connection';
import Inscription from './components/inscription';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'connection', // Page actuellement affichée
    };
  }

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  render() {
    const { currentPage } = this.state;

    let pageContent;
    if (currentPage === 'connection') {
      pageContent = <Connection />;
    } else if (currentPage === 'inscription') {
      pageContent = <Inscription />;
    }

    return (
      <div>
        <NavBar onPageChange={this.handlePageChange} />
        {pageContent}
        {/* Le reste de ton contenu */}
      </div>
    );
  }
}

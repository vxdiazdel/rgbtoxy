import React, { Component } from 'react';

import Nav from './Nav';
import RGBForm from './RGBForm';
import Info from './Info';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <main className="content">
          <div className="container">
            <div className="row">
              <div className="col-md-6 offset-md-3">
                <RGBForm />
                <Info />
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;

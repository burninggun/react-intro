import React, { Component } from 'react';
import Stuff from './stuff'

import Chore from './chore'

import ClassComponent from './classComponent'

class App extends Component {
  render() {
    return (
     <div>
       <h1>my first react app</h1>
       <Stuff/>
       <Chore/>
       <ClassComponent/>
     </div>
    );
  }
}

export default App;

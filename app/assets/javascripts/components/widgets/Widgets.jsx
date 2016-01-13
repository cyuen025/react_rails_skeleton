import React from 'react';

import Widgets1 from './Widgets1.jsx'; // broken material ui
import Widgets2 from './Widgets2.jsx'; // working exmaple from react written in es5
import Widgets3 from './Widgets3.jsx'; // same as Widget2, but in es6


export default class Widgets extends React.Component {
  render() {
    return (
      <div style={{marginLeft:'330px', width:'50%'}}>
      	<p>I'm Widgets.jsx</p>

        <div className="row">
          <div className="columns large-4">Column 1</div>
          <div className="columns large-4">Column 2</div>
          <div className="columns large-4">Column 3</div>
        </div>

        <Widgets1></Widgets1>
        <Widgets2></Widgets2>
        <Widgets3></Widgets3>
      </div>
    );
  }
}

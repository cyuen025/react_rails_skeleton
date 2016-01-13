import React from 'react';
import { Link } from 'react-router';
import Widgets from './Widgets.jsx';


// this would be the smart component, that feeds data to child, which are dumb

export default class WidgetsController extends React.Component {

  render() {
    return (
      <div>
        <p>I'm WidgetsController</p>
        <Link to={`/widgets`}> link to widgets.jsx </Link>
        <Widgets></Widgets>
      </div>
    )
  };
}

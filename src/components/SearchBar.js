// provides an input which allows users to search for and select tags
// provides tooltips by filtering possible tags
// submits the string of tags to generate random things
import React, { PureComponent } from 'react'
import './SearchBar.css';

import PropTypes from 'prop-types'

export default class Searchbar extends PureComponent {
  static propTypes = {

  }

  render() {
    return (
      <div className="search">
        I want a...
        <input id="search-bar" />
      </div>
    )
  }
}

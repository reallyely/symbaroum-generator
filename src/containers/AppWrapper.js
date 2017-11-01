import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class AppWrapper extends PureComponent {
  static propTypes = {

  }
  render() {
    return (
      <div {...this.props}>
        {this.props.children}
      </div>
    )
  }
}

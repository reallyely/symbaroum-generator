// displays in tabular form, a set number of random objects
// displays name, attributes, abilities
// allows users to select a row to lock that item
// allowsu sers to reroll a single item in place
// expandable/collapsable
import React, { PureComponent } from 'react'
import ReactTable from "react-table";
import 'react-table/react-table.css'

import PropTypes from 'prop-types'

export default class Table extends PureComponent {
  static propTypes = {

  }


  render() {
    const data = [{
      name: 'Tanner Linsley',
      age: 26,
      friend: {
        name: 'Jason Maurer',
        age: 23,
      }
    }]

    const columns = [{
        Header: 'Name',
        accessor: 'name' // String-based value accessors!
      }, {
        Header: 'Age',
        accessor: 'age',
        Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
      }, {
        id: 'friendName', // Required because our accessor is not a string
        Header: 'Friend Name',
        accessor: d => d.friend.name // Custom value accessors!
      }, {
        Header: props => <span>Friend Age</span>, // Custom header components!
        accessor: 'friend.age'
    }]

    return <ReactTable
      data = { data }
      columns = { columns }
    />
  }
}

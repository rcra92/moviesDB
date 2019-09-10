import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import _ from 'lodash'

import { changeExample, searchMovies } from '../redux/actions/example'

export default class Paginator extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      value: '',
    }
  }

  render() {
    const { totalPages } = this.props
    let arr = [0, 1, 2, 3, 4]

    return arr.map(index => {
      return <div>{index}</div>
    })
  }
}

Paginator.defaultProps = {
  rate: '75%',
  totalPages: 0,
}

Paginator.propTypes = {
  rate: PropTypes.string,
  totalPages: PropTypes.number,
}

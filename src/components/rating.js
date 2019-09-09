import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import { changeExample, searchMovies } from '../redux/actions/example'
import './styles/rating.css'

export default class Rating extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      value: '',
    }
  }

  render() {
    const { rate } = this.props
    return <div id="rate">{rate}</div>
  }
}

Rating.defaultProps = {
  rate: '75%',
}

Rating.propTypes = {
  rate: PropTypes.string,
}

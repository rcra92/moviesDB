import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import { changeExample, searchMovies } from '../redux/actions/example'
import { GENRES } from '../services/genres'
import './styles/genreBullet.css'

export default class GenreBullet extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      value: '',
    }
  }

  render() {
    const { genre, children } = this.props
    return (
      <div id="wrapper">
        {children.map(child => {
          let genreText = GENRES.find(genre => {
            if (genre.id === child) return genre
          })
          return <div id="genre">{genreText.name}</div>
        })}
      </div>
    )
  }
}

GenreBullet.defaultProps = {
  genre: '75%',
}

GenreBullet.propTypes = {
  genre: PropTypes.array,
  children: PropTypes.array,
}

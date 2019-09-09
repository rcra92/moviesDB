import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import { changeExample, searchMovies } from '../redux/actions/example'
import Rating from './rating'
import GenreBullet from './genreBullet'
import './styles/movieCard.css'

class MovieCard extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      value: '',
    }
  }

  render() {
    const { title, description, poster, rate, genres } = this.props
    return (
      <Link to="/page-2/">
        <article>
          <figure>
            <img src={process.env.BASE_IMAGE_URL + poster} />
          </figure>
          <div id="body">
            <header>
              <h2>{title}</h2>
            </header>
            <body>
              <Rating rate={rate} />
              {description}
              <GenreBullet>{genres}</GenreBullet>
            </body>
          </div>
        </article>
      </Link>
    )
  }
}

MovieCard.defaultProps = {
  title: 'Thor',
  description:
    '@Jim did you see the additional answer below? Maybe worth noting that its easy to misname the file if you are used to writing .dev or .develop.Gatsby requires that the file is named exactly: .env.development',
  releaseDate: '25/07/1999',
  poster: '',
  rate: '75%',
  genres: [28],
}

MovieCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  releaseDate: PropTypes.string,
  poster: PropTypes.string,
  rate: PropTypes.string,
  genres: PropTypes.array,
}

const mapStateToProps = (state, ownProps) => ({
  example: state.example,
})

const mapDispatchToProps = {
  changeExample,
  searchMovies,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieCard)

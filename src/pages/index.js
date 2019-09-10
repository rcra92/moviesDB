import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import SearchBar from '../components/searchBar'
import { changeExample } from '../redux/actions/example'
import MovieCard from '../components/movieCard'
import Paginator from '../components/paginator'

class IndexPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      subPage: 0,
    }
  }

  static getDerivedStateFromProps(props, state) {
    return null
  }

  handleClick() {
    this.props.changeExample()
  }

  handlePage(action) {
    let { subPage } = this.state
    const {
      example: { movies },
    } = this.props

    if (action === 'prev' && subPage !== 0) {
      subPage--
    } else if (action === 'next' && subPage < movies.length - 1) {
      subPage++
    }
    console.log('>>>', subPage, movies.length)
    this.setState({ subPage: subPage })
  }

  render() {
    const {
      example: { movies },
    } = this.props
    const { subPage } = this.state
    return (
      <Layout>
        <SEO title="Home" />
        <h1>Hi buddies</h1>
        <SearchBar />
        {movies[subPage].map(movie => {
          const {
            id,
            title,
            overview,
            vote_average,
            release_date,
            genre_ids,
            poster_path,
          } = movie
          return (
            <MovieCard
              id={id}
              title={title}
              description={overview}
              rate={vote_average}
              releaseDate={release_date}
              genres={genre_ids}
              poster={poster_path}
            />
          )
        })}
        <Paginator currentPages={this.state.subPage} />
        <button onClick={() => this.handlePage('prev')}>Previous</button>
        <button onClick={() => this.handlePage('next')}>Next</button>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <button onClick={() => this.handleClick()}>Testar reducer</button>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>
      </Layout>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  example: state.example,
})

const mapDispatchToProps = {
  changeExample,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IndexPage)

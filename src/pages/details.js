import React from 'react'
import { Link } from 'gatsby'
import { connect } from 'react-redux'

import Layout from '../components/layout'
import SEO from '../components/seo'

class SecondPage extends React.Component {
  render() {
    const { location } = this.props

    return (
      <Layout>
        <SEO title="Page two" />
        <h1>Hi from the second page</h1>
        <p>Welcome to page 2</p>
        <Link to="/">Go back to the homepage</Link>
      </Layout>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  example: state.example,
})

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SecondPage)

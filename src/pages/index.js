import React, { Component } from "react"
import { connect } from "react-redux"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import SearchBar from "../components/searchBar"
import { changeExample } from "../redux/actions/example"

class IndexPage extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  static getDerivedStateFromProps(props, state) {
    return null
  }

  handleClick() {
    this.props.changeExample()
  }

  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <h1>Hi buddies</h1>
        <SearchBar />
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <button onClick={() => this.handleClick()}>Testar reducer</button>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>
        <Link to="/page-2/">Go to page 2</Link>
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

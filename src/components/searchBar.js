import React from "react"
import { connect } from "react-redux"
import { Link } from "gatsby"

import { changeExample, searchMovies } from "../redux/actions/example"
import "./styles/searchBar.css"

class SearchBar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      value: "",
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
    this.props.searchMovies({ query: event.target.value })
  }

  render() {
    return (
      <div>
        <input
          className={"search-bar"}
          type="text"
          placeholder="Busque um filme por título"
          value={this.state.value}
          onChange={this.handleChange}
        />
      </div>
    )
  }
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
)(SearchBar)

import React, { Component } from "react";
import axios from "axios";
import Letters from "./Letters";
import Results from "./Results";
import Fade from "react-reveal/Fade";

const letters = [
  "#",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

class Search extends Component {
  state = {
    searchText: "",
    apiUrl: "http://api.urbandictionary.com/v0/define?term=",
    words: [],
    open: false,
    letters: letters,
    filtered: ""
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  onTextChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
      filtered: this.state.searchText[0]
    });
  };

  searchWords = e => {
    e.preventDefault();
    axios
      .get(`${this.state.apiUrl}${this.state.searchText}`)
      .then(res =>
        this.setState({
          words: res.data.list
        })
      )
      .catch(err => console.log(err));
    this.setState({
      searchText: ""
    });
  };
  render() {
    console.log(this.state.searchText[0]);
    return (
      <div className="container">
        <div className="left">
          <h2 className="left__heading">Explore Urban Lingo</h2>
          <div className="search">
            <form onSubmit={this.searchWords}>
              <input
                className="search__input"
                placeholder="Search"
                name="searchText"
                value={this.state.searchText}
                onChange={this.onTextChange}
              />
            </form>
          </div>
          <div className="results">
            <div className="results__letters">
              {this.state.letters.map(item => (
                <h4 className="results__letter ">{item}</h4>
              ))}
            </div>
            {this.state.words.length > 0 ? (
              <div>
                {" "}
                <Fade bottom>
                  <Results words={this.state.words} />
                </Fade>
              </div>
            ) : null}
          </div>
        </div>
        <div className="right">
          <h1 className="right__heading">
            Search any word you curious about...
          </h1>
          <div className="cards">
            {this.state.words.length > 0
              ? this.state.words.map(item => (
                  <div className="card">
                    <h2 className="card__heading">{item.word}</h2>
                    <hr />
                    <h4>
                      {" "}
                      <strong>Definition:</strong>
                    </h4>{" "}
                    <p className="card__def">{item.definition}</p>
                    <hr />
                    <h4>
                      {" "}
                      <strong>Example:</strong>
                    </h4>{" "}
                    <p className="card__example">{item.example}</p>
                  </div>
                ))
              : null}
          </div>
        </div>
      </div>
    );
  }
}

export default Search;

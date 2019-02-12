import React, { Component } from "react";

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

class Letters extends Component {
  state = {
    letters: letters
  };

  render() {
    let filterLetters = this.state.letters.filter(item => {
      return item === this.props.all.searchText;
    });
    const firstWord = this.props.all.searchText[0];
    //console.log(firstWord);
    console.log(filterLetters);

    return (
      <div>
        {this.props.all.words.length === 0 ||
        this.props.all.searchText == "" ? (
          this.state.letters.map((item, i) => (
            <h4 className="results__letter">{item}</h4>
          ))
        ) : (
          <h4 className="results__letter active">{filterLetters}</h4>
        )}
      </div>
    );
  }
}

export default Letters;

import React from "react";

class Search extends React.Component {
  state = {
    search: "",
    type: 'all',
  };

  hangleKey = (event) => {
    if (event.key === "Enter") {
      this.props.searchMovies(this.state.search, this.state.type);
    }
  };

  handleFilter = (event) => {
    this.setState(
        () => ({ type: event.target.dataset.type }),
        () => {
           this.props.searchMovies(this.state.search, this.state.type);
        }
    );
    };

  render() {
    return (
      <div className="row">
        <div className="col s12">
          <div className="input-field">
            <input
              placeholder="Search"
              type="search"
              className="validate"
              value={this.state.search}
              onChange={(event) =>
                this.setState({ search: event.target.value })
              }
              onKeyDown={this.hangleKey}
            />
          </div>
          <button
            className="waves-effect waves-light btn"
            onClick={() => this.props.searchMovies(this.state.search, this.state.type)}
          >
            Search
          </button>
          <form className="filterform" action="#">
            <p>
              <label>
                <input
                  className="with-gap filterBtn"
                  name="type"
                  type="radio"
                  data-type = "all"
                  onChange={this.handleFilter}
                  checked={this.state.type === "all"}
                />
                <span className="filtername">All</span>
              </label>
            </p>
            <p>
              <label>
                <input
                  className="with-gap filterBtn"
                  name="type"
                  type="radio"
                  data-type = "movie"
                  onChange={this.handleFilter}
                  checked={this.state.type === "movie"}
                />
                <span className="filtername">Movie Only</span>
              </label>
            </p>
            <p>
              <label>
                <input
                  className="with-gap filterBtn"
                  name="type"
                  type="radio"
                  data-type = "series"
                  onChange={this.handleFilter}
                  checked={this.state.type === "series"}
                />
                <span className="filtername">Series Only</span>
              </label>
            </p>
            <p>
              <label>
                <input
                  className="with-gap filterBtn"
                  name="type"
                  type="radio"
                  data-type = "game"
                  onChange={this.handleFilter}
                  checked={this.state.type === "game"}
                />
                <span className="filtername">Game Only</span>
              </label>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

export { Search };
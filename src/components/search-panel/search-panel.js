import "./search-panel.css";
import { Component } from "react";

class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
    };
  }

  onUpdateSearch = (e) => {
    const term = e.target.value;
    this.setState({ term }); //установка локального состояние
    this.props.onUpdateSearch(term); //из другого компонента приходит
  };

  render() {
    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="Find employee"
        value = {this.state.term}
        onChange= {this.onUpdateSearch}
      />
    );
  }
}

export default SearchPanel;

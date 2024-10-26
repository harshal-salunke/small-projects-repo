import React, { Component } from 'react';

class DynamicTwoInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{ first_name: "", last_name: "" }]
    };
  }

  handleClickAdd = () => {
    this.setState((prevState) => ({
      data: [...prevState.data, { first_name: "", last_name: "" }]
    }));
  };

  handleNameChange = (event, index) => {
    const { name, value } = event.target;
    this.setState((prevState) => {
      const data = [...prevState.data];
      data[index][name] = value;
      return { data };
    });
  };

  handleDeleteButton = (index) => {
    this.setState((prevState) => {
      const data = [...prevState.data];
      data.splice(index, 1);
      return { data };
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClickAdd}>Add</button>
        {this.state.data.map((val, index) => (
          <div key={index}>
            <input
              name="first_name"
              value={val.first_name}
              onChange={(event) => this.handleNameChange(event, index)}
            />
            <input
              name="last_name"
              value={val.last_name}
              onChange={(event) => this.handleNameChange(event, index)}
            />
            <button onClick={() => this.handleDeleteButton(index)}>Delete</button>
          </div>
        ))}
        <h4>{JSON.stringify(this.state.data)}</h4>
      </div>
    );
  }
}

export default DynamicTwoInput;

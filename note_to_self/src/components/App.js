import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

class App extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
    }
  }

  onChange = (event) => {
    this.setState({ text: event.target.value })
  }

  onClick = () => {
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <h2>Note to Seft</h2>
        <Form className="displayForm">
          <FormControl onChange={this.onChange}/>
          &nbsp;
          <Button onClick={this.onClick}>Submit</Button>
        </Form>
      </div>
    )
  }
}

export default App;

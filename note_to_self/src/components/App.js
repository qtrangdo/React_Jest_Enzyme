import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

class App extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
      notes: [],
    }
  }

  onChange = (event) => {
    this.setState({ text: event.target.value })
  }

  onSubmit = () => {
    const {notes} = this.state; 
    const newNote = {text: this.state.text}
    notes.push(newNote); 
    this.setState({ notes })
  }

  onEnter = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      this.onSubmit();
    } else {
      this.onChange(event);
    }
  }

  render() {
    const { notes } = this.state;
    return (
      <div>
        <h2>Note to Seft</h2>
        <Form className="displayForm">
          <FormControl onChange={this.onChange} onKeyDown={this.onEnter}/>
          &nbsp;
          <Button onClick={this.onSubmit}>Submit</Button>
        </Form>
        {notes.map((note, i) => (
          <div key={i}>{note.text}</div>
        ))}
      </div>
    )
  }
}

export default App;

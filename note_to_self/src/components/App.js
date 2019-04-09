import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies';
import Note from './Note';

const cookie_key = 'NOTES';


class App extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
      notes: [],
    }
  }

  componentDidMount() {
    this.setState({ notes: read_cookie(cookie_key) });
  }

  onChange = (event) => {
    this.setState({ text: event.target.value })
  }

  onSubmit = () => {
    const {notes} = this.state; 
    const newNote = {text: this.state.text}
    notes.push(newNote); 
    this.setState({ notes });
    bake_cookie(cookie_key, notes);
  }

  onEnter = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      this.onSubmit();
    } 
  }

  clear = () => {
    delete_cookie(cookie_key);
    this.setState({ notes: [] })
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
          <Note key={i} note={note}/>
        ))}
        <hr/>
        <Button onClick={this.clear}>Clear Notes</Button>
      </div>
    )
  }
}

export default App;

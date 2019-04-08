import React, { Component } from 'react';
import Proptypes from 'prop-types';

class Note extends Component {
  render() {
    return (
      <div className="note">
        <p>{this.props.note.text}</p>
      </div>
    )
  }
}

Note.propTypes = {
  note: Proptypes.shape({
    text: Proptypes.string.isRequired,
  }).isRequired,
};

export default Note;
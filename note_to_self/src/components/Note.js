import React from 'react';
import Proptypes from 'prop-types';

const Note = (props) => (
  <div className="note">
    <p>{props.note.text}</p>
  </div>
)


Note.propTypes = {
  note: Proptypes.shape({
    text: Proptypes.string.isRequired,
  }).isRequired,
};

export default Note;
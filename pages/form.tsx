import React, { FormEvent, useState } from 'react';

function AddForm() {
  const [heading, setHeading] = useState('');
  const [about, setAbout] = useState('');
  const [photo, setPhoto] = useState('');

  function handleSubmit(event:FormEvent) {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Add heading:
        <input type="text" value={heading} onChange={e => setHeading(e.target.value)} />
      </label>
      <br />
      <label>
        About the add:
        <textarea value={about} onChange={e => setAbout(e.target.value)} />
      </label>
      <br />
      <label>
        Photo of the add:
        <input type="file" onChange={e => setPhoto(e.target.files[0])} />
      </label>
      <br />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default AddForm;
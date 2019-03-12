import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

function Search() {
  const [value, setValue] = useState('');

  function handleValueChange(event) {
    setValue(event.target.value);
  }

  return (
    <Form inline>
      <FormControl
        type="text"
        value={value}
        placeholder="Search"
        onChange={handleValueChange}
        className="mr-sm-2"
      />
      <Button variant="success">Search</Button>
    </Form>
  );
}

export default Search;

import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

function Search(props) {
  const { offers, setFilteredOffers } = props;
  const [value, setValue] = useState('');
  // const { offers, setFilteredOffers } = useContext(OfferContext);

  function handleValueChange(event) {
    setValue(event.target.value);
  }

  function handleSubmit(event) {
    const newOffers = offers.filter(
      offer => offer.name.toLowerCase().indexOf(value.toLowerCase()) > -1
    );

    if (newOffers.length > 0) {
      setFilteredOffers(newOffers);
      setValue('');
    } else {
      return;
    }
    event.preventDefault();
  }

  return (
    <Form inline onSubmit={handleSubmit}>
      <FormControl
        type="text"
        value={value}
        placeholder="Search"
        onChange={handleValueChange}
        className="mr-sm-2"
      />
    </Form>
  );
}

export default Search;

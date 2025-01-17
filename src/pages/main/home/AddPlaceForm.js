import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { Button } from 'reactstrap';

import { InputLabel } from '../../components/InputLabel';
import { Input } from '../../components/Input';

import { useAddPlaceForm } from '../../hooks/add-place-form';
import { ADD_PLACE } from '../../utils/mutations';

export function AddPlaceForm() {
  const {
    name,
    address,
    lat,
    lng,
    setName,
    setAddress,
    setLatitude,
    setLongitude,
  } = useAddPlaceForm();
  const [addNewPlace] = useMutation(ADD_PLACE);

  function handleAddNewPlace(event) {
    event.preventDefault();
    addNewPlace({
      variables: {
        title: name,
        address,
        lat,
        lng,
      },
    });
  }

  /**
   * Function that changes value of name
   *
   * @param {Event} event
   */
  function handleChangeName(event) {
    const value = event.currentTarget.value;
    setName(value);
  }

  /**
   * Function that changes value of the address
   *
   * @param {Event} event
   */
  function handleChangeAddress(event) {
    const value = event.currentTarget.value;
    setAddress(value);
  }

  /**
   * Function that changes value of the latitude coordinate
   *
   * @param {Event} event
   */
  function handleChangeLatitude(event) {
    const value = event.currentTarget.value;
    setLatitude(+value);
  }

  /**
   * Function that changes value of the longitude coordinate
   *
   * @param {Event} event
   */
  function handleChangeLongitude(event) {
    const value = event.currentTarget.value;
    setLongitude(+value);
  }

  return (
    <div
      style={{
        border: '4px solid #666',
        padding: '20px 40px 40px',
        background: '#fafafa',
        width: 400,
      }}
    >
      <h2>Add new place</h2>
      <form
        style={{
          display: 'grid',
          gridGap: 20,
        }}
        onSubmit={handleAddNewPlace}
      >
        <InputLabel>
          <span>Place name:</span>
          <Input
            value={name}
            type="text"
            name="name"
            onChange={handleChangeName}
          />
        </InputLabel>
        <InputLabel>
          <span>Place address:</span>
          <Input
            value={address}
            type="text"
            name="address"
            onChange={handleChangeAddress}
          />
        </InputLabel>
        <InputLabel>
          <span>Latitude coordinate:</span>
          <Input
            value={lat}
            type="number"
            name="lat"
            onChange={handleChangeLatitude}
          />
        </InputLabel>
        <InputLabel>
          <span>Longitude coordinate:</span>
          <Input
            value={lng}
            type="number"
            name="lng"
            onChange={handleChangeLongitude}
          />
        </InputLabel>
        <Button type="submit" style={{ marginTop: 20 }}>
          Add new place
        </Button>
      </form>
    </div>
  );
}

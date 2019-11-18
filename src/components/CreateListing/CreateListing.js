/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/aria-role */
/* eslint-disable camelcase */
/* eslint-disable react/no-unused-state */

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.css';
import './_createListing.scss';

// import of other components I have made.
import { createItem } from '../../actions/Items/CRUD/createItem';
import { getUserId } from '../../actions/Users/USERID/getIdOfUser';

import cameraBanner from '../../Images/banner.png';
import Form from './Form';

const CreateListing = () => {
  const dispatch = useDispatch();
  const userToken = { auth0_user_id: localStorage.getItem('user_id') };
  const userId = useSelector(store => {
    if (store.getUser.user.length > 0) {
      return store.getUser.user[0].id;
    }
  });
  const isSubmitting = useSelector(store => store.createItem.creatingItem);

  // react state
  const [name] = useState('');
  const [price] = useState('');
  const [city] = useState('');
  const [state] = useState('');
  const [zipcode] = useState('');
  const [category] = useState('');
  const [description] = useState('');
  const [paymentType] = useState('');
  const [available] = useState(true);
  const [average_rating] = useState(0);
  const [condition] = useState('');

  // // this is called to get the user id.
  useEffect(() => {
    dispatch(getUserId(userToken));
  }, []);

  const handleSubmit = (id, list) => {
    dispatch(createItem(id, list));
  };

  const listing = {
    userId,
    name,
    price,
    category,
    description,
    available,
    paymentType,
    average_rating,
    condition,
    city,
    state,
    zipcode,
    handleSubmit,
    isSubmitting,
  };

  return (
    <div className="create-listing mainContent">
      <div className="banner">
        <img src={cameraBanner} alt="" />
      </div>
      <div className="form-body">
        <Form listing={listing} />
      </div>
    </div>
  );
};

export default CreateListing;
import React from 'react';
import { useState } from 'react';

const AddProduct = () => {
  const [name, setName] = React.useState('');
  const [price, setPrice] = React.useState('');
  const [category, setCategory] = React.useState('');
  const [company, setCompany] = React.useState('');

  const [nameError, setNameError] = React.useState('');
  const [priceError, setPriceError] = React.useState('');
  const [categoryError, setCategoryError] = React.useState('');
  const [companyError, setCompanyError] = React.useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
    setNameError(''); // Clear the error message when typing starts
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
    setPriceError(''); // Clear the error message when typing starts
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setCategoryError(''); // Clear the error message when typing starts
  };

  const handleCompanyChange = (e) => {
    setCompany(e.target.value);
    setCompanyError(''); // Clear the error message when typing starts
  };

  const collectData = async () => {
    // Reset previous error messages
    setNameError('');
    setPriceError('');
    setCategoryError('');
    setCompanyError('');

    let isValid = true;

    if (!name) {
      setNameError('Name field is required');
      isValid = false;
    }

    if (!price) {
      setPriceError('Price field is required');
      isValid = false;
    }

    if (!category) {
      setCategoryError('Category field is required');
      isValid = false;
    }

    if (!company) {
      setCompanyError('Company field is required');
      isValid = false;
    }

    if (!isValid) {
      return;
    }

    console.log('data');
    const userId = JSON.parse(localStorage.getItem('user'))._id;
    let result = await fetch('http://localhost:5000/add-product', {
      method: 'post',
      body: JSON.stringify({ name, price, category, company, userId }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    result = await result.json();
    console.warn(result);
    alert('Product added Successfully');
  };

  return (
    <>
      <h1> Add product</h1>
      <input
        className="inputbox"
        type="text"
        value={name}
        onChange={handleNameChange}
        placeholder="Enter Name"
      />
      <br />
      {nameError && <span style={{ color: 'red' }}>{nameError}</span>}
      <br />
      <input
        className="inputbox"
        type="text"
        value={price}
        onChange={handlePriceChange}
        placeholder="Enter price"
      />
      <br />
      {priceError && <span style={{ color: 'red' }}>{priceError}</span>}
      <br />
      <input
        className="inputbox"
        type="text"
        value={category}
        onChange={handleCategoryChange}
        placeholder="Enter category"
      />
      <br />
      {categoryError && <span style={{ color: 'red' }}>{categoryError}</span>}
      <br />
      <input
        className="inputbox"
        type="text"
        value={company}
        onChange={handleCompanyChange}
        placeholder="Enter company"
      />
      <br />
      {companyError && <span style={{ color: 'red' }}>{companyError}</span>}
      <br />
      <button className="app-btn" type="button" onClick={collectData}>
        Submit
      </button>
    </>
  );
};

export default AddProduct;

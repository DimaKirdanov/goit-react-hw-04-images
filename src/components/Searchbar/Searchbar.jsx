import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import styles from './Searchbar.module.css';

export default function Searchbar({ onSubmit }) {
  const [pictureName, setPictureName] = useState('');

  const handleSearchChange = e => {
    setPictureName(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (pictureName.trim() === '') {
      return toast.error('Enter a search query');
    }
    onSubmit(pictureName);
    setPictureName('');
  };

  return (
    <header className={styles.Searchbar}>
      <Toaster />
      <form onSubmit={handleSubmit} className={styles.SearchForm}>
        <button type="submit" className={styles.SearchFormButton}>
          <span className={styles.SearchFormButtonLabel}>Search</span>
        </button>
        <input
          className={styles.SearchFormInput}
          value={pictureName}
          onChange={handleSearchChange}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}

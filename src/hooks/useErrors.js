import { useState } from 'react';

export function useErrors() {
  const [errors, setErrors] = useState({});

  function setError({ field, errorMessage }) {
    setErrors((prevErrors) => ({
      ...prevErrors,
      [field]: errorMessage,
    }));
  }

  function clearError(fieldName) {
    setErrors((prevErrors) => ({
      ...prevErrors,
      [fieldName]: '',
    }));
  }

  function errorExists(field) {
    return errors[field] && errors[field] !== '';
  }

  function checkErrors() {
    return Object.keys(errors).length === 0
      || Object.keys(errors).reduce((valid, field) => valid && errors[field] === '', true);
  }

  return {
    setError,
    clearError,
    errorExists,
    checkErrors,
    errors,
  };
}

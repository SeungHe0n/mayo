import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useState, useCallback } from 'react';

SearchBar.propTypes = {
  onKeyword: PropTypes.func.isRequired,
};

export default function SearchBar({ onKeyword }) {
  const [value, setValue] = useState('');

  const onChange = useCallback(
    (e) => {
      setValue(e.target.value);
      onKeyword(e.target.value);
    },
    [onKeyword],
  );

  return (
    <Form>
      <textarea
        placeholder="Search memos =)"
        autoFocus
        spellCheck="false"
        value={value}
        onChange={onChange}
      />
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  background: #737080;
  border-radius: 1.3rem;

  textarea {
    background: none;
    outline: none;
    border: none;
    margin: 14px 20px;
    padding: 0;
    font-size: 1.125rem;
    font-family: sans-serif;
    line-height: 1.5;
    resize: none;
    color: white;
    height: 1.6875rem;
    max-height: 20rem;
    word-break: break-all;

    &::placeholder {
      color: lightgrey;
    }
    flex: 1;
  }
`;

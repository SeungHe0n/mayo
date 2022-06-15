import styled from 'styled-components';
import PropTypes from 'prop-types';
import { IoArrowDown } from 'react-icons/io5';

InputButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default function InputButton({ onClick }) {
  return (
    <Button type="submit" onClick={onClick}>
      <IoArrowDown />
    </Button>
  );
}

const Button = styled.button`
  background: none;
  outline: none;
  border: none;
  color: darkgray;
  padding: 0 1.6rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s ease-out;

  &:hover {
    color: #bdc3cc;
  }
`;

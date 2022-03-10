import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { MdEdit } from 'react-icons/md';

EditButton.propTypes = {
  checked: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default function EditButton({ checked, onClick }) {
  return (
    <Wrap checked={checked} onClick={onClick}>
      <MdEdit />
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  cursor: pointer;
  font-size: 1.5rem;
  max-height: 2rem;
  margin-left: 5px;

  ${({ checked }) => {
    if (checked) {
      return css`
        color: #adb5bd;
      `;
    } else {
      return css`
        color: #737080;
        :hover {
          color: #929292;
        }
      `;
    }
  }}
`;

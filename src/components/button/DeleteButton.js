import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { MdDelete } from 'react-icons/md';

DeleteButton.propTypes = {
  checked: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default function DeleteButton({ checked, onClick }) {
  return (
    <Wrap checked={checked} onClick={onClick}>
      <MdDelete />
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
        color: #ff6b6b;
        :hover {
          color: #ff8787;
        }
      `;
    }
  }}
`;

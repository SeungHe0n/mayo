import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { MdCheckCircle } from 'react-icons/md';

ConfirmButton.propTypes = {
  checked: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default function ConfirmButton({ checked, onClick }) {
  return (
    <Wrap checked={checked} onClick={onClick}>
      <MdCheckCircle />
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
        color: #6cbd4b;
        :hover {
          color: #9ad483;
        }
      `;
    }
  }}
`;

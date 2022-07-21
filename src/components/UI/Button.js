import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

Button.propTypes = {
  size: PropTypes.oneOf(['big', 'small']),
  color: PropTypes.string,
  // color: PropTypes.oneOf(['lightgray', 'gray', 'red', 'green']),
  hover: PropTypes.oneOf(['basic', 'inverted']),
  onClick: PropTypes.func,
};

Button.defaultProps = {
  size: 'small',
  color: 'darkgray',
  hover: 'basic',
};

export default function Button({ size, color, hover, onClick, children }) {
  return (
    <ButtonStyle size={size} color={color} hover={hover} onClick={onClick}>
      {children}
    </ButtonStyle>
  );
}

const ButtonStyle = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  font-size: 1.5rem;
  border-radius: 0.8rem;
  border-width: 0;
  background-color: transparent;
  transition: all 0.2s ease-out;

  color: ${({ color }) => color};

  height: ${({ size }) => (size === 'big' ? '3rem' : '1.6rem')};
  width: ${({ size }) => (size === 'big' ? '4.5rem' : '1.6rem')};

  ${({ hover }) => {
    if (hover === 'inverted') {
      return css`
        :hover {
          filter: brightness(0.6);
          background-color: rgba(0, 0, 0, 0.05);
        }
      `;
    } else {
      return css`
        :hover {
          filter: brightness(1.2);
        }
      `;
    }
  }}
`;

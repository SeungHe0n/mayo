import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const Wrap = styled.div`
  display: flex;
  cursor: pointer;
  align-items: flex-start;

  font-size: ${(props) => (props.size || 1.5) + 'rem'};
  margin-left: ${(props) => (props.margin || 1) + 'rem'};

  ${(props) => {
    switch (props.color) {
      case 'navy':
        return css`
          color: #42526c;
          &:hover {
            color: #717d91;
          }
        `;
      case 'red':
        return css`
          color: #ff6b6b;
          &:hover {
            color: #ff8787;
          }
        `;
      case 'green':
        return css`
          color: #6cbd4b;
          &:hover {
            color: #9ad483;
          }
        `;
      case 'grey':
        return css`
          color: #737080;
          &:hover {
            color: #929292;
          }
        `;
      default:
        return css`
          color: #adb5bd;
        `;
    }
  }}
`;

Button.propTypes = {
  icon: PropTypes.element,
  size: PropTypes.number,
  color: PropTypes.string,
  margin: PropTypes.number,
  onClick: PropTypes.func,
};

export default function Button({ icon, size, color, margin, onClick }) {
  return (
    <Wrap size={size} margin={margin} color={color} onClick={onClick}>
      {icon}
    </Wrap>
  );
}

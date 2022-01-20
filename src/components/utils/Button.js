import styled, { css } from 'styled-components';

const Wrap = styled.div`
  display: flex;
  cursor: pointer;
  align-items: flex-start;

  font-size: ${(props) => (props.size || 1.5) + 'rem'};
  margin-left: ${(props) => (props.margin || 1) + 'rem'};

  ${(props) => {
    switch (props.color) {
      case 'darkgrey':
        return css`
          color: #495057;
          &:hover {
            color: #929292;
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

const Button = ({ icon, size, color, margin, onClick }) => {
  return (
    <Wrap size={size} margin={margin} color={color} onClick={onClick}>
      {icon}
    </Wrap>
  );
};

export default Button;

import styled, { css } from 'styled-components';
import { MdDelete, MdEdit } from 'react-icons/md';

const Box = styled.div`
  display: flex;
  background: white;
  border-radius: 1rem;
  border: 2px solid lightgrey;
  margin-top: 1rem;
  padding: 1rem;

  pre {
    margin: 0;
    padding: 0;
    cursor: pointer;
    flex: 1;
    background: none;
    outline: none;
    border: none;
    font-size: 1.125rem;
    line-height: 1.5;
    white-space: pre-wrap;
    font-family: sans-serif;
    user-select: none;
    word-break: break-all;
  }

  ${(props) =>
    props.checked &&
    css`
      background: #dee1e4;
      pre {
        color: #adb5bd;
        text-decoration: line-through;
      }
      textarea {
        color: #adb5bd;
        text-decoration: line-through;
      }
    `};
`;

const Button = styled.div`
  display: flex;
  align-items: flex-start;
  font-size: 1.5rem;
  cursor: pointer;
  margin-left: 0.2rem;
  max-height: 2rem;

  ${(props) => {
    switch (props.color) {
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
      default:
        return css`
          color: #737080;
          &:hover {
            color: #929292;
          }
        `;
    }
  }}
`;

const Memo = () => {
  return (
    <Box checked={false}>
      <pre>가나다라마바사</pre>
      <Button>
        <MdEdit />
      </Button>
      <Button color={true && 'red'}>
        <MdDelete />
      </Button>
    </Box>
  );
};

export default Memo;

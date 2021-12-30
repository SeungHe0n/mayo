import styled from 'styled-components';
import { IoMdArrowDown } from 'react-icons/io';

const Form = styled.form`
  display: flex;
  background: #495057;
  border-radius: 1rem;
`;

const InputArea = styled.textarea`
  background: none;
  outline: none;
  border: none;
  margin: 1rem;
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
    color: lightslategrey;
  }
  flex: 1;
`;

const Button = styled.button`
  background: none;
  outline: none;
  border: none;
  color: white;
  padding: 0 1rem 0 0;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    color: coral;
  }
`;

const MemoInput = () => {
  return (
    <Form>
      <InputArea placeholder="Memo about your own"></InputArea>
      <Button>
        <IoMdArrowDown />
      </Button>
    </Form>
  );
};

export default MemoInput;

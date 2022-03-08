import styled from 'styled-components';

export default function SearchBar() {
  return (
    <Form>
      <textarea placeholder="Search memos =)" autoFocus spellCheck="false" />
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

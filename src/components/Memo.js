import styled, { css } from 'styled-components';
import { MdDelete, MdEdit, MdCheckCircle } from 'react-icons/md';
import { useCallback, useState, useRef } from 'react';
import Button from './utils/Button';

const Wrap = styled.div`
  display: flex;
  background: white;
  border-radius: 1rem;
  border: 2px solid lightgrey;
  margin-top: 1rem;
  padding: 1rem;

  textarea {
    background: #f3f3f3;
    outline: none;
    border: none;
    padding: 0;
    font-size: 1.125rem;
    font-family: sans-serif;
    line-height: 1.5;
    resize: none;
    color: black;
    height: 10rem;
    max-height: 20rem;
    flex: 1;
    border-radius: 0.3rem;
    word-break: break-all;
  }

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

// const Button = styled.div`
//   margin-left: 0.2rem;
//   max-height: 2rem;
// `;

const Memo = ({ memo, onRemove, onToggle, onEdit }) => {
  const { id, text, checked } = memo;
  const [value, setValue] = useState(text);
  const [editFlag, setEditFlag] = useState(false);
  const memoTextarea = useRef(null);

  const onClick = useCallback(
    (e) => {
      if (editFlag) {
        const trimValue = value.trim();

        if (trimValue === '') {
          alert('빈 내용입니다.');
          setValue(text);
        } else {
          onEdit(id, trimValue);
          setValue(trimValue);
        }
      }
      setEditFlag(!editFlag);
    },
    [editFlag, id, value, onEdit, text],
  );

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onKeyDown = useCallback(
    (e) => {
      if (e.key === 'Enter') {
        if (!e.shiftKey && !e.ctrlKey) {
          onClick(e);
        }
      }
    },
    [onClick],
  );

  return (
    <Wrap checked={checked}>
      {editFlag ? (
        <textarea
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
          ref={memoTextarea}
          autoFocus
          spellCheck="false"
        />
      ) : (
        <pre onClick={() => onToggle(id)} readOnly>
          {text}
        </pre>
      )}
      <Button
        color={!checked && (editFlag ? 'green' : 'grey')}
        onClick={onClick}
      >
        {editFlag ? <MdCheckCircle /> : <MdEdit />}
      </Button>
      <Button color={!checked && 'red'} onClick={() => onRemove(id)}>
        <MdDelete />
      </Button>
    </Wrap>
  );
};

export default Memo;

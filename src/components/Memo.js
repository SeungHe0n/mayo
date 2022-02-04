import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { MdDelete, MdEdit, MdCheckCircle } from 'react-icons/md';
import { useCallback, useState, useRef } from 'react';
import Button from './utils/Button';

const Wrap = styled.div`
  display: flex;
  background: white;
  border-radius: 1.3rem;
  margin-top: 1.3rem;
  padding: 1.3rem 1.6rem 1.3rem 1.9rem;
  box-shadow: -1px -1px 5px lightgray, 4px 4px 5px lightgray;

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
      background: #e7e7e7;
      pre {
        color: #adb5bd;
        text-decoration: line-through;
      }
      textarea {
        color: #adb5bd;
        text-decoration: line-through;
      }
    `};

  div {
    max-height: 2rem;
  }
`;

Memo.propTypes = {
  memo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
  }).isRequired,
  onRemove: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default function Memo({ memo, onRemove, onToggle, onEdit }) {
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

  if (editFlag) {
    return (
      <Wrap checked={checked}>
        <textarea
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
          ref={memoTextarea}
          autoFocus
          spellCheck="false"
        />
        <Button
          icon={<MdCheckCircle />}
          color={!checked && 'green'}
          margin={0.8}
          onClick={onClick}
        />
        <Button
          icon={<MdDelete />}
          color={!checked && 'red'}
          margin={0.2}
          onClick={() => onRemove(id)}
        />
      </Wrap>
    );
  } else {
    return (
      <Wrap checked={checked}>
        <pre onClick={() => onToggle(id)} readOnly>
          {text}
        </pre>
        <Button
          icon={<MdEdit />}
          color={!checked && 'grey'}
          margin={0.8}
          onClick={onClick}
        />
        <Button
          icon={<MdDelete />}
          color={!checked && 'red'}
          margin={0.2}
          onClick={() => onRemove(id)}
        />
      </Wrap>
    );
  }
}

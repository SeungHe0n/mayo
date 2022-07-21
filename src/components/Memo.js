import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { useCallback, useState, useRef } from 'react';
import { MdCheckCircle, MdEdit, MdDelete } from 'react-icons/md';
import Button from './UI/Button';

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

export default function Memo({ memo, onRemove, onToggle, onEdit, onPopup }) {
  const { id, text, checked } = memo;
  const [value, setValue] = useState(text);
  const [editFlag, setEditFlag] = useState(false);
  const memoTextarea = useRef(null);

  const onClick = useCallback(
    (e) => {
      if (editFlag) {
        const trimValue = value.trim();

        if (trimValue === '') {
          onPopup();
          setValue(text);
        } else {
          onEdit(id, trimValue);
          setValue(trimValue);
        }
      }
      setEditFlag(!editFlag);
    },
    [editFlag, id, value, onEdit, text, onPopup],
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

  const checkedColor = '#adb5bd';

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
          size={'small'}
          color={checked ? checkedColor : '#6cbd4b'}
          onClick={onClick}
        >
          <MdCheckCircle />
        </Button>
        <Button
          size={'small'}
          color={checked ? checkedColor : '#ff6b6b'}
          onClick={() => onRemove(id)}
        >
          <MdDelete />
        </Button>
      </Wrap>
    );
  } else {
    return (
      <Wrap checked={checked}>
        <pre onClick={() => onToggle(id)} readOnly>
          {text}
        </pre>
        <Button
          size={'small'}
          color={checked ? checkedColor : '#737080'}
          onClick={onClick}
        >
          <MdEdit />
        </Button>
        <Button
          size={'small'}
          color={checked ? checkedColor : '#ff6b6b'}
          onClick={() => onRemove(id)}
        >
          <MdDelete />
        </Button>
      </Wrap>
    );
  }
}

const Wrap = styled.div`
  display: flex;
  background: white;
  border: 2px solid lightgrey;
  border-radius: 1.3rem;
  padding: 14px 20px;

  margin-top: 10px;
  animation: down 0.7s;

  @keyframes down {
    0% {
      opacity: 0;
      margin-top: -65px;
    }
    50% {
      opacity: 0;
    }
    70%,
    100% {
      opacity: 1;
    }
  }

  textarea {
    background: #f3f3f3;
    outline: none;
    border: none;
    padding: 0;
    margin-right: 10px;
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
    margin-right: 10px;
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

  ${({ checked }) =>
    checked &&
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

  button + button {
    margin-left: 0.2rem;
  }
`;

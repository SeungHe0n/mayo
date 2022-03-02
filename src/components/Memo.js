import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { MdDelete, MdEdit, MdCheckCircle } from 'react-icons/md';
import { useCallback, useState, useRef } from 'react';
import Button from './utils/Button';

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
          onClick={onClick}
        />
        <Button
          icon={<MdDelete />}
          color={!checked && 'red'}
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
          color={checked ? '' : 'grey'}
          onClick={onClick}
        />
        <Button
          icon={<MdDelete />}
          color={checked ? '' : 'red'}
          onClick={() => onRemove(id)}
        />
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

  > div + div {
    margin-left: 5px;
  }
`;

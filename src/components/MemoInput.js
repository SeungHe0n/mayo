import styled from 'styled-components';
import PropTypes from 'prop-types';
import { IoArrowDown } from 'react-icons/io5';
import { useCallback, useRef, useState } from 'react';

MemoInput.propTypes = {
  onInsert: PropTypes.func.isRequired,
  onPopup: PropTypes.func.isRequired,
  onExpand: PropTypes.func.isRequired,
};

export default function MemoInput({ onInsert, onPopup, onExpand }) {
  const [value, setValue] = useState('');
  const memoTextarea = useRef(null);

  const onChange = useCallback(
    (e) => {
      setValue(e.target.value);

      memoTextarea.current.style.height = '';
      memoTextarea.current.style.height =
        memoTextarea.current.scrollHeight + 'px';

      if (memoTextarea.current.scrollHeight < 298)
        onExpand(108 + memoTextarea.current.scrollHeight);
      else onExpand(428);
    },
    [onExpand],
  );

  const onClick = useCallback(
    (e) => {
      const trimValue = value.trim();

      if (trimValue === '') {
        onPopup();
      } else {
        onInsert(trimValue);
      }

      setValue('');
      memoTextarea.current.style.height = '1.6875rem';
      onExpand(135);

      e.preventDefault();
      memoTextarea.current.focus();
    },
    [onInsert, value, onPopup, onExpand],
  );

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
    <Form>
      <textarea
        placeholder="Memo about your own"
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        autoFocus
        ref={memoTextarea}
        spellCheck="false"
      />
      <Button type="submit" onClick={onClick}>
        <IoArrowDown />
      </Button>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  background: #42526c;
  border-radius: 1.3rem;

  textarea {
    background: none;
    outline: none;
    border: none;
    margin: 14px 20px;
    margin-right: 0;
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
  }
`;

const Button = styled.button`
  background: none;
  outline: none;
  border: none;
  color: white;
  padding: 0 1.6rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    color: #bdc3cc;
  }
`;

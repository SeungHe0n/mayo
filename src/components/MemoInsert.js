import { useCallback, useRef, useState } from 'react';
import { IoMdArrowDown } from 'react-icons/io';
import './MemoInsert.scss';

const MemoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');
  const memoTextarea = useRef(null);

  const onChange = useCallback((e) => {
    setValue(e.target.value);
    e.target.style.height = '0';
    e.target.style.height = e.target.scrollHeight + 'px';
  }, []);

  const onSubmit = useCallback(
    (e) => {
      const trimValue = value.trim();

      if (trimValue === '') {
        alert('내용을 입력해주세요.');
      } else {
        onInsert(trimValue);
      }

      setValue('');
      memoTextarea.current.style.height = '1.6875rem';

      e.preventDefault();
      memoTextarea.current.focus();
    },
    [onInsert, value],
  );

  const onKeyDown = useCallback(
    (e) => {
      if (e.key === 'Enter') {
        if (!e.altKey && !e.ctrlKey && !e.shiftKey && !e.metaKey) {
          onSubmit(e);
        }
        if (e.shiftKey || e.ctrlKey) {
          setValue(value.concat('\n'));
          e.target.scrollTop = e.target.scrollHeight - e.target.clientHeight;
          // console.log(e);
        }
      }
    },
    [onSubmit, value],
  );

  return (
    <form className="MemoInsert" onSubmit={onSubmit}>
      <textarea
        placeholder="Memo about your own"
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        autoFocus
        ref={memoTextarea}
      />
      <button type="submit">
        <IoMdArrowDown />
      </button>
    </form>
  );
};

export default MemoInsert;

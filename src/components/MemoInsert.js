import { useCallback, useState } from 'react';
import { IoMdArrowDown } from 'react-icons/io';
import './MemoInsert.scss';

const MemoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');

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
      e.target[0].style.height = '1.6875rem';

      e.preventDefault();
      e.target[0].focus();
    },
    [onInsert, value],
  );

  const onKeyDown = useCallback(
    (e) => {
      if (e.key === 'Enter') {
        if (e.shiftKey) {
          setValue(value.concat('\n'));
        }
        if (!e.altKey && !e.ctrlKey && !e.shiftKey && !e.metaKey) {
          const trimValue = value.trim();

          if (trimValue === '') {
            alert('내용을 입력해주세요.');
          } else {
            onInsert(trimValue);
          }

          setValue('');
          e.target.style.height = '1.6875rem';

          e.preventDefault();
          e.target.focus();
          console.log(e);
        }
      }
    },
    [onInsert, value],
  );

  return (
    <form className="MemoInsert" onSubmit={onSubmit}>
      <textarea
        placeholder="Memo about your own"
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        autoFocus
      />
      <button type="submit">
        <IoMdArrowDown />
      </button>
    </form>
  );
};

export default MemoInsert;

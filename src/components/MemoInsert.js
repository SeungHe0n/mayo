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

  const onKeyDown = (e) => {
    if (e.shiftKey) {
      console.log('shift');
    }
    if (e.shiftKey && e.which === 13) {
      console.log('shift + enter');
    }
  };

  // const onKeyDown = useCallback((e) => {
  //   if(e.shiftKey && e.which === 13) {
  //     alert()
  //   }
  // });

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

import { useCallback, useState } from 'react';
import { IoMdArrowDown } from 'react-icons/io';
import './MemoInsert.scss';

const MemoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue('');

      e.preventDefault();
    },
    [onInsert, value],
  );

  return (
    <form className="MemoInsert" onSubmit={onSubmit}>
      <input
        placeholder="Memo about your own"
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <IoMdArrowDown />
      </button>
    </form>
  );
};

export default MemoInsert;

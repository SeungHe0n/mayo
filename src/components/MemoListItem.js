import { MdDelete, MdEdit, MdCheckCircle } from 'react-icons/md';
import cn from 'classnames';
import './MemoListItem.scss';
import { useCallback, useState, useRef } from 'react';

const MemoListItem = ({ memo, onRemove, onToggle, onEdit }) => {
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
    // memoTextarea.current.style.height = '0';
    // memoTextarea.current.style.height =
    //   memoTextarea.current.scrollHeight + 'px';
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
    <div className={cn('MemoListItem', { checked })}>
      {editFlag ? (
        <textarea
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
          ref={memoTextarea}
          autoFocus
        />
      ) : (
        <pre onClick={() => onToggle(id)} readOnly>
          {text}
        </pre>
      )}

      <div className={`btn ${editFlag ? 'save' : 'edit'}`} onClick={onClick}>
        {editFlag ? <MdCheckCircle /> : <MdEdit />}
      </div>
      <div className="btn remove" onClick={() => onRemove(id)}>
        <MdDelete />
      </div>
    </div>
  );
};

export default MemoListItem;

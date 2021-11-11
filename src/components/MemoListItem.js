import { MdDelete, MdEdit, MdCheckCircle } from 'react-icons/md';
import cn from 'classnames';
import './MemoListItem.scss';
import { useCallback, useState } from 'react';

const MemoListItem = ({ memo, onRemove, onToggle, onEdit }) => {
  const { id, text, checked } = memo;

  const [editing, setEditing] = useState({ class: 'edit', icon: <MdEdit /> });

  const onClick = useCallback(
    (e) => {
      if (editing.class === 'edit') {
        setEditing({ class: 'save', icon: <MdCheckCircle /> });
      } else {
        setEditing({ class: 'edit', icon: <MdEdit /> });
      }
      console.log(editing.class);
    },
    [editing],
  );

  // const onChange = useCallback((e) => {
  //   setValue(e.target.value);
  // }, []);

  return (
    <div className={cn('MemoListItem', { checked })}>
      <pre
        onClick={() => onToggle(id)}
        // onChange={onChange}
        readOnly
      >
        {text}
      </pre>
      <div className={editing.class} onClick={onClick}>
        {editing.icon}
      </div>
      <div className="remove" onClick={() => onRemove(id)}>
        <MdDelete />
      </div>
    </div>
  );
};

export default MemoListItem;

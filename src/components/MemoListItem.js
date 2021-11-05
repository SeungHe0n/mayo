import { MdDelete } from 'react-icons/md';
import cn from 'classnames';
import './MemoListItem.scss';

const MemoListItem = ({ memo, onRemove, onToggle }) => {
  const { id, text, checked } = memo;

  return (
    <div className={cn('MemoListItem', { checked })}>
      <textarea value={text} onClick={() => onToggle(id)} readOnly />
      <div className="remove" onClick={() => onRemove(id)}>
        <MdDelete />
      </div>
    </div>
  );
};

export default MemoListItem;

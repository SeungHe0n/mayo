import { MdDelete } from 'react-icons/md';
import cn from 'classnames';
import './MemoListItem.scss';

const MemoListItem = ({ memo, onRemove, onToggle }) => {
  const { id, text, checked } = memo;

  return (
    <div className={cn('MemoListItem', { checked })}>
      <pre onClick={() => onToggle(id)}>{text}</pre>
      <div className="remove" onClick={() => onRemove(id)}>
        <MdDelete />
      </div>
    </div>
  );
};

export default MemoListItem;

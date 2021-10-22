import { MdDelete } from 'react-icons/md';
import cn from 'classnames';
import './MemoListItem.scss';

const MemoListItem = ({ memo, onRemove, onToggle }) => {
  const { id, text, checked } = memo;

  return (
    <div className={cn('MemoListItem', { checked })}>
      <div className="text" onClick={() => onToggle(id)}>
        {text}
      </div>
      <div className="remove" onClick={() => onRemove(id)}>
        <MdDelete />
      </div>
    </div>
  );
};

export default MemoListItem;

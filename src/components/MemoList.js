import './MemoList.scss';
import MemoListItem from './MemoListItem';

const MemoList = ({ memos, onRemove, onToggle, onEdit }) => {
  return (
    <div className="MemoList">
      {memos
        .slice(0)
        .reverse()
        .map((memo) => (
          <MemoListItem
            memo={memo}
            key={memo.id}
            onRemove={onRemove}
            onToggle={onToggle}
            onEdit={onEdit}
          />
        ))}
    </div>
  );
};

export default MemoList;

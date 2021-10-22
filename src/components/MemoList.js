import './MemoList.scss';
import MemoListItem from './MemoListItem';

const MemoList = ({ memos, onRemove, onToggle }) => {
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
          />
        ))}
    </div>
  );
};

export default MemoList;

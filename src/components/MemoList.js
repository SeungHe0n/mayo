import './MemoList.scss';
import MemoListItem from './MemoListItem';

const MemoList = ({ todos, onRemove, onToggle }) => {
  return (
    <div className="MemoList">
      {todos
        .slice(0)
        .reverse()
        .map((todo) => (
          <MemoListItem
            todo={todo}
            key={todo.id}
            onRemove={onRemove}
            onToggle={onToggle}
          />
        ))}
    </div>
  );
};

export default MemoList;

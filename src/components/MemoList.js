import './MemoList.scss';
import TodoListItem from './TodoListItem';

const MemoList = ({ todos, onRemove, onToggle }) => {
  return (
    <div className="MemoList">
      {todos.map((todo) => (
        <TodoListItem
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

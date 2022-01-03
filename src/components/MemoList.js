// import styled from 'styled-components';
import Memo from './Memo';

const MemoList = () => {
  return (
    <div>
      {/* {memos
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
            ))} */}
      <Memo />
      <Memo />
    </div>
  );
};

export default MemoList;

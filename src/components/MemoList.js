import styled from 'styled-components';
import Memo from './Memo';

const Box = styled.div`
  margin: 0 12% 2rem 12%;
`;

const MemoList = ({ memos, onRemove, onToggle, onEdit }) => {
  return (
    <Box>
      {memos
        .slice(0)
        .reverse()
        .map((memo) => (
          <Memo
            memo={memo}
            key={memo.id}
            onRemove={onRemove}
            onToggle={onToggle}
            onEdit={onEdit}
          />
        ))}
    </Box>
  );
};

export default MemoList;

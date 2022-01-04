import styled from 'styled-components';
import Memo from './Memo';

const Box = styled.div`
  margin: 0 12%;
`;

const MemoList = () => {
  return (
    <Box>
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
    </Box>
  );
};

export default MemoList;

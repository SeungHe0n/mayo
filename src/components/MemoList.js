import styled from 'styled-components';
import PropTypes from 'prop-types';
import Memo from './Memo';

const Wrap = styled.div`
  /* margin: 0 24% 2rem 24%; */
`;

MemoList.propTypes = {
  memos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      checked: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  onRemove: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default function MemoList({ memos, onRemove, onToggle, onEdit }) {
  return (
    <Wrap>
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
    </Wrap>
  );
}

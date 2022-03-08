import PropTypes from 'prop-types';
import styled from 'styled-components';
import Memo from './Memo';

SearchList.propTypes = {
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
  onPopup: PropTypes.func.isRequired,
};

export default function SearchList({
  memos,
  onRemove,
  onToggle,
  onEdit,
  onPopup,
}) {
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
            onPopup={onPopup}
          />
        ))}
    </Wrap>
  );
}

const Wrap = styled.div`
  padding: 0 20px;
`;

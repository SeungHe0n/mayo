import styled from 'styled-components';
import PropTypes from 'prop-types';
import MemoList from './MemoList';
import SearchList from './SearchList';

List.propTypes = {
  search: PropTypes.bool,
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

export default function List({
  search,
  memos,
  onRemove,
  onToggle,
  onEdit,
  onPopup,
}) {
  return (
    <Wrap>
      {search ? (
        <SearchList
          memos={memos}
          onRemove={onRemove}
          onToggle={onToggle}
          onEdit={onEdit}
          onPopup={onPopup}
        />
      ) : (
        <MemoList
          memos={memos}
          onRemove={onRemove}
          onToggle={onToggle}
          onEdit={onEdit}
          onPopup={onPopup}
        />
      )}
    </Wrap>
  );
}

const Wrap = styled.div`
  padding: 0 20px;
`;

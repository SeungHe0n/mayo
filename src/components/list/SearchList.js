import PropTypes from 'prop-types';
import Memo from '../Memo';

SearchList.propTypes = {
  memos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      checked: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  keyword: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onPopup: PropTypes.func.isRequired,
};

export default function SearchList({
  memos,
  keyword,
  onRemove,
  onToggle,
  onEdit,
  onPopup,
}) {
  return (
    <>
      {memos
        .slice(0)
        .filter((x) => x.text.indexOf(keyword) > -1 && keyword !== '')
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
    </>
  );
}

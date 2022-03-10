import PropTypes from 'prop-types';
import InputBar from './InputBar';
import SearchBar from './SearchBar';

Bar.propTypes = {
  search: PropTypes.bool,
  onInsert: PropTypes.func.isRequired,
  onPopup: PropTypes.func,
  onExpand: PropTypes.func,
  onKeyword: PropTypes.func,
};

export default function Bar({
  search,
  onInsert,
  onPopup,
  onExpand,
  onKeyword,
}) {
  return (
    <>
      {search ? (
        <SearchBar onKeyword={onKeyword} />
      ) : (
        <InputBar onInsert={onInsert} onPopup={onPopup} onExpand={onExpand} />
      )}
    </>
  );
}

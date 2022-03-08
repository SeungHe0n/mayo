import PropTypes from 'prop-types';
import InputBar from './InputBar';
import SearchBar from './SearchBar';

Bar.propTypes = {
  search: PropTypes.bool,
  onInsert: PropTypes.func.isRequired,
  onPopup: PropTypes.func.isRequired,
  onExpand: PropTypes.func.isRequired,
};

export default function Bar({ search, onInsert, onPopup, onExpand }) {
  return (
    <>
      {search ? (
        <SearchBar />
      ) : (
        <InputBar onInsert={onInsert} onPopup={onPopup} onExpand={onExpand} />
      )}
    </>
  );
}

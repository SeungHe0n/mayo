import styled from 'styled-components';
import PropTypes from 'prop-types';
import SearchButton from './button/SearchButton';

Header.propTypes = {
  search: PropTypes.bool,
  onSearch: PropTypes.func,
};

export default function Header({ search, onSearch }) {
  return (
    <Wrap search={search}>
      <h1>SINK</h1>
      <SearchButton search={search} onSearch={onSearch} />
    </Wrap>
  );
}

const Wrap = styled.div`
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    margin: 0;
    font-size: 2rem;
    font-family: 'Jua', sans-serif;
    color: ${({ search }) => (search ? '#737080' : '#42526c')};
    user-select: none;
  }
`;

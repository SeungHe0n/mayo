import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { ImSearch } from 'react-icons/im';

SearchButton.propTypes = {
  search: PropTypes.bool.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default function SearchButton({ search, onSearch }) {
  return (
    <Wrap search={search} onClick={onSearch}>
      <ImSearch />
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.8rem;
  width: 4.2rem;
  height: 60%;
  transition: all 0.2s ease-out;

  cursor: pointer;
  font-size: 1.5rem;
  color: #42526c;

  ${({ search }) => {
    if (search) {
      return css`
        color: #717d91;
      `;
    } else {
      return css`
        :hover {
          background-color: #f2f2f2;
          color: #717d91;
        }
      `;
    }
  }}
`;

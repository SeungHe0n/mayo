import styled from 'styled-components';
import PropTypes from 'prop-types';
import Header from './Header';
import Bar from './bar/Bar';

RealHeader.propTypes = {
  search: PropTypes.bool,
  onSearch: PropTypes.func,
};

export default function RealHeader({
  search,
  onSearch,
  onInsert,
  onPopup,
  onExpand,
  onKeyword,
}) {
  return (
    <Wrap search={search}>
      <div className="header-wrap">
        <Header search={search} onSearch={onSearch} />
        <Bar
          search={search}
          onInsert={onInsert}
          onPopup={onPopup}
          onExpand={onExpand}
          onKeyword={onKeyword}
        />
      </div>
      <Wave />
    </Wrap>
  );
}

const Wrap = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: ${({ search }) => (search ? '#F2F2F2' : 'white')};

  width: 100%;
  box-shadow: 0 10px 10px #abd6e7;
  display: flex;

  flex-direction: column;
  align-items: center;

  .header-wrap {
    max-width: 900px;
    width: 100%;
    padding: 0 20px;
  }
`;

const Wave = styled.div`
  width: 100%;
  height: 50px;

  background: linear-gradient(#ffffff 56%, transparent 0),
    radial-gradient(closest-side, #ffffff 97%, transparent 100%) #abd6e7;
  background-size: 100px 30px;
  background-repeat: repeat-x;
`;

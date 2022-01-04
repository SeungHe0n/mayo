import styled from 'styled-components';
import { MdSearch, MdMenu } from 'react-icons/md';

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.5rem;
  /* position: fixed; */

  div {
    display: flex;
    align-items: center;
  }

  // 수정 필요
  .logo {
    font-size: 1.5rem;
  }
`;

const Button = styled.div`
  display: flex;
  font-size: 2rem;
  color: #737080;

  &:hover {
    color: #929292;
  }

  & + & {
    margin-left: 1rem;
  }
`;

const Header = () => {
  return (
    <Box>
      <div className="logo">MAYO</div>
      <div>
        <Button>
          <MdSearch />
        </Button>
        <Button>
          <MdMenu />
        </Button>
      </div>
    </Box>
  );
};

export default Header;

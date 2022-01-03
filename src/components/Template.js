import styled from 'styled-components';
import { MdSearch, MdMenu } from 'react-icons/md';

const Box = styled.div`
  width: 1500px;
  margin: 0 auto 2rem auto;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 1.5rem;
  /* position: fixed; */
  /* width: 1300px; */

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

const Main = styled.div`
  /* padding: 2rem 10rem 0 10rem; */
  padding: 0 15rem;
`;

const Template = ({ children }) => {
  return (
    <Box>
      <Header>
        <div className="logo">MAYO</div>
        <div>
          <Button>
            <MdSearch />
          </Button>
          <Button>
            <MdMenu />
          </Button>
        </div>
      </Header>
      <Main>{children}</Main>
    </Box>
  );
};

export default Template;

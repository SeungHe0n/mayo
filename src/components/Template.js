import styled from 'styled-components';
import { MdSearch, MdMenu } from 'react-icons/md';

const Box = styled.div`
  background: coral;
  width: 1300px;
  margin: 0 auto 2rem auto;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  background: yellow;
  padding: 1rem 1.5rem;

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

  &:hover {
    color: red;
  }

  & + & {
    margin-left: 1rem;
  }
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
      <div>{children}</div>
    </Box>
  );
};

export default Template;

import styled from 'styled-components';
import { ImSearch } from 'react-icons/im';
import { HiMenu } from 'react-icons/hi';
import Button from './utils/Button';

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 2rem;
  /* position: fixed; */

  div {
    display: flex;
    align-items: center;
  }

  .logo {
    font-size: 2rem;
    font-family: 'Jua', sans-serif;
    color: #495057;
    cursor: pointer;
    user-select: none;
  }
`;

export default function Header() {
  return (
    <Wrap>
      <div className="logo">MAYO</div>
      <div>
        <Button icon={<ImSearch />} color="darkgrey" />
        <Button icon={<HiMenu />} size={2} color="darkgrey" />
      </div>
    </Wrap>
  );
}

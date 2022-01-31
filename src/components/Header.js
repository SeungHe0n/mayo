import styled from 'styled-components';
import { ImSearch } from 'react-icons/im';
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
    font-size: 2.5rem;
    font-family: 'Jua', sans-serif;
    color: #42526c;
    user-select: none;
  }
`;

export default function Header() {
  return (
    <Wrap>
      <div className="logo">MAYO</div>
      <div>
        <Button icon={<ImSearch />} size={1.7} color="navy" />
      </div>
    </Wrap>
  );
}

import styled from 'styled-components';
import { ImSearch } from 'react-icons/im';
import Button from './utils/Button';

const Wrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  height: 100px;
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;

  background: whitesmoke;

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

import styled from 'styled-components';
import { ImSearch } from 'react-icons/im';
import Button from './utils/Button';

export default function Header() {
  return (
    <Wrap>
      <h1>MAYO</h1>
      <Button icon={<ImSearch />} size={1.5} color="navy" />
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
    color: #42526c;
    user-select: none;
  }

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.8rem;
    width: 4rem;
    height: 60%;
    transition: all 0.2s ease-in;

    :hover {
      background-color: rgba(0, 0, 0, 0.05);
    }
  }
`;

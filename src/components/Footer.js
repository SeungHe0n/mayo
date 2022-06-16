import styled from 'styled-components';

export default function Footer() {
  return (
    <Wrap>
      <p>developed by seungheon Lee .</p>
    </Wrap>
  );
}

const Wrap = styled.footer`
  height: 40px;
  margin-top: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  p {
    margin: 0;
    max-width: 900px;
    width: 100%;
    text-align: center;
    font-size: 0.9rem;
    color: white;
    user-select: none;
  }
`;

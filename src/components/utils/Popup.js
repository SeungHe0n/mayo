import styled from 'styled-components';

export default function Popup({ onClose }) {
  return (
    <Wrap onAnimationEnd={onClose}>
      <div>
        <p>빈 내용입니다.</p>
      </div>
    </Wrap>
  );
}

const Wrap = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 999;
  user-select: none;
  animation: fadein 0.7s 2 alternate;
  padding-top: 5rem;

  div {
    border-radius: 0.5rem;
    background: #fff;
    width: 260px;
    height: 90px;
    font-size: 1.1rem;
    display: flex;
    align-items: center;

    margin: 0 auto;
  }

  div > p {
    flex: auto;
    margin: 0;
    text-align: center;
  }

  @keyframes fadein {
    0% {
      opacity: 0;
      margin-top: -30px;
    }
    50%,
    100% {
      opacity: 1;
      margin-top: 0;
    }
  }
`;

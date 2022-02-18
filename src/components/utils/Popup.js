import styled from 'styled-components';

export default function Popup({ onClose }) {
  setTimeout(onClose, 2000);

  return (
    <Wrap>
      <div>
        <p>내용을 입력해주세요.</p>
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
  z-index: 1;
  user-select: none;
  animation: body-fadein 0.3s;
  padding-top: 5rem;

  div {
    border-radius: 0.5rem;
    background: #fff;
    width: 260px;
    height: 90px;
    font-size: 1.1rem;
    display: flex;
    align-items: center;
    animation: box-fadein 0.3s;

    margin: 0 auto;
  }

  div > p {
    flex: auto;
    margin: 0;
    text-align: center;
  }
  @keyframes body-fadein {
    from {
      opacity: 0;
      margin-top: -30px;
    }
    to {
      opacity: 1;
      margin-top: 0;
    }
  }
  @keyframes box-fadein {
    from {
      opacity: 0;
      margin-top: -30px;
    }
    to {
      opacity: 1;
      margin-top: 0;
    }
  }
`;

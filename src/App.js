import React, { useState, useRef, useCallback } from 'react';
import Header from './components/Header';
import MemoInput from './components/MemoInput';
import MemoList from './components/MemoList';
import styled from 'styled-components';
import Popup from './components/utils/Popup';

export default function App() {
  const [memos, setMemos] = useState([
    {
      id: 1,
      text: '줄바꿈을 사용하고 싶다면\nSHIFT를 누른 상태로 ENTER를 치세요',
      checked: false,
    },
    {
      id: 2,
      text: '아이디어를 해결했다면 클릭해서 줄을 그을 수 있어요',
      checked: true,
    },
    {
      id: 3,
      text: '위 입력창에 당신의 아이디어나 생각을 입력하세요',
      checked: false,
    },
  ]);

  const nextId = useRef(4);

  const onInsert = useCallback(
    (text) => {
      const memo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setMemos(memos.concat(memo));
      nextId.current += 1;
    },
    [memos],
  );

  const onRemove = useCallback(
    (id) => {
      setMemos(memos.filter((memo) => memo.id !== id));
    },
    [memos],
  );

  const onToggle = useCallback(
    (id) => {
      setMemos(
        memos.map((memo) =>
          memo.id === id ? { ...memo, checked: !memo.checked } : memo,
        ),
      );
    },
    [memos],
  );

  const onEdit = useCallback(
    (id, text) => {
      setMemos(
        memos.map((memo) => (memo.id === id ? { ...memo, text: text } : memo)),
      );
    },
    [memos],
  );

  const [popup, setPopup] = useState(false);
  const onPopup = () => {
    setPopup(true);
  };

  return (
    <Body>
      {popup && <Popup onClose={() => setPopup(false)} />}
      <Top>
        <Wrap>
          <Header />
          <MemoInput onInsert={onInsert} onPopup={onPopup} />
        </Wrap>
      </Top>
      <Main>
        <MemoList
          memos={memos}
          onRemove={onRemove}
          onToggle={onToggle}
          onEdit={onEdit}
          onPopup={onPopup}
        />
      </Main>
      <Footer>
        <p>developed by seungheon Lee .</p>
      </Footer>
    </Body>
  );
}

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
`;

const Top = styled.header`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  background-color: white;
  box-shadow: 0 2px 2px -2px rgb(0 0 0 / 20%);
  display: flex;
  justify-content: center;
`;

const Wrap = styled.div`
  max-width: 900px;
  width: 100%;
  padding: 0 20px;
  padding-bottom: 10px;
`;

const Main = styled.main`
  padding-top: 135px;
  max-width: 900px;
  margin: 0 auto;
  width: 100%;
`;

const Footer = styled.footer`
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
    color: lightgray;
  }
`;

import React, { useState, useRef, useCallback } from 'react';
import Template from './components/Template';
import MemoInsert from './components/MemoInsert';
import MemoList from './components/MemoList';

const App = () => {
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

  return (
    <Template>
      <MemoInsert onInsert={onInsert} />
      <MemoList
        memos={memos}
        onRemove={onRemove}
        onToggle={onToggle}
        onEdit={onEdit}
      />
    </Template>
  );
};

export default App;

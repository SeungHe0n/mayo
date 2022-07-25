import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useRef, useCallback } from 'react';
import Home from './pages/Home';
import Search from './pages/Search';
import defaultMemo from './defaultMemo';

export default function App() {
  const [memos, setMemos] = useState(defaultMemo);
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
    <BrowserRouter>
      <Routes>
        <Route
          path="sink"
          element={
            <Home
              memos={memos}
              onInsert={onInsert}
              onRemove={onRemove}
              onToggle={onToggle}
              onEdit={onEdit}
            />
          }
        />
        <Route
          path="sinkof"
          element={
            <Search
              memos={memos}
              onRemove={onRemove}
              onToggle={onToggle}
              onEdit={onEdit}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

import styled from 'styled-components';
import { useState, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImSearch } from 'react-icons/im';
import Popup from '../components/Popup';
import WaveHeader from '../components/UI/WaveHeader';
import Logo from '../components/UI/Logo';
import Button from '../components/UI/Button';
import InputBar from '../components/InputBar';
import Memo from '../components/Memo';
import Footer from '../components/UI/Footer';

export default function Home({ memos, onInsert, onRemove, onToggle, onEdit }) {
  const [popup, setPopup] = useState(false);
  const onPopup = () => {
    setPopup(true);
  };

  const [padding, setPadding] = useState(187);
  const onExpand = (value) => {
    setPadding(value);
  };

  const [value, setValue] = useState('');
  const memoTextarea = useRef(null);

  const onChange = useCallback((e) => {
    setValue(e.target.value);

    memoTextarea.current.style.height = '';
    memoTextarea.current.style.height =
      memoTextarea.current.scrollHeight + 'px';

    if (memoTextarea.current.scrollHeight < 298)
      onExpand(160 + memoTextarea.current.scrollHeight);
    else onExpand(428);
  }, []);

  const onClick = useCallback(
    (e) => {
      const trimValue = value.trim();

      if (trimValue === '') {
        onPopup();
      } else {
        onInsert(trimValue);
      }

      setValue('');
      memoTextarea.current.style.height = '1.6875rem';
      onExpand(187);

      e.preventDefault();
      memoTextarea.current.focus();
    },
    [onInsert, value],
  );

  const onKeyDown = useCallback(
    (e) => {
      if (e.key === 'Enter') {
        if (!e.shiftKey && !e.ctrlKey) {
          onClick(e);
        }
      }
    },
    [onClick],
  );

  return (
    <Body>
      <WaveHeader color="white" waveColor="#abd6e7">
        {popup && <Popup onClose={() => setPopup(false)} />}
        <HeaderTop>
          <Logo color={'#ffac33'} content={'SINK'} />
          <Link to="/sinkof">
            <Button size={'big'} color={'#717d91'} hover={'inverted'}>
              <ImSearch />
            </Button>
          </Link>
        </HeaderTop>
        <InputBar
          placeholder={'당신의 생각을 여기에 적어보세요 !'}
          button={true}
          onButtonClick={onClick}
          onChange={onChange}
          onKeyDown={onKeyDown}
          textareaRef={memoTextarea}
          value={value}
        />
      </WaveHeader>
      <Main padding={padding}>
        <MemoList>
          {memos
            .slice(0)
            .reverse()
            .map((memo) => (
              <Memo
                memo={memo}
                key={memo.id}
                onRemove={onRemove}
                onToggle={onToggle}
                onEdit={onEdit}
                onPopup={onPopup}
              />
            ))}
        </MemoList>
      </Main>
      <Footer />
    </Body>
  );
}

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  width: 100%;
  min-height: 100vh;
  transition: all 0.2s ease-out;

  background-color: #abd6e7;
`;

const HeaderTop = styled.div`
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Main = styled.main`
  padding-top: ${({ padding }) => padding + 'px'};
  max-width: 900px;
  margin: 0 auto;
  width: 100%;
`;

const MemoList = styled.div`
  padding: 0 20px;
`;

import styled from 'styled-components';
import { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ImSearch } from 'react-icons/im';
import Popup from '../components/Popup';
import WaveHeader from '../components/UI/WaveHeader';
import Logo from '../components/UI/Logo';
import Button from '../components/UI/Button';
import InputBar from '../components/InputBar';
import Memo from '../components/Memo';
import Footer from '../components/UI/Footer';

export default function Search({ memos, onRemove, onToggle, onEdit }) {
  const [popup, setPopup] = useState(false);
  const onPopup = () => {
    setPopup(true);
  };

  const [keyword, setKeyword] = useState('');
  const onKeyword = (value) => {
    setKeyword(value);
  };

  const [value, setValue] = useState('');

  const onChange = useCallback((e) => {
    setValue(e.target.value);
    onKeyword(e.target.value);
  }, []);

  return (
    <Body>
      {popup && <Popup onClose={() => setPopup(false)} />}
      <WaveHeader color="DarkSlateGray" waveColor="Teal">
        <HeaderTop>
          <Logo color={'white'} content={'SINKof'} />
          <Link to="/sink">
            <Button size={'big'} color={'lightgrey'}>
              <ImSearch />
            </Button>
          </Link>
        </HeaderTop>
        <InputBar
          placeholder={'메모를 검색하세요 !'}
          value={value}
          onChange={onChange}
        />
      </WaveHeader>
      <Main>
        <MemoList>
          {memos
            .slice(0)
            .filter((x) => x.text.indexOf(keyword) > -1 && keyword !== '')
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

  background-color: Teal;
`;

const HeaderTop = styled.div`
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Main = styled.main`
  padding-top: 187px;
  max-width: 900px;
  margin: 0 auto;
  width: 100%;
`;

const MemoList = styled.div`
  padding: 0 20px;
`;

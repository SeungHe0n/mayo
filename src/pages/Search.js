import styled from 'styled-components';
import { useState, useCallback } from 'react';
import { ImSearch } from 'react-icons/im';
import Popup from '../components/Popup';
import WaveHeader from '../components/UI/WaveHeader';
import Logo from '../components/UI/Logo';
import LinkButton from '../components/UI/LinkButton';
import InputBar from '../components/UI/InputBar';
import Memo from '../components/Memo';
import Footer from '../components/UI/Footer';

export default function Search({ memos, onRemove, onToggle, onEdit }) {
  const HEADERCOLOR = 'DarkSlateGray';
  const WAVECOLOR = 'Teal';

  const [popup, setPopup] = useState(false);
  const onPopup = () => {
    setPopup(true);
  };

  // const [keyword, setKeyword] = useState('');
  // const onKeyword = (value) => {
  //   setKeyword(value);
  // };

  const [value, setValue] = useState('');

  const onChange = useCallback((e) => {
    setValue(e.target.value);
    // onKeyword(e.target.value);
  }, []);

  return (
    <Body color={WAVECOLOR}>
      {popup && <Popup onClose={() => setPopup(false)} />}
      <WaveHeader color={HEADERCOLOR} waveColor={WAVECOLOR}>
        <HeaderTop>
          <Logo color={'white'} content={'SINKof'} />
          <LinkButton to="/sink" size={'big'} color={'lightgrey'}>
            <ImSearch />
          </LinkButton>
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
            .filter((x) => x.text.indexOf(value) > -1 && value !== '')
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
  width: 100%;
  min-height: 100vh;
  transition: all 0.2s ease-out;
  background-color: ${({ color }) => color};
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

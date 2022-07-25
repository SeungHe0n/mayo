import styled from 'styled-components';
import PropTypes from 'prop-types';

WaveHeader.propTypes = {
  color: PropTypes.string,
  waveColor: PropTypes.string,
};

WaveHeader.defaultProps = {
  color: 'white',
  waveColor: 'LightSeaGreen',
};

export default function WaveHeader({ color, waveColor, children }) {
  return (
    <Header color={color} waveColor={waveColor}>
      <Contents>{children}</Contents>
      <Wave color={color} waveColor={waveColor} />
    </Header>
  );
}

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: ${({ color }) => color};

  width: 100%;
  box-shadow: 0 10px 10px ${({ waveColor }) => waveColor};
  display: flex;

  flex-direction: column;
  align-items: center;
`;

const Contents = styled.div`
  max-width: 900px;
  width: 100%;
  padding: 0 20px;
`;

const Wave = styled.div`
  width: 100%;
  height: 50px;

  background: ${({
    color,
    waveColor,
  }) => `linear-gradient(${color} 56%, transparent 0),
    radial-gradient(closest-side, ${color} 97%, transparent 100%) ${waveColor}`};
  background-size: 100px 30px;
  background-repeat: repeat-x;
`;

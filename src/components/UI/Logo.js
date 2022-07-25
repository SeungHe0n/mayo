import styled from 'styled-components';
import PropTypes from 'prop-types';
import { HiSun } from 'react-icons/hi';

Logo.propTypes = {
  color: PropTypes.string,
  content: PropTypes.string,
};

Logo.defaultProps = {
  color: '#ffac33',
  content: 'no content',
};

export default function Logo({ color, content }) {
  return (
    <LogoStyle color={color}>
      <HiSun />
      <h1>{content}</h1>
    </LogoStyle>
  );
}

const LogoStyle = styled.div`
  display: flex;
  align-items: center;
  color: ${({ color }) => color};

  svg {
    font-size: 2.5rem;
    padding-right: 0.3rem;
  }

  h1 {
    margin: 0;
    font-size: 2rem;
    font-family: 'Jua', sans-serif;
    user-select: none;
  }
`;

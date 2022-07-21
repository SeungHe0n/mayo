import styled from 'styled-components';

export default function MemoList({ children }) {
  return <MemoListStyle>{children}</MemoListStyle>;
}

const MemoListStyle = styled.div`
  padding: 0 20px;
`;

import styled from '@emotion/styled';

const colors: Record<number, string> = {
  0: '#49C4E5',
  1: '#8471F2',
  2: '#67E2Ae',
  3: '#c993db',
  4: '#f7b500',
};

const Container = styled.div`
  width: 17px;
  height: 17px;
  border-radius: 50%;
  margin-right: 10px;
  background-color: ${(props) => props.color};
`;

const IndexColor = ({ index }: { index: number }) => {
  return <Container color={colors[index]} />;
};

export default IndexColor;

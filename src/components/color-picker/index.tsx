import styled from '@emotion/styled';
import { PickerIcon } from '../icons';

const colors: Record<number, string> = {
  0: '#49C4E5',
  1: '#8471F2',
  2: '#67E2Ae',
  3: '#c993db',
  4: '#f7b500',
};

const Container = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.color};
  padding: 5px;
`;

const ColorPicker = ({ index }: { index: number }) => {
  return (
    <Container color={colors[index]}>
      <PickerIcon />
    </Container>
  );
};

export default ColorPicker;

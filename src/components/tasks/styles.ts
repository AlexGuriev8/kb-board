import { css } from '@emotion/react';
import styled from '@emotion/styled';

const TasksWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  width: 100%;

  ${(props: { withBoards: boolean }) =>
    props.withBoards &&
    css`
      justify-content: flex-start;
      align-items: flex-start;
    `}

  button {
    margin-top: 13px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  width: 100%;
  gap: 15px;

  .column {
    flex-basis: 280px;
    /* border: 1px solid #fff; */
  }

  .tasks-length {
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: bold;
    font-size: 14px;
  }
  .tasks {
    margin-top: 15px;
    width: 100%;

    .task {
      background-color: #fff;
      box-shadow: 0 4px 6px 0px rgba(54, 78, 126, 0.1);
      padding: 10px;
      border-radius: 0.5rem;
    }
  }
`;

export default TasksWrapper;
export { Container };

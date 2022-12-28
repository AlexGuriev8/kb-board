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

  .new-column {
    flex-basis: 280px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:hover {
      background-color: #fff;

      button {
        border-radius: 0;
      }
    }
  }

  .column {
    flex-basis: 280px;
    padding: 10px;

    button {
      border-radius: 0;
      margin: 0;
    }
  }

  .tasks-length {
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: bold;
    font-size: 14px;
  }

  .task-wrapper {
    margin-top: 15px;
    width: 100%;

    .task {
      background-color: #fff;
      box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1),
        0 4px 6px -4px rgb(0 0 0 / 0.1);
      padding: 10px;
      border-radius: 0.5rem;
      /* cursor: move; */

      .task-content {
        &_title {
          cursor: pointer;
          font-size: 14.5px;
          font-weight: bold;

          &:hover {
            text-decoration: underline;
          }
        }

        &_description {
          margin-top: 10px;
        }
      }
    }
  }
`;

export default TasksWrapper;
export { Container };

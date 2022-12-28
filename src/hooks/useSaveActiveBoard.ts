import { useCallback } from 'react';

import { useStore } from '@/store/createStoreContext';
import { Board } from '@/store/types';

const useSaveActiveBoard = () => {
  const [boards, setStore] = useStore((store) => store.boards);

  const activeBoard = boards.find((board) => board.active);

  const setBoardToStore = useCallback(
    (currentBoard: Board) => {
      if (!activeBoard) return;
      setStore({
        boards: boards.map((board) => {
          if (board.id === currentBoard.id) {
            return currentBoard;
          }
          return board;
        }),
      });
    },
    [activeBoard, setStore, boards]
  );

  return {
    activeBoard,
    setBoardToStore,
  };
};

export default useSaveActiveBoard;

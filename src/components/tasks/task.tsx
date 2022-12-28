import { Draggable } from 'react-beautiful-dnd';
import { Task as TTask } from '@/store/types';

export const Task = ({
  task,
  index,
  onTitleClick,
}: {
  task: TTask;
  index: number;
  onTitleClick: () => void;
}) => {
  return (
    <Draggable key={task.id} draggableId={task.id} index={index}>
      {(provided) => (
        <div
          key={task.id}
          className="task-wrapper"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className="task">
            <span className="task-content_title" onClick={onTitleClick}>
              {task.title}
            </span>
            <div className="task-content_description">{task.description}</div>
          </div>
        </div>
      )}
    </Draggable>
  );
};

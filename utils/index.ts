import { Todo } from '@/types';

export const createTodo = (toDoTitle: string, id: number): Todo => {
  return {
    id,
    title: toDoTitle,
    completed: false,
  };
};

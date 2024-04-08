import { Todo } from '@/types';
import type { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = {
  message: string;
  toDoList: Todo[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  let toDoListTest: Todo[] = [
    { id: 1, title: 'Testing1', completed: false },
    { id: 2, title: 'Testing2', completed: false },
    { id: 3, title: 'Testing3', completed: false },
  ];

  res
    .status(200)
    .json({ message: 'Hello from Next.js!', toDoList: toDoListTest });
}

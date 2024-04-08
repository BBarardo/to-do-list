import { Todo } from '@/types';
import React, { Children, useState } from 'react';

interface ToDoItemProps {
    todo: Todo;
    onDelete: (id: number) => void;
    updateToDo: (id: number, property: "completed" | "title", value: string | boolean) => void;
}

const ToDoItem: React.FC<ToDoItemProps> = ({
    todo,
    onDelete,
    updateToDo,
}) => {
    const [toDo, setToDo] = useState(todo.title);
    const [editing, setEditing] = useState(false)
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setToDo(event.target.value);
    };

    return (
        <div className="flex items-center justify-between p-4 border-b border-gray-200 flex-nowrap">
            <div className="flex-grow">
                {editing ?
                    <input
                        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                        type="text"
                        value={toDo}
                        onChange={handleInputChange}
                    />
                    : <span onClick={() => updateToDo(todo.id, "completed", !todo.completed)} className={`${todo.completed ? 'line-through' : ''} mx-4 cursor-pointer`}>{todo.title}</span>
                }
            </div>
            <div className='flex flex-nowrap'>
                {!editing ?
                    <button
                        onClick={() => setEditing(!editing)}
                        className="mx-2 text-blue-500 hover:text-blue-700 border border-blue-500 hover:border-blue-700 rounded-md p-2"
                    >
                        Edit
                    </button>
                    : <button
                        onClick={() => {
                            updateToDo(todo.id, "title", toDo);
                            setEditing(!editing)
                        }}
                        className="mx-2 text-blue-500 hover:text-blue-700 border border-blue-500 hover:border-blue-700 rounded-md p-2"
                    >
                        Submit
                    </button>
                }
                <button
                    onClick={() => onDelete(todo.id)}
                    className="text-red-500 hover:text-red-700 border border-red-500 hover:border-red-700 rounded-md p-2"
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default ToDoItem;
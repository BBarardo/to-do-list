'use client'

import { Todo } from '@/types';
import { createTodo } from '@/utils';
import React, { useState } from 'react';

type ToDoProps = {
    todoList: Todo[];
    addTodo: (todo: Todo) => void;
};

const ToDo: React.FC<ToDoProps> = ({ todoList, addTodo }) => {
    const [toDo, setToDo] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setToDo(event.target.value);
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const newTodo = createTodo(toDo, todoList.length + 1,)
        addTodo(newTodo);
        setToDo('');
    };

    return (
        <form onSubmit={handleSubmit} className='flex items-center w-[600px]'>
            <input
                className="flex-grow border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                type="text"
                value={toDo}
                onChange={handleInputChange}
            />
            <button className="mx-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4" type="submit">
                Submit
            </button>
        </form>
    );
};

export default ToDo;
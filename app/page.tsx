'use client'

import AddNote from "@/components/AddToDo";
import ToDoItem from "@/components/ToDoItem";
import { Todo } from "@/types";
import Image from "next/image";
import { useState } from "react";

let toDoListTest: Todo[] = [
  { id: 1, title: "Testing1", completed: false },
  { id: 2, title: "Testing2", completed: false },
  { id: 3, title: "Testing3", completed: false }
]

export default function Home() {
  const [toDoList, setToDoList] = useState(toDoListTest)

  const addNewTodo = (todo: Todo) => {
    setToDoList([...toDoList, todo]);
  }
  const deleteTodo = (id: number) => {
    const updatedList = toDoList.filter(todo => todo.id !== id);
    setToDoList(updatedList);
  }

  const updateToDo = (id: number, property: "completed" | "title", value: string | boolean) => {
    const updatedList = toDoList.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          [property]: value
        };
      }
      return todo;
    });
    setToDoList(updatedList);
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-center text-blue-500 my-4">To Do List</h1>
      <div className="min-w-[600px]">
        {toDoList.map(todo =>
          <ToDoItem
            key={todo.id}
            todo={todo}
            onDelete={deleteTodo}
            updateToDo={updateToDo}
          />)}
      </div>
      <AddNote todoList={toDoList} addTodo={(addNewTodo)} />
    </main>
  );
}



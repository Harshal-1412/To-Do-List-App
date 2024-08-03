"use client";
import React, { useState } from 'react';

const Page = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (title.trim() && desc.trim()) {
      setMainTask([...mainTask, { title, desc }]);
      setTitle("");
      setDesc("");
    }
  };

  const deleteHandler = (i) => {
    let copytask = [...mainTask];
    copytask.splice(i, 1);
    setMainTask(copytask);
  };

  let renderTask = <h2>No Task Available</h2>;
  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className="flex items-center justify-between mb-4 w-1/3 mx-auto">
          <div className="flex items-center justify-between w-1/3">
            <h5 className="text-2xl font-semibold mb-1">{t.title}</h5>
            <h6 className="text-lg font-medium">{t.desc}</h6>
          </div>
          <button
            onClick={() => {
              deleteHandler(i);
            }}
            className="bg-red-500 text-white px-4 py-2 rounded font-bold border-red-600 border-2">
            Delete
          </button>
        </li>
      );
    });
  }

  return (
    <>
      <h1 className="bg-blue-900 text-white p-5 text-5xl font-bold text-center">
        My To Do List
      </h1>
      <form onSubmit={submitHandler} className="flex justify-center">
        <input
          type="text"
          className="text-2xl border-zinc-700 border-4 m-6 px-4 py-2"
          placeholder="Enter task here"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          type="text"
          className="text-2xl border-zinc-700 border-4 m-6 px-4 py-2"
          placeholder="Enter description here"
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />
        <button className="bg-green-700 text-white px-4 py-3 text-2xl font-bold rounded m-6">
          Add Task
        </button>
      </form>
      <hr />
      <div className="p-8 bg-slate-200">
        <ul className="flex flex-col items-center">
          {renderTask}
        </ul>
      </div>
    </>
  );
};

export default Page;

import React, { ChangeEvent, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import style from "./TodoList.module.css";

interface ITask {
    name: string;
    completed: boolean;
}

const TodoList: React.FC = (): JSX.Element => {
    const [taskList, setTaskList] = useState<ITask[]>([
        {
            name: "Погулять c собакой",
            completed: false,
        },
    ]);
    const [newTaskName, setNewTaskName] = useState<string>("");

    const handleIsDone = (index: number, checked: boolean) => {
        setTaskList((prevList) =>
            prevList.map((task, i) =>
                i === index ? { ...task, completed: checked } : task
            )
        );
    };

    const handleRemoveTask = (index: number): void => {
        setTaskList((prevList) => prevList.filter((_, i) => i !== index));
    };

    const handleAddTask = () => {
        setTaskList((prevList) => [
            ...prevList,
            { name: newTaskName, completed: false },
        ]);
        setNewTaskName("");
    };

    return (
        <div className={style.container}>
            <h1 className={style.h1}>TodoList App</h1>
            <input
            className={style.input}
                type="text"
                value={newTaskName}
                onChange={(e) => setNewTaskName(e.target.value)}
            />
            <button
                type="button"
                className={`${style.button} alert alert-primary`}
                onClick={handleAddTask}
            >
                Add  Task
            </button>
            <ol>
                {taskList.map((task, index) => (
                    <div key={index} className={style.task}>
                        <li className={style.li}>
                            <span>{index + 1}. </span>
                            {task.name}
                            <input
                                type="checkbox"
                                id="isDone"
                                checked={task.completed}
                                onChange={(e) =>
                                    handleIsDone(index, e.target.checked)
                                }
                            />
                            <button
                                className="alert alert-danger"
                                onClick={() => handleRemoveTask(index)}
                            >
                                Remove
                            </button>
                        </li>
                    </div>
                ))}
            </ol>
        </div>
    );
};

export default TodoList;

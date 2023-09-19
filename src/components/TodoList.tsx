import React, { ChangeEvent, useState } from "react";

interface ITask {
    name: string;
    completed: boolean;
}

const TodoList: React.FC = (): JSX.Element => {
    const [taskList, setTaskList] = useState<ITask[]>([
        {
            name: "Погулятьсобакой",
            completed: false,
        },
    ]);
    const [newTaskName, setNewTaskName] = useState<string>("");

    const handleIsDone = (index: number, checked: boolean) => {
        setTaskList(prevList => prevList.map((task, i) => 
            i === index ? {...task, completed: checked} : task
        ));
    };

    const handleRemoveTask = (index: number):void => {
        setTaskList(prevList => prevList.filter((_, i) => i !== index));
    };

    const handleAddTask = () => {
        setTaskList(prevList => [...prevList, {name: newTaskName, completed: false}]);
        setNewTaskName("");
    };

    return (
        <div className="container">
            <h1>Todo List App</h1>
            <input 
                type="text" 
                value={newTaskName} 
                onChange={(e) => setNewTaskName(e.target.value)} 
            />
            <button onClick={handleAddTask}>Add Task</button>
            <ol>
                {taskList.map((task, index) => (
                    <div key={index} className="task">
                        <li>
                            <span>{index + 1}. </span>
                            {task.name}
                            <input
                                type="checkbox"
                                id="isDone"
                                checked={task.completed}
                                onChange={(e) => handleIsDone(index, e.target.checked)}
                            />
                            <button onClick={() => handleRemoveTask(index)}>Remove</button>
                        </li>
                    </div>
                ))}
            </ol>
        </div>
    );
};

export default TodoList;

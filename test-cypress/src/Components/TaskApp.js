import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { addTask, getTask } from "./Api";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

const TodoApp = () => {
    const [todos, setTodos] = useState([]);
    const [task, setTask] = useState("");
    const [error, setError] = useState(false);

    const onTaskChange = (e) => {
        setTask(e.target.value);
    };

    const onTaskSubmit = (e) => {
        e.preventDefault();
        let payload = {
            id: todos.length + 1,
            name: task,
            completed: false,
        };

        addTask(payload).then((res) => {
            setTodos([...todos, res.data]);
            setTask("");
        });
    };

    useEffect(() => {
        getTask()
            .then((res) => setTodos(res.data))
            .catch((e) => {
                setError(true);
            });
    }, []);

    return (
        <Router>
            <div className="container-fluid text-center">
                <header className="p-2">
                    <h1>Tasks</h1>
                    {error && <h2 id="error-id">Error Occured</h2>}
                    <TaskForm
                        value={task}
                        onChange={onTaskChange}
                        onSubmit={onTaskSubmit}
                    />
                </header>
                <section className="mt-2">
                    <TaskList todos={todos} />
                </section>
            </div>
        </Router>
    );
};

export default TodoApp;

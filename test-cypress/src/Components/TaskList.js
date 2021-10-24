import React from "react";

const handleChange = (props) => {};

const TaskItem = (props) => (
    <li>
        <div>
            <label
                style={{
                    textDecoration: props.completed && "line-through",
                    textDecorationColor: props.completed && "green",
                }}
                id={`todo-${props.id}`}
            >
                {props.name}{" "}
            </label>
            <input type="checkbox" onChange={() => handleChange(props)} />
        </div>
    </li>
);

const TaskList = (props) => (
    <ul className="task-list">
        {props.todos.map((todo) => (
            <TaskItem key={todo.id} {...todo} />
        ))}
    </ul>
);

export default TaskList;

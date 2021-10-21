import React from "react";

const TaskItem = (props) => (
    <li>
        <div>
            <label id={`todo-${props.id}`}>{props.name} </label>
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

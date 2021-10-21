import React from "react";

const TaskForm = ({ value, onChange, onSubmit }) => (
    <form onSubmit={onSubmit}>
        <input
            type="text"
            autoFocus
            className="p-2 rounded border task-input"
            placeholder="Add something?"
            onChange={onChange}
            value={value}
        />
    </form>
);

export default TaskForm;

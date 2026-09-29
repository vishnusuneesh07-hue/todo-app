import React, { useState } from "react";
import { Button, Form, Navbar, Container } from "react-bootstrap";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  // Add Task
  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, task]);
    setTask("");
  };

  // Delete Task
  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div>
      {/* Navbar (Showcase only) */}
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Todo App</Navbar.Brand>
        </Container>
      </Navbar>

      <Container className="mt-4">
        {/* Input + Button */}
        <Form className="d-flex gap-2">
          <Form.Control
            type="text"
            placeholder="Enter task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <Button variant="primary" onClick={addTask}>
            Add Task
          </Button>
        </Form>

        {/* Task List */}
        <ul className="mt-4">
          {tasks.map((t, index) => (
            <li key={index} className="mb-2">
              {t}
              <Button
                variant="danger"
                size="sm"
                className="ms-3"
                onClick={() => deleteTask(index)}
              >
                Delete
              </Button>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}

export default App;


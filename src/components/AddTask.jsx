export const AddTask = ({ taskList, setTaskList, task, setTask }) => {

  function addTaskFun(e) {
    // stops re-rerender
    e.preventDefault();

    // checks if input is empty
    if (!e.target.task.value) {
      return;
    }

    // creates new todo
    if (task.id) {
      const date = new Date();
      const updatedTaskList = taskList.map((todo) => (
        todo.id === task.id ? { id: task.id, name: task.name, time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}` } : todo
      ));
      setTaskList(updatedTaskList);
      setTask({});

    } else {
      const date = new Date();
      const newTask = { id: date.getTime(), name: e.target.task.value, time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}` };

      // adds task to the list
      setTaskList([...taskList, newTask]);
      setTask({});
    }

  }

  return (
    <form className="addTask" onSubmit={addTaskFun}>
      <input value={task.name || ""} type="text" name="task" autoComplete="off" placeholder="add task" maxLength="25" onChange={e => setTask({ ...task, name: e.target.value })} />
      <button type="submit">{task.id ? "Update" : "Add"}</button>
    </form>
  )
}

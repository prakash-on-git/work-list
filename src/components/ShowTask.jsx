export const ShowTask = ({ taskList, setTaskList, task, setTask }) => {

  function claerListFun() {
    setTaskList([]);
  }

  function handleDelete(idd) {
    setTaskList(taskList.filter(task => task.id != idd));
    alert("mirakal");
  }

  function handleEdit(id) {
    setTask(taskList.find(todo => todo.id == id));
  }

  return (
    <section className="showTask">
      <div className="head">
        <div>
          <span className="title">Todo</span>
          <span className="count">{taskList.length}</span>
        </div>
        <button className="clearAll" onClick={claerListFun}>Clear All</button>
      </div>
      <ul>
        {taskList.map((task) => (
          <li id={task.id}>
            <p>
              <span className="name">{task.name}</span>
              <span className="time">{task.time}</span>
            </p>
            <i onClick={() => handleEdit(task.id)} className="bi bi-pencil-square"></i>
            <i onClick={() => handleDelete(task.id)} className="bi bi-trash"></i>
          </li>
        ))}

      </ul>
    </section>
  )
}

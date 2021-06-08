function Todolist({ toDoLists, handleRemoveItem, handleStatus, handleClear }) {
  const toDoSucces = toDoLists.reduce((total, item) => (item.done ? total + 1 : total), 0);

  function handleDeleteItem(id) {
    handleRemoveItem(id);
  }

  function handleChangeStatus(id) {
    handleStatus(id);
  }

  return (
    <>
      <h2 className="text-center text-info">
        Выполнено: <span className="">{toDoSucces + " из " + toDoLists.length}</span>
      </h2>
      <div className="card">
        <ul className="list-group list-group-flush">
          {toDoLists.map((toDoList, id) => {
            return (
              <li
                className={`list-group-item d-flex justify-content-between align-items-center
                ${toDoList.done ? "list-group-item-success" : ""}`}
                key={id}
              >
                <p className="m-0" role="button" onClick={() => handleChangeStatus(toDoList.id)}>
                  <i class="far fa-hand-point-right">&nbsp;</i>
                  {toDoList.text}
                </p>
                <button
                  type="button"
                  class="close text-danger"
                  aria-label="Close"
                  onClick={() => handleDeleteItem(toDoList.id)}
                >
                  <i class="fas fa-trash"></i>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <button className="btn btn-danger d-block ml-auto mr-auto mt-3" onClick={handleClear}>
        Удалить все задания
      </button>
    </>
  );
}

export default Todolist;

import "../css/itemcss.css";

function TodoItem({ item, i, deleteTodo, toggleCheck }) {
  return (
    <li id="todoli">
      <div id="todotextrange">
        <input
          id="todocheckbox"
          type="checkbox"
          checked={item.checked}
          onChange={() => toggleCheck(i)}
        />
        {item.text}
      </div>
      <button id="tododeletebutton" onClick={() => deleteTodo(i)}>
        삭제
      </button>
    </li>
  );
}

export default TodoItem;

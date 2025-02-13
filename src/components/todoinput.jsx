import { useState } from "react";
import TodoItem from "./todoitem";
import "../css/maincss.css";

function TodoInput() {
  const [todoInputText, setTodoInputText] = useState("");
  const [todoInputList, setTodoInputList] = useState([]);

  function handleInputText(event) {
    setTodoInputText(event.target.value);
  }

  function handleOnSubmit(event) {
    event.preventDefault();

    if (todoInputText === "") {
      alert("할일을 입력하시오");
      return;
    }

    if (todoInputList.length >= 8) {
      alert("최대 8개의 할 일을 추가할 수 있습니다.");
      return;
    }

    setTodoInputList([
      ...todoInputList,
      { text: todoInputText, checked: false },
    ]);
    setTodoInputText("");
  }

  const deleteTodo = (index) => {
    setTodoInputList(todoInputList.filter((_, i) => i !== index));
  };

  const toggleCheck = (index) => {
    setTodoInputList(
      todoInputList.map((todo, i) =>
        i === index ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  return (
    <div id="todobackground">
      <div id="todobox">
        <form onSubmit={handleOnSubmit}>
          <div id="todotitle">TODOLIST</div>
          <div id="todoin">
            <input
              type="text"
              value={todoInputText}
              onChange={handleInputText}
              id="todoinput"
              autoComplete="off"
              maxLength="11"
            />
            <button id="todobutton">추가</button>
          </div>
        </form>
        <ul>
          {todoInputList.map((item, i) => (
            <TodoItem
              key={i}
              item={item}
              i={i}
              deleteTodo={deleteTodo}
              toggleCheck={toggleCheck}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoInput;

import React, {useReducer}from 'react'

const initialValue = [
    {
      id: 1,
      title: "Task 1",
      complete: false,
    },
    {
      id: 2,
      title: "Task 2",
      complete: false,
    },
  ];
  
  const reducer = (state, action) => {
    switch (action.type) {
      case "COMPLETE":
        return state.map((todo) => {
          if (todo.id === action.id) {
            return { ...todo, complete: !todo.complete };
          } else {
            return todo;
          }
        });
      default:
        return state;
    }
  };
  

function UDetails() {
    const[task, dispatch] = useReducer(reducer, initialValue)

    const handleComplete = (todo) => {
        dispatch({ type: "COMPLETE", id: todo.id });
      };
      return (
        <>
          {task.map((todo) => (
            <div key={todo.id}>
              <label>
                <input
                  type="checkbox"
                  checked={todo.complete}
                  onChange={() => handleComplete(todo)}
                />
                {todo.title}
              </label>
            </div>
          ))}
        </>
      );
}

export default UDetails


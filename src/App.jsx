import { useState } from "react"
import "./styles.css"

export default function App() {
    const [newItem, setNewItem] = useState("")
    return (
    <>
      <form className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New item</label>
          <input value={newItem} type="text" id="item"/>
        </div>
        <button className = "btn">add</button>
      </form>
      <h1>Todo List</h1>
      <ul className="list"></ul>
        <li>
          <label>
            <input type="checkbox"/>
             Item 1
            </label>
            <button className="btn btn--danger">delete</button>
        </li>
        <li>
          <label>
            <input type="checkbox"/>
             Item 1
            </label>
            <button className="btn btn--danger">delete</button>
        </li>
    </>
  )
}


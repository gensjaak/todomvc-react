import * as React from 'react'

class TodoList extends React.Component {
  public render() {
    return (
      <section className="main">
        <input id="toggle-all" className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          <li className="completed">
            <div className="view">
              <input className="toggle" type="checkbox" defaultChecked={true} />
              <label>Taste JavaScript</label>
              <button className="destroy" />
            </div>
            <input className="edit" defaultValue="Create a TodoMVC template" />
          </li>
        </ul>
      </section>
    );
  }
}

export default TodoList

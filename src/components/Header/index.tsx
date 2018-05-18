import * as React from 'react'

class Header extends React.Component {
  public render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <input className="new-todo" placeholder="What needs to be done?" autoFocus={true} />
      </header>
    );
  }
}

export default Header

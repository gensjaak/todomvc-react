import * as React from 'react'
import './App.css'

import Footer from './components/Footer'
import Header from './components/Header'
import TodosWrapper from './components/TodosWrapper'

class App extends React.Component {
  public render() {
    return (
      <div>
        <section className="todoapp">
          {/* Header */}
          <Header />

          {/* Main */}
          <TodosWrapper />
        </section>

        {/* Application's footer */}
        <Footer />
      </div>
    );
  }
}

export default App

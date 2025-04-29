import { Outlet } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
      <main>
        <h1>Application</h1>
        <Outlet></Outlet>
      </main>
    </>
  )
}

export default App

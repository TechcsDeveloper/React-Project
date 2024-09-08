import './App.css'


function App() {
  return (
    <>
    <h1 id='header'>Todo App</h1>
    <div className="container">
      <div className="row">
        <dir className="col-md-6 offset-3">
          <input type="text" placeholder='Enter Todo Here' />
          <input type="date" />
          <button className='btn btn-success'>Add</button>
        </dir>
      </div>
    </div>
    </>
  )
}

export default App

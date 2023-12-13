import './App.css';

function App() {
  return (
    <div className="container-fluid">
      <div className='row'>
        {/*Parte izquierda*/}
        <div className='col-2 bg-dark parte-izquierda'>
          
          <div className='text-center text-white pt-3'>
            <a className="title" href="app.js">Sakila</a>
          </div>
          
          <div className='row'>
            <div className='col-12 linea-blanca'>

            </div>
          </div>

          <div>
            <ul className="list">
              <li className="element mt-5"><i class="fa-solid fa-square-poll-horizontal"></i>&nbsp;&nbsp;<a className='link' href='https://getbootstrap.com/docs/5.0/layout/grid/'>Overview</a></li>
              <li className="element mt-4"><i class="fa-solid fa-chart-line"></i>&nbsp;&nbsp;<a className='link' href='https://getbootstrap.com/docs/5.0/layout/grid/'>Growth</a></li>
              <li className="element mt-4"><i class="fa-solid fa-user"></i>&nbsp;&nbsp;<a className='link' href='https://getbootstrap.com/docs/5.0/layout/grid/'>Customers</a></li>
              <li className="element mt-4"><i class="fa-solid fa-file"></i>&nbsp;&nbsp;<a className='link' href='https://getbootstrap.com/docs/5.0/layout/grid/'>Reports</a></li>
            </ul>
          </div>

          <div className="pt-4"></div>

          <div className="pb-5">
            <ul className = "list">
              <li className="element mt-5"><i class="fa-solid fa-handshake"></i>&nbsp;&nbsp;<a className='link' href='https://getbootstrap.com/docs/5.0/layout/grid/'>Support</a></li>
              <li className="element mt-4"><i class="fa-solid fa-gear"></i>&nbsp;&nbsp;<a className='link' href='https://getbootstrap.com/docs/5.0/layout/grid/'>Settings</a></li>
            </ul>
          </div>

          <div className="pt-5 mb-5"></div>

          <div className="pt-5 mb-5 text-center">
          <i class="fa-solid fa-arrow-right-from-bracket"></i>&nbsp;&nbsp;<a className='link' href='https://getbootstrap.com/docs/5.0/layout/grid/'>Log Out</a>
          </div>

        </div>
        
        {/*Parte derecha*/}
        <div className='col-10 bg-light'>
          <h1 className=" pt-3 text-black">Dashboard</h1>
          
          <div className="col-12 mt-4 bg-dark contenedor-graficas">
              
          </div>

        </div>

      </div>
    </div>
  );
}

export default App;

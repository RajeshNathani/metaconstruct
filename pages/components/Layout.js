import Head from 'next/head'
const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
      </Head>
      <script>
        AOS.init();
      </script>
      <nav className={" navbar " + " navbar-expand-lg " + " navbar-dark"} id="navbar" style={{ height: '12vh', fontSize: 'large', backgroundColor: 'rgb(4, 4, 88)', overflowX: 'hidden' }}>
        <a class="navbar-brand" href="/"><img src="images/logo.png" style={{ height: '10vh' }} alt="" /></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <div className="container d-flex align-items-center" style={{ width: '100%', justifyContent: 'center' }}>
            <ul class="navbar-nav mr-auto d-flex justify-content-center align-items-center" style={{ width: '100%', textAlign: 'center' }}>
              <li class="nav-item ">
                <a class="nav-link" href="/"> Home </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/#chief">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/#divisons">Projects</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/events">Gallary</a>
              </li><li class="nav-item">
                <a class="nav-link" href="/team">Team</a>
              </li>

            </ul>
          </div>
          <span class="navbar-text">
            <a data-toggle="modal" data-target="#exampleModalCenter" className='btn' style={{ backgroundColor: 'white', color: 'black', padding: '15px 15px 15px 15px ' }}>Contact Us</a>
          </span>
        </div>
      </nav>


      {children}


      <footer class="page-footer font-small pt-4" style={{ backgroundColor: '#2e2f42', color: 'white' }}>

        <div class="container-fluid text-center text-md-left">

          <div class="row">

            <div class="col-md-6 mt-md-0 mt-3">

              <h5 class="text-uppercase">Footer Content</h5>
              <p>Here you can use rows and columns to organize your footer content.</p>

            </div>

            <hr class="clearfix w-100 d-md-none pb-3" />

            <div class="col-md-3 mb-md-0 mb-3">

              <h5 class="text-uppercase">Links</h5>

              <ul class="list-unstyled">
                <li>
                  <a href="#!">Link 1</a>
                </li>
                <li>
                  <a href="#!">Link 2</a>
                </li>
                <li>
                  <a href="#!">Link 3</a>
                </li>
                <li>
                  <a href="#!">Link 4</a>
                </li>
              </ul>

            </div>

            <div class="col-md-3 mb-md-0 mb-3">

              <h5 class="text-uppercase">Links</h5>

              <ul class="list-unstyled">
                <li>
                  <a href="#!">Link 1</a>
                </li>
                <li>
                  <a href="#!">Link 2</a>
                </li>
                <li>
                  <a href="#!">Link 3</a>
                </li>
                <li>
                  <a href="#!">Link 4</a>
                </li>
              </ul>

            </div>

          </div>

        </div>

        <div class="footer-copyright text-center py-3">© 2020 Copyright:
        </div>

      </footer>
    </div>
  );
}

export default Layout;

import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';

function App() {
  return (
    <div>
    <div style={{width:'575px'}}>
    <section class="bg-white">
  <div class="py-8 px-4 mx-auto max-w-screen-xl">
    <div class="grid gap-8 mb-6 md:grid-cols-2">
    <div class="d-flex align-items-center rounded-lg shadow-sm border-1">
      <div class="p-5">
        <h3 class="font-weight-bold" style={{fontSize:'35px'}}>Dr Atiya
      </h3>
        <span class="text-dark">Sonologist</span>
        <p class="mt-1 mb-1 font-weight-light text-muted">Mon to Fri</p>
        <p class="mt-1 mb-1 font-weight-light text-muted">01:00 To 01:30 PM</p>
    <ul class="d-flex justify-content-between mt-1 gap-2 px-0 mb-1" style={{listStyleType:'none'}}>
  <li>
    <button class="btn font-weight-bold py-1 rounded" style={{backgroundColor:'#986931'}}> Book Appointment </button>
  </li>
  <li>
    <Link to = "https://meet.google.com/dyi-qtmh-udg"><button class="btn font-weight-bold py-1 rounded" style={{backgroundColor:'#986931'}}> Video Consultation </button></Link>
  </li>
</ul>
<ul class="d-flex gap-1 mt-sm-4 mt-1 px-0 mb-4" style={{listStyleType:'none'}}>
  <li>
    <a href="#" class="text-gray-500 hover-text-gray-900">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="black" d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131c.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/></svg>
    </a>
  </li>
  <li>
  <a href="#" class="text-gray-500 hover-text-gray-900">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="black" d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131c.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/></svg>
    </a>
  </li>
  <li>
  <a href="#" class="text-gray-500 hover-text-gray-900">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="black" d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131c.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/></svg>
    </a>
  </li>
</ul>
      </div>
    </div>
    </div>
  </div>
</section>
    </div>
    </div>
  );
}

export default App;
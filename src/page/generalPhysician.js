import { useState } from "react";
import data from '../component/consultantData';
function Neurologist(){

    const [consultant,setconsultant] = useState(data);

    return (
        <div class="container">
        <i><h1 style={{fontSize:'35px'}}>General Physician Department</h1></i>
        {consultant?.map((consultant) => {
        if(consultant.department == 'GENERAL PHYSICIAN'){
            return (
          <div class="d-flex align-items-center rounded-lg  shadow-sm border-1" style={{height:'200px'}}>
          <div class="p-5">
            <i><p class="d-flex gap-1 mt-sm-4 mt-1 px-0 mb-1">
            {consultant.name}
            </p>
            <p class="mt-1 mb-1 font-weight-light text-muted">{consultant.day}</p>
            <p class="mt-1 mb-1 font-weight-light text-muted">{consultant.timing}</p>
            </i>
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
                    );
}})

            }
        
        </div>
    );
}

export default Neurologist;
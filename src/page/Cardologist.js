import { Link } from "react-router-dom";
import { useState } from "react";
import data from '../component/consultantData';
function Neurologist(){

    const [consultant,setconsultant] = useState(data);

    return (
        <div class="container">
        <h1 style={{fontSize:'25px'}}>Cardiologist</h1>
        {consultant?.map((consultant) => {
        if(consultant.department == 'CARDIOLOGIST'){
            return (
          <div class="d-flex align-items-center rounded-lg  shadow-sm border-1" style={{height:'200px'}}>
          <div class="p-5">
            <p class="d-flex gap-1 mt-sm-4 mt-1 px-0 mb-1">
            {consultant.name}
            </p>
            <p class="mt-1 mb-1 font-weight-light text-muted">{consultant.day}</p>
            <p class="mt-1 mb-1 font-weight-light text-muted">{consultant.timing}</p>
    <ul class="d-flex gap-1 mt-sm-4 mt-1 px-0 mb-4" style={{listStyleType:'none'}}>
      <li>
        <Link to ={consultant.sociallink} class="text-gray-500 hover-text-gray-900">
        View Details
        </Link>
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
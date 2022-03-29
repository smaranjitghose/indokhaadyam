import React from "react";
import "./topCategory.css";
import data from './TopCategoryData';


const TopCategory = () => {

    //console.log(data)
  return (
    <>
     <div className="frame" id="frame">
         <h2>
             Top Category
         </h2>

         <div className="dishes">

{
    data.map((details,index)=>{

        return(
           <div key={index} className='dish' >




               <img src={details.image} alt={details.name} />

              <div className="details">

                  <h3>
                      {
                          details.name
                      }
                  </h3>

                  <button className="click-button">
                      <a href="#frame"> Check Out</a>

                  </button>

              </div>




           </div> 
        );

    })


}


         </div>


     </div>

          </>)}

export default TopCategory; 

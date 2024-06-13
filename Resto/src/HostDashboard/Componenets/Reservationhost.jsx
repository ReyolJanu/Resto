import React from 'react'
import { MdEdit,MdDelete } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import '../Css/Reservation.css'

function Reservationhost() {
  return (
<div>
       <div class="reservation-part">

           <div class="search">
              <form>
              <label for="Reservation No">Reservation No</label>
              <input type="text" id="Reservation No" name="Reservation No" class="box"/><FaSearch/>
              </form>
           </div>

           <div className="nd">
               <div class="details">
               <table>
                 <thead>
                   <tr>
                    <th>ReservNo</th>
                    <th>Name</th>
                    <th>PhoneNo</th>
                    <th>Table</th>
                    <th>Date/time</th>
                    <th>Hours</th>
                    <th>Dishes</th>
                    <th>Bill</th>
                    <th>Status</th>
                   </tr>
                   
                 </thead>
                 <tbody>
                  <tr>
                    <td>R100100</td>
                    <td>Reyol</td>
                    <td class="number">0772345678</td>
                    <td>A-4</td>
                    <td>2024-06-04/8.00pm</td>
                    <td class="hours">2</td>
                    <td>Red Forest cake, Mixed Ice cream</td>
                    <td>2000rs</td>
                    <td class="green">Confirmed</td>
                  </tr> 
                  <tr>
                    <td>R100099</td>
                    <td>Hashini</td>
                    <td class="number">0772456783</td>
                    <td>B-2</td>
                    <td>2024-06-04/10.00am</td>
                    <td class="hours">2</td>
                    <td>Lawa cake, Chicken Kottu,Fried rice</td>
                    <td>2500rs</td>
                    <td class="green">Confirmed</td>
                  </tr>
                  <tr>
                    <td>R100098</td>
                    <td>Prakya</td>
                    <td class="number">0772346785</td>
                    <td>B-4</td>
                    <td>2024-06-05/7.00pm</td>
                    <td class="hours">1</td>
                    <td>Chicken Biriyani, Vanila Ice cream</td>
                    <td>1000rs</td>
                    <td class="red">Canceled</td>
                  </tr>
                  <tr>
                    <td>R100097</td>
                    <td>Mithu</td>
                    <td class="number">0772356784</td>
                    <td>A-1</td>
                    <td>2024-06-05/1.00pm</td>
                    <td class="hours">2</td>
                    <td>Malasala Dhosa,Vadai, Nescafe coffe </td>
                    <td>2000rs</td>
                    <td class="green">Confirmed</td>
                  </tr>
                  <tr>
                    <td>R100096</td>
                    <td>Keerthi</td>
                    <td class="number">0772345678</td>
                    <td>A-2</td>
                    <td>2024-06-04/8.00pm</td>
                    <td class="hours">1</td>
                    <td>Grilled chiken, Chiken Shawarma</td>
                    <td>2000rs</td>
                    <td class="red">Canceled</td>
                  </tr>
                  <tr>
                    <td>R100096</td>
                    <td>Joy</td>
                    <td class="number">0772345678</td>
                    <td>B-3</td>
                    <td>2024-06-04/8.00pm</td>
                    <td class="hours">2</td>
                    <td>Red Forest cake, Mixed Ice cream</td>
                    <td>2000rs</td>
                    <td class="green">Confirmed</td>
                  </tr>
                  <tr>
                    <td>R100096</td>
                    <td>Abarna</td>
                    <td class="number">0772345678</td>
                    <td>C-5</td>
                    <td>2024-06-04/8.00pm</td>
                    <td class="hours">1</td>
                    <td>Chiken Shawarma, Mixed Ice cream</td>
                    <td>2000rs</td>
                    <td class="green">Confirmed</td>
                  </tr>
                   <tr>
                    <td>R100096</td>
                    <td>Nithu</td>
                    <td class="number">0772345678</td>
                    <td>A-4</td>
                    <td>2024-06-04/8.00pm</td>
                    <td class="hours">2</td>
                    <td>Grilled chiken,Mixed Ice cream</td>
                    <td>2000rs</td>
                    <td class="red">Canceled</td>
                  </tr>
                  <tr>
                    <td>R100096</td>
                    <td>Vithu</td>
                    <td class="number">0772345678</td>
                    <td>A-4</td>
                    <td>2024-06-04/8.00pm</td>
                    <td class="hours">3</td>
                    <td>Grilled chiken,Mixed Ice cream</td>
                    <td>2000rs</td>
                    <td class="red">Canceled</td>
                  </tr>
                  <tr>
                    <td>R100096</td>
                    <td>Beulah</td>
                    <td class="number">0772345678</td>
                    <td>C-4</td>
                    <td>2024-06-02/8.00pm</td>
                    <td class="hours">2</td>
                    <td>Grilled chiken,Mixed Ice cream</td>
                    <td>2000rs</td>
                    <td class="red">Canceled</td>
                  </tr>
                 
                 </tbody>
                 </table>
           
              </div>
              <div className="icons-div">
                 <div className="icons">
                    <div className="edit"><MdEdit/></div>
                    <div className="delete"><MdDelete/></div>
                 </div>
                 <div className="icons">
                    <div className="edit"><MdEdit/></div>
                    <div className="delete"><MdDelete/></div>
                 </div>
                 <div className="icons">
                    <div className="edit"><MdEdit/></div>
                    <div className="delete"><MdDelete/></div>
                 </div>
                 <div className="icons">
                    <div className="edit"><MdEdit/></div>
                    <div className="delete"><MdDelete/></div>
                 </div>
                 <div className="icons">
                    <div className="edit"><MdEdit/></div>
                    <div className="delete"><MdDelete/></div>
                 </div>
                 <div className="icons">
                    <div className="edit"><MdEdit/></div>
                    <div className="delete"><MdDelete/></div>
                 </div>
                 <div className="icons">
                    <div className="edit"><MdEdit/></div>
                    <div className="delete"><MdDelete/></div>
                 </div>
                 <div className="icons">
                    <div className="edit"><MdEdit/></div>
                    <div className="delete"><MdDelete/></div>
                 </div>
                 <div className="icons">
                    <div className="edit"><MdEdit/></div>
                    <div className="delete"><MdDelete/></div>
                 </div>
                 <div className="icons">
                    <div className="edit"><MdEdit/></div>
                    <div className="delete"><MdDelete/></div>
                 </div>
              </div>
                 
          </div>
        </div>

           
      </div>


  )
}

export default Reservationhost

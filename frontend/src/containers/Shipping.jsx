import React from 'react'
import cart from '../assets/img/Page-1.png';

function Shipping() {
    return (
        <>
            <section class="main">
        <div class="head">
            <h3>FreshZest</h3>
            <p>Sign in</p>
            <img src={cart} alt="" />
        </div>
    </section>
  
    <section class="main3">
            <h4>-Order Your Items-</h4> 
    </section> 

    <section>
        <div class="form">
            <div class="total">
                <h3>Shipment Details</h3><br/>
                <p>Please Check Your Item and Confirm it</p>
            </div>
            <div class="order1">
                <p>Green Lemonade</p>
                <h4>1</h4>
                <h3>$16</h3>  
            </div> <br/>

            <div class="order1">
                <p>Orange Lemonade</p>
                <h4 id="Q">2</h4>
                <h3>$32</h3>  
            </div> <br/>

            <div class="order2">
                <p>Total price</p>
                <h4 id="Q1">3</h4>
                <h3>$48</h3>  
            </div> <br/>

            <label for="name">Full Name</label><br/>
                <input type="text" id="name" required placeholder="Enter Recipient's Name"/><br/>
         
            <br/><label for="number">Phone Number</label><br/>
                <input type="text" id="number" required placeholder="Enter Phone Number"/><br/>
      
            <br/><label for="address">Street address or P.O. Box</label><br/>
                <input type="text" id="address" required placeholder="Enter Street address or P.O. Box"/><br/>
            
                <br/><label for="code">PIN Code</label><br/>
                <input type="text" id="code" required placeholder="Enter PIN Code"/><br/>
            
                <br/><label for="house">Apt, suite, unit, building, floor, etc.</label><br/>
                <input type="text" id="house" required placeholder="Enter Apt, suite, unit, building, floor, etc."/><br/>

                <br/><label for="city">City</label><br/>
                <input type="text" id="city" required placeholder="Enter City"/><br/>

                <br/> <label for="state">State</label><br/>
                <input type="text" id="state" required placeholder="Enter State"/><br/>
            <button>SUBMIT</button>
               
         </div>
    </section>
        </>
    )
}

export default Shipping

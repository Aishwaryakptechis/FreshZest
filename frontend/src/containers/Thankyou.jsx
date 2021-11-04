import React from 'react'
import cart from '../assets/img/Page-1.png';

function Thankyou() {
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
            <h4>-Thank You For Your Ordering-</h4> 
    </section> 
    
    <div class="note">
        <p>Thank you for your ordering. We received your request.<br/>
            Our Staff will be contacting with you to tell next steps.</p>
            <button>
                Back to Home
            </button>
    </div>
        </>
    )
}

export default Thankyou

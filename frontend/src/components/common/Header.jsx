import React from 'react'
import cart from '../../assets/img/Page-1.png'
import main from '../../assets/img/background.png'

function Header() {
    return (
        <>
        <section class="main">
        <div class="head">
            <h3>FreshZest</h3>
            <p>Sign in</p>
           <img src={cart}/>
        </div>
        <img src={main} alt=""  id = "bimg"/>
    </section>
        </>
    )
}

export default Header

import React from 'react'
import Footer from '../components/common/Footer'
import Header from '../components/common/Header'
import plain from '../assets/img/plain.png';
import green from '../assets/img/green.png';
import orange from '../assets/img/orange.png';
import apple from '../assets/img/apple.png';

function Cart() {
    return (
        <>
        <Header />
            <section>
        <div class="one">
            <div>
                <img src={plain} />
                <a href="#" class="name">Plain Lemonade</a>
                <a href="#"class="price">$16</a>
                <button class="btn">- 1 +</button>
            </div>
            <br/>
            <div>
                <img src={green} alt=""/>
                <a href="#" class="name">Green Lemonade</a>
                <a href="#"class="price1">$16</a>
                <button class="btn">- 1 +</button>
            </div>
            <br/>
            <div>
                <img src={orange} alt=""/>
                <a href="#" class="name">Orange Lemonade</a>
                <a href="#"class="price2">$16</a>
                <button class="btn">- 1 +</button>
            </div>
            <br/>
            <div>
                <img src={apple} alt="" />
                <a href="#" class="name">Apple Lemonade</a>
                <a href="#"class="price3">$16</a>
                <button class="btn">- 1 +</button>
            </div>           
        </div>
    </section>
    <Footer />
        </>
    )
}

export default Cart

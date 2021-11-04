import React from 'react'
import plain from '../../assets/img/plain.png'
import green from '../../assets/img/green.png'
import orange from '../../assets/img/orange.png'
import apple from '../../assets/img/apple.png'

function List() {
    return (
        <>
        <section class="content">
            <ul class="items">
                <li>
                    <img src={plain} alt=""/>
                    <div class="info">
                        <div class="name">Plain Lemonade</div>
                        <div class="info-bottom">
                            <div class="price">16$</div>
                            <div class="add">- 1 +</div>
                        </div>
                    </div>
                </li>
                <li>
                    <img src={apple} alt=""/>
                    <div class="info">
                        <div class="name">Apple Lemonade</div>
                        <div class="info-bottom">
                            <div class="price">16$</div>
                            <div class="add">- 2 +</div>
                        </div>
                    </div>
                </li>
                <li>
                    <img src={green} alt=""/>
                    <div class="info">
                        <div class="name">Green Lemonade</div>
                        <div class="info-bottom">
                            <div class="price">16$</div>
                            <div class="add">- 1 +</div>
                        </div>
                    </div>
                </li>
                <li>
                    <img src={orange} alt=""/>
                    <div class="info">
                        <div class="name">Orange Lemonade</div>
                        <div class="info-bottom">
                            <div class="price">16$</div>
                            <div class="add">- 3 +</div>
                        </div>
                    </div>
                </li>
            </ul>

        </section>
    </>
    )
}

export default List

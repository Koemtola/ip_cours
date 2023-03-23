<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
    <main>
        <div class="header" >
            <div class="wrapper-left-nav">
                <img id="icon-list" src="./icons/list.png" alt="">
            </div>
            <div class="wrapper-right-nav">
                <div class="search">
                    <input id="btn-search" type="text" placeholder="Search Book">
                    <input id="btn-selech" type="text" list="selech" placeholder="Catagory">
                    <datalist id="selech" >
                        <option value="Book 1"></option>
                        <option value="Book 2"></option>
                        <option value="Book 3"></option>
                    </datalist>
                    <img id="icon-search" src="./icons/search.png" alt="">
                </div>
                <div id="catagory"></div>
            </div>
        </div>
        <div class="body">
            <div class="sub-body">
                <div class="text-top">
                    <div><p>Hi , Tola ! <span>Welcome Here!</span></p></div>
                    <div>
                        <img id="icon" src="./icons/shopping-cart.png" alt="">
                        <img id="icon" src="./icons/active.png" alt="">
                    </div>
                </div>
                <div class="promote">
                    <div class="wrapper-discount">
                        <div>
                            <div id="new-year">New year</div>
                            <div id="discount">Discount <span id="span-discount">50%</span></div>
                            <div id="free">Free</div>
                        </div>
                    </div>
                    <div class="top-item">
                        <div class="item">
                            <div class="item-left">
                                <img id="item-book4" src="./icons/book6.jpg" alt="">
                            </div>
                            <div class="item-right">
                                <div>
                                    <h4>JAVA SCRIPT</h4>
                                    <button id="btn-shop">shop now</button>
                                </div>
                            </div>
                        </div>
                        <div class="rate">

                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star no-check"></span>
                            <span class="fa fa-star no-check"></span>
                            <span id="text-rate"> 4.1 | 2.242 order</span>
                        </div>
                    </div>
                    <div class="img-item">
                        <div>
                            <img style="width: 58%;" src="./icons/book3.png" alt="">
                        </div>
                    </div>
                </div>
                <h4>More to love</h4>
                <div class="wrapper-top-book-1">
                    <div class="wrapper-book-1">
                        <div>
                            <img id="book-1" src="./icons/book5.jpg" alt="">
                        </div>
                        <div>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star no-check"></span>
                            <span class="fa fa-star no-check"></span>
                            <span id="text-rate"> 4.1 | 2.242 order</span>
                            <span><button class="btn-check"> check</button></span>
                        </div>
                    </div>
                    <div class="wrapper-book-2">
                        <div>
                            <img id="book-2" src="./icons/book1.png" alt="">
                        </div>
                        <div>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star no-check"></span>
                            <span class="fa fa-star no-check"></span>
                            <span id="text-rate"> 4.1 | 2.242 order</span>
                            <span><button class="btn-check"> check</button></span>

                        </div>
                    </div>
                    <div class="wrapper-book-3">
                        <div>
                            <img id="book-3" src="./icons/book2.png" alt="">
                        </div>
                        <div>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star no-check"></span>
                            <span class="fa fa-star no-check"></span>
                            <span id="text-rate"> 4.1 | 2.242 order</span>
                        </div>
                        <span><button class="btn-check"> check</button></span>
                    </div>
                </div>
                <div class="wrapper-top-book-2">
                    <div class="wrapper-book-1">
                        <div>
                            <img id="book-1" src="./icons/book7.jpg" alt="">
                        </div>
                        <div>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star no-check"></span>
                            <span class="fa fa-star no-check"></span>
                            <span id="text-rate"> 4.1 | 2.242 order</span>
                            <span><button class="btn-check"> check</button></span>
                        </div>
                    </div>
                    <div class="wrapper-book-1">
                        <div>
                            <img id="book-1" src="./icons/book5.jpg" alt="">
                        </div>
                        <div>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star no-check"></span>
                            <span class="fa fa-star no-check"></span>
                            <span id="text-rate"> 4.1 | 2.242 order</span>
                            <span><button class="btn-check"> check</button></span>
                        </div>
                    </div>
                    <div class="wrapper-book-1">
                        <div>
                            <img id="book-1" src="./icons/book7.jpg" alt="">
                        </div>
                        <div>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star no-check"></span>
                            <span class="fa fa-star no-check"></span>
                            <span id="text-rate"> 4.1 | 2.242 order</span>
                            <span><button class="btn-check"> check</button></span>
                        </div>
                    </div>
                    <div class="wrapper-book-1">
                        <div>
                            <img id="book-1" src="./icons/book5.jpg" alt="">
                        </div>
                        <div>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star no-check"></span>
                            <span class="fa fa-star no-check"></span>
                            <span id="text-rate"> 4.1 | 2.242 order</span>
                            <span><button class="btn-check"> check</button></span>
                        </div>
                    </div>
                    <div class="wrapper-book-1">
                        <div>
                            <img id="book-1" src="./icons/book7.jpg" alt="">
                        </div>
                        <div>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star no-check"></span>
                            <span class="fa fa-star no-check"></span>
                            <span id="text-rate"> 4.1 | 2.242 order</span>
                            <span><button class="btn-check"> check</button></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer">
            <div class="footer-social-link">
                <div><a href="#" class="fa fa-facebook footer-icon"></a></div>
                <div><a href="#" class="fa fa-twitter  footer-icon"></a></div>
                <div><a href="#" class="fa fa-google-plus  footer-icon"></a></div>
                <div><a href="#" class="fa fa-linkedin  footer-icon"></a></div>
                <div><a href="#" class="fa fa-instagram  footer-icon"></a></div>
            </div>
        </div>
    </main>
</template>
<style>
    *{
        
        padding: 0px;
        margin: 0px;
    }
    main{
        width: auto;
        height:1200px;
        background: rgb(234, 30, 30);
    }
   
    .header{
        width: auto;
        height: 6%;
        background: rgb(0, 0, 0);
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .body{
        width: auto;
        height: 84%;
        background: rgb(255, 255, 255);
        display: flex;
        justify-content:center;
        align-items: center;
    }
    .footer{
        width: auto;
        height: 10%;
        background: rgb(0, 0, 0);
    }
    .wrapper-left-nav{
        width: 30%;
        height: 100%;
        background: rgb(0, 0, 0);
        display: flex;
        justify-content: start;
        align-items: center;
    }
    .wrapper-right-nav{
        width: 70%;
        height: 100%;
        background: rgb(0, 0, 0);
        display: flex;
        justify-content: end;
        align-items: center;
    }
    input{
        font-size:18px;
        border-radius: 10px;
    }
    input:focus{
        outline: none;
        border: 2px solid blue;
    }
    #icon{
        color: wheat;
    }
    #logo{
        font-size: 80px;
        color: white;
    }
    .search{
        width: 95%;
        height: 60%;
        border: 1px solid white;
        background: black;
        border-radius: 9px;
        margin: 0px 14px 0px 0px;
        display: flex;
        justify-content: start;
        align-items: center;
    }
    #btn-search{
        width: 90%;
        height: 95%;
        background: black;
        font-size: 18px;
        color: white;
        border: none;
        padding: 0px 0px 0px 20px;
    }
    #btn-selech{
        width: 15%;
        height: 95%;
        background: rgb(0, 0, 0);
        font-size: 18px;
        color: white;
        border: none;
    }
    #icon-search{
        filter: brightness(0) invert(1);
        height: 50%;
        padding-right: 10px;
    }
    #icon-list{
        /* filter: opacity(.4) drop-shadow(0 0 0 rgb(255, 255, 255));  
         */
        filter: brightness(0) invert(1);
        height: 40%;
        padding-left: 20px;
    }
    .sub-body{
        height: 98%;
        width: 90%;
        background: rgb(255, 255, 255);
    }
    .text-top{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    p{
        color: rgb(255, 128, 0);
        font-size: 40px;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }
    span{
        color: black;
        font-size: 18px;

    }
    #icon{
        width: 40px;
        margin: 5px;
    }
    .promote{
        background: black;
        width: 100%;
        height: 200px;
        border-radius: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .wrapper-discount{
        height: 100%;
        width: 33.33%;
        background: rgb(0, 0, 0);
        border-radius: 20px 0px 0px 20px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .top-item{
        height: 100%;
        width: 33.33%;
        background: rgb(4, 255, 0);
    }
    .item{
        height: 70%;
        width: 100%;
        background: rgb(255, 136, 0);
        display: flex;
    }
    .item-right{

        height: 100%;
        width: 50%;
        background: rgb(0, 0, 0);
        text-align: center;
        color: white;
        display: flex;
        justify-content:start;
        align-items: center;
        
    }
    .item-left{
        height: 100%;
        width: 50%;
        background: rgb(0, 0, 0);
        text-align: center;
        display: flex;
        justify-content: end;
        align-items: center;
        
    }
    .rate{
        height: 30%;
        width: 100%;
        background: black;
        text-align:center;
    }
    #text-rate{
        color: white;
    }
    .checked {
        color: orange;
    }
    .no-check{
        color: white
    }
    .fa{
        padding: 2px;
    }
    .img-item{
        height: 100%;
        width: 33.33%;
        background: rgb(0, 0, 0);
        border-radius: 0px 20px 20px 0px;

    }
    #new-year, #free{
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        color: white;
        font-size: 20px;


    }
    #discount{
        color: rgb(255, 128, 0);
        font-size: 50px;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        padding: 8px 0px 8px 0px ;

    }
    #free{
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        color: white;
    }
    #span-discount{
        color: white;
        font-size: 50px;
    }
    #btn-shop{
        padding: 4px 10px 4px 10px;
        border-radius: 12px;
        background: rgb(255, 128, 0);
        color: white;
        border: none;
        font-size: 20px;
        cursor: pointer;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }
    #btn-shop:hover{
        background: rgb(172, 83, 0);
    }

    .wrapper-top-book-1{
        width: 100%;
        height: 320px;
        background: rgb(255, 255, 255);
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .wrapper-top-book-2{
        width: 100%;
        height: 300px;
        background: rgb(255, 255, 255);
        border-radius: 10px;
        margin: 20px 0px 0px 0px;
        display: flex;
        justify-content: space-between;
        align-items: center;
       
    }
    .wrapper-book-1{
        height: 320px;
        width: 19%;
        background: rgb(0, 174, 255);
        border-radius: 10px;
        text-align: center;
        box-shadow: 1px 2px 8px 2px rgb(167, 167, 167);

    }
    .wrapper-book-2{
        height: 320px;
        width: 48%;
        background: rgb(0, 174, 255);
        border-radius: 10px;
        text-align: center;
        box-shadow: 1px 2px 8px 2px rgb(167, 167, 167);
    }
    .wrapper-book-3{
        height: 320px;
        width: 30%;
        background: rgb(0, 174, 255);
        border-radius: 10px;
        text-align: center;
        box-shadow: 1px 2px 8px 2px rgb(167, 167, 167);
    }
    .wrapper-book-1:hover{
        background: rgb(0, 140, 255);
    }
    .wrapper-book-2:hover{
        background: rgb(0, 140, 255);
    }
    .wrapper-book-3:hover{
        background: rgb(0, 140, 255);
    }
    #book-1{
        width: 40%;
        margin-top: 40px;
    }
    #book-2{
        width: 60%;
    }
    #book-3{
        margin-top: 40px;
        width: 70%;
    }
    #item-book4{
        width: 35%;
        text-align: center;
        margin:  20px 20px 0px 0px;
    }
    .btn-check{
        color: white;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        background: rgb(255, 128, 0);
        padding: 5px;
        border-radius: 5px;
        border: none;
        margin: 0px 10px 0px 10px;
    }
    .btn-check:hover{
        background: rgb(157, 78, 0);
    }


    #discount {
        color: rgb(255, 128, 0);
        font-weight: bold;
        letter-spacing: 7px;
        cursor: pointer;
        text-transform: uppercase;
    }

    #discount {
        background: linear-gradient(to right, rgb(255, 156, 56) 0, hsl(32, 76%, 95%) 10%, hsl(30, 100%, 50%) 20%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: shine 3s infinite linear;
    }

    @keyframes shine {
        0% {
            background-position: 0;
        }
        60% {
            background-position: 600px;
        }
        100% {
            background-position: 600px;
        }
    }
    p{
        position: relative;
        color: rgb(255, 128, 0);
        letter-spacing: 7px;
        overflow: hidden;
        border-right: 1px solid rgb(255, 128, 0);
        white-space: nowrap;
        animation: typewriter 8s steps(44) 4s infinite normal both,
            blinkTextCursor 500ms infinite;
    }

    @keyframes typewriter {
        from {
            width: 0;
        }
        to {
            width: 510px;
        }
        }
        @keyframes blinkTextCursor {
        from {
            border-right-color: hsl(0, 0%, 80%);
        }
        to {
            border-right-color: transparent;
        }
    }
    .footer{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .footer-social-link{
        display: flex;
        justify-content: center;
        align-items: center;
        
    }
    .footer-icon{
        margin: 10px;
        font-size: 40px;
        /* border: 1px solid white;
        width: 50px;
        height: 50px; */
    }
    .footer-icon,h4{
        position: relative;
        color: rgb(255, 128, 0);
        letter-spacing: 7px;
        overflow: hidden;
        border-right: 3px solid rgb(255, 128, 0);
        white-space: nowrap;
        animation: typewriters 20s steps(44) 20s infinite normal both,
            blinkTextCursors 500ms infinite;
    }

    @keyframes typewriters {
        from {
            width: 30px;
        }
        to {
            width: 100px;
        }
        }
        @keyframes blinkTextCursors {
        from {
            border-right-color: rgb(255, 128, 0);
        }
        to {
            border-right-color: transparent;
        }
    }
</style>
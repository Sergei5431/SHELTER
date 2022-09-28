// console.log('sss')
// const paginationWraper = document.querySelector(".switch1");
// const ourFriendsContent = document.querySelector(".cards");
// const paginationCurrentPage = document.querySelector(".toggle-static");
// const paginationBtns = document.querySelectorAll(".pagination__btn");
// const paginationBtnEnd = document.querySelector(".btn_end");
// const paginationBtnNext = document.querySelector(".btn_next");
// const paginationBtnPrev = document.querySelector(".btn_prev");
// const paginationBtnBegin = document.querySelector(".btn_begin");

// let cloneArrPets = [...array];
// console.log(cloneArrPets)

const btn_end_end = document.querySelector('.end_end') 
const btn_end = document.querySelector('.end') 
const btn_static = document.querySelector('.toggle-static') 
const btn_go = document.querySelector('.go') 
const btn_go_go = document.querySelector('.go_go') 
let randomArray = []

// let start = 0 
// let whatCard = 8
let btnStaticNumber=+document.querySelector('.a').innerHTML


btn_end.setAttribute('disabled',true)
// btn_end_end.setAttribute('disabled',true)

if(1279<window.innerWidth){
    let start = 0 
let whatCard = 8
   
    function createCard(num){
        let card = document.createElement('div');
        card.classList.add('ccard-katrine')
        // card.setAttribute('data-pets', num)
        card.insertAdjacentHTML("afterbegin",
        `
        <div class="card-katrine" data-pets = ${num}>
        <img src='${array[num].img}' data-pets = ${num}>
        <p class="text-katrine" data-pets = ${num}>${array[num].name}</p>
        <button class="button-learn-more" data-pets = ${num}>Learn more</button>
        </div>
        `)
    document.querySelector('.cards').appendChild(card)
        return card
    }
    
    function randomNum(min, max) {
        // случайное число от min до (max+1)
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    };
    
    function createRandomArray(){
        for(let i=0; i<48; i++){
        // if(randomArray.includes(randomNum(0, 7))){
        //     return createRandomArray()
        // }else{
        //     randomArray.push(randomNum(0, 7))
        // }
        randomArray.push(randomNum(0, 7))
        }
    }
    createRandomArray()
    
    
    function createCardS(){
        // console.log(randomArray)
        randomArray.slice(start, whatCard).forEach(e => {
            createCard(e) 
        });
    }
    createCardS()
    
    
    function createCardgo(num){
        let card = document.createElement('div');
        card.classList.add('ccard-katrine')
        card.setAttribute('data-pets', num)
        card.insertAdjacentHTML("afterbegin",
        `
        <div class="card-katrine" data-pets = ${num}>
        <img src='${array[num].img}' data-pets = ${num}>
        <p class="text-katrine" data-pets = ${num}>${array[num].name}</p>
        <button class="button-learn-more" data-pets = ${num}>Learn more</button>
        </div>
        `)
    
    document.querySelector('.cards').append(card)
        return card
    }
    
    // function createCardSgo(){
    //     // console.log(randomArray)
    //     eightCards.forEach(e => {
    //         createCardgo(e) 
    //     });
    // }
    // createCardS()
    
    btn_go.addEventListener('click', e=>{
        if (whatCard>=48){
            btn_go.setAttribute('disabled', true)
        }else{
            btn_end.removeAttribute('disabled');
        }
    
        start+=8
        whatCard+=8
        let eightCards = randomArray.slice(start, whatCard)
        console.log(eightCards)
        document.querySelectorAll('.ccard-katrine').forEach(e=>{e.remove() })
        eightCards.forEach(e => {
            createCardgo(e) 
        });
        console.log(start)
        console.log(whatCard)
        // let btnStaticNumber=+document.querySelector('.a').innerHTML
        document.querySelector('.a').innerHTML=+document.querySelector('.a').innerHTML+1
        btnStaticNumber = +btnStaticNumber +1
        console.log(btnStaticNumber)
            if (whatCard>=48){
            btn_go.setAttribute('disabled', true)
         }else{
            btn_end.removeAttribute('disabled');
         }
    })
    
    btn_end.addEventListener('click', e=>{
        start-=8
        whatCard-=8
        let eightCards = randomArray.slice(start, whatCard)
        console.log(eightCards)
        document.querySelectorAll('.ccard-katrine').forEach(e=>{e.remove() })
        eightCards.forEach(e => {
            createCardgo(e) 
        });
        console.log(start)
        console.log(whatCard)
        document.querySelector('.a').innerHTML=+document.querySelector('.a').innerHTML -1
        console.log(document.querySelector('.a').innerHTML)
        btnStaticNumber = +btnStaticNumber -1
        console.log(btnStaticNumber)
        
        if (whatCard===8){
            btn_end.setAttribute('disabled', true)
         }else {
            btn_go.removeAttribute('disabled');
        }
    })
    console.log(typeof(+document.querySelector('.a').innerHTML))
    
    btn_go_go.addEventListener('click', e=>{
        eightCards1 = randomArray.slice(randomArray.length-8, randomArray.length)
        // console.log(randomArray.slice(randomArray.length-8, randomArray.length))
        document.querySelectorAll('.ccard-katrine').forEach(e=>{e.remove()})
        eightCards1.forEach(e => {
        createCardgo(e) 
        });
     })
    
    btn_end_end.addEventListener('click', e=>{
        eightCards1 = randomArray.slice(0, 8)
        console.log(randomArray.slice(randomArray.length-8, randomArray.length))
        document.querySelectorAll('.ccard-katrine').forEach(e=>{e.remove()})
            eightCards1.forEach(e => {
            createCardgo(e) 
        });
    })
}

// ======================================================================


if(window.innerWidth<1279){
    let start = 0 
    let whatCard = 6
   
    function createCard(num){
        let card = document.createElement('div');
        card.classList.add('ccard-katrine')
        card.insertAdjacentHTML("afterbegin",
        `
        <div class="card-katrine" data-pets = ${num}>
        <img src='${array[num].img}' data-pets = ${num}>
        <p class="text-katrine" data-pets = ${num}>${array[num].name}</p>
        <button class="button-learn-more" data-pets = ${num}>Learn more</button>
        </div>
        `)
    document.querySelector('.cards').appendChild(card)
        return card
    }
    
    function randomNum(min, max) {
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    };
    
    function createRandomArray(){
        for(let i=0; i<48; i++){
        randomArray.push(randomNum(0, 7))
        }
    }
    createRandomArray()
    
    
    function createCardS(){
        
        randomArray.slice(start, whatCard).forEach(e => {
            createCard(e) 
        });
    }
    createCardS()
    
    
    function createCardgo(num){
        let card = document.createElement('div');
        card.classList.add('ccard-katrine')
        card.setAttribute('data-pets', num)
        card.insertAdjacentHTML("afterbegin",
        `
        <div class="card-katrine" data-pets = ${num}>
        <img src='${array[num].img}' data-pets = ${num}>
        <p class="text-katrine" data-pets = ${num}>${array[num].name}</p>
        <button class="button-learn-more" data-pets = ${num}>Learn more</button>
        </div>
        `)
    
    document.querySelector('.cards').append(card)
        return card
    }
    
    
    
    btn_go.addEventListener('click', e=>{
        if (whatCard>=48){
            btn_go.setAttribute('disabled', true)
        }else{
            btn_end.removeAttribute('disabled');
        }
    
        start+=6
        whatCard+=6
        let eightCards = randomArray.slice(start, whatCard)
        console.log(eightCards)
        document.querySelectorAll('.ccard-katrine').forEach(e=>{e.remove() })
        eightCards.forEach(e => {
            createCardgo(e) 
        });
        console.log(start)
        console.log(whatCard)
        
        document.querySelector('.a').innerHTML=+document.querySelector('.a').innerHTML+1
        btnStaticNumber = +btnStaticNumber +1
        console.log(btnStaticNumber)
            if (whatCard>=48){
            btn_go.setAttribute('disabled', true)
         }else{
            btn_end.removeAttribute('disabled');
         }
    })
    
    btn_end.addEventListener('click', e=>{
        start-=6
        whatCard-=6
        let eightCards = randomArray.slice(start, whatCard)
        console.log(eightCards)
        document.querySelectorAll('.ccard-katrine').forEach(e=>{e.remove() })
        eightCards.forEach(e => {
            createCardgo(e) 
        });
        console.log(start)
        console.log(whatCard)
        document.querySelector('.a').innerHTML=+document.querySelector('.a').innerHTML -1
        console.log(document.querySelector('.a').innerHTML)
        btnStaticNumber = +btnStaticNumber -1
        console.log(btnStaticNumber)
        
        if (whatCard===6){
            btn_end.setAttribute('disabled', true)
         }else {
            btn_go.removeAttribute('disabled');
            }
    })
    console.log(typeof(+document.querySelector('.a').innerHTML))
    
    btn_go_go.addEventListener('click', e=>{
        eightCards1 = randomArray.slice(randomArray.length-6, randomArray.length)
        
        document.querySelectorAll('.ccard-katrine').forEach(e=>{e.remove()})
        
        eightCards1.forEach(e => {
            createCardgo(e) 
        });
     })
    
    btn_end_end.addEventListener('click', e=>{
        eightCards1 = randomArray.slice(0, 6)
        
        document.querySelectorAll('.ccard-katrine').forEach(e=>{e.remove()})
            eightCards1.forEach(e => {
            createCardgo(e) 
        });
    })
}

// ===============================================================

if(window.innerWidth<768){

    document.querySelectorAll('.ccard-katrine').forEach(e=>{e.remove() })

    console.log(window.innerWidth)
    let start = 0 
    let whatCard = 3
   
    function createCard(num){
        let card = document.createElement('div');
        card.classList.add('ccard-katrine')
        // card.setAttribute('data-pets', num)
        card.insertAdjacentHTML("afterbegin",
        `
        <div class="card-katrine" data-pets = ${num}>
        <img src='${array[num].img}' data-pets = ${num}>
        <p class="text-katrine" data-pets = ${num}>${array[num].name}</p>
        <button class="button-learn-more" data-pets = ${num}>Learn more</button>
        </div>
        `)
    document.querySelector('.cards').appendChild(card)
        return card
    }
    
    function randomNum(min, max) {
        // случайное число от min до (max+1)
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    };
    
    function createRandomArray(){
        for(let i=0; i<48; i++){
        // if(randomArray.includes(randomNum(0, 7))){
        //     return createRandomArray()
        // }else{
        //     randomArray.push(randomNum(0, 7))
        // }
        randomArray.push(randomNum(0, 7))
        }
    }
    createRandomArray()
    
    
    function createCardS(){
        console.log(randomArray.slice(start, whatCard))
        randomArray.slice(start, whatCard).forEach(e => {
            createCard(e) 
        });
    }
    createCardS()
    
    
    function createCardgo(num){
        let card = document.createElement('div');
        card.classList.add('ccard-katrine')
        card.setAttribute('data-pets', num)
        card.insertAdjacentHTML("afterbegin",
        `
        <div class="card-katrine" data-pets = ${num}>
        <img src='${array[num].img}' data-pets = ${num}>
        <p class="text-katrine" data-pets = ${num}>${array[num].name}</p>
        <button class="button-learn-more" data-pets = ${num}>Learn more</button>
        </div>
        `)
    
    document.querySelector('.cards').append(card)
        return card
    }
    
    // function createCardSgo(){
    //     // console.log(randomArray)
    //     eightCards.forEach(e => {
    //         createCardgo(e) 
    //     });
    // }
    // createCardS()
    
    btn_go.addEventListener('click', e=>{
        if (whatCard>=48){
            btn_go.setAttribute('disabled', true)
        }else{
            btn_end.removeAttribute('disabled');
        }
    
        start+=3
        whatCard+=3
        let eightCards3 = randomArray.slice(start, whatCard)
        console.log(eightCards3)
        document.querySelectorAll('.ccard-katrine').forEach(e=>{e.remove() })
        eightCards3.forEach(e => {
            createCardgo(e) 
        });
        console.log(start)
        console.log(whatCard)
        // let btnStaticNumber=+document.querySelector('.a').innerHTML
        document.querySelector('.a').innerHTML=+document.querySelector('.a').innerHTML+1
        btnStaticNumber = +btnStaticNumber +1
        console.log(btnStaticNumber)
            if (whatCard>=48){
            btn_go.setAttribute('disabled', true)
         }else{
            btn_end.removeAttribute('disabled');
         }
    })
    
    btn_end.addEventListener('click', e=>{
        start-=3
        whatCard-=3
        let eightCards = randomArray.slice(start, whatCard)
        console.log(eightCards)
        document.querySelectorAll('.ccard-katrine').forEach(e=>{e.remove() })
        eightCards.forEach(e => {
            createCardgo(e) 
        });
        console.log(start)
        console.log(whatCard)
        document.querySelector('.a').innerHTML=+document.querySelector('.a').innerHTML -1
        console.log(document.querySelector('.a').innerHTML)
        btnStaticNumber = +btnStaticNumber -1
        console.log(btnStaticNumber)
        
        if (whatCard===3){
            btn_end.setAttribute('disabled', true)
         }else {
            btn_go.removeAttribute('disabled');
            }
    })
    console.log(typeof(+document.querySelector('.a').innerHTML))
    
    btn_go_go.addEventListener('click', e=>{
        eightCards1 = randomArray.slice(randomArray.length-3, randomArray.length)
        console.log(randomArray.slice(randomArray.length-8, randomArray.length))
    
        document.querySelectorAll('.ccard-katrine').forEach(e=>{e.remove()})
        
        eightCards1.forEach(e => {
            createCardgo(e) 
        });
     })
    
    btn_end_end.addEventListener('click', e=>{
        eightCards1 = randomArray.slice(0, 3)
        console.log(randomArray.slice(randomArray.length-8, randomArray.length))
        document.querySelectorAll('.ccard-katrine').forEach(e=>{e.remove()})
            eightCards1.forEach(e => {
            createCardgo(e) 
        });
    })
}
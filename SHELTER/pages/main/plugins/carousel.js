// let offset = 0
// const sliderLine = document.querySelector('.slider-line')
// const screenWidth = window.screen.width

// document.querySelector('.pointer-right').addEventListener('click', (e=>{
//     if(screenWidth>1200){

//     }
//     offset+=1080
//     if(offset>2880){
//         offset = 0
//     }
//     sliderLine.style.left = -offset+'px'
// }))

// console.log(screenWidth)


// document.querySelector('.pointer-left').addEventListener('click', (e=>{
//     if(screenWidth>1200){
        
//     }
//     offset-=1080
//     if(offset<0){
//         offset = 2160
//     }
//     sliderLine.style.left = -offset+'px'
// }))
// -------------------------------------------------------------
const slider = document.querySelector('.slider')
let offset = 0

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
document.querySelector('.slider-line').appendChild(card)
    return card
}
// ---------------------

function createCardri(num){
    let card = document.createElement('div');
    card.classList.add('ccard-katrine')
   
    
    card.insertAdjacentHTML("afterbegin",
    `
    <div class="card-katrine data-pets = ${num}">
    <img src='${array[num].img}' data-pets = ${num}>
    <p class="text-katrine" data-pets = ${num}>${array[num].name}</p>
    <button class="button-learn-more" data-pets = ${num}>Learn more</button>
    </div>
    `)
   
document.querySelector('.slider-line').append(card)

    return card
}
// console.log(card)
// let random3number =[]

function oneArray(){
let random3number =[]

function randomNumber (min, max){
    let rand1 = Math.floor(min + Math.random() * (max + 1 - min));
        random3number.push(rand1)
}
randomNumber(0, 7)

function randomNumber2 (min, max){
    let rand2 = Math.floor(min + Math.random() * (max + 1 - min));
    if(random3number[0] !== rand2){
        random3number.push(rand2)
    }else if( random3number[0] === rand2){
        return randomNumber2(0, 7)
    }
}
randomNumber2(0, 7)

function randomNumber3 (min, max){
    let rand3 = Math.floor(min + Math.random() * (max + 1 - min));
    if((random3number[0]  !== rand3) && (random3number[1] !==rand3)){
        random3number.push(rand3)
    }else if( (random3number[0]  === rand3) || (random3number[1] ===rand3)){
        return randomNumber3(0, 7)
    }
}
randomNumber3(0, 7)

// function createCardS(){
//    random3number.forEach((e)=> createCard(e))
// }
// createCardS()
console.log(random3number)
return random3number
}
oneArray()

function createCardS(){
    oneArray().forEach((e)=> createCard(e))
    }
    createCardS()


// ------------------
// function twoArray(){
// let random3number =[]

// function randomNumber (min, max){
//     let rand1 = Math.floor(min + Math.random() * (max + 1 - min));
//         random3number.push(rand1)
// }
// randomNumber(0, 7)

// function randomNumber2 (min, max){
//     let rand2 = Math.floor(min + Math.random() * (max + 1 - min));
//     if(random3number[0] !== rand2){
//         random3number.push(rand2)
//     }else if( random3number[0] === rand2){
//         return randomNumber2(0, 7)
//     }
// }
// randomNumber2(0, 7)

// function randomNumber3 (min, max){
//     let rand3 = Math.floor(min + Math.random() * (max + 1 - min));
//     if((random3number[0]  !== rand3) && (random3number[1] !==rand3)){
//         random3number.push(rand3)
//     }else if( (random3number[0]  === rand3) || (random3number[1] ===rand3)){
//         return randomNumber3(0, 7)
//     }
// }
// randomNumber3(0, 7)

// function createCardS(){
//    random3number.forEach((e)=> createCard(e))
// }
// createCardS()
// console.log(random3number)
// }
// twoArray()

function twoArray(){
    return oneArray()
}
twoArray()

// console.log(oneArray())
// console.log(twoArray())

let divs = document.querySelectorAll(".card-katrine") 
console.log(divs)

document.querySelector('.pointer-left').addEventListener('click', e=>{
    // console.log('ddd')
       function createCardS(){
        twoArray().forEach((e)=> createCard(e))
        }
        createCardS()
        offset+=1080
    // if(offset>2880){
    //     offset = 0
    // }
        document.querySelector('.slider-line').style.left = -offset+"px"
})


document.querySelector('.pointer-right').addEventListener('click', e=>{
    // console.log('ddd')
  
    function createCardS(){
        // document.querySelector('.slider-line').appendChild(card)
        twoArray().forEach((e)=> createCardri(e))
        }
        createCardS()
        // createCardS()
        offset-=1080
            if(offset<0){
                offset = 1080
            }
            document.querySelector('.slider-line').style.left = -offset+'px'
})


// -----------------------------------------------------------
// const screenWidth = window.innerWidth
// console.log(screenWidth)
// function screen(){
//     if(screenWidth>1280){
//         slider.style.width = '990px'
//     }else if(screenWidth>=768){
//         slider.style.width = '580px'
//     }else if(screenWidth<768){
//         slider.style.width = '270px'
//     }
// }
// screen()
// console.log(slider)


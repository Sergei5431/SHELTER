
const ourFriends = document.querySelector('.our_friends-img')

// console.log(array[1].img)

function _createModal(pets=2){
    const modal = document.createElement('div');
    modal.classList.add('modal')
    modal.insertAdjacentHTML("afterbegin", 
    `<div class="modal__overlay" data-close='true'>
    <div class="modal__wrapper" data-close='true'>
        <div class="modal__close__wrapper" data-close='true'>
            <div class="modal__close" data-close='true'><span class="modal__close__text" data-close='true'>&times;</span></div>
        </div>
        <div class="modal__window">
   
            <div class="modal__img"><img class="modal__img__size " id='img' src="${array[pets].img}"
                    alt="jennifer"></div>
            <div class="modal__specification">
                <div class="m__name"> <span class="m__name__text" id='name'>${array[pets].name}</span></div>
                <div class="m__nameLast">
                    <div class="m__type"><span class="m__nameLast__text" id='type'>${array[pets].type}</span></div>
                    <div class="m__-"><span class="m__nameLast__text">&nbsp;-&nbsp;</span></div>
                    <div class="m__bread"><span class="m__nameLast__text" id='breed'>${array[pets].breed}</span></div>
                </div>
                <div class="m__description"><span class="m__discription__text" id='description'>${array[pets].description}</span></div>
                <div class="m__table">
                    <ul>
                        <li> <span class="m__table__p">Age:&nbsp;</span><span class="m__table__text" id='age'>${array[pets].age}
                                </span> </li>
                        <li> <span class="m__table__p">Inoculations:&nbsp;</span><span
                                class="m__table__text" id='inoculations'>${array[pets].inoculations}</span> </li>
                        <li> <span class="m__table__p">Diseases:&nbsp;</span><span
                                class="m__table__text" id='diseases'>${array[pets].diseases}</span> </li>
                        <li> <span class="m__table__p">Parasites:&nbsp;</span><span
                                class="m__table__text" id='parasites'>${array[pets].parasites}</span> </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
    `)
    document.body.appendChild(modal)
    return modal
}

_createModal(1)

const modal__overlay = document.querySelector('.modal__overlay')

const modal = {
    
    open(){
       modal__overlay.classList.add('open')
       html.style.overflow = 'hidden';
    },

    close() {
        modal__overlay.classList.remove('open')
        html.style.overflow = 'visible';
        modal__overlay.classList.add('hide')
            setTimeout(()=>{
            document.querySelector('.modal__overlay').classList.remove('hide')
        }, 1000)
    }

}

const listenerClose = e =>{
    if (e.target.dataset.close){
        modal.close()
    }
}


modal__overlay.addEventListener('click', listenerClose)

const listenerOpen = e =>{
    const namePets = e.target.dataset.pets;
    if(e.target.dataset.pets){
        // console.log(e.target.dataset.pets)
        modal.open()
        let fullness =array[e.target.dataset.pets]
        document.getElementById('img').src=fullness.img
        document.getElementById('name').innerHTML=fullness.name
        document.getElementById('type').innerHTML=fullness.type
        document.getElementById('breed').innerHTML=fullness.breed
        document.getElementById('description').innerHTML=fullness.description
        document.getElementById('age').innerHTML=fullness.age
        document.getElementById('inoculations').innerHTML=fullness.inoculations
        document.getElementById('diseases').innerHTML=fullness.diseases
        document.getElementById('parasites').innerHTML=fullness.parasites
    }
    
}

// ourFriends.addEventListener('click', listenerOpen)
document.querySelector(".cards").addEventListener('click', listenerOpen)
// document.querySelector(".slider-line").addEventListener('click', e=>{
//     console.log(e.target.dataset.pets)
// })

// console.log(document.querySelector(".slider-line"))






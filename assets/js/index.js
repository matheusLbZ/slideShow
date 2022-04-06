const l = e => document.querySelector(e);
const c = e => document.querySelectorAll(e);
let slideItem = 0;
const qt = (images.length-1);

window.onload = ()=> {
    setInterval(moveSlide, 2000);
    setInterval(setActive, 2000);
    setInterval(controller, 2000);
}

images.forEach((item, index)=> {
    const slide = l('.slide').cloneNode(true);
    const controlls = l('.controlls').cloneNode(true);

    slide.style.backgroundImage = `url(${item.image})`;

    controlls.addEventListener('click', ()=> {
        slideItem = (index-1);
    })

    l('.slide-area').appendChild(slide);
    l('.controlls-area').appendChild(controlls);
})

function moveSlide() {
    const slideWidth = l('.slideShow').offsetWidth;

    if(slideItem >= qt || slideItem < 0){
        slideItem = 0;
    } else {
        slideItem++;
    }

    c('.slide-area')[0].style.marginLeft = `-${slideWidth * slideItem}px`;
}

function setActive() {
    c('.controlls').forEach(item=> {
        item.classList.remove('active');
    });
    c('.controlls')[slideItem+1].classList.add('active');
}

function controller() {
    l('#left').classList.toggle('new-display', slideItem == 0);
    l('#right').classList.toggle('new-display', slideItem == qt);
}

l('#left').addEventListener('click', ()=> {
    slideItem-=2;
});

l('#right').addEventListener('click', ()=> {
    slideItem**slideItem;
})

let allCardsInnerHtml = "";

let card = 210;

for (let i = 0; i < card; i++) {   
    
    allCardsInnerHtml += '<div class="box"></div>';

}

document.querySelector('.card-container').innerHTML = allCardsInnerHtml;

let tl = gsap.timeline();

tl.from(".box", {
    y: 100,
    duration: 0.7,
    opacity: 0,
    stagger:{
        grid:[10,21],
        from:"random", /*  */
        amount:0.2
    }
})

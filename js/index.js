const  modal = document.querySelector(".peperonni-modal");
const btn = document.querySelector(".mybtn");
const peperspanC = document.querySelector(".peperonni-modal .close");
console.log(modal);

btn.addEventListener("click", onClick);
btn.addEventListener("click", onClickTwo);
 function onClick() {
    modal.style.display = "block";
}
 function onClickTwo() {
    modal.style.display = "none";
}

//  modal = [
//     {
//         title:"Peperonni",
//         ingredients: '1 elkristalsuiker <br> 7g droge gist <br> 300 ml warm water <br> 500 g tarwebloem' ,
//         steps: 'ghfhgfhgf'
//     }, 
//     {   
//         title:"Salami", 
//         ingredients: '',
//         steps: 'ghfhgfhgf',
//     },
//     {   
//         title:"Salami", 
//         ingredients: '',
//         steps: 'ghfhgfhgf',
//     },
//     {   
//         title:"Salami", 
//         ingredients: '',
//         steps: 'ghfhgfhgf',
//     },
//     {   
//         title:"Salami", 
//         ingredients: '',
//         steps: 'ghfhgfhgf',
//     },
//     {   
//         title:"Salami", 
//         ingredients: '',
//         steps: 'ghfhgfhgf',
//     },

// ];

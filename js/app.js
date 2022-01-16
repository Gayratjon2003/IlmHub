// const btnShow = document.querySelector('.btn-show');

// btnShow.addEventListener('click', (e)=> {
//     btnShow.style.transform = 'rotate(90deg)';
//     console.log(e.target.style.transform);
//     if(e.target.style.transform == 'rotate(90deg)' ) {
//         btnShow.addEventListener('click', ()=> {
//             btnShow.style.transform = 'rotate(0deg)'
//         });
//     }
//     // console.log(e.target.style.transform);
//     // e.target;
//     // console.log(e.target);
// });

document.querySelector('.teg-ul').addEventListener('click', (e)=> {
    if(e.target.closest('.btn-show')) { 
            e.target.style.transform = 'rotate(90deg)';
            e.target.nextElementSibling.style.display = 'block';
            console.log(e.target.nextElementSibling);
    }
});
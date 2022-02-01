const menuright = document.querySelector('.menuright');
const menu = document.querySelector('.menu-navegacion');

// console.log(menu)
// console.log(menuright)

menuright.addEventListener('click', ()=>{
    menu.classList.toggle('spread')

})

window.addEventListener('click', e =>{
    if (menu.classList.contains('spread') && e.target != menu && e.target != menuright){
            menu.classList.toggle('spread')

        }

})
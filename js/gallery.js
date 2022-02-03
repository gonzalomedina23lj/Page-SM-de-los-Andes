let images = document.querySelectorAll('.img')
const containerImage = document.querySelector('.container-img')
const imageContainer = document.querySelector('.img-show')
const closeX = document.querySelector('.close')

images.forEach(image =>{
    image.addEventListener('click', ()=>{
        addImage(image.getAttribute('src'));
        images.classList.toggle('img:hover')
        
    })
})

const addImage = (srcImage) =>{
    containerImage.classList.toggle('move');
    imageContainer.classList.toggle('show');
    imageContainer.src = srcImage;

} 

closeX.addEventListener('click', ()=>{
    containerImage.classList.toggle('move');
    imageContainer.classList.toggle('show');
})

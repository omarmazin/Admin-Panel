const toggleButton = document.getElementById('close-btn');
const menuButton = document.querySelector('.menu-button');
const sidebar = document.querySelector("aside");

toggleButton.addEventListener('click', () => {
  sidebar.classList.toggle('close');
});
menuButton.addEventListener('click',()=>{
    sidebar.classList.toggle('open')
})

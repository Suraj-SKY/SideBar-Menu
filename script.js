const bars = document.querySelector('.fa-bars');
const sidebar = document.querySelector('.sidebar');
const closeBar = document.querySelector('.fa-xmark');

bars.addEventListener('click', () => {
    sidebar.classList.toggle('show-sidebar');
});

closeBar.addEventListener('click', () => {
    sidebar.classList.toggle('show-sidebar');
});
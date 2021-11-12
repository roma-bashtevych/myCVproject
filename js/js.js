const aboutTitle = document.querySelector('#about__title');
const aboutText = document.querySelector('.about__text');
const projectsTitle = document.querySelector('#projects__title');
const projectsList = document.querySelector('.projects__list');
const asideTitle = document.querySelector('#aside__title-contacts');
const asideList = document.querySelector('#aside__list');
const asideTitleTech = document.querySelector('#aside__title-tech');
const asideListTech = document.querySelector('#aside__list-tech');
const asideTitleSoft = document.querySelector('#aside__title-soft');
const asideListSoft = document.querySelector('#aside__list-soft');
const board = document.querySelector('#board');
const colors = ['#03fc8c', '#8cfc03', '#fc9403', '#63b4ff', '#ff3de2', '#ff002f', '#366139']
const SQUARES_NUMBER = 510;

aboutTitle.addEventListener('click', () => {
   aboutText.classList.toggle('about__text-active')
});

projectsTitle.addEventListener('click', () => {
   projectsList.classList.toggle('projects__list-reverse')
});

asideTitle.addEventListener('click', () => {
asideList.classList.toggle('aside__list-none');
});

asideTitleTech.addEventListener('click', () => {
   asideListTech.classList.toggle('aside__list-none');
})

asideTitleSoft.addEventListener('click', () => {
   asideListSoft.classList.toggle('aside__list-none');
})

for (let i = 0; i < SQUARES_NUMBER; i++) {
   const square = document.createElement('div');
   square.classList.add('square');

   square.addEventListener('mouseover', () => {
      setColor(square)
   })

   square.addEventListener('mouseleave', () => {
      removeColor(square)
   })

   board.append(square);
}

function setColor(element) {
   const color = getRandomColor()
   element.style.backgroundColor = color
   element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
   element.style.backgroundColor = '#1d1d1d';
   element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
   const index = Math.floor(Math.random() * colors.length)
   return colors[index]
}

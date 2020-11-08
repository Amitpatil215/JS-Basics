// console.log(document.getElementById('#idone'));

// const myElement = document.querySelector('.classone')
// console.log(myElement);

// const myPElement=document.querySelector('p')
// myPElement.textContent='I am being changed using JS'

const myPElement = document.querySelectorAll('p')

myPElement.forEach((p) =>
    p.textContent = 'I am changed using JS loop'
)

///Creating an elemnet in HTML
const myNewPara = document.createElement('p')
myNewPara.textContent = 'I was added via JS'
document.querySelector('body').appendChild(myNewPara)

///Event listeners
document.querySelector('button').addEventListener('click', (event) => {
    event.target.textContent = 'I was clicked'

})
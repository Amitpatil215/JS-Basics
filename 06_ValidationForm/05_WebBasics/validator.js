//alert('connected')

function myValidation() {
    let myValue = document.getElementById('myform').value;

    let myPara = document.querySelector('#idone')

    if (isNaN(myValue) || myValue < 1 || myValue > 20) {

        myPara.textContent = 'Not a vlaid input'

    } else {

        myPara.textContent = 'User verified'
    }

}


//Advance form
document.querySelector('.advform').addEventListener('submit', (event) => {
    //initially  our user & real name appear in url
    // this is default behaviour so removing it
    event.preventDefault();

    console.log(event.target.username.value);
    console.log(event.target.realname.value);

    //clear input field
    event.target.username.value = ''
    event.target.realname.value = ''
})
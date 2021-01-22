document.querySelector('.details-button')
.addEventListener('click', () => {
    console.log('clicked')
    fetch('/details')
    .then((response) => {
        return response.json()
    }).then((data) => {
        document.querySelector('.details').innerHTML = data.details
    }).catch(error => console.log('error', error))
})
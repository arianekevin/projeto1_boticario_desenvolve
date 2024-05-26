let surpriseBoxButton = document.getElementById('surprise-box-btn');

surpriseBoxButton.addEventListener('click', () => {
    let formElement = document.getElementById('form');
    if (formElement && formElement.classList && formElement.classList.contains('hidden')) {
        formElement.classList.remove('hidden');
        document.getElementById('backdrop').classList.add('backdrop');
    }
})
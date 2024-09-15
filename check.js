document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('submit', (event) => {
        event.preventDefault();

        let inputs = Array.from(document.querySelectorAll('input'));
        inputs = inputs.slice(0, inputs.length - 4);
        let cards = Array.from(document.querySelectorAll('input[name="choose-card"]'));

        inputsCheck = inputs.every(input => input.value.trim() !== '');
        cardsCheck = cards.some(card => card.checked);


        let target = document.querySelector('.d-none');

        if(target){
            target.classList.remove('d-none');
        }
        else if (!target){
             target = document.querySelector('.alert-danger');

             if (inputsCheck && cardsCheck){
                 if (target){
                    target.classList.remove('alert-danger');
                    target.classList.add('alert-success');
                    target.textContent = "Congratulations, your transaction was processed successfully!";
                 }
             }
        }

        if (inputsCheck && cardsCheck) {
            target.classList.add('alert', 'alert-success');
            target.textContent = "Congratulations, your transaction was processed successfully!";
        }
        else {
            target.classList.add('alert', 'alert-danger');
            target.textContent = "Some fields are missing";
           
            setTimeout(() => {
                target.classList.add('d-none');
                target.classList.remove('alert', 'alert-danger');
            }, 10000);
        }
        
    });
});

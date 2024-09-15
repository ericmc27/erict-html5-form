document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('submit', (event) => {
        event.preventDefault();

        let inputs = Array.from(document.querySelectorAll('input'));
        inputs = inputs.slice(0, inputs.length - 4);
        let cards = Array.from(document.querySelectorAll('input[name="choose-card"]'));

        inputsCheck = true;
        cardsCheck = false;

        for (let input of inputs) {
            if (input.value) {
                continue;
            }
            else {
                inputsCheck = false;
                break;
            }
        }

        for (let card of cards) {
            if (card.checked) {
                cardsCheck = true;
                break;
            }
        }

        let target = document.querySelector('.d-none');
        target.classList.remove('d-none');
        target.classList.add('alert');

        if (inputsCheck && cardsCheck) {
            target.classList.add('alert-success');
            target.textContent = "Congratulations, your transaction was processed successfully!";
        }
        else {
            target.classList.add('alert-danger');
            target.textContent = "Some fields are missing";

            setTimeout(() => {
                target.classList.add('d-none');
                target.classList.remove('alert', 'alert-danger');
            }, 5000);
        }

    });
});


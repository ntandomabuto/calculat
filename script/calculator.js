document.addEventListener('DOMContentLoaded', function () {
    let input = document.querySelector('.input');
    let buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const action = button.getAttribute('data-action');
            const value = button.getAttribute('value');
            if (!action) {
                input.value += value;
            } else if (action === 'clear') {
                if (value === 'CE') {
                    input.value = '';
                } else {
                    input.value = input.value.slice(0, -1);
                }
            } else if (action === 'delete') {
                input.value = '';
            } else if (action === 'equal') {
                try {
                    input.value = eval(input.value);
                } catch (error) {
                    input.value = 'Error';
                }
            } else if (action === 'divide') {
                input.value += '/';
            } else if (action === 'ultiply') {
                input.value += '*';
            } else if (action === 'fraction') {
                input.value += '1/';
            } else if (action === 'quare-root') {
                input.value += 'Math.sqrt(';
            }
        });
    });
});
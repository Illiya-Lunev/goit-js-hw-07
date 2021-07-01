const getInput = document.querySelector(`#validation-input`);

const getDataLength = Number(getInput.getAttribute(`data-length`));


const inputIsValid = getInput.addEventListener(`focus`, onFormInput);

function onFormInput(event) {
    
   if (event.currentTarget.value.length < getDataLength) {
        getInput.classList.add('invalid');
        getInput.classList.remove('valid');
  } else {
        getInput.classList.remove(`invalid`);
        getInput.classList.add('valid');
    };
};

console.log(getInput);
const form = document.getElementById("form");
const input = document.getElementById("input");
const result = document.getElementById("result");

if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const isValid = validation(input);
    
        if (isValid) {
          let val = input.value.replace(/\s/g, '').split(',').map((string) => parseInt(string));
    
          result.textContent = sumOfTwoLowestNumbers(val);
        }
    });
}

function sumOfTwoLowestNumbers(array) {
    let lowestItem = Infinity;
    let secondLowestItem = Infinity;
    let result = 0;

    for (let i = 0; i < array.length; i++) {
        if (isNaN(array[i])) {
            result = 'Проверьте введенные данные';
            break;
        }

        if (array.length === 1) {
            result = array[i];
        }
        else if (lowestItem > array[i]) {
            secondLowestItem = lowestItem;
            lowestItem = array[i];

            result = lowestItem + secondLowestItem;
        }
        else if (array[i] === lowestItem || secondLowestItem > array[i]) {
            secondLowestItem = array[i];

            result = lowestItem + secondLowestItem;
        }
    }
    return result;
};

function validation(input) {
  if (input.value === '') {
    result.textContent = 'Введите хотя бы одно число';

    return false;
  }
  return true;
}

module.exports = sumOfTwoLowestNumbers;

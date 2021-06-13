/*
In the html file we have input tags having common attribute 
called name. We fetch all Node elements with common name attribute value
*/
var allInputFields = document.querySelectorAll('#order_form input,select');
console.log('All form tags', allInputFields);
/*
We can iterate over all the node elements of the DOM Tree
Assign each input element with click event listener
*/
allInputFields.forEach((field) => {
  field.addEventListener('click', (e) => {
    console.log(field.placeholder || field.id, 'Clicked');
    // console.log('The value is', field.value);
  });
});

/*
We can iterate over all the node elements of the DOM Tree
Assign each input element with click event listener
We see the values getting typed in the field
*/
allInputFields.forEach((field) => {
  field.addEventListener('input', (e) => {
    console.log('Entered value is :: ', field.value);
  });
});

/**
 * We can clear form on reload
 * We can remove this function in case we want to preserve the state of form
 */
// const resetForm = () => {
//   document.html_form.reset();
// };

const form = document.forms[0];
form.addEventListener('submit', (e) => {
  e.preventDefault();
  let form = document.querySelectorAll('.info input,select');
  const checkedRadio = document.querySelector('input[name="method"]:checked');
  let nodeList = new Set([...form, checkedRadio]);
  console.log('The elements in form', nodeList);
  let formObj = Array.from(nodeList).reduce(
    (acc, input) => ({
      ...acc,
      [input.id]: input.value,
    }),
    {}
  );
  console.log('Form data on submission', formObj);
  let blankFields = [];
  Object.keys(formObj).forEach((x) => {
    if (formObj[x] === '' || formObj[x] === 'number' || formObj[x] === 'time') {
      blankFields.push(x);
    }
  });
  console.log('These fields are empty', blankFields);
  console.log('Total form fields empty', blankFields.length);
  document.html_form.reset();
});
document.getElementById('resetId').addEventListener('click', (e) => {
  document.html_form.reset();
  e.preventDefault();
});

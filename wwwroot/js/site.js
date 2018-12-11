// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
var otherCheckbox = document.querySelector('input[value="other"]');
var otherText = document.querySelector('input[id="otherValue"]');
otherText.style.visibility = 'hidden';

otherCheckbox.onchange = function() {
  if(otherCheckbox.checked) {
    otherText.style.visibility = 'visible';
    otherText.value = '';
  } else {
    otherText.style.visibility = 'hidden';
  }
};
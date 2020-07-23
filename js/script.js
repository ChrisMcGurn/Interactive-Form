/****************************************************************
*   Project:  Tech Degree Project
*   Title:    Interactive Form \w Validation
*   Author:   Christopher McGurn
****************************************************************/

// Focus name input field when content has loaded
window.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#name').focus();
});

const jobMenu = document.querySelector('#title');
const otherJobTitle = document.querySelector('#other-title');
otherJobTitle.style.display = 'none';

jobMenu.addEventListener('change', e => {
  const selectedItem = jobMenu.value;
  if (selectedItem === 'other') {
    otherJobTitle.style.display = 'block';
  }
  else {
    otherJobTitle.style.display = 'none';
  }
});

const selectDesign = document.querySelector('#design');
const selectColor = document.querySelector('#color');

function showOrHideColorOptions (min, max) {
  // Set selected option item to value of min index if min is a number
  if (min && typeof min === 'number') {
    selectColor.options[min].selected = true;
  }

  for (let i = 0; i < selectColor.options.length; i++) {
    if (i >= min && i <= max) {
      selectColor.options[i].hidden = false;
    } else {
      selectColor.options[i].hidden = true;
    }
  }
}

// Hide 'Select Theme' option
selectDesign.options[0].hidden = true;

const selectColorMessage = document.createElement('option');
selectColorMessage.textContent = 'Please select a theme';
selectColor.add(selectColorMessage, selectColor[0]);
selectColorMessage.selected = true;

showOrHideColorOptions();

selectDesign.addEventListener('change', e => {
  const designOptionSelected = e.target.value;
  if (selectColor.options[0].value === 'Please select a theme') {
    selectColor.remove(selectColorMessage);
  }

  if (designOptionSelected === 'js puns') {
    showOrHideColorOptions(0, 2);
  } else {
    showOrHideColorOptions(3, 6);
  }
});

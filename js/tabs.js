const btnHTML = document.querySelector('[data-tab="html"]');
const btnCSS = document.querySelector('[data-tab="css"]');
const btnJS = document.querySelector('[data-tab="js"]');

const panelHTML = document.getElementById('html');
const panelCSS = document.getElementById('css');
const panelJS = document.getElementById('js');

function clearTabs() {
btnHTML.classList.remove('active');
btnCSS.classList.remove('active');
btnJS.classList.remove('active');

panelHTML.classList.remove('active');
panelCSS.classList.remove('active');
panelJS.classList.remove('active');
}

btnHTML.addEventListener('click', function() {
clearTabs();
btnHTML.classList.add('active');
panelHTML.classList.add('active');
});

btnCSS.addEventListener('click', function() {
clearTabs();
btnCSS.classList.add('active');
panelCSS.classList.add('active');
});

btnJS.addEventListener('click', function() {
clearTabs();
btnJS.classList.add('active');
panelJS.classList.add('active');
});
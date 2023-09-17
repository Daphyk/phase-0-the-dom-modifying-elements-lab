// Write your code here!
const mainElement = document.getElementById('main');
if (mainElement) {
    mainElement.remove();
}

const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.textContent = 'Your-Name is the champion';

document.body.appendChild(newHeader);
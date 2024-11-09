const form = document.querySelector('form');
const ul = document.getElementById("items");

const items = [];

const removeItem = (item,parent) => {
    parent.removeItem(item);
}

const displayItems = (items,parent) => {
    parent.innerHTML = '';

    for(let i = 0; i < items.length; i ++){
        parent.appendChild(item);
    }
}

form.addEventListener('submit',(e) => {
    e.preventDefault();

    const item = form.item.value;

    const li = document.createElement('li');
    li.textContent = item;

    items.push(li);
    
    displayItems(items,ul);
    form.item.value = '';
})
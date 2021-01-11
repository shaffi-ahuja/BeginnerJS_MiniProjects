var addItem = document.getElementById('addItem');
var list = document.getElementById('list');
addItem.addEventListener('click', function () {
    event.preventDefault();
    var item = document.getElementById('item').value;
    if (item == "") { alert("Please add a ToDo") }
    else {
        var newItem = document.createElement('div');
        newItem.innerHTML = `
            <input class="form-check-input" type="checkbox" value="" id="${item}">
            <label class="form-check-label" id="${item}Label"for="${item}">${item}</label>`;
        list.appendChild(newItem);
        var checkItem = document.getElementById(`${item}`);
        checkItem.addEventListener('click', () => {
            document.getElementById(`${item}Label`).innerHTML = `${item}`.strike();
        });
        document.getElementById('item').value = "";
    }
});
var clearList = document.getElementById('clearList');
clearList.addEventListener('click', () => {
    event.preventDefault();
    console.log('clear list');
    list.innerHTML = "";
});
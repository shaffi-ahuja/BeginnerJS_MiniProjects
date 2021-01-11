var counter = document.getElementById('counter');

counter.addEventListener('click', () => {
    var text = document.getElementById('enteredText').value;
    var count = 0;
    for (var i in text) {
        if (text[i] == 'a' || text[i] == 'e' || text[i] == 'i' || text[i] == 'o' || text[i] == 'u' || text[i] == 'A' || text[i] == 'E' || text[i] == 'I' || text[i] == 'O' || text[i] == 'U') {
            count++;
        }
    }
    alert(count);
});
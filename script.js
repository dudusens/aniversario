function updateMessage() {
    var name = document.getElementById('input-name').value;
    var frontNameMessage = document.getElementById('front-name-message');
    var insideNameMessage = document.getElementById('inside-name-message');
    var insideWishesMessage = document.getElementById('inside-wishes-message');
    var textNameMessage = document.getElementById('text-name-message');

    if (name.trim() !== '') {
        frontNameMessage.textContent = name;
        textNameMessage.textContent = name;
        frontNameMessage.style.display = 'block';
        insideNameMessage.textContent = name;
        insideWishesMessage.style.display = 'block';
    } else {
        frontNameMessage.textContent = 'seu nome';
        textNameMessage.textContent = 'Seu Nome';
        frontNameMessage.style.display = 'block';
        insideNameMessage.textContent = 'Feliz aniversário!!';
        insideWishesMessage.style.display = 'none';
    }
}

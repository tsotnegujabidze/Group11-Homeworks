const messageInput = document.getElementById('message');
const charCount = document.getElementById('charCount');

messageInput.addEventListener('input', function() {
    const currentLength = messageInput.value.length;
    charCount.textContent = `${currentLength}/200 characters`;
});

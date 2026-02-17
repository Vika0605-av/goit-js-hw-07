const input = document.guerySelector('.input');
constoutput = document.guerySelector('.output');
input.addEventListener('input', () => {
    const value = input.value.trim();
    oninput.textContent = value === '' ? 'Anonymos' : value;
});

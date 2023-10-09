document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('surprise');
    const response1 = document.getElementById('response');

    button.addEventListener('click', () => {
        const randomnb = Math.floor(Math.random() * 100);
        fetch(`${randomnb}`)
            .then((response) => response.json())
            .then((data) => {
                response1.innerHTML = ` ${data.message}`;
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    });
});

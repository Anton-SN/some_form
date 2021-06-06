const Button = document.getElementById('some_button');

const onClick = () => {
    const text = document.getElementById('some_input').value;
    const obj = {
        text,
    }
    console.log(text);
    console.log(obj);
    console.log(JSON.stringify(obj))
}

Button.addEventListener('click', onClick)
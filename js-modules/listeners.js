const onKeyPressHandler = (event) => {
    let keyboardKey = document.getElementById(event.code);
    keyboardKey.click();
    keyboardKey.classList.add('active');

};

const onKeyUpHandler = (event) => {
    let keyboardKey = document.getElementById(event.code);
        keyboardKey.classList.remove('active');
};


export {onKeyPressHandler, onKeyUpHandler}
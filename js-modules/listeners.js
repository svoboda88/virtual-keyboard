const onKeyPressHandler = (event) => {
    let keyboardKey = document.getElementById(event.code);
    if(keyboardKey){
        keyboardKey.click();
        keyboardKey.classList.add('active');
    }


};

const onKeyUpHandler = (event) => {
    let keyboardKey = document.getElementById(event.code);
    if(keyboardKey){
        keyboardKey.classList.remove('active');
    }
};


export {onKeyPressHandler, onKeyUpHandler}
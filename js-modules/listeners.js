
const onKeyPressHandler = (event, input) => {

    const keyboardKey = document.getElementById(`key-${event.key}`)
    if (event.target !== input){ 
        keyboardKey.click()
    }
};


export {onKeyPressHandler}
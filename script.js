import './style.css';
import { engKeys, engKeysCapsLock, rusKeys, rusKeysCapsLock, rusShiftCapsLock, rusKeysShift, engKeysShift, engShiftCapsLock } from './js-modules/keys';

import { onKeyPressHandler, onKeyUpHandler } from './js-modules/listeners';
import { Markup } from './js-modules/markup';

const keyboardMarkup = new Markup();
keyboardMarkup.createDocument(); 
const isEngKeys = window.localStorage.getItem('isEng') === null ? true : window.localStorage.getItem('isEng') === 'true';

keyboardMarkup.createButtons(isEngKeys ? engKeys : rusKeys);
const input = document.getElementById('input');
const wrapper = document.querySelector('.wrapper');
let keyboard = document.querySelector('.keyboard-wrapper')
let isCapsLockPressed = false;

setTimeout(()=> {
    window.addEventListener('keydown',(event) => onKeyPressHandler(event, input));
    window.addEventListener('keyup', (event) => onKeyUpHandler(event));

}, 0)

document.addEventListener('keydown', e => {
    const isEng = window.localStorage.getItem('isEng') === null ? true : window.localStorage.getItem('isEng') === 'true';

    if(e.ctrlKey && e.altKey){
        keyboard.innerHTML = '';

        if (isEng) {
            wrapper.insertBefore(keyboardMarkup.createButtons(isCapsLockPressed ? rusKeysCapsLock :  rusKeys), input.nextSibling);
            window.localStorage.setItem('isEng', false);
        } else {
            wrapper.insertBefore(keyboardMarkup.createButtons(isCapsLockPressed ? engKeysCapsLock  : engKeys ), input.nextSibling);
            window.localStorage.setItem('isEng', true);
        }
    } 

});

document.addEventListener('keydown', e => {
    const isEng = window.localStorage.getItem('isEng') === null ? true : window.localStorage.getItem('isEng') === 'true';

    if(e.shiftKey){
        keyboard.innerHTML = '';

        if (isEng) {
            wrapper.insertBefore(keyboardMarkup.createButtons(isCapsLockPressed ? engShiftCapsLock : engKeysShift ), input.nextSibling);
            
        } else {
            wrapper.insertBefore(keyboardMarkup.createButtons(isCapsLockPressed ? rusShiftCapsLock : rusKeysShift ), input.nextSibling);
            
        }
    } 
});

document.addEventListener('keyup', e => {
    const isEng = window.localStorage.getItem('isEng') === null ? true : window.localStorage.getItem('isEng') === 'true';

    if(e.key === 'Shift'){
        keyboard.innerHTML = ''; 
        if (isEng) {
            wrapper.insertBefore(keyboardMarkup.createButtons(isCapsLockPressed ? engKeysCapsLock : engKeys), input.nextSibling);
        } else {
            wrapper.insertBefore(keyboardMarkup.createButtons(isCapsLockPressed ? rusKeysCapsLock : rusKeys), input.nextSibling);
        }
    } 

});


document.addEventListener('keydown', e => {
    const isEng = window.localStorage.getItem('isEng') === 'true';
    if(e.key === 'CapsLock'){
        keyboard.innerHTML = '';
        const keysCapsLock = isEng ? engKeysCapsLock : rusKeysCapsLock;
        const keys = isEng ? engKeys : rusKeys;
        wrapper.insertBefore(keyboardMarkup.createButtons( isCapsLockPressed ? keys : keysCapsLock  ), input.nextSibling);
        isCapsLockPressed = !isCapsLockPressed;
    } 
});
    



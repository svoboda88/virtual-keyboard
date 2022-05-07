import './style.css';
import {markup} from './js-modules/markup';
import {engKeys} from './js-modules/keys';
import {rusKeys} from './js-modules/keys';
import {engKeysShift} from './js-modules/keys';
import {rusKeysShift} from './js-modules/keys';
import {engKeysCapsLock} from './js-modules/keys';
import {rusKeysCapsLock} from './js-modules/keys';
import {engShiftCapsLock} from './js-modules/keys';
import {rusShiftCapsLock} from './js-modules/keys';
import { onKeyPressHandler } from './js-modules/listeners';

const keyboardMarkup = new markup();
keyboardMarkup.createDocument(); 
const isEngKeys = window.localStorage.getItem('isEng') === null ? true : window.localStorage.getItem('isEng') === 'true';

keyboardMarkup.createButtons(isEngKeys ? engKeys : rusKeys);
const input = document.getElementById('input');
const wrapper = document.querySelector('.wrapper');
let keyboard = document.querySelector('.keyboard-wrapper')
let isCapsLockPressed = false;

setTimeout(()=> {
    window.addEventListener('keypress', (event) =>  onKeyPressHandler( event, input))

}, 0)

document.addEventListener('keydown', e => {
    const isEng = window.localStorage.getItem('isEng') === 'true';

    if(e.ctrlKey && e.altKey){
        keyboard.innerHTML = '';

        if (isEng) {
            wrapper.insertBefore(keyboardMarkup.createButtons(rusKeys), input.nextSibling);
            window.localStorage.setItem('isEng', false);
        } else {
            wrapper.insertBefore(keyboardMarkup.createButtons(engKeys), input.nextSibling);
            window.localStorage.setItem('isEng', true);
        }
    } 

});

document.addEventListener('keydown', e => {
    const isEng = window.localStorage.getItem('isEng') === 'true';

    if(e.shiftKey){
        keyboard.innerHTML = '';

        if (isEng) {
            wrapper.insertBefore(keyboardMarkup.createButtons(isCapsLockPressed ? engShiftCapsLock: engKeysShift ), input.nextSibling);
            
        } else {
            wrapper.insertBefore(keyboardMarkup.createButtons(isCapsLockPressed ? rusShiftCapsLock : rusKeysShift ), input.nextSibling);
            
        }
    } 
});

document.addEventListener('keyup', e => {
    const isEng = window.localStorage.getItem('isEng') === 'true';

    if(e.key === 'Shift'){
        keyboard.innerHTML = ''; 
        if (isEng) {
            wrapper.insertBefore(keyboardMarkup.createButtons(isCapsLockPressed ? engKeysShift: engShiftCapsLock ), input.nextSibling);
        } else {
            wrapper.insertBefore(keyboardMarkup.createButtons(isCapsLockPressed ? rusKeysShift: rusShiftCapsLock ), input.nextSibling);
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
    

// npx webpack serve --hot - запустить лайв сервер

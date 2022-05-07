import arrowTopImage from '../assets/icon-top.png';
import arrowLeftImage from '../assets/icon-left.png';
import arrowRightImage from '../assets/icon-right.png';
import arrowBotImage from '../assets/icon-bottom.png';
import { onKeyPressHandler } from './listeners';

    class markup {
    constructor() {
    this.wrapper;
    this.input;
    this.keyboardWrapper;
    this.description;
    this.descrParagraphOne;
    this.descrParagraphTwo;
    }    
    createDocument() {
        this.wrapper = document.createElement('div');
        this.wrapper.classList.add('wrapper');
        document.body.prepend(this.wrapper);
        this.input = document.createElement('textarea');
        this.input.classList.add('input');
        this.input.id = 'input';
        this.wrapper.prepend(this.input);
        this.keyboardWrapper = document.createElement('div');
        this.keyboardWrapper.classList.add('keyboard-wrapper');
        this.wrapper.append(this.keyboardWrapper);
        this.description = document.createElement('div');
        this.description.classList.add('description');
        this.wrapper.append(this.description);
        this.descrParagraphOne = document.createElement('p');
        this.descrParagraphOne.textContent = 'Клавиатура создана в операционной системе Windows'
        this.description.append(this.descrParagraphOne);
        this.descrParagraphTwo = document.createElement('p');
        this.descrParagraphTwo.textContent = 'Для переключения языка команда: левые ctrl + alt';
        this.description.append(this.descrParagraphTwo);


    }

    createButtons(arr) {
        for (let i=0; i<arr.length; i++) {
            const key = document.createElement('button');
            key.classList.add('key');
            key.textContent = arr[i];
            this.keyboardWrapper.append(key);
            if (key.textContent === 'Backspace' || key.textContent === 'Tab' || key.textContent === 'CapsLock'
            || key.textContent === 'Shift' || key.textContent === 'Ctrl' || key.textContent === 'Win' || key.textContent === 'Alt'
            || key.textContent === 'Del' || key.textContent === 'Enter' || key.textContent === ' ' || key.textContent === '  '
            || key.textContent === '   ' || key.textContent === '    '  || key.textContent === 'Shift ') {
                key.classList.add('black');
            }
        key.textContent === 'Backspace' ?  key.classList.add('backspace') : key;
            key.textContent === 'Tab' ?  key.classList.add('tab') : key;
            key.textContent === 'CapsLock' ?  key.classList.add('capslock') : key;
            key.textContent === 'Shift' ? key.classList.add('shift') : key;
            key.textContent === 'Shift ' ?  key.classList.add('shift_left') : key;
            key.textContent === 'Ctrl' ?  key.classList.add('ctrl') : key;
            key.textContent === 'Win' ?  key.classList.add('win') : key;
            key.textContent === 'Alt' ?  key.classList.add('alt') : key;
            key.textContent === 'Del' ?  key.classList.add('del') : key;
            key.textContent === 'Enter' ? key.classList.add('enter') : key;
            key.textContent === ' ' ?  key.classList.add('arrowtop') : key;
            key.textContent === '  ' ?  key.classList.add('arrowleft') : key;
            key.textContent === '    ' ?  key.classList.add('arrowright') : key;
            key.textContent === '   ' ?  key.classList.add('arrowbottom') : key;
            key.textContent === '     ' ?  key.classList.add('space') : key;
            if (key.textContent === ' ') {
                const arrowTopImg = document.createElement('img');
                arrowTopImg.src = arrowTopImage;
                key.append(arrowTopImg);
            }
            if (key.textContent === '  ') {
                const arrowLeftImg = document.createElement('img');
                arrowLeftImg.src = arrowLeftImage;
                key.append(arrowLeftImg);
            }
            if (key.textContent === '   ') {
                const arrowBottomImg = document.createElement('img');
                arrowBottomImg.src = arrowBotImage;
                key.append(arrowBottomImg);
            }
            if (key.textContent === '    ') {
                const arrowRightImg = document.createElement('img');
                arrowRightImg.src = arrowRightImage;
                key.append(arrowRightImg);
            }
            key.id = `key-${key.textContent}`;
            key.addEventListener('click', () => {
                this.input.value = this.input.value + key.textContent
            })

        }

        return this.keyboardWrapper;
    }



}

export {markup}

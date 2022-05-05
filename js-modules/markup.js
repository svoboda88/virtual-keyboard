import arrowTopImage from '../assets/icon-top.png';
import arrowLeftImage from '../assets/icon-left.png';
import arrowRightImage from '../assets/icon-right.png';
import arrowBotImage from '../assets/icon-bottom.png';

    class markup {
    constructor() {
    this.wrapper;
    this.input;
    this.keyboardWrapper;
    this.key;
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
            this.key = document.createElement('button');
            this.key.classList.add('key');
            this.key.textContent = arr[i];
            this.keyboardWrapper.append(this.key);
            if (this.key.textContent === 'Backspace' || this.key.textContent === 'Tab' || this.key.textContent === 'CapsLock'
            || this.key.textContent === 'Shift' || this.key.textContent === 'Ctrl' || this.key.textContent === 'Win' || this.key.textContent === 'Alt'
            || this.key.textContent === 'Del' || this.key.textContent === 'Enter' || this.key.textContent === ' ' || this.key.textContent === '  '
            || this.key.textContent === '   ' || this.key.textContent === '    '  || this.key.textContent === 'Shift ') {
                this.key.classList.add('black');
            }
            this.key.textContent === 'Backspace' ?  this.key.classList.add('backspace') : this.key;
            this.key.textContent === 'Tab' ?  this.key.classList.add('tab') : this.key;
            this.key.textContent === 'CapsLock' ?  this.key.classList.add('capslock') : this.key;
            this.key.textContent === 'Shift' ?  this.key.classList.add('shift') : this.key;
            this.key.textContent === 'Shift ' ?  this.key.classList.add('shift_left') : this.key;
            this.key.textContent === 'Ctrl' ?  this.key.classList.add('ctrl') : this.key;
            this.key.textContent === 'Win' ?  this.key.classList.add('win') : this.key;
            this.key.textContent === 'Alt' ?  this.key.classList.add('alt') : this.key;
            this.key.textContent === 'Del' ?  this.key.classList.add('del') : this.key;
            this.key.textContent === 'Enter' ?  this.key.classList.add('enter') : this.key;
            this.key.textContent === ' ' ?  this.key.classList.add('arrowtop') : this.key;
            this.key.textContent === '  ' ?  this.key.classList.add('arrowleft') : this.key;
            this.key.textContent === '    ' ?  this.key.classList.add('arrowright') : this.key;
            this.key.textContent === '   ' ?  this.key.classList.add('arrowbottom') : this.key;
            this.key.textContent === '     ' ?  this.key.classList.add('space') : this.key;
            if (this.key.textContent === ' ') {
                const arrowTopImg = document.createElement('img');
                arrowTopImg.src = arrowTopImage;
                this.key.append(arrowTopImg);
            }
            if (this.key.textContent === '  ') {
                const arrowLeftImg = document.createElement('img');
                arrowLeftImg.src = arrowLeftImage;
                this.key.append(arrowLeftImg);
            }
            if (this.key.textContent === '   ') {
                const arrowBottomImg = document.createElement('img');
                arrowBottomImg.src = arrowBotImage;
                this.key.append(arrowBottomImg);
            }
            if (this.key.textContent === '    ') {
                const arrowRightImg = document.createElement('img');
                arrowRightImg.src = arrowRightImage;
                this.key.append(arrowRightImg);
            }

        }
        return this.keyboardWrapper;
    }



}

export {markup}

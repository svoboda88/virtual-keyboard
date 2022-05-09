    class Markup {
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
        this.input.readOnly = 'readonly';
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
        this.input.addEventListener('blur', (event) => {
            if(this.keyboardWrapper.contains(event.relatedTarget)) {
                this.input.focus()
            }
        })

    }

    createButtons(arr) {
        for (let i=0; i<arr.length; i++) {
            const key = document.createElement('button');
            key.id = arr[i].code;
            key.classList.add('key');
            key.textContent = arr[i].text;
            this.keyboardWrapper.append(key);
            if (key.id === 'Backspace' || key.id === 'Tab' || key.id === 'CapsLock' || key.id === 'ShiftRight' || key.id === 'MetaRight'
            || key.id === 'ShiftLeft' || key.id === 'ControlLeft' || key.id === 'ControlRight' || key.id === 'MetaLeft' || key.id === 'Alt'
            || key.id === 'Delete' || key.id === 'Enter' || key.id === 'AltLeft' || key.id === 'AltRight'
            || key.id === 'ArrowLeft' || key.id === 'ArrowRight'  || key.id === 'ArrowUp' || key.id === 'ArrowDown' ) {
                key.classList.add('black');
            }
        key.textContent === 'Backspace' ?  key.classList.add('backspace') : key;
            key.id === 'Tab' ?  key.classList.add('tab') : key;
            key.id === 'CapsLock' ?  key.classList.add('caps-lock') : key;
            key.id === 'ShiftRight' ? key.classList.add('shift-right') : key;
            key.id === 'ShiftLeft' ?  key.classList.add('shift-left') : key;
            key.id === 'ControlRight' ?  key.classList.add('control-right') : key;
            key.id === 'ControlLeft' ?  key.classList.add('control-left') : key;
            key.id === 'MetaLeft' ?  key.classList.add('meta-left') : key;
            key.id === 'AltLeft' ?  key.classList.add('alt-left') : key;
            key.id === 'AltLRight' ?  key.classList.add('alt-right') : key;
            key.id === 'Delete' ?  key.classList.add('delete') : key;
            key.id === 'Enter' ? key.classList.add('enter') : key;
            key.id === 'ArrowUp' ?  key.classList.add('arrow-up') : key;
            key.id === 'ArrowLeft' ?  key.classList.add('arrow-left') : key;
            key.id === 'ArrowRight' ?  key.classList.add('arrow-right') : key;
            key.id === 'ArrowDown' ?  key.classList.add('arrow-down') : key;
            key.id === 'Space' ?  key.classList.add('space') : key;

            key.addEventListener('click', () => {

                if (key.textContent.length === 1 || key.textContent === '\\') {
                 this.input.value = this.input.value + key.textContent;
                 return;
                }
                if (key.id === 'Tab') {
                    this.input.value += '    '
                    return;
                }
                if (key.id === 'Space') {
                    this.input.value += ' '
                    return;
                }
                if (key.id === 'ArrowUp') {                    
                    this.input.value += '˄';
                    return
                }
                if (key.id === 'ArrowLeft') {                    
                    this.input.value += '˂';
                    return
                }
                if (key.id === 'ArrowRight') {                    
                    this.input.value += '˃';
                    return
                }
                if (key.id === 'ArrowDown') {                    
                    this.input.value += '˅';
                    return
                }
                if (key.id === 'Enter') { 
                    this.input.value += '\n';
                }

                if (key.id === 'Backspace') {
                    const selectionStart = this.input.selectionStart;
                    const selectionEnd = this.input.selectionEnd;
                    const length  = this.input.value.length;

                    if(selectionStart!== undefined && selectionEnd !== undefined) {
                        if(selectionStart !== selectionEnd) {

                            this.input.value = this.input.value.slice(0, selectionStart) + this.input.value.slice(selectionEnd, length);
                            this.input.selectionStart = selectionStart;
                            this.input.selectionEnd = selectionStart ;

                        } else {
                            this.input.value = this.input.value.slice(0, selectionStart - 1) + this.input.value.slice(selectionStart, length);
                            this.input.selectionStart = selectionStart - 1;
                            this.input.selectionEnd = selectionStart - 1 ;
                        }

     
                        return;
                    }
                }
            })
        }

        return this.keyboardWrapper;
    }



}

export {Markup}

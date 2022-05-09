(()=>{"use strict";const e=[{text:"`",code:"Backquote"},{text:"1",code:"Digit1"},{text:"2",code:"Digit2"},{text:"3",code:"Digit3"},{text:"4",code:"Digit4"},{text:"5",code:"Digit5"},{text:"6",code:"Digit6"},{text:"7",code:"Digit7"},{text:"8",code:"Digit8"},{text:"9",code:"Digit9"},{text:"0",code:"Digit0"},{text:"-",code:"Minus"},{text:"=",code:"Equal"},{text:"Backspace",code:"Backspace"},{text:"Tab",code:"Tab"},{text:"q",code:"KeyQ"},{text:"w",code:"KeyW"},{text:"e",code:"KeyE"},{text:"r",code:"KeyR"},{text:"t",code:"KeyT"},{text:"y",code:"KeyY"},{text:"u",code:"KeyU"},{text:"i",code:"KeyI"},{text:"o",code:"KeyO"},{text:"p",code:"KeyP"},{text:"[",code:"BracketLeft"},{text:"]",code:"BracketRight"},{text:"\\",code:"Backslash"},{text:"Del",code:"Delete"},{text:"CapsLock",code:"CapsLock"},{text:"a",code:"KeyA"},{text:"s",code:"KeyS"},{text:"d",code:"KeyD"},{text:"f",code:"KeyF"},{text:"g",code:"KeyG"},{text:"h",code:"KeyH"},{text:"j",code:"KeyJ"},{text:"k",code:"KeyK"},{text:"l",code:"KeyL"},{text:";",code:"Semicolon"},{text:"'",code:"Quote"},{text:"Enter",code:"Enter"},{text:"Shift",code:"ShiftLeft"},{text:"z",code:"KeyZ"},{text:"x",code:"KeyX"},{text:"c",code:"KeyC"},{text:"v",code:"KeyV"},{text:"b",code:"KeyB"},{text:"n",code:"KeyN"},{text:"m",code:"KeyM"},{text:",",code:"Comma"},{text:".",code:"Period"},{text:"/",code:"Slash"},{text:"˄",code:"ArrowUp"},{text:"Shift",code:"ShiftRight"},{text:"Ctrl",code:"ControlLeft"},{text:"Win",code:"MetaLeft"},{text:"Alt",code:"AltLeft"},{text:" ",code:"Space"},{text:"Alt",code:"AltRight"},{text:"˂",code:"ArrowLeft"},{text:"˅",code:"ArrowDown"},{text:"˃",code:"ArrowRight"},{text:"Ctrl",code:"ControlRight"}],t=[{text:"`",code:"Backquote"},{text:"1",code:"Digit1"},{text:"2",code:"Digit2"},{text:"3",code:"Digit3"},{text:"4",code:"Digit4"},{text:"5",code:"Digit5"},{text:"6",code:"Digit6"},{text:"7",code:"Digit7"},{text:"8",code:"Digit8"},{text:"9",code:"Digit9"},{text:"0",code:"Digit0"},{text:"-",code:"Minus"},{text:"=",code:"Equal"},{text:"Backspace",code:"Backspace"},{text:"Tab",code:"Tab"},{text:"Q",code:"KeyQ"},{text:"W",code:"KeyW"},{text:"E",code:"KeyE"},{text:"R",code:"KeyR"},{text:"T",code:"KeyT"},{text:"Y",code:"KeyY"},{text:"U",code:"KeyU"},{text:"I",code:"KeyI"},{text:"O",code:"KeyO"},{text:"P",code:"KeyP"},{text:"[",code:"BracketLeft"},{text:"]",code:"BracketRight"},{text:"\\",code:"Backslash"},{text:"Del",code:"Delete"},{text:"CapsLock",code:"CapsLock"},{text:"A",code:"KeyA"},{text:"S",code:"KeyS"},{text:"D",code:"KeyD"},{text:"F",code:"KeyF"},{text:"G",code:"KeyG"},{text:"H",code:"KeyH"},{text:"J",code:"KeyJ"},{text:"K",code:"KeyK"},{text:"L",code:"KeyL"},{text:";",code:"Semicolon"},{text:"'",code:"Quote"},{text:"Enter",code:"Enter"},{text:"Shift",code:"ShiftLeft"},{text:"Z",code:"KeyZ"},{text:"X",code:"KeyX"},{text:"C",code:"KeyC"},{text:"V",code:"KeyV"},{text:"B",code:"KeyB"},{text:"N",code:"KeyN"},{text:"M",code:"KeyM"},{text:",",code:"Comma"},{text:".",code:"Period"},{text:"/",code:"Slash"},{text:"˄",code:"ArrowUp"},{text:"Shift",code:"ShiftRight"},{text:"Ctrl",code:"ControlLeft"},{text:"Win",code:"MetaLeft"},{text:"Alt",code:"AltLeft"},{text:" ",code:"Space"},{text:"Alt",code:"AltRight"},{text:"˂",code:"ArrowLeft"},{text:"˅",code:"ArrowDown"},{text:"˃",code:"ArrowRight"},{text:"Ctrl",code:"ControlRight"}],o=[{text:"~",code:"Backquote"},{text:"!",code:"Digit1"},{text:"@",code:"Digit2"},{text:"#",code:"Digit3"},{text:"$",code:"Digit4"},{text:"%",code:"Digit5"},{text:"^",code:"Digit6"},{text:"&",code:"Digit7"},{text:"*",code:"Digit8"},{text:"(",code:"Digit9"},{text:")",code:"Digit0"},{text:"_",code:"Minus"},{text:"+",code:"Equal"},{text:"Backspace",code:"Backspace"},{text:"Tab",code:"Tab"},{text:"Q",code:"KeyQ"},{text:"W",code:"KeyW"},{text:"E",code:"KeyE"},{text:"R",code:"KeyR"},{text:"T",code:"KeyT"},{text:"Y",code:"KeyY"},{text:"U",code:"KeyU"},{text:"I",code:"KeyI"},{text:"O",code:"KeyO"},{text:"P",code:"KeyP"},{text:"{",code:"BracketLeft"},{text:"}",code:"BracketRight"},{text:"|",code:"Backslash"},{text:"Del",code:"Delete"},{text:"CapsLock",code:"CapsLock"},{text:"A",code:"KeyA"},{text:"S",code:"KeyS"},{text:"D",code:"KeyD"},{text:"F",code:"KeyF"},{text:"G",code:"KeyG"},{text:"H",code:"KeyH"},{text:"J",code:"KeyJ"},{text:"K",code:"KeyK"},{text:"L",code:"KeyL"},{text:":",code:"Semicolon"},{text:'"',code:"Quote"},{text:"Enter",code:"Enter"},{text:"Shift",code:"ShiftLeft"},{text:"Z",code:"KeyZ"},{text:"X",code:"KeyX"},{text:"C",code:"KeyC"},{text:"V",code:"KeyV"},{text:"B",code:"KeyB"},{text:"N",code:"KeyN"},{text:"M",code:"KeyM"},{text:"<",code:"Comma"},{text:">",code:"Period"},{text:"?",code:"Slash"},{text:"˄",code:"ArrowUp"},{text:"Shift",code:"ShiftRight"},{text:"Ctrl",code:"ControlLeft"},{text:"Win",code:"MetaLeft"},{text:"Alt",code:"AltLeft"},{text:" ",code:"Space"},{text:"Alt",code:"AltRight"},{text:"˂",code:"ArrowLeft"},{text:"˅",code:"ArrowDown"},{text:"˃",code:"ArrowRight"},{text:"Ctrl",code:"ControlRight"}],c=[{text:"~",code:"Backquote"},{text:"!",code:"Digit1"},{text:"@",code:"Digit2"},{text:"#",code:"Digit3"},{text:"$",code:"Digit4"},{text:"%",code:"Digit5"},{text:"^",code:"Digit6"},{text:"&",code:"Digit7"},{text:"*",code:"Digit8"},{text:"(",code:"Digit9"},{text:")",code:"Digit0"},{text:"_",code:"Minus"},{text:"+",code:"Equal"},{text:"Backspace",code:"Backspace"},{text:"Tab",code:"Tab"},{text:"q",code:"KeyQ"},{text:"w",code:"KeyW"},{text:"e",code:"KeyE"},{text:"r",code:"KeyR"},{text:"t",code:"KeyT"},{text:"y",code:"KeyY"},{text:"o",code:"KeyU"},{text:"i",code:"KeyI"},{text:"o",code:"KeyO"},{text:"p",code:"KeyP"},{text:"{",code:"BracketLeft"},{text:"}",code:"BracketRight"},{text:"|",code:"Backslash"},{text:"Del",code:"Delete"},{text:"CapsLock",code:"CapsLock"},{text:"a",code:"KeyA"},{text:"s",code:"KeyS"},{text:"d",code:"KeyD"},{text:"f",code:"KeyF"},{text:"g",code:"KeyG"},{text:"h",code:"KeyH"},{text:"j",code:"KeyJ"},{text:"k",code:"KeyK"},{text:"l",code:"KeyL"},{text:":",code:"Semicolon"},{text:'"',code:"Quote"},{text:"Enter",code:"Enter"},{text:"Shift",code:"ShiftLeft"},{text:"z",code:"KeyZ"},{text:"x",code:"KeyX"},{text:"c",code:"KeyC"},{text:"v",code:"KeyV"},{text:"b",code:"KeyB"},{text:"n",code:"KeyN"},{text:"m",code:"KeyM"},{text:"<",code:"Comma"},{text:">",code:"Period"},{text:"?",code:"Slash"},{text:"˄",code:"ArrowUp"},{text:"Shift",code:"ShiftRight"},{text:"Ctrl",code:"ControlLeft"},{text:"Win",code:"MetaLeft"},{text:"Alt",code:"AltLeft"},{text:" ",code:"Space"},{text:"Alt",code:"AltRight"},{text:"˂",code:"ArrowLeft"},{text:"˅",code:"ArrowDown"},{text:"˃",code:"ArrowRight"},{text:"Ctrl",code:"ControlRight"}],d=[{text:"ё",code:"Backquote"},{text:"1",code:"Digit1"},{text:"2",code:"Digit2"},{text:"3",code:"Digit3"},{text:"4",code:"Digit4"},{text:"5",code:"Digit5"},{text:"6",code:"Digit6"},{text:"7",code:"Digit7"},{text:"8",code:"Digit8"},{text:"9",code:"Digit9"},{text:"0",code:"Digit0"},{text:"-",code:"Minus"},{text:"=",code:"Equal"},{text:"Backspace",code:"Backspace"},{text:"Tab",code:"Tab"},{text:"й",code:"KeyQ"},{text:"ц",code:"KeyW"},{text:"у",code:"KeyE"},{text:"к",code:"KeyR"},{text:"е",code:"KeyT"},{text:"н",code:"KeyY"},{text:"г",code:"KeyU"},{text:"ш",code:"KeyI"},{text:"щ",code:"KeyO"},{text:"з",code:"KeyP"},{text:"х",code:"BracketLeft"},{text:"ъ",code:"BracketRight"},{text:"\\",code:"Backslash"},{text:"Del",code:"Delete"},{text:"CapsLock",code:"CapsLock"},{text:"ф",code:"KeyA"},{text:"ы",code:"KeyS"},{text:"в",code:"KeyD"},{text:"а",code:"KeyF"},{text:"п",code:"KeyG"},{text:"р",code:"KeyH"},{text:"о",code:"KeyJ"},{text:"л",code:"KeyK"},{text:"д",code:"KeyL"},{text:"ж",code:"Semicolon"},{text:"э",code:"Quote"},{text:"Enter",code:"Enter"},{text:"Shift",code:"ShiftLeft"},{text:"я",code:"KeyZ"},{text:"ч",code:"KeyX"},{text:"с",code:"KeyC"},{text:"м",code:"KeyV"},{text:"и",code:"KeyB"},{text:"т",code:"KeyN"},{text:"ь",code:"KeyM"},{text:"б",code:"Comma"},{text:"ю",code:"Period"},{text:".",code:"Slash"},{text:"˄",code:"ArrowUp"},{text:"Shift",code:"ShiftRight"},{text:"Ctrl",code:"ControlLeft"},{text:"Win",code:"MetaLeft"},{text:"Alt",code:"AltLeft"},{text:" ",code:"Space"},{text:"Alt",code:"AltRight"},{text:"˂",code:"ArrowLeft"},{text:"˅",code:"ArrowDown"},{text:"˃",code:"ArrowRight"},{text:"Ctrl",code:"ControlRight"}],i=[{text:"Ё",code:"Backquote"},{text:"1",code:"Digit1"},{text:"2",code:"Digit2"},{text:"3",code:"Digit3"},{text:"4",code:"Digit4"},{text:"5",code:"Digit5"},{text:"6",code:"Digit6"},{text:"7",code:"Digit7"},{text:"8",code:"Digit8"},{text:"9",code:"Digit9"},{text:"0",code:"Digit0"},{text:"-",code:"Minus"},{text:"=",code:"Equal"},{text:"Backspace",code:"Backspace"},{text:"Tab",code:"Tab"},{text:"Й",code:"KeyQ"},{text:"Ц",code:"KeyW"},{text:"У",code:"KeyE"},{text:"К",code:"KeyR"},{text:"Е",code:"KeyT"},{text:"Н",code:"KeyY"},{text:"Г",code:"KeyU"},{text:"Ш",code:"KeyI"},{text:"Щ",code:"KeyO"},{text:"З",code:"KeyP"},{text:"Х",code:"BracketLeft"},{text:"Ъ",code:"BracketRight"},{text:"\\",code:"Backslash"},{text:"Del",code:"Delete"},{text:"CapsLock",code:"CapsLock"},{text:"Ф",code:"KeyA"},{text:"Ы",code:"KeyS"},{text:"В",code:"KeyD"},{text:"А",code:"KeyF"},{text:"П",code:"KeyG"},{text:"Р",code:"KeyH"},{text:"О",code:"KeyJ"},{text:"Л",code:"KeyK"},{text:"Д",code:"KeyL"},{text:"Ж",code:"Semicolon"},{text:"Э",code:"Quote"},{text:"Enter",code:"Enter"},{text:"Shift",code:"ShiftLeft"},{text:"Я",code:"KeyZ"},{text:"Ч",code:"KeyX"},{text:"С",code:"KeyC"},{text:"М",code:"KeyV"},{text:"И",code:"KeyB"},{text:"Т",code:"KeyN"},{text:"Ь",code:"KeyM"},{text:"Б",code:"Comma"},{text:"Ю",code:"Period"},{text:".",code:"Slash"},{text:"˄",code:"ArrowUp"},{text:"Shift",code:"ShiftRight"},{text:"Ctrl",code:"ControlLeft"},{text:"Win",code:"MetaLeft"},{text:"Alt",code:"AltLeft"},{text:" ",code:"Space"},{text:"Alt",code:"AltRight"},{text:"˂",code:"ArrowLeft"},{text:"˅",code:"ArrowDown"},{text:"˃",code:"ArrowRight"},{text:"Ctrl",code:"ControlRight"}],x=[{text:"Ё",code:"Backquote"},{text:"!",code:"Digit1"},{text:'"',code:"Digit2"},{text:"№",code:"Digit3"},{text:";",code:"Digit4"},{text:"%",code:"Digit5"},{text:":",code:"Digit6"},{text:"?",code:"Digit7"},{text:"*",code:"Digit8"},{text:"(",code:"Digit9"},{text:")",code:"Digit0"},{text:"_",code:"Minus"},{text:"+",code:"Equal"},{text:"Backspace",code:"Backspace"},{text:"Tab",code:"Tab"},{text:"Й",code:"KeyQ"},{text:"Ц",code:"KeyW"},{text:"У",code:"KeyE"},{text:"К",code:"KeyR"},{text:"Е",code:"KeyT"},{text:"Н",code:"KeyY"},{text:"Г",code:"KeyU"},{text:"Ш",code:"KeyI"},{text:"Щ",code:"KeyO"},{text:"З",code:"KeyP"},{text:"Х",code:"BracketLeft"},{text:"Ъ",code:"BracketRight"},{text:"/",code:"Backslash"},{text:"Del",code:"Delete"},{text:"CapsLock",code:"CapsLock"},{text:"Ф",code:"KeyA"},{text:"Ы",code:"KeyS"},{text:"В",code:"KeyD"},{text:"А",code:"KeyF"},{text:"П",code:"KeyG"},{text:"Р",code:"KeyH"},{text:"О",code:"KeyJ"},{text:"Л",code:"KeyK"},{text:"Д",code:"KeyL"},{text:"Ж",code:"Semicolon"},{text:"Э",code:"Quote"},{text:"Enter",code:"Enter"},{text:"Shift",code:"ShiftLeft"},{text:"Я",code:"KeyZ"},{text:"Ч",code:"KeyX"},{text:"С",code:"KeyC"},{text:"М",code:"KeyV"},{text:"И",code:"KeyB"},{text:"Т",code:"KeyN"},{text:"Ь",code:"KeyM"},{text:"Б",code:"Comma"},{text:"Ю",code:"Period"},{text:",",code:"Slash"},{text:"˄",code:"ArrowUp"},{text:"Shift",code:"ShiftRight"},{text:"Ctrl",code:"ControlLeft"},{text:"Win",code:"MetaLeft"},{text:"Alt",code:"AltLeft"},{text:" ",code:"Space"},{text:"Alt",code:"AltRight"},{text:"˂",code:"ArrowLeft"},{text:"˅",code:"ArrowDown"},{text:"˃",code:"ArrowRight"},{text:"Ctrl",code:"ControlRight"}],a=[{text:"ё",code:"Backquote"},{text:"!",code:"Digit1"},{text:'"',code:"Digit2"},{text:"№",code:"Digit3"},{text:";",code:"Digit4"},{text:"%",code:"Digit5"},{text:":",code:"Digit6"},{text:"?",code:"Digit7"},{text:"*",code:"Digit8"},{text:"(",code:"Digit9"},{text:")",code:"Digit0"},{text:"_",code:"Minus"},{text:"+",code:"Equal"},{text:"Backspace",code:"Backspace"},{text:"Tab",code:"Tab"},{text:"й",code:"KeyQ"},{text:"ц",code:"KeyW"},{text:"у",code:"KeyE"},{text:"к",code:"KeyR"},{text:"е",code:"KeyT"},{text:"н",code:"KeyY"},{text:"г",code:"KeyU"},{text:"ш",code:"KeyI"},{text:"щ",code:"KeyO"},{text:"з",code:"KeyP"},{text:"х",code:"BracketLeft"},{text:"ъ",code:"BracketRight"},{text:"/",code:"Backslash"},{text:"Del",code:"Delete"},{text:"CapsLock",code:"CapsLock"},{text:"ф",code:"KeyA"},{text:"ы",code:"KeyS"},{text:"в",code:"KeyD"},{text:"а",code:"KeyF"},{text:"п",code:"KeyG"},{text:"р",code:"KeyH"},{text:"о",code:"KeyJ"},{text:"л",code:"KeyK"},{text:"д",code:"KeyL"},{text:"ж",code:"Semicolon"},{text:"э",code:"Quote"},{text:"Enter",code:"Enter"},{text:"Shift",code:"ShiftLeft"},{text:"я",code:"KeyZ"},{text:"ч",code:"KeyX"},{text:"с",code:"KeyC"},{text:"м",code:"KeyV"},{text:"и",code:"KeyB"},{text:"т",code:"KeyN"},{text:"ь",code:"KeyM"},{text:"б",code:"Comma"},{text:"ю",code:"Period"},{text:",",code:"Slash"},{text:"˄",code:"ArrowUp"},{text:"Shift",code:"ShiftRight"},{text:"Ctrl",code:"ControlLeft"},{text:"Win",code:"MetaLeft"},{text:"Alt",code:"AltLeft"},{text:" ",code:"Space"},{text:"Alt",code:"AltRight"},{text:"˂",code:"ArrowLeft"},{text:"˅",code:"ArrowDown"},{text:"˃",code:"ArrowRight"},{text:"Ctrl",code:"ControlRight"}],r=new class{constructor(){this.wrapper,this.input,this.keyboardWrapper,this.description,this.descrParagraphOne,this.descrParagraphTwo}createDocument(){this.wrapper=document.createElement("div"),this.wrapper.classList.add("wrapper"),document.body.prepend(this.wrapper),this.input=document.createElement("textarea"),this.input.readOnly="readonly",this.input.classList.add("input"),this.input.id="input",this.wrapper.prepend(this.input),this.keyboardWrapper=document.createElement("div"),this.keyboardWrapper.classList.add("keyboard-wrapper"),this.wrapper.append(this.keyboardWrapper),this.description=document.createElement("div"),this.description.classList.add("description"),this.wrapper.append(this.description),this.descrParagraphOne=document.createElement("p"),this.descrParagraphOne.textContent="Клавиатура создана в операционной системе Windows",this.description.append(this.descrParagraphOne),this.descrParagraphTwo=document.createElement("p"),this.descrParagraphTwo.textContent="Для переключения языка команда: левые ctrl + alt",this.description.append(this.descrParagraphTwo),this.input.addEventListener("blur",(e=>{this.keyboardWrapper.contains(e.relatedTarget)&&this.input.focus()}))}createButtons(e){for(let t=0;t<e.length;t++){const o=document.createElement("button");o.id=e[t].code,o.classList.add("key"),o.textContent=e[t].text,this.keyboardWrapper.append(o),"Backspace"!==o.id&&"Tab"!==o.id&&"CapsLock"!==o.id&&"ShiftRight"!==o.id&&"MetaRight"!==o.id&&"ShiftLeft"!==o.id&&"ControlLeft"!==o.id&&"ControlRight"!==o.id&&"MetaLeft"!==o.id&&"Alt"!==o.id&&"Delete"!==o.id&&"Enter"!==o.id&&"AltLeft"!==o.id&&"AltRight"!==o.id&&"ArrowLeft"!==o.id&&"ArrowRight"!==o.id&&"ArrowUp"!==o.id&&"ArrowDown"!==o.id||o.classList.add("black"),"Backspace"===o.textContent&&o.classList.add("backspace"),"Tab"===o.id&&o.classList.add("tab"),"CapsLock"===o.id&&o.classList.add("caps-lock"),"ShiftRight"===o.id&&o.classList.add("shift-right"),"ShiftLeft"===o.id&&o.classList.add("shift-left"),"ControlRight"===o.id&&o.classList.add("control-right"),"ControlLeft"===o.id&&o.classList.add("control-left"),"MetaLeft"===o.id&&o.classList.add("meta-left"),"AltLeft"===o.id&&o.classList.add("alt-left"),"AltLRight"===o.id&&o.classList.add("alt-right"),"Delete"===o.id&&o.classList.add("delete"),"Enter"===o.id&&o.classList.add("enter"),"ArrowUp"===o.id&&o.classList.add("arrow-up"),"ArrowLeft"===o.id&&o.classList.add("arrow-left"),"ArrowRight"===o.id&&o.classList.add("arrow-right"),"ArrowDown"===o.id&&o.classList.add("arrow-down"),"Space"===o.id&&o.classList.add("space"),o.addEventListener("click",(()=>{if(1!==o.textContent.length&&"\\"!==o.textContent)if("Tab"!==o.id)if("Space"!==o.id)if("ArrowUp"!==o.id)if("ArrowLeft"!==o.id)if("ArrowRight"!==o.id)if("ArrowDown"!==o.id){if("Enter"===o.id&&(this.input.value+="\n"),"Backspace"===o.id){const e=this.input.selectionStart,t=this.input.selectionEnd,o=this.input.value.length;if(void 0!==e&&void 0!==t)return void(e!==t?(this.input.value=this.input.value.slice(0,e)+this.input.value.slice(t,o),this.input.selectionStart=e,this.input.selectionEnd=e):(this.input.value=this.input.value.slice(0,e-1)+this.input.value.slice(e,o),this.input.selectionStart=e-1,this.input.selectionEnd=e-1))}}else this.input.value+="˅";else this.input.value+="˃";else this.input.value+="˂";else this.input.value+="˄";else this.input.value+=" ";else this.input.value+="    ";else this.input.value=this.input.value+o.textContent})),o.addEventListener("mousedown",(()=>{o.classList.add("active")})),o.addEventListener("mouseup",(()=>{o.classList.remove("active")}))}return this.keyboardWrapper}};r.createDocument();const s=null===window.localStorage.getItem("isEng")||"true"===window.localStorage.getItem("isEng");r.createButtons(s?e:d);const n=document.getElementById("input"),l=document.querySelector(".wrapper");let y=document.querySelector(".keyboard-wrapper"),K=!1;setTimeout((()=>{window.addEventListener("keydown",(e=>(e=>{let t=document.getElementById(e.code);t&&(t.click(),t.classList.add("active"))})(e))),window.addEventListener("keyup",(e=>(e=>{let t=document.getElementById(e.code);t&&t.classList.remove("active")})(e)))}),0),document.addEventListener("keydown",(o=>{const c=null===window.localStorage.getItem("isEng")||"true"===window.localStorage.getItem("isEng");o.ctrlKey&&o.altKey&&(y.innerHTML="",c?(l.insertBefore(r.createButtons(K?i:d),n.nextSibling),window.localStorage.setItem("isEng",!1)):(l.insertBefore(r.createButtons(K?t:e),n.nextSibling),window.localStorage.setItem("isEng",!0)))})),document.addEventListener("keydown",(e=>{const t=null===window.localStorage.getItem("isEng")||"true"===window.localStorage.getItem("isEng");e.shiftKey&&(y.innerHTML="",t?l.insertBefore(r.createButtons(K?c:o),n.nextSibling):l.insertBefore(r.createButtons(K?a:x),n.nextSibling))})),document.addEventListener("keyup",(o=>{const c=null===window.localStorage.getItem("isEng")||"true"===window.localStorage.getItem("isEng");"Shift"===o.key&&(y.innerHTML="",c?l.insertBefore(r.createButtons(K?t:e),n.nextSibling):l.insertBefore(r.createButtons(K?i:d),n.nextSibling))})),document.addEventListener("keydown",(o=>{const c="true"===window.localStorage.getItem("isEng");if("CapsLock"===o.key){y.innerHTML="";const o=c?t:i,x=c?e:d;l.insertBefore(r.createButtons(K?x:o),n.nextSibling),K=!K}}))})();
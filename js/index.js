const body = document.querySelector('body');
const inner = document.createElement('div');
inner.className ='inner';
const textarea = document.createElement('textarea');
textarea.className = 'textarea';

body.appendChild(textarea)
body.appendChild(inner)


//create btns
  const BTNS = 61;
for (let i = 0; i < BTNS; i++){
    const btn = document.createElement('div');
    btn.classList.add('btn');
    inner.appendChild(btn)
}
  
  let keys = ["`", "1", "2",'3', '4', '5','6', '7', '8', '9', '0', '-', '=', ' &larr; Back Space ', 'TAB', 'q', 'w', 'e', 'r', 't','y','u','i','o','p','[', ']', '&#8260;','Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l',';', ' &quot;',' Enter &crarr;','Shift &#8657;' , '|', 'z', 'x','c', 'v', 'b','n', 'm',',', '.','?', 'Shift &#8657;', 'Ctrl', 'Win', 'Alt', 'Spase', 'Alt', 'FN', 'Ctrl',  ];
   const getKeys = (function (){
       const key = document.querySelectorAll('.btn');
       for(let i = 0; i < keys.length  ; i++){
           key[i].innerHTML = keys[i];
         
       }
   });
    
   getKeys();
    
   //
   const btnKeys = document.querySelectorAll('.btn');
   const backSpace = btnKeys[13]
   backSpace.classList.add ('back-space')
  
   const tab = btnKeys[14]
   tab.classList.add ('tab')
  
   const enter = btnKeys[40]
   enter.classList.add ('enter')
   
   const capsLock = btnKeys[28]
   capsLock.classList.add ('caps-lock')

   const slash = btnKeys[27]
   slash.classList.add ('slash')

  const shift = btnKeys[41]
  shift.classList.add ('shift')
  const shiftTwo = btnKeys[53]
  shiftTwo.classList.add ('shift')
  
  const space = btnKeys[57]
  space.classList.add ('space')

  const ctrl = btnKeys[54]
  ctrl.classList.add ('ctrl')
  //
  document.onkeydown = function(event){
    console.log(event)
  }

  for(let i = 0; i < btnKeys.length; i++){
btnKeys[i].setAttribute('keyname', btnKeys[i].innerText);
btnKeys[i].setAttribute('lowerCaseName', btnKeys[i].innerText.toLowerCase());
  }
  window.addEventListener('keydown', function(e){
    for(let i = 0; i < btnKeys.length; i++){
if(e.key == btnKeys[i].getAttribute('keyname') || e.key == btnKeys[i].getAttribute('lowerCaseName'))
console.log(btnKeys[i])
    }
  })
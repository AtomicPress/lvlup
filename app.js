'use strict'
const body = document.querySelector('body');
body.offsetWidth  >= 600 ? document.querySelector('.logo-i').querySelector('img').src=  `https://crushingit.tech/hackathon-assets/shopify-icon-desktop.svg` :  document.querySelector('.logo-i').querySelector('img').src= `https://crushingit.tech/hackathon-assets/shopify-icon.svg`;
window.addEventListener('resize', function(e) {
if(body.offsetWidth >= 600){
 document.querySelector('.logo-i').querySelector('img').src=  `https://crushingit.tech/hackathon-assets/shopify-icon-desktop.svg`
}
else{
 document.querySelector('.logo-i').querySelector('img').src= `https://crushingit.tech/hackathon-assets/shopify-icon.svg`;
}
});
const header = document.querySelector('header'),
    notifBtn = header.querySelector('.notifbtn'),
    notification = header.querySelector('.notification'),
    userDiv  = header.querySelector('.userdiv'),
    panel = header.querySelector('.panel'),
    logoDiv = header.querySelector('.logo-div'),
    usbtn = userDiv.querySelector('button'),
    setupGuide = document.querySelector('.setupGuide'),
    togDropBtn = setupGuide.querySelector('.setupGuidi'),
    dropDownDiv =  setupGuide.querySelector('.dropdownDiv'),
    allDropDownDivs = dropDownDiv.querySelectorAll('.dropdownsDiv'),
    allCheckbox = document.querySelectorAll('input[type=checkbox]'),
    progTxt = setupGuide.querySelector('h6').querySelector('span'),
    progress = setupGuide.querySelector('progress'),
    hint = document.querySelector('.hint'),
    closeHint =hint.querySelector('.clsbtn'),
    sltPlBtn = hint.querySelector('.hintbtn');
let curEl, checked = 0;
notifBtn.addEventListener('click', function(){
    curEl ? curEl.ariaHidden = true :  '';
    this.classList.toggle('active');
    userDiv.classList.remove('active')
    this.classList.contains('active') ? notification.ariaHidden = false : notification.ariaHidden = true
    curEl =  notification
})
userDiv.addEventListener('click', function(){
    curEl ? curEl.ariaHidden = true :  '';
    this.classList.toggle('active');
    notifBtn.classList.remove('active')
    this.classList.contains('active') ? panel.ariaHidden = false : panel.ariaHidden = true;
    curEl = panel
})
usbtn.addEventListener('click', function(e){
    curEl ? curEl.ariaHidden = true :  '';
    userDiv.classList.toggle('active')
    notifBtn.classList.remove('active')
    userDiv.classList.contains('active') ? panel.ariaHidden = false : panel.ariaHidden = true;
    curEl = panel
    e.stopPropagation()
})
togDropBtn.addEventListener('click', function(){
    !togDropBtn.ariaPressed ? togDropBtn.ariaPressed = true : togDropBtn.ariaPressed = '';
    togDropBtn.getAttribute('aria-pressed') ? dropDownDiv.ariaHidden = false : dropDownDiv.ariaHidden = true;
})
dropDownDiv.addEventListener('click', function(e){
    if(e.target.closest('.dropdownsDiv')){
        let el = e.target.closest('.dropdownsDiv'),
           eldr = el.querySelector('.dropdowncontent');
            el.classList.add('active');
            eldr.ariaHidden = false;
        allDropDownDivs.forEach(dr=>{
            if(dr != el){
                dr.classList.remove('active')
            dr.querySelector('.dropdowncontent').ariaHidden = true;
            }
        })
    }
})
function progres(){
    checked = 0;
    allCheckbox.forEach(ch=>{
        if(ch.checked){
            ++checked
        }
    })
    progTxt.textContent = checked;
    progress.value =  checked;
}
allCheckbox.forEach(checks=>{
    let parEl = checks.parentElement.parentElement.parentElement,
    nextEl =parEl.nextElementSibling,
    eldr = parEl.querySelector('.dropdowncontent');
    checks.addEventListener('click', function(){
        checks.style.opacity = 0
    });
    checks.addEventListener('change', function(){
        checks.style.opacity = 0
        checks.nextElementSibling.classList.add('spin')
        setTimeout(() => {
            checks.nextElementSibling.classList.remove('spin');
            checks.style.opacity = 1
            progres()
            if(checks.checked){
            parEl.classList.remove('active');
            nextEl?.classList.add('active');
            eldr.ariaHidden = true;
            nextEl  ? nextEl.querySelector('.dropdowncontent').ariaHidden = false : '';
        }  
        }, 1200);
    })
})
logoDiv.addEventListener('click', function(){
    window.location.href = 'https://shopify.com'
})
sltPlBtn.addEventListener('click', function(){
    location.href = 'https://shopify.com/pricing'
})
panel.addEventListener('click', function(e){
    if(e.target.closest('ul')){
        window.location.href = 'https://admin.shopify.com'
    }
})
closeHint.addEventListener('click', function(){
    hint.remove('')
})
window.addEventListener('keyup', function(e){
    if(e.key === 'Escape'){
    curEl ? curEl.ariaHidden = true :  '';
    }
    // if(togDropBtn.onfocus()){
    //     console.log('focused')
    // }
})
'use strict'

document.querySelector('.teg-ul').addEventListener('click', (e)=> {
    if(e.target.closest('.btn-show')) { 
            e.target.style.transform = 'rotate(90deg)';
            e.target.nextElementSibling.style.display = 'block';
            console.log(e.target.nextElementSibling);
    }
});


//  tepaga knopga
const header = document.querySelector('.header');
const navUp = document.querySelector('#nav-up');

const sticky1 = function(entries) {
  const[entry]= entries;

  console.log('enty: ', entry.isIntersecting);

  if(entry.isIntersecting) {
    navUp.classList.remove('nav-up-block');
  }else {
    navUp.classList.add('nav-up-block');
  }
};

const navHeight2 = navUp.getBoundingClientRect().height;
const headerObserver1  = new IntersectionObserver(sticky1, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight2}px`,
});

//  Sign In
const signBtn = document.querySelector('#Sign');
const signUp = document.querySelector('.submit-my');
const closeBtn = document.querySelector('.login-x');
const closeBtn1 = document.querySelector('.close-x');

signBtn.addEventListener('click', ()=> {
    const password1 = document.querySelector('#password1');
    const password2 = document.querySelector('#password2');
    const SigInInput = document.querySelector('#sign_in_login');
    let email = SigInInput.value;
    function checkEmail(email) {
    if (email.indexOf("@") !== -1 && email.indexOf(".") !== -1 && password1.value === password2.value && password1.value > 5) {
        if( email.indexOf(".") > email.indexOf("@") ) {
            // console.log('bor')
            location.href = "../index.html";
        } else {
            // console.log('yo`q');
        }
    } else {
        // console.log('yo`q');
        alert('Login yoki parol xato kiritildi ! Qaytadan urinib ko\'ring !')
    }
}

checkEmail(email);

});

signUp.addEventListener('click', ()=> {
    const password1 = document.querySelector('#password1');
    const password2 = document.querySelector('#password2');
    const SigInInput = document.querySelector('#sign_in_login');
    let email = SigInInput.value;
    function checkEmail(email) {
    if (email.indexOf("@") !== -1 && email.indexOf(".") !== -1 && password1.value === password2.value && password1.value > 5) {
        if( email.indexOf(".") > email.indexOf("@") ) {
            // console.log('bor')
            location.href = "../index.html";
        } else {
            // console.log('yo`q');
        }
    } else {
        // console.log('yo`q');
        alert('Login yoki parol xato kiritildi ! Qaytadan urinib ko\'ring !')
    }
}

checkEmail(email);

});


const signIn = document.querySelector('.show-login');
const signInBtn = document.querySelector('.sign-up');

signInBtn.addEventListener('click', ()=> {
    signIn.classList.add('login-block');
    closeBtn1.addEventListener('click', ()=> {
    signIn.classList.remove('login-block');
    })
    
});


const logInBtn = document.querySelector('.sign-in');
const logIn = document.querySelector('.show-login-new');

logInBtn.addEventListener('click', ()=> {
    logIn.classList.add('login-block');
    closeBtn.addEventListener('click', ()=> {
        logIn.classList.remove('login-block');
    });
})


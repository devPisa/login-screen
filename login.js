var btnSignin = document.querySelector('#btn-singin');
var btnSignup = document.querySelector('#btn-singup');
var formSignin = document.querySelector('#sing-in');
var formSignup = document.querySelector('#sing-up');
var btnColor = document.querySelector('.btn-color');

btnSignin.addEventListener('click', () => {
    formSignin.style.left = "25px";
    formSignup.style.left = "450px";
    btnColor.style.left = "0px";
});

btnSignup.addEventListener('click', () => {
    formSignin.style.left = "-450px";
    formSignup.style.left = "25px";
    btnColor.style.left = "110px";
});

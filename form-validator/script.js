let username = document.getElementById('username'),
email = document.getElementById('email'),
password = document.getElementById('password'),
pwd_check = document.getElementById('pwd_check'),
info = document.querySelectorAll('small');

username.addEventListener('blur',function(){
let userReg = /^\w{6,12}$/;
if(username.value === ''){
    info[0].innerText = "Please enter username!"
    info[0].className = 'error';
}else {
    if(!userReg.exec(username.value)){
        info[0].innerText = "Username format is not correct!"
        info[0].className = 'error';
    }else{
        info[0].innerText = "Username is correct!"
        info[0].className = 'correct';
    }
}
});

email.addEventListener('blur', function(){
let emailReg = /^\w+@\w+\.[a-zA-Z_]{2,4}$/;
if(email.value === ''){
    info[1].innerText = "Please enter email!"
    info[1].className = 'error';
}else {
    if(!emailReg.exec(email.value)){
        info[1].innerText = "Email format is not correct!"
        info[1].className = 'error';
    }else{
        info[1].innerText = "Email is correct!"
        info[1].className = 'correct';
    }
}
});

password.addEventListener('blur',function(){
let pwdReg = /^\w{6,12}$/;
if(password.value === ''){
    info[2].innerText = "Please enter password!"
    info[2].className = 'error';
}else {
    if(!pwdReg.exec(password.value)){
        info[2].innerText = "Password format is not correct!"
        info[2].className = 'error';
    }else{
        info[2].innerText = "Password is correct!"
        info[2].className = 'correct';
    }
}
});

pwd_check.addEventListener('blur',function(){
if(pwd_check.value === ''){
    info[3].innerText = "Please enter password!"
    info[3].className = 'error';
}else{
    if(pwd_check.value === password.value){
        info[3].innerText = "Password is correct!"
        info[3].className = 'correct';
    }else{
        info[3].innerText = "Password is not the same!"
        info[3].className = 'error';
    }
}
});
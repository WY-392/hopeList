let registerBtn = document.querySelector('.regsiterBtn');


// 注册并且保存本地浏览器

// 获取电话号码Dom
let usernameBtn = document.querySelector('.phonenum');
// 获取第一次输入的密码Dom
let userpsdBtn = document.querySelector('.userpsd');
// 获取第二次输入的密码Dom
let reuserpsdBtn = document.querySelector('.userpsd2');

//输入的验证码
let verifyIptDom = document.querySelector('.verify input')
let userInfo = JSON.parse(localStorage.getItem('userInfo')) || [];
registerBtn.addEventListener('click', function () {
  addInfo();
  verify();
})
function addInfo() {
  flag = true
  if (usernameBtn.value.length != 11 || usernameBtn.value[0] != 1) {
    flag = false
    alert('电话号码不正确');
    usernameBtn.value = '';
  }
  if (userpsdBtn.value.trim() == reuserpsdBtn.value.trim()) {
   flag == true
  } else if (userpsdBtn.value.trim() != reuserpsdBtn.value.trim()) {
    flag = false
    alert('两次密码不一致');
    reuserpsdBtn.value = '';
    userpsdBtn.value = '';
  }
  if (verifyIptDom.value.trim().toUpperCase() != verifyDom.textContent.trim().toUpperCase()) {
    flag = false
    verifyIptDom.innerHTML = '';
    alert('验证码不正确');
  }
  for (let i = 0; i < userInfo.length; i++) {
    if (userInfo[i].phone == usernameBtn.value) {
      alert('账号已注册')
      verify()
      flag = flase
      break;
    }
  }
  if (flag == true) {
     userInfo.push({
      phone: usernameBtn.value,
      password: userpsdBtn.value
    })
    location.href = './login.html'
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
  }
}
verify();
let verifyDom = document.querySelector('.verifycontent');
verifyDom.addEventListener('click', function () {
  verify();
})
function verify() {
  let verifyDom = document.querySelector('.verifycontent');
  let verifyArr = [];
  let Arr = `0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPLKJHFDSAZXCVBNM`;
  for (let i = 0; i < 4; i++) {
    let index = Math.floor(Math.random() * Arr.length);
    verifyArr[i] = Arr[index];
  }
  verifyDom.innerHTML = verifyArr.join('');
}
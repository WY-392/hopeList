let loginBtnDom=document.querySelector('.loginBth');
// 登录时输入的电话号码
let usernameDom=document.querySelector('.username')
// 登录时输入的密码
let userpsdDom=document.querySelector('.userpsd')

let checkboxDom=document.querySelector('.loginAgreement input')
let registerBtnDom=document.querySelector('.registerBtn');
registerBtnDom.addEventListener('click',function(){
    location.href='./register.html'
})
let username=JSON.parse(localStorage.getItem('userInfo'))
let  flag=false
loginuser=[]
loginBtnDom.addEventListener('click',function(){
    for(let i=0;i<username.length;i++){
          if(usernameDom.value.trim()==username[i].phone.trim()){
           if(userpsdDom.value.trim()==username[i].password.trim()){
loginuser=[{
    username:usernameDom.value
}]
localStorage.setItem('loginuser',JSON.stringify(loginuser));
             flag=true
        }
        }else{
            continue
        }
        if(flag==true){
            break
        }
    }
    if(checkboxDom.checked==false){
   alert('请同意服务协议');
    }else{
  if(flag==true){
        location.href='./index.html'
    }else if(flag==false){
        alert('账号或密码错误');
        userpsdDom.value=''
    }
    }
  
  
})


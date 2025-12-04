let hopeDom = document.querySelector('.listname');
let tableDom = document.querySelector('table')
let addhopebtnDom = document.querySelector('.addhopeContainerNone');
let addhopeDom = document.querySelector('.addhopeNone');
let dataDom = document.querySelector('.selectdata input');
let addBtnDom = document.querySelector('.add');
let contentDom = document.querySelector('.content-container input');
let tbodyDom = document.querySelector('tbody');
let exitBtn = document.querySelector('.exit');
let welcomeDom=document.querySelector('.welcome span')


let dataItem = JSON.parse(localStorage.getItem('hopelist')) || [];
let loginuser = JSON.parse(localStorage.getItem('loginuser')) || []

hopeDom.addEventListener('click', function () {
    addhopeDom.classList.remove('addhope');//取消添加列表红色
    addhopeDom.className = "addhopeNone";//添加希望列表红色
    hopeDom.className = 'listname';//显示希望列表红色
    tableDom.className = 'tableshow ';//显示表格
    addhopebtnDom.className = 'addhopeContainerNone';
})

addhopeDom.addEventListener('click', function () {
 
    if(loginuser[0].username==''){
        location.href='./login.html'
    }else{
           hopeDom.classList.remove('listname');
    hopeDom.className = 'listnameNone';
    addhopeDom.className = "addhope";
    tableDom.className = 'tablenone';
    addhopebtnDom.classList.remove('addhopeContainerNone');
    }
})



welcomeDom.innerHTML=loginuser[0].username;
if(loginuser[0].username==''){
   welcomeDom.innerHTML='未知用户' 
}
addBtnDom.addEventListener('click', function () {
    dataItem.push({
        username: loginuser[0].username,
        data: dataDom.value,
        content: contentDom.value
    })
    contentDom.value = '';
    localStorage.setItem('hopelist', JSON.stringify(dataItem));
    console.log(JSON.parse(localStorage.getItem('hopelist')));
    datafreach();
})


function datafreach() {
    for (let i = 0; i < dataItem.length; i++) {
        if (loginuser[0].username == dataItem[i].username) {
            tbodyDom.innerHTML = '';
            for (let i = dataItem.length - 1; i >= 0; i--) {
                let tr = document.createElement('tr');
                tr.innerHTML = `<td>${dataItem[i].data}</td>
                <td>${dataItem[i].content}</td>
                <td><div class="del">删除</div></td>`
                tr.querySelector('.del').addEventListener('click', () => {
                    tr.remove();
                    dataItem.splice(i, 1)
                    localStorage.setItem('hopelist', JSON.stringify(dataItem));
                });
                tbodyDom.appendChild(tr);
            }
        }
    }
}

exitBtn.addEventListener('click', function () {
    loginuser[0].username = [];
    localStorage.setItem('loginuser',JSON.stringify(loginuser));
    location.href = './login.html'
})
datafreach();
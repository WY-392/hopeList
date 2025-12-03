let hopeDom = document.querySelector('.listname');
let tableDom = document.querySelector('table')
let addhopebtnDom = document.querySelector('.addhopeContainerNone');
let addhopeDom = document.querySelector('.addhopeNone');
let dataDom = document.querySelector('.selectdata input');
let addBtnDom = document.querySelector('.add');
let contentDom = document.querySelector('.content-container input');
let tbodyDom = document.querySelector('tbody');

hopeDom.addEventListener('click', function () {
    addhopeDom.classList.remove('addhope');//取消添加列表红色
    addhopeDom.className = "addhopeNone";//添加希望列表红色
    hopeDom.className = 'listname';//显示希望列表红色
    tableDom.className = 'tableshow ';//显示表格
    addhopebtnDom.className = 'addhopeContainerNone';
})

addhopeDom.addEventListener('click', function () {
    hopeDom.classList.remove('listname');
    hopeDom.className = 'listnameNone';
    addhopeDom.className = "addhope";
    tableDom.className = 'tablenone';
    addhopebtnDom.classList.remove('addhopeContainerNone');
})


let dataItem = JSON.parse(localStorage.getItem('hopelist')) || [];
addBtnDom.addEventListener('click', function () {
    dataItem.push({
        data: dataDom.value,
        content: contentDom.value
    })
    contentDom.value = '';
    localStorage.setItem('hopelist', JSON.stringify(dataItem));
    console.log(JSON.parse(localStorage.getItem('hopelist')));
    datafreach();
})


function datafreach() {
    tbodyDom.innerHTML = '';
    for (let i = 0; i < dataItem.length; i++) {
        let tr = document.createElement('tr');
        tr.innerHTML = `<td>${dataItem[i].data}</td>
                <td>${dataItem[i].content}</td>
                <td><div class="del">删除</div></td>`
        tr.querySelector('.del').addEventListener('click', () => {
           tr.remove();
           dataItem.splice(i,1)
           localStorage.setItem('hopelist',JSON.stringify(dataItem));
        });
        tbodyDom.appendChild(tr);
    }
}
datafreach();
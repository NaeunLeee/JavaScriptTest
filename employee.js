// employee.js
// json -> obj : JSON.parse()
let json = `[{"id":1,"first_name":"Prentice","last_name":"Shortall","email":"pshortall0@woothemes.com","gender":"Agender"},
{"id":2,"first_name":"Doroteya","last_name":"Odegaard","email":"dodegaard1@va.gov","gender":"Genderfluid"},
{"id":3,"first_name":"Paola","last_name":"Stronach","email":"pstronach2@edublogs.org","gender":"Female"},
{"id":4,"first_name":"Whitman","last_name":"MacAree","email":"wmacaree3@vimeo.com","gender":"Male"},
{"id":5,"first_name":"Robbert","last_name":"Morhall","email":"rmorhall4@wp.com","gender":"Non-binary"},
{"id":6,"first_name":"Roman","last_name":"Gimlet","email":"rgimlet5@hostgator.com","gender":"Non-binary"},
{"id":7,"first_name":"Zachery","last_name":"Glasheen","email":"zglasheen6@themeforest.net","gender":"Bigender"},
{"id":8,"first_name":"Cazzie","last_name":"Van Dijk","email":"cvandijk7@posterous.com","gender":"Agender"},
{"id":9,"first_name":"Damon","last_name":"Durman","email":"ddurman8@reddit.com","gender":"Genderfluid"},
{"id":10,"first_name":"Doy","last_name":"L'Episcopi","email":"dlepiscopi9@wp.com","gender":"Bigender"}]`;

let data = JSON.parse(json);
console.log(data); // [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]

// 방법 1

// let all = '<table border="1" cellpadding="10" rules="all" align="center">';
// all += '<tr bgcolor="lightblue"><td align="center">번호</td><td align="center">이름</td><td align="center">성</td><td align="center">이메일</td><td align="center">성</td>';
// for (let row of data) {
//     all += '<tr>';
//     for (let field in row) {
//         all += '<td align="center">' + row[field] + '</td>';
//     }
//     all += '</tr>';
// }
// all += '</table>';
// document.write(all);



// 방법 2

let tableTag = document.createElement('table');
tableTag.setAttribute('border', '1');
tableTag.setAttribute('cellpadding', '10');
tableTag.setAttribute('rules', 'all');
tableTag.setAttribute('align', 'center');



createHeader2();

for (let row of data) {
    let trTag = document.createElement('tr');
    trTag.setAttribute('id', row.id);
    trTag.onmouseover = changeColor;      // click event가 발생할 때 실행할 function이름
    trTag.onmouseout = originColor;
    trTag.onclick = showDetail;

    for (let field in row) {    
        let tdTag = document.createElement('td');
        tdTag.setAttribute('align', 'center');
        let text = document.createTextNode(row[field]);
        tdTag.appendChild(text);
        trTag.appendChild(tdTag);
    }
    // <td><button>삭제</button></td> 버튼 추가
    let btn = document.createElement('button');
    btn.onclick = deleteRow;
    let text = document.createTextNode('삭제');
    btn.appendChild(text);
    let tdTag = document.createElement('td');
    tdTag.appendChild(btn);
    trTag.appendChild(tdTag);

    tableTag.appendChild(trTag);
}
document.getElementById('show').appendChild(tableTag);



function createHeader2() {
    let titles = ['사원번호', '이름', '성', '이메일', '성별', '삭제'];
    let tr = document.createElement('tr');
    for (let field of titles) { // 배열일 경우에는 of
        let td = document.createElement('th');
        td.setAttribute('bgcolor', 'lightblue')
        let text = document.createTextNode(field);
        td.appendChild(text);
        tr.appendChild(td);
    }
    tableTag.appendChild(tr);
}

function showDetail() {

    // 방법 1

    // let id = this.childNodes[0].childNodes[0].nodeValue;
    // let fn = this.childNodes[1].childNodes[0].nodeValue;
    // let ln = this.childNodes[2].childNodes[0].nodeValue;
    // let em = this.childNodes[3].childNodes[0].nodeValue;
    // let ge = this.childNodes[4].childNodes[0].nodeValue;

    // document.getElementById('eid').value = id;
    // document.getElementById('first_name').value = fn;
    // document.getElementById('last_name').value = ln;
    // document.getElementById('email').value = em;
    // document.getElementById('gender').value = ge;


    // 방법 2
    // alert('detail');
    let inputs = document.getElementsByTagName('input'); // document.querySelectorAll();
   
    for (let i=0; i<inputs.length; i++) {
        inputs[i].value = this.childNodes[i].childNodes[0].nodeValue;
    }



}

function changeColor() {
    this.style.backgroundColor = 'lightpink';
}

function originColor() {
    this.style.backgroundColor = '';
}

function deleteRow(e) {
    // alert('delete');
    e.stopPropagation(); // 이벤트 전파 차단 (삭제만 되고 화면출력은 막음)
    let id = this.parentNode.parentNode.childNodes[0].childNodes[0].nodeValue;
    this.parentNode.parentNode.remove();

    for (let i=0; i<data.length; i++) {
        if (data[i].id == parseInt(id)) {
            data.splice(i, 1); // delete data[i];
            break;
        }
    }
    console.log(data);
}

function addRow() {
    let id = document.getElementById('eid').value;
    let first_name = document.getElementById('first_name').value;
    let last_name = document.getElementById('last_name').value;
    let email = document.getElementById('email').value;
    let gender = document.getElementById('gender').value;
    let ary = [id, first_name, last_name, email, gender];

    let trTag = document.createElement('tr');
    trTag.onmouseover = changeColor;     
    trTag.onmouseout = originColor;

    for (let f of ary) {
        let tdTag = document.createElement('td');
        let text = document.createTextNode(f);
        tdTag.appendChild(text);
        tdTag.setAttribute('align', 'center')
        trTag.appendChild(tdTag);
    }
    let btn = document.createElement('button');
    btn.onclick = deleteRow;
    let text = document.createTextNode('삭제');
    btn.appendChild(text);
    let tdTag = document.createElement('td');
    tdTag.appendChild(btn);
    trTag.appendChild(tdTag);

    document.getElementsByTagName('table')[0].appendChild(trTag);
}

function modRow() {
    let id = document.getElementById('eid').value;  // Id항목의 id의 value속성

    let findTr = document.getElementById(id);
    findTr.childNodes[1].childNodes[0].nodeValue = document.getElementById('first_name').value;
    findTr.childNodes[2].childNodes[0].nodeValue = document.getElementById('last_name').value;
    findTr.childNodes[3].childNodes[0].nodeValue = document.getElementById('email').value;
    findTr.childNodes[4].childNodes[0].nodeValue = document.getElementById('gender').value;
}


function createHeader() {
    let row = data[0];
    let tr = document.createElement('tr');
    for (let field in row) {
        let td = document.createElement('th');
        let text = document.createTextNode(field);
        td.appendChild(text);
        tr.appendChild(td);
    }
    tableTag.appendChild(tr);
}


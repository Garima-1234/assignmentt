const name=localStorage.getItem('namehh');
const mail=localStorage.getItem('mailhh');
const pass=localStorage.getItem('passhh');
const age=localStorage.getItem('agehh');
const city=localStorage.getItem('cityhh');
var tr=document.createElement('tr');
var td1=tr.appendChild(document.createElement('td'));
var td2=tr.appendChild(document.createElement('td'));
var td3=tr.appendChild(document.createElement('td'));
var td4=tr.appendChild(document.createElement('td'));
var td5=tr.appendChild(document.createElement('td'));
td1.innerHTML=name;
td2.innerHTML=mail;
td3.innerHTML=pass;
td4.innerHTML=age;
td5.innerHTML=city;
document.getElementById('tb1').appendChild(tr);
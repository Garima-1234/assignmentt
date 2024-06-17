const form=document.getElementById('form');
const name=document.getElementById('id');
const mail=document.getElementById('mail');
const pass=document.getElementById('pass');
const age=document.getElementById('age');
const city=document.getElementById('city');

form.addEventListener('submit',function(e){
    e.preventDefault();
    const nameh=name.value;
    const mailh=mail.value;
    const passh=pass.value;
    const ageh=age.value;
    const cityh=city.value;

    localStorage.setItem('namehh',nameh);
    localStorage.setItem('mailhh',mailh);
    localStorage.setItem('passhh',passh);
    localStorage.setItem('agehh',ageh);
    localStorage.setItem('cityhh',cityh);

    window.location.href='2ndpage.html';
})
// var addinfo=document.getElementsByClassName('info');
// addinfo.innerHTML='<a href=\"http:llexample.org\">'+itemContent+'</a>';
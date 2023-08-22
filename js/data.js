renderUser();
async function renderUser() {
    let url = 'student.json';
    let res = await fetch(url);
    let users = await res.json();
    let html = '';
    users.forEach(user =>
         {
        let htmlSegment = `<div class="box">
                           <h1> ${user.name} </h1>
                           <img src="${user.stuimg}" width="200" height="200"
                           <h2>  ${user.tokenno} </h2>
                           <h2> ${user.rate} </h2>
                           </div>`;
              html += htmlSegment;              
    });
    document.getElementById('container').innerHTML=html;
}
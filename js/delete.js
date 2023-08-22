document.getElementById('mybtn').addEventListener("click",DataDel);
function DataDel()
{
    let myid=document.getElementById('bid').value;
    let url=`http://localhost:3000/Books/${myid}`;
    fetch(url,{
        method: 'DELETE'
    } ).then(()=>alert('record Deleted'));
}
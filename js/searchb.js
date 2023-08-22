document.getElementById('bookid').addEventListener("keyup",DataDisplay);
function DataDisplay()
{
    let mybook=document.getElementById('bookid').value;
    let url=" http://localhost:3000/Books";
async function MyData()
{
    let filOb=await fetch(url);
    let MyData=await filOb.json();
    let html=`<table border="1" align="center" width="100%" height="100%" bgcolor="lightblue">
    <tr>
    <th> id </th>
    <th> Book ID </th>
    <th> Book name </th>
    <th> Author </th>
    <th> Price </th>
    </tr>`;
    MyData.map((key)=>{
        var mystr=key.Book_name;
        if (mystr.includes(mybook))
        {
        html+=`<tr>
        <td> ${key.id}</td>
                      <td> ${key.Book_Id} </td>
                      <td> ${key.Book_name}</td>
                      <td> ${key.Author_name}</td>
                      <td> ${key.price}</td>
                       </tr>`;
        }
    });
    html+="</table>";
    document.getElementById("demo").innerHTML=html;
}

    
   MyData();
}
   

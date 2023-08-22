document.getElementById('mybtn').addEventListener("click",MyData);
async function MyData()
{
    let myTable=`<table border="1" align="center" width="100%" height="100%" bgcolor="lightgreen">
    <tr>
    <td> id </td>;
    <td> Book ID </td>;
    <td> Book name </td>;
    <td> Author </td>;
    <td> Price </td>;
    </tr>`;
    let cnt=0;
    let bid=document.getElementById("bookid").value;
    let url=` http://localhost:3000/Books?Book_Id=${bid}`;
    let filOb=await fetch(url);
    let MyData=await filOb.json();
    MyData.map((key)=>{
        myTable+=`<tr>
        <td> ${key.id}</td>
                      <td> ${key.Book_Id} </td>
                      <td> ${key.Book_name}</td>
                      <td> ${key.Author_name}</td>
                      <td> ${key.price}</td>
                       </tr>`;
                       cnt++;
    });
    myTable+=`</table>`;
    if(cnt>=1)
    {
        document.getElementById('demo').innerHTML=myTable;
    }  
    else
    {
        document.getElementById('demo').innerHTML="<font color='red'> book not found </font>"
    }
}
   

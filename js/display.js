
async function DataDisplay()
{
    let myTable=`<table border="2" align="center" width="80%" height="80%"  bgcolor="white" font color="white">
    <tr>
    <td> id</td>;
    <td> Book_ID </td>;
    <td> Book_name </td>;
    <td> Author </td>;
    <td> price </td>;
    </tr>`;
    let url=" http://localhost:3000/Books";
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
    });
    myTable+=`</table>`;
    document.getElementById('demo').innerHTML=myTable;
}
DataDisplay();



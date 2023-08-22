

async function DataDisplay()
{
    let myTable=`<table border="2" align="center" width="100%" height="100%" bgcolor="white" textcolor="black">
    <tr>
    <td> id </td>;
    <td> Book ID </td>;
    <td> Book Name </td>;
    <td> Author </td>;
    <td> price </td>;
    <td> action </td>;
    </tr>`;
    let url=" http://localhost:3000/Books";
    let filOb=await fetch(url);
    let MyData=await filOb.json();
    MyData.map((key)=>{
        var myid=key.id;

        myTable+=`<tr>
        <td> ${key.id} </td>
                      <td> ${key.Book_Id} </td>
                      <td> ${key.Book_name}</td>
                      <td> ${key.Author_name}</td>
                      <td> ${key.price}</td>
                      <td> 
                      <a href="#"onclick="DataEdit(${myid})">
                      <i class="fa-sharp fa-solid fa-xmark"  font-size: 22px;></i></a>
                      

                     <a href='#'onclick="DataDelete(${myid})" >
                     <i class="fa-sharp fa-solid fa-trash"></i></a>
                      </td>

                       </tr>`;
    });
    myTable+=`</table>`;
    document.getElementById('demo').innerHTML=myTable;
}
DataDisplay();

function DataDelete(myval)
{
    let  Url=`http://localhost:3000/Books/${myval}`;
    fetch(Url,{
        method: 'DELETE'

    }).then(()=>alert("Record Succefully deleted"));
    DataDisplay();
}


    async function DataEdit(myval1)
    {
        let myFrm="";
        let url1=`http://localhost:3000/Books/${myval1}`;
        let filOb1= await fetch(url1);
        let MyData1=await filOb1.json();
        myFrm=`
        <br><br>
        Enter Book ID:<input type"text" value="${MyData1.Book_Id}" id="b1id"><br><br>
        Enter Book Name:<input type"text" value="${MyData1.Book_name}" id="b1name"><br><br>
        Enter Book Author:<input type"text" value="${MyData1.Author_name}" id="b1aut"><br><br>
        Enter Price:<input type"text" value="${MyData1.price}" id="b1price"><br><br>
        <button type="button" onclick="EditSave(${MyData1.id})">Update Record </button>
        `;
        document.getElementById("myfrm").innerHTML=myFrm;
    }
    function EditSave(myval)
     {
         let bid=document.getElementById("b1id").value;
         let bname=document.getElementById("b1name").value;
         let baut=document.getElementById("b1aut").value;
         let bprice=document.getElementById("b1price").value;
         let url=`http://localhost:3000/Books/${myval}`;
         fetch(url,{
             method: 'PATCH',
             body: JSON.stringify({
                 Book_Id: bid,
                 Book_name: bname,
                 Author_name: baut,
                 price: bprice
             }),
          headers:{
             'content-type': 'application/json; charset=UTF-8',
          },
         })
         .then((response) => response.json())
         .then((json) =>{
             alert("Data Succesfully Updated")
             DataDisplay();
         });

        

     }

    
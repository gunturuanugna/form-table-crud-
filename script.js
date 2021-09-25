var selectedRow=null;
function add(){
  var data = read();
  selectedRow? updateRecord(data)
  :insertRecord(data);
  resetForm()
}
function read(){
  var formData={};
  formData["fname"]=document.getElementById("fname").value;
  formData["lname"]=document.getElementById("lname").value;
  formData["salary"]=document.getElementById("salary").value;
  return formData;  
}
function insertRecord(data){
  var table=document.getElementById("employeelist").getElementsByTagName("tbody")[0];
  var row=table.insertRow(table.length);
  var cell1=row.insertCell(0);
  cell1.innerHTML=data.fname;
    var cell2=row.insertCell(1);
  cell2.innerHTML=data.lname;  
  var cell3=row.insertCell(2);
  cell3.innerHTML=data.salary;
  var cell4=row.insertCell(3);
  cell4.innerHTML=` <a onclick="onEdit(this)">Edit &nbsp</a> /
                    <a onclick="onDelete(this)"> &nbspDelete</a>`;
  cell4.setAttribute('id', 'edit');
}
function resetForm(){
  document.getElementById("lname").value="";
  document.getElementById("fname").value="";
  document.getElementById("salary").value="";
}
function onEdit(td){
  selectedRow=td.parentElement.parentElement;
  document.getElementById("lname").value=selectedRow.cells[0].innerHTML;
  document.getElementById("fname").value=selectedRow.cells[1].innerHTML;
  document.getElementById("salary").value=selectedRow.cells[2].innerHTML;
}
function updateRecord(data){
   selectedRow.cells[0].innerHTML=data.fname;
   selectedRow.cells[1].innerHTML=data.lname;
  selectedRow.cells[2].innerHTML=data.salary;
}
function onDelete(td){
   selectedRow=td.parentElement.parentElement;
  selectedCell=selectedRow.cells[0].innerHTML;
  if(confirm("Are you sure to delete "+ selectedCell+"'s record?")){
    document.getElementById("employeelist").deleteRow(selectedRow.rowIndex);
  }
  
}

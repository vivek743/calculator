let displayvalue='';
document.querySelector('#display').value=displayvalue;
function appendToDisplay(value){
  displayvalue+=value;
  document.querySelector('#display').value=displayvalue;
}
function clearData(){
  displayvalue='';
  document.querySelector('#display').value=displayvalue;
}
function displayResult(){
  try{
  var result = eval(displayvalue);
  document.querySelector('#display').value=result;
  
  }
  catch{
    displayvalue='error';
    document.querySelector('#display').value=displayvalue;
  }

}

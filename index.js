function display() {
   
   if(document.myform.Name.value == ""){
      alert("This field cannot be empty");
      document.myform.Name.focus();
      return false;
   }
   return (true);

}
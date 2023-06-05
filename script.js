document.getElementById("submitButton").addEventListener("click", function(event) {
  event.preventDefault(); 
  
  document.getElementById("fname").value = "";
  document.getElementById("lname").value = "";
  document.getElementById("Rumstyp").selectedIndex = 0;
  document.getElementById("subject").value = "";
});

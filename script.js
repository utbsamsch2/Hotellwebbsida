document.getElementById("submitButton").addEventListener("click", function(event) {
  event.preventDefault(); 
  
  document.getElementById("fname").value = "";
  document.getElementById("lname").value = "";
  document.getElementById("subject").value = "";
  document.getElementById("Rumstyp").selectedIndex = 0;
});

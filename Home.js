function validateForm() {
    let x = document.forms["login"]["username"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }
  
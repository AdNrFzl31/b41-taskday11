function submitdata() {
  let name = document.getElementById("input-name").value;
  let email = document.getElementById("input-email").value;
  let phome = document.getElementById("input-phone").value;
  let subject = document.getElementById("subject").value;
  let message = document.getElementById("message").value;

  console.log(name)
  console.log(email)
  console.log(phome)
  console.log(subject)
  console.log(message)


  let emailReceiver = "adenurfaizal31@gmail.com"
  location.href = "mailto:" +
      emailReceiver +
      "?subject=" +
      subject +
      "&body= Hallo nama saya " +
      name +
      ", %0D%0A " +
      message +
      ", %0D%0A silahkan kontak ke nomor " +
      phome;
}
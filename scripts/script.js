let commentForm = document.getElementById("commentForm");

commentForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let nama = document.getElementById("nama");
  let email = document.getElementById("email");
  let komentar = document.getElementById("komentar");

  if (nama.value == "" || email.value == "" || komentar.value == "") {
    alert("Pastikan anda mengisi ketiga fields!");
  } else {
    // perform operation with form input
    alert("Form berhasil terkirim!");
    console.log(
      `${nama.value} dengan email ${email.value} mengirim komentar ${komentar.value}`
    );

    nama.value = "";
    email.value = "";
    komentar.value = "";
  }
});
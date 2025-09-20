let commentForm = document.getElementById("commentForm");
let registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let nama = document.getElementById("nama").value;

  alert(`Terimakasi dan selamat datang ${nama}`);

  window.location.href = "index.html";
});

commentForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let nama = document.getElementById("nama");
  let email = document.getElementById("email");
  let komentar = document.getElementById("komentar");

  // ambil elemen error
  let namaError = document.getElementById("namaError");
  let emailError = document.getElementById("emailError");
  let komentarError = document.getElementById("komentarError");

  // reset pesan error
  namaError.textContent = "";
  emailError.textContent = "";
  komentarError.textContent = "";

  let valid = true;

  if (nama.value.trim() === "") {
    namaError.textContent = "Nama wajib diisi!";
    valid = false;
  }

  if (email.value.trim() === "") {
    emailError.textContent = "Email wajib diisi!";
    valid = false;
  }

  if (komentar.value.trim() === "") {
    komentarError.textContent = "Komentar tidak boleh kosong!";
    valid = false;
  }

  if (valid) {
    alert(`${nama.value} dengan email ${email.value} mengirim komentar: ${komentar.value}`);
    console.log(
      `${nama.value} dengan email ${email.value} mengirim komentar: ${komentar.value}`
    );

    // reset form
    nama.value = "";
    email.value = "";
    komentar.value = "";
  }
});

const token = localStorage.getItem("token");
if (token != null) {
  document.querySelector("#authentication-page").style.display = "none";
  document.querySelector("#main-page").style.display = "block";
}

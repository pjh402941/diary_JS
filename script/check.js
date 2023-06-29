//내용 받아오기
document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const var1 = params.get("var1");
  const var2 = params.get("var2");

  document.getElementById("date").innerHTML = var1;
  document.getElementById("content").innerHTML = var2;
});

//수정
function correctionContent() {
  const contentTextarea = document.getElementById("content");

  if (contentTextarea.getAttribute("readonly")) {
    contentTextarea.removeAttribute("readonly");
  }
  else{
    contentTextarea.setAttribute("readonly", "readonly");
  }
}
//삭제
function deleteContent(){
    document.getElementById("date").innerHTML = "";
  document.getElementById("content").value = "";
  window.location.href = "main.html";

}
//댓글수
document.getElementById("count").innerText = "댓글(" +2 +")";

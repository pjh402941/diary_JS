//오늘 날짜 받아오기
let today = new Date();

let year = today.getFullYear();
let month = today.getMonth() + 1;
let date = today.getDate();
let day = today.getDay();

function getTodayLabel(num) {
  var week = new Array("일", "월", "화", "수", "목", "금", "토");
  var todayLabel = week[num];

  return todayLabel;
}

document.getElementById("date").innerHTML =
  year + "년 " + month + "월 " + date + "일 ";

//일기 작성 페이지로 이동
function goToInputPage() {
  window.location.href = "input.html";
}

//리스트 탭으로 변경
function goToListPage() {
  window.location.href = "mainList.html";
}

//받아온 값으로 새로운 화이트박스 생성
let memos = JSON.parse(sessionStorage.getItem("memos"));
memos = memos ?? [];

document.addEventListener("DOMContentLoaded", function () {
  const elements = document.getElementById("whiteBoxArea");

  if (elements === null) {
    console.error("content-list element not found");
    return;
  }

  elements.innerHTML = ""; // 기존의 메모들을 초기화

  if (!memos || memos.length === 0) {
    console.log("No memos found");
    return;
  }

  for (let i = memos.length - 1; i >= 0; i--) {
    let whiteBox = document.createElement("div");
    whiteBox.classList.add("white-box");
    whiteBox.dataset.id = i; // 데이터셋에 id 속성 추가

    let box = document.createElement("div");
    box.classList.add("whiteBox");

    let date = document.createElement("div");
    date.textContent = memos[i].date;
    date.classList.add("boxDate");

    let line = document.createElement("div");
    line.classList.add("line");

    let content = document.createElement("div");
    content.setAttribute("id", "content" + (i + 1));
    content.textContent = memos[i].content;
    content.classList.add("whiteBoxContent");

    box.append(date, line, content);
    whiteBox.append(box);
    elements.append(whiteBox);
  }

  const whiteBoxes = document.querySelectorAll(".white-box");
  whiteBoxes.forEach(function (whiteBox) {
    whiteBox.addEventListener("click", onWhiteBoxClick);
  });
});

function onWhiteBoxClick() {
  const whiteBoxId = this.dataset.id;
  window.location.href = "/pages/check.html?id=" + whiteBoxId;
}

//로그아웃
function goToLoginPage() {
  window.location.href = "login.html";
}

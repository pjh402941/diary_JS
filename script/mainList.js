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

//타일 탭으로 변경
function goToTilePage() {
  window.location.href = "main.html";
}

//로컬스토리지에 저장된 내용 표시(화이트박스 추가)
document.addEventListener("DOMContentLoaded", function () {
  const diaryText = localStorage.getItem("diary");
  const diaryDate = localStorage.getItem("date");

  if (diaryText && diaryDate) {
    createWhiteBox(diaryText, diaryDate);
  }
});

function createWhiteBox(diaryText, diaryDate) {
  const whiteBoxArea = document.getElementById("whiteBoxArea");

  const whiteBox = document.createElement("div");
  whiteBox.className = "whiteBox";
  const whiteBoxContent = document.createElement("div");
  whiteBoxContent.className = "whiteBoxContent";
  const boxDate = document.createElement("div");
  boxDate.className = "boxDate";
  boxDate.innerHTML = diaryDate;
  const line = document.createElement("hr");
  line.className = "line";
  const count = document.createElement("div");
  content.className = "count";

  whiteBoxContent.appendChild(boxDate);
  whiteBoxContent.appendChild(line);
  whiteBox.appendChild(whiteBoxContent);
  whiteBoxArea.appendChild(whiteBox);
  whiteBoxArea.appendChild(count);
}

//수정중...
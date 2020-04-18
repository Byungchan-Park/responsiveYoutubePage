"use strict";

/* Video title toggle button event */
const videoTitle = document.querySelector(".video__title");
const moreBtn = document.querySelector(".moreBtn");
const showTitle = function () {
  videoTitle.classList.toggle("thumbnail");
  moreBtn.classList.toggle("rotate");
};
moreBtn.addEventListener("click", showTitle);

/* 구독중, 구독취소 이벤트 */
const subscribeBtn = document.querySelector(".subscribe");
const modal = document.querySelector(".modal");
const overlay = modal.querySelector(".modal__overlay");
const cancelBtn = modal.querySelector(".no-reaction");
const closeBtn = modal.querySelector(".close");
const upNextTitle = document.querySelector(".upNext__title");

const openModal = function () {
  modal.classList.remove("hidden");
};
const closeModal = function () {
  modal.classList.add("hidden");
};
const cancelSubscription = function () {
  modal.classList.add("hidden");
  subscribeBtn.textContent = "구독";
  subscribeBtn.classList.add("subscribe");
  subscribeBtn.classList.remove("complete");
  upNextTitle.classList.remove("hidden");
};
subscribeBtn.addEventListener("click", function () {
  if (subscribeBtn.classList.contains("subscribe")) {
    subscribeBtn.textContent = "구독중";
    subscribeBtn.classList.remove("subscribe");
    subscribeBtn.classList.add("complete");
  } else {
    upNextTitle.classList.add("hidden");
    openModal();
    cancelBtn.addEventListener("click", closeModal);
    closeBtn.addEventListener("click", cancelSubscription);
  }
});

/* 좋아요, 싫어요 버튼 누를 시 이벤트 적용 */
const likeBtn = document.querySelector(".like");
const dislikeBtn = document.querySelector(".dislike");
const likeCount = likeBtn.querySelector("span");
const dislikeCount = dislikeBtn.querySelector("span");

function pressLikeBtn(color, count) {
  likeBtn.querySelector("button").style.color = color;
  likeCount.textContent = count;
}
function pressDislikeBtn(color, count) {
  dislikeBtn.querySelector("button").style.color = color;
  dislikeCount.textContent = count;
}

const likeEvent = function () {
  likeCount.textContent === "100"
    ? pressLikeBtn("blue", "101")
    : pressLikeBtn("black", "100");
};

likeBtn.addEventListener("click", likeEvent);

const dislikeEvent = function () {
  dislikeCount.textContent === "0"
    ? pressDislikeBtn("blue", "1")
    : pressDislikeBtn("black", "0");
};

dislikeBtn.addEventListener("click", dislikeEvent);

/* 검색 버튼 누르면 input text가 열리는 거 */
const searchBtn = document.querySelector(".fa-search");
const searchBox = document.querySelector(".search");
const logoBox = document.querySelector(".logo");
searchBtn.addEventListener("click", function () {
  if (
    searchBox.classList.contains("hidden") &&
    backBtn.classList.contains("hidden")
  ) {
    searchBox.classList.remove("hidden");
    logoBox.classList.add("hidden");
    backBtn.classList.remove("hidden");
  }
});

/* 뒤로가기 버튼 누르면 검색창이 사라진다. */
const backBtn = document.createElement("button");
const backBtnText = document.createTextNode("←");
backBtn.appendChild(backBtnText);
const header = document.querySelector("header");
header.appendChild(backBtn);
backBtn.classList.add("backBtn", "hidden");

backBtn.addEventListener("click", function () {
  searchBox.classList.add("hidden");
  logoBox.classList.remove("hidden");
  backBtn.classList.add("hidden");
});

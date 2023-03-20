const textAreaEl = document.getElementById("userInput");
const btnCheckEl = document.querySelector(".checkBtn");
const ulEl = document.querySelector("ul");

const displayList = function (wordMap) {
  ulEl.innerHTML = "";
  for (const val of wordMap) {
    let liEl = document.createElement("li");
    liEl.textContent = `word: ${val[0]} count: ${val[1]}`;

    ulEl.appendChild(liEl);
  }
};
const countWords = function () {
  const content = textAreaEl.value;
  const contentArr = content.trim().split(" ");
  const nonDuplicatesArr = [...new Set(contentArr)];
  const wordMap = new Map();
  for (let i = 0; i < nonDuplicatesArr.length; i++) {
    let count = 0;
    for (let j = 0; j < contentArr.length; j++) {
      if (nonDuplicatesArr[i] === contentArr[j]) {
        count++;
      }
      wordMap.set(nonDuplicatesArr[i], count);
    }
  }

  displayList(wordMap);
};

btnCheckEl.addEventListener("click", countWords);

/*
 STRING TO TEST
Zwigato is about the struggles of a food-delivery boy and his family. The Hindustan Times review of the called it a compelling tale that blends humour with honesty. It read Watch Zwigato to enjoy a slice of life of people whom we dont credit as much as we should
*/

const containerEl = document.querySelector(".container");

const nickName = ["YouTuber", "Web Developer", "Entrepreneur", "Instructor", "Amazing Person", "Motherfucker", "Asshole", "fuckboy"];

let nickNameIndex = 0;
let characterIndex = 0;

updateText();

function updateText() {
    characterIndex++;

    const currentNickname = nickName[nickNameIndex];
    const firstLetter = currentNickname.charAt(0).toLowerCase();

    const article = firstLetter === "a" || firstLetter === "e" || firstLetter === "i" || firstLetter === "o" || firstLetter === "u" ? "an" : "a";

    containerEl.innerHTML = `<h1>You are ${article} ${currentNickname.slice(0, characterIndex)}</h1>`;

    if (characterIndex === currentNickname.length) {
        nickNameIndex++;
        characterIndex = 0;
    }

    if (nickNameIndex === nickName.length) {
        nickNameIndex = 0;
    }

    setTimeout(updateText, 300);
}



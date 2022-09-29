
function playNationalAnthem() {
    var audio = new Audio("aud/turkish_national_anthem.mp3");
    audio.play();
    audio.loop = true;
    let counter = document.getElementById("counter");
    counter.innerHTML = "National Anthems Playing: " + (parseInt(counter.innerHTML.substring(26)) + 1);
}
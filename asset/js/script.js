AOS.init({
    offset: 100,
    delay: 0,
    duration: 1500
});

// explode confetti the first load
confetti();

// show introduction
const imgSwing = document.getElementById("swing-btn");

imgSwing.addEventListener("click", () => {
    const introduction = document.getElementsByClassName("introduction")[0];
    introduction.style.display = "block";
});

// explode confetti
const imgBirthday = document.getElementById("confetti-btn");

imgBirthday.addEventListener("click", () => {
    confetti({
        particalCount: 300,
        spread: 90
    });
});

// scroll to top button
const btnScrollUp = document.getElementById("scroll-up");

window.addEventListener("scroll", () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
        btnScrollUp.style.display = "block";
    else
        btnScrollUp.style.display = "none";
})

btnScrollUp.addEventListener("click", () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
});

// click on envelope
const imgEnvelope = document.getElementById("envelope");

imgEnvelope.addEventListener("click", () => {
    const currentSrc = imgEnvelope.getAttribute("src");
    const isClosed = currentSrc.includes("closed");
    const pMessage = imgEnvelope.nextElementSibling;

    if (isClosed) {
        imgEnvelope.setAttribute("src", currentSrc.replace("closed", "open"));
        imgEnvelope.style.width = "3rem"
        pMessage.style.display = "block";
    }
    else {
        imgEnvelope.setAttribute("src", currentSrc.replace("open", "closed"));
        imgEnvelope.style.width = "5rem";
        pMessage.style.display = "none";
    }
});
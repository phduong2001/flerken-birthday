AOS.init({
    offset: 100,
    delay: 0,
    duration: 1500
});

// show introduction when click on swing image
const imgSwing = document.getElementById("swing-btn");

imgSwing.addEventListener("click", () => {
    const introduction = document.getElementsByClassName("introduction")[0];
    introduction.style.display = "block";
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

// click on evelope
const imgEnvelope = document.getElementById("envelope");

imgEnvelope.addEventListener("click", () => {
    const currentSrc = imgEnvelope.getAttribute("src");
    const isClosed = currentSrc.includes("closed");
    const pMessage = imgEnvelope.nextElementSibling;

    if (isClosed) {
        imgEnvelope.setAttribute("src", currentSrc.replace("closed", "open"));
        pMessage.style.display = "block";
    }
    else {
        imgEnvelope.setAttribute("src", currentSrc.replace("open", "closed"));
        pMessage.style.display = "none";
    }
});
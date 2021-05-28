AOS.init({
    offset: 200,
    delay: 0,
    duration: 1500
});

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
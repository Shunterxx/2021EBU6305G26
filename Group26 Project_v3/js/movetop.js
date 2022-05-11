window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("movetop").style.display = "block";
    } else {
        document.getElementById("movetop").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    const drag = 20;
    const gap = document.documentElement.scrollTop || document.body.scrollTop;
    if (gap > 0) {
        window.requestAnimationFrame(topFunction);
        window.scrollTo(0, gap - gap / drag);
    }
    // document.body.scrollTop = 0;
    // document.documentElement.scrollTop = 0;
}
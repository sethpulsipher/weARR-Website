function seeMorePosts()
{
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("cMore");

    if (dots.style.display === "none")
    {
        dots.style.display = "inline";
        btnText.innerHTML = "SEE MORE";
        moreText.style.display = "none";
    }
    else
    {
        dots.style.display = "none";
        btnText.innerHTML = "SEE LESS";
        moreText.style.display = "inline";
    }
}
function seeMoreEvents()
{
    var dots2 = document.getElementById("dots2");
    var moreText2 = document.getElementById("more2");
    var btnText2 = document.getElementById("cMore2");

    if (dots2.style.display === "none")
    {
        dots2.style.display = "inline";
        btnText2.innerHTML = "SEE MORE";
        moreText2.style.display = "none";
    }
    else
    {
        dots2.style.display = "none";
        btnText2.innerHTML = "SEE LESS";
        moreText2.style.display = "inline";
    }
}


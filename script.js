let isOnDarkMode = false;

let toogleBtn = document.getElementById("toggle-theme-bg");
let r = document.querySelector(":root");
console.log(r);

toogleBtn.addEventListener("click", function()
{
    if(isOnDarkMode)
    {
        r.style.setProperty('--main-bg-color', 'hsl(0, 0%, 100%)');
        r.style.setProperty('--top-bg-color', 'hsl(225, 100%, 98%)');
        r.style.setProperty('--card-bg-color', 'hsl(227, 47%, 96%)');
        r.style.setProperty('--big-text-color', 'hsl(230, 17%, 14%)');
        r.style.setProperty('--sub-text-color', 'hsl(228, 12%, 44%)');
        isOnDarkMode = false;

        toogleBtn.firstChild.style.left ="auto";
        toogleBtn.firstChild.style.right ="0.3em";
    }
    else
    {
        console.log(r);
        r.style.setProperty('--main-bg-color', 'hsl(230, 17%, 14%)');
        r.style.setProperty('--top-bg-color', 'hsl(232, 19%, 15%)');
        r.style.setProperty('--card-bg-color', 'hsl(228, 28%, 20%)');
        r.style.setProperty('--big-text-color', 'hsl(0, 0%, 100%)');
        r.style.setProperty('--sub-text-color', 'hsl(228, 34%, 66%)');
        isOnDarkMode = true;

        toogleBtn.firstChild.style.right ="auto";
        toogleBtn.firstChild.style.left ="0.3em";
    }
});
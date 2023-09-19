let scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
);
onscroll = function () {
    if (scrollHeight > 300) {
        document.getElementById("side-bar").style.backgroundColor = "#3D405B";
    }
}
//Show and Hidden list
document.getElementById("show").onclick = function () {
    if (document.getElementById("list").style.visibility == "hidden") {
        document.getElementById("list").style.visibility = "visible";
        document.getElementById("show").style.color = "#F2CC8F";
    } else {
        document.getElementById("list").style.visibility = "hidden";
        document.getElementById("show").style.color = "#ffffff";
    }
}
//Show menu
document.getElementById("btn-menu").onclick = function () {
    document.getElementById("menu").style.cssText = `transform: translateX(0%);`;
}
//Show and Hidden Login
document.getElementById("btn-member").onclick = function () {
    document.getElementById("login").style.cssText = `
    animation-name: show1;
    animation-duration: 0.5s;
    animation-timing-function: linear;
    animation-fill-mode: forwards;
    `;
}
document.getElementById("btn-login").onclick = function () {
    document.getElementById("login").style.cssText = `
    animation-name: show2;
    animation-duration: 0.5s;
    animation-timing-function: linear;
    animation-fill-mode: forwards;`;
}
//Retate button of closed
document.getElementById("btn-member").onmouseenter = function () {
    document.getElementById("btn-member").style.cssText = `
                        animation-name: retation1;
                        animation-duration: 0.5s;
                        animation-timing-function: linear;
                        animation-fill-mode: backwards;
                        animation-iteration-count: 1;
                        animation-direction: alternate;
    `
}
document.getElementById("btn-member").onmouseleave = function () {
    document.getElementById("btn-member").style.cssText = `
                        animation-name: retation2;
                        animation-duration: 0.5s;
                        animation-timing-function: linear;
                        animation-fill-mode: backwards;
                        animation-iteration-count: 1;
                        animation-direction: reverse;
    `
}


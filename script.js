const title = document.querySelector("#title")

const gif = document.querySelector(".gif-img")
const buttonyes = document.querySelector(".btn-yes")
const btnno = document.querySelector(".btn-cta")

buttonyes.addEventListener("click", () => {
    title.innerHTML = "Avvvvwww, We Have The Same Feelings"
    gif.src = "happy-milk-peach-happy.gif"
})
btnno.addEventListener("click", () => {
    title.innerHTML = "So Sad... But that's fine cause we're still student tho.."
    gif.src = "sad-bunny.gif"
});


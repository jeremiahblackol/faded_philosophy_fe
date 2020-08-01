export const toneChecker = (sentence) => {
    fetch(`http://localhost:5000/tone/${sentence}`)
        .then(response => response.json())
        .then(data => console.log("api call", data))
}
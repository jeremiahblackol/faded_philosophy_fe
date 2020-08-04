export const toneChecker = async (sentence) => {
    const response = await fetch(`http://localhost:5000/tone/${sentence}`)
    const tone = await response.json()
    return tone
}
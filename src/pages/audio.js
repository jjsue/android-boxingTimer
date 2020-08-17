function audioController(s0, s1, isRest) {
    try {
        s0.play()
        if (!isRest) {
            setTimeout(() => {
                s1.play();
            }, 300);
        }
    } catch (error) {
        console.log(error)
    }
}
export { audioController };
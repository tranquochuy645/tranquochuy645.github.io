const typeParagraph = (e: Array<HTMLElement>, t: Array<string>, delayEach: number, delayStart: number = 0) => {
    const typeSentence = (e: HTMLElement, t: string, delayEach: number, delayStart: number = 0) => {
        setTimeout(() => {
            const sentenceSpan = document.createElement('span');
            e.appendChild(sentenceSpan)
            const cursor = document.createElement('span');
            cursor.className = 'cursor';
            e.appendChild(cursor);
            for (let i = 0; i < t.length; i++) {
                setTimeout(() => {
                    sentenceSpan.textContent += t.charAt(i);
                    if (i == t.length - 1) {
                        e.removeChild(cursor);
                    }
                }, delayEach * (i + 1))
            }
        }, delayStart)
    }
    setTimeout(() => {
        let totalTime = 0;
        for (let i = 0; i < e.length; i++) {
            typeSentence(e[i], t[i], delayEach, totalTime);
            totalTime += delayEach * t[i].length;
        }
    }, delayStart)

}
export {
    typeParagraph
}
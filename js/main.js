const tittleVerb = document.getElementById('verb');
const verbs = ['Viví', 'Sentí', 'Disfrutá', 'Soñá'];
const timeconfig = {timeWord: 5000 , timeLetter: 98};
const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const changeInnerHTML = (value, element) => {
    element.innerHTML = value;
}

const changetittle = async (iterable, elementHTML, config) => {
    for (const element of iterable){
        changeLetterbyLetter(element, elementHTML, config.timeLetter);
        await wait(config.timeWord)
    }
    changetittle(verbs, tittleVerb, timeconfig);
}

const changeLetterbyLetter = async (word, element, timeLetter) => {
    const wordLetters = [...word];
    let text = '';

    for (const partialWord of wordLetters){
        text += partialWord;
        changeInnerHTML(text, element);
        await wait(timeLetter)
    }
}


changetittle(verbs, tittleVerb, timeconfig);

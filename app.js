/*
TODO:
    * Change background even if the user is not focused on the page (if it hasn't been a long time since they unfocused)
    * Clean the code
    * Comment the code
    * Experiment with zooming in and out of the noise background, 
        * it seems to generate the different base frequencies at at same time. 
        * You can prevent creating new noises and losing performance by using this (if the hypothesis is true).
*/
const maxMoveAmount = 5;
Number.prototype.mapNumbers = function (in_min, in_max, out_min, out_max) {
    return (this - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

const moveableElements = document.querySelectorAll('.moveable');
document.addEventListener('mousemove', (event) => {
    const verticalCenter = window.innerHeight/2,
        horizontalCenter = window.innerWidth/2;
        centerOffsetY = verticalCenter-event.pageY,
        centerOffsetX = horizontalCenter-event.pageX,
    moveableElements.forEach(element => {
        const translateX = centerOffsetX.mapNumbers(0, horizontalCenter, 0, maxMoveAmount)
        const translateY = centerOffsetY.mapNumbers(0, verticalCenter, 0, maxMoveAmount)
        element.style.transform = `translate(${translateX}px, ${translateY}px)`
    })
})
document.addEventListener('mouseout', (event) => {
    moveableElements.forEach(element => {
        element.style.transform = `translate(0)`
    })
})

const contentHeading = document.getElementById("content-heading");
const contentDetails = document.getElementById("content-details");

// pages are from "./datasource.js"

const createDetailedGallery = (gallery) => {
    let result = `<div id="content-highlight">
            <div style="background-image:url('${gallery.contents[0].background}')" id="highlight-background" class="highlight-background"></div>
            <div id="highlight-details">
                <h3 id="highlight-name">${gallery.contents[0].name[currentLanguage]}</h3>
                <p id="highlight-summary">${gallery.contents[0].summary[currentLanguage]}</p>
                <div id="highlight-actions">
                    ${gallery.contents[0].actions.map(action => `<a target="_blank" href="${action.link}">${action.name[currentLanguage]}</a>`).join("\n")}
                </div>
            </div>
        </div>\n<div id="more-content">\n`
    gallery.contents.forEach((content, index) => {
        result += `<div class="mini-content"><div onclick="changeHighlight(this)" data-index="${index}" data-parent-name="${gallery.name}" style="background:url('${content.background.replace('assets/', 'assets/proxy/')}') no-repeat center;background-size: cover;width:100%;height:100%;"></div></div>\n`
    })
    result += "</div>"
    return result;
}
const createGallery = (gallery) => {
    let result = `<div id="content-highlight">
            <div style="background-image:url('${gallery.contents[0]['raw']}')" id="highlight-background" class="highlight-background"></div>
        </div>\n<div id="more-content">\n`
    gallery.contents.forEach(content => {
        result += `<div class="mini-content"><div onclick="changeHighlight(this)" data-background="${content['raw']}" class="highlight-background" style="background-image:url('${content['proxy'] ? content['proxy'] : content['raw']}')"></div></div>\n`
    })
    result += "</div>"
    return result;
}

function changeHighlight(element) {
    const galleryHighlight = document.getElementById('highlight-background');
    if(element.dataset.background != undefined) {
        galleryHighlight.style.backgroundImage = `url('${element.dataset.background.replace('assets/proxy','assets/')}')`;
    }else {
        const selectedPage = pages.find(page => page.name === element.dataset.parentName);
        const selectedIndex = element.dataset.index;
        const galleryHighlightName = document.getElementById('highlight-name');
        const galleryHighlightSummary = document.getElementById('highlight-summary');
        const galleryHighlightActions = document.getElementById('highlight-actions');
        galleryHighlightName.innerText = selectedPage.contents[selectedIndex].name[currentLanguage];
        galleryHighlightSummary.innerText = selectedPage.contents[selectedIndex].summary[currentLanguage];
        galleryHighlightActions.innerHTML = selectedPage.contents[selectedIndex].actions.map(action => `<a target="_blank" href="${action.link}">${action.name[currentLanguage]}</a>`).join("\n");
        galleryHighlight.style.backgroundImage = `url('${selectedPage.contents[selectedIndex].background}')`;
    }
}

function loadContent(contentType, contentName) {
    switch (contentType) {
        case "detailed-gallery":
            pages.find(page => page.name === contentName) ? contentDetails.innerHTML = createDetailedGallery(pages.find(page => page.name === contentName)) : console.error("Sayfa bulunamadı!");
            activePageName = contentName;
            contentHeading.innerText = pages.find(page => page.name === contentName).heading[currentLanguage];
            break;
        case "gallery":
            pages.find(page => page.name === contentName) ? contentDetails.innerHTML = createGallery(pages.find(page => page.name === contentName)) : console.error("Sayfa bulunamadı!");
            activePageName = contentName;
            contentHeading.innerText = pages.find(page => page.name === contentName).heading[currentLanguage];
            break;
        case "custom":
            pages.find(page => page.name === contentName) ? contentDetails.innerHTML = pages.find(page => page.name === contentName).content : console.error("Sayfa bulunamadı!");
            activePageName = contentName;
            contentHeading.innerText = pages.find(page => page.name === contentName).heading[currentLanguage];
            break;
        default:
            console.error("İçerik tipi tanınmıyor!");
            break;
    }
}

// themes from "datasource.js"
function changeTheme(themeName) {
    const selectedTheme = themes.find(theme => theme.name === themeName);
    document.documentElement.style.setProperty('--unfocused-border-color', selectedTheme.data.unfocusedBorderColor);
    document.documentElement.style.setProperty('--hover-border-color', selectedTheme.data.hoverBorderColor);
    document.documentElement.style.setProperty('--background-color', selectedTheme.data.backgroundColor);
    document.documentElement.style.setProperty('--pattern-color', selectedTheme.data.patternColor);
    document.body.style.color = selectedTheme.data.textAssist ? 'black' : 'white';
}
changeTheme('neo');

document.querySelectorAll('.theme-select').forEach(element => element.addEventListener('click', () => changeTheme(element.getAttribute('data-name'))));

// Language Related
var currentLanguage = "tr";
var activePageName = "projelerim";

const bioParagraph = document.getElementById('bio-paragraph');
const projelerimButton = document.getElementById('projelerim');
const yetkinliklerimButton = document.getElementById('yetkinliklerim');
const snippetsButton = document.getElementById('snippets');
const pixelArtButton = document.getElementById('pixel-art');
const ModellemeRenderlarButton = document.getElementById('3d-modelleme-renderlar');

function changeLanguage(languageName) {
    currentLanguage = languageName;
    currentPage = pages.find(page => page.name === activePageName);
    bioParagraph.innerText = leftSideContent.bioParagraph[currentLanguage];
    projelerimButton.innerText = leftSideContent.projelerimButton[currentLanguage];
    snippetsButton.innerText = leftSideContent.snippetsButton[currentLanguage];
    yetkinliklerimButton.innerText = leftSideContent.yetkinliklerimButton[currentLanguage];
    pixelArtButton.innerText = leftSideContent.pixelArtButton[currentLanguage];
    ModellemeRenderlarButton.innerText = leftSideContent.ModellemeRenderlarButton[currentLanguage];
    loadContent(currentPage.type, activePageName)
}
document.querySelectorAll('.language-select').forEach(element => element.addEventListener('click', () => changeLanguage(element.getAttribute('data-name'))));

// Background Related
const backgroundNoiseAnimationInterval = 20000;
const backgroundDNAAnimationInterval = 5000;

var isBackgroundAnimationEnabled = true;
const dipsMap = document.getElementById('dispMap');
const turbulence = document.getElementById('turbulence');

const animationCheckbox = document.getElementById('bgAnimationCheckbox');
animationCheckbox.addEventListener('change', () => {
    isBackgroundAnimationEnabled = !isBackgroundAnimationEnabled;
});

setInterval(async () => {
    // Add && document.hasFocus() to only change background when the page is visible
    if(isBackgroundAnimationEnabled) turbulence.setAttribute('baseFrequency', Math.random());
}, backgroundNoiseAnimationInterval);


// Background Change Related
var activeBackground = "noise"
function createDNABackground(backgroundInterval) {
    const horizontalCellCount = document.body.clientWidth, 
    verticalCellCount = document.body.clientHeight;
    var DNAString = [], matchingDNAString = [];

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    for (let index = 0; index < horizontalCellCount; index++) {
        let selectedNucleotide;
        let matchingNucleotide;
        switch (getRandomInt(1, 4)) {
            case 1:
                selectedNucleotide = "A";
                matchingNucleotide = "T";
                break;
            case 2:
                selectedNucleotide = "T";
                matchingNucleotide = "A";
                break;
            case 3:
                selectedNucleotide = "G";
                matchingNucleotide = "C";
                break;
            case 4:
                selectedNucleotide = "C";
                matchingNucleotide = "G";
                break;
        }
        DNAString.push(selectedNucleotide);
        matchingDNAString.push(matchingNucleotide);
    }
    // Assuming the text you want is 1em (16px), we must divide the cell amount to 16
    const textDuplicationAmount = Math.floor(verticalCellCount/13);
    const DNAStringAsString = DNAString.join(''), matchingDNAStringAsString = matchingDNAString.join('');

    const DNAContainerElement = document.createElement('div');
    DNAContainerElement.setAttribute('id', 'dna-background')
    DNAContainerElement.classList.add('dna-background');
    DNAContainerElement.style = `width: 100%;height: ${verticalCellCount}px;`
    for (let index = 1; index < textDuplicationAmount+1; index++) {
        const DNAStringElement = document.createElement('p');
        DNAStringElement.classList.add('dna-paragraph');
        DNAStringElement.innerText = (index % 2 == 0) ?  DNAStringAsString : matchingDNAStringAsString;
        DNAContainerElement.appendChild(DNAStringElement)
    }
    document.body.appendChild(DNAContainerElement)

    setInterval(() => {
        DNAContainerElement.scrollTo({
            top:getRandomInt(0, DNAContainerElement.clientHeight),
            left:getRandomInt(0, DNAContainerElement.clientWidth),
            behavior:'smooth'
        }) 
    }, backgroundInterval);
}
function destroyDNABackground(){
    document.getElementById('dna-background').remove();
}
const noiseBackground = document.getElementById('svg-filter');
function createNoiseBackground() {
    document.body.appendChild(noiseBackground);
}
function destroyNoiseBackground() {
    document.getElementById('svg-filter').remove();
}

function changeBackground(backgroundName) {
    if(backgroundName === "dna" && activeBackground != "dna") {
        activeBackground = "dna";
        destroyNoiseBackground();
        createDNABackground(backgroundDNAAnimationInterval);
    }else if(backgroundName === "noise" && activeBackground != "noise") {
        activeBackground = "noise";
        destroyDNABackground();
        createNoiseBackground();
    }
}

document.querySelectorAll('.pattern-select').forEach(element => element.addEventListener('click', () => changeBackground(element.getAttribute('data-name'))));
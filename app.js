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


// Background Related
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
}, 20000);
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

function changeLanguage(languageName) {
    currentLanguage = languageName;
    currentPage = pages.find(page => page.name === activePageName);
    loadContent(currentPage.type, activePageName)
}
document.querySelectorAll('.language-select').forEach(element => element.addEventListener('click', () => changeLanguage(element.getAttribute('data-name'))));

/*
TODO:
    * Add language support of the left side div
    * Change background even if the user is not focused on the page (if it hasn't been a long time since they unfocused)
*/
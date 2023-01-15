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
const pages = [
    {
        name:"projelerim",
        heading: "Projelerim",
        contents: [
            {
                background: './assets/musicflake.webp',
                name: "Musicflake",
                summary: "Open-Mateo.com'un API'ı ile konumuzdaki hava durumunu tespit edip hava durumuna göre Spotify'dan çalma listesi öneren bir Angular projesi.",
                actions: [
                    {
                        name: "Kaynak Kod",
                        link: "https://github.com/yussufbiyik/musicflake"
                    },
                    {
                        name: "Demo",
                        link: "https://musicflake-3f0a8.web.app/"
                    }
                ]
            },
            {
                background:'./assets/otoroblox.webp',
                name:'OtoRoblox',
                summary: "Kullanıcılarının oyun içi ödüller kazandığı bir uygulamanın ödül dağıtım yazılımıdır, bir API ile oyundaki (Roblox) grubun kullanıcıları arasından görevlerini tamamlayanlara ödüllerini verir.",
                actions: []
            },
            {
                background:'./assets/periyodik-tablo.webp',
                name:'Periyodik Tablo',
                summary: "Bir müşterim için sonradan geliştirdiğim bir mobil uygulamanın basit bir prototipi, sonraki aşamada prototipi Angular'a uyarlayıp Cordova ile bir mobil uygulamaya çevirdim.",
                actions: [
                    {
                        name: "Kaynak Kod",
                        link: "https://github.com/yussufbiyik/periodic-table"
                    },
                    {
                        name: "Demo",
                        link: "https://yussufbiyik.github.io/periodic-table/"
                    }
                ]
            }
        ]
    },
    {
        name: "yetkinliklerim",
        heading: "Yetkinliklerim",
        content: `
            <div class="skills">
                <div id="software-related" class="skill">
                    <ul>
                        <li>
                            <span>Web Geliştirme</span>
                            <ul>
                                <li>
                                    <span>HTML & CSS</span>
                                    <ul>UIkit</ul>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <span>Javascript & Typescript</span>
                                    <ul>NodeJS, Angular, Electron, React Native</ul>
                                </li>
                            </ul>
                        </li>
                        <li>Python</li>
                        <li>Arduino</li>
                        <li>Firebase</li>
                        <li>SQL</li>
                    </ul>
                </div>
                <div id="general-skills" class="skill">
                    <ul>
                        <li>
                            <span>3D</span>
                            <ul>
                                <li>Cinema 4D (Modelleme ve Animasyon)</li>
                                <li>Tinkercad</li>
                            </ul>
                        </li>
                        <li>
                            <span>2D</span>
                            <ul>
                                <li>Photoshop</li>
                                <li>Aseprite (Pixel Art)</li>
                                <li>Video Düzenleme</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>`
    },
    {
        name: "pixel-art",
        heading: "Pixel Art",
        contents: [
            "https://steamuserimages-a.akamaihd.net/ugc/1689373781825613769/6D86A60AD7424F0D53E00E1420C3E3D3AE3CE327/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
            "https://steamuserimages-a.akamaihd.net/ugc/1633076066618028298/F53768ED0B0B5CA8852B43C3F498204B7C39693C/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
            "https://steamuserimages-a.akamaihd.net/ugc/1474317354726727080/3AA259DF9EA002FB45D128CB02B185BADD7FEA40/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
            "https://steamuserimages-a.akamaihd.net/ugc/1689373781826880823/189E3DBD5E9E0DEF1C3BAB1112722EB9327E6DDD/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
            "https://steamuserimages-a.akamaihd.net/ugc/1813239499466346854/614AD40A4B7E3B08EF7AFBCD5149C87CC18DD630/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
            "https://steamuserimages-a.akamaihd.net/ugc/1691625928964912516/F6F49F0A69A6CC68A14C19D8BA7FB9DBAA56554D/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
            "https://steamuserimages-a.akamaihd.net/ugc/1662356550778918358/D9BAB1849EBA7EC834BE8803A50C13FA3624F0B4/?imw=2048&imh=2048&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true",
            "https://steamuserimages-a.akamaihd.net/ugc/1689373922260238270/032A6DA2EC7F8D310E62F2D397591F83EF40D460/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
            "https://steamuserimages-a.akamaihd.net/ugc/1689373781825653324/43B40D1971E2FC6CD50FBC6F62ED13E1476A2FBF/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
            "https://steamuserimages-a.akamaihd.net/ugc/1689373922258098329/54E0C6DE0B6526E8B5C2C528EECAC0E0E9608C82/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
        ]
    },
    {
        name: "3d-modelleme-renderlar",
        heading: "3D Modelleme/Renderlar",
        contents: [
            "./assets/nano-dark.webp",
            "./assets/ard-mega-dark.webp",
            "./assets/room.webp",
            "./assets/finallowres.gif",
            "./assets/skull.webp",
            "./assets/delorean-arka.webp",
            "./assets/mustang-on.webp",
        ]
    }
];
const createDetailedGallery = (gallery) => {
    let result = `<div id="content-highlight">
            <div style="background-image:url('${gallery.contents[0].background}')" id="highlight-background" class="highlight-background"></div>
            <div id="highlight-details">
                <h3 id="highlight-name">${gallery.contents[0].name}</h3>
                <p id="highlight-summary">${gallery.contents[0].summary}</p>
                <div id="highlight-actions">
                    ${gallery.contents[0].actions.map(action => `<a target="_blank" href="${action.link}">${action.name}</a>`).join("\n")}
                </div>
            </div>
        </div>\n<div id="more-content">\n`
    // gallery.contents.shift();
    gallery.contents.forEach((content, index) => {
        result += `<div class="mini-content"><div onclick="changeHighlight(this)" data-index="${index}" data-parent-name="${gallery.name}" style="background:url('${content.background.replace('assets/', 'assets/proxy/')}') no-repeat center;background-size: cover;width:100%;height:100%;"></div></div>\n`
    })
    result += "</div>"
    return result;
}
const createGallery = (gallery) => {
    let result = `<div id="content-highlight">
            <div style="background-image:url('${gallery.contents[0]}')" id="highlight-background" class="highlight-background"></div>
        </div>\n<div id="more-content">\n`
    // gallery.contents.shift();
    gallery.contents.forEach(content => {
        result += `<div class="mini-content"><div onclick="changeHighlight(this)" data-background="${content.replace('assets/', 'assets/proxy/')}" class="highlight-background" style="background-image:url('${content}')"></div></div>\n`
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
        galleryHighlightName.innerText = selectedPage.contents[selectedIndex].name;
        galleryHighlightSummary.innerText = selectedPage.contents[selectedIndex].summary;
        galleryHighlightActions.innerHTML = selectedPage.contents[selectedIndex].actions.map(action => `<a target="_blank" href="${action.link}">${action.name}</a>`).join("\n");
        galleryHighlight.style.backgroundImage = `url('${selectedPage.contents[selectedIndex].background}')`;
    }
}

function loadContent(contentType, contentName) {
    switch (contentType) {
        case "detailed-gallery":
            pages.find(page => page.name === contentName) ? contentDetails.innerHTML = createDetailedGallery(pages.find(page => page.name === contentName)) : console.error("Sayfa bulunamadı!");
            contentHeading.innerText = pages.find(page => page.name === contentName).heading;
            break;
        case "gallery":
            pages.find(page => page.name === contentName) ? contentDetails.innerHTML = createGallery(pages.find(page => page.name === contentName)) : console.error("Sayfa bulunamadı!");
            contentHeading.innerText = pages.find(page => page.name === contentName).heading;
            break;
        case "custom":
            pages.find(page => page.name === contentName) ? contentDetails.innerHTML = pages.find(page => page.name === contentName).content : console.error("Sayfa bulunamadı!");
            contentHeading.innerText = pages.find(page => page.name === contentName).heading;
            break;
        default:
            console.error("İçerik tipi tanınmıyor!");
            break;
    }
}

var isBackgroundAnimationEnabled = true;

const dipsMap = document.getElementById('dispMap');
const turbulence = document.getElementById('turbulence');
const animationCheckbox = document.getElementById('bgAnimationCheckbox');

animationCheckbox.addEventListener('change', () => {
    isBackgroundAnimationEnabled = !isBackgroundAnimationEnabled;
})

setInterval(async () => {
    if(isBackgroundAnimationEnabled && document.hasFocus()) turbulence.setAttribute('baseFrequency', Math.random());
}, 15000);

const themeSelector = document.getElementById('theme-selector');
const themes = [
    {
        name: 'bnw',
        data: {
            hoverBorderColor: 'white',
            unfocusedBorderColor: '#ffffff80',
            backgroundColor: 'black',
            patternColor: 'white'
        }
    },
    {
        name: 'matrix',
        data: {
            hoverBorderColor: '00FF41',
            unfocusedBorderColor: '#008F11',
            backgroundColor: '#0D0208',
            patternColor: '#00FF41'
        }
    },
    {
        name: 'bios',
        data: {
            hoverBorderColor: '#a9a9a9',
            unfocusedBorderColor: '#5c5c5c',
            backgroundColor: '#00005d',
            patternColor: 'white'
        }
    }
]

themeSelector.addEventListener('change', () => {
    const selectorValue = themeSelector.value;
    const selectedTheme = themes.find(theme => theme.name === selectorValue);
    document.documentElement.style.setProperty('--unfocused-border-color', selectedTheme.data.unfocusedBorderColor);
    document.documentElement.style.setProperty('--hover-border-color', selectedTheme.data.hoverBorderColor);
    document.documentElement.style.setProperty('--background-color', selectedTheme.data.backgroundColor);
    document.documentElement.style.setProperty('--pattern-color', selectedTheme.data.patternColor);
})
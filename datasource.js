/*
TODO:
(maybe/someday?)
    * Move all this content to a database that you can modify so that you don't have to update the code every single time
    * Add some cool easter eggs, like the following site: https://dimden.dev/
    * Add your stats
        * (https://github-readme-stats.vercel.app/api/top-langs/?username=yussufbiyik&show_icons=true&theme=transparent&include_all_commits=true&ring_color=fff&hide_border=true&text_color=fff&icon_color=fff&title_color=fff)
*/

const leftSideContent = {
    bioParagraph: {
        eng:"I got into software development at 8th grade with HTML, CSS and PHP. I have been growing by making challenging projects for myself, my friends and my customers ever since that day.",
        tr:"Yazılıma 8. sınıfta HTML, CSS ve PHP öğrenerek başladım ve o günden beri kendim, çevrem ve müşterilerim için kendimi aşan projeler yaparak gelişiyorum."
    },
    projelerimButton: {
        eng:"My Projects",
        tr: "Projelerim"
    },
    snippetsButton: {
        eng:"Snippets",
        tr: "Ufak Parçalar"
    },
    yetkinliklerimButton: {
        eng:"Skills",
        tr: "Yetkinliklerim"
    },
    pixelArtButton: {
        eng:"Pixel Art",
        tr: "Pixel Art"
    },
    modellemeRenderlarButton: {
        eng:"3D Modelling/Renders",
        tr: "3D Modelleme/Renderlar"
    },
}

const pages = [
    {
        name:"projelerim",
        type:"detailed-gallery",
        heading: {eng:"My Projects", tr:"Projelerim"},
        contents: [
            {
                background: './assets/musicflake.webp',
                name: {eng:"Musicflake", tr:"Musicflake"},
                summary: {
                    eng:"An Angular project that uses Open-Mateo.com's API to recommend music to it's users based on their location.",
                    tr:"Open-Mateo.com'un API'ı ile konumunuzdaki hava durumunu tespit edip hava durumuna göre Spotify'dan çalma listesi öneren bir Angular projesi."
                },
                actions: [
                    {
                        name: {eng:"Source Code", tr:"Kaynak Kod"},
                        link: "https://github.com/yussufbiyik/musicflake"
                    },
                    {
                        name: {eng:"Demo",tr:"Demo"},
                        link: "https://musicflake-3f0a8.web.app/"
                    }
                ]
            },
            {
                background: './assets/oe.webp',
                name: {eng:"Online Education Software", tr:"Online Eğitim Yazılımı"},
                summary: {
                    eng:"Live stream software made using Electron and Ffmpeg to stream videos to YouTube. Inludes webcam and built-in live chat for students to use.",
                    tr:"Electron ve Ffmpeg kullanarak Youtube'a canlı yayın yapabilen bir online eğitim yazılım. İçerisinde webcam ve öğrencilerin kullanması için dahili anlık chat de barındırıyor."
                },
                actions: []
            },
            {
                background: './assets/playscraper.webp',
                name: {eng:"Mobile App Scraper", tr:"Mobil Uygulama Scraper"},
                summary: {
                    eng:"An app that can scrape and update mobile app data from Google Play using an unofficial API. Made using Electron.",
                    tr:"Electron ve resmi olmayan Google Play API'ı ile mobil oyunların verisini çekip, düzenleyip, csv formatında dışarı aktarabilen bir yazılım."
                },
                actions: []
            },
            {
                background:'./assets/otoroblox.webp',
                name:{eng:"OtoRoblox", tr:"OtoRoblox"},
                summary: {
                    eng:"Reward distribution software of a mobile app that gives in-game rewards to users. Uses an API that wraps Roblox API to send the rewards to it's users.",
                    tr:"Kullanıcılarının oyun içi ödüller kazandığı bir uygulamanın ödül dağıtım yazılımıdır, bir API ile oyundaki (Roblox) görevlerini tamamlayanlara ödüllerini verir."
                },
                actions: []
            },
            {
                background:'./assets/periyodik-tablo.webp',
                name:{eng:"Periodic Table", tr:"Periyodik Tablo"},
                summary: {
                    eng:"MVP of a mobile app that I made for a costumer. I adapted this version to Angular then converted it to a mobile app using Cordova.",
                    tr:"Bir müşterim için sonradan geliştirdiğim bir mobil uygulamanın basit bir prototipi, sonraki aşamada prototipi Angular'a uyarlayıp Cordova ile bir mobil uygulamaya çevirdim."
                },
                actions: [
                    {
                        name: {eng:"Source Code", tr:"Kaynak Kod"},
                        link: "https://github.com/yussufbiyik/periodic-table"
                    },
                    {
                        name: {eng:"Demo",tr:"Demo"},
                        link: "https://yussufbiyik.github.io/periodic-table/"
                    }
                ]
            }
        ]
    },
    {
        name: "yetkinliklerim",
        type:"custom",
        heading: {eng:"Skills", tr:"Yetkinliklerim"},
        content: `
            <div class="skills">
                <div id="software-related" class="skill">
                    <ul>
                        <li>
                            <span>Web Geliştirme // Web Development</span>
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
                        <li>C#</li>
                        <li>Python</li>
                        <li>Arduino</li>
                        <li>Firebase</li>
                        <li>PHP, PDO, SQL</li>
                    </ul>
                </div>
                <div id="general-skills" class="skill">
                    <ul>
                        <li>
                            <span>3D</span>
                            <ul>
                                <li>Cinema 4D (Modelleme ve Animasyon)</li>
                                <li>Tinkercad</li>
                                <li>Fusion360 (Basics)</li>
                                <li>AutoCAD</li>
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
        name: "snippets",
        type:"custom",
        heading: {eng:"Snippets", tr:"Ufak Parçalar"},
        content: `
            <div class="snippets-container">
                <div class="snippets">
                    <iframe height="300" style="width: 100%;" scrolling="no" title="ChatGPT Experiments #1: Mouse Force Field" src="https://codepen.io/yusufbiyik/embed/bGjvEpm?default-tab=result&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
                        See the Pen <a href="https://codepen.io/yusufbiyik/pen/bGjvEpm">
                        ChatGPT Experiments #1: Mouse Force Field</a> by yussuf (<a href="https://codepen.io/yusufbiyik">@yusufbiyik</a>)
                        on <a href="https://codepen.io">CodePen</a>.
                    </iframe>
                    <iframe height="300" style="width: 100%;" scrolling="no" title="Auto Adjusting Navbar" src="https://codepen.io/yusufbiyik/embed/MWogbNJ?default-tab=result&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
                        See the Pen <a href="https://codepen.io/yusufbiyik/pen/MWogbNJ">
                        Auto Adjusting Navbar</a> by yussuf (<a href="https://codepen.io/yusufbiyik">@yusufbiyik</a>)
                        on <a href="https://codepen.io">CodePen</a>.
                    </iframe>
                    <iframe height="300" style="width: 100%;" scrolling="no" title="Randomly Generated DNA background" src="https://codepen.io/yusufbiyik/embed/rNrJRXB?default-tab=result&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
                        See the Pen <a href="https://codepen.io/yusufbiyik/pen/rNrJRXB">
                        Randomly Generated DNA background</a> by yussuf (<a href="https://codepen.io/yusufbiyik">@yusufbiyik</a>)
                        on <a href="https://codepen.io">CodePen</a>.
                    </iframe>
                    <iframe height="300" style="width: 100%;" scrolling="no" title="Animated SVG  Background V2" src="https://codepen.io/yusufbiyik/embed/dyjNVOj?default-tab=result&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
                        See the Pen <a href="https://codepen.io/yusufbiyik/pen/dyjNVOj">
                        Animated SVG  Background V2</a> by yussuf (<a href="https://codepen.io/yusufbiyik">@yusufbiyik</a>)
                        on <a href="https://codepen.io">CodePen</a>.
                    </iframe>
                    <iframe height="300" style="width: 100%;" scrolling="no" title="Mouse based element shaking" src="https://codepen.io/yusufbiyik/embed/PoBoqZv?default-tab=result&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
                        See the Pen <a href="https://codepen.io/yusufbiyik/pen/PoBoqZv">
                        Mouse based element shaking</a> by yussuf (<a href="https://codepen.io/yusufbiyik">@yusufbiyik</a>)
                        on <a href="https://codepen.io">CodePen</a>.
                    </iframe>
                    <iframe height="300" style="width: 100%;" scrolling="no" title="Night Mode Demo with a Card" src="https://codepen.io/yusufbiyik/embed/qBEygeE?default-tab=result&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
                        See the Pen <a href="https://codepen.io/yusufbiyik/pen/qBEygeE">
                        Night Mode Demo with a Card</a> by yussuf (<a href="https://codepen.io/yusufbiyik">@yusufbiyik</a>)
                        on <a href="https://codepen.io">CodePen</a>.
                    </iframe>
                </div>
            </div>`
    },
    {
        name: "pixel-art",
        type:"gallery",
        heading: {eng:"Pixel Art", tr:"Pixel Art"},
        contents: [
            {raw:"https://steamuserimages-a.akamaihd.net/ugc/1689373781825613769/6D86A60AD7424F0D53E00E1420C3E3D3AE3CE327/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false", proxy:false},
            {raw:"https://steamuserimages-a.akamaihd.net/ugc/1689373781825653324/43B40D1971E2FC6CD50FBC6F62ED13E1476A2FBF/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false", proxy:false},
            {raw:"https://steamuserimages-a.akamaihd.net/ugc/1633076066618028298/F53768ED0B0B5CA8852B43C3F498204B7C39693C/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false", proxy:false},
            {raw:"https://steamuserimages-a.akamaihd.net/ugc/1474317354726727080/3AA259DF9EA002FB45D128CB02B185BADD7FEA40/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false", proxy:false},
            {raw:"https://steamuserimages-a.akamaihd.net/ugc/1689373781826880823/189E3DBD5E9E0DEF1C3BAB1112722EB9327E6DDD/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false", proxy:false},
            {raw:"https://steamuserimages-a.akamaihd.net/ugc/1813239499466346854/614AD40A4B7E3B08EF7AFBCD5149C87CC18DD630/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false", proxy:false},
            {raw:"https://steamuserimages-a.akamaihd.net/ugc/1691625928964912516/F6F49F0A69A6CC68A14C19D8BA7FB9DBAA56554D/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false", proxy:false},
            {raw:"https://steamuserimages-a.akamaihd.net/ugc/1662356550778918358/D9BAB1849EBA7EC834BE8803A50C13FA3624F0B4/?imw=2048&imh=2048&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true", proxy:false},
            {raw:"https://steamuserimages-a.akamaihd.net/ugc/1689373922260238270/032A6DA2EC7F8D310E62F2D397591F83EF40D460/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false", proxy:false},
            {raw:"https://steamuserimages-a.akamaihd.net/ugc/1689373922258098329/54E0C6DE0B6526E8B5C2C528EECAC0E0E9608C82/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false", proxy:false},
        ]
    },
    {
        name: "3d-modelleme-renderlar",
        type:"gallery",
        heading: {eng:"3D Modelling/Renders",tr:"3D Modelleme/Renderlar"},
        contents: [
            {
                raw:"https://raw.githubusercontent.com/yussufbiyik/yussufbiyik.github.io/main/assets/room.webp",
                proxy:"assets/proxy/room.webp"
            },
            {
                raw:"https://github.com/yussufbiyik/yussufbiyik.github.io/blob/main/assets/finallowres.gif?raw=true",
                proxy: false
            },
            {
                raw:"https://raw.githubusercontent.com/yussufbiyik/yussufbiyik.github.io/main/assets/ard-mega-dark.webp",
                proxy:"assets/proxy/ard-mega-dark.webp"
            },
            {
                raw:"https://raw.githubusercontent.com/yussufbiyik/yussufbiyik.github.io/main/assets/nano-dark.webp",
                proxy:"assets/proxy/nano-dark.webp"
            },
            {
                raw:"https://raw.githubusercontent.com/yussufbiyik/yussufbiyik.github.io/main/assets/skull.webp",
                proxy:"assets/proxy/skull.webp"
            },
            {
                raw:"https://raw.githubusercontent.com/yussufbiyik/yussufbiyik.github.io/main/assets/delorean-arka.webp",
                proxy:"assets/proxy/delorean-arka.webp"
            },
            {
                raw:"https://raw.githubusercontent.com/yussufbiyik/yussufbiyik.github.io/main/assets/mustang-on.webp",
                proxy:"assets/proxy/mustang-on.webp"
            },
        ]
    }
]

const themes = [
    {
        name: 'darkside',
        data: {
            hoverBorderColor: 'white',
            unfocusedBorderColor: '#ffffff80',
            backgroundColor: 'black',
            patternColor: 'white',
            textAssist: false,
        }
    },
    {
        name: 'flashbang',
        data: {
            hoverBorderColor: 'black',
            unfocusedBorderColor: '#646464',
            backgroundColor: 'white',
            patternColor: 'black',
            textAssist: true,
        }
    },
    {
        name: 'sepia',
        data: {
            hoverBorderColor: '#f1ab75',
            unfocusedBorderColor: '#a57550',
            backgroundColor: '#492723',
            patternColor: '#eadbcb',
            textAssist: false,
        }
    },
    {
        name: 'neo',
        data: {
            hoverBorderColor: '#00FF41',
            unfocusedBorderColor: '#008F11',
            backgroundColor: '#0D0208',
            patternColor: '#00FF41',
            textAssist: false,
        }
    },
    {
        name: 'bios',
        data: {
            hoverBorderColor: '#a9a9a9',
            unfocusedBorderColor: '#5c5c5c',
            backgroundColor: '#00005d',
            patternColor: 'white',
            textAssist: false,
        }
    }
]

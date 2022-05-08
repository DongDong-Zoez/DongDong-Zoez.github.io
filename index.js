window.onload = () => {

    const root = document.documentElement;
    const checkbox = document.getElementById('intro-div-button');

    const sun = document.getElementById('intro-div-sun');
    const moon = document.getElementById('intro-div-moon');

    const themeswap = document.getElementById('theme-swap');
    const switcher = document.getElementById('theme-switcher');

    const elems = document.getElementsByClassName('about-me-head-image');

    const buttom = document.getElementById('search');
    const container = document.getElementById('just-contain');
    const searchWindow = document.getElementById('search-window');
    const back = document.getElementById('back');

    unhoveringRemain = () => {
        for (let i = 0; i < elems.length; i++) {
            elems[i].addEventListener('mouseenter', (event) => {
                elems[i].style.filter = 'blur(0px)'
            })
        }
    }

    darkMode = () => {
        root.style.setProperty('--background-color', 'rgb(28, 30, 33)');
        root.style.setProperty('--top-left-box-shadow', '6px 6px 12px rgb(184,185,190)');
        root.style.setProperty('--bot-right-box-shadow', '-6px -6px 12px rgb(255,255,255)!important');
        root.style.setProperty('--hover-color', 'rgb(96, 195, 96)');
        root.style.setProperty('--intro-text-color', 'rgb(211, 188, 188)');
        root.style.setProperty('--intro-bar-color', 'rgba(194, 199, 213, 0.8)');
        root.style.setProperty('--intro-bar-paragraph-color', 'rgba(194, 199, 213, 0.8)');
        root.style.setProperty('--intro-title-color', 'rgb(231, 223, 223)');
        root.style.setProperty('--sub-text-color', 'rgba(255, 255, 255, .54)');
        root.style.setProperty('--hyperlink-color', '#20dd53');
        moon.style.visibility = 'hidden';
        sun.style.visibility = 'visible';
        switcher.style.transform = 'translateX(21px)';
        switcher.innerHTML = '☾';
    }

    lightMode = () => {
        root.style.setProperty('--background-color', 'rgba(255, 255, 255, .87)');
        root.style.setProperty('--top-left-box-shadow', '6px 6px 12px rgb(184,185,190)');
        root.style.setProperty('--bot-right-box-shadow', '-6px -6px 12px rgb(255,255,255)!important');
        root.style.setProperty('--hover-color', 'rgb(41, 98, 255)');
        root.style.setProperty('--intro-text-color', 'rgba(60, 60, 60)');
        root.style.setProperty('--intro-bar-color', 'rgb(55, 73, 89)');
        root.style.setProperty('--intro-bar-paragraph-color', 'rgba(55, 73, 89, 0.5)');
        root.style.setProperty('--intro-title-color', 'rgb(33, 53, 71)');
        root.style.setProperty('--sub-text-color', 'rgba(0, 0, 0, .54)');
        root.style.setProperty('--hyperlink-color', '#2962ff');
        moon.style.visibility = 'visible';
        sun.style.visibility = 'hidden';
        switcher.style.transform = 'translateX(0px)';
        switcher.innerHTML = '☀';
    };

    dayAndNight = () => {
        sun.addEventListener('click', () => {
            console.log('hi')
        })
        moon.addEventListener('click', () => {
            darkMode();
        })
        let mode = 0;
        themeswap.addEventListener('click', () => {
            if (mode = 1 - mode) darkMode();
            else lightMode();
        })
    };

    searchEngine = () => {
        buttom.addEventListener('click', () => {
            container.style.visibility = 'hidden';
            searchWindow.style.visibility = 'visible';
        })

        back.addEventListener('click', () => {
            container.style.visibility = 'visible';
            searchWindow.style.visibility = 'hidden';
        })
    }

    window.visualViewport.addEventListener("resize", viewportHandler);
    function viewportHandler(event) {

        if (event.target.scale > 3) {
            document.body.classList.remove("hide-text");
        } else {
            var scale = 'scale(1)';
            document.body.style.webkitTransform = scale;    // Chrome, Opera, Safari
            document.body.style.msTransform = scale;       // IE 9
            document.body.style.transform = scale;
        }
    }

    lightMode();
    unhoveringRemain();
    dayAndNight();
    searchEngine();

    // var scale = 'scale(1)';
    // document.body.style.webkitTransform =  scale;    // Chrome, Opera, Safari
    // document.body.style.msTransform =  scale;       // IE 9
    // document.body.style.transform = scale;
}

function getGithubRepos() {
    return new Promise((resolve, reject) => {
        const url = 'https://api.github.com/users/DongDong-Zoez/repos?sort=updated';
        const post_url = 'https://api.github.com/repos/DongDong-Zoez/Data-Science-Blog/contents/docs';

        const headers = new Headers();
        headers.append('Accept', 'application/vnd.github.v3+json');

        const config = {
            method: 'GET',
            headers: headers,
            redirect: 'follow'
        }

        fetch(url, config).then(repos => repos.json())
            .then(repos => {
                resolve(repos);
            })
            .catch(error => console.log('error', error));
    });
}

function getGithubPosts() {
    return new Promise((resolve, reject) => {

        const post_url = 'https://api.github.com/repos/DongDong-Zoez/Data-Science-Blog/contents/docs';

        const headers = new Headers();
        headers.append('Accept', 'application/vnd.github.v3+json');

        const config = {
            method: 'GET',
            headers: headers,
            redirect: 'follow'
        }

        fetch(post_url, config).then(posts => posts.json())
            .then(posts => {
                resolve(posts);
            })
            .catch(error => console.log('error', error));
    });
}

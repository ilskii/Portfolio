// Aktiivinen sivu näkyy navigaatiopalkissa alleviivattuna (+ CSS-muotoilu.)
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.top-nav a');
    const normalizePath = path => path.endsWith('/') ? path : path + '/';
    
    navLinks.forEach(link => {
        const linkURL = new URL(link.href, window.location.origin);

        if (
            normalizePath(linkURL.pathname) === normalizePath(window.location.pathname) ||
            (normalizePath(window.location.pathname) === '/Portfolio/' && linkURL.pathname.endsWith('/index.html'))
        ) {
            link.classList.add('active');
        }
    });
});

// TABIT

// Määritellään muuttujat
function openInfo(evt, tabName) {
    var i, tabcontent, tablinks;

    // Haetaan kaikki "tabcontent"-luokkaiset elementit ja piilotetaan ne
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Haetaan kaikki tabin linkit ja poistetaan "active"-luokka
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Näytetään nykyinen tabi ja muutetaan se aktiiviseksi
    const currentTab = document.getElementById(tabName);
    if (currentTab) {
        if (tabName === "tools_languages") {
            currentTab.style.display = "grid";
            currentTab.style.flexWrap = "1fr 1fr";
        } else
            currentTab.style.display = "flex";
            currentTab.style.flexWrap = "wrap";
    }
    if (evt) {
        evt.currentTarget.className += " active";
    }
}

// Bindataan openInfo-toiminto ikkunaan, jotta se on käytettävissä
window.openInfo = openInfo;

// Näytetään ensimmäinen tabi oletuksena, kun sivu latautuu
document.addEventListener('DOMContentLoaded', function () {
    const tabContents = document.querySelectorAll('.tabcontent'); // Etsitään kaikki tabien sisältö
    const tabLinks = document.querySelectorAll('.tablinks'); // Etsitään kaikki tabien napit

    // Piilotetaan kaikki tabit aluksi
    tabContents.forEach(content => {
        content.style.display = "none";
    });

    // Poistetaan "active"-luokka kaikista napeista
    tabLinks.forEach(link => {
        link.classList.remove('active');
    });

    // Etsi ja näytä ensimmäinen aktiivinen tabi nykyiseltä sivulta
    const defaultTabContent = tabContents.length > 0 ? tabContents[0] : null; // Ensimmäisen tabin sisältö kyseisellä sivulla
    const defaultTabButton = tabLinks.length > 0 ? tabLinks[0] : null; // Ensimmäisen tabin nappi kyseisellä sivulla
    if (defaultTabContent) {
        if (defaultTabContent.id === "tools_languages") {
            defaultTabContent.style.display = "grid"; // Näytä oletustabin sisältö gridinä tools_languages tabilla
            defaultTabContent.style.gridTemplateColumns = "1fr 1fr";
        } else {
            defaultTabContent.style.display = 'flex'; // Näytä oletustabin sisältö flexinä muilla sivuilla
            defaultTabContent.style.flexWrap = "wrap";
        }
        
    }
    if (defaultTabButton) {
        defaultTabButton.classList.add('active'); // // Merkitse oletusnappi aktiiviseksi
    }
});

// Typing efekti ja welcome-teksti


// Haetaan sivun tunniste (esim. tiedostonimi tai sivun polku)
const pageKey = window.location.pathname; // Käytetään URL:n polkua tunnisteena

// Haetaan säilö, johon teksti sijoitetaan
const container = document.getElementById("typingContainer");

// Haetaan tekstisisältö suoraan HTML:stä
const readyText = container.textContent;

// Tarkistetaan localStorage, jotta tiedetään, onko efekti ollut jo kerran käynnissä tällä sivulla
const hasSeenEffect = localStorage.getItem(`typingEffectSeen_${pageKey}`);

if (hasSeenEffect) {
    // Näytetään staattinen teksti ilman typing-efektiä, jos efekti on jo suoritettu kerran
    container.textContent = readyText;
} else {
    // Muuten näytetään typing-efekti
    localStorage.setItem(`typingEffectSeen_${pageKey}`, true); // Tallennetaan tieto efektiin localStorageen sivukohtaisesti
    container.textContent = ""; // Tyhjennetään säilö tekstistä ennen animaation alkua
    container.classList.add("typing-effect"); // Lisätään animaatio-luokka säilöön
    let i = 0; // Kirjainten laskuri
    const interval = setInterval(() => {
        container.textContent += readyText[i]; // Lisätään yksi kirjain kerrallaan
        i++;
        if (i >= readyText.length) {
            clearInterval(interval); // Pysäytetään animaatio, kun kaikki kirjaimet on näytetty
            container.classList.remove("typing-effect"); // Poistetaan kursori, kun animaatio on valmis
        }
    }, 30); // Tästä voi säätää kirjoitusnopeutta vaihtamalla intervalin aikaa millisekunteina
}

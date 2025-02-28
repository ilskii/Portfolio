// Aktiivinen sivu näkyy navigaatiopalkissa alleviivattuna (+ CSS-muotoilu.)
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.top-nav a');

    navLinks.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add('active');
        }
    });
});

// Tervetuloa-tekstin efekti
document.addEventListener('DOMContentLoaded', function() {
    const text = "Hi there! My name is Ilari Tuominen, welcome to my portfolio!";
    const typingElement = document.getElementById('typing-effect');
    let index = 0;

    function typeText() {
        if (index < text.length) {
            typingElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeText, 30); // Muuta kirjoitusnopeutta tässä
        } else {
            typingElement.style.borderRight = 'none'; // Poista kursori kun kirjoitusefekti on valmis
        }
    }
    typeText();
});

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

// Näytetään nykyinen tabi, ja lisätään "active"-luokka nappiin joka avasi tabin
    document.getElementById(tabName).style.display = "block";
    if (evt) {
        evt.currentTarget.className += " active";
    }
}

// Bindataan openInfo-toiminto ikkunaan, jotta se on käytettävissä
window.openInfo = openInfo;

// Näytetään esittelyteksti oletuksena, kun sivu latautuu
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('introduction').style.display = 'block';

// Varmistetaan, että esittelytabi on aktiivinen oletuksena
    var defaultTabButton = document.querySelector(".tab button[onclick*='introduction']");
    if (defaultTabButton) {
        defaultTabButton.className += " active";
    }
});

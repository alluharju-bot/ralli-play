# RALLI — pelattava proto

[Pelaa selaimessa](https://alluharju-bot.github.io/ralli-play/)

Peli alkaa **Pajasta**. **Ajamaan** aloittaa uuden lähdön; **Radalle** avaa odotusruudun. Space käynnistää 3–2–1-laskennan. Voit antaa kierroksia jo ennen lähtöä.

- W / nuolet: kaasu ja ohjaus
- S: jarru, hitaassa vauhdissa peruutus
- A / D: ohjaus
- Space ajossa: takapyörät lukitseva käsijarru
- R: takaisin radalle, vauriot säilyvät
- Esc: uusi yritys
- Tab pohjassa: pelaajat, sijoitukset, paras kierros, nykyinen kierros ja kilpailuaika

Valikot ovat Paja, Kilpailut, Autokauppa, Bodyshop ja Asetukset. Pajan osakortit kelluvat autonäkymässä. Kortti avaa ostot ja säädöt sekä siirtää kameran valittuun kohteeseen. Studio käyttää heijastuksia, valaistusta ja hillittyä bloomia. Kassa näkyy valikoiden yläpalkissa. Osakorteissa ja ostoehdokkaissa on renderöity esikatselu; vielä puuttuvat erilliset osamallit näkyvät malliluonnoksina.

Bulancian rinnalla ovat Folkkari-buggy, Chevrolette Pikkumörkö ja VNQ-ralliauto. Osia voi vaihtaa autojen kesken, ja vauriot korjataan maksusta. **Paja → Suosikit** tallentaa virityksen nimellä ja palauttaa haluttaessa vakiovarusteet. Kokoonpanojen vaihto säilyttää vauriot. Tallennus toimii omassa selaimessa. Ajaminen on tarkoitettu tietokoneelle ja näppäimistölle tai peliohjaimelle; kosketusohjausta ei vielä ole.

Autokaupan 3D-puoliympyrässä voi selata hiiren rullalla tai vasen/oikea-nuolilla. Alareunan matalasta, vieritettävästä kuvalistasta voi valita auton suoraan. Hinta on oikealla, nimi keskellä ja avattavat ominaisuudet vasemmalla. Tuoksukuuset ovat vakiokokoonpanojen vertailuarvioita, eivät mitattuja suorituskykylukuja.

Kilpailujen taustalla häivyttyvät Kuusirinteen omasta pelimaailmasta renderöidyt toimintakuvat. Kolmesta kortista pääsee Sooloon, Yhteispeliin sekä omaan autoon ja suosikkeihin. Soolossa näkyvät kilpailun tiedot ja valitun autoluokan kärkiajat; ajasta voi ladata haamun. Oman auton näkymässä voi vaihtaa omistettua autoa tai suosikkikokoonpanoa.

Bodyshopin sivupaneelit valaisevat autoa oikeasti. Koko auton näkymässä hidas kamerakierto alkaa 15 sekunnin tauon jälkeen ja pysähtyy muokkaukseen tai kameran käyttöön. Asetuksissa on oma pidempi esittelykierros. Automaattiset kameraliikkeet voi kytkeä pois kohdasta Kuva & sää. Low, Medium, High ja Ultra muuttavat piirron tarkkuutta, valaistusta, heijastuksia, bloomia ja lumisadetta; oletus on Medium.

## Ennätykset ja haamut

**Ennätykset** avaa yhteisen listan valikoista tai maaliruudusta. Valitse automalli ja Vakio tai Viritetyt. Kierrosaikaa painamalla lataat kilpailijan haamun ja voit lähteä sitä vastaan heti. **Näytä auto** avaa tarkan kokoonpanon, jonka voi tallentaa suosikkeihin.

Nimimerkin luomisen jälkeen uudet kelvolliset yksinpeliajot tallentuvat yhteiseen listaan. Maaliruutu näyttää ajan, ennätyksen, sijoituksen ja lähetyksen tilan. Lähetysvirheen jälkeen voit yrittää uudelleen samassa peli-istunnossa. Ajat perustuvat vielä selaimessa tallennettuihin ajoihin; tuloksia ei ole suojattu huijaamiselta palvelimen ajofysiikalla.

Ajossa ajat ovat oikealla ylhäällä, sijoitus vasemmalla ylhäällä, kartta vasemmalla alhaalla sekä nopeus ja vaihde oikealla alhaalla. Checkpointin tärkein numero on erotus vertailuaikaan.

## Yhdessä · 2–4 pelaajaa

**Kilpailut → Yhteispeli**. Anna nimimerkki, luo huone ja kopioi kutsulinkki. Muut liittyvät kuusimerkkisellä koodilla. Jokainen valitsee **Valmis**, huoneen luoja **Lähtö**. Muut autot näkyvät omilla kokoonpanoillaan, pyörien liikkeillä ja irronneilla osilla. Tab-taulukko näyttää kaikkien tilanteen ajon jatkuessa. Harjoituksessa on tällä hetkellä yksi kierros, joten paras kierrosaika syntyy maalissa.

Huoneen luoja valitsee **Takavalosinfonian** kierrosmäärän tai **Ykkösajan** yhteisen aikaikkunan. Lisäksi voi ajaa harjoittelua. Säännöistä voi valita autotörmäykset, vauriot, huollon ja vakioautot. Palvelin vahvistaa porttien järjestyksen, ajat ja yhteiset autotörmäykset. Auton ajofysiikka toimii yhä pelaajan selaimessa; tämä ei vielä ole huijaussuojattu kilpailupalvelu.

Kun kilpailussa on vähintään kaksi eri kirjautunutta pelaajaa, kolmen parhaan palkinnot ovat 1 500, 900 ja 500. Muut saavat leiman, ja kymmenestä leimasta saa 1 000. Vieraat voivat ajaa mukana ilman tilipalkintoja. **HUOLTO**-alueella pysähtyminen avaa maksullisen korjauksen: hinta vahvistetaan ennen työtä. Vauriot vaikuttavat verkkokilpailussa myös tehoon ja ilmanvastukseen. Verkkotuloksia ei julkaista yksinpelin ennätyslistalle. Raketeille, luodeille ja kranaateille on verkkotapahtumien pohja, mutta pelattavia aseita ei vielä ole.

## Tili ja pilvitallennus

Yläpalkin **Kirjaudu** avaa tilinäkymän. Google-kirjautumisen toteutus on mukana, mutta painike odottaa vielä Google Cloudin sovellustunnuksen käyttöönottoa. Sähköpostilinkki on toistaiseksi ylläpitäjän testikäytössä; julkinen sähköpostikirjautuminen tarvitsee oman lähetyspalvelun.

Kirjautuneen tilille voi tallentaa autot, osat, vauriot, kassan, suosikit ja asetukset. Ensimmäisellä kerralla valitaan, siirretäänkö tämän selaimen talli tilille vai jatketaanko pilvessä olevasta tallista. Ristiriidassa pelaaja valitsee tallennuksen, ja korvattavasta kopiosta jää varmuuskopio selaimeen. Omat paikalliset ghostit eivät vielä siirry pilvitallennuksen mukana. Pelilinkki pysyy samana kaikille.

## Musiikki

Yläpalkin soittimessa on toisto/tauko, edellinen/seuraava, saman kappaleen uusinta, äänenvoimakkuus ja kappalevalikko. Kapealla näytöllä ja ajossa soitin avautuu nuottipainikkeesta. Asetukset säilyvät auton vaihdossa.

Workshop Groove on valikoiden oletuskappale. Ajossa soivat Gearshift Rush, Pulsing Bass, Racing Energy ja Rally Groove. Kappaleet vaihtuvat pehmeällä ristihäivytyksellä. Ajomusiikki jatkuu maaliruudussa ja ennätyslistassa; valikkomusiikki vaihtuu vasta Pajassa tai Kilpailuissa. Musiikki käynnistyy ensimmäisestä käyttäjätoiminnosta tai Toista-painikkeesta.

Tämä repo sisältää valmiin selainjulkaisun. [Äänilähteet ja lisenssit](audio/CREDITS.md) · [Musiikkitiedostot](audio/music/README.md).

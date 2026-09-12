# RALLI — pelattava proto

[Pelaa selaimessa](https://alluharju-bot.github.io/ralli-play/)

Peli alkaa **Pajasta**. **Ajamaan** aloittaa uuden lähdön; **Radalle** avaa odotusruudun. Space käynnistää 3–2–1-laskennan. Voit antaa kierroksia jo ennen lähtöä.

- W / nuolet: kaasu ja ohjaus
- S: jarru, hitaassa vauhdissa peruutus
- A / D: ohjaus
- Space ajossa: takapyörät lukitseva käsijarru
- R: takaisin radalle, vauriot säilyvät
- Esc: uusi yritys

Valikot ovat Paja, Kilpailut, Autokauppa, Bodyshop ja Asetukset. Pajan osakortit kelluvat autonäkymässä. Kortti avaa ostot ja säädöt sekä siirtää kameran valittuun kohteeseen. Studio käyttää heijastuksia, valaistusta ja hillittyä bloomia. Kassa näkyy valikoiden yläpalkissa.

Bulancian rinnalla ovat Folkkari-buggy, Chevrolette Pikkumörkö ja VNQ-ralliauto. Osia voi vaihtaa autojen kesken, ja vauriot korjataan maksusta. **Paja → Suosikit** tallentaa virityksen nimellä ja palauttaa haluttaessa vakiovarusteet. Kokoonpanojen vaihto säilyttää vauriot. Tallennus toimii omassa selaimessa. Ajaminen on tarkoitettu tietokoneelle ja näppäimistölle tai peliohjaimelle; kosketusohjausta ei vielä ole.

## Ennätykset ja haamut

**Ennätykset** avaa yhteisen listan valikoista tai maaliruudusta. Valitse automalli ja Vakio tai Viritetyt. Kierrosaikaa painamalla lataat kilpailijan haamun ja voit lähteä sitä vastaan heti. **Näytä auto** avaa tarkan kokoonpanon, jonka voi tallentaa suosikkeihin.

Nimimerkin luomisen jälkeen uudet kelvolliset yksinpeliajot tallentuvat yhteiseen listaan. Maaliruutu näyttää ajan, ennätyksen, sijoituksen ja lähetyksen tilan. Lähetysvirheen jälkeen voit yrittää uudelleen samassa peli-istunnossa. Ajat perustuvat vielä selaimessa tallennettuihin ajoihin; tuloksia ei ole suojattu huijaamiselta palvelimen ajofysiikalla.

Ajossa ajat ovat oikealla ylhäällä, sijoitus vasemmalla ylhäällä, kartta vasemmalla alhaalla sekä nopeus ja vaihde oikealla alhaalla. Checkpointin tärkein numero on erotus vertailuaikaan.

## Yhdessä · 2–4 pelaajaa

**Kilpailut → Yhdessä**. Anna nimimerkki, luo huone ja kopioi kutsulinkki. Muut liittyvät kuusimerkkisellä koodilla. Jokainen valitsee **Valmis**, huoneen luoja **Lähtö**. Muut autot näkyvät omilla kokoonpanoillaan, pyörien liikkeillä ja irronneilla osilla.

Verkkoharjoituksessa autot eivät vielä törmää toisiinsa. Ajo ei julkaise ennätyksiä eikä tuota palkintoja. Palvelin määrää yhteisen lähtöhetken ja viestien omistajuuden. Yhteinen ajofysiikka ja verkkotulosten vahvistus tulevat myöhemmin. Raketeille, luodeille ja kranaateille on verkkotapahtumien pohja, mutta pelattavia aseita ei vielä ole.

## Musiikki

Yläpalkin soittimessa on toisto/tauko, edellinen/seuraava, saman kappaleen uusinta, äänenvoimakkuus ja kappalevalikko. Kapealla näytöllä ja ajossa soitin avautuu nuottipainikkeesta. Asetukset säilyvät auton vaihdossa.

Workshop Groove on valikoiden oletuskappale. Ajossa soivat Gearshift Rush, Pulsing Bass, Racing Energy ja Rally Groove. Kappaleet vaihtuvat pehmeällä ristihäivytyksellä. Ajomusiikki jatkuu maaliruudussa ja ennätyslistassa; valikkomusiikki vaihtuu vasta Pajassa tai Kilpailuissa. Musiikki käynnistyy ensimmäisestä käyttäjätoiminnosta tai Toista-painikkeesta.

Tämä repo sisältää valmiin selainjulkaisun. [Äänilähteet ja lisenssit](audio/CREDITS.md) · [Musiikkitiedostot](audio/music/README.md).

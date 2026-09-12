# RALLI — pelattava proto

[Pelaa selaimessa](https://alluharju-bot.github.io/ralli-play/)

Tietokoneella pelattava ralliprototyyppi. Lähtö Space-painikkeella, jonka jälkeen näkyy 3–2–1-laskenta. Voit antaa kierroksia jo ennen lähtöä.

- W / nuolet: kaasu ja ohjaus
- S: jarru, hitaassa vauhdissa peruutus
- A / D: ohjaus
- Space ajossa: takapyörät lukitseva käsijarru
- R: takaisin radalle, vauriot säilyvät
- Esc: uusi yritys

Varikolla on viisi omaa näkymää: Kilpailut, Autokauppa, Paja, Bodyshop ja Asetukset. Autokaupan vieritettävistä autokorteista voi katsella ja ostaa neljä erilaista autoa. Pajassa moottori ja päivitysosat näkyvät auton alapuolella, ja Bodyshopissa muokataan ulkonäköä. Raha näkyy yläpalkissa myös ajon aikana.

Bulancian rinnalla ovat Folkkari-buggy, Chevrolette Pikkumörkö ja VNQ-ralliauto. Autojen osia voi vaihtaa keskenään ja vauriot korjataan maksusta. Automaatti hakee tehokasta välitystä ja osaa pudottaa useamman vaihteen kerralla. Renkaat heittävät lunta, ja checkpoint näyttää ensisijaisesti erotuksen ennätykseen. Tallennus toimii omassa selaimessa. Nykyinen versio on yksinpeli; kosketusnäyttöohjausta ei vielä ole.

Tämä repo sisältää valmiin selainjulkaisun. [Äänilähteet ja lisenssit](audio/CREDITS.md).


## Yhteiset ennätykset ja ghostit

Varikko → Yhteiset ennätykset & ghostit. Valitse automalli ja vakio- tai viritettyjen luokka. Lista avautuu omaan ikkunaan. Kierrosaikaa painamalla lataat kilpailijan haamun ja voit valita, ajatko sitä vastaan heti. Näytä auto avaa ennätyksen tarkan kokoonpanon, jonka voi tallentaa suoraan omiin suosikkeihin.

Nimimerkin luomisen jälkeen uudet kelvolliset ajot tallentuvat palvelimen yhteiseen listaan. Maaliruutu näyttää oman ennätyksen, palvelimen ilmoittaman sijoituksen sekä lähetyksen tilan. Lähetysvirheen jälkeen voit yrittää uudelleen samassa peli-istunnossa. Maaliruudusta pääsee suoraan oman luokan ennätyksiin ja kilpailijoiden haamuihin. Lista on vielä proton selaimessa tallennettuja ajoja, ei huijaussuojattu virallinen kilpailu.

Autossa on kuski ja kääntyvä ratti, avoimet kuppi-istuimet, erillinen moottorimalli sekä valittavat heiluvat nopat tai tuoksukuusi. Tienvarsikepit kaatuvat osumasta. Äänenvoimakkuus ja mykistys säilyvät myös auton vaihdossa.

Varikon **Tee autosta vakiovarusteltu** palauttaa tehdasosat ja -säädöt. **Suosikkikokoonpanot** tallentaa virityksen nimellä: osat, säädöt, värit ja koristeet saa takaisin myös vakioajon jälkeen. Suosikit tallentuvat tähän selaimeen. Varusteiden vaihto säilyttää nykyiset vauriot; korjaukset tehdään korjaamolla.

## Musiikkisoitin

Yläpalkissa on toisto/tauko, edellinen ja seuraava kappale, saman kappaleen uusinta, musiikin oma äänenvoimakkuus ja pieni kappalevalikko. Kapealla näytöllä soitin avautuu nuottipainikkeesta.

Workshop Groove soi oletuksena valikoissa. Ajossa soittolistalla ovat Gearshift Rush, Pulsing Bass, Racing Energy ja Rally Groove. Kappaleet vaihtuvat automaattisesti ja listan lopusta palataan alkuun. Kappaleen voi valita myös itse. Musiikki käynnistyy ensimmäisen klikkauksen, näppäinpainalluksen tai Toista-painikkeen jälkeen. Soittimen asetukset, valinnat ja toistokohdat tallentuvat erillään auton äänistä ja säilyvät auton vaihdossa. [Musiikkitiedostot](audio/music/README.md).

# Pelin musiikki

Käyttäjän 13.9.2026 peliin toimittamat MP3-tiedostot. Tiedostot on kopioitu muuttamattomina projektin juurikansiosta ja nimetty URL-osoitteita varten.

- `workshop-groove.mp3` — Workshop Groove, valikoiden oletuskappale.
- `gearshift-rush.mp3` — Gearshift Rush, ajosoittolista.
- `pulsing-bass.mp3` — Pulsing Bass, ajosoittolista.
- `racing-energy.mp3` — Racing Energy, ajosoittolista.
- `rally-groove.mp3` — Rally Groove, ajosoittolista.

Nämä kappaleet eivät kuulu auton äänitehosteiden CC0-lähdepaketteihin. Yllä olevat nimet ovat käyttäjän antamia; erillisiä tekijä- tai lisenssitietoja ei ole toimitettu.

Soittimen kappaleluettelo: `src/music/MusicPlayer.ts`. Toisto käyttää enintään kahta suoratoistavaa HTMLAudioElementiä. Kappaleet vaihtuvat 900 ms ristihäivytyksellä; vanha raita hiljenee ja pysähtyy. Ajomusiikki jatkuu maaliruudussa ja ennätyslistassa. Varikkosoittolista vaihtuu vasta, kun pelaaja avaa Pajan tai Kilpailut. Musiikkia ei dekoodata moottoriäänien äänipankkiin. Musiikki käynnistyy ensimmäisen käyttäjätoiminnon tai Toista-painikkeen jälkeen. Äänenvoimakkuus, taukotila, saman kappaleen uusinta, valikko- ja ajokappale sekä toistokohdat tallennetaan avaimella `ralli.music.v1` erillään autoista ja moottoriäänistä.

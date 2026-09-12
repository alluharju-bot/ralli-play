# Rallin äänitykset

Tämän sivun auton äänitehosteet perustuvat oikeisiin äänityksiin. Moottori ei ole varmennettu Lancia: ilmaisen lähdepaketin autojen malleja ja mitattuja kierroslukuja ei ole yksilöity. RPM-kerrokset ja sävy on sovitettu protolle. Moottorin synteettiset oskillaattorit on poistettu. Käyttäjän toimittamat taustamusiikit on lueteltu [erikseen](music/README.md).

Lähteet tarkistettu ja ladattu 12.9.2026. Kaikkien alla olevien tiedostojen lähdesivu ilmoittaa lisenssiksi **[CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/)**, joka sallii myös muokkauksen ja kaupallisen pelikäytön.

| Pelin tiedostot | Äänittäjä / lähde | Käytetty tallenne |
| --- | --- | --- |
| `engine-idle.wav`, `engine-low.wav`, `engine-high.wav` | muted.io — [Performance Cars](https://muted.io/performance-cars/) | Alkuperäisen WAV-paketin tallenteet 002 ja 039. Urheiluautojen kenttä-äänityksiä; merkki ei tiedossa. |
| `turbo-spool.wav`, `turbo-release.wav` | EwanPenman11 — [Turbo Spooling and Blow Off.WAV](https://freesound.org/people/EwanPenman11/sounds/659544/) | Oikean auton turbon ohiajo ja paineen purkautuminen; julkinen HQ-esikuuntelu. |
| `suspension.wav` | nmscher — [Car_Suspension_Creak.aif](https://freesound.org/people/nmscher/sounds/86234/) | Auton jousitusnarina painoa siirrettäessä; julkinen HQ-esikuuntelu. |
| `impact-light.wav` | qubodup — [Clank Car Crash Collision](https://freesound.org/people/qubodup/sounds/151624/) | Lyhyt Trigger Rallyyn tehty kolahdus, alkuperäisessä tehosteessa tallenne ja kohinakerros; julkinen HQ-esikuuntelu. |
| `impact-heavy.wav` | squareal — [Car Crash](https://freesound.org/people/squareal/sounds/237375/) | Äänitetystä metallikaapista, sorasta ja lasista kerrostettu törmäystehoste; julkinen HQ-esikuuntelu. |

Muokkaukset: mono 44,1 kHz / PCM 16 bit, lyhyet otteet, DC:n poisto, kaistan suodatus, moottorikerrosten sävelkorkeuden sovitus ja hitaan voimakkuusvaihtelun tasaus, silmukoiden ristihäivytys, tehosteiden päiden häivytys ja äänenvoimakkuuden tasaus. Lopputulos säilyy CC0:na. Törmäysäänet ovat äänitettyä foleyta, eivät dokumentti oikeasta kolarista.

`manifest.json` sisältää tarkat lähdetiedostot, otteet, muokkaukset ja SHA-256-tunnisteet. `scripts/prepare-audio.py` toistaa käsittelyn. Alkuperäiset isot äänitykset eivät kuulu pelipakettiin.

Alkuperäiset lataukset:

- [muted.io:n WAV-paketti](https://mutedio.s3.us-east-2.amazonaws.com/sounds/sample-packs/performance-cars-free-sample-pack-mutedio.zip)
- [Turbon julkinen esikuuntelu](https://cdn.freesound.org/previews/659/659544_13241413-hq.mp3)
- [Jousituksen julkinen esikuuntelu](https://cdn.freesound.org/previews/86/86234_1188748-hq.mp3)
- [Kevyen iskun julkinen esikuuntelu](https://cdn.freesound.org/previews/151/151624_71257-hq.mp3)
- [Raskaan iskun julkinen esikuuntelu](https://cdn.freesound.org/previews/237/237375_1502374-hq.mp3)

## Mahdollinen Lancia-päivitys

[Lancia Delta Integrale HF 1989 / Pole Position](https://sonniss.com/sound-effects-tag/integrale/) on maksullinen, tarkemmin yksilöity Lancia-kirjasto. Sitä ei ole ostettu eikä sen esikuuntelua ole sisällytetty peliin. Moottorikerrokset voidaan myöhemmin korvata lisensoiduilla, samasta autosta mitatuilla idle-/RPM-/kuormatallenteilla. Maksullisten kirjastojen käyttö- ja jakeluehdot tarkistetaan hankinnan yhteydessä.

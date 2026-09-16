# Weapon sound sources

These sounds are distributed with The Greatest Racing Game. Each source was
downloaded from the author's OpenGameArt entry or Kenney's own asset site.

| Game file | Original / author | License and source |
| --- | --- | --- |
| gun.wav | lmg_fire01.mp3 — KuraiWolf | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) · [Light Machine Gun](https://opengameart.org/content/light-machine-gun) |
| rocket.wav | rocket_launch_1.wav — dklon | [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/) · [Rocket Launch Pack](https://opengameart.org/content/rocket-launch-pack) |
| explosion.wav | DeathFlash.flac, Yo Frankie! — Blender Foundation | [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/) · [Big Explosion](https://opengameart.org/content/big-explosion) |
| grenade.wav | impactMetal_medium_000.ogg — Kenney | [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/) · [Impact Sounds](https://kenney.nl/assets/impact-sounds) |
| mine.wav | impactMetal_heavy_002.ogg — Kenney | CC0 1.0 · [Impact Sounds](https://kenney.nl/assets/impact-sounds) |
| ricochet.wav | impactMetal_light_002.ogg — Kenney | CC0 1.0 · [Impact Sounds](https://kenney.nl/assets/impact-sounds) |
| arm.wav | tone1.ogg — Kenney | CC0 1.0 · [Digital Audio](https://kenney.nl/assets/digital-audio) |

Modifications: mono downmix, trimmed leading silence and tails, resampled to
22,050 Hz PCM, peak normalization to 0.7 and short fades. Runtime playback adds
small pitch variations, distance attenuation, stereo positioning and compression.
Rocket, grenade and mine explosions use different pitch/envelope treatments of
the explosion sample. No endorsement by the original authors is implied.

Rebuild: `node scripts/prepare-combat-audio.mjs /path/to/downloaded/sources`.

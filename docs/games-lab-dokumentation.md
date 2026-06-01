# Games Lab Projektdokumentation

Stand: 2026-06-01

## Kurzüberblick

Games Lab ist die Mini-Games-Homepage von Sawazki Electronics. Die Seite bündelt spielbare Browser-Games, zeigt kommende Ideen und sammelt Community-Vorschläge für neue Spielmechaniken.

Live-Seiten:

- Games Lab: https://jakobsawazki.github.io/mini-games/
- Kontakt & Impressum: https://jakobsawazki.github.io/mini-games/contact.html
- Volt Runner: https://jakobsawazki.github.io/volt-runner/
- Puzzle Lab: https://jakobsawazki.github.io/puzzle-lab/
- Sawazki Electronics: https://jakobsawazki.github.io/sawazki-electronics/

## Brand-Entscheidungen

- Sichtbarer Brand-Claim: `Designed by Sawazki Electronics`
- Hero-Zeile: `Sawazki Electronics Games Lab`
- `Arcade Division` bleibt als Tonalität passend, ist aber für neue Nutzer weniger eindeutig. Deshalb nutzt die Startseite aktuell die klarere Games-Lab-Zuordnung.
- Der GitHub-Link bleibt im Footer als dezenter Transparenz- und Projektlink. Er ist nicht Teil der Hauptnavigation und stört den Spielerfluss nicht.

## Aktueller Funktionsumfang

- Statische Games-Lab-Homepage mit Neon-/Circuit-Art-Direction.
- Rasterbasierte PNG-Assets für Logo, Hero-Bild und Game-Shelf-Cover.
- Game Shelf mit Volt Runner und Puzzle Lab als Live-Spielen.
- Platzhalterkarten für `Gravity Courier` und `Pixel Kart`.
- Kontakt- und Impressumsseite mit Verweis auf die Sawazki-Electronics-Seite.
- Direktes Ideenformular auf der Startseite und Kontaktseite.
- GitHub-Pages-Deployment aus dem `main`-Branch.

## Ideenformular

Das Ideenformular verwendet FormSubmit als statischen Formular-Backend-Service:

- Endpoint: `https://formsubmit.co/ajax/jakob.sawazki@googlemail.com`
- Methode: `POST` per `fetch`
- Ziel: Einsendungen werden an `jakob.sawazki@googlemail.com` zugestellt.
- Reply-To: wird aus dem Feld `email` gesetzt, damit Antworten direkt an den Absender gehen können.
- Spam-Bremse: verstecktes Honeypot-Feld `_honey`.
- Aktuell deaktiviert: reCAPTCHA (`_captcha=false`), damit das Formular direkt auf der Seite bleibt.
- Dokumentation: https://formsubmit.co/documentation

Wichtig: Bei der ersten echten Einsendung kann FormSubmit eine Bestätigung an die Zieladresse schicken. Danach kann FormSubmit auch einen unsichtbaren Token-Endpunkt bereitstellen, damit die E-Mail-Adresse nicht offen im HTML steht.

## Repository-Struktur

```text
mini-games/
  assets/
    games-lab-logo.png
    games-lab-hero.png
    cover-volt-runner.png
    cover-puzzle-lab.jpg
    cover-gravity-courier.png
    cover-pixel-kart.png
  docs/
    games-lab-dokumentation.md
  contact.html
  index.html
  main.js
  styles.css
  README.md
```

## Versionszustände Mini-Games

| Version | Commit | Inhalt |
| --- | --- | --- |
| v0.1 | `65969e6` | Erste Mini-Games-Homepage |
| v0.2 | `e7c5b51` | Games-Lab-Brand für Sawazki Electronics |
| v0.3 | `6222089` | Raster-Logo, Hero-Bild und Game-Shelf-Artworks |
| v0.4 | `2fd9d37` | Deutsche Texte, Umlaute und lokalisierte Game-Shelf-Texte |
| v0.5 | `3b870c9` | Direktes Ideenformular, klarere Hero-Zeile und Projektdokumentation |
| v0.6 | `7d19ce2` | Puzzle Lab als zweites Live-Game in Game Shelf und Zufallsstart |
| v0.7 | aktueller Stand | Puzzle Lab mit Acryl-Naturcover auf der Hauptseite |

## Versionszustände Volt Runner

| Version | Commit | Inhalt |
| --- | --- | --- |
| v0.1 | `a9a94d8` | Erster Volt-Runner-Prototyp |
| v0.2 | `ca3f064` | Schwierigkeitslevel leicht, mittel und schwer |
| v0.3 | `efb91de` | Rücklinks zur Games-Lab-Hauptseite |
| v0.4 | `9c5f623` | Gemeinsames rasterbasiertes Games-Lab-Branding |

## Versionszustände Puzzle Lab

| Version | Commit | Inhalt |
| --- | --- | --- |
| v0.1 | `733979c` | Puzzle-Game mit Upload, Beispielbildern und drei Schwierigkeitsstufen |
| v0.2 | aktueller Stand | Futuristische Beispielbilder durch Acryl-Naturmotive ersetzt |

## Lokale Entwicklung

```powershell
cd "G:\Meine Ablage\Codex\mini-games"
python -m http.server 4173 --bind 127.0.0.1
```

Danach im Browser öffnen:

```text
http://127.0.0.1:4173/
```

Syntaxcheck:

```powershell
node --check main.js
```

## Deployment

1. Änderungen im Google-Drive-Projektordner bearbeiten.
2. Lokal im Browser prüfen.
3. Commit auf `main` erstellen.
4. Nach GitHub pushen.
5. GitHub Pages veröffentlicht die neue Version unter `https://jakobsawazki.github.io/mini-games/`.

## Nächste sinnvolle Schritte

- FormSubmit-E-Mail nach der ersten echten Einsendung bestätigen.
- Falls der Traffic steigt: reCAPTCHA wieder aktivieren oder auf einen eigenen kleinen Backend-Endpunkt wechseln.
- Für jedes neue Game eine eigene Cover-Grafik und einen eigenen Status im Game Shelf ergänzen.
- Bei größeren Games Einbettung direkt auf der Games-Lab-Seite prüfen.

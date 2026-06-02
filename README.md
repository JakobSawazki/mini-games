# Games Lab

Stand: 2026-06-02

Games Lab ist die statische Games-Homepage von Sawazki Electronics. Die Seite bündelt spielbare Browser-Games, Spielprototypen, kommende Game-Ideen und Community-Vorschläge.

## Live-Seiten

- Games Lab: https://jakobsawazki.github.io/games-lab/
- Kontakt & Impressum: https://jakobsawazki.github.io/games-lab/contact.html
- Volt Runner: https://jakobsawazki.github.io/volt-runner/
- Puzzle Lab: https://jakobsawazki.github.io/puzzle-lab/
- Wimmel Lab: https://jakobsawazki.github.io/wimmel-lab/
- Sawazki Electronics: https://jakobsawazki.github.io/sawazki-electronics/

## Brand

- Sichtbarer Brand-Claim: `Designed by Sawazki Electronics`
- Hero-Zeile: `Sawazki Electronics Games Lab`
- Das Games-Lab-Logo ist ein rasterbasiertes Bildmotiv: Neon-Labor-Kolben mit Gamepad-D-Pad, Buttons und Energiepartikeln.
- Das Logo soll Labor-Experiment, Gaming und Arcade-Energie in einem einfach merkbaren Symbol verbinden.
- Das Games-Lab-Logo liegt zentral im Games-Lab-Projekt und wird von Unterprojekten als gemeinsames Brand-Asset verlinkt.
- Der GitHub-Link bleibt im Footer als dezenter Transparenz- und Projektlink.

## Funktionsumfang

- Statische Games-Lab-Homepage mit Neon-/Circuit-Art-Direction.
- Rasterbasierte PNG-/JPG-Assets für Logo, Hero-Bild und Game-Shelf-Cover.
- Game Shelf mit Volt Runner, Puzzle Lab und Wimmel Lab als Live-Spielen.
- Platzhalterkarten für `Gravity Courier` und `Pixel Kart`.
- Kontakt- und Impressumsseite mit Verweis auf die Sawazki-Electronics-Seite.
- Footer-Brand-Link auf die Sawazki-Electronics-Seite.
- Direktes Ideenformular auf der Startseite und Kontaktseite.
- Interaktives Hero-Bild mit Hover-Sweep und Klick-Impuls.
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

## Brand Assets

- `assets/games-lab-logo.png` enthält das Games-Lab-Logo als Rasterbild.
- `assets/games-lab-hero.png` enthält das interaktive Hero-Highlight-Bild.
- `assets/cover-volt-runner.png` enthält das Volt-Runner-Shelf-Cover.
- `assets/puzzle-lab-logo.png` enthält das Puzzle-Lab-Logo für die Shelf-Karte.
- `assets/cover-wimmel-lab.png` enthält das Wimmel-Lab-Shelf-Cover.
- `assets/wimmel-lab-logo.png` enthält das Wimmel-Lab-Logo als Rasterbild.
- `assets/cover-gravity-courier.png` und `assets/cover-pixel-kart.png` enthalten Cover für zukünftige Game-Ideen.

## Repository-Struktur

```text
Games Lab/
  assets/
    games-lab-logo.png
    games-lab-hero.png
    cover-volt-runner.png
    puzzle-lab-logo.png
    cover-wimmel-lab.png
    wimmel-lab-logo.png
    cover-gravity-courier.png
    cover-pixel-kart.png
  contact.html
  index.html
  main.js
  styles.css
  README.md
```

## Versionszustände Games Lab

| Version | Commit | Inhalt |
| --- | --- | --- |
| v0.1 | `65969e6` | Erste Mini-Games-Homepage |
| v0.2 | `e7c5b51` | Games-Lab-Brand für Sawazki Electronics |
| v0.3 | `6222089` | Raster-Logo, Hero-Bild und Game-Shelf-Artworks |
| v0.4 | `2fd9d37` | Deutsche Texte, Umlaute und lokalisierte Game-Shelf-Texte |
| v0.5 | `3b870c9` | Direktes Ideenformular, klarere Hero-Zeile und Projektdokumentation |
| v0.6 | `7d19ce2` | Puzzle Lab als zweites Live-Game in Game Shelf und Zufallsstart |
| v0.7 | `edaee91` | Puzzle Lab mit Acryl-Naturcover auf der Hauptseite |
| v0.8 | `1e5e5a3` | Neues Games-Lab-Logo mit Labor- und Gaming-Motiv |
| v0.9 | `41e2fc4` | Footer-Brand-Link auf die Sawazki-Electronics-Seite |
| v0.10 | `ffb3b28` | Präzisierter Impressumstext für Games Lab |
| v0.11 | `61c2ec9` | Ordner und Repository auf Games Lab umbenannt, interaktives Hero-Bild, größeres Brand-Logo und Puzzle-Lab-Logo im Game Shelf |
| v0.12 | `64f2002` | Projektdokumentation vollständig in die README integriert und separater Docs-Ordner entfernt |
| v0.13 | aktueller Stand | Wimmel Lab als drittes Live-Spiel in Hero, Zufallsstart und Game Shelf ergänzt |

## Versionszustände Volt Runner

| Version | Commit | Inhalt |
| --- | --- | --- |
| v0.1 | `a9a94d8` | Erster Volt-Runner-Prototyp |
| v0.2 | `ca3f064` | Schwierigkeitslevel leicht, mittel und schwer |
| v0.3 | `efb91de` | Rücklinks zur Games-Lab-Hauptseite |
| v0.4 | `9c5f623` | Gemeinsames rasterbasiertes Games-Lab-Branding |
| v0.5 | `9ec0879` | Aktualisiertes gemeinsames Games-Lab-Logo |
| v0.6 | `f1fbada` | Rücklinks auf die neue Games-Lab-URL und zentrales Logo-Asset |

## Versionszustände Puzzle Lab

| Version | Commit | Inhalt |
| --- | --- | --- |
| v0.1 | `733979c` | Puzzle-Game mit Upload, Beispielbildern und drei Schwierigkeitsstufen |
| v0.2 | `205067e` | Futuristische Beispielbilder durch Acryl-Naturmotive ersetzt |
| v0.3 | `4d8cafd` | Jigsaw-Teile, separate Ablage, Puzzle-Tisch, ausblendbarer Status und drei Tiermotive |
| v0.4 | `1473594` | Eigenes Puzzle-Lab-Logo und links ausgerichtete Stage-Überschrift |
| v0.5 | `2e7222e` | Aktualisiertes gemeinsames Games-Lab-Logo |
| v0.6 | `3002613` | Engerer Puzzle-Tisch, sortierbare Ablage und ausblendbare Bildbereiche |
| v0.7 | `7b6a72b` | Cache-Buster für Puzzle-Lab-Assets |
| v0.8 | `112073c` | Zentrales Games-Lab-Logo, neue Games-Lab-Links und unsichtbare Puzzle-Zielraster |

## Versionszustände Wimmel Lab

| Version | Commit | Inhalt |
| --- | --- | --- |
| v0.1 | aktueller Stand | Wimmelbild-Suchspiel mit Inventar, Rätseln, generierten Rasterbildern und Three.js-Schatzkiste |

## Lokale Entwicklung

```powershell
cd "G:\Meine Ablage\Codex\Games Lab"
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
5. GitHub Pages veröffentlicht die neue Version unter `https://jakobsawazki.github.io/games-lab/`.

## Nächste sinnvolle Schritte

- Startseiten-Text noch stärker als kreatives Games Lab mit Spielbereichen, Prototypen und Community-Ideen formulieren.
- Community-Pulse statt klassischer Sternebewertung prüfen.
- FormSubmit-E-Mail nach der ersten echten Einsendung bestätigen.
- Falls der Traffic steigt: reCAPTCHA wieder aktivieren oder auf einen eigenen kleinen Backend-Endpunkt wechseln.
- Für jedes neue Game eine eigene Cover-Grafik und einen eigenen Status im Game Shelf ergänzen.
- Bei größeren Games Einbettung direkt auf der Games-Lab-Seite prüfen.

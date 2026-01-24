# [Yeets!](https://yeets.de)

Dieses Projekt verwendet statisches HTML und SCSS.

## Installation

Um die Abhängigkeiten (insbesondere Sass) zu installieren, führen Sie folgenden Befehl aus:

```bash
npm install
```

## Entwicklung

### SCSS kompilieren

Um die SCSS-Dateien einmalig in CSS zu kompilieren:

```bash
npm run build:css
```

Um die SCSS-Dateien bei Änderungen automatisch neu zu kompilieren (Watch-Mode):

```bash
npm run watch:css
```

Die kompilierte Datei befindet sich unter `html/assets/scss/main.min.css`.

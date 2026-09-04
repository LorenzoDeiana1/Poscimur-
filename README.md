# POSCIMUR — Website-Entwurf

Statischer Entwurf, lauffähig ohne Server-Software.

## Auf GitHub Pages veröffentlichen
1. Neues Repository anlegen (z. B. `poscimur-entwurf`).
2. Alle Dateien dieses Ordners markieren (Strg+A) und in das Repository ziehen — es gibt keine Unterordner, alles liegt auf einer Ebene.
3. Im Repository: **Settings → Pages → Source: Deploy from a branch**, Branch `main`, Ordner `/ (root)`, speichern.
4. Nach ein bis zwei Minuten ist der Entwurf erreichbar unter `https://<benutzername>.github.io/poscimur-entwurf/`.

## Struktur
- `index.html` — Startseite
- `referenzen.html` — Referenzen
- 17 Unterseiten, z. B. `itk.html`, `facility.html`, `datenschutz.html`
- `poscimur-unterseiten.dc.html` — gemeinsame Vorlage für Kopfzeile, Fußzeile und Layout aller Unterseiten (muss mit hochgeladen werden)
- `support.js` — Laufzeit-Bibliothek
- Bilder und Logos als einzelne Dateien auf derselben Ebene (`itk-serverraum.png`, `poscimur-lockup-dark.png` …)

## Hinweise
- Die Seiten benötigen eine Internetverbindung (React wird von unpkg.com geladen).
- Ein Teil der Bilder (Ansprechpartner-Fotos, Kunden- und Sponsoring-Logos, Referenzschreiben) wird noch von www.poscimur.de geladen. Diese Dateien sollten mit ins Projekt übernommen werden, bevor die Seite live geht.
- Ein direkter Doppelklick auf `index.html` funktioniert nicht — die Seiten müssen über einen Webserver bzw. GitHub Pages ausgeliefert werden.

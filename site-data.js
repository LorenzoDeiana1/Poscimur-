/* POSCIMUR — zentrale Datenbasis.
   Kontaktdaten, Kundenliste und Geschäftsfelder werden AUSSCHLIESSLICH hier gepflegt
   und von allen Seiten gelesen. Telefonnummern/Adressen sind noch nicht final. */
window.POSCIMUR_DATA = {
  company: {
    name: 'POSCIMUR GmbH',
    since: 1994,
    ceo: 'Andreas Fessel',
    register: 'Amtsgericht Stuttgart',
    registerNo: 'HRB 19216',
    taxNo: '56464/03189'
  },
  /* TODO: finale Kontaktdaten — Telefonnummern und Adressen werden noch geändert */
  contact: {
    street: 'Goethestraße 5',
    zip: '71116',
    city: 'Gärtringen',
    phone: '0711 / 93 23 50-0',
    phoneHref: 'tel:+4971193235000',
    email: 'info@poscimur.de'
  },
  locations: [
    { id: 'gaertringen', name: 'Gärtringen', note: 'Hauptsitz', address: 'Goethestraße 5, 71116 Gärtringen', phone: '0711 / 93 23 50-0' },
    { id: 'calw', name: 'Calw', note: 'Adresse folgt', address: '[Adresse folgt]', phone: '[Telefon folgt]' },
    { id: 'schwabach', name: 'Schwabach', note: 'Adresse folgt', address: '[Adresse folgt]', phone: '[Telefon folgt]' }
  ],
  services: [
    { id: 'itk', label: 'ITK', href: 'POSCIMUR Unterseiten.dc.html#itk' },
    { id: 'schulen', label: 'IT- und Medientechnik für Schulen', href: 'POSCIMUR Unterseiten.dc.html#schulen' },
    { id: 'facility', label: 'Facility Management', href: 'POSCIMUR Unterseiten.dc.html#facility' },
    { id: 'sachkosten', label: 'Sachkosten', href: 'POSCIMUR Unterseiten.dc.html#sachkosten' },
    { id: 'lohn', label: 'Innovative Lohnsysteme', href: 'POSCIMUR Unterseiten.dc.html#lohn' }
  ],
  /* Kundenliste — beliebig erweiterbar. ref = Anker der zugehörigen Referenz
     auf der Referenzen-Seite (leer lassen, wenn keine Referenz vorhanden). */
  customers: [
    { logo: 'https://www.poscimur.de/referenzen/logos-h/h35.png', name: 'St. Cyriak', ref: 'st-cyriak' },
    { logo: 'https://www.poscimur.de/referenzen/logos-h/h47.png', name: 'Kliniken Kreis Mühldorf a. Inn', ref: 'kliniken-muehldorf' },
    { logo: 'https://www.poscimur.de/referenzen/logos-m/m009.png', name: 'Eissmann Group Automotive', ref: 'eissmann' },
    { logo: 'https://www.poscimur.de/referenzen/logos-p/p75.png', name: 'Stadtwerke Dreieich', ref: 'stadtwerke-dreieich' },
    { logo: 'https://www.poscimur.de/referenzen/logos-p/p79.png', name: 'IHK Niederbayern', ref: 'ihk-niederbayern' },
    { logo: 'https://www.poscimur.de/referenzen/logos-s/s18.png', name: 'Antenne Bayern', ref: 'antenne-bayern' },
    { logo: 'https://www.poscimur.de/referenzen/logos-s/s45.png', name: 'HUK Coburg', ref: 'huk-coburg' },
    { logo: 'https://www.poscimur.de/referenzen/logos-m/m088.png', name: 'Nestlé Schöller', ref: 'nestle-schoeller' },
    { logo: 'https://www.poscimur.de/referenzen/logos-s/s53.png', name: 'Labor Limbach', ref: 'labor-limbach' },
    { logo: 'https://www.poscimur.de/referenzen/logos-m/m097.png', name: 'Richard Bergner Holding', ref: 'richard-bergner' },
    { logo: 'https://www.poscimur.de/referenzen/logos-p/p82.png', name: 'Stadt Hilpoltstein', ref: 'stadt-hilpoltstein' },
    { logo: 'https://www.poscimur.de/referenzen/logos-h/h81.png', name: 'Hessischer Diakonie Verein e. V.', ref: 'hessischer-diakonie-verein' },
    { logo: 'https://www.poscimur.de/referenzen/logos-s/s78.png', name: 'kolumbus gmbh', ref: 'kolumbus' },
    { logo: 'https://www.poscimur.de/referenzen/logos-p/p52.png', name: 'Landratsamt Würzburg', ref: 'landratsamt-wuerzburg' },
    { logo: 'https://www.poscimur.de/referenzen/logos-h/h83.png', name: 'Regiomed-Kliniken GmbH', ref: 'regiomed' },
    { logo: 'https://www.poscimur.de/referenzen/logos-h/h08.png', name: 'Klinikum Bad Hersfeld GmbH', ref: 'klinikum-bad-hersfeld' },
    { logo: 'https://www.poscimur.de/referenzen/logos-p/p162-grosse-kreisstadt-dachau.jpg', name: 'Große Kreisstadt Dachau', ref: '' },
    { logo: 'https://www.poscimur.de/referenzen/logo-schule/stadt-lauf-a.d.pegnitz.png', name: 'Stadt Lauf a. d. Pegnitz', ref: '' },
    { logo: 'https://www.poscimur.de/referenzen/logos-p/p152-landratsamt-wuerzburg.png', name: 'Landratsamt Würzburg', ref: 'landratsamt-wuerzburg' },
    { logo: 'https://www.poscimur.de/referenzen/logo-il/deegenberg-klinik.jpg', name: 'Deegenberg-Klinik', ref: '' },
    { logo: 'https://www.poscimur.de/referenzen/logos-p/p54.png', name: '', ref: '' },
    { logo: 'https://www.poscimur.de/referenzen/logos-h/h49.png', name: '', ref: '' },
    { logo: 'https://www.poscimur.de/referenzen/logos-m/m129.png', name: '', ref: '' },
    { logo: 'https://www.poscimur.de/referenzen/logos-h/h28.png', name: '', ref: '' },
    { logo: 'https://www.poscimur.de/referenzen/logos-s/s56.png', name: '', ref: '' },
    { logo: 'https://www.poscimur.de/referenzen/logos-p/p12.png', name: '', ref: '' },
    { logo: 'https://www.poscimur.de/referenzen/logos-m/m043.png', name: '', ref: '' },
    { logo: 'https://www.poscimur.de/referenzen/logos-p/p80.png', name: '', ref: '' },
    { logo: 'https://www.poscimur.de/referenzen/logos-p/p91.png', name: '', ref: '' },
    { logo: 'https://www.poscimur.de/referenzen/logos-p/p137.png', name: '', ref: '' },
    { logo: 'https://www.poscimur.de/referenzen/logos-p/p111.png', name: '', ref: '' },
    { logo: 'https://www.poscimur.de/referenzen/logos-p/p124.png', name: '', ref: '' },
    { logo: 'https://www.poscimur.de/referenzen/logos-s/s04.png', name: '', ref: '' },
    { logo: 'https://www.poscimur.de/referenzen/logos-p/p07.png', name: '', ref: '' },
    { logo: 'https://www.poscimur.de/referenzen/logos-m/m024.png', name: '', ref: '' },
    { logo: 'https://www.poscimur.de/referenzen/logos-h/h20.png', name: '', ref: '' },
    { logo: 'https://www.poscimur.de/referenzen/logos-m/m016.png', name: '', ref: '' },
    { logo: 'https://www.poscimur.de/referenzen/logos-m/m125.png', name: '', ref: '' },
    { logo: 'https://www.poscimur.de/referenzen/logos-p/p122.png', name: '', ref: '' },
    { logo: 'https://www.poscimur.de/referenzen/logos-s/s13.png', name: '', ref: '' },
    { logo: 'https://www.poscimur.de/referenzen/logos-m/m086.png', name: '', ref: '' },
    { logo: 'https://www.poscimur.de/referenzen/logos-p/p130.png', name: '', ref: '' },
    { logo: 'https://www.poscimur.de/referenzen/logos-s/s69.png', name: '', ref: '' },
    { logo: 'https://www.poscimur.de/referenzen/logos-m/m067.png', name: '', ref: '' },
    { logo: 'https://www.poscimur.de/referenzen/logos-m/m074.png', name: '', ref: '' },
    { logo: 'https://www.poscimur.de/referenzen/logos-p/p150.png', name: '', ref: '' },
    { logo: 'https://www.poscimur.de/referenzen/logos-h/h43.png', name: '', ref: '' }
  ]
};

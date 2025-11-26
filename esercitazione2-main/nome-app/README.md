# 🌤️ Esploratore Meteo

Applicazione Angular moderna e responsiva per cercare il meteo corrente di una città usando le API gratuite di **Open-Meteo**.

## ✨ Caratteristiche principali

- 🔍 **Ricerca per città**: Geocoding in tempo reale con API Open-Meteo
- 🌡️ **Meteo attuale**: Temperatura, velocità del vento, condizioni meteo
- 📊 **Previsioni orarie**: Prossime 24 ore con temperatura e vento orari
- 🎨 **Design moderno**: Interfaccia elegante con gradient background e animazioni fluide
- 📱 **Responsive**: Perfettamente adattato a mobile, tablet e desktop
- ⚡ **Performance**: Componente standalone Angular con logica asincrona ottimizzata
- 🎯 **UX intuitiva**: Emoji per le condizioni meteo, feedback visivo durante il caricamento

## 📋 Requisiti

- **Node.js** LTS (v18+ consigliato)
- **npm** (incluso con Node.js)
- Browser moderno (Chrome, Firefox, Safari, Edge)

## 🚀 Avviare l'app in locale

### 1. Clona e accedi alla cartella

```bash
cd /workspaces/repomartedisera/esercitazione2-main/nome-app
```

### 2. Installa le dipendenze

```bash
npm install
```

### 3. Avvia il server di sviluppo

```bash
npx ng serve
```

Oppure, se hai configurato uno script npm:

```bash
npm start
```

### 4. Apri il browser

Accedi a `http://localhost:4200` — l'app si caricherà automaticamente.

## 🎯 Come usare l'app

1. **Inserisci una città**: Digita il nome della città nel campo di ricerca (es. "Roma", "Milano", "Palermo")
2. **Premi "🔍 Mostra meteo"**: Oppure premi Enter per cercare
3. **Visualizza i risultati**: Vedrai il meteo attuale e le previsioni orarie
4. **Cancella la ricerca**: Usa il pulsante "✖ Azzera" per ripulire tutto

## 🏗️ Struttura del progetto

```
src/
├── app/
│   ├── weather-explorer.component.ts      # Logica componente (geocoding, fetch meteo)
│   ├── weather-explorer.component.html    # Template HTML con layout responsivo
│   ├── weather-explorer.component.css     # Stili moderni con animazioni
│   ├── app.ts                             # Root component standalone
│   ├── app.html                           # Template root
│   ├── app.css                            # Stili globali
│   ├── app.routes.ts                      # Configurazione router (vuoto, app single-page)
│   ├── app.config.ts                      # Config Angular
│   └── app.spec.ts                        # Test unitari
├── main.ts                                # Punto di ingresso app
└── index.html                             # Shell HTML
```

## 🎨 Design & UX

- **Gradient background**: Sfondo viola-blu per un look moderno
- **Smooth animations**: slideDown, slideUp, fadeIn per transizioni fluide
- **Interactive elements**: Hover effects su pulsanti e previsioni orarie
- **Color coding**: Viola per accent, grigi per testo, rosso per errori
- **Typography**: Font di sistema per performance, pesi e dimensioni ottimizzate

## 🔧 Configurazione Tecnica

- **Framework**: Angular 20.x standalone components
- **State management**: Signal di Angular per reattività
- **API**: 
  - Geocoding: `geocoding-api.open-meteo.com/v1/search`
  - Meteo: `api.open-meteo.com/v1/forecast`
- **Build**: Angular CLI con devkit builder
- **Stili**: CSS puro con media queries per responsività

## 📦 Dipendenze principali

```json
{
  "@angular/core": "^20.x",
  "@angular/common": "^20.x",
  "@angular/forms": "^20.x"
}
```

## 💡 Funzionalità dettagliate

### Ricerca Città
- Campo input con debounce visuale
- Enter key per submit automatico
- Messaggi di errore chiari se città non trovata

### Meteo Attuale
- Temperatura in °C
- Velocità vento in m/s
- Codice meteo WMO interpretato come emoji
- Data/ora dell'aggiornamento

### Previsioni Orarie
- Grid responsivo: 3 colonne desktop, 2 mobile
- Fino a 24 ore di previsioni
- Hover effects per interattività

## 🎓 Estensioni consigliate

- 💾 Salvare l'ultima ricerca in `localStorage`
- 🗺️ Integrare mappa interattiva (Leaflet/Mapbox)
- 🔔 Sistema di allarmi per condizioni meteo critiche
- 📈 Grafico del trend temperatura/vento
- 🌙 Tema scuro con toggle

## 🐛 Risoluzione problemi

### Errore "City not found"
- Verifica l'ortografia della città
- Prova con città più grandi o capoluoghi

### Errore "Impossibile recuperare il meteo"
- Controlla la connessione internet
- API Open-Meteo potrebbe essere temporaneamente non disponibile

### App non carica
- Verifica che `npm install` sia completato
- Assicurati che `node_modules` sia presente
- Prova: `rm -rf dist .angular node_modules && npm install && npx ng serve`

## 📄 Licenza

Progetto sviluppato con Angular e API gratuite di Open-Meteo (licenza CC 4.0).

## 🙌 Crediti

- **API Meteo**: [Open-Meteo](https://open-meteo.com) - Gratuito e senza API key
- **Framework**: [Angular](https://angular.io)
- **Design**: Moderno, responsive, accessibile

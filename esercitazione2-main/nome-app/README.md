# Esploratore Meteo

Applicazione Angular minimale per cercare il meteo corrente di una città usando le API gratuite di Open‑Meteo.

## Funzionalità principali
- Ricerca per nome città (Open‑Meteo geocoding)
- Meteo corrente (temperatura, vento, codice meteo)
- Previsioni orarie (prime 24 ore)
- Modalità Mock (per usare dati finti quando desideri evitare chiamate di rete o per test locali)

## Requisiti
- Node.js (LTS consigliato)
- npm

## Avviare l'app in locale
1. Posizionati nella cartella dell'app:

```bash
cd /workspaces/repomartedisera/esercitazione2-main/nome-app
```

2. Installa le dipendenze (se non l'hai già fatto):

```bash
npm install
```

3. Avvia il server di sviluppo:

```bash
npx ng serve
# oppure
npm start
```

4. Apri il browser su `http://localhost:4200`.

## Modalità Mock — cosa fa
Quando attivi la `Modalità Mock` nell'interfaccia, il componente non esegue le chiamate di rete per recuperare dati reali: invece restituisce un set di risultati di esempio incorporati nel codice (`SAMPLE_MOCK_RESULTS`). Questo è utile se la rete è assente, se hai problemi di CORS oppure vuoi provare l'app offline.

Limitazioni della Mock mode
- I dati mostrati sono statici (esempio). Non rappresentano previsioni reali.
- La modalità Mock deve essere abilitata manualmente dall'interfaccia; non intercetta automaticamente errori di rete.

## Struttura del progetto
- `src/app/weather-explorer.component.*`: componente principale con logica di geocoding e meteo.
- `src/main.ts`, `src/index.html`: bootstrap e shell dell'app.
- `angular.json`, `package.json`: configurazione build e dipendenze.

## Idee per estensioni
- Sostituire le emoji con icone SVG più curate.
- Salvare l'ultima ricerca in `localStorage` per persistenza.
- Mostrare mappa o dettaglio esteso per la città selezionata.

Se vuoi, applico una di queste estensioni ora.

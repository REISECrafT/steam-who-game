# STEAM Who? - L'Indovina Chi delle Scienze🧠💻

## 📖 Introduzione
**STEAM Who?** è un'applicazione web interattiva, ispirata al celebre gioco da tavolo "Indovina Chi?", progettata per far scoprire e valorizzare 20 figure storiche di spicco nei campi **STEAM** (Scienza, Tecnologia, Ingegneria, Arte e Matematica).

## 📊 Analisi Matematica e Complessità Computazionale
Il punto di forza tecnico del progetto risiede nella sua efficienza algoritmica. Il motore di gioco non effettua controlli casuali o tentativi isolati, ma si basa su una struttura logica organizzata ad **Albero Decisionale Binario**, in cui ogni risposta fornita dall'utente può essere esclusivamente SÌ o NO.

Questo approccio permette al sistema di funzionare per esclusione progressiva:
* Ogni scelta dell'utente permette di scartare istantaneamente interi gruppi di candidati che non rispecchiano la caratteristica confermata.
* Gestendo un database composto da **esattamente 20 personaggi**, l'albero delle domande è stato sviluppato in modo bilanciato per ottimizzare ogni bivio logico.

Grazie a questa precisa impostazione della struttura dati, il sistema **garantisce matematicamente di individuare il personaggio pensato in un massimo assoluto di 5 domande**. Il campo di ricerca viene ristretto così rapidamente da azzerare i passaggi ridondanti, assicurando un'esperienza di gioco fluida, logica e immediata.

### Perché proprio 5 domande?
* Con 4 domande è possibile distinguere al massimo $2^4 = 16$ scenari (insufficienti per i nostri 20 personaggi).
* Con 5 domande si possono coprire fino a $2^5 = 32$ scenari.
La scelta progettuale di strutturare l'albero in modo bilanciato **garantisce matematicamente** che il computer identificherà il personaggio scelto dall'utente in un **massimo assoluto di 5 passaggi**, ottimizzando l'esperienza utente e le risorse di calcolo.

## 🛠️ Stack Tecnologico e Sviluppo
Il progetto è stato sviluppato interamente lato client (Frontend) strutturando il codice in tre moduli:
* **HTML5 (`index.html`):** Gestisce l'impalcatura semantica della pagina e l'organizzazione della griglia dei 20 personaggi.
* **CSS3 (`style.css`):** Cura l'interfaccia utente (UI/UX). Sfrutta la classe `.eliminated` per applicare in tempo reale filtri avanzati (`grayscale(100%) blur(1px)`) e gestire la transizione fluida di sbiadimento dei personaggi scartati.
* **JavaScript (`script.js`):** Il motore logico dell'applicazione. L'albero decisionale è mappato tramite un oggetto JSON nidificato ricorsivamente. Lo script intercetta l'input dell'utente, naviga tra i nodi dell'albero e manipola il DOM modificando dinamicamente le classi CSS in base all'array dei personaggi `rimasti`.

## 🚀 Come avviare il progetto
1. Scarica o clona questa repository.
2. Assicurati che la struttura delle cartelle contenga le immagini dei personaggi e i fogli di stile.
3. Apri il file `index.html` in un browser web. Non è richiesta alcuna installazione o configurazione server!

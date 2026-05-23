# STEAM Who? (SteamAkinator) 🧠💻

## 📖 Introduzione
**STEAM Who?** è un'applicazione web interattiva, ispirata al celebre gioco da tavolo "Indovina Chi?", progettata per far scoprire e valorizzare 20 figure storiche di spicco nei campi **STEAM** (Scienza, Tecnologia, Ingegneria, Arte e Matematica).

## 📊 Analisi Matematica e Complessità Computazionale
Il punto di forza tecnico del progetto risiede nella sua efficienza algoritmica. Il motore di gioco non si basa su controlli casuali, ma su una struttura dati ad **Albero Decisionale Binario** (dove ogni risposta può essere solo SÌ o NO).

L'algoritmo opera con una complessità computazionale temporale pari a **O(log₂ N)**, dove *N* rappresenta il numero di elementi nel database. 
Dato il dominio fisso composto da **esattamente N = 20 personaggi**, l'altezza massima dell'albero (ovvero il numero massimo di domande necessarie nel caso peggiore per indovinare il personaggio) è calcolata tramite la funzione logaritmica intera superiore:

$$\text{Altezza Albero} = \lceil \log_2(20) \rceil = 5 \text{ domande}$$

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

# tema3-HTML
tema3-HTML

1. Sa se creeze 5 func?ii care sa calculeze urmatoarele lucruri:
- square: va primi un argument (numeric) si va intoarce valoarea patrata a acelui argument.
- half: va primi un argument (numeric) si va intoarce jumatate din valoarea acestuia.
- percent: va primi doua argumente (numerice) trebuie sa se calculeze ce procent reprezinta primul numar din al doilea
- area : va primi un argument raza (numeric) trebuie sa se calculeze aria cercului cu raza data. Optional rotunjiti rezultatul la doua zecimale
- O functie care primeste un argument (numeric) si va efectua urmatoarele operatii:
- Va aplica functia half pe argumentul dat si va salva rezultatul intr-o variabila result
- Variabila result va fi folosita ca parametru de intrare pentru functia square, rezultatul se va salva in variabila resultSquare
- Variabila resultSquare se va folosi pe post de raza in functia area si se va calcula aria cercului cu valoarea razei egala cu variabila resultSquare si se va salva rezultatul intr-o variabila resultArea.
- Se returneaza din functie procentajul ariei (resultArea) din patratul (resultSquare)
- Optional: validati ca parametri trimisi sunt tipul de data corect (de ex: numerice)

Exemplu:
- square, daca trimitem parametrul 4, rezultatul trebuie sa fie 16;
- pentru functia half daca trimitem parametrul 7 rezultatul trebuie sa fie 3.5
- pentru functia percent daca trimitem primul parametru 3 si al doilea parametru 6 rezultatul trebuie sa fie 50% (adica 3 este 50% din 6)
- pentru functia arie, daca trimitem raza 3 aria trebuie sa fie 28.274333
- pentru fultima functie daca trimitem parametrul 6 vom face urmatoarele operatii:
a) jumatate din 6 = 3
b) square din 3 = 9
c) aria cercului cu raza 9 = 254.469
d) procentul patratului din arie ( 9 din 257.469 reprezinta 3.5367%)

2. Sa se creeze un script javascript care sa modifice DOM-ul unei pagini web. Scriptul javascript trebuie sa adauge un formular cu 4 elemente: nume, email, mesaj (textarea) si butonul de submit. Fiecare element trebuie sa contina si un label cu numele acestuia. De exemplu pentru campul name, care este de tipul input, trebuie sa se creeze tot din javascript un label cu textul: “Nume:”, similar si pentru celelalte elemente (mai putin butonul de submit). Fiecare label trebuie sa aiba o alta culoare adaugata tot din javascript (ex: rosu, galben, albastru)
Cand se apasa butonul de submit trebuie sa apara o alerta cu mesajul “Esti sigur ca vrei sa trimiti acest mesaj?”

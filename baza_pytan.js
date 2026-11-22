// ============================================================================
// KOMPLETNA BAZA PYTAŃ CYBER-QUIZ — PULE 1–14 (10 ZBALANSOWANYCH + 4 TRUDNIEJSZE)
// Pule 1–10: familijne zbalansowane (wymieszane na nowo + 2 zupełnie nowe pule!)
// Pule 11–14: dzieci trudniejsze (wymieszane na nowo + 2 zupełnie nowe pule!)
// Pule 15–16 dla dorosłych obsługiwane są osobno przez plik baza_dorosli.js
// ZERO powtórek, ZERO nawiasów zdradzających odpowiedź w opcjach.
// ============================================================================
window.QUIZ_QUESTIONS_RAW = window.QUIZ_QUESTIONS_RAW || {};

// --- RUNDA 1: WYŚCIG ABCD (210 pytań: 1–150 Pule 1–10 Zbalansowane | 151–210 Pule 11–14 Trudniejsze) ---
window.QUIZ_QUESTIONS_RAW.masterR1 = `
W jakiej dyscyplinie sportowej zawodnicy na łyżwach wbijają kijami gumowy krążek do bramki?|W curlingu;W hokeju na lodzie;W polo;W krykiecie|1
Który z poniższych ssaków żyje w stadach na sawannie i ma długie pasy na całym ciele?|Hiena;Zebra;Gepard;Antylopa|1
Który instrument muzyczny jest największym instrumentem perkusyjnym w orkiestrze dającym niski dźwięk?|Trójkąt;Wielki bęben;Flet;Altówka|1
Kto wybudował ogromny ceglany zamek w Malborku?|Krzyżacy;Wikingowie;Rzymianie;Szwedzi|0
W jakim państwie narodziły się słynne bajki braci Grimm, takie jak 'Jaś i Małgosia'?|We Francji;W Niemczech;W Danii;W Anglii|1
Jak nazywa się stolica Irlandii?|Edynburg;Dublin;Belfast;Cardiff|1
W jakim kraju leżą miasta Barcelona, Walencja i Sewilla?|We Włoszech;W Portugalii;W Hiszpanii;We Francji|2
W jakim kraju znajduje się słynna Krzywa Wieża w Pizie?|W Hiszpanii;We Francji;We Włoszech;W Grecji|2
Ile wynosi wynik mnożenia 14 razy 3?|38;42;46;48|1
Jak po angielsku nazywa się 'Biblioteka'?|Bookstore;Library;Museum;Notebook|1
Które potężne zwierzę z rogami jest symbolem Puszczy Białowieskiej?|Łoś;Jeleń;Żubr;Daniel|2
Z jakiego kontynentu przywieziono do Europy ziemniaki, kukurydzę i pomidory?|Z Azji;Z Ameryki;Z Australii;Z Afryki|1
Która planeta jest największa w Układzie Słonecznym?|Ziemia;Mars;Jowisz;Saturn|2
Jak nazywa się prawdziwa tożsamość superbohatera Spider-Mana?|Tony Stark;Peter Parker;Bruce Wayne;Clark Kent|1
Ile boków ma figura geometryczna nazywana pięciokątem?|Cztery;Pięć;Sześć;Siedem|1
W jakim mieście z wieży Kościoła Mariackiego co godzinę grany jest hejnał?|W Warszawie;W Gdańsku;W Krakowie;W Poznaniu|2
Ile centymetrów mieści się w połowie metra?|25;50;75;100|1
Ile wynosi wynik mnożenia 7 razy 8?|48;54;56;64|2
Które państwo słynie z fiordów, reniferów i zorzy polarnej na północy Europy?|Dania;Norwegia;Holandia;Belgia|1
Ile zer zapisujemy w liczbie jeden milion?|Cztery;Pięć;Sześć;Siedem|2
Który z poniższych metali jest silnie przyciągany przez zwykły magnes?|Miedź;Aluminium;Żelazo;Złoto|2
W jakim włoskim mieście zamiast zwykłych ulic w centrum płyną kanały z gondolami?|W Mediolanie;W Wenecji;W Turynie;W Bolonii|1
Która bajka Disneya opowiada o dziewczynie z Chin, która w przebraniu żołnierza wyrusza na wojnę zamiast chorego ojca?|Vaiana;Mulan;Merida Waleczna;Pocahontas|1
Który z poniższych ssaków potrafi aktywnie latać?|Wiewiórka pospolita;Nietoperz;Struś;Wydra|1
Który metal o czerwonawym odcieniu jest powszechnie stosowany do produkcji przewodów elektrycznych?|Cynk;Miedź;Ołów;Cyna|1
Która duża polska rzeka przepływa przez Wrocław oraz Szczecin?|Wisła;Odra;Bug;San|1
Który z poniższych instrumentów należy do grupy dętych blaszanych?|Flet prosty;Klarnet;Trąbka;Skrzypce|2
Czym pokryta jest skóra większości ryb, na przykład karpia lub okonia?|Piórami;Futrem;Łuskami;Pancerzem chitynowym|2
Nad jaką rzeką położona jest stolica Francji – Paryż?|Nad Tamizą;Nad Sekwaną;Nad Dunajem;Nad Renem|1
Jak nazywa się największy ptak żyjący obecnie na Ziemi, który nie potrafi latać?|Orzeł bielik;Struś afrykański;Pelikan;Albatros|1
Który bohater mitologii greckiej wykonał dwanaście ciężkich prac?|Achilles;Herakles;Odyseusz;Perseusz|1
Ile boków ma figura geometryczna nazywana sześciokątem?|Cztery;Pięć;Sześć;Osiem|2
Który ptak osiąga największą prędkość na świecie podczas lotu nurkowego?|Sokół wędrowny;Orzeł przedni;Jaskółka;Albatros|0
Ile wynosi wynik dzielenia 96 przez 8?|10;12;14;16|1
W którym sporcie drużynowym zdobywa się punkty, rzucając piłkę do obręczy na wysokości 3,05 metra?|W siatkówce;W piłce ręcznej;W koszykówce;W tenisie|2
Która część rośliny pobiera wodę wraz z solami mineralnymi z gleby?|Łodyga;Liść;Korzeń;Kwiat|2
Który narząd w organizmie człowieka pozwala na pobieranie tlenu z powietrza podczas oddychania?|Wątroba;Płuca;Nerki;Żołądek|1
Który ptak nielotny doskonale nurkuje i pływa w lodowatych wodach wokół Antarktydy?|Albatros;Pingwin;Pelikan;Kormoran|1
Jak nazywa się zjawisko odbijania fal dźwiękowych od przeszkody, pozwalające nietoperzom orientować się w ciemności?|Fotosynteza;Echolokacja;Grawitacja;Hibernacja|1
Jak nazywa się tradycyjny japoński strój w formie długiej szaty przewiązywanej szerokim pasem?|Sari;Kimono;Kilt;Ponczo|1
Jak nazywa się słynny polski port nad Bałtykiem tworzący Trójmiasto razem z Gdańskiem i Sopotem?|Ustka;Gdynia;Kołobrzeg;Świnoujście|1
Który z poniższych ptaków potrafi budować gniazda z błota pod okapami dachów i odlatuje na zimę?|Wróbel;Jaskółka;Sikorka;Gawron|1
Z jakich dwóch pierwiastków chemicznych zbudowana jest cząsteczka wody?|Tlenu i azotu;Wodoru i tlenu;Węgla i tlenu;Wodoru i helu|1
W jakim mieście w południe na wieży ratusza trykają się dwa metalowe koziołki?|We Wrocławiu;W Poznaniu;W Szczecinie;W Toruniu|1
Z jakiego kraju wywodzi się tradycyjna potrawa sushi?|Z Chin;Z Japonii;Z Tajlandii;Z Korei Południowej|1
Jakim kolorem oznacza się niziny na klasycznych mapach hipsometrycznych?|Żółtym;Zielonym;Niebieskim;Brązowym|1
Jak nazywa się stolica Grecji?|Rzym;Ateny;Saloniki;Nikozja|1
Jak nazywa się słynny angielski pisarz, autor dramatu 'Romeo i Julia'?|Karol Dickens;William Szekspir;J.R.R. Tolkien;Daniel Defoe|1
Jak po angielsku nazywa się owoc 'Gruszka'?|Pear;Plum;Peach;Grape|0
Jak nazywa się sport, w którym zawodnicy zjeżdżają po śniegu na jednej szerokiej desce przypiętej do butów?|Narciarstwo alpejskie;Snowboard;Łyżwiarstwo;Saneczkarstwo|1
W jakim kraju znajduje się słynny ceglany Wielki Mur rozciągający się na tysiące kilometrów?|W Japonii;W Chinach;W Mongolii;W Korei|1
Które polskie miasto było pierwszą historyczną stolicą państwa Polan za Mieszka I?|Kraków;Warszawa;Gniezno;Lublin|2
Jak nazywa się cienka warstwa gazu w stratosferze chroniąca Ziemię przed nadmiernym promieniowaniem ultrafioletowym?|Warstwa ozonowa;Powłoka węglowa;Strefa metanu;Jonosfera|0
Który z poniższych wulkanów zniszczył starożytne miasto Pompeje w 79 roku n.e.?|Etna;Wezuwiusz;Stromboli;Fudżi|1
Które zwierzę z Australii wychowuje młode w torbie na brzuchu?|Dziobak;Leniwiec;Kangur;Tapir|2
Który owad wytwarza cenne włókna wykorzystywane do tkania delikatnych materiałów w Azji?|Pająk krzyżak;Trzmiel;Jedwabnik morwowy;Szarańcza|2
Ile dni liczy rok przestępny?|364;365;366;368|2
Z jakiego kraju pochodzą słynne klocki LEGO?|Z Niemiec;Z Danii;Z Holandii;Ze Szwecji|1
Ile wynosi wynik odejmowania 1000 minus 340?|640;660;740;760|1
Który ocean jest najmniejszy i najpłytszy na Ziemi?|Atlantycki;Indyjski;Arktyczny;Spokojny|2
Ile wynosi suma 250 i 175?|400;415;425;435|2
Co stanowi główny składnik diety pandy wielkiej?|Liście eukaliptusa;Owoce leśne;Pędy bambusa;Korzenie drzew|2
Które drzewo liściaste wyróżnia się charakterystyczną białą korą z ciemnymi smugami?|Dąb;Brzoza;Klon;Lipa|1
W którym mieście znajduje się znana na całym świecie opera z dachem przypominającym białe żagle?|W Melbourne;W Sydney;W Auckland;W Tokio|1
Jaka waluta obowiązuje w Wielkiej Brytanii?|Euro;Funt szterling;Dolar;Korona|1
Która rzeka w Polsce jest najdłuższa?|Odra;Wisła;Warta;Bug|1
Które polskie miasto słynie z setek małych figurek krasnali ukrytych w przestrzeni miejskiej?|Kraków;Wrocław;Gdańsk;Katowice|1
Który kontynent ma największą liczbę ludności na świecie?|Afryka;Europa;Azja;Ameryka Północna|2
Jak nazywa się najpopularniejsza na świecie wyszukiwarka internetowa?|Firefox;Google;Safari;Excel|1
Jak nazywa się stolica Holandii słynąca z kanałów i rowerów?|Bruksela;Amsterdam;Rotterdam;Haga|1
Ile wynosi obwód trójkąta równobocznego o boku długości 9 cm?|18 cm;24 cm;27 cm;36 cm|2
Jaki kolor ma kamień szlachetny zwany szmaragdem?|Czerwony;Niebieski;Zielony;Fioletowy|2
Ile wynosi pierwiastek kwadratowy z liczby 81?|7;8;9;11|2
Jak nazywa się popularny polski serial animowany o dwóch braciach – wysokim i niskim – z lat 60.?|Reksio;Bolek i Lolek;Krecik;Koziołek Matołek|1
Jak nazywa się żółty stworek będący najwierniejszym towarzyszem Asha w serii Pokémon?|Charmander;Squirtle;Pikachu;Bulbasaur|2
Ile boków ma figura zwana ośmiokątem?|Sześć;Siedem;Osiem;Dziesięć|2
Ile wynosi wynik odejmowania 100 minus 37?|63;67;73;53|0
Jak nazywa się największe miasto w Polsce pod względem liczby mieszkańców?|Kraków;Warszawa;Wrocław;Gdańsk|1
Jak nazywa się stolica Austrii?|Zurych;Wiedeń;Salzburg;Praga|1
Który kontynent leży w całości na półkuli południowej i pokrywa go gruby lądolód?|Australia;Antarktyda;Ameryka Południowa;Afryka|1
Ile godzin liczą łącznie dwie pełne doby?|24;36;48;72|2
Które morskie zwierzę ma osiem ramion z przyssawkami i potrafi wypuścić chmurę atramentu?|Rekin;Ośmiornica;Delfin;Meduza|1
Ile wynosi wynik dzielenia 500 przez 5?|50;100;125;250|1
Jak miał na imię ojciec Simby w filmie animowanym 'Król Lew'?|Skaza;Mufasa;Rafiki;Timon|1
Z jakiego głównego surowca wytapia się w hutach tradycyjne szkło?|Z gliny;Z piasku kwarcowego;Z wapienia;Z żywicy|1
Kto jest autorem polskiej epopei narodowej 'Pan Tadeusz'?|Juliusz Słowacki;Jan Kochanowski;Adam Mickiewicz;Bolesław Prus|2
Z jakiej rośliny wytwarza się naturalny, słodki syrop widniejący często w kuchni kanadyjskiej?|Z brzozy;Z klonu cukrowego;Z sosny;Z dębu|1
Z jakiego owocu wyciska się tradycyjny cydr oraz popularny sok w polskich sadach?|Z wiśni;Z jabłek;Ze śliwek;Z gruszek|1
Z nasion jakiej tropikalnej rośliny powstaje kakao i czekolada?|Z kawowca;Z kakaowca;Z wanilii;Z palmy kokosowej|1
W której klasycznej baśni występuje drewniany pajacyk wystrugany przez mistrza Geppetta?|Kopciuszek;Pinokio;Piotruś Pan;Dziadek do orzechów|1
Ile dni ma luty w roku przestępnym?|28;29;30;31|1
Ile minut mają łącznie dwie pełne godziny?|90;100;120;150|2
Jak po angielsku nazywa się zwierzę 'Lis'?|Wolf;Fox;Bear;Deer|1
Jak nazywa się przyrząd optyczny służący do obserwacji odległych planet i gwiazd?|Mikroskop;Teleskop;Spektrometr;Kompas|1
Jak nazywa się najmniejsza jednostka budulcowa każdego żywego organizmu?|Tkanka;Komórka;Narząd;Układ|1
W jakim starożytnym kraju narodziła się tradycja Igrzysk Olimpijskich?|We Włoszech;W Grecji;W Egipcie;W Persji|1
Jaki kolor ma kamień szlachetny zwany rubinem?|Zielony;Niebieski;Czerwony;Żółty|2
Na jakim wzgórzu w Krakowie wznosi się Zamek Królewski?|Na Gubałówce;Na Wawelu;Na Jasnej Górze;Na Ślęży|1
Jak nazywa się galaktyka, w której znajduje się nasz Układ Słoneczny?|Andromeda;Droga Mleczna;Wielki Obłok Magellana;Sombrero|1
Z ziaren jakiej rośliny powstaje prażony popcorn?|Z pszenicy;Z ryżu;Z kukurydzy;Z owsa|2
Ile wynosi wynik dzielenia 54 przez 6?|7;8;9;11|2
Jak nazywa się czerwona planeta Układu Słonecznego, na którą wysłano łazik Perseverance?|Wenus;Mars;Merkury;Saturn|1
Na ile województw podzielona jest obecnie Polska?|14;15;16;18|2
Ile wynosi iloczyn liczb 8 i 8?|54;56;64;48|2
Ile wynosi wynik odejmowania 180 minus 65?|105;115;125;135|1
Ile tygodni mieści się w przybliżeniu w jednym pełnym roku kalendarzowym?|36;52;64;48|1
Co oznacza skrót PC w odniesieniu do komputera?|Personal Computer;Play Console;Power Control;Private Code|0
Ile splecionych ze sobą kół znajduje się na fladze olimpijskiej?|4;5;6;7|1
Ile minut trwa półtorej godziny?|60;75;90;105|2
Które zwierzę morskie potrafi zregenerować utracone ramię i ma kształt pięcioramiennej gwiazdy?|Meduza;Rozgwiazda;Krab;Jeżowiec|1
W którym łańcuchu górskim leży najwyższy szczyt Unii Europejskiej – Mont Blanc?|W Pirenejach;W Alpach;W Karpatach;W Apeninach|1
Jak ma na imię renifer będący towarzyszem Kristoffa w 'Krainie Lodu'?|Sven;Bambi;Rudolf;Maximus|0
W której bajce Disneya bohaterka o imieniu Bella poznaje zaklętego księcia w zamku?|Kopciuszek;Piękna i Bestia;Śpiąca Królewna;Królewna Śnieżka|1
Który z tych ptaków zostaje w Polsce na zimę i odwiedza karmniki?|Bocian biały;Jaskółka dymówka;Sikorka bogatka;Kukułka|2
Kto stworzył pierwotną wersję gry komputerowej Minecraft?|Markus Persson;Elon Musk;Bill Gates;Gabe Newell|0
Które państwo ma największą powierzchnię na świecie?|Stany Zjednoczone;Chiny;Rosja;Kanada|2
Jak po angielsku nazywa się pomieszczenie 'Łazienka'?|Kitchen;Bathroom;Bedroom;Hallway|1
Z jakiego powodu kameleon słynie ze zmiany barwy swojej skóry?|Chłodzi się pod wodą;Komunikuje nastrój i wtapia w otoczenie;Ostrzega przed burzą;Przyciąga ptaki|1
Jaki przyrząd służy podróżnikom do wyznaczania stron świata za pomocą igły magnetycznej?|Barometr;Sekstant;Kompas;Stoper|2
Jak potocznie nazywa się słynna wieża zegarowa przy parlamencie w Londynie?|Tower Bridge;Big Ben;London Eye;Buckingham|1
Który z wielkich dzikich kotów żyje naturalnie w Azji i ma pomarańczowe futro w czarne pręgi?|Lew;Tygrys;Gepard;Jaguar|1
Która pora roku następuje bezpośrednio po zimie?|Lato;Wiosna;Jesień;Przedzimie|1
Ile wynosi wynik mnożenia 15 razy 3?|35;40;45;55|2
Ile wynosi wynik mnożenia 12 razy 5?|50;55;60;65|2
W którym miesiącu rozpoczyna się kalendarzowa wiosna?|W lutym;W marcu;W kwietniu;W maju|1
Z jakiego miasta we Włoszech wywodzi się oryginalna pizza neapolitańska?|Z Rzymu;Z Mediolanu;Z Neapolu;Z Wenecji|2
Który polski król zwyciężył Krzyżaków w wielkiej bitwie pod Grunwaldem?|Bolesław Chrobry;Władysław Jagiełło;Kazimierz Wielki;Zygmunt Stary|1
Ile wynosi wynik mnożenia 6 razy 7?|36;42;48;49|1
Na jakim instrumencie muzycznym gra się, trzymając go pod brodą i przesuwając po strunach smyczkiem?|Na flecie;Na wiolonczeli;Na skrzypcach;Na gitarze|2
Jak nazywa się słynny starożytny amfiteatr w Rzymie?|Partenon;Akropol;Koloseum;Panteon|2
Która planeta Układu Słonecznego krąży między Wenus a Marsem?|Merkury;Ziemia;Jowisz;Saturn|1
Jak nazywa się tatrzański masyw górski przypominający sylwetkę śpiącego rycerza?|Rysy;Śnieżka;Giewont;Kasprowy Wierch|2
Ile wynosi 50 procent z liczby 84?|32;40;42;44|2
W którym roku wybuchła II wojna światowa?|1914;1939;1945;1920|1
Jak nazywa się przyrząd służący do pomiaru temperatury ciała lub powietrza?|Barometr;Termometr;Higrometr;Stetoskop|1
Jak nazywa się podziemna sieć białych nitek będąca główną częścią grzyba?|Kapelusz;Trzon;Grzybnia;Kłącze|2
Z jakiego polskiego miasta pochodzą najsłynniejsze pierniki?|Z Krakowa;Z Torunia;Z Poznania;Z Gdańska|1
Jak po angielsku nazywa się pierwszy posiłek dnia – 'Śniadanie'?|Dinner;Lunch;Breakfast;Supper|2
W jakim kraju stoi Wielka Piramida Cheopsa?|W Maroku;W Egipcie;W Jordanii;W Sudanie|1
Ile wynosi wynik mnożenia 9 razy 9?|72;81;90;99|1
Jak nazywa się monumentalny egipski posąg z ciałem lwa i ludzką głową stojący przy piramidach w Gizie?|Kolos Rodyjski;Wielki Sfinks;Obelisk;Anubis|1
Które z tych zwierząt należy do gromady gadów?|Żaba;Wąż;Nietoperz;Delfin|1
W której grze planszowej rozgrywka kończy się okrzykiem 'Szach i mat'?|W warcabach;W szachach;W go;W domino|1
Ile dni liczy miesiąc kwiecień?|28;29;30;31|2
Który z poniższych krajów NIE graniczy lądowo z Polską?|Litwa;Czechy;Węgry;Słowacja|2
Kto napisał książkę 'Akademia Pana Kleksa'?|Jan Brzechwa;Julian Tuwim;Henryk Sienkiewicz;Adam Mickiewicz|0
Jak po angielsku nazywa się warzywo 'Marchewka'?|Cabbage;Carrot;Onion;Potato|1
Który z poniższych bohaterów bajek jest małym robotem sprzątającym opuszczoną Ziemię?|Baymax;Wall-E;R2-D2;Optimus Prime|1
Jak nazywa się największa wyspa leżąca na Morzu Śródziemnym?|Kreta;Sycylia;Cypr;Sardynia|1
Jak nazywa się dziedzina nauki badająca gwiazdy, planety i galaktyki?|Biologia;Geologia;Geografia;Astronomia|3
Który polski pisarz zdobył w 1924 roku Literacką Nagrodę Nobla za powieść 'Chłopi'?|Henryk Sienkiewicz;Władysław Reymont;Bolesław Prus;Stefan Żeromski|1
Który pierwiastek chemiczny ma najniższą liczbę atomową równą 1?|Hel;Wodór;Lit;Tlen|1
Jak nazywa się stolica Kanady?|Toronto;Montreal;Ottawa;Vancouver|2
Która z poniższych rzek jest najdłuższą rzeką płynącą przez terytorium Niemiec?|Dunaj;Ren;Łaba;Wezera|1
Jak nazywa się najdłuższy łańcuch górski na lądzie, ciągnący się wzdłuż zachodniej Ameryki Południowej?|Góry Skaliste;Andy;Himalaje;Alpy|1
Który wybitny włoski uczony udoskonalił lunetę i odkrył cztery największe księżyce Jowisza?|Izaak Newton;Galileusz;Johannes Kepler;Mikołaj Kopernik|1
W którym roku upadł Mur Berliński?|1980;1985;1989;1993|2
Który pierwiastek chemiczny oznaczany jest w układzie okresowym symbolem Fe?|Fluor;Fosfor;Żelazo;Ferm|2
Kto jest autorem powieści 'Kamienie na szaniec'?|Henryk Sienkiewicz;Aleksander Kamiński;Edmund Niziurski;Alfred Szklarski|1
W którym roku podpisano unię lubelską, tworząc Rzeczpospolitą Obojga Narodów?|1410;1525;1569;1683|2
W którym roku Krzysztof Kolumb po raz pierwszy dotarł do wybrzeży Ameryki?|1410;1492;1519;1543|1
Ile wynosi 15 procent z liczby 200?|15;25;30;45|2
Który z poniższych układów w ludzkim ciele odpowiada za przesyłanie impulsów elektrycznych z mózgu?|Układ krwionośny;Układ nerwowy;Układ pokarmowy;Układ oddechowy|1
Która z poniższych figur geometrycznych ma dokładnie jedną parę boków równoległych w klasycznej definicji szkolnej?|Romb;Trapez;Równoległobok;Prostokąt|1
W jakim państwie znajduje się starożytny kompleks świątyń Angkor Wat?|W Tajlandii;W Kambodży;W Wietnamie;W Indiach|1
W którym roku Polska odzyskała niepodległość po 123 latach zaborów?|1914;1918;1920;1925|1
Jak nazywa się stolica Maroka?|Casablanca;Rabat;Marrakesz;Tanger|1
Ile wynosi wartość wyrażenia 3 do potęgi drugiej dodać 4 do potęgi drugiej?|14;25;36;49|1
Ile wynosi wynik dzielenia 225 przez 15?|12;15;18;25|1
Który polski król założył w 1364 roku pierwszą uczelnię wyższą w Polsce – Akademię Krakowską?|Bolesław Chrobry;Kazimierz Wielki;Władysław Jagiełło;Zygmunt Stary|1
W jakim kraju znajduje się starożytne miasto Inków – Machu Picchu?|W Meksyku;W Peru;W Chile;W Kolumbii|1
Ile krawędzi bocznych ma ostrosłup o podstawie pięciokąta?|Cztery;Pięć;Sześć;Dziesięć|1
Ile stopni wynosi suma kątów wewnętrznych w dowolnym czworokącie?|180 stopni;270 stopni;360 stopni;540 stopni|2
Który kontynent jest w całości otoczony wodami Oceanu Południowego?|Australia;Antarktyda;Ameryka Południowa;Afryka|1
Ile kręgów liczy odcinek szyjny kręgosłupa zarówno u człowieka, jak i u żyrafy?|5;7;9;12|1
Które państwo Europy ma najdłuższą linię brzegową pełną głębokich fiordów?|Szwecja;Norwegia;Grecja;Włochy|1
W jakich jednostkach układu SI wyraża się moc urządzeń elektrycznych?|W dżulach;W watach;W niutonach;W woltach|1
W którym roku odbył się pierwszy w historii załogowy lot człowieka na Księżyc?|1961;1965;1969;1972|2
Jak nazywa się najniższa warstwa atmosfery ziemskiej, w której zachodzą zjawiska pogodowe?|Stratosfera;Troposfera;Mezosfera;Termosfera|1
Który gaz stanowi około 78 procent objętości powietrza w ziemskiej atmosferze?|Tlen;Dwutlenek węgla;Azot;Argon|2
Które z poniższych państw leży jednocześnie w Europie i w Azji?|Grecja;Turcja;Bułgaria;Węgry|1
Które naczynia krwionośne wyprowadzają krew z serca w stronę narządów ciała?|Żyły;Tętnice;Naczynia limfatyczne;Oskrzela|1
Kto namalował obraz 'Dama z gronostajem', znajdujący się w Muzeum Czartoryskich w Krakowie?|Michał Anioł;Leonardo da Vinci;Rafael Santi;Jan Matejko|1
Który pierwiastek chemiczny oznaczany jest w układzie okresowym symbolem Ca?|Węgiel;Wapń;Miedź;Chlor|1
Który stan skupienia materii nie ma ani własnego kształtu, ani stałej objętości?|Ciało stałe;Ciecz;Gaz;Kryształ|2
Jak nazywa się słynny polski fizyk i wynalazca, który skonstruował pierwszą lampę naftową?|Karol Olszewski;Ignacy Łukasiewicz;Zygmunt Wróblewski;Marian Rejewski|1
Ile wynosi wartość potęgi 2 do potęgi czwartej?|8;12;16;32|2
Które morze oddziela Wielką Brytanię od kontynentalnej Norwegii i Danii?|Morze Irlandzkie;Morze Północne;Morze Bałtyckie;Morze Celtyckie|1
Jak nazywa się najgłębszy rów oceaniczny na Ziemi?|Rów Jawajski;Rów Mariański;Rów Atakamski;Rów Tonga|1
Jak nazywa się skala służąca do określania twardości minerałów od talku do diamentu?|Skala Richtera;Skala Beauforta;Skala Mohsa;Skala Kelvina|2
W którym wieku wybuchła Wielka Rewolucja Francuska ze zdobyciem Bastylii?|W XVII wieku;W XVIII wieku;W XIX wieku;W XVI wieku|1
Która rzeka przepływa przez aż dziesięć państw Europy, w tym Wiedeń i Budapeszt?|Ren;Dunaj;Łaba;Sekwana|1
Jak nazywa się cieśnina oddzielająca Azję od Ameryki Północnej?|Cieśnina Magellana;Cieśnina Beringa;Cieśnina Gibraltarska;Cieśnina Bosfor|1
Jak nazywa się siła działająca w cieczy pionowo do góry, dzięki której statki nie toną?|Siła tarcia;Siła wyporu;Siła bezwładności;Siła odśrodkowa|1
Jak nazywa się największy księżyc Jowisza i całego Układu Słonecznego?|Europa;Tytan;Ganimedes;Io|2
Który organ w ciele człowieka produkuje żółć pomagającą w trawieniu tłuszczów?|Trzustka;Wątroba;Śledziona;Nerka|1
Kto jest autorem powieści przygodowej 'W 80 dni dookoła świata'?|Daniel Defoe;Juliusz Verne;Robert Louis Stevenson;Mark Twain|1
Który polski matematyk był twórcą lwowskiej szkoły matematycznej i słynnej przestrzeni swojego imienia?|Hugo Steinhaus;Stefan Banach;Wacław Sierpiński;Kazimierz Kuratowski|1
Który z poniższych gazów powstaje w wyniku fotosyntezy i jest uwalniany przez rośliny do atmosfery?|Dwutlenek węgla;Tlen;Azot;Metan|1
Kto skomponował słynną operę narodową 'Halka' oraz 'Straszny dwór'?|Fryderyk Chopin;Stanisław Moniuszko;Karol Szymanowski;Ignacy Paderewski|1
Ile wynosi 25 procent z liczby 360?|75;90;105;120|1
Jak nazywa się proces, w którym ciało stałe zamienia się bezpośrednio w gaz bez topnienia?|Parowanie;Skraplanie;Sublimacja;Krzepnięcie|2
Jak nazywa się największa kość w ludzkim przedramieniu oraz jej sąsiednia kość tworząca nadgarstek?|Kość udowa i piszczel;Kość łokciowa i promieniowa;Obojczyk i łopatka;Mostek i żebro|1
W jakich jednostkach mierzy się opór elektryczny w układzie SI?|W woltach;W amperach;W omach;W watach|2
Jak nazywa się stolica Nowej Zelandii?|Auckland;Wellington;Christchurch;Canberra|1
Jak nazywa się proces łączenia się kropel pary wodnej w chmurach i zamiany gazu w ciecz?|Parowanie;Skraplanie;Topnienie;Krzepnięcie|1
W którym roku podpisano w Gdańsku porozumienia sierpniowe, które dały początek 'Solidarności'?|1970;1980;1981;1989|1
Jak nazywa się zjawisko ugięcia i załamania promienia światła białego w pryzmacie na barwy tęczy?|Odbicie;Rozszczepienie światła;Polaryzacja;Absorpcja|1
Który z poniższych pierwiastków należy do grupy gazów szlachetnych?|Chlor;Hel;Sód;Siarka|1
Który kompozytor jest autorem słynnego cyklu koncertów skrzypcowych 'Cztery pory roku'?|Jan Sebastian Bach;Antonio Vivaldi;Wolfgang Amadeusz Mozart;Fryderyk Chopin|1
`;

// --- RUNDA 4: ODSŁANIANIE HASŁA (70 haseł: 1–50 Pule 1–10 | 51–70 Pule 11–14) ---
window.QUIZ_QUESTIONS_RAW.masterR2 = `
BAJKA|KOPCIUSZEK NA BALU
POLSKA|PUSZCZA BIAŁOWIESKA
ANIMACJA|KRAINA LODU
GEOGRAFIA|MORZE BAŁTYCKIE
LEKTURA|AKADEMIA PANA KLEKSA
KINO|GWIEZDNE WOJNY
KUCHNIA|WŁOSKA PIZZA
MAŁOPOLSKA|KOPALNIA SOLI W WIELICZCE
DESERY|LODY WANILIOWE
BAŚNIE|KRÓLEWNA ŚNIEŻKA
ZABAWKI|TOY STORY
NIEBO|KOLOROWA TĘCZA
PRZYRODA|BIAŁY NIEDŹWIEDŹ
ZWIERZĘTA|ŻÓŁW MORSKI
MUZYKA|FRYDERYK CHOPIN
POSTAĆ|KOT W BUTACH
ZWIERZĘTA|PANDA WIELKA
PODRÓŻE|LOT SAMOLOTEM
GALAKTYKA|DROGA MLECZNA
NAPOJE|GORĄCA CZEKOLADA
ZIMA|SKOKI NARCIARSKIE
DRAPIEŻNIKI|NIEDŹWIEDŹ POLARNY
BAJKA|KUBUŚ PUCHATEK
SPORT|SKOK W DAL
ZAWODY|IGRZYSKA OLIMPIJSKIE
KOSMOS|STACJA KOSMICZNA
POLSKA|RYNEK W KRAKOWIE
MUZYKA|GITARA KLASYCZNA
KUCHNIA|DOMOWA SZARLOTKA
WYPIEKI|PIERNIKI TORUŃSKIE
AZJA|WIELKI MUR CHIŃSKI
NAUKA|MIKOŁAJ KOPERNIK
AFRYKA|KRÓL LEW
DISNEY|MYSZKA MIKI
TATRY|ŚPIĄCY RYCERZ GIEWONT
AKWARIUM|ZŁOTA RYBKA
KOMPUTERY|SZTUCZNA INTELIGENCJA
KOLEJ|SZYBKI POCIĄG
FRANCJA|WIEŻA EIFFLA
ZABYTKI|ZAMEK KRÓLEWSKI NA WAWELU
PRZYRODA|RAFA KORALOWA
KALENDARZ|CZTERY PORY ROKU
WAKACJE|SŁONECZNA PLAŻA
GRY WIDEO|ŚWIAT MINECRAFT
ŚREDNIOWIECZE|BITWA POD GRUNWALDEM
GRY|KOSTKA RUBIKA
SPORT|PIŁKA NOŻNA
FANTASY|HARRY POTTER
SUPERBOHATER|SPIDER MAN
ASTRONOMIA|UKŁAD SŁONECZNY
BIOLOGIA|FOTOSYNTEZA ROŚLIN
HISTORIA|KONSTYTUCJA TRZECIEGO MAJA
NAUKA|UKŁAD OKRESOWY PIERWIASTKÓW
LITERATURA|W PUSTYNI I W PUSZCZY
TECHNIKA|ENERGIA SŁONECZNA
HISTORIA|ZAMEK W MALBORKU
ASTRONOMIA|ZAĆMIENIE SŁOŃCA
PODRÓŻE|KANAŁ SUESKI
HIMALAJE|MOUNT EVEREST
KOSMOS|LĄDOWANIE NA KSIĘŻYCU
STADION|RZUT KARNY
KOMEDIA|EPOKA LODOWCOWA
ROŚLINY|ZIELONA DŻUNGLA
STAROŻYTNOŚĆ|EGIPSKIE PIRAMIDY
GEOGRAFIA|WIELKA RAFA KORALOWA
PRZYGODA|WYSPA SKARBÓW
OCEAN|GDZIE JEST NEMO
HISTORIA|ODKRYCIE AMERYKI
ARCHITEKTURA|KOLOSEUM W RZYMIE
INSTRUMENTY|FORTEPIAN I SKRZYPCE
`;

// --- RUNDA 5: POSTAW NA MILION (210 Standard + 70 Jaś = 280 unikalnych pytań dla 14 pul!) ---
window.QUIZ_QUESTIONS_RAW.millionStandardQ4Opts = `
Który narząd ludzkiego ciała oczyszcza krew ze szkodliwych substancji i produkuje mocz?|Wątroba;Nerka;Śledziona;Żołądek|1
Który gaz stanowi największą część ziemskiego powietrza?|Tlen;Dwutlenek węgla;Azot;Wodór|2
W którym kraju znajduje się starożytne miasto Petra wykute w różowej skale?|W Egipcie;W Jordanii;W Maroku;W Tunezji|1
Który z poniższych polskich królów widnieje na banknocie o nominale 100 złotych?|Mieszko I;Władysław Jagiełło;Kazimierz Wielki;Bolesław Chrobry|1
Ile stopni wynosi suma kątów wewnętrznych trójkąta?|90 stopni;180 stopni;270 stopni;360 stopni|1
Jak nazywa się słynny angielski detektyw mieszkający przy Baker Street 221B?|Herkules Poirot;Sherlock Holmes;Filip Marlowe;Ojciec Brown|1
Ile wynosi pole prostokąta o bokach 7 cm i 9 cm?|32 cm²;56 cm²;63 cm²;72 cm²|2
Nad jaką rzeką leży stolica Wielkiej Brytanii – Londyn?|Nad Sekwaną;Nad Tamizą;Nad Renem;Nad Dunajem|1
Jak nazywa się stolica Portugalii?|Porto;Lizbona;Faro;Madryt|1
W którym roku odbył się w Gnieźnie słynny zjazd cesarza Ottona III i Bolesława Chrobrego?|966;1000;1025;1138|1
Który z poniższych pierwiastków jest w temperaturze pokojowej ciekłym metalem?|Cynk;Ołów;Rtęć;Miedź|2
W jakim państwie leży słynny wulkan Fudżi?|W Chinach;W Japonii;W Korei Południowej;W Indonezji|1
Który amerykański wynalazca zbudował i upowszechnił fonograf do nagrywania dźwięku?|Nikola Tesla;Thomas Edison;Alexander Bell;Samuel Morse|1
Który organ człowieka pompuje krew przez dwa obiegi – mały i duży?|Płuca;Serce;Wątroba;Mózg|1
Który z poniższych ptaków słynie z najdłuższych sezonowych wędrówek między biegunami Ziemi?|Bocian biały;Rybitwa popielata;Jaskółka;Łabędź niemy|1
Jak nazywa się najwyższy szczyt Karkonoszy?|Rysy;Śnieżka;Babia Góra;Trzy Korony|1
Ile krawędzi posiada każdy graniastosłup czworokątny, np. sześcian?|6;8;10;12|3
Jak nazywa się jednostka pomiaru napięcia elektrycznego w układzie SI?|Amper;Wolt;Om;Wat|1
Jak nazywa się pasmo górskie w Polsce z najwyższym szczytem Tarnicą?|Tatry;Bieszczady;Pieniny;Sudety|1
W jakim kraju znajduje się starożytna wyrocznia w Delfach oraz świątynia Partenon?|We Włoszech;W Grecji;W Turcji;W Egipcie|1
W którym roku Polska przystąpiła do paktu obronnego NATO?|1995;1999;2004;2007|1
Który z poniższych metali ma symbol chemiczny Cu?|Węgiel;Miedź;Wapń;Chrom|1
Ile wynosi suma wszystkich kątów wewnętrznych w dowolnym pięciokącie?|360 stopni;540 stopni;720 stopni;450 stopni|1
Ile metrów mieści się w dwóch i pół kilometra?|250;2050;2500;25000|2
Ile wynosi wynik działania 18 razy 5?|80;85;90;95|2
Kto namalował słynny cykl obrazów 'Słoneczniki'?|Claude Monet;Vincent van Gogh;Pablo Picasso;Rembrandt|1
Jak nazywa się słynna rzeka przepływająca przez Rzym?|Pad;Tyber;Arno;Dunaj|1
W jakim mieście w Polsce znajduje się słynny gotycki Ratusz oraz Pomnik Neptuna?|W Szczecinie;W Gdańsku;W Toruniu;W Poznaniu|1
Który pierwiastek chemiczny oznaczany jest symbolem Na?|Azot;Sód;Neon;Nikiel|1
Ile wynosi wartość potęgi 3 do potęgi trzeciej?|9;18;27;81|2
Które zwierzę jest symbolem Białowieskiego Parku Narodowego?|Łoś;Żubr;Niedźwiedź;Ryś|1
Na terytorium którego państwa leży pustynia Atakama?|Brazylii;Chile;Meksyku;Egiptu|1
W jakim państwie leży słynny kanał łączący Ocean Atlantycki z Oceanem Spokojnym?|W Egipcie;W Panamie;W Meksyku;W Kolumbii|1
Które miasto jest stolicą Australii?|Sydney;Melbourne;Canberra;Brisbane|2
W którym roku zakończyła się II wojna światowa?|1939;1944;1945;1948|2
Który z poniższych kontynentów leży w całości na półkuli południowej?|Afryka;Australia;Azja;Ameryka Południowa|1
Jak nazywa się słynny polski kompozytor muzyki filmowej oraz autor 'Poloneza' z filmu 'Pan Tadeusz'?|Fryderyk Chopin;Wojciech Kilar;Krzysztof Penderecki;Henryk Górecki|1
Ile wynosi pierwiastek kwadratowy z liczby 196?|12;14;16;18|1
Która z tych pustyń znajduje się na kontynencie azjatyckim?|Sahara;Gobi;Kalahari;Atakama|1
W którym roku człowiek po raz pierwszy stanął na Księżycu?|1961;1965;1969;1974|2
W jakim sporcie olimpijskim rozgrywa się turnieje Wielkiego Szlema w Melbourne, Paryżu, Londynie i Nowym Jorku?|W golfie;W tenisie ziemnym;W lekkoatletyce;W badmintonie|1
Ile wynosi pierwiastek kwadratowy z liczby 169?|11;12;13;14|2
W której dyscyplinie sportowej zawodnicy wykonują układ na drążku, kółkach i koniu z łękami?|W szermierce;W gimnastyce sportowej;W wioślarstwie;W podnoszeniu ciężarów|1
Jak nazywa się cieśnina oddzielająca Wielką Brytanię od Francji?|Cieśnina Gibraltarska;Kanał La Manche;Cieśnina Bosfor;Cieśnina Beringa|1
Jak nazywa się największy księżyc planety Saturn?|Europa;Tytan;Ganimedes;Fobos|1
Jak nazywa się najwyższy czynny wulkan w Europie, leżący na Sycylii?|Wezuwiusz;Etna;Stromboli;Hekla|1
W jakim mieście w Polsce znajduje się słynny Park Śląski i Planetarium Śląskie?|W Gliwicach;W Chorzowie;W Sosnowcu;W Tychach|1
Który hormon wytwarzany przez trzustkę obniża poziom cukru we krwi?|Adrenalina;Insulina;Melatonina;Tyroksyna|1
Ile wynosi wynik mnożenia 16 razy 6?|86;96;106;116|1
Z jakiego państwa wywodzi się taniec flamenco?|Z Włoch;Z Hiszpanii;Z Portugalii;Z Grecji|1
Który ocean oddziela wschodnie wybrzeże Afryki od zachodniej Australii?|Ocean Atlantycki;Ocean Indyjski;Ocean Spokojny;Ocean Arktyczny|1
Jak nazywa się białko zawarte w czerwonych krwinkach odpowiedzialne za wiązanie i transport tlenu?|Insulina;Hemoglobina;Kolagen;Keratyna|1
W jakim mieście znajduje się bazylika Sagrada Família zaprojektowana przez Gaudiego?|W Madrycie;W Barcelonie;W Walencji;W Sewilli|1
Ile sekund mieści się w jednej pełnej godzinie?|600;1800;3600;7200|2
Jak nazywa się największe jezioro na świecie, nazywane też morzem?|Bajkał;Morze Kaspijskie;Jezioro Wiktorii;Jezioro Górne|1
Który z poniższych gazów wykorzystuje się do napełniania żarówek i należy do gazów szlachetnych?|Tlen;Argon;Wodór;Metan|1
Który ocean zajmuje największą powierzchnię na Ziemi?|Atlantycki;Indyjski;Spokojny;Arktyczny|2
Z jakiego kraju pochodzi słynny pisarz baśni Hans Christian Andersen?|Ze Szwecji;Z Danii;Z Norwegii;Z Niemiec|1
Ile wynosi pole kwadratu o obwodzie 20 cm?|16 cm²;20 cm²;25 cm²;100 cm²|2
Który polski wynalazca skonstruował lampę naftową w XIX wieku?|Mikołaj Kopernik;Ignacy Łukasiewicz;Jan Szczepanik;Stefan Banach|1
Jak nazywa się największy z czterech księżyców galileuszowych krążących wokół Jowisza?|Io;Ganimedes;Europa;Kallisto|1
Ile wynosi wynik działania 7 + 8 razy 3?|45;31;27;36|1
Który z poniższych dinozaurów miał charakterystyczne kostne płyty wzdłuż grzbietu?|Tyranozaur;Stegozaur;Welociraptor;Diplodok|1
Jak nazywa się znany włoski kompozytor, twórca 'Czterech pór roku'?|Giuseppe Verdi;Antonio Vivaldi;Giacomo Puccini;Niccolò Paganini|1
Ile stopni wynosi miara każdego kąta wewnętrznego w trójkącie równobocznym?|45 stopni;60 stopni;90 stopni;120 stopni|1
Jak nazywa się cieśnina oddzielająca Europę od Afryki przy Hiszpanii?|Bosfor;Gibraltarska;Magellana;Beringa|1
Która z tych rzek jest najdłuższą rzeką Ameryki Północnej (wraz z Missouri)?|Rio Grande;Missisipi;Kolorado;Jukon|1
Która struktura w uchu wewnętrznym odpowiada głównie za zmysł równowagi?|Ślimak;Błędnik;Błona bębenkowa;Strzemiączko|1
Który instrument muzyczny jest największym instrumentem w rodzinie blaszanych dętych?|Trąbka;Tuba;Puzon;Waltornia|1
Jak nazywa się stolica Norwegii?|Sztokholm;Oslo;Helsinki;Kopenhaga|1
Ile boków ma dziesięciokąt?|Osiem;Dziewięć;Dziesięć;Dwanaście|2
Ile wynosi 30 procent z liczby 200?|30;60;90;120|1
Jak nazywa się część komórki roślinnej zawierająca chlorofil, w której zachodzi fotosynteza?|Mitochondrium;Chloroplast;Rybosom;Wodniczka|1
W którym roku Polska przyjęła chrzest za panowania księcia Mieszka I?|966;1000;1025;1138|0
Które polskie miasto słynie z festiwalu polskiej piosenki w amfiteatrze?|Sopot;Opole;Kielce;Rzeszów|1
Ile wynosi wynik dzielenia 144 przez 12?|10;11;12;14|2
Ile wynosi pole trójkąta o podstawie 10 cm i wysokości 6 cm?|20 cm²;30 cm²;40 cm²;60 cm²|1
Które z poniższych zwierząt jest największym drapieżnym kotem Ameryki Południowej?|Lampart;Jaguar;Gepard;Tygrys|1
Jak nazywa się waluta obowiązująca w Japonii?|Juan;Jen;Won;Bat|1
Ile stopni ma kąt półpełny?|90 stopni;120 stopni;180 stopni;360 stopni|2
Który z poniższych ssaków składa jaja?|Kangur;Dziobak;Koala;Wydra|1
Który z tych instrumentów muzycznych ma klawisze i struny uderzane młoteczkami?|Akordeon;Fortepian;Organy piszczałkowe;Harfa|1
Kto skomponował 'Odę do radości'?|Wolfgang Amadeusz Mozart;Fryderyk Chopin;Ludwig van Beethoven;Jan Sebastian Bach|2
W którym roku Polska przystąpiła do Unii Europejskiej?|1999;2001;2004;2007|2
Jak nazywa się najwyższy szczyt Tatr po stronie słowackiej i w całych Karpatach?|Rysy;Gerlach;Łomnica;Krywań|1
Kto jest autorem powieści 'Stary człowiek i morze'?|Ernest Hemingway;George Orwell;Mark Twain;Jack London|0
Który pierwiastek chemiczny oznaczany jest symbolem C?|Chlor;Węgiel;Miedź;Wapń|1
Który król Polski pokonał wojska tureckie pod Wiedniem w 1683 roku?|Stefan Batory;Jan III Sobieski;Kazimierz Wielki;Zygmunt Stary|1
Jak nazywał się pierwszy sztuczny satelita Ziemi wystrzelony w 1957 roku?|Apollo 1;Sputnik 1;Voyager 1;Wostok 1|1
Jaki metal ma symbol chemiczny Ag?|Złoto;Srebro;Rtęć;Platyna|1
Ile ścian bocznych ma graniastosłup sześciokątny?|Cztery;Pięć;Sześć;Osiem|2
Ile wynosi 25 procent z liczby 320?|60;70;80;90|2
Jak nazywa się największa pustynia gorąca na kontynencie australijskim?|Sahara;Wielka Pustynia Wiktorii;Gobi;Atakama|1
W jakim sporcie zimowym zawodnicy suną granitowe kamienie po lodzie?|W hokeju;W curlingu;W saneczkarstwie;W biathlonie|1
Jak nazywa się stolica Kanady?|Toronto;Montreal;Ottawa;Vancouver|2
W jakim mieście mieści się muzeum Luwr?|W Rzymie;W Londynie;W Paryżu;W Madrycie|2
Ile wynosi 40 procent z liczby 250?|80;90;100;120|2
Jak nazywa się stolica Finlandii położona nad Zatoką Fińską?|Tallinn;Helsinki;Sztokholm;Oslo|1
Która planeta znajduje się najbliżej Słońca?|Wenus;Merkury;Mars;Ziemia|1
W jakim mieście leży słynny most Golden Gate w kolorze pomarańczowo-czerwonym?|W Nowym Jorku;W San Francisco;W Chicago;W Miami|1
Który wybitny angielski fizyk opisał prawo powszechnego ciążenia i trzy zasady dynamiki?|Albert Einstein;Izaak Newton;Michael Faraday;James Watt|1
Kto jest autorem klasycznej książki dla młodzieży 'W pustyni i w puszczy'?|Bolesław Prus;Henryk Sienkiewicz;Adam Mickiewicz;Stefan Żeromski|1
Jaki pierwiastek chemiczny oznaczany jest symbolem Au?|Srebro;Złoto;Miedź;Aluminium|1
Kto napisał epopeję narodową 'Pan Tadeusz'?|Juliusz Słowacki;Adam Mickiewicz;Cyprian Kamil Norwid;Aleksander Fredro|1
Jak nazywa się polski noblista, autor powieści 'Quo vadis'?|Władysław Reymont;Henryk Sienkiewicz;Bolesław Prus;Czesław Miłosz|1
Jak nazywa się przyrząd do pomiaru ciśnienia atmosferycznego?|Termometr;Barometr;Higrometr;Anemometr|1
Kto napisał dramat 'Balladyna'?|Adam Mickiewicz;Juliusz Słowacki;Bolesław Prus;Henryk Sienkiewicz|1
W jakim kraju leży słynny posąg Chrystusa Odkupiciela w Rio de Janeiro?|W Argentynie;W Brazylii;W Meksyku;W Portugalii|1
Który polski król założył w 1364 roku pierwszą uczelnię wyższą na ziemiach polskich?|Władysław Łokietek;Kazimierz Wielki;Władysław Jagiełło;Stefan Batory|1
Który żeglarz jako pierwszy opłynął Przylądek Dobrej Nadziei i dotarł drogą morską do Indii?|Krzysztof Kolumb;Vasco da Gama;Marco Polo;James Cook|1
Jak nazywa się proces, w którym rośliny wytwarzają pokarm przy udziale światła?|Oddychanie;Fotosynteza;Fermentacja;Parowanie|1
Jak nazywa się najmniejsze państwo świata?|Monako;San Marino;Watykan;Liechtenstein|2
Ile strun ma klasyczna gitara akustyczna?|Cztery;Pięć;Sześć;Osiem|2
Jak nazywa się stolica Hiszpanii?|Barcelona;Madryt;Sewilla;Walencja|1
Który z poniższych ptaków jest nielotem żyjącym naturalnie w Australii?|Kondor;Emu;Pelikan;Bocian|1
Które miasto we Włoszech słynie ze starożytnych ruin zniszczonych przez wybuch Wezuwiusza?|Florencja;Pompeje;Wenecja;Bolonia|1
Które państwo słynie z tarasów ryżowych, wulkanu Fudżi oraz szybkich pociągów Shinkansen?|Chiny;Japonia;Korea Południowa;Wietnam|1
Która rzeka w Polsce przepływa przez Poznań i wpada do Odry?|Noteć;Warta;Pilica;San|1
Który z poniższych metali jest głównym składnikiem lekkiego stopu używanego w budowie samolotów?|Ołów;Glin;Żelazo;Cyna|1
W którym roku odbyła się bitwa pod Grunwaldem?|1385;1410;1492;1525|1
Jak nazywa się największy gryzoń żyjący obecnie na świecie?|Bóbr europejski;Kapibara wielka;Jeżozwierz;Nutria|1
Które państwo Europy graniczy jednocześnie z Hiszpanią i Francją wysoko w Pirenejach?|Monako;Andora;Liechtenstein;San Marino|1
Która planeta Układu Słonecznego słynie z Wielkiej Czerwonej Plamy?|Mars;Jowisz;Saturn;Wenus|1
W którym polskim mieście na Rynku Głównym stoją Sukiennice?|W Warszawie;W Krakowie;W Poznaniu;W Gdańsku|1
Jak nazywa się stolica Szwecji położona na czternastu wyspach?|Oslo;Sztokholm;Helsinki;Kopenhaga|1
Które państwo w Ameryce Południowej słynie z ruin Machu Picchu?|Argentyna;Peru;Boliwia;Kolumbia|1
`;

window.QUIZ_QUESTIONS_RAW.millionStandardQ3Opts = `
Które z tych zwierząt należy do płazów?|Jaszczurka;Salamandra plamista;Zaskroniec|1
Który polski kompozytor urodził się w Żelazowej Woli?|Fryderyk Chopin;Stanisław Moniuszko;Ignacy Jan Paderewski|0
Ile wynosi obwód prostokąta o bokach długości 9 cm i 14 cm?|23 cm;46 cm;126 cm|1
W którym mieście odbyły się Letnie Igrzyska Olimpijskie w 2024 roku?|W Tokio;W Paryżu;W Londynie|1
W jakim kraju wynaleziono papier i kompas?|W Egipcie;W Chinach;W Grecji|1
Która rzeka przepływa przez stolicę Węgier – Budapeszt?|Łaba;Dunaj;Ren|1
Na jakim kontynencie rozciąga się pustynia Sahara?|W Azji;W Afryce;W Australii|1
Ile wynosi wartość potęgi 4 do potęgi trzeciej?|16;64;48|1
Który król przeniósł siedzibę dworu królewskiego z Krakowa do Warszawy?|Kazimierz Wielki;Zygmunt III Waza;Stefan Batory|1
Ile milimetrów mieści się w 8 centymetrach?|8;80;800|1
Która kość w ludzkim szkielecie jest najdłuższa?|Kość ramienna;Kość udowa;Kość piszczelowa|1
Który polski żużlowiec zdobył kilkakrotnie tytuł Indywidualnego Mistrza Świata na żużlu?|Tomasz Gollob;Bartosz Zmarzlik;Piotr Protasiewicz|1
Jak nazywa się największa wyspa na świecie?|Madagaskar;Grenlandia;Islandia|1
Która z tych wysp leży na Morzu Śródziemnym?|Islandia;Cypr;Madagaskar|1
Które z tych państw leży na Półwyspie Iberyjskim?|Włochy;Portugalia;Grecja|1
Która z poniższych planet nie posiada żadnego naturalnego księżyca?|Mars;Wenus;Neptun|1
Który z poniższych gazów jest głównym składnikiem gazu ziemnego?|Metan;Hel;Argon|0
W jakim państwie narodziła się sztuka walki judo?|W Chinach;W Japonii;W Korei|1
W którym wieku powstał słynny ceglany zamek krzyżacki w Malborku?|W X wieku;W XIII wieku;W XVIII wieku|1
Która z tych liczb jest liczbą pierwszą?|21;23;27|1
Jak nazywa się stolica Danii?|Oslo;Kopenhaga;Sztokholm|1
W jakim mieście leży słynny budynek opery w kształcie białych żagli?|W Sydney;W Nowym Jorku;W Tokio|0
Jak nazywa się najwyższy szczyt w pasmie Bieszczadów po stronie polskiej?|Śnieżka;Tarnica;Babia Góra|1
Który pierwiastek ma symbol chemiczny O?|Złoto;Tlen;Ołów|1
Która z tych planet ma najwięcej znanych księżyców?|Mars;Ziemia;Saturn|2
Która z tych rzek przepływa przez Paryż?|Tamiza;Sekwana;Ren|1
Kto napisał słynną powieść 'Robinson Crusoe'?|Daniel Defoe;Juliusz Verne;Mark Twain|0
Który gaz jest lżejszy od powietrza i unosi balony ku górze?|Dwutlenek węgla;Hel;Tlen|1
Z ilu tercji składa się mecz hokeja na lodzie?|Z dwóch;Z trzech;Z czterech|1
Które z tych polskich jezior jest najgłębsze?|Śniardwy;Hańcza;Morskie Oko|1
Który z poniższych organów człowieka produkuje żółć?|Trzustka;Wątroba;Nerka|1
W którym polskim mieście znajduje się Zamek Królewski na Wawelu?|W Warszawie;W Krakowie;W Malborku|1
Jaką literą w systemie rzymskim zapisuje się liczbę 500?|C;D;M|1
Ile wynosi 20 procent z liczby 150?|20;30;40|1
Na którym kontynencie znajduje się najwięcej państw?|W Azji;W Afryce;W Ameryce Południowej|1
Które drzewo iglaste w Polsce zrzuca swoje igły na zimę?|Świerk;Modrzew;Sosna|1
W jakim mieście znajduje się słynny plac Świętego Marka z bazyliką?|W Rzymie;W Wenecji;W Mediolanie|1
Ile wynosi wynik mnożenia 14 razy 4?|48;56;64|1
Który pierwiastek chemiczny ma symbol K?|Wapń;Potas;Krzem|1
Jak nazywa się jednostka natężenia prądu elektrycznego?|Wolt;Amper;Wat|1
W którym państwie leży najdłuższa jaskinia świata – Jaskinia Mamucia?|W Brazylii;W Stanach Zjednoczonych;W Chinach|1
Ile kręgów szyjnych ma żyrafa?|Siedem;Dwanaście;Dwadzieścia|0
`;

window.QUIZ_QUESTIONS_RAW.millionStandardQ2Opts = `
Który z tych instrumentów jest instrumentem dętym?|Trąbka;Wiolonczela|0
Który pierwiastek stanowi większy procent ziemskiej atmosfery?|Azot;Tlen|0
Który ze słynnych wynalazków powstał wcześniej?|Druk Gutenberga;Telefon Bella|0
Która z tych liczb jest większa?|Trzy czwarte;Dwie trzecie|0
Za pomocą czego oddychają wieloryby?|Płuc;Skrzeli|0
Który metal ma wyższą temperaturę topnienia?|Żelazo;Ołów|0
Które z tych jezior w Polsce ma większą powierzchnię?|Śniardwy;Morskie Oko|0
Która figura ma większe pole: kwadrat o boku 5 cm czy prostokąt o bokach 4 cm i 6 cm?|Kwadrat o boku 5 cm;Prostokąt 4 na 6 cm|0
Które z tych państw ma większą powierzchnię?|Francja;Polska|0
Który ze znanych odkrywców żył wcześniej?|Krzysztof Kolumb;Neil Armstrong|0
Czy grzyby należą w biologii do królestwa roślin?|Tak;Nie|1
Z jakiego pierwiastka składa się czysty diament?|Z węgla;Z krzemu|0
Czy rok 2024 był rokiem przestępnym?|Tak;Nie|0
Które z poniższych państw ma większą liczbę ludności?|Niemcy;Szwecja|0
Który z tych kontynentów jest większy?|Afryka;Europa|0
Które polskie miasto leży bardziej na północ?|Gdańsk;Kraków|0
Która z tych rzek w Polsce jest dłuższa?|Odra;Wisła|1
Które zwierzę ma wyższą maksymalną prędkość pływania?|Żaglica;Żółw zielony|0
Czy w układzie słonecznym Ziemia jest bliżej Słońca niż Mars?|Tak;Nie|0
Które państwo leży w Ameryce Południowej?|Argentyna;Meksyk|0
Która z tych europejskich rzek uchodzi do Morza Czarnego?|Dunaj;Ren|0
Czy słonie afrykańskie są cięższe od nosorożców?|Tak;Nie|0
Który z tych ptaków potrafi latać?|Pingwin;Łabędź|1
Który pierwiastek jest lżejszy od powietrza?|Hel;Dwutlenek węgla|0
Która z tych planet krąży bliżej Słońca?|Wenus;Mars|0
Która z tych rzek przepływa przez Egipt?|Nil;Eufrat|0
Który kontynent posiada większą powierzchnię lądową?|Ameryka Północna;Australia|0
Który szczyt górski jest wyższy?|Rysy;Śnieżka|0
Która planeta jest większa?|Ziemia;Jowisz|1
Które z tych słów po angielsku oznacza 'jesień'?|Autumn;Spring|0
Która z tych figur ma więcej wierzchołków?|Sześciokąt;Pięciokąt|0
Po której stronie jezdni jeździ się w Wielkiej Brytanii i na Cyprze?|Po lewej;Po prawej|0
Które polskie miasto leży nad Odrą?|Wrocław;Toruń|0
Które z tych zwierząt składa jaja?|Delfin;Żółw morski|1
Które miasto leży dalej na zachód?|Poznań;Lublin|0
W którym wieku wybuchła II wojna światowa?|W XIX wieku;W XX wieku|1
Który ocean leży między Europą a Ameryką Północną?|Ocean Spokojny;Ocean Atlantycki|1
Który z tych kotów osiąga większą prędkość w sprincie?|Lew;Gepard|1
Do której gromady zwierząt należy nietoperz?|Ptaków;Ssaków|1
Które z tych mórz jest bardziej słone?|Morze Bałtyckie;Morze Śródziemne|1
Czy światło słoneczne dociera do Ziemi w czasie krótszym niż kwadrans?|Tak;Nie|0
Co rozchodzi się szybciej w ziemskiej atmosferze?|Światło;Dźwięk|0
`;

window.QUIZ_QUESTIONS_RAW.millionJasQ4Opts = `
Na jakim kontynencie żyją na wolności kangury i koale?|W Afryce;W Ameryce;W Australii;W Azji|2
Ile wynosi wynik dodawania 35 i 45?|70;75;80;85|2
Która planeta Układu Słonecznego znajduje się najbliżej Słońca?|Mars;Merkury;Saturn;Neptun|1
Jak nazywa się słynny polski sportowiec z wąsami zwany Orłem z Wisły?|Kamil Stoch;Adam Małysz;Robert Lewandowski;Piotr Żyła|1
Jak nazywa się czarny smok z filmu 'Jak wytresować smoka'?|Mushu;Szczerbatek;Tabaluga;Smaug|1
Która planeta słynie z wielkich pierścieni z lodu i skał?|Mars;Merkury;Saturn;Wenus|2
Jak po angielsku nazywa się pora roku 'Zima'?|Spring;Summer;Autumn;Winter|3
W jakim kraju stoją słynne starożytne piramidy i Sfinks?|W Grecji;W Egipcie;We Włoszech;W Hiszpanii|1
Jak nazywa się przyrząd, którego igła magnetyczna wskazuje północ?|Termometr;Kompas;Mikroskop;Stoper|1
Ile minut trwa półtorej godziny?|60 minut;75 minut;90 minut;120 minut|2
Jak po angielsku nazywa się kolorowe zjawisko na niebie – 'Tęcza'?|Cloud;Rainbow;Thunder;Shadow|1
Ile wynosi wynik odejmowania 100 minus 35?|55;65;75;85|1
W jakim mieście w Polsce znajduje się słynny pomnik Syrenki?|W Gdańsku;W Warszawie;W Krakowie;W Poznaniu|1
W którym polskim mieście stoi słynny Zamek Królewski na Wawelu?|W Gdańsku;W Krakowie;W Poznaniu;We Wrocławiu|1
W którym polskim mieście nad morzem stoi zabytkowy dźwig portowy Żuraw?|W Szczecinie;W Gdańsku;W Kołobrzegu;W Ustce|1
Ile wynosi wynik mnożenia 7 razy 5?|30;35;40;45|1
Ile wynosi wynik dodawania 48 i 22?|60;70;80;90|1
Jak nazywa się król lemurów z filmu animowanego 'Madagaskar'?|Alex;Król Julian;Skipper;Mort|1
Jak po angielsku nazywa się zwierzę 'Rekin'?|Whale;Dolphin;Shark;Turtle|2
Który ptak odlatuje z Polski na zimę do ciepłych krajów?|Sikorka;Wróbel;Bocian;Sroka|2
Ile centymetrów mieści się dokładnie w połowie jednego metra?|25;50;75;100|1
Jak nazywa się największy dziki ssak leśny z rogami żyjący w Puszczy Białowieskiej?|Jeleń;Żubr;Dzik;Borsuk|1
Jak ma na imię gadatliwy przyjaciel Shreka o czterech kopytach?|Kot w Butach;Osioł;Pinokio;Ciastek|1
W jakim europejskim kraju stoi słynna Krzywa Wieża w Pizie?|W Hiszpanii;We Włoszech;We Francji;W Grecji|1
Który z bohaterów filmu 'Toy Story' jest zabawką kosmonautą?|Chudy;Buzz Astral;Rex;Zurg|1
Jak nazywa się najwyższy szczyt w polskich Tatrach?|Giewont;Rysy;Śnieżka;Kasprowy Wierch|1
Które z tych zwierząt potrafi zmieniać kolor skóry, aby wtopić się w otoczenie?|Jeleń;Kameleon;Bóbr;Jeż|1
W którym miesiącu rozpoczynają się letnie wakacje szkolne w Polsce?|W maju;W czerwcu;W sierpniu;We wrześniu|1
Ile wynosi wynik mnożenia 6 razy 4?|18;20;24;28|2
Z nasion jakiej rośliny produkuje się czekoladę?|Z pszenicy;Z kakaowca;Z kukurydzy;Ze słonecznika|1
Jak nazywa się największy dziki kot w pręgi żyjący w Azji?|Gepard;Tygrys;Ryś;Puma|1
Które zwierzę leśne buduje tamy na rzekach z gałęzi i pni drzew?|Wydra;Bóbr;Lis;Borsuk|1
Które zwierzę leśne ma białe pasy na głowie, kopie głębokie nory i śpi zimą?|Lis;Borsuk;Zając;Sarna|1
Który owoc spada jesienią z drzewa zwanego dębem?|Kasztan;Żołądź;Orzech włoski;Szyszka|1
W którym europejskim mieście stoi słynna Wieża Eiffla?|W Rzymie;W Paryżu;W Londynie;W Madrycie|1
Jaką nazwę nosi najdłuższa rzeka w Polsce?|Odra;Warta;Wisła;San|2
Jak po angielsku nazywa się zwierzę 'Wiewiórka'?|Rabbit;Squirrel;Mouse;Fox|1
Ile boków ma figura geometryczna zwana pięciokątem?|Cztery;Pięć;Sześć;Siedem|1
W jakiej bajce główny bohater uczy się magii w szkole Hogwart?|Opowieści z Narnii;Harry Potter;Władca Pierścieni;Aladyn|1
Która część rośliny pobiera wodę z ziemi?|Kwiat;Korzeń;Liść;Owoc|1
Z jakiego polskiego miasta pochodzą najsłynniejsze pierniki?|Z Krakowa;Z Torunia;Z Sopotu;Z Lublina|1
Ile godzin liczy jedna pełna doba?|12;18;24;36|2
`;

window.QUIZ_QUESTIONS_RAW.millionJasQ3Opts = `
Jak nazywa się największy ocean na całej Ziemi?|Ocean Arktyczny;Ocean Spokojny;Ocean Indyjski|1
W której grze komputerowej układa się świat z sześciennych bloków i ucieka przed Creeperem?|Roblox;Minecraft;The Sims|1
W jakim polskim mieście można spotkać figurki krasnali na chodnikach?|We Wrocławiu;W Zakopanem;W Toruniu|0
Który z tych dinozaurów był groźnym mięsożercą?|Triceratops;Tyranozaur;Diplodok|1
Ile minut ma dokładnie połowa jednej godziny?|15 minut;30 minut;45 minut|1
Jak nazywa się stolica Włoch, w której stoi starożytne Koloseum?|Wenecja;Rzym;Mediolan|1
Ile centymetrów mieści się w jednym metrze?|10;50;100|2
Która planeta nazywana jest Czerwoną Planetą?|Wenus;Mars;Jowisz|1
Co jest głównym pokarmem pandy wielkiej?|Pędy bambusa;Ryby;Żołędzie|0
Która figura geometryczna ma wszystkie cztery boki równej długości i cztery kąty proste?|Trójkąt;Kwadrat;Koło|1
Które z tych zwierząt jest ssakiem, a nie rybą?|Rekin;Delfin;Karp|1
W jakim sporcie na lodzie zawodnicy grają kijami i krążkiem?|W koszykówce;W hokeju na lodzie;W siatkówce|1
Który z tych ptaków zostaje w Polsce na mroźną zimę i przylatuje do karmnika?|Bocian;Sikorka bogatka;Jaskółka|1
Ile nóg ma każdy pająk?|Sześć;Osiem;Dziesięć|1
`;

window.QUIZ_QUESTIONS_RAW.millionJasQ2Opts = `
Czy Słońce jest gwiazdą czy planetą?|Gwiazdą;Planetą|0
Która planeta znajduje się bliżej Słońca?|Merkury;Saturn|0
Który kontynent jest zimniejszy?|Afryka;Antarktyda|1
Które góry w Polsce są wyższe?|Tatry;Góry Świętokrzyskie|0
Które zwierzę biega szybciej?|Gepard;Koń|0
Które zwierzę potrafi zmieniać kolor skóry?|Kameleon;Bóbr|0
Czy czekolada powstaje z ziaren kakaowca?|Tak;Nie|0
Która rzeka przepływa przez Warszawę?|Wisła;Odra|0
Który miesiąc ma mniej dni?|Luty;Lipiec|0
Które zwierzę śpi zimą w gawrze?|Niedźwiedź brunatny;Zając|0
Który ptak nie potrafi latać?|Pingwin;Bocian|0
Z czego powstaje kostka lodu?|Z zamarzniętej wody;Z piasku|0
Która planeta jest większa?|Ziemia;Jowisz|1
Czy nietoperz jest ptakiem czy ssakiem?|Ptakiem;Ssakiem|1
`;

// --- RUNDA 6: RYZYKO — 28 PYTAŃ RODZINNYCH (po 2 na każdą z 14 pul) ---
window.QUIZ_QUESTIONS_RAW.familyR4Questions = `
RODZINA|Jakiej marki samochód wypożyczyliśmy podczas wspólnych wakacji w Chorwacji?|Renault;Volkswagen;Toyota;Peugeot|1
RODZINA|Jakim środkiem transportu zwiedzaliśmy wspólnie wyspę Maltę podczas wiosennego wyjazdu?|Metrem;Autobusami komunikacji Tallinja;Tramwajem;Pociągiem górskim|1
RODZINA|W jakim śląskim mieście urodziła się Mama lub Ciocia Ola?|Katowice;Chorzów;Sosnowiec;Bytom|1
RODZINA|Jaką nazwę nosi słynny park z kolejką linową Elka, Zoo i Planetarium znajdujący się w Chorzowie?|Park Kościuszki;Park Śląski;Park Zdrojowy;Park Wolności|1
RODZINA|Jak nazywa się nadmorska miejscowość w Chorwacji, w pobliżu której byliśmy razem we wrześniu na wakacjach?|Dubrownik;Opatija;Split;Zadar|1
RODZINA|Jaką słoneczną wyspę na Morzu Śródziemnym odwiedziliśmy wiosną podczas rodzinnej wycieczki w kwietniu?|Sycylię;Maltę;Kretę;Majorkę|1
RODZINA|W jakim mieście mieszka obecnie wujek Krzysiek?|W Sosnowcu;W Chorzowie;W Zabrzu;W Bytomiu|1
RODZINA|Do jakiego nadmorskiego miasta na Cyprze zaplanowaliśmy wielką rodzinną wyprawę w grudniu?|Do Larnaki;Do Paphos;Do Limassol;Do Nikozji|1
RODZINA|Jak nazywa się malowniczy wąwóz skalny w okolicach Paphos na Cyprze, w którym można wędrować między skałami?|Wąwóz Samaria;Wąwóz Avakas;Wąwóz Homole;Wąwóz Kraków|1
RODZINA|Jaki konkretny model samochodu ma wujek Krzysiek?|Octavia;Scala;Fabia;Superb|1
RODZINA|W jakim mieście pracuje wujek Krzysiek?|W Krakowie;W Katowicach;We Wrocławiu;W Gliwicach|1
RODZINA|Jaką marką samochodu jeździ obecnie wujek Krzysiek?|Toyota;Škoda;Ford;Volkswagen|1
RODZINA|Które nadmorskie miasto w Chorwacji odwiedziliśmy razem z Opatiją we wrześniu na wakacjach?|Dubrownik;Rijekę;Split;Zadar|1
RODZINA|Jak nazywa się dzielnica Katowic, w której znajduje się rodzinny dom z ogrodem?|Piotrowice;Załęże;Ligota;Brynów|1
RODZINA|Jakie imię nosi nasz młodszy uśmiechnięty kuzyn, który miał swoje solo podczas nagrywania świątecznego hymnu?|Franek;Bartuś;Staś;Antoś|1
RODZINA|Czym zawodowo zajmuje się wujek Krzysiek w Katowicach?|Projektowaniem mostów;Sterowaniem ruchem drogowym i sygnalizacją;Naprawą samolotów;Programowaniem gier|1
RODZINA|Kto w naszej rodzinie jest rodzoną siostrą Ani?|Ciocia Kasia;Ciocia Ola;Babcia Ela;Ciocia Basia|1
RODZINA|Jakie nazwisko panieńskie nosiła Babcia Ela?|Lis;Wilk;Kot;Zając|1
RODZINA|Ile łącznie wnucząt, licząc całą czwórkę razem z małym Bartusiem, ma Babcia Ela?|Troje;Czworo;Pięcioro;Sześcioro|2
RODZINA|Jak ma na imię najmłodszy kuzyn w naszej rodzinnej ekipie?|Kubuś;Bartuś;Tomek;Adaś|1
RODZINA|W jakim mieście leży słynna hala Spodek, obok której często przejeżdżamy na Śląsku?|W Gliwicach;W Katowicach;W Tychach;W Bytomiu|1
RODZINA|W jakim kraju nad Morzem Adriatyckim byliśmy razem na wrześniowych wakacjach?|W Hiszpanii;W Chorwacji;W Bułgarii;W Grecji|1
RODZINA|Jak nazywa się stolica słonecznej Malty, po której spacerowaliśmy podczas kwietniowej wyprawy?|Nikozja;Valletta;Opatija;Rijeka|1
RODZINA|Który z poniższych wypieków wujek Krzysiek najchętniej piecze w domu w piekarniku?|Sernik wiedeński;Szarlotkę i pleśniaka;Tort bezowy;Pączki z różą|1
RODZINA|Jak nazywa się słynna malownicza laguna z turkusową wodą na Cyprze, będąca celem naszej wyprawy?|Błękitna Grota;Blue Lagoon;Zatoka Wraku;Zatoka Delfinów|1
RODZINA|W jakim miesiącu urodziny obchodzi dziadek Janusz?|Styczeń;Luty;Marzec;Kwiecień|1
RODZINA|Jakie drugie imię ma Mama lub Ciocia Ania?|Maria;Katarzyna;Ewa;Zofia|0
RODZINA|W jakim śląskim mieście obok Katowic znajduje się mieszkanie wujka Krzyśka?|W Gliwicach;W Rudzie Śląskiej;W Zabrzu;W Tychach|1
`;

// --- RUNDA 6: RYZYKO — 308 PYTAŃ OGÓLNYCH (1–220 Pule 1–10 | 221–308 Pule 11–14 Trudniejsze) ---
window.QUIZ_QUESTIONS_RAW.generalR4Questions = `
ANGIELSKI|Jak po angielsku nazywa się kolor 'szary'?|Green;Blue;Grey;Brown|2
SPORT|Ile wygranych setów daje zwycięstwo w standardowym meczu siatkówki halowej?|Dwa;Trzy;Cztery;Pięć|1
BAJKI|Ilu krasnoludków przyjęło pod swój dach Królewnę Śnieżkę?|Pięciu;Sześciu;Siedmiu;Ośmiu|2
ZWIERZĘTA|Który ptak słynie z pięknego kolorowego ogona rozkładanego w wachlarz podczas godów?|Bażant;Paw;Flaming;Tukan|1
KOSMOS|Ile dni w przybliżeniu trwa jeden pełny cykl zmian faz Księżyca od pełni do pełni?|Około 14 dni;Około 29 dni;Około 60 dni;Około 90 dni|1
TECHNOLOGIA|Jak nazywa się najpopularniejszy standard bezprzewodowej sieci lokalnej w domu?|Bluetooth;Wi-Fi;USB;GPS|1
BAJKI|Który mieszkaniec Stumilowego Lasu nieustannie gubił swój przyczepiany ogon?|Tygrysek;Kłapouchy;Maleństwo;Prosiaczek|1
KULINARIA|Z jakiego produktu wyrabia się tradycyjny grecki sos tzatziki obok jogurtu i czosnku?|Z pomidora;Ze świeżego ogórka;Z papryki;Z rzodkiewki|1
SPORT|Co ile lat organizowane są Letnie Igrzyska Olimpijskie?|Co 2 lata;Co 3 lata;Co 4 lata;Co 5 lat|2
NAUKA|Który metal w temperaturze pokojowej występuje w stanie ciekłym?|Żelazo;Rtęć;Ołów;Cyna|1
LITERATURA|Jak nazywał się słoń, którym opiekowali się Staś i Nel w powieści 'W pustyni i w puszczy'?|Dumbo;King;Saba;Bimbo|1
KULINARIA|Z jakich czerwonych owoców botanicznych powstaje klasyczny włoski sos bolognese?|Z papryki;Z pomidorów;Z buraków;Z rzodkiewki|1
RUCH DROGOWY|Po której stronie jezdni poruszają się pojazdy w Wielkiej Brytanii, Australii i na Cyprze?|Po prawej;Po lewej;Zależy od rodzaju drogi;Po obu naprzemiennie|1
BAJKI|Jak nazywa się mała rybka błazenek, której szukał w oceanie ojciec Marlin?|Florek;Nemo;Dory;Sebastian|1
GEOGRAFIA|Jak nazywa się stolica Danii położona na wyspie Zelandia?|Oslo;Kopenhaga;Sztokholm;Helsinki|1
ANGIELSKI|Który kolor oznacza angielskie słowo 'Yellow'?|Zielony;Pomarańczowy;Żółty;Biały|2
HISTORIA|Który król według znanego powiedzenia zastał Polskę drewnianą, a zostawił murowaną?|Bolesław Chrobry;Kazimierz Wielki;Mieszko I;Władysław Jagiełło|1
MATEMATYKA|Ile stopni wynosi miara kąta półpełnego?|90 stopni;120 stopni;180 stopni;360 stopni|2
MATEMATYKA|Ile wynosi wynik mnożenia 3 razy 17?|41;49;51;57|2
BAJKI|Jak ma na imię mały chłopiec, który w filmie 'Odlot' leci w domu na balonach ze starszym panem Carlem?|Andy;Russell;Miguel;Hiro|1
MATEMATYKA|Ile sztuk liczy dokładnie jeden tuzin?|10;12;15;20|1
LITERATURA|Jak miała na imię dziewczynka z książki Lewisa Carrolla, która pobiegła za Białym Królikiem?|Dorotka;Alicja;Łucja;Klara|1
ANGIELSKI|Jak po angielsku nazywa się egzotyczny owoc 'ananas'?|Apple;Pineapple;Peach;Plum|1
KOSMOS|Jakim trzyliterowym skrótem określa się Międzynarodową Stację Kosmiczną?|ISS;NASA;ESA;GPS|0
BAJKI|Jak nazywa się mała syrenka z czerwoną czupryną, córka króla Trytona?|Vaiana;Ariel;Dzwoneczek;Jasmina|1
BAJKI|Jak nazywa się przyjaciel kowboja Chudego z filmu 'Toy Story' – zabawka kosmonauta?|Zurg;Buzz Astral;Rex;Cienki|1
MUZYKA|Nazwa jakiego polskiego tańca ludowego występuje w tytule naszego hymnu narodowego?|Polonez;Krakowiak;Mazurek;Oberek|2
ZWIERZĘTA|Ile garbów na grzbiecie posiada wielbłąd jednogarbny zwany dromaderem?|Jeden;Dwa;Trzy;Żadnego|0
GEOGRAFIA|Które wielkie polskie miasto portowe słynie z zabytkowego dźwigu Żuraw nad Motławą?|Szczecin;Gdańsk;Gdynia;Elbląg|1
MATEMATYKA|Ile wynosi wynik działania: 8 razy 7 dodać 44 minus 100?|0;1;10;20|0
SPORT|W jakiej dyscyplinie sportowej wielkoszlemowe turnieje wygrywa Iga Świątek?|W siatkówce;W pływaniu;W tenisie ziemnym;W lekkoatletyce|2
ZWIERZĘTA|Ile kręgów szyjnych znajduje się w długiej szyi żyrafy?|Siedem;Czternaście;Dwadzieścia jeden;Czterdzieści|0
MATEMATYKA|Ile wynosi wynik dzielenia 72 przez 9?|6;7;8;9|2
JĘZYKI|Jaki język, obok tureckiego, jest językiem urzędowym na Cyprze?|Hiszpański;Włoski;Grecki;Francuski|2
TRANSPORT|Jak nazywa się szybka kolej miejska kursująca głównie w podziemnych tunelach?|Tramwaj;Trolejbus;Metro;Kolejka linowa|2
SPORT|Ilu zawodników jednej drużyny znajduje się naraz na boisku w siatkówce halowej?|5;6;7;9|1
KOSMOS|Kto jako pierwszy człowiek w historii postawił stopę na Księżycu w 1969 roku?|Neil Armstrong;Jurij Gagarin;Buzz Aldrin;John Glenn|0
ZWIERZĘTA|Który wysoki ptak brodzący o popielatych piórach słynie z donośnego klangoru o świcie?|Czapla;Żuraw;Bocian czarny;Kormoran|1
FILM|W której sadze filmowej występują Darth Vader, Luke Skywalker i mistrz Yoda?|Star Trek;Diuna;Gwiezdne Wojny;Władca Pierścieni|2
PRZYRODA|Z jakiego owocu leśnego powstaje ciemnofioletowy sok barwiący język i usta?|Z maliny;Z czarnej jagody;Z poziomki;Z porzeczki|1
PRZYRODA|Jak nazywają się mikroskopijne otwory w liściach, przez które roślina prowadzi wymianę gazową?|Korzenie;Aparaty szparkowe;Słoje;Pąki|1
HISTORIA|Jak miała na imię czeska księżniczka, pierwsza chrześcijańska żona Mieszka I?|Bona Sforza;Jadwiga;Dobrawa;Kinga|2
MATEMATYKA|Ile wynosi wynik działania 5 dodać 5 razy 5 zgodnie z kolejnością działań?|50;25;30;15|2
GRY|W której serii gier kieruje się życiem wirtualnych postaci z zielonym kryształem nad głową?|Roblox;The Sims;Fortnite;Minecraft|1
MUZYKA|Który wybitny niemiecki kompozytor stworzył miniaturę 'Dla Elizy' i IX Symfonię?|Fryderyk Chopin;Ludwig van Beethoven;Wolfgang Amadeusz Mozart;Jan Sebastian Bach|1
ZWIERZĘTA|Który wodny gryzoń z szerokim płaskim ogonem buduje tamy z gałęzi na rzekach?|Wydra;Bóbr;Borsuk;Szop pracz|1
TECHNOLOGIA|Kto jest jednym ze słynnych współzałożycieli firmy Microsoft?|Steve Jobs;Mark Zuckerberg;Bill Gates;Elon Musk|2
KULINARIA|Z jakiego ziarna przygotowuje się bazę do japońskiego sushi oraz włoskiego risotto?|Z kaszy gryczanej;Z ryżu;Z soczewicy;Z jęczmienia|1
HISTORIA|Z jakiego kraju wyruszyła słynna wyprawa Krzysztofa Kolumba w 1492 roku?|Z Portugalii;Z Hiszpanii;Z Włoch;Z Anglii|1
GEOGRAFIA|W którym łańcuchu górskim w Azji wznosi się najwyższy szczyt Ziemi – Mount Everest?|W Alpach;W Andach;W Himalajach;W Kaukazie|2
SPORT|Ilu zawodników jednej drużyny przebywa naraz na parkiecie podczas meczu koszykówki?|4;5;6;7|1
GEOGRAFIA|Jak nazywa się stolica Portugalii?|Madryt;Lizbona;Porto;Sewilla|1
PRZYRODA|Który owad potrafi emitować własne światło odwłokiem w ciepłe letnie noce?|Biedronka;Świetlik świętojański;Pasikonik;Chrabąszcz|1
MUZYKA|Ile łącznie klawiszy białych i czarnych posiada standardowy fortepian koncertowy?|66;72;88;100|2
MATEMATYKA|Jaka jest największa dodatnia liczba trzycyfrowa?|900;990;999;1000|2
ZWIERZĘTA|Który ssak morski z rodziny waleni ma na pysku długi, spiralnie skręcony kieł?|Mors;Narwal;Orka;Kaszalot|1
KULINARIA|Jak nazywa się tradycyjna hiszpańska potrawa z ryżu, szafranu i owoców morza lub kurczaka?|Risotto;Paella;Gulasz;Tapas|1
GEOGRAFIA|Jak nazywa się stolica Austrii położona nad rzeką Dunaj?|Zurych;Wiedeń;Monachium;Bratysława|1
BIOLOGIA|Które z poniższych zwierząt należy do gromady płazów i przechodzi przeobrażenie z kijanki?|Jaszczurka zwinka;Żaba trawna;Węgorz;Ślimak|1
TECHNOLOGIA|Który skrót klawiszowy w systemie Windows służy do szybkiego skopiowania zaznaczonego tekstu?|Ctrl + V;Ctrl + C;Ctrl + X;Ctrl + Z|1
BAJKI|Kto zamieszkiwał magiczną oliwną lampę odnalezioną przez Aladyna?|Zły wezyr;Niebieski Dżin;Złoty smok;Małpka Abu|1
GEOGRAFIA|Przez jaką europejską stolicę przepływa rzeka Tamiza?|Przez Paryż;Przez Londyn;Przez Berlin;Przez Dublin|1
ANGIELSKI|Jak po angielsku nazywa się 'Brat'?|Sister;Cousin;Brother;Uncle|2
ZWIERZĘTA|Który największy współczesny gryzoń z Ameryki Południowej świetnie pływa i żyje w stadach?|Bóbr;Kapibara;Świnka morska;Nutria|1
GEOGRAFIA|Jak nazywa się największe pod względem powierzchni jezioro w Polsce?|Mamry;Śniardwy;Morskie Oko;Hańcza|1
BAJKI|Jak nazywa się pechowy wiewiór z 'Epoki Lodowcowej', który ciągle goni swojego żołędzia?|Sid;Scrat;Maniek;Diego|1
HISTORIA|Jak nazywała się słynna polska bohaterka, która ratowała żydowskie dzieci podczas II wojny światowej?|Maria Konopnicka;Irena Sendlerowa;Eliza Orzeszkowa;Helena Modrzejewska|1
MATEMATYKA|Ile metrów liczy dokładnie półtora kilometra?|150 m;1500 m;15000 m;1050 m|1
LITERATURA|Jak nazywał się chłopiec wychowany przez wilki w 'Księdze dżungli' Rudyarda Kiplinga?|Tarzan;Mowgli;Piotruś Pan;Aladyn|1
SPORT|Z jakiego azjatyckiego kraju wywodzą się sztuki walki karate oraz judo?|Z Chin;Z Korei Południowej;Z Japonii;Z Tajlandii|2
HISTORIA|Z jakim przełomowym odkryciem wiąże się nazwisko polskiego astronoma Mikołaja Kopernika?|Z odkryciem Ameryki;Z teorią krążenia Ziemi wokół Słońca;Z wynalezieniem druku;Z odkryciem grawitacji|1
GEOGRAFIA|Które z poniższych państw graniczy z Polską przez góry od strony południowej?|Niemcy;Czechy;Szwecja;Litwa|1
KOSMOS|Która planeta Układu Słonecznego wiruje niemal leżąc na boku?|Mars;Merkury;Uran;Jowisz|2
ZWIERZĘTA|Jak nazywa się biały niedźwiedź żyjący wśród lodów Arktyki?|Grizzly;Niedźwiedź polarny;Baribal;Panda|1
ANGIELSKI|Który dzień tygodnia nosi po angielsku nazwę 'Monday'?|Wtorek;Piątek;Poniedziałek;Niedziela|2
PRZYRODA|Z jakiego drzewa jesienią opadają na ziemię żołędzie?|Z sosny;Z kasztanowca;Z dębu;Z brzozy|2
MATEMATYKA|Ile wynosi wynik dzielenia 60 przez 5?|10;12;14;15|1
MUZYKA|Który z poniższych instrumentów smyczkowych jest największy i brzmi najniżej?|Skrzypce;Altówka;Wiolonczela;Kontrabas|3
SPORT|W jakiej dyscyplinie zimowej zawodnicy łączą bieg narciarski ze strzelaniem z karabinka?|W kombinacji norweskiej;W biathlonie;W curlingu;W skeletonie|1
ANGIELSKI|Co oznacza angielskie słowo 'Weather'?|Woda;Pogoda;Wiatr;Zima|1
BAJKI|Kto mieszka w wielkim ananasie na dnie morza w Bikini Dolnym?|Patryk Rozgwiazda;Skalmar;SpongeBob Kanciastoporty;Pan Krab|2
BIOLOGIA|Ile skrzydeł posiada dorosły motyl?|Dwa;Cztery;Sześć;Osiem|1
GEOGRAFIA|Jak nazywa się stolica Irlandii?|Edynburg;Dublin;Belfast;Glasgow|1
HISTORIA|Kto stanął na czele odradzającego się państwa polskiego w listopadzie 1918 roku?|Ignacy Paderewski;Józef Piłsudski;Tadeusz Kościuszko;Roman Dmowski|1
BAJKI|Jak nazywa się mały zielony smok z kreskówki, który broni Zielonej Krainy przed Arktosem?|Szczerbatek;Tabaluga;Mushu;Smok Wawelski|1
GEOGRAFIA|Jak nazywa się niezwykle słone jezioro bezodpływowe na granicy Izraela i Jordanii, w którym człowiek unosi się na wodzie?|Morze Czarne;Morze Martwe;Morze Czerwone;Morze Żółte|1
LITERATURA|Który duński pisarz stworzył baśnie 'Mała Syrenka' oraz 'Calineczka'?|Bracia Grimm;Hans Christian Andersen;Jan Brzechwa;Charles Perrault|1
ANGIELSKI|Jak po angielsku nazywa się pomieszczenie 'Sypialnia'?|Kitchen;Bedroom;Bathroom;Basement|1
ZWIERZĘTA|Czym żywią się dorosłe samice komarów przed złożeniem jaj, a czym samce?|Oba piją wodę;Samice krwią, a samce nektarem kwiatów;Oba jedzą liście;Samce krwią, a samice pyłkiem|1
KOSMOS|Jak nazywa się zjawisko świetlne tworzące barwne kurtyny na niebie w okolicach biegunów?|Miraż;Zorza polarna;Zaćmienie;Halo słoneczne|1
KULINARIA|Z jakiego gotowanego warzywa przygotowuje się polskie kopytka i włoskie gnocchi?|Z buraków;Z kapusty;Z ziemniaków;Z kalafiora|2
ANGIELSKI|Co oznacza angielskie słowo 'Cloud'?|Słońce;Wiatr;Chmura;Mgła|2
NAUKA|Jakim lekkim, niepalnym gazem napełnia się kolorowe balony, aby same unosiły się w górę?|Tlenem;Helem;Dwutlenkiem węgla;Azotem|1
TECHNOLOGIA|Kto był słynnym współzałożycielem i wieloletnim prezesem firmy Apple?|Steve Jobs;Bill Gates;Jeff Bezos;Mark Zuckerberg|0
GEOGRAFIA|W jakim polskim mieście na Długim Targu stoi zabytkowa Fontanna Neptuna?|W Krakowie;W Gdańsku;W Warszawie;We Wrocławiu|1
NAUKA|W jakiej temperaturze wrze czysta woda przy normalnym ciśnieniu atmosferycznym?|50 stopni C;90 stopni C;100 stopni C;120 stopni C|2
BAJKI|Jak ma na imię polinezyjska bohaterka filmu Disneya, która wypływa na ocean z półbogiem Mauim?|Mulan;Vaiana;Pocahontas;Merida|1
MATEMATYKA|Ile stopni wynosi miara kąta prostego?|45 stopni;90 stopni;180 stopni;360 stopni|1
MATEMATYKA|Ile pełnych kwadransów mieści się w jednej godzinie?|2;3;4;6|2
MATEMATYKA|Ile wynosi pole prostokąta o bokach długości 4 cm i 6 cm?|10 cm²;20 cm²;24 cm²;30 cm²|2
MUZYKA|Ile strun ma tradycyjna gitara klasyczna?|4;5;6;7|2
HISTORIA|Jak nazywał się wybitny polski pianista i kompozytor urodzony w Żelazowej Woli?|Stanisław Moniuszko;Fryderyk Chopin;Ignacy Jan Paderewski;Henryk Wieniawski|1
GEOGRAFIA|Które europejskie państwo słynie z pól tulipanów, wiatraków i gęstej sieci dróg rowerowych?|Belgia;Holandia;Dania;Szwajcaria|1
BAJKI|Jak ma na imię córka Draculi w serii filmów animowanych 'Hotel Transylwania'?|Mavis;Wanda;Bella;Koralina|0
GEOGRAFIA|Na jakim kontynencie leży Egipt i rzeka Nil?|W Europie;W Azji;W Ameryce;W Afryce|3
MATEMATYKA|Ile wynosi pole kwadratu o boku długości 9 cm?|36 cm²;81 cm²;72 cm²;90 cm²|1
TECHNOLOGIA|Jak nazywa się mały nośnik pamięci podłączany do gniazda USB w komputerze?|Router;Pendrive;Procesor;Monitor|1
GEOGRAFIA|Na terytorium którego azjatyckiego państwa rozciąga się Wielki Mur?|Japonii;Chin;Indii;Korei Południowej|1
MATEMATYKA|Ile wynosi pierwiastek kwadratowy z liczby 144?|10;11;12;14|2
SPORT|W jakim sporcie olimpijskim zawodnicy pokonują trasę, skacząc przez dziesięć płotków na bieżni?|W skoku o tyczce;W biegu przez płotki;W trójskoku;W chodzie sportowym|1
GEOGRAFIA|Które z poniższych polskich miast leży nad rzeką Odrą?|Warszawa;Kraków;Wrocław;Gdańsk|2
MUZYKA|Jak nazywa się układ pięciu poziomych linii służący do zapisu nut muzycznych?|Klucz wiolinowy;Pięciolinia;Takt;Partytura|1
GEOGRAFIA|Jak nazywa się stolica Węgier podzielona Dunajem na Budę i Peszt?|Bukareszt;Budapeszt;Bratysława;Belgrad|1
LITERATURA|Przez jaki mebel rodzeństwo Pevensie przeszło do magicznej krainy Narnii?|Przez starą szafę na ubrania;Przez sekretne drzwi w kominku;Przez kufer na strychu;Przez lustro w salonie|0
POGODA|Jak nazywa się przyrząd służący na stacjach pogodowych do mierzenia prędkości wiatru?|Barometr;Anemometr;Higrometr;Termometr|1
MATEMATYKA|Ile wynosi iloczyn liczb 8 i 9?|64;72;81;63|1
MUZYKA|Jak nazywa się wysoki, dźwięczny głos kobiecy w śpiewie klasycznym i operze?|Alt;Sopran;Tenor;Bas|1
BIOLOGIA|Który ze zmysłów człowieka pozwala rozpoznawać zapachy?|Wzrok;Słuch;Węch;Smak|2
PODRÓŻE|W jakim wyspiarskim państwie na Morzu Śródziemnym leży nadmorski kurort Paphos?|W Grecji;Na Cyprze;Na Malcie;We Włoszech|1
SPORT|Ilu graczy jednej drużyny przebywa jednocześnie na lodowisku w hokeju na lodzie razem z bramkarzem?|Pięciu;Sześciu;Siedmiu;Ośmiu|1
NAUKA|Jaki przyrząd optyczny pozwala oglądać w laboratorium komórki i bakterie?|Teleskop;Lornetka;Mikroskop;Peryskop|2
PRZYRODA|Liść jakiego drzewa widnieje pośrodku flagi narodowej Kanady?|Dębu;Klonu;Buku;Brzozy|1
BIOLOGIA|Który narząd nieustannie pompuje krew przez cały organizm człowieka?|Płuca;Żołądek;Serce;Wątroba|2
KOSMOS|Jak nazywał się amerykański łazik NASA, który wylądował w kraterze Gale na Marsie w 2012 roku?|Curiosity;Apollo;Voyager;Sputnik|0
PRZYRODA|Jak nazywa się żółty wiosenny kwiat, który po przekwitnięciu zamienia się w dmuchawca?|Stokrotka;Mniszek lekarski;Tulipan;Przebiśnieg|1
GRY|Jak nazywa się żółty bohater klasycznej gry zręcznościowej, który zjada kropki w labiryncie?|Sonic;Pac-Man;Kirby;Bomberman|1
KULINARIA|Z jakiego kraju wywodzi się tradycyjna zapiekanka makaronowa lasagne?|Z Francji;Z Włoch;Z Grecji;Z Hiszpanii|1
HISTORIA|Jak nazywało się starożytne pismo obrazkowe wykuwane na ścianach egipskich świątyń?|Pismo klinowe;Hieroglify;Runy;Cyrylica|1
BAJKI|Jakiego koloru skórę mają bajkowe Smerfy?|Zielonego;Żółtego;Niebieskiego;Fioletowego|2
HISTORIA|W jakim polskim mieście znajduje się znany pomnik Syrenki nad Wisłą?|W Gdańsku;W Krakowie;W Warszawie;W Toruniu|2
SPORT|Jakiego koloru jest koszulka lidera klasyfikacji generalnej wyścigu Tour de France?|Żółtego;Czerwonego;Czarnego;Różowego|0
ZWIERZĘTA|Które zwierzę lądowe osiąga największą prędkość w biegu na świecie?|Lew;Gepard;Antylopa;Kangur|1
LITERATURA|Kto jest autorką serii siedmiu powieści o Harrym Potterze?|J.R.R. Tolkien;J.K. Rowling;C.S. Lewis;Astrid Lindgren|1
ANATOMIA|Która kość w ludzkim ciele jest najdłuższa i najmocniejsza?|Kość udowa;Kość ramienna;Żebro;Obojczyk|0
KOSMOS|Jak nazywa się najbliższa Ziemi gwiazda ogrzewająca naszą planetę?|Syriusz;Słońce;Proxima Centauri;Wega|1
ZWIERZĘTA|Który ssak z Ameryki Południowej posiada pancerz ze sztywnych płytek i potrafi zwinąć się w kulę?|Jeżozwierz;Pancernik;Mrówkojad;Kapibara|1
SPORT|Co biegacze przekazują sobie z rąk do rąk podczas biegu sztafetowego?|Piłeczkę;Pałeczkę sztafetową;Chorągiewkę;Szarfę|1
ANATOMIA|Która część ludzkiego oka nadaje mu kolor i otacza czarną źrenicę?|Powieka;Tęczówka;Rogówka;Siatkówka|1
GRY|Zielony stwór w grze Minecraft, który podkrada się cicho, syczy i wybucha, to:|Zombie;Creeper;Szkielet;Enderman|1
MUZYKA|Jak określa się śpiew wielogłosowy wykonywany bez akompaniamentu instrumentów?|Playback;A cappella;Solo;Recytatyw|1
ANGIELSKI|Którą porę roku oznacza angielskie słowo 'Summer'?|Zimę;Wiosnę;Lato;Jesień|2
HISTORIA|Jak nazywał się mityczny koń z drewna, dzięki któremu Grecy zdobyli Troję?|Pegaz;Koń trojański;Bucefał;Centaur|1
HISTORIA|W którym roku wojska polsko-litewskie pokonały Krzyżaków pod Grunwaldem?|1410;966;1525;1918|0
WALUTY|Jaką walutą płaci się we Włoszech, Grecji, Hiszpanii oraz na Cyprze?|Dolarami;Funtami;Euro;Frankami|2
KOSMOS|Która niewielka skalista planeta krąży najbliżej Słońca?|Wenus;Mars;Merkury;Pluton|2
GEOGRAFIA|Który kontynent ma najmniejszą powierzchnię na Ziemi?|Australia;Europa;Antarktyda;Ameryka Południowa|0
MATEMATYKA|Ile wynosi dokładnie połowa z liczby 250?|100;115;125;150|2
ZWIERZĘTA|Jakie umaszczenie wyróżnia psy rasy dalmatyńczyk?|Czarne w białe pręgi;Białe w czarne cętki;Rudo-białe;Jednolicie szare|1
GEOGRAFIA|Jak nazywa się ciepłe morze położone między Europą, Afryką i Azją?|Morze Bałtyckie;Morze Śródziemne;Morze Północne;Morze Barentsa|1
BAJKI|Jak nazywa się słynna wesoła rybka z filmu 'Mała Syrenka', najlepszy przyjaciel Ariel?|Sebastian;Florek;Nemo;Dory|1
BAJKI|Jak ma na imię szeryf kowboj z serii filmów 'Toy Story'?|Buzz Astral;Chudy;Rex;Zurg|1
POGODA|Jak nazywają się bryłki lodu spadające z chmur podczas gwałtownej letniej burzy?|Szron;Grad;Mżawka;Rosa|1
SPORT|Ilu zawodników jednej drużyny przebywa na boisku podczas meczu piłki nożnej?|9;10;11;12|2
PRZYRODA|Który z poniższych leśnych grzybów ma czerwony kapelusz w białe plamki i jest trujący?|Borowik szlachetny;Pieczarka;Muchomor czerwony;Kurka|2
TRANSPORT|Jak nazywa się statek powietrzny unoszący się dzięki gorącemu powietrzu z koszem pod spodem?|Sterowiec;Szybowiec;Balon;Paralotnia|2
GEOGRAFIA|W jakim kraju leżą wielkie metropolie Toronto, Montreal i Vancouver?|W USA;W Kanadzie;W Australii;W Nowej Zelandii|1
BAJKI|Jak nazywa się mały robot sprzątający Ziemię w filmie animowanym Pixara?|Baymax;Wall-E;R2-D2;Bumblebee|1
TECHNOLOGIA|Jak nazywa się system nawigacji satelitarnej wyznaczający położenie telefonu lub samochodu na mapie?|Wi-Fi;GPS;Bluetooth;NFC|1
MATEMATYKA|Jaka liczba jest kolejnym wyrazem ciągu: 2, 4, 8, 16, ...?|20;24;32;64|2
ANGIELSKI|Co oznacza angielskie słowo 'Mountain'?|Rzeka;Jezioro;Góra;Dolina|2
MUZYKA|Jak nazywa się cienka pałeczka używana przez dyrygenta do prowadzenia orkiestry?|Smyczek;Batuta;Kamerton;Metronom|1
GEOGRAFIA|W jakim państwie leżą słynne piramidy Majów w Chichén Itzá?|W Peru;W Meksyku;W Brazylii;W Argentynie|1
LITERATURA|Który błędny rycerz z powieści Cervantesa stoczył walkę z wiatrakami?|Król Artur;Don Kichot;Robin Hood;Zorro|1
GEOGRAFIA|Jak nazywa się najmniejsze niepodległe państwo świata otoczone przez Rzym?|Monako;Malta;Watykan;San Marino|2
BIOLOGIA|Jak nazywa się zielony barwnik w liściach roślin niezbędny do przeprowadzania fotosyntezy?|Melanina;Chlorofil;Karoten;Hemoglobina|1
MUZYKA|Z jakiego skandynawskiego państwa pochodzi legendarny zespół popowy ABBA?|Z Danii;Ze Szwecji;Z Norwegii;Z Finlandii|1
TECHNOLOGIA|Jak nazywa się przenośny akumulator służący do ładowania telefonu w podróży?|Router;Powerbank;Modem;Pendrive|1
MATEMATYKA|Ile wierzchołków posiada każdy sześcian?|4;6;8;12|2
MATEMATYKA|Ile wynosi wynik mnożenia 14 razy 6?|74;84;94;64|1
MUZYKA|Ile półtonów mieści się w jednej pełnej oktawie muzycznej?|Osiem;Dwanaście;Szesnaście;Dziesięć|1
BIOLOGIA|Co jest najtwardszą tkanką w całym ludzkim organizmie?|Kość udowa;Szkliwo zębów;Paznokieć;Chrząstka|1
PRZYRODA|Jak nazywa się proces zrzucania starej skóry przez węże i jaszczurki podczas wzrostu?|Hibernacja;Linienie;Przeobrażenie;Kamuflaż|1
BAJKI|Jak ma na imię główny bohater – mały lew, który dorasta na afrykańskiej sawannie?|Mufasa;Simba;Skaza;Kovu|1
MUZYKA|Jak nazywa się grupa muzyków grających wspólnie na kilkudziesięciu instrumentach pod batutą dyrygenta?|Chór;Orkiestra symfoniczna;Kwartet;Duet|1
KULINARIA|Jak nazywa się popularna japońska zupa z makaronem, esencjonalnym bulionem i dodatkami?|Barszcz;Ramen;Gazpacho;Pho|1
SPORT|Jak nazywa się tradycyjna japońska walka dwóch potężnych zawodników na okrągłym ringu dohyō?|Judo;Sumo;Karate;Kendo|1
MATEMATYKA|Ile wynosi wynik odejmowania 150 minus 75?|65;75;85;95|1
MATEMATYKA|Ile wynosi wynik dzielenia 100 przez 4?|20;25;30;50|1
HISTORIA|Jaki legendarny potwór zamieszkiwał według podania jamę pod krakowskim Wawelem?|Bazyliszek;Smok Wawelski;Gryf;Warszawska Syrenka|1
ANGIELSKI|Który z poniższych zwrotów po angielsku oznacza 'Przepraszam'?|Please;Thank you;Sorry;Welcome|2
BIOLOGIA|Ile par odnóży krocznych mają wszystkie dorosłe owady?|Dwie pary;Trzy pary;Cztery pary;Pięć par|1
PRZYRODA|Jak nazywa się słodki sok kwiatowy zbierany przez pszczoły i motyle?|Żywica;Nektar;Pyłek;Wosk|1
PRZYRODA|Jak nazywa się zjawisko zapadania niektórych zwierząt, takich jak jeż czy świstak, w głęboki sen zimowy?|Migracja;Hibernacja;Fotosynteza;Ewolucja|1
MATEMATYKA|Ile wynosi iloczyn liczb 11 i 11?|111;121;131;144|1
PRZYRODA|Które długowieczne drzewo, jak słynny Bartek spod Kielc, uchodzi za symbol siły?|Sosna;Dąb;Brzoza;Wierzba|1
ANGIELSKI|Co oznacza angielskie słowo 'Butterfly'?|Ważka;Mucha;Motyl;Chrząszcz|2
HISTORIA|Który słynny żeglarz w 1492 roku dopłynął na trzech statkach do wysp Ameryki?|Ferdynand Magellan;Krzysztof Kolumb;Vasco da Gama;Marco Polo|1
PRZYRODA|Który nocny ptak drapieżny od starożytności jest symbolem mądrości?|Kruk;Sowa;Orzeł;Jastrząb|1
ZWIERZĘTA|Który ptak drapieżny potrafi obrócić głowę o niemal 270 stopni bez poruszania tułowiem?|Jastrząb;Puszczyk;Krogulec;Sokół|1
ANGIELSKI|Co oznacza angielskie słowo 'Window'?|Drzwi;Okno;Podłoga;Sufit|1
ANATOMIA|Z ilu zębów składa się pełne stałe uzębienie dorosłego człowieka?|28;30;32;34|2
MATEMATYKA|Ile wynosi przybliżenie liczby Pi do dwóch miejsc po przecinku?|2,14;3,14;3,41;4,13|1
ASTRONOMIA|Na której planecie szaleje potężny antycyklon zwany Wielką Czerwoną Plamą?|Na Marsie;Na Wenus;Na Jowiszu;Na Neptunie|2
KOSMOS|Jak nazywa się pierwsza planeta w Układzie Słonecznym posiadająca wyraźne pierścienie i leżąca za Jowiszem?|Uran;Saturn;Neptun;Mars|1
HISTORIA|Który słynny polski pisarz stworzył wiersze 'Lokomotywa' i 'Słoń Trąbalski'?|Jan Brzechwa;Julian Tuwim;Maria Konopnicka;Aleksander Fredro|1
ZWIERZĘTA|Który z poniższych ptaków potrafi biegać z prędkością ponad 60 km/h, choć nie lata?|Pingwin;Struś afrykański;Albatros;Pelikan|1
ANGIELSKI|Jak po angielsku nazywa się 'Ogród'?|Kitchen;Garage;Garden;Balcony|2
KULINARIA|Z jakiego europejskiego kraju wywodzi się słynny maślany rogalik croissant?|Z Włoch;Z Francji;Z Hiszpanii;Z Belgii|1
GEOGRAFIA|Który skandynawski kraj słynie z głębokich zatok zwanych fiordami?|Szwecja;Norwegia;Dania;Finlandia|1
GEOGRAFIA|Która cieśnina oddziela Półwysep Iberyjski od północnej Afryki?|Bosfor;Gibraltarska;La Manche;Magellana|1
GEOGRAFIA|Na jakim kontynencie żyją w naturze dziobaki i kangury?|W Afryce;W Australii;W Azji;W Ameryce Południowej|1
ANGIELSKI|Co oznacza angielskie słowo 'Journey'?|Dziennik;Podróż;Praca;Dżungla|1
MATEMATYKA|Ile wynosi obwód kwadratu o boku długości 6 cm?|12 cm;18 cm;24 cm;36 cm|2
KULINARIA|Z jakich owoców przygotowuje się klasyczne ciemne powidła do ciast i pączków?|Ze śliwek węgierek;Z bananów;Z arbuza;Z cytryn|0
ANGIELSKI|Jak po angielsku nazywa się 'Pociąg'?|Plane;Ship;Train;Truck|2
CHEMIA|Jaki symbol chemiczny ma w układzie okresowym złoto?|Ag;Au;Zn;Cu|1
TECHNOLOGIA|Co oznacza popularny skrót złącza komputerowego USB?|Ultra Speed Box;Universal Serial Bus;United System Base;User Screen Button|1
SPORT|W której dyscyplinie sportowej na torze lodowym zawodnicy zjeżdżają głową w dół na niskich sankach?|W curlingu;W skeletonie;W biathlonie;W hokeju|1
HISTORIA|Które polskie miasto było stolicą kraju bezpośrednio przed Warszawą przez ponad pięć stuleci?|Poznań;Gdańsk;Kraków;Wrocław|2
BAJKI|Czego używa Harry Potter do latania podczas szkolnych meczów Quidditcha?|Latającego dywanu;Magicznej miotły;Skrzydlatego konia;Peleryny|1
ZWIERZĘTA|Który ssak z ciemną maską wokół oczu znany jest z obmywania pokarmu w wodzie?|Borsuk;Szop pracz;Wydra;Kuna|1
ZWIERZĘTA|Który zwinny ssak wodny o smukłym ciele poluje na ryby w czystych rzekach?|Kret;Wydra europejska;Jeż;Borsuk|1
LOTNICTWO|W którym z cypryjskich miast znajduje się największy międzynarodowy port lotniczy wyspy?|W Nikozji;W Larnace;W Limassol;W Ajia Napa|1
ZWIERZĘTA|Jak nazywa się największy ssak morski żyjący na Ziemi?|Rekin wielorybi;Płetwal błękitny;Orka;Kaszalot|1
ANGIELSKI|Co oznacza angielski przymiotnik 'Fast'?|Wolny;Szybki;Ciężki;Wysoki|1
ANGIELSKI|Jak po angielsku nazywa się zwierzę 'Żółw'?|Frog;Turtle;Lizard;Snake|1
ANGIELSKI|Jak po angielsku nazywa się 'Most'?|Road;Tower;Bridge;Tunnel|2
ASTRONOMIA|Która planeta Układu Słonecznego słynie z najbardziej okazałych pierścieni z lodu i skał?|Uran;Neptun;Jowisz;Saturn|3
SPORT|Ile minut trwa regulaminowy czas gry w meczu piłki nożnej bez doliczonych minut?|60 minut;75 minut;80 minut;90 minut|3
MATEMATYKA|Ile wynosi wynik odejmowania 250 minus 85?|155;165;175;145|1
GEOGRAFIA|Które wielkie miasto Turcji leży jednocześnie na dwóch kontynentach – w Europie i w Azji?|Ankara;Stambuł;Izmir;Antalya|1
GEOGRAFIA|Które państwo afrykańskie ma największą liczbę ludności?|Egipt;Nigeria;RPA;Kenia|1
HISTORIA|W którym roku podpisano pokój toruński po wojnie trzynastoletniej, dający Polsce dostęp do Bałtyku?|1410;1466;1525;1569|1
LITERATURA|Jak nazywa się autorka słynnej powieści 'Ania z Zielonego Wzgórza'?|Astrid Lindgren;Lucy Maud Montgomery;J.K. Rowling;Tove Jansson|1
NAUKA|Jaka cząstka elementarna krążąca wokół jądra atomowego ma ujemny ładunek elektryczny?|Proton;Neutron;Elektron;Foton|2
BIOLOGIA|Jak nazywa się proces przenikania wody przez błonę półprzepuszczalną z roztworu o niższym stężeniu do wyższego?|Dyfuzja;Osmoza;Fotosynteza;Fermentacja|1
CHEMIA|Jaką nazwę nosi popularny związek chemiczny o wzorze NaCl używany codziennie w kuchni?|Cukier;Sól kuchenna;Soda oczyszczona;Ocet|1
CHEMIA|Jaką nazwę nosi silny kwas o wzorze chemicznym H2SO4?|Kwas solny;Kwas siarkowy;Kwas azotowy;Kwas węglowy|1
CHEMIA|Jaki kolor przybiera papierek lakmusowy w środowisku kwaśnym?|Niebieski;Czerwony;Zielony;Żółty|1
GEOGRAFIA|Jak nazywa się wyspiarskie państwo u południowo-wschodnich wybrzeży Afryki słynące z lemurów?|Sri Lanka;Madagaskar;Zanzibar;Seszele|1
BIOLOGIA|Ile par żeber posiada w swojej klatce piersiowej zdrowy człowiek?|Dziesięć par;Dwanaście par;Czternaście par;Szesnaście par|1
MUZYKA|Z jakiego angielskiego miasta portowego wywodził się zespół The Beatles?|Z Londynu;Z Liverpoolu;Z Manchesteru;Z Bristolu|1
ANATOMIA|Która grupa krwi może zostać w nagłym wypadku przetoczona jako krwinki czerwone biorcy każdej innej grupy?|AB Rh+;0 Rh-;A Rh+;B Rh-|1
ASTRONOMIA|Jak nazywa się wybuch kończący życie bardzo masywnej gwiazdy, świecący jaśniej niż cała galaktyka?|Zaćmienie;Supernowa;Mgławica;Kometa|1
HISTORIA|Kto został pierwszym prezydentem Stanów Zjednoczonych w 1789 roku?|Thomas Jefferson;George Washington;Abraham Lincoln;Benjamin Franklin|1
KULINARIA|Z jakiego kraju pochodzi słynna zupa cebulowa zapiekana z grzanką i serem?|Z Włoch;Z Francji;Ze Szwajcarii;Z Belgii|1
BIOLOGIA|Jak nazywają się najmniejsze naczynia krwionośne łączące tętniczki z żyłkami w tkankach?|Tętnice;Naczynia włosowate;Aorta;Żyły główne|1
HISTORIA|Jak nazywał się słynny polski astronom z Gdańska, który sporządził dokładne mapy Księżyca w XVII wieku?|Mikołaj Kopernik;Jan Heweliusz;Jan Śniadecki;Aleksander Wolszczan|1
FIZYKA|Ile wynosi temperatura zera bezwzględnego w skali Celsjusza?|Minus 100 stopni;Minus 273,15 stopnia;Minus 373 stopnie;Zero stopni|1
EKONOMIA|Jak nazywa się ogólny wzrost poziomu cen i spadek siły nabywczej pieniądza?|Deflacja;Inflacja;Recesja;Hossa|1
HISTORIA|Jak nazywał się pierwszy prezydent odrodzonej II Rzeczypospolitej wybrany w 1922 roku?|Józef Piłsudski;Gabriel Narutowicz;Ignacy Mościcki;Stanisław Wojciechowski|1
MATEMATYKA|Ile wynosi najmniejsza wspólna wielokrotność liczb 6 i 8?|12;24;48;16|1
MUZYKA|Na jakim instrumencie wirtuozersko grał XIX-wieczny kompozytor Niccolò Paganini?|Na fortepianie;Na skrzypcach;Na wiolonczeli;Na flecie|1
LITERATURA|Kto jest autorem klasycznej powieści 'Tajemniczy ogród'?|Astrid Lindgren;Frances Hodgson Burnett;Lucy Maud Montgomery;Louisa May Alcott|1
HISTORIA|W którym roku wybuchło Powstanie Warszawskie?|1939;1944;1943;1945|1
GEOGRAFIA|Jak nazywa się wielki półwysep na północy Europy obejmujący Norwegię i Szwecję?|Półwysep Jutlandzki;Półwysep Skandynawski;Półwysep Kolski;Półwysep Bałkański|1
SZTUKA|W jakim mieście we Włoszech znajduje się Kaplica Sykstyńska ze słynnym sklepieniem Michała Anioła?|We Florencji;W Watykanie;W Wenecji;W Mediolanie|1
ARCHITEKTURA|W którym hiszpańskim mieście stoi słynna bazylika Sagrada Família?|W Madrycie;W Barcelonie;W Sewilli;W Walencji|1
MATEMATYKA|Ile wynosi suma kątów wewnętrznych w dowolnym sześciokącie?|540 stopni;720 stopni;900 stopni;360 stopni|1
GEOGRAFIA|Przez jakie wielkie miasto afrykańskie przepływa rzeka Nil tuż przed swoją rozległą deltą?|Przez Tunis;Przez Kair;Przez Chartum;Przez Casablankę|1
GEOGRAFIA|Jak nazywa się najwyższy szczyt w Andach i całej Ameryce Południowej?|Kilimandżaro;Aconcagua;Denali;Mont Blanc|1
HISTORIA|W którym roku powstało niepodległe państwo polskie na nowo po I wojnie światowej?|1914;1918;1920;1922|1
TECHNOLOGIA|Jak nazywa się dwójkowy system liczbowy używany przez komputery, składający się wyłącznie z zer i jedynek?|System dziesiętny;System binarny;System szesnastkowy;System ósemkowy|1
FIZYKA|Które prawo fizyki głosi, że na ciało zanurzone w cieczy działa siła wyporu równa ciężarowi wypartej cieczy?|Prawo Newtona;Prawo Archimedesa;Prawo Pascala;Prawo Ohma|1
SPORT|W którym kraju odbyły się pierwsze w historii nowożytne Letnie Igrzyska Olimpijskie w 1896 roku?|We Francji;W Grecji;W Wielkiej Brytanii;W Stanach Zjednoczonych|1
HISTORIA|Jak nazywał się brytyjski okręt, na którym Karol Darwin odbył słynną podróż naukową dookoła świata?|Santa Maria;HMS Beagle;Mayflower;Endeavour|1
ASTRONOMIA|Jak nazywa się najjaśniejsza gwiazda nocnego nieba widoczna z Ziemi w gwiazdozbiorze Wielkiego Psa?|Betelgeza;Syriusz;Gwiazda Polarna;Wega|1
SPORT|Ile wielkoszlemowych turniejów tenisowych rozgrywa się co roku?|Trzy;Cztery;Pięć;Sześć|1
LITERATURA|Kto jest autorem klasycznej powieści 'Mistrz i Małgorzata'?|Fiodor Dostojewski;Michaił Bułhakow;Lew Tołstoj;Anton Czechow|1
FILM|Który polski film Pawła Pawlikowskiego zdobył w 2015 roku Oscara dla najlepszego filmu nieanglojęzycznego?|Zimna wojna;Ida;Boże Ciało;Katyń|1
CHEMIA|Jaki pierwiastek chemiczny tworzy zarówno bardzo twardy diament, jak i miękki grafit?|Krzem;Węgiel;Tytan;Srebro|1
FILM|Jak nazywa się pustynna planeta z powieści i filmów 'Diuna'?|Tatooine;Arrakis;Pandora;Krypton|1
FIZYKA|Jaka siła utrzymuje planety Układu Słonecznego na ich orbitach wokół Słońca?|Siła tarcia;Siła grawitacji;Siła wyporu;Siła magnetyczna|1
ANATOMIA|Który gruczoł w ciele człowieka wytwarza hormon insulinę?|Wątroba;Trzustka;Tarczyca;Śledziona|1
GEOGRAFIA|Który ocean jest najgłębszym oceanem na Ziemi?|Ocean Atlantycki;Ocean Spokojny;Ocean Indyjski;Ocean Arktyczny|1
SZTUKA|W jakim słynnym muzeum w Madrycie zgromadzono obrazy Velázqueza i Goi?|W Luwrze;W Prado;W Uffizi;W Ermitażu|1
NAUKA|Który brytyjski przyrodnik ogłosił teorię ewolucji drogą doboru naturalnego?|Gregor Mendel;Karol Darwin;Ludwik Pasteur;Aleksander Fleming|1
BIOLOGIA|Którą z poniższych witamin organizm człowieka potrafi wytwarzać w skórze pod wpływem promieni słonecznych?|Witaminę C;Witaminę D;Witaminę B12;Witaminę K|1
GEOGRAFIA|Które państwo w Ameryce Południowej jako jedyne ma jako główny język urzędowy język portugalski?|Argentyna;Brazylia;Kolumbia;Peru|1
FIZYKA|Jak nazywa się zjawisko odbicia fali dźwiękowej wracającej do słuchacza z wyraźnym opóźnieniem?|Rezonans;Echo;Załamanie;Dyfrakcja|1
HISTORIA|W którym roku upadło Cesarstwo Zachodniorzymskie, co uznaje się za koniec starożytności?|395;476;800;1054|1
KULTURA|Jak nazywa się tradycyjna japońska sztuka składania papieru bez użycia kleju i nożyczek?|Ikebana;Origami;Bonsai;Kaligrafia|1
GEOGRAFIA|Na której karaibskiej wyspie leżą dwa państwa – Haiti oraz Dominikana?|Na Kubie;Na Haiti;Na Jamajce;Na Portoryko|1
HISTORIA|Który starożytny wódz macedoński stworzył w IV wieku p.n.e. imperium sięgające aż do Indii?|Juliusz Cezar;Aleksander Wielki;Hannibal;Leonidas|1
BIOLOGIA|Jak nazywa się podział jądra komórkowego prowadzący do powstania dwóch identycznych komórek potomnych?|Mejoza;Mitoza;Osmoza;Transpiracja|1
MUZYKA|Jak nazywa się najsłynniejszy cykl czterech oper Richarda Wagnera oparty na mitologii germańskiej?|Czarodziejski flet;Pierścień Nibelunga;Jezioro łabędzie;Carmen|1
FILM|Kto skomponował kultową muzykę do filmów 'Gwiezdne Wojny', 'Szczęki' i 'Indiana Jones'?|Hans Zimmer;John Williams;Ennio Morricone;Howard Shore|1
HISTORIA|W którym roku w Polsce uchwalono Konstytucję 3 Maja?|1772;1791;1795;1807|1
BIOLOGIA|Ile par chromosomów znajduje się w zdrowej komórce somatycznej człowieka?|21 par;23 pary;24 pary;26 par|1
HISTORIA|W którym roku rozegrała się bitwa pod Waterloo kończąca epokę Napoleona?|1805;1812;1815;1830|2
SPORT|Ile kary czasowej otrzymuje biathlonista w biegu indywidualnym za jeden niecelny strzał na strzelnicy?|30 sekund;Jedną minutę;Dwie minuty;Runda karna 150 m|1
TECHNOLOGIA|W którym roku Steve Jobs zaprezentował pierwszego iPhone'a?|2004;2007;2010;2012|1
GEOGRAFIA|Przez terytorium którego wielkiego państwa azjatyckiego płynie rzeka Jangcy?|Indii;Chin;Japonii;Wietnamu|1
HISTORIA|Który cesarz rzymski według tradycji oskarżył chrześcijan o wielki pożar Rzymu w 64 roku?|Juliusz Cezar;Neron;Oktawian August;Marek Aureliusz|1
PODRÓŻE|Jak nazywa się słynne białe marmurowe mauzoleum w indyjskim mieście Agra?|Angkor Wat;Tadż Mahal;Petra;Borobudur|1
NAUKA|Jaki bezbarwny gaz powstający przy spalaniu węgla ma największy udział w antropogenicznym efekcie cieplarnianym?|Argon;Dwutlenek węgla;Wodór;Hel|1
KULINARIA|Z okolic jakiego włoskiego miasta pochodzi oryginalny ser Parmigiano Reggiano?|Z Florencji;Z Parmy;Z Neapolu;Z Mediolanu|1
KULTURA|W którym francuskim mieście odbywa się co roku słynny festiwal filmowy ze Złotą Palmą?|W Marsylii;W Cannes;W Nicei;W Lyonie|1
GEOGRAFIA|Jak nazywa się najwyższy szczyt w Ameryce Północnej, położony na Alasce?|Mount Whitney;Denali;Aconcagua;Popocatépetl|1
CHEMIA|Który pierwiastek chemiczny jest niezbędny do spalania i stanowi około 21 procent powietrza?|Azot;Tlen;Wodór;Argon|1
ARCHITEKTURA|W którym europejskim mieście wznosi się słynny neogotycki budynek Parlamentu bezpośrednio nad Dunajem?|W Wiedniu;W Budapeszcie;W Pradze;W Bratysławie|1
TECHNOLOGIA|Co oznacza skrót CPU określający najważniejszy układ obliczeniowy w komputerze?|Central Power Unit;Central Processing Unit;Computer Program Utility;Core Pixel Unit|1
FIZYKA|Jak nazywa się urządzenie zamieniające energię mechaniczną ruchu w energię elektryczną?|Akumulator;Prądnica;Transformator;Kondensator|1
FILM|Kto zagrał główną rolę Maximusa w filmie 'Gladiator' z 2000 roku?|Mel Gibson;Russell Crowe;Joaquin Phoenix;Brad Pitt|1
LITERATURA|Kto napisał słynną polską powieść historyczną 'Krzyżacy'?|Bolesław Prus;Henryk Sienkiewicz;Stefan Żeromski;Józef Ignacy Kraszewski|1
TECHNOLOGIA|Który popularny język programowania nosi nazwę nawiązującą do brytyjskiej grupy komików Monty Python?|Java;Python;Ruby;Swift|1
KOSMOS|Jak nazywa się największy księżyc Jowisza i zarazem całego Układu Słonecznego?|Tytan;Ganimedes;Kallisto;Tryton|1
FILM|Kto wyreżyserował filmy 'Incepcja', 'Interstellar' i 'Oppenheimer'?|Denis Villeneuve;Christopher Nolan;Ridley Scott;David Fincher|1
MUZYKA|Jak nazywał się charyzmatyczny wokalista brytyjskiego zespołu Queen?|Mick Jagger;Freddie Mercury;David Bowie;Elton John|1
CHEMIA|Jaką nazwę nosi reakcja chemiczna kwasu z zasadą prowadząca do powstania soli i wody?|Spalanie;Zobojętnianie;Utlenianie;Destylacja|1
EKONOMIA|Jak nazywa się podatek od towarów i usług doliczany do cen większości produktów w sklepie?|PIT;VAT;CIT;Akcyza|1
ASTRONOMIA|Jak nazywa się największy wulkan w całym Układzie Słonecznym, leżący na Marsie?|Mauna Kea;Olympus Mons;Wezuwiusz;Etna|1
FIZYKA|W jakich jednostkach układu SI wyraża się częstotliwość drgań i fal?|W watach;W hercach;W dżulach;W niutonach|1
NAUKA|Kto sformułował prawo określające zależność między napięciem, natężeniem prądu i oporem elektrycznym?|Alessandro Volta;Georg Ohm;André Ampère;James Watt|1
FIZYKA|W jakich jednostkach układu SI wyraża się ciśnienie?|W niutonach;W paskalach;W watach;W dżulach|1
CHEMIA|Jaki pierwiastek chemiczny oznaczany jest w układzie okresowym symbolem Pb?|Platyna;Ołów;Fosfor;Potas|1
GEOGRAFIA|Jak nazywa się najdłuższa rzeka na Półwyspie Iberyjskim uchodząca do Atlantyku w Lizbonie?|Ebro;Tag;Duero;Gwadalkiwir|1
MUZYKA|Który kompozytor epoki baroku skomponował słynne 'Koncerty brandenburskie' i 'Toccatę d-moll'?|Antonio Vivaldi;Jan Sebastian Bach;Georg Friedrich Händel;Joseph Haydn|1
`;

// --- RUNDA 7: KOŁO KATEGORII — 224 PYTAŃ (8 kategorii x 28 pytań = po 16 na każdą z 14 pul) ---
window.QUIZ_QUESTIONS_RAW.rawR6_Dedicated = `
KOSMOS|Jak nazywa się zjawisko astronomiczne, podczas którego Księżyc przesłania tarczę Słońca?|Pełnia;Zaćmienie Słońca;Zorza polarna;Zaćmienie Księżyca|1
KOSMOS|Która gazowa planeta Układu Słonecznego jest najbardziej oddalona od Słońca i słynie z potężnych wiatrów?|Saturn;Uran;Neptun;Jowisz|2
KOSMOS|Jak nazywa się obszar wypełniony skalnymi obiektami krążącymi między orbitami Marsa i Jowisza?|Pas Oriona;Pas Planetoid;Pas Kuipera;Obłok Oorta|1
KOSMOS|Kto był pierwszym człowiekiem w historii, który wykonał lot orbitalny w kosmosie w 1961 roku?|Neil Armstrong;Jurij Gagarin;Mirosław Hermaszewski;John Glenn|1
KOSMOS|Jak nazywał się amerykański program kosmiczny NASA, który doprowadził do lądowań na Księżycu?|Apollo;Wostok;Gemini;Mercury|0
KOSMOS|Czym pod względem astronomicznym jest nasze Słońce?|Wielką planetą;Gwiazdą;Kometą;Galaktyką|1
KOSMOS|Która gwiazda wyznacza podróżnikom na półkuli północnej kierunek północy?|Syriusz;Gwiazda Polarna;Alfa Centauri;Wega|1
KOSMOS|Który księżyc Saturna jest jedynym księżycem w Układzie Słonecznym z gęstą atmosferą?|Fobos;Tytan;Europa;Io|1
KOSMOS|Który znany asteryzm na północnym niebie przypomina kształt wozu i należy do Wielkiej Niedźwiedzicy?|Pas Oriona;Wielki Wóz;Krzyż Południa;Trójkąt Letni|1
KOSMOS|Która planeta Układu Słonecznego ma najwyższą temperaturę na powierzchni z powodu gęstej atmosfery?|Merkury;Wenus;Mars;Jowisz|1
KOSMOS|Jak nazywa się fragment kosmicznej skały, który przetrwał lot przez atmosferę i spadł na powierzchnię Ziemi?|Planetoida;Meteoryt;Kometa;Mgławica|1
KOSMOS|Jak nazywa się świecąca smuga gazu i pyłu ciągnąca się za kometą zbliżającą się do Słońca?|Pierścień;Warkocz komety;Krater;Korona|1
KOSMOS|Jak nazywa się słynny teleskop kosmiczny działający na orbicie Ziemi od 1990 roku?|Teleskop Hubble'a;Teleskop Keplera;Teleskop Newtona;Teleskop Galileusza|0
KOSMOS|Jak nazywa się naturalny satelita Ziemi powodujący morskie przypływy i odpływy?|Fobos;Księżyc;Tytan;Europa|1
KOSMOS|Jak nazywa się galaktyka spiralna, w której krąży nasz Układ Słoneczny?|Andromeda;Droga Mleczna;Trójkąta;Sombrero|1
KOSMOS|Ile w przybliżeniu trwa jeden pełny obrót Ziemi wokół własnej osi?|12 godzin;24 godziny;48 godzin;7 dni|1
KOSMOS|Jak nazywał się pierwszy polski kosmonauta, który poleciał w kosmos w 1978 roku?|Jan Heweliusz;Mirosław Hermaszewski;Mikołaj Kopernik;Sławosz Uznański|1
KOSMOS|Ile pełnoprawnych planet krąży obecnie w naszym Układzie Słonecznym według definicji z 2006 roku?|Siedem;Osiem;Dziewięć;Dziesięć|1
KOSMOS|Która planeta Układu Słonecznego słynie z najbardziej efektownych pierścieni z lodu i skał?|Jowisz;Saturn;Mars;Wenus|1
KOSMOS|Jak nazywał się pierwszy pies, który w 1957 roku znalazł się na orbicie okołoziemskiej?|Biełka;Striełka;Łajka;Szarik|2
KOSMOS|Jaka gwiazda poza Słońcem znajduje się najbliżej Ziemi?|Syriusz;Proxima Centauri;Betelgeza;Wega|1
KOSMOS|Jak nazywa się potężny kosmiczny teleskop podczerwony wystrzelony w grudniu 2021 roku?|Teleskop Keplera;Teleskop Jamesa Webba;Teleskop Spitzera;Teleskop Chandra|1
KOSMOS|Jak nazywa się punkt na orbicie planety położony najdalej od Słońca?|Peryhelium;Aphelium;Zenit;Nadir|1
KOSMOS|Jak nazywa się jednostka odległości odpowiadająca średniej odległości Ziemi od Słońca?|Rok świetlny;Jednostka astronomiczna;Parsek;Mila morska|1
KOSMOS|Jak nazywa się obiekt w kosmosie o tak silnej grawitacji, że nie może z niego uciec nawet światło?|Biały karzeł;Czarna dziura;Pulsar;Czerwony olbrzym|1
KOSMOS|Ile naturalnych księżyców krąży wokół planety Mars?|Zero;Dwa;Cztery;Osiem|1
KOSMOS|W którym gwiazdozbiorze znajduje się gwiazda Betelgeza oraz słynny pas trzech jasnych gwiazd?|W Wielkiej Niedźwiedzicy;W Orionie;W Kasjopei;W Skorpionie|1
KOSMOS|Który księżyc Jowisza pokryty grubą skorupą lodu może skrywać pod nią rozległy ocean ciekłej wody?|Fobos;Europa;Deimos;Tytan|1
BAJKI|W jakiej bajce Pixara głównymi bohaterami są emocje Radość, Smutek, Gniew, Strach i Odraza?|Co w duszy gra;W głowie się nie mieści;Odlot;Nasze magiczne Encanto|1
BAJKI|Jak nazywa się sympatyczny zardzewiały holownik, najlepszy przyjaciel Zygzaka McQueena?|Sally;Złomek;Guido;Luigi|1
BAJKI|W którym filmie animowanym młody wiking Czkawka zaprzyjaźnia się ze smokiem Nocną Furią?|Merida Waleczna;Jak wytresować smoka;Wielka Szóstka;Zaplątani|1
BAJKI|W jakim kraju rozgrywa się akcja filmu animowanego 'Coco' o chłopcu marzącym o grze na gitarze?|W Hiszpanii;W Meksyku;W Brazylii;W Argentynie|1
BAJKI|Jakim zwierzęciem jest samozwańczy król Julian z serii filmów 'Madagaskar'?|Szympansem;Lemurem katta;Leniwcem;Szopem|1
BAJKI|Jak nazywał się zazdrosny brat króla Mufasy z blizną nad okiem w filmie 'Król Lew'?|Zazu;Skaza;Rafiki;Banzai|1
BAJKI|Jak ma na imię główny bohater – smoczy wojownik – z serii 'Kung Fu Panda'?|Shifu;Po;Tai Lung;Oogway|1
BAJKI|Jak nazywa się dzielna dziewczynka z bajki Disneya, która marzyła o własnej restauracji w Nowym Orleanie?|Mulan;Tiana;Vaiana;Merida|1
BAJKI|Jak ma na imię gburowaty sąsiad SpongeBoba grający na klarnecie?|Patryk;Skalmar;Pan Krab;Plankton|1
BAJKI|Jak nazywa się czerwony samochód wyścigowy z numerem 95 z filmu 'Auta'?|Złomek;Zygzak McQueen;Doc Hudson;Jackson Sztorm|1
BAJKI|Kto uwięził długowłosą Roszpunkę w wysokiej ukrytej wieży w filmie 'Zaplątani'?|Zła Królowa;Matka Gothel;Diabolina;Urszula|1
BAJKI|Jak nazywa się kameleon będący wiernym towarzyszem Roszpunki w 'Zaplątanych'?|Maximus;Pascal;Rico;Mushu|1
BAJKI|Jak ma na imię zielony jednooki bohater z filmu 'Potwory i Spółka'?|Sulley;Mike Wazowski;Randall;Roz|1
BAJKI|Jak nazywa się niebieska rybka z kłopotami z pamięcią krótkotrwałą z filmu 'Gdzie jest Nemo'?|Ariel;Dory;Perła;Flądra|1
BAJKI|Jak ma na imię biały nadmuchiwany robot medyczny z filmu 'Wielka Szóstka'?|Wall-E;Baymax;R2-D2;Bumblebee|1
BAJKI|Jak ma na imię sympatyczny bałwan z 'Krainy Lodu', który uwielbia ciepłe przytulasy?|Sven;Olaf;Kristoff;Hans|1
BAJKI|Jakim afrykańskim zwierzęciem jest Pumba, przyjaciel surykatki Timona w 'Królu Lwie'?|Hieną;Guzcem;Antylopą;Bawolicą|1
BAJKI|Jak nazywa się wierny biały pies Charliego Browna ze słynnego komiksu 'Fistaszki'?|Pluto;Snoopy;Reksio;Scooby|1
BAJKI|Jak nazywa się zły czarnoksiężnik, który z kotem Klakierem poluje na Smerfy?|Baltazar;Gargamel;Saruman;Jafar|1
BAJKI|Który z czwórki pingwinów z Madagaskaru dowodzi całą grupą?|Kowalski;Skipper;Szeregowy;Rico|1
BAJKI|Jak nazywa się studio animacji założone m.in. przez Hayao Miyazakiego, twórcę 'Spirited Away'?|Pixar;Studio Ghibli;DreamWorks;Illumination|1
BAJKI|W jakim kraju rozgrywa się akcja nagrodzonego Oscarem filmu Disneya 'Nasze magiczne Encanto'?|W Meksyku;W Kolumbii;W Hiszpanii;W Brazylii|1
BAJKI|W jakie warzywo zamieniła się z powrotem kareta Kopciuszka o północy?|W kapustę;W dynię;W rzepę;W kabaczka|1
BAJKI|W jakiej francuskiej stolicy toczy się akcja filmu 'Ratatuj' o szczurze gotującym w restauracji?|W Lyonie;W Paryżu;W Marsylii;W Bordeaux|1
BAJKI|Jak nazywa się fikcyjna kraina z 'Opowieści z Narnii', którą stwarza swym śpiewem wielki lew Aslan?|Śródziemie;Narnia;Nibylandia;Oz|1
BAJKI|Kto stworzył słynną szwedzką serię książek o Pippi Pończoszance oraz Dzieciach z Bullerbyn?|Tove Jansson;Astrid Lindgren;Selma Lagerlöf;Hans Christian Andersen|1
BAJKI|Które studio filmowe stworzyło w 1995 roku pierwszy w historii w pełni komputerowy film pełnometrażowy 'Toy Story'?|DreamWorks;Pixar;Illumination;Blue Sky|1
BAJKI|Jak ma na imię chłopiec, który był pierwszym właścicielem Chudego i Buzza w 'Toy Story'?|Sid;Andy;Billy;Kevin|1
ZWIERZĘTA|Który wielki wąż zabija zdobycz przez uduszenie, a nie za pomocą jadu?|Żmija zygzakowata;Anakonda;Kobra królewska;Grzechotnik|1
ZWIERZĘTA|Jak nazywa się smukły dziki kot ze sterczącymi czarnymi pędzelkami włosów na uszach?|Jaguar;Karakal;Puma;Ocelot|1
ZWIERZĘTA|Jak nazywa się biało-czarny ssak z Ameryki Północnej, który w obronie wypuszcza wyjątkowo cuchnącą ciecz?|Borsuk;Skunks;Szop pracz;Wydra|1
ZWIERZĘTA|Ile serc pracuje w ciele ośmiornicy?|Jedno;Dwa;Trzy;Cztery|2
ZWIERZĘTA|Który malutki ptak potrafi zawisać nieruchomo w powietrzu i latać do tyłu?|Wróbel;Koliber;Jaskółka;Jerzyk|1
ZWIERZĘTA|Jak w języku łowieckim nazywa się dorosły samiec jelenia z porożem?|Kozioł;Byk;Knur;Odyniec|1
ZWIERZĘTA|Jak nazywa się największa żyjąca jaszczurka świata zamieszkująca indonezyjskie wyspy?|Kameleon olbrzymi;Waran z Komodo;Legwan zielony;Gekon toke|1
ZWIERZĘTA|Jak nazywa się australijski ssak o dziobie przypominającym kaczy, który składa jaja?|Kolczatka;Dziobak;Wombat;Dingo|1
ZWIERZĘTA|Który gad potrafi w razie ataku odrzucić ogon, aby uciec przed drapieżnikiem?|Żółw błotny;Jaszczurka zwinka;Krokodyl nilowy;Żmija zygzakowata|1
ZWIERZĘTA|Który afrykański ssak ma charakterystyczny róg z keratyny na pysku i bardzo grubą skórę?|Hipopotam;Nosorożec;Bawół afrykański;Tapir|1
ZWIERZĘTA|Jak nazywa się małe drapieżne zwierzę z pustyni Kalahari, które stoi wyprostowane na tylnych łapach na czatach?|Fenek;Surykatka;Mangusta;Piesek preriowy|1
ZWIERZĘTA|Jak nazywa się największy ptak drapieżny gniazdujący w Polsce, z charakterystycznym białym ogonem?|Jastrząb;Bielik;Pustułka;Myszołów|1
ZWIERZĘTA|Jak nazywa się australijski torbacz żywiący się niemal wyłącznie liśćmi eukaliptusa?|Wombat;Koala;Kangur drzewny;Leniwiec|1
ZWIERZĘTA|Która południowoamerykańska ryba potrafi wytwarzać silne wyładowania elektryczne do ogłuszania ofiar?|Pirania;Węgorz elektryczny;Sum europejski;Murena|1
ZWIERZĘTA|Jakiego koloru jest skóra niedźwiedzia polarnego pod jego białym futrem?|Różowego;Czarnego;Białego;Szarego|1
ZWIERZĘTA|Który duży ptak nielotny z Afryki znosi największe jaja wśród współczesnych ptaków?|Pingwin cesarski;Struś;Emu;Kazuar|1
ZWIERZĘTA|Jak nazywa się najwolniejszy ssak lądowy świata spędzający większość życia na drzewach w Ameryce Południowej?|Koala;Leniwiec;Pancernik;Loris|1
ZWIERZĘTA|Który z poniższych owadów potrafi unieść ciężar wielokrotnie przewyższający jego własną masę?|Mucha domowa;Mrówka;Ważka;Komar|1
ZWIERZĘTA|Który arktyczny ssak morski z długim spiralnym kłem nazywany jest jednorożcem morskim?|Mors;Narwal;Białucha;Kaszalot|1
ZWIERZĘTA|Który ssak ma najdłuższą szyję na świecie i zjada liście z koron afrykańskich akacji?|Wielbłąd;Żyrafa;Antylopa;Lama|1
ZWIERZĘTA|Jak nazywa się proces orientacji przestrzennej za pomocą fal dźwiękowych stosowany przez nietoperze i delfiny?|Bioluminescencja;Echolokacja;Hibernacja;Mimikra|1
ZWIERZĘTA|Który ssak lądowy przechodzi najdłuższą ciążę trwającą około 22 miesięcy?|Żyrafa;Słoń afrykański;Nosorożec biały;Wielbłąd dwugarbny|1
ZWIERZĘTA|Na którym kontynencie nie występują w przyrodzie żadne gatunki węży?|W Australii;Na Antarktydzie;W Ameryce Północnej;W Europie|1
ZWIERZĘTA|Czym żywi się rekin wielorybi – największa ryba oceanów?|Fokami;Planktonem i drobnymi rybkami;Żółwiami morskimi;Wodorostami|1
ZWIERZĘTA|Jak nazywa się zdolność zwierząt, takich jak kameleon czy ośmiornica, do upodabniania się barwą do otoczenia?|Anabioza;Kamuflaż;Symbioza;Pasożytnictwo|1
ZWIERZĘTA|Jak nazywa się dział zoologii zajmujący się naukowym badaniem ptaków?|Entomologia;Ornitologia;Ichtiologia;Herpetologia|1
ZWIERZĘTA|Która z poniższych grup bezkręgowców obejmuje ślimaki, małże i głowonogi takie jak ośmiornice?|Stawonogi;Mięczaki;Pierścienice;Szkarłupnie|1
ZWIERZĘTA|Który z poniższych gatunków jest jedynym dzikim kotem żyjącym w dużych stadach rodzinnych?|Tygrys;Lew;Jaguar;Gepard|1
MATEMATYKA|Ile wynosi iloczyn liczb 15 i 6?|75;90;95;105|1
MATEMATYKA|Ile milimetrów mieści się w 7 centymetrach?|7 mm;70 mm;700 mm;7000 mm|1
MATEMATYKA|Jaką literą w systemie rzymskim zapisuje się liczbę 50?|X;L;C;D|1
MATEMATYKA|Jaki jest obwód trójkąta równobocznego o boku długości 7 cm?|14 cm;21 cm;28 cm;49 cm|1
MATEMATYKA|Ile krawędzi ma każdy sześcian?|6;8;10;12|3
MATEMATYKA|Jaka jest następna liczba pierwsza po liczbie 13?|15;17;19;21|1
MATEMATYKA|Ile centymetrów kwadratowych wynosi pole prostokąta o bokach 5 cm i 12 cm?|34 cm²;60 cm²;50 cm²;72 cm²|1
MATEMATYKA|Ile kilogramów mieści się w połowie jednej tony?|50 kg;250 kg;500 kg;1000 kg|2
MATEMATYKA|Ile wynosi suma miar kątów wewnętrznych w każdym trójkącie?|90 stopni;180 stopni;270 stopni;360 stopni|1
MATEMATYKA|Ile wynosi pole kwadratu o boku długości 8 cm?|16 cm²;32 cm²;64 cm²;80 cm²|2
MATEMATYKA|Jak nazywa się czworokąt o wszystkich czterech bokach równej długości, którego kąty nie muszą być proste?|Prostokąt;Trapez;Romb;Deltoid|2
MATEMATYKA|Ile wynosi iloczyn liczb 8 i 12?|86;96;106;88|1
MATEMATYKA|Ile wynosi 10 procent z liczby 540?|5,4;54;108;27|1
MATEMATYKA|Ile minut upływa między godziną 14:15 a godziną 15:00?|30 minut;45 minut;50 minut;55 minut|1
MATEMATYKA|Jak w matematyce nazywa się wynik dzielenia dwóch liczb?|Suma;Różnica;Iloraz;Iloczyn|2
MATEMATYKA|Ile stopni ma łącznie kąt prosty dodany do kąta półpełnego?|180 stopni;270 stopni;300 stopni;360 stopni|1
MATEMATYKA|Film rozpoczął się o 17:35 i trwał 1 godzinę i 40 minut. O której godzinie się skończył?|O 19:05;O 19:15;O 19:25;O 18:55|1
MATEMATYKA|Ile wynosi wynik odejmowania 1000 minus 465?|525;535;545;635|1
MATEMATYKA|Jeśli z kosza z 30 jabłkami zjedzono jedną trzecią, ile jabłek w nim pozostało?|10;15;20;25|2
MATEMATYKA|Ile wynosi wynik mnożenia 25 przez 4?|80;90;100;120|2
MATEMATYKA|Ile wynosi największy wspólny dzielnik liczb 36 i 48?|6;12;18;24|1
MATEMATYKA|Jak nazywa się najdłuższy bok w trójkącie prostokątnym, leżący naprzeciw kąta prostego?|Przyprostokątna;Przeciwprostokątna;Wysokość;Środkowa|1
MATEMATYKA|Ile wynosi wartość potęgi 2 do potęgi piątej?|16;32;64;25|1
MATEMATYKA|Ile wynosi wartość silni z liczby 4, czyli 1 razy 2 razy 3 razy 4?|12;24;16;48|1
MATEMATYKA|Ile przekątnych można poprowadzić wewnątrz wypukłego pięciokąta?|Trzy;Pięć;Siedem;Dziesięć|1
MATEMATYKA|Jak w matematyce nazywa się liczba, która ma dokładnie dwa dzielniki naturalne: jedynkę i samą siebie?|Liczba złożona;Liczba pierwsza;Liczba wymierna;Liczba parzysta|1
MATEMATYKA|Ile wynosi suma trzech kolejnych liczb całkowitych, z których środkowa to 25?|70;75;80;65|1
MATEMATYKA|Jaki wzór pozwala obliczyć pole koła o promieniu r?|2 razy Pi razy r;Pi razy r kwadrat;Pi razy średnica;r kwadrat dzielone przez 2|1
SPORT|W jakiej dyscyplinie sportowej słynnym polskim mistrzem jest żużlowiec Bartosz Zmarzlik?|W rajdach samochodowych;W sporcie żużlowym;W boksie;W skokach narciarskich|1
SPORT|Jak nazywa się sport wodny polegający na pływaniu na desce z przymocowanym żaglem?|Kajakarstwo;Windsurfing;Wioślarstwo;Wakeboarding|1
SPORT|Ile kręgli ustawia się na końcu toru na początku rzutu w klasycznym bowlingu?|6;8;10;12|2
SPORT|Jak nazywa się wznowienie gry w piłce nożnej wykonywane z samego narożnika boiska?|Rzut wolny;Rzut rożny;Wrzut z autu;Rzut karny|1
SPORT|Jaki przybliżony dystans pokonują biegacze w klasycznym maratonie?|10 km;21 km;42 km;60 km|2
SPORT|W jakiej dyscyplinie olimpijskiej zawodnicy w maskach walczą na szpady, florety i szable?|W boksie;W szermierce;W judo;W łucznictwie|1
SPORT|Który słynny polski skoczek narciarski nosił przydomek 'Orzeł z Wisły'?|Kamil Stoch;Adam Małysz;Piotr Żyła;Dawid Kubacki|1
SPORT|W której dyscyplinie zimowej gracze szczotkują lód przed sunącym granitowym kamieniem?|W hokeju;W curlingu;W bobslejach;W saneczkarstwie|1
SPORT|W którym sporcie wodnym zawodnicy płyną tyłem do kierunku ruchu, poruszając długimi wiosłami?|W kajakarstwie;W wioślarstwie;W windsurfingu;W żeglarstwie|1
SPORT|W jakiej konkurencji lekkoatletycznej złote medale olimpijskie i rekordy świata zdobywała Anita Włodarczyk?|W skoku wzwyż;W rzucie młotem;W pchnięciu kulą;W rzucie dyskiem|1
SPORT|Ile maksymalnie odbić może wykonać drużyna siatkarska przed przebiciem piłki na stronę rywala?|Jedno;Dwa;Trzy;Cztery|2
SPORT|Na jakiej nawierzchni rozgrywany jest wielkoszlemowy turniej tenisowy Wimbledon?|Na mączce ceglanej;Na trawie;Na nawierzchni twardej;Na dywanie|1
SPORT|Jak nazywa się najważniejsza liga koszykarska świata rozgrywana w Stanach Zjednoczonych i Kanadzie?|NHL;NBA;NFL;MLB|1
SPORT|Który polski skoczek narciarski z Zębu zdobył trzy złote medale olimpijskie?|Adam Małysz;Kamil Stoch;Piotr Żyła;Maciej Kot|1
SPORT|Jakiego koloru jest najwyższy podstawowy pas mistrzowski w karate oraz judo?|Brązowego;Niebieskiego;Czerwonego;Czarnego|3
SPORT|Ile bramek zdobywa piłkarz, który zalicza w jednym meczu klasycznego hat-tricka?|Dwie;Trzy;Cztery;Pięć|1
SPORT|Z jakiej odległości od linii bramkowej wykonuje się rzut karny w piłce nożnej?|Z 7 metrów;Z 9 metrów;Z 11 metrów;Z 16 metrów|2
SPORT|Ile punktów zdobywa koszykarz za celny rzut oddany spoza dalekiego łuku?|1 punkt;2 punkty;3 punkty;4 punkty|2
SPORT|Ile minut trwa jedna połowa regulaminowego meczu piłki ręcznej seniorów?|20 minut;25 minut;30 minut;45 minut|2
SPORT|Z ilu części zwanych tercjami składa się standardowy mecz hokeja na lodzie?|Z dwóch;Z trzech;Z czterech;Z pięciu|1
SPORT|Jak nazywa się jeden z trzech wielkich tourów kolarskich, rozgrywany co roku we Włoszech?|Tour de France;Giro d'Italia;Vuelta a España;Tour de Pologne|1
SPORT|W jakim hiszpańskim mieście swoją siedzibę mają oba wielkie kluby – Real oraz Atlético?|W Barcelonie;W Madrycie;W Sewilli;W Walencji|1
SPORT|W którym mieście w 2028 roku odbędą się kolejne Letnie Igrzyska Olimpijskie?|W Tokio;W Los Angeles;W Rzymie;W Brisbane|1
SPORT|Ile kilogramów waży męska kula używana przez seniorów w lekkoatletycznym pchnięciu kulą?|5,0 kg;7,26 kg;8,5 kg;10,0 kg|1
SPORT|Który tenisista jako pierwszy wśród mężczyzn wygrał 24 tytuły wielkoszlemowe w singlu?|Roger Federer;Novak Djoković;Rafael Nadal;Andy Murray|1
SPORT|Jak nazywa się najbardziej prestiżowy wieloetapowy wyścig kolarski rozgrywany co roku w Hiszpanii?|Giro d'Italia;Vuelta a España;Tour de France;Paris-Roubaix|1
SPORT|Ile minut trwa jedna kwarta meczu koszykówki w amerykańskiej lidze NBA?|10 minut;12 minut;15 minut;20 minut|1
SPORT|Ile metrów długości ma standardowy basen olimpijski?|25 metrów;50 metrów;75 metrów;100 metrów|1
GEOGRAFIA|Jak nazywa się największa gorąca pustynia na Ziemi?|Gobi;Sahara;Atakama;Kalahari|1
GEOGRAFIA|Która potężna rzeka Ameryki Południowej niesie najwięcej wody na świecie?|Parana;Orinoko;Amazonka;Missisipi|2
GEOGRAFIA|Które państwo Ameryki Północnej ma czerwony liść klonu na swojej fladze?|Stany Zjednoczone;Meksyk;Kanada;Kuba|2
GEOGRAFIA|W jakim pasmie górskim w Polsce leży najwyższy szczyt Sudetów – Śnieżka?|W Tatrach;W Karkonoszach;W Bieszczadach;W Pieninach|1
GEOGRAFIA|Który słynny kanał żeglugowy w Egipcie łączy Morze Śródziemne z Morzem Czerwonym?|Kanał Panamski;Kanał Sueski;Kanał Koryncki;Kanał Kiloński|1
GEOGRAFIA|Jak nazywa się najwyższy szczyt kontynentu afrykańskiego?|Mount Kenya;Kilimandżaro;Atlas;Ruwenżori|1
GEOGRAFIA|Jak nazywa się stolica Japonii położona na wyspie Honsiu?|Kioto;Tokio;Osaka;Sapporo|1
GEOGRAFIA|Jak nazywa się stolica Szwecji?|Oslo;Sztokholm;Helsinki;Kopenhaga|1
GEOGRAFIA|Na którym półwyspie w Europie leżą Hiszpania i Portugalia?|Na Apenińskim;Na Iberyjskim;Na Skandynawskim;Na Bałkańskim|1
GEOGRAFIA|Jak nazywa się największa wyspa na świecie?|Madagaskar;Islandia;Grenlandia;Nowa Gwinea|2
GEOGRAFIA|Która europejska rzeka przepływa przez cztery stolice: Wiedeń, Bratysławę, Budapeszt i Belgrad?|Ren;Dunaj;Łaba;Sekwana|1
GEOGRAFIA|W jakim państwie leży słynna rafa koralowa – Wielka Rafa Koralowa?|W Indonezji;W Australii;W Brazylii;W Egipcie|1
GEOGRAFIA|Które wielkie jezioro na Mazurach jest największym jeziorem w Polsce?|Mamry;Śniardwy;Niegocin;Hańcza|1
GEOGRAFIA|Na terytorium którego europejskiego państwa znajdują się wulkany Etna i Wezuwiusz?|Hiszpanii;Włoch;Grecji;Portugalii|1
GEOGRAFIA|Jak nazywa się stolica Korei Południowej?|Pekin;Seul;Bangkok;Hanoi|1
GEOGRAFIA|Które państwo Europy swoim konturem na mapie przypomina długi but z obcasem?|Hiszpania;Włochy;Grecja;Chorwacja|1
GEOGRAFIA|Jak nazywa się stolica Stanów Zjednoczonych?|Nowy Jork;Waszyngton;Los Angeles;Chicago|1
GEOGRAFIA|W jakiej miejscowości niedaleko Krakowa znajduje się słynna zabytkowa kopalnia soli?|W Wieliczce;W Bochni;W Zakopanem;W Tarnowie|0
GEOGRAFIA|Jak nazywa się najgłębsze jezioro na świecie, położone na Syberii?|Ładoga;Bajkał;Wiktorii;Tanganika|1
GEOGRAFIA|W których polskich górach turyści płyną drewnianymi tratwami przełomem Dunajca?|W Bieszczadach;W Pieninach;W Sudetach;W Gorcach|1
GEOGRAFIA|Jak nazywa się najbardziej sucha pustynia na Ziemi, położona w Chile?|Sahara;Atakama;Gobi;Namib|1
GEOGRAFIA|Jak nazywa się największe jezioro na kontynencie afrykańskim, przez które przebiega równik?|Tanganika;Jezioro Wiktorii;Jezioro Malawi;Jezioro Czad|1
GEOGRAFIA|Które pasmo górskie wyznacza umowną granicę między Europą a Azją na terenie Rosji?|Karpaty;Ural;Ałtaj;Pireneje|1
GEOGRAFIA|Jak nazywa się obecna stolica Brazylii, zaprojektowana od podstaw w głębi lądu?|Rio de Janeiro;Brasília;São Paulo;Salvador|1
GEOGRAFIA|Jak nazywa się cieśnina oddzielająca Półwysep Arabski od Iranu, kluczowa dla transportu ropy naftowej?|Cieśnina Bosfor;Cieśnina Ormuz;Cieśnina Malakka;Cieśnina Magellana|1
GEOGRAFIA|Które morze oddziela Półwysep Arabski od północno-wschodniej Afryki?|Morze Czarne;Morze Czerwone;Morze Kaspijskie;Morze Martwe|1
GEOGRAFIA|Na terytorium którego państwa leży słynny fiord Geiranger oraz przylądek Nordkapp?|Szwecji;Norwegii;Finlandii;Islandii|1
GEOGRAFIA|Które afrykańskie państwo słynie z Gór Atlas i starożytnych miast Marrakesz oraz Fez?|Tunezja;Maroko;Algieria;Egipt|1
ANGIELSKI|Jak po angielsku nazywa się warzywo 'Czosnek'?|Onion;Garlic;Carrot;Pepper|1
ANGIELSKI|Jak po angielsku nazywa się pomieszczenie 'Kuchnia'?|Bedroom;Bathroom;Kitchen;Attic|2
ANGIELSKI|Jak po angielsku nazywa się książka ze zbiorem słów – 'Słownik'?|Calendar;Dictionary;Notebook;Magazine|1
ANGIELSKI|Co oznacza angielskie słowo 'Butterfly'?|Ważka;Motyl;Chrząszcz;Pszczoła|1
ANGIELSKI|Co oznacza angielski przymiotnik 'Heavy'?|Lekki;Ciężki;Pusty;Wąski|1
ANGIELSKI|Jak po angielsku nazywa się leśne zwierzę 'Wiewiórka'?|Hedgehog;Squirrel;Badger;Fox|1
ANGIELSKI|Co oznacza angielskie słowo 'Mirror'?|Okno;Lustro;Obraz;Szafa|1
ANGIELSKI|Który dzień tygodnia nosi po angielsku nazwę 'Thursday'?|Wtorek;Środa;Czwartek;Piątek|2
ANGIELSKI|Co oznacza angielskie słowo 'Airplane'?|Statek;Pociąg;Samolot;Helikopter|2
ANGIELSKI|Jak po angielsku nazywa się liczba 'Dwadzieścia'?|Twelve;Twenty;Two;Thirty|1
ANGIELSKI|Który miesiąc nosi po angielsku nazwę 'December'?|Listopad;Grudzień;Styczeń;Październik|1
ANGIELSKI|Co oznacza angielski czasownik 'To borrow'?|Kupować;Pożyczać od kogoś;Sprzedawać;Zgubić|1
ANGIELSKI|Jak po angielsku nazywa się pora roku 'Jesień' w brytyjskiej odmianie języka?|Spring;Autumn;Winter;Summer|1
ANGIELSKI|Jak po angielsku nazywa się część ciała 'Łokieć'?|Knee;Elbow;Wrist;Ankle|1
ANGIELSKI|Co oznacza angielskie słowo 'Umbrella'?|Płaszcz;Parasol;Kalosze;Szalik|1
ANGIELSKI|Jak po angielsku nazywa się zawód 'Strażak'?|Policeman;Firefighter;Postman;Builder|1
ANGIELSKI|Jak po angielsku nazywa się warzywo 'Ogórek'?|Tomato;Cucumber;Cabbage;Onion|1
ANGIELSKI|Którą część ludzkiego ciała oznacza angielskie słowo 'Shoulder'?|Kolano;Ramię;Łokieć;Kostka|1
ANGIELSKI|Jak po angielsku nazywa się słodki owoc 'Truskawka'?|Blueberry;Strawberry;Raspberry;Cherry|1
ANGIELSKI|Co oznacza angielski czasownik 'To whisper'?|Krzyczeć;Szeptać;Śpiewać;Ziewać|1
ANGIELSKI|Co oznacza angielski przymiotnik 'Reliable' w odniesieniu do osoby lub urządzenia?|Niebezpieczny;Niezawodny i godny zaufania;Kosztowny;Hałaśliwy|1
ANGIELSKI|Co oznacza angielski rzeczownik 'Queue' często spotykany na lotniskach i w sklepach?|Bilet;Kolejka ludzi;Królowa;Walizka|1
ANGIELSKI|Jak po angielsku nazywa się zawód 'Księgowy'?|Lawyer;Accountant;Architect;Surgeon|1
ANGIELSKI|Jak po angielsku brzmi przymiotnik oznaczający 'Współczesny'?|Ancient;Contemporary;Obsolete;Medieval|1
ANGIELSKI|Jak po angielsku nazywa się zjawisko 'Trzęsienie ziemi'?|Hurricane;Earthquake;Avalanche;Drought|1
ANGIELSKI|Co oznacza angielski idiom 'Piece of cake'?|Trudne zadanie;Coś bardzo łatwego;Przyjęcie urodzinowe;Zakazany owoc|1
ANGIELSKI|Co oznacza angielski idiom 'Break a leg' mówiony aktorowi przed wyjściem na scenę?|Uważaj na schody;Powodzenia;Zrób przerwę;Nie poddawaj się|1
ANGIELSKI|Co oznacza angielski rzeczownik 'Evidence' znany z seriali kryminalnych?|Wyrok;Dowód;Świadek;Sędzia|1
HISTORIA|Który polski król widnieje na współczesnym banknocie o nominale 100 złotych?|Mieszko I;Władysław Jagiełło;Kazimierz Wielki;Bolesław Chrobry|1
HISTORIA|Kto w XV wieku wynalazł w Europie ruchomą czcionkę drukarską?|Leonardo da Vinci;Johannes Gutenberg;Galileusz;Krzysztof Kolumb|1
HISTORIA|Jak nazywała się słynna polska uczona, która zdobyła Nagrodę Nobla z fizyki i z chemii?|Eliza Orzeszkowa;Maria Skłodowska-Curie;Wisława Szymborska;Irena Sendlerowa|1
HISTORIA|Jak nazywał się niedźwiedź brunatny służący w armii generała Andersa podczas II wojny światowej?|Baryła;Wojtek;Misiek;Grom|1
HISTORIA|Kto został pierwszym koronowanym królem Polski w 1025 roku?|Mieszko I;Bolesław Chrobry;Kazimierz Wielki;Władysław Łokietek|1
HISTORIA|Jak nazywali się średniowieczni wojownicy ze Skandynawii pływający łodziami zwanych drakkarami?|Rzymianie;Wikingowie;Samuraje;Spartanie|1
HISTORIA|Jak nazywał się wielki brytyjski transatlantyk, który zatonął w 1912 roku po zderzeniu z górą lodową?|Lusitania;Titanic;Britannic;Queen Mary|1
HISTORIA|Który amerykański wynalazca udoskonalił i upowszechnił praktyczną żarówkę elektryczną?|Albert Einstein;Thomas Edison;Nikola Tesla;Isaac Newton|1
HISTORIA|W którym mieście w roku 1000 odbył się zjazd cesarza Ottona III z Bolesławem Chrobrym?|W Krakowie;W Gnieźnie;W Poznaniu;W Malborku|1
HISTORIA|Jak nazywali się dawni japońscy wojownicy posługujący się mieczem zwanym kataną?|Rycerze;Samuraje;Gladiatorzy;Muszkieterowie|1
HISTORIA|W którym roku miała miejsce bitwa pod Grunwaldem?|1385;1410;1466;1525|1
HISTORIA|Kto opatentował pierwszy praktycznie działający telefon w 1876 roku?|Thomas Edison;Alexander Graham Bell;Bracia Wright;James Watt|1
HISTORIA|Kto był wodzem polskiej husarii, który pokonał Turków w bitwie pod Wiedniem w 1683 roku?|Stefan Batory;Jan III Sobieski;Władysław IV Waza;Zygmunt Stary|1
HISTORIA|W którym roku odbył się chrzest Polski za panowania Mieszka I?|966;1000;1025;1410|0
HISTORIA|Jak nazywali się amerykańscy bracia, którzy w 1903 roku wykonali pierwszy kontrolowany lot samolotem silnikowym?|Bracia Grimm;Bracia Wright;Bracia Lumière;Bracia Montgolfier|1
HISTORIA|Z którego miasta król Zygmunt III Waza przeniósł swoją stałą rezydencję do Warszawy?|Z Poznania;Z Gniezna;Z Krakowa;Z Gdańska|2
HISTORIA|Jak nazywał się polski król, który według legendy zastał Polskę drewnianą, a zostawił murowaną?|Mieszko I;Kazimierz Wielki;Bolesław Chrobry;Władysław Łokietek|1
HISTORIA|W którym roku Polska przystąpiła do Unii Europejskiej?|1999;2004;2007;2010|1
HISTORIA|Który renesansowy artysta i wynalazca namalował słynny portret 'Mona Lisa'?|Michał Anioł;Leonardo da Vinci;Rafael Santi;Sandro Botticelli|1
HISTORIA|W którym polskim mieście znajduje się klasztor na Jasnej Górze broniony podczas potopu szwedzkiego?|W Krakowie;W Częstochowie;W Toruniu;W Sandomierzu|1
HISTORIA|Która dynastia zasiadła na polskim tronie po wygaśnięciu Piastów i krótkich rządach Andegawenów?|Wazowie;Jagiellonowie;Wettynowie;Sobiescy|1
HISTORIA|W którym roku powstała Organizacja Narodów Zjednoczonych bezpośrednio po zakończeniu II wojny światowej?|1919;1945;1949;1955|1
HISTORIA|Który polski król zwyciężył Moskwę pod Pskowem i słynął ze słów 'Nie jestem królem malowanym'?|Zygmunt August;Stefan Batory;Jan Kazimierz;Władysław IV|1
HISTORIA|W którym roku wybuchła Wielka Rewolucja Francuska ze zdobyciem Bastylii?|1776;1789;1815;1848|1
HISTORIA|Jak nazywał się wielki traktat pokojowy podpisany w 1919 roku pod Paryżem po I wojnie światowej?|Pokój westfalski;Traktat wersalski;Traktat w Tordesillas;Kongres wiedeński|1
HISTORIA|W którym mieście w sierpniu 1980 roku podpisano najważniejsze porozumienia prowadzące do powstania 'Solidarności'?|W Warszawie;W Gdańsku;W Krakowie;W Poznaniu|1
HISTORIA|Jak nazywał się starożytny grecki historyk uznawany powszechnie za 'ojca historii'?|Arystoteles;Herodot;Platon;Sokrates|1
HISTORIA|Który kartagiński wódz przeprowadził swoją armię ze słoniami bojowymi przez Alpy przeciw Rzymowi?|Scypion Afrykański;Hannibal Barkas;Spartakus;Dariusz Wielki|1
`;

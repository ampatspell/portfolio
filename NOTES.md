# Sidebar

``` plain
* Jaunumi (blogs - route)
* CV (custom page)
* [Autordarbi] (kolekciju kategorija -- [])
  * "Pilsētvide" (kolekcija -- "")
  * "Ielu fotogrāfija"
  * "Piezīmes"
  * "Knuts"
* [Reportāžas]
  * "Komēta"
  * "ISSP 2016"
  * "ISSP 2017"
  * "Laba Daba 2014"
* Komercfotogāfija
```

* route -- custom links
* kategorija -- atverama, aizverama

``` plain
/ -- balta lapa
/autordarbi --- kolekciju indekss, viena konkrēta bilde, nosaukums
/autordarbi/pilsetvide --> /autordarbi/pilsetvide/1 (<- 1 ->)
/autordarbi/pilsetvide/index -- "pilsētvide" bilžu indekss. augšā nosaukums, kolekcijas indekss
```

Kolekcijām var būt vairāki reprezentācijas stili.

Sākam ar index + pa vienai bildei ar '<- 1 ->'

* Kolekcija ir bildes
* Viens logins ar db _admin
* Bildei var būt nosaukums, īss komentārs.

# TODO

* Open requested page after login
* Gallery representation style setting, list of available ones
* Markdown for posts and blog (and preview while editing)
* Blog editor


## DONE

* [done] Galerijas apraksts
* [done] Bilžu nosaukumi ir textarea
* [done] login name autocapitalization=off
* [done] Reorder sections
* [done] Warnings on delete

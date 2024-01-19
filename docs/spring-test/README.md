# A little more on Spring Testing

It’s not rocket science, but from our experience, a similar set of mistakes and problems comes up across companies and
projects. Especially in regard to integration testing.

We’ll be addressing popular compromises, tricks and mistakes, like big cacheable Spring context vs. many small,
quick-starting contexts, cleaning things up between tests and reusing some bits, annotations added “just in case” and
annotations NOT added, while they should be ;)

Recently, we reduced our integration tests runtime from 32 to 16 minutes and this will be our background for the
presentation.

___

# Trochę więcej o testach w Springu

Niby nie jest to inżynieria rakietowa, jednak przeskakując z firmy do firmy i z projektu na projekt, widuje się podobne
błędy i problemy, zwłaszcza z testami integracyjnymi.

Podczas wykładu zwrócimy uwagę na najpopularniejsze kompromisy, pomyłki i sztuczki, m.in. duże i cache’owalne konteksty
Springa vs. małe i szybko startujące, czyszczenie rzeczy pomiędzy testami i reużywanie niektórych kawałków, adnotacje
dodane “na wszelki wypadek” oraz adnotacje, których nie dodaliśmy, a powinniśmy ;)

Tłem do prezentacji będzie ostatnia optymalizacja wykonywania testów integracyjnych, dzięki której zeszliśmy z 32 do 16
minut na Jenkinsie.

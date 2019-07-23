# How many AWS services did I use to host a static webpage?

Is hosting a static webpage using AWS services an example of "overengineering"? Well, I'd say so…

However, it was my first hands-on experience with a public cloud infrastructure and it helped me a lot. In this presentation I want to show what AWS services I used and why.

Static files? No problem, S3 is your way to go.
But what if you want your own fancy domain? And what with SSL? How about a distribution using CDN? And yes, each such thing is handled by a separate AWS service. Adding a visitors counter with JS back-end and we end up with like 9 AWS services.
Yes, including AWS Lambda.

# Dlaczego czasem warto założyć gacie przez głowę? Statyczna strona internetowa na AWS-ie

Sławek Sobótka tłumaczy "overengineering" jako "zakładanie gaci przez głowę". Hostowanie statycznej strony internetowej przy pomocy chmury Amazona i dostępnych tam usług brzmi jak podręcznikowy przykład takiego działania.

Decyzję da się jednak wybronić, ponieważ chodziło o naukę i zmierzenie się z chmurą publiczną po raz pierwszy w życiu. A dla zupełnej czystości sumienia - robię z tego prezentację :)
Jakie usługi chmurowe można poznać, tworząc prostą stronkę internetową z licznikiem odwiedzin? I dlaczego aż tyle?

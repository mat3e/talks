# Server-side rendered micro-frontends on AWS Lambda
There are more than 1 million JavaScript packages hosted on npm (JS packages repository). Therefore, "new day, new framework" is a huge underestimation.
On the other hand, we have microservices all over the places. This is rather a backend-related stuff, but it was said, a team owning a microservice should own all its parts - frontend, backend, database, hosting and so on…

How to mix a small part of the backend (microservice) with a company-wide frontend app? How to deal with the personal preferences of the programmers who have so many JS packages to choose from?

The answer is: micro-frontends!

In this talk I want to show how you can approach these things and mix them with a technique called server-side rendering (SSR).

And the efficient way of doing SSR is AWS Lambda!

## TL;DR

There are 1000000+ npm packages. And we have microservices, where teams should own all the frontend, backend, DevOps…

How to mix a backend microservice with a company-wide frontend? How to deal with the programmers' preferences who have so many packages to choose from?

Let's check micro-frontends!
___

# Server-side rendered micro-frontends on AWS Lambda

Tytuł złożony z samych buzzwordów? A czemu nie? Bynajmniej, nie będę jednak przekonywał do tego, żeby użyć wszystkich egzotycznie brzmiących technik. Mam zamiar omówić poszczególne składowe tytułu i zademonstrować, jak każdą z nich można dostosować do swoich potrzeb.

Mamy ponad MILION paczek na npm. Powiedzenie "nowy dzień, nowy framework" jest więc mocnym niedoszacowaniem, bo wedle http://www.modulecounts.com/, średnio przybywało ponad 600 bibliotek/frameworków dziennie.

Każdy lubi inny framework, a back-end często składa się z osobnych mikroserwisów. Łącząc te 2 rzeczy, dochodzimy do micro-frontendów. Te często są renderowane po stronie serwera (server-side rendering, SSR), a da się to zrobić korzystając z AWS-a. 

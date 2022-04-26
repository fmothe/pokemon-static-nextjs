# Pokemon-static
## This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).




This is a static webpage created for the course in udemy ['Next.js El framework de React para Produccion'](https://www.udemy.com/share/10610G3@o2saGKt7i5VSQx5dJRgQZGPqspRa5m-V0k_RpUZwjH7SWcbcifI9wvI5Z6hAPMzk/) dictated by Fernando Herrera

## Getting started
If you decide to clone this repository first of all you must have installed:
- node(v17.8.0 or higher)
- yarn(1.22.15 or higher)

After that you can 
```
yarn install
```
to install all the packages required.
Then you are able to run a development server:
```
yarn dev
```
Open [http://localhost:300](http://localhost:3000) with your browser to see the result

Project structure is very simple, under components you'll have any custom components, layouts. inside each folder you'll have a barrel .ts file that will be usefull when we want to import those components into another file.

This project works with local storage in your browser, so becareful and check your local storage you can check its logic in ``` /utils/localfavorites.ts```. please make sure that there isn't already any storage with the same key.

This project is deployed on [Vercel](https://vercel.com/) u can check it clicking [here](https://pokemon-static-gamma.vercel.app/)
# see-through

A see-through micro-frontend app.

## Requirements

- Git
- NodeJS environment
- pnpm

## Set-up

### Server

Since this is just an example of using module federation to build micro-frontend apps, the `server` app is very lean--it serves only one JSON file :)

First, open a new terminal window (at the repo root directory), change to `server` directory and install its dependencies:

```sh
cd ./server && pnpm i
```

Then, build the `server` app:

```sh
pnpm run build
```

And then start it:

```sh
pnpm start
```

You should now have a Fastify server running at `http://localhost:5000` address.

### Cart (remote)

This is a shopping cart application that at the moment exposes `CartProvider` component and `useCart` hook.

Open a new terminal window (in the repo root directory), change to the `cart` directory and install its dependencies:

```sh
cd ./cart && pnpm i
```

Then, run the `cart` app (in development mode):

```sh
pnpm start
```

The `cart` app should be running now at `http://localhost:3002` address.

### Catalog (remote + host)

Catalog is an application displaying products (board games in this case) allowing you to add them to a shopping `cart`.

It is a "remote" as well as a "host" (to `cart` app). It exposes `CatalogCarousel`, `CatalogDetails` & `CatalogListing` component, though only `CatalogListing` is currently used and `catalogCarousel` is just a placeholder rendered.

Open a new terminal window (in the repo root directory), change to the `catalog` directory and install its dependencies:

```sh
cd ./catalog && pnpm i
```

Then run the `catalog` app (in development mode):

```sh
pnpm start
```

The `catalog` app should be running now at `http://localhost:3001` address.

### App (host)

This is a main "host" application rendering remote `catalog` and `cart` apps.

As usual, open a new terminal window (in the repo root directory), change to the `app` directory and install its dependencies:

```sh
cd ./app && pnpm i
```

Then run the `app` (in development mode):

```sh
pnpm start
```

The application should be running at `http://localhost:3000` address.

# HelloWorld

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.1.

## Requirements
This project was tested with the following node and npm versions

npm --version
8.3.1

node --version
v16.14.0

## Development server

Run `npm install` to download the dependencies.
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Generate container image

Run `podman build . -t frontend --layers=true`
Check the result with  `podman images`

## Run the container

Run `podman run -p 8080:8080 --name frontend --rm=true -v localhost/frontend`
Check the page on `localhost:8080`

## Run the container using mounting an external config

Run `podman run -p 8080:8080 --name frontend --rm=true -v $(pwd)/configs:/opt/app-root/src/assets/config:z --userns=keep-id localhost/frontend`
Check the page on `localhost:8080`

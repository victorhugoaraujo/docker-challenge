## :scroll: Challenge description

This challenge is to:
 - Create a Golang docker image less than 2MB fo size. Return "Fullcycle Rocks"
 - Create a NodeJS image MySQL as database and Nginx as a reverse proxy
    - When running the application it should add a name into people table and return "Fullcycle Rocks" and the inserted name(select).

## :iphone: Running Golang

- [Docker Hub - Golang](https://hub.docker.com/repository/docker/victorhugoaraujo/golang)
```bash
$ docker run -it victorhugoaraujo/golang:latest
```

## :iphone: Running Node

```bash
$ docker-compose up -d --build
```

Made with ♥ by Victor Hugo :wave: [Get in touch!](https://www.linkedin.com/in/victor-hugo-araujo-a73964115/)
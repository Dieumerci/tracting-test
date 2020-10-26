# README

## Building and running our Dockerized application
1.. Run the following command to build the application (terminal): 
``` 
$ docker-compose build
```
2.. Once that has successfully completed, run docker-compose up to run our application's containers:
```
$ docker-compose up
```
3.. Next create the database and migrate:
```
$ docker-compose run web rails db:create
$ docker-compose run web rails db:migrate
```
4.. Next run docker app:
```
$ docker-compose run web
```


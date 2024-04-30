create database medcloud;

use medcloud

create table patients (
    id bigint auto_increment not null, 
    name varchar(255) not null,
    email varchar(255) not null,
    birthdate date not null,
    postalCode varchar(255) not null,
    street varchar(255) not null,
    number varchar(45) not null,
    neighborhood varchar(255) not null,
    city varchar(255) not null,
    state varchar(255) not null,
    primary key(id)
);

alter user 'root'@'localhost' identified with mysql_native_password by 'FqXTGUfi5Y&@c@';


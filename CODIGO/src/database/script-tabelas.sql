-- Active: 1746817552109@@127.0.0.1@3306@ong_se
create database ong_se;

use ong_se;

create table usuario (
	id int primary key auto_increment,
    nome varchar(100),
    email varchar(100) unique,
    senha varchar(15)
);

create table ong (
	id char(10) primary key,
    nome varchar(50),
    data_criacao date,
    descricao varchar(200),
    foto_url varchar(1000)
);

create table missao (
	id int primary key auto_increment,
    nome varchar(45),
    tipo varchar(45),
    data_missao date,
    fk_ong char(10)
    constraint fkMissaoOng
        Foreign key (fk_ong) REFERENCES ong(id)
);

create table itens (
	id int primary key auto_increment,
    nome varchar(45)
);

create table vinculo (
	id int,
    fk_ong char(10),
    fk_usuario int,
    data_vinculo date,
    primary key (id, fk_ong, fk_usuario),
    constraint fkusuarioVinculo foreign key (fk_usuario) references usuario(id),
    constraint fkongVinculo foreign key (fk_ong) references ong(id)
);

create table itens_missao (
	id int,
    fk_missao int, 
    fk_itens int,
    quantidade_itens int,
    expectativa_itens int,
    primary key (id, fk_missao, fk_itens),
    constraint fkmissaoitensmissao foreign key (fk_missao) references missao(id),
    constraint fkitensitensmissao foreign key (fk_itens) references itens(id)
);


create table presenca (
	id int auto_increment,
    fk_missao int, 
    fk_ong char(10), 
    fk_usuario int,
    data_hora_presenca datetime default current_timestamp,
    primary key (id, fk_missao, fk_ong, fk_usuario),
    constraint fkmissaoPresenca foreign key (fk_missao) references itens_missao(id),
    constraint fkongVinculoPresenca foreign key (fk_ong) references VINCULO(id),
    constraint fkusuarioVinculoPresenca foreign key (fk_usuario) references VINCULO(id)
);

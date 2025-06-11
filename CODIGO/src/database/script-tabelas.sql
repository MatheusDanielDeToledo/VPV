-- Active: 1746817552109@@127.0.0.1@3306@ong_se
create database ong_se;

use ong_se;

create table USUARIO (
	id int primary key auto_increment,
    nome varchar(100),
    email varchar(100) unique,
    senha varchar(15)
);

insert into USUARIO (nome, email, senha) values
	('Matheus Daniel de Toledo', 'matheus@gmail.com', 'senha123');

select * from usuario;

create table ong (
	id char(10) primary key,
    nome varchar(50),
    data_criacao date,
    descricao varchar(200),
    foto_url varchar(1000)
);

insert into ONG (id, nome, data_criacao) values
	('1234567890', 'TESTE', '2020-02-02');

create table MISSAO (
	id int primary key auto_increment,
    nome varchar(45),
    tipo varchar(45),
    data_missao date,
    fk_ong char(10)
    constraint fkMissaoOng
        Foreign key (fk_ong) REFERENCES ong(id)
);

select * from missao;
select data_missao from missao;

select * from itens_missao;
DESCRIBE missao;

select * from itens_missao;
select * from itens;

create table ITENS (
	id int primary key auto_increment,
    nome varchar(45)
);

select * from vinculo;

create table VINCULO (
	id int,
    fk_ONG char(10),
    fk_USUARIO int,
    data_vinculo date,
    primary key (id, fk_ONG, fk_USUARIO),
    constraint fkUsuarioVinculo foreign key (fk_USUARIO) references USUARIO(id),
    constraint fkONGVinculo foreign key (fk_ONG) references ONG(id)
);

create table ITENS_MISSAO (
	id int,
    fk_MISSAO int, 
    fk_ITENS int,
    quantidade_itens int,
    expectativa_itens int,
    primary key (id, fk_MISSAO, fk_ITENS),
    constraint fkMissaoItensMissao foreign key (fk_MISSAO) references MISSAO(id),
    constraint fkItensItensMissao foreign key (fk_ITENS) references ITENS(id)
);

alter table itens_missao modify id int AUTO_INCREMENT;

select * from itens_missao;

select * from itens;

(select id from missao where nome = 'SPTECH' and fk_ong = '2222222200');

(select id from itens where nome = 'Janta');

delete from itens where id = 5;

update itens_missao set quantidade_itens = 100 where id = 1;

create table PRESENCA (
	id int,
    fk_MISSAO int, 
    fk_ONG char(10), 
    fk_USUARIO int,
    data_hora_presenca datetime default current_timestamp,
    primary key (id, fk_MISSAO, fk_ONG, fk_USUARIO),
    constraint fkMissaoPresenca foreign key (fk_MISSAO) references ITENS_MISSAO(fk_MISSAO),
    constraint fkONGVinculoPresenca foreign key (fk_ONG) references VINCULO(fk_ONG),
    constraint fkUsuarioVinculoPresenca foreign key (fk_USUARIO) references VINCULO(fk_USUARIO)
);

select * from vinculo;
select * from itens_missao;

select * from missao;

select * from presenca;

select count(p.id) as totalVoluntarios from presenca p
            join itens_missao im
                on p.fk_missao = im.id
            join missao m
                on im.fk_missao = m.id
            where p.fk_ong = 2222222200
            and
            m.nome = 'SPTECH';

insert into presenca values 
    (1, 4, 2222222200, 3, DEFAULT);


insert into VINCULO ( fk_ONG , fk_USUARIO) 
	select ONG.id, USUARIO.id 
		from (select ONG.id from ONG where id = '1234567890' 
				union
			select USUARIO.id from USUARIO where nome = 'Matheus Daniel de Toledo') as VINCULO;
    
select * from VINCULO;
select * from USUARIO;
select * from ONG;

update itens_missao set quantidade_itens = 200 where fk_missao = (select id from MISSAO where nome = 'SPTECH' and fk_ONG = 2222222200) and fk_itens = (select id from itens where nome = 'Marmita');

select * from missao;
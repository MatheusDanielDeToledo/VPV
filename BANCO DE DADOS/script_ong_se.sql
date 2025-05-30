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

create table ONG (
	id char(10) primary key,
    nome varchar(50),
    data_criacao date,
    descricao varchar(200),
    foto_url varchar(1000)
);

insert into ONG (id, nome, data_criacao) values
	('1234567890', 'TESTE', '2020-02-02');

insert into ONG (id, nome, data_criacao) values
	('0987654321', 'TESTE_V', '2020-02-02');

create table MISSAO (
	id int primary key auto_increment,
    nome varchar(45),
    tipo varchar(45),
    data_missao date
);

create table ITENS (
	id int primary key auto_increment,
    nome varchar(45)
);

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
    primary key (id, fk_MISSAO, fk_ITENS),
    constraint fkMissaoItensMissao foreign key (fk_MISSAO) references MISSAO(id),
    constraint fkItensItensMissao foreign key (fk_ITENS) references ITENS(id)
);

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



insert into VINCULO ( fk_ONG , fk_USUARIO) 
	select ONG.id, USUARIO.id 
		from (select ONG.id from ONG where id = '1234567890' 
				union
			select USUARIO.id from USUARIO where nome = 'Matheus Daniel de Toledo') as VINCULO;
    
select * from VINCULO;
select * from USUARIO;
select * from ONG;
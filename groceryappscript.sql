create database userdatabase;

create table users(
	userId int primary key auto_increment not null,
    userName varchar(30) not null,
    `password` varchar(20) not null,
    firstName varchar(30),
    lastName varchar(20),
    email varchar(50),
    phone varchar(15)
);

insert into users 
values(0, 'erinwalter', 'abc123', 'Erin', 'Walter', 'erinwalter@rocketmortgage.com', '111-111-1111');

create table products(
	prodId int not null auto_increment primary key,
    prodName varchar(20),
    prodPrice float,
    prodImg varchar(200)
);

insert into products 
values(0, 'Carrot', 1.99, 'none'),
(0, 'Red Bell Pepper', 0.79, 'none'),
(0, 'Onion', 0.49, 'none'),
(0, 'Spinach', 2.49, 'none'),
(0, 'Celery', 1.99, 'none'),
(0, 'Potato', 2.99, 'none'),
(0, 'Sweet Potato', 1.79, 'none');

create table usersproducts(
	id int not null primary key auto_increment,
    userId int,
    prodId int,
    foreign key (userId) references users(userId),
    foreign key (prodId) references products(prodId)
);

insert into usersproducts
values(0,1,1),
(0,1,3),
(0,1,4);
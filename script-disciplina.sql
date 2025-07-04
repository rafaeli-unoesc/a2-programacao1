CREATE TABLE disciplina (
	iddisciplina bigserial NOT NULL,
	nomedisciplina varchar(100) NOT NULL,
    fase int8 NOT NULL,
	CONSTRAINT pk_disciplina PRIMARY KEY (iddisciplina)
);

INSERT INTO disciplina (nomedisciplina,fase) VALUES
	 ('Algoritmos e Lógica de Programação',1),
	 ('Linguagem e Método Científico',1),
	 ('Lógica Matemática',1),
	 ('Modelagem de Processos e Sistemas de Informação',1),
	 ('Princípios e Aplicações da Computação',1),
	 ('Arquitetura de Computadores',2),
	 ('Estrutura de Dados',2),
	 ('Fundamentos ao Desenvolvimento Web',2),
	 ('Introdução ao Hardware',2),
	 ('Modelagem de Sistemas',2);
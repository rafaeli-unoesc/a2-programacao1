CREATE TABLE academico (
	idacademico bigserial NOT NULL,
	nomeacademico varchar(100) NOT NULL,
	email varchar(100) NULL,
	nota1 float DEFAULT 0 NULL,
	nota2 float DEFAULT 0 NULL,
	nota3 float DEFAULT 0 NULL,
	media float DEFAULT 0 NULL,
	situacao varchar(20) NULL,
	iddisciplina int8 NOT NULL,
	CONSTRAINT pk_academico PRIMARY KEY (idacademico),
	CONSTRAINT fk_academico_disciplina FOREIGN KEY (iddisciplina) REFERENCES disciplina(iddisciplina)
);

INSERT INTO public.academico (nomeacademico,email,nota1,nota2,nota3,media,situacao,iddisciplina) VALUES
	 ('Ana Freitas','anafreitas@gmail.com',10.0,9.0,8.0,9.0,'Aprovado',1),
	 ('Airton Pereira','airtonpereira@gmail.com',7.0,6.0,5.0,6.0,'Reprovado',1);

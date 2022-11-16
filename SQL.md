## SOBRE O SQL
PÁGINA VOLTADA PARA COLOCAR OS SCRIPTS USADOS NO SQL SERVER PARA CRIAR DATABASES E AFINS.

# DB.FACULDADE_05
É o data base raíz dessa aplicação.

- DB.COURSES
    - tb.namedisciplinesC -> table da data base courses que tem as disciplinas de um curso.

- DB.DISCIPLINES
    - tb.teacherdisciplineD -> table da data base discipline com o nome do professor da disciplina (armazena informações como horário da aula). 
    - tb.studentdisciplineD -> table da data basee discipline com o nome do aluno da disciplina (armazena informações como disciplinas inscritas).

- DB.MEMBERS
    - tb.registration -> tabela voltada para dados de registros no projeto.
    - tb.teachers -> tabela voltada para armazenar nome, data de nascimento e salário do professor.
    - tb.student -> tabela voltada para armazenar nome, data de nascimento, número de matrícula, disciplinas inscritas e nota das disciplinas

- DB.ADMIN
    -tb.att -> tabela voltada para atualização de cursos e disciplinas

# DB.COURSES
É o data base que contém:

- tb.namedisciplinesC -> table da data base courses que tem as disciplinas de um curso.
    Campos: course | discipline | teacher

->Privilégio: equipe de reitoria.

# DB.DISCIPLINES
É o data base que contém:

- tb.teacherdisciplineD -> table da data base discipline com o nome do professor da disciplina (armazena informações como horário da aula).
    Campos: nameTeacher | discipline | totalStudents | schedule

->Privilégio: equipe de reitoria, colegiado (coordenadores) e professor da disciplina.

- tb.studentdisciplineD -> table da data basee discipline com o nome do aluno da disciplina (armazena informações como disciplinas inscritas).
    Campos: nameTeacher | discipline | nameStudent | schedule | noteStudente

->Privilégio: equipe de reitoria, colegiado (coordenadores), professor da disciplina e alunos da disciplina*.
*alunos só tem acesso a linha em que ele está cadastratado.

# DB.MEMBERS
É a data base que contém:

- tb.registration -> tabela voltada para dados de registro no projeto.
    Campos: name | position | e-mail | log-in | password

->Privilégios> equipe de reitoria.

- tb.teachers -> tabela voltada para armazenar nome, data de nascimento e salário do professor.
    Campos: name | position | disciplines | birthday | wage

->Privilégios> equipe de reitoria e colegiado (coordenadores).

- tb.student -> tabela voltada para armazenar nome, data de nascimento, número de matrícula, disciplinas inscritas e nota das disciplinas
    Campos: name | position | numberRegistration | disciplines | notesStudent | totalNotes | 

->Privilégios> equipe de reitoria e colegiado (coordenadores).

# DB.ADMIN
-tb.att -> tabela voltada para administrar courses
    Campo: course | discipline | teacher

->Privilégios> equipe de reitoria e colegiado
## PROGRAMA SISTEMA DE ALUNOS - FACULDADE 05

O presente programa serve com o objetivo de servir como lugar repositório do código do portal do aluno da FACULDADE 05.

# DETALHES SOBRE PERFIS:
O presente site serve como gerenciamento da gestão do sistema da FACULDADE 05 (ela é utópica), como é algo interno, foram criados 4 perfis de pessoas que seriam interessadas para uso do site, com seus respectivos privilégios.

Esses pefis foram criados de forma utópica tentando se aproximar ao máximo dos perfis em um contexto oficial de universidades e são:

->ALUNO: aquele matriculado como aluno na FACULDADE 05, seus privilégios estão em acessar informações gerais do sistema como dados pessoais do aluno; disciplinas matriculadas; curso matriculado.
->PROFESSOR: aquele que tem um contrato para dar aula na FACULDADE 05, seus privilégios estão em acessar informações gerais (mesmo do aluno) e outras mais privilegiadas (médias de notas, médias salariais e horários de aulas), além de poder alterar questões associadas as disciplinas que é professor.
->COORDENADORIA DE CURSOS: aqueles que são responsáveis por um curso da FACULDADE 05, seus privilégios são totais no que tange ao seu curso.
->EQUIPE DE REITORIA: aqueles que realizam atividades administrativas mais elevadas na FACULDADE 05, seus privilégios são totais em todo o sistema.

# DETALHES TÉCNICOS DO PROCESSO DE ALGORITMIZAÇÃO:
O programa foi idealizado a partir de um algoritmo de funcionamento, que segue 4 possíveis usuários cada um com 4 possíveis experiências, as quais se seguem a baixo:

1. ALUNO DA FACULDADE 05:
Obs: aluno é aquele estudante matriculado formalmente na FACULDADE 05.
1.1. SOMENTE ACESSO RÁPIDO DE INFORMAÇÕES SIMPLES.
1.2. VISANDO MATRÍCULA EM DISCIPLINA, EM PERÍODOS ESPECÍFICOS.
1.3. VISANDO DESMATRICULAR EM DISCIPLINA, EM PERÍODOS ESPECÍFICOS.
1.4. VISANDO PEDIR ANÁLISE PARA DESMATRICULAR DO CURSO.

2. PROFESSOR DA FACULDADE 05:
obs: professor é aquele que foi contratado para dar aulas na FACULDADE 05.
2.1. SOMENTE ACESSO RÁPIDO DE INFORMAÇÕES SIMPLES.
2.2. PROFESSOR INTERESSADO EM SABER SUAS DISCIPLINAS, DIAS E HORÁRIOS QUE DÁ AULA.
2.3. PROFESSOR INTERESSADO EM SABER INFORMAÇÕES SOBRE OS ALUNOS E SUAS NOTAS.
2.4. PROFESSOR INTERESSADO EM REALIZAR ALTERAÇÕES EM INFORMAÇÕES DE ALUNOS E NOTAS.

3. COORDENADORIA DE CURSOS DA FACULDADE 05:
obs: aqueles que são responsáveis por um curso da FACULDADE 05.
3.1. SOMENTE ACESSO RÁPIDO DE INFORMAÇÕES SIMPLES.
3.2. INTERESSADOS EM SABER INFORMAÇÕES SOBRE SEU CURSO, ENVOLVENDO ALUNOS E PROFESSORES.
3.3. INTERESSADO EM REALIZAR ALTERAÇÕES SOBRE DISCIPLINAS DE SEU CURSO.
3.4. INTERESSADOS EM REALIZAR ALTERAÇÕES SOBRE ALUNOS E PROFESSORES DE SEU CURSO.

4. EQUIPE DE REITORIA DA FACULDADE 05:
obs: aqueles que são responsáveis por um curso da FACULDADE 05.
4.1. SOMENTE ACESSO RÁPIDO DE INFORMAÇÕES SIMPLES.
4.2. INTERESSADOS EM SABER DADOS MAIS APROFUNDADOS SOBRE A FACULDADE, CURSOS E DISCIPLINAS.
4.3. INTERESSADOS EM REALIZAR ALTERAÇÕES EM CURSOS, COMO ALTERAR TURNO, EXCLUIR CURSO OU CRIAR NOVO CURSO.
4.4. INTERESSADOS EM REALIZAR ALTERAÇÕES EM COORDENADORIA DE CURSOS, COMO MUDAR COORDENADOR, COLOCAR COORDENADOR OU EXCLUIR COORDENADOR.

# DIRETÓRIOS DO SISTEMA:
    RAÍZ    |  PRIMÁRIO
index.html
readme.md
setup.md  
style       |  style.css
script      |  script.js
script      |  script.cs

# DETALHAMENTO DOS DIRETÓRIOS
index.html -> página raíz e original e primeiro acesso de quem entra, somente serve para login dos alunos. 
obs: para a FACULDADE 05 foi considerado que somente membros de colegiado e reitoria podem incluir ou excluir alunos.
readme.md -> detalhes técnicos e não técnicos do diretório.
setup.md -> detalhes sobre configuração interna do banco de dados em localhost.

style -> pasta voltada para estilização do projeto.
script -> pasta voltada para os scripts usados pelo projeto (JS, AngularJS, C#).

# SOBRE O BANCO DE DADOS:
Foi usado o banco de dados hospedado no SQL Server (mais detalhes em setup.md) e o mesmo se distribui em:

db.courses -> data base voltada para cursos da FACULDADE 05.
tb.namedisciplinesC -> table da data base courses que tem as disciplinas de um curso (armazena informações como nome das disciplinas).

db.disciplines -> data base voltada para cada disciplina de cada curso da FACULDADE 05.
tb.teacher disciplineD -> table da data base discipline com o nome do professor da disciplina (armazena informações como horário da aula). 
tb.student disciplineD -> table da data basee discipline com o nome do aluno da disciplina (armazena informações como disciplinas inscritas).

db.members -> data base voltada para armazenar dados pessoais (sensíveis) e administrativos.
tb.registration -> tabela voltada para dados de registros no projeto.
tb.teachers -> tabela voltada para armazenar nome, data de nascimento e salário do professor.
tb.student -> tabela voltada para armazenar nome, data de nascimento, número de matrícula, disciplinas inscritas e nota das disciplinas
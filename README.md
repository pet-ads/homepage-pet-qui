## Instruções para Alterar Arquivos JSON via GitHub

### 1. Criando uma bifurcação (Fork) do repositório para alterações locais

- Dentro da plataforma Github, navegue até o repositório original e clique no botão **"Fork"** no canto superior direito para criar uma cópia do repositório na sua própria conta do GitHub.
- Adicione um nome para o repositório bifurcado e confirme clicando no botão **"Create Fork"**

### 2. Criar uma Nova Branch

- No repositório bifurcado, crie uma nova branch para realizar as modificações. Clique no menu suspenso de branches no canto superior esquerdo e selecione "Create new branch".
  Nomeie a branch de acordo com as alterações que serão feitas, como update-json-values.

### 3. Editar os Arquivos JSON

- No repositório bifurcado, navegue até a pasta [public/data](https://github.com/pet-ads/homepage-pet-qui/tree/main/public/data) e localize os arquivos JSON (com extensão ".json") que precisam ser alterados.
  Clique no ícone de lápis ("Edit") ao lado do arquivo JSON que deseja modificar.

### 4. Fazendo Modificações

#### 4.1 Adicionando Itens no JSON

Para adicionar um novo item, insira um novo objeto no vetor dentro do arquivo JSON. O vetor é caracterizado por colchetes `[ ]`, enquanto o objeto é caracterizado por chaves `{ }`. Cada atributo dentro do objeto é definido com o nome entre aspas duplas, seguido de dois pontos e o valor correspondente. Se o valor for um texto, ele deve estar envolto em aspas duplas. Para valores decimais, não é necessário o uso de aspas. Para finalizar, o item deve terminar com uma vírgula, caso haja um novo atributo ou objeto para adicionar abaixo.

#### [Projetos.JS](https://github.com/pet-ads/homepage-pet-qui/blob/main/public/data/projetos.json)

Arquivo que contém todos os dados dos projetos pertencentes ao Programa de Educação Tutorial de Química do campus IFSP Sertãozinho.

##### Conjunto de dados em "projetos":

* **id** : Identificador único. Tipo texto, utilizando aspas duplas.
* **tipo** : Representa se o projeto é de "extensão", "pesquisa" ou "extensão-desenvolvimento". Tipo texto, utilizando aspas duplas.
* **link** : Link/URL do drive ou repositório na plataforma GitHub contendo todos os materiais, vídeos, imagens e códigos remanescentes do projeto em questão. Tipo texto, utilizando aspas duplas.
* **titulo** : Representa o nome do projeto em questão. Tipo texto, utilizando aspas duplas.
* **status** : Demonstra a etapa em questão do planejamento do projeto, podendo ser marcada como "Em andamento", "Não iniciado" ou "Concluído". Tipo texto, utilizando aspas duplas.
* **descricao** : Representa um pequeno texto de apresentação do projeto. Tipo texto, utilizando aspas duplas.
* **expandido** : Representa a descrição detalhada do projeto. Tipo texto, utilizando aspas duplas.
* **tecnologias** : Destaca as linguagens de programação e outras tecnologias utilizadas para a efetivação do projeto. Tipo texto, utilizando aspas duplas.

Antes:

```json
{
  "projetos": [
    {
      "id": "1",
      "tipo": "extensão",
      "link": "",
      "titulo": "Projeto teste",
      "status": "Em andamento",
      "descricao": "Produzir vídeos curtos com especialistas para disseminar conhecimento e incentivar a busca por ajuda, além de oferecer atividades relaxantes para o corpo e mente.",
      "expandido": "Organizar vídeos no Instagram e redes sociais para abordar problemas que afetam estudantes e as comunidades interna e externa do IFSP, contribuindo para seu aprendizado e bem-estar. Além disso, oferecer oficinas de relaxamento para promover a socialização e o entretenimento, ajudando os participantes a relaxar e focar em si mesmos, aliviando as pressões e preocupações diárias.",
      "tecnologias": ""
    }
  ]
}
```

Depois:

```json
{
  "projetos": [
    {
      "id": "1",
      "tipo": "extensão",
      "link": "https://www.google.com",
      "titulo": "Projeto teste",
      "status": "Em andamento",
      "descricao": "Produzir vídeos curtos com especialistas para disseminar conhecimento e incentivar a busca por ajuda, além de oferecer atividades relaxantes para o corpo e mente.",
      "expandido": "Organizar vídeos no Instagram e redes sociais para abordar problemas que afetam estudantes e as comunidades interna e externa do IFSP, contribuindo para seu aprendizado e bem-estar. Além disso, oferecer oficinas de relaxamento para promover a socialização e o entretenimento, ajudando os participantes a relaxar e focar em si mesmos, aliviando as pressões e preocupações diárias.",
      "tecnologias": ""
    },
    {
      "id": "2",
      "tipo": "pesquisa",
      "link": "",
      "titulo": "Novo Projeto",
      "status": "Planejado",
      "descricao": "Descrição do novo projeto.",
      "expandido": "Mais detalhes sobre o novo projeto.",
      "tecnologias": ""
    }
  ]
}
```

#### [Integrantes.JSON](https://github.com/pet-ads/homepage-pet-qui/blob/main/public/data/integrantes.json)

Arquivo que contém todos os dados dos alunos e tutores que participam ou participaram do Programa de Educação Tutorial de Química do campus IFSP Sertãozinho.

##### Conjunto de dados em "Aluno":

* **id** : Identificador único. Tipo texto, utilizando aspas duplas.
* **nome** : Nome do aluno. Tipo texto, utilizando aspas duplas.
* **tipo** : Representa se o aluno(a) é "Bolsista" ou "Voluntário(a)". Tipo texto, utilizando aspas duplas.
* **foto** : Caminho do arquivo onde está a foto do aluno. As fotos de todos os alunos (participantes e ex-participantes do PET Química) estão localizadas dentro da pasta  **public/images/fotos_alunos** . O caminho do arquivo deve estar envolto em aspas duplas e conter a extensão da imagem. Para fins de padronização, utilize o formato ".jpeg" ou ".jpg".
* **ano** : Ano de entrada, do tipo decimal, ou seja, não recebe aspas duplas.
* **github** : Link/URL da plataforma GitHub do integrante. Caso o usuário não possua, cole a URL "[https://github.com](https://github.com)". Tipo texto, utilizando aspas duplas.
* **linkedin** : Link/URL da plataforma LinkedIn do integrante. Caso o usuário não possua, cole a URL "[https://www.linkedin.com](https://www.linkedin.com)". Tipo texto, utilizando aspas duplas.

Antes:

```json
{
"aluno": [
    {
      "id": "1",
      "nome": "Aluno1",
      "foto": "./images/fotos_alunos/aluno1.jpeg",
      "tipo": "Voluntária",
      "ano": "2024",
      "github": "https://github.com",
      "linkedin": "https://www.linkedin.com"
   }]
}

```

Depois:

```json
{
"aluno": [{

      "id": "1",
      "nome": "Aluno1",
      "foto": "./images/fotos_alunos/aluno1.jpeg",
      "tipo": "Voluntária",
      "ano": "2024",
      "github": "https://github.com",
      "linkedin": "https://www.linkedin.com"
   },
    {
      "id": "2",
      "nome": "Aluno2",
      "foto": "./images/fotos_alunos/aluno2.jpeg",
      "tipo": "Voluntária",
      "ano": "2024",
      "github": "https://github.com",
      "linkedin": "https://www.linkedin.com"
   }]
}

```

##### Conjunto de dados em "**Exaluno**":

* **id** : Identificador único. Tipo texto, utilizando aspas duplas.
* **nome** : Nome do aluno(a). Tipo texto, utilizando aspas duplas.
* **foto** : Caminho do arquivo onde está a foto do aluno. As fotos de todos os alunos (participantes e ex-participantes do PET Química) estão localizadas dentro da pasta  **public/images/fotos_alunos** . O caminho do arquivo deve estar envolto em aspas duplas e conter a extensão da imagem. Para fins de padronização, utilize o formato ".jpeg" ou ".jpg".
* **linkedin** : Link/URL da plataforma LinkedIn do(a) integrante. Caso o usuário não possua, cole a URL "[https://www.linkedin.com](https://www.linkedin.com)". Tipo texto, utilizando aspas duplas.

  Antes:

```json
{
 "exAlunos": [
    {
      "id": "1",
      "nome": "Aluno1",
      "foto": "./images/fotos_alunos/Aluno1.jpeg",
      "linkedin": "https://www.linkedin.com"
   }
 ]
}
```

Depois:

```json
{
 "exAlunos": [
    {
      "id": "1",
      "nome": "Aluno1",
      "foto": "./images/fotos_alunos/Aluno1.jpeg",
      "linkedin": "https://www.linkedin.com"
   },
   {
      "id": "2",
      "nome": "Aluno2",
      "foto": "./images/fotos_alunos/Aluno2.jpeg",
      "linkedin": "https://www.linkedin.com"
   }
 ]
}
```

##### Conjunto de dados em "Tutores":

* **id** : Identificador único. Tipo texto, utilizando aspas duplas.
* **nomeTutor** : Nome do Tutor(a). Tipo texto, utilizando aspas duplas.
* **tipo** : Representa se o tutor(a) é "Tutor(a)" ou "Sub-Tutor(a)". Tipo texto, utilizando aspas duplas.
* **foto** : Caminho do arquivo onde está a foto do aluno. As fotos de todos os alunos (participantes e ex-participantes do PET Química) estão localizadas dentro da pasta  **public/images/fotos_tutores** . O caminho do arquivo deve estar envolto em aspas duplas e conter a extensão da imagem. Para fins de padronização, utilize o formato ".jpeg" ou ".jpg".
* **ano** : Ano de entrada, do tipo decimal, ou seja, não recebe aspas duplas.
* **github** : Link/URL da plataforma GitHub do(a) tutor(a). Caso o usuário não possua, cole a URL "[https://github.com](https://github.com)". Tipo texto, utilizando aspas duplas.
* **linkedin** : Link/URL da plataforma LinkedIn do(a) tutor(a). Caso o usuário não possua, cole a URL "[https://www.linkedin.com](https://www.linkedin.com)". Tipo texto, utilizando aspas duplas.
* Antes:

  ```json
  {
  "tutores": [
      {
        "id": "1",
        "nomeTutor": "Tutor1",
        "tipo": "Tutor",
        "foto": "./images/fotos_tutores/Tutor1.jpg",
        "ano": "2021",
        "github": "https://github.com",
        "linkedin": "https://www.linkedin.com"
      }
    ]
  }
  ```

  Depois:
* ```json
  {
  "tutores": [
      {
        "id": "1",
        "nomeTutor": "Tutor1",
        "tipo": "Tutor",
        "foto": "./images/fotos_tutores/Tutor1.jpg",
        "ano": "2021",
        "github": "https://github.com",
        "linkedin": "https://www.linkedin.com"
      },
      {
        "id": "2",
        "nomeTutor": "Tutor2",
        "tipo": "Tutor",
        "foto": "./images/fotos_tutores/Tutor2.jpg",
        "ano": "2024",
        "github": "https://github.com",
        "linkedin": "https://www.linkedin.com"
      }
    ]
  }
  ```

##### Conjunto de dados em "**Extutores**":

* **id** : Identificador único. Tipo texto, utilizando aspas duplas.
* **nomeTutor** : Nome do Tutor(a). Tipo texto, utilizando aspas duplas.
* **ano** : Ano de saída, do tipo decimal, ou seja, não recebe aspas duplas.
* **github** : Link/URL da plataforma GitHub do(a) tutor(a). Caso o usuário não possua, cole a URL "[https://github.com](https://github.com)". Tipo texto, utilizando aspas duplas.
* **linkedin** : Link/URL da plataforma LinkedIn do(a) tutor(a). Caso o usuário não possua, cole a URL "[https://www.linkedin.com](https://www.linkedin.com)". Tipo texto, utilizando aspas duplas.

Antes:

```json
{
"exTutores": [
    {
      "id": "1",
      "nomeTutor": "Tutor1",
      "foto": "./images/fotos_tutores/Tutor1.jpg",
      "ano": "2021",
      "github": "https://github.com",
      "linkedin": "https://www.linkedin.com"
    }
  ]
}
```

Depois:

```json
{
"extutores": [
    {
      "id": "1",
      "nomeTutor": "Tutor1",
      "foto": "./images/fotos_tutores/Tutor1.jpg",
      "ano": "2021",
      "github": "https://github.com",
      "linkedin": "https://www.linkedin.com"
    },
    {
      "id": "2",
      "nomeTutor": "Tutor2",
      "foto": "./images/fotos_tutores/Tutor2.jpg",
      "ano": "2024",
      "github": "https://github.com",
      "linkedin": "https://www.linkedin.com"
    }
  ]
}
```

#### [FAQ.JSON](https://github.com/pet-ads/homepage-pet-qui/blob/main/public/data/faq.json)

Arquivo que contém todos os dados das perguntas frequentes da página web PET-qui.

##### Conjunto de dados em "faqs":

- **id** : Identificador único. Tipo texto, utilizando aspas duplas.
- **trigger :** Representa a questão que está sendo levantada. Tipo texto, utilizando aspas duplas.
- **resposta :** Apresenta a resposta para a questão. Tipo texto, utilizando aspas duplas.

Antes:

```json
{
  "faqs": [
    {
      "id": "1",
      "trigger": "O que é o PetQuímica?",
      "resposta": "O PET, Programa de Educação Tutorial, visa desenvolver atividades e projetos de ensino e pesquisa que sejam relacionados à química sob a tutoria de um docente."
    }
  ]
}
```

Depois:

```json
{
  "faqs": [
    {
      "id": "1",
      "trigger": "O que é o PetQuímica?",
      "resposta": "O PET, Programa de Educação Tutorial, visa desenvolver atividades e projetos de ensino e pesquisa que sejam relacionados à química sob a tutoria de um docente."
    },
    {
      "id": "2",
      "trigger": "Quais são as responsabilidades de um petiano?",
      "resposta": "Os membros devem dedicar-se integralmente às atividades acadêmicas do grupo, além de suas atividades acadêmicas regulares. As atividades do grupo são definidas em conjunto com o tutor, e podem incluir o desenvolvimento de planos de estudos, a criação de atividades de extensão com membros da comunidade acadêmica, desenvolvimento de projetos de pesquisa, a implementação de projetos internos ao PET, entre outras."
    }
  ]
}
```

### 4.2 Alterando valores do JSON

Para alterar dados em um arquivo JSON, encontre o objeto no vetor que deseja modificar e ajuste os valores dos atributos conforme necessário. Certifique-se de manter a estrutura JSON correta, incluindo aspas duplas para valores de texto e sem aspas para valores decimais.

#### [Home.JSON](https://github.com/pet-ads/homepage-pet-qui/blob/main/public/data/home.json)

Os atributos no arquivo Home.json são fixos na página inicial e consistem no texto de apresentação e no propósito da página. Portanto, não é permitido adicionar ou excluir atributos, apenas modificar o conteúdo existente. O arquivo contém dois objetos principais: AboutPET e Purpose, que possuem as chaves desktop e mobile. O valor dessas chaves armazenam o texto que será exibido em diferentes tamanhos de tela, seja em um computador padrão ou em um dispositivo móvel. Ao Alterar o texto, é importante manter uma quantidade semelhante de caracteres à versão anterior.

Antes:

```json
{
    "AboutPET": {
        "desktop": "O Programa de Educação Tutorial (PET) é uma iniciativa do governo federal brasileiro voltada para estimular atividades de pesquisa, ensino e extensão no nível de graduação.Inaugurado em 1979 pela Coordenação de Aperfeiçoamento de Pessoal de Nível Superior (CAPES) como Programa Especial de Treinamento, o PET tinha como objetivo inicial formar um grupo de elite intelectual dedicado à pesquisa e estudo. Em 2004, foi renomeado para Programa de Educação Tutorial, adotando uma nova filosofia. Segundo a Secretaria de Educação Superior (SESu), os objetivos do PET incluem aprimorar o ensino de graduação, formar academicamente os alunos, promover a interdisciplinaridade e executar atividades acadêmicas diversificadas por meio de grupos tutoriais. Desde sua expansão significativa entre 2006 e 2012, o PET conta atualmente com 842 grupos em 121 Instituições de Ensino Superior em todo o Brasil. O PetQuímica baseia-se em grupos tutoriais de aprendizagem orientados por um professor tutor, desenvolvendo e realizando atividades extracurriculares para toda a comunidade interna e externa do câmpus Sertãozinho.",
    
        "mobile": "O Programa de Educação Tutorial (PET) é uma iniciativa do governo federal brasileiro voltada para estimular atividades de pesquisa, ensino e extensão no nível de graduação. Desde sua significativa expansão entre 2006 e 2012, o programa atualmente engloba 842 grupos em 121 Instituições de Ensino Superior pelo Brasil. O PetQuímica baseia-se em grupos tutoriais de aprendizagem orientados por um professor tutor, os quais desenvolvem e realizam atividades extracurriculares para toda a comunidade interna e externa do câmpus Sertãozinho."
      },
      "Purpose": {
        "desktop": "O Programa de Educação Tutorial (PET) é desenvolvido por grupos de acadêmicos sob a orientação de um docente, organizados a partir dos cursos de graduação das Instituições de Ensino Superior do país. Seu princípio fundamental é integrar ensino, pesquisa e extensão através da educação tutorial.Os objetivos do programa incluem promover atividades acadêmicas de alta qualidade por meio de grupos de aprendizagem coletiva e interdisciplinar, aprimorar a formação acadêmica dos alunos de graduação, incentivar a capacitação de profissionais e docentes altamente qualificados, formular novas estratégias para o desenvolvimento e modernização do ensino superior no Brasil, e cultivar um espírito crítico e uma atuação profissional ética e cidadã.",
        "mobile": "O Programa de Educação Tutorial (PET) é desenvolvido por grupos de acadêmicos sob a orientação de um docente, organizados a partir dos cursos de graduação das Instituições de Ensino Superior do país. Seu princípio fundamental é integrar ensino, pesquisa e extensão através da educação tutorial.Os objetivos do programa incluem promover atividades acadêmicas de alta qualidade por meio de grupos de aprendizagem coletiva e interdisciplinar, aprimorar a formação acadêmica dos alunos de graduação, incentivar a capacitação de profissionais e docentes altamente qualificados, formular novas estratégias para o desenvolvimento e modernização do ensino superior no Brasil, e cultivar um espírito crítico e uma atuação profissional ética e cidadã."
      }

}
```

Depois:

```json
{
    "AboutPET": {
        "desktop": "O Programa de Educação Tutorial (PET) é uma iniciativa do governo federal brasileiro voltada para estimular atividades de pesquisa, ensino e extensão no nível de graduação.Inaugurado em 1979 pela Coordenação de Aperfeiçoamento de Pessoal de Nível Superior (CAPES) como Programa Especial de Treinamento, o PET tinha como objetivo inicial formar um grupo de elite intelectual dedicado à pesquisa e estudo. Em 2004, foi renomeado para Programa de Educação Tutorial, adotando uma nova filosofia. Segundo a Secretaria de Educação Superior (SESu), os objetivos do PET incluem aprimorar o ensino de graduação, formar academicamente os alunos, promover a interdisciplinaridade e executar atividades acadêmicas diversificadas por meio de grupos tutoriais.",
    
        "mobile": "O Programa de Educação Tutorial (PET) é uma iniciativa do governo federal brasileiro voltada para estimular atividades de pesquisa, ensino e extensão no nível de graduação. Desde sua significativa expansão entre 2006 e 2012, o programa atualmente engloba 842 grupos em 121 Instituições de Ensino Superior pelo Brasil. O PetQuímica baseia-se em grupos tutoriais de aprendizagem orientados por um professor tutor, os quais desenvolvem e realizam atividades extracurriculares para toda a comunidade interna e externa do câmpus Sertãozinho."
      },
      "Purpose": {
        "desktop": "O Programa de Educação Tutorial (PET) é desenvolvido por grupos de acadêmicos sob a orientação de um docente, organizados a partir dos cursos de graduação das Instituições de Ensino Superior do país. Seu princípio fundamental é integrar ensino, pesquisa e extensão através da educação tutorial.Os objetivos do programa incluem promover atividades acadêmicas de alta qualidade por meio de grupos de aprendizagem coletiva e interdisciplinar, aprimorar a formação acadêmica dos alunos de graduação, incentivar a capacitação de profissionais e docentes altamente qualificados, formular novas estratégias para o desenvolvimento e modernização do ensino superior no Brasil, e cultivar um espírito crítico e uma atuação profissional ética e cidadã.",
        "mobile": "O Programa de Educação Tutorial (PET) é desenvolvido por grupos de acadêmicos sob a orientação de um docente, organizados a partir dos cursos de graduação das Instituições de Ensino Superior do país. Seu princípio fundamental é integrar ensino, pesquisa e extensão através da educação tutorial."
      }
}
```

#### [Projetos.JSON](https://github.com/pet-ads/homepage-pet-qui/blob/main/public/data/projetos.json)

Antes:

```json
{
  "projetos": [
    {
      "id": "1",
      "tipo": "extensão",
      "link": "https://www.google.com",
      "titulo": "Projeto teste",
      "status": "Em andamento",
      "descricao": "Produzir vídeos curtos com especialistas para disseminar conhecimento e incentivar a busca por ajuda, além de oferecer atividades relaxantes para o corpo e mente.",
      "expandido": "Organizar vídeos no Instagram e redes sociais para abordar problemas que afetam estudantes e as comunidades interna e externa do IFSP, contribuindo para seu aprendizado e bem-estar. Além disso, oferecer oficinas de relaxamento para promover a socialização e o entretenimento, ajudando os participantes a relaxar e focar em si mesmos, aliviando as pressões e preocupações diárias.",
      "tecnologias": ""
    }
  ]
}
```

Depois:

```json
{
  "projetos": [
    {
      "id": "1",
      "tipo": "extensão",
      "link": "https://www.google.com",
      "titulo": "Projeto teste",
      "status": "Concluído",
      "descricao": "Produzir vídeos curtos com especialistas para disseminar conhecimento e incentivar a busca por ajuda, além de oferecer atividades relaxantes para o corpo e mente.",
      "expandido": "Organizar vídeos no Instagram e redes sociais para abordar problemas que afetam estudantes e as comunidades interna e externa do IFSP, contribuindo para seu aprendizado e bem-estar. Além disso, oferecer oficinas de relaxamento para promover a socialização e o entretenimento, ajudando os participantes a relaxar e focar em si mesmos, aliviando as pressões e preocupações diárias.",
      "tecnologias": "JavaScript, HTML, CSS"
    }
  ]
}
```

#### [Integrantes.JSON](https://github.com/pet-ads/homepage-pet-qui/blob/main/public/data/integrantes.json)

##### Conjunto de dados em "**aluno**":

Antes:

```json
{
"aluno": [
    {
      "id": "1",
      "nome": "Aluno1",
      "foto": "./images/fotos_alunos/aluno1.jpeg",
      "tipo": "Voluntária",
      "ano": "2024",
      "github": "https://github.com",
      "linkedin": "https://www.linkedin.com"
   }]
}
```

Depois:

```json
{
"aluno": [
    {
      "id": "1",
      "nome": "Aluno1",
      "foto": "./images/fotos_alunos/aluno1.jpeg",
      "tipo": "Voluntária",
      "ano": "2023",
      "github": "https://github.com/aluno1",
      "linkedin": "https://www.linkedin.com/in/aluno1"
   }
  ]
}
```

##### Conjunto de dados em "**Exaluno**";

Antes:

```json
{
 "exAlunos": [
    {
      "id": "1",
      "nome": "Aluno1",
      "foto": "./images/fotos_alunos/Aluno1.jpeg",
      "linkedin": "https://www.linkedin.com"
   }
 ]
}
```

Depois:

```json
{
 "exAlunos": [
    {
      "id": "1",
      "nome": "Aluno1",
      "foto": "./images/fotos_alunos/Aluno1.jpeg",
      "linkedin": "https://www.linkedin.com/in/aluno1"
   }
 ]
}
```

##### Conjunto de dados em "**tutores**":

Antes:

```json
{
  "tutores": [
      {
        "id": "1",
        "nomeTutor": "Tutor1",
        "tipo": "Tutor",
        "foto": "./images/fotos_tutores/Tutor1.jpg",
        "ano": "2021",
        "github": "https://github.com",
        "linkedin": "https://www.linkedin.com"
      }
    ]
}
```

Depois:

```json
{
  "tutores": [
      {
        "id": "1",
        "nomeTutor": "Tutor1",
        "tipo": "Sub-Tutor",
        "foto": "./images/fotos_tutores/Tutor1.jpg",
        "ano": "2022",
        "github": "https://github.com/tutor1",
        "linkedin": "https://www.linkedin.com/in/tutor1"
      }
  ]
}
```

##### Conjunto de dados em "**extutores**":

Antes:

```json
{
  "exTutores": [
    {
      "id": "1",
      "nomeTutor": "Tutor1",
      "foto": "./images/fotos_tutores/Tutor1.jpg",
      "ano": "2021",
      "github": "https://github.com",
      "linkedin": "https://www.linkedin.com"
    }
  ]
}
```

Depois:

```json
{
  "exTutores": [
    {
      "id": "2",
      "nomeTutor": "Tutor2",
      "foto": "./images/fotos_tutores/Tutor2.jpg",
      "ano": "2021",
      "github": "https://github.com/tutor2",
      "linkedin": "https://www.linkedin.com/in/tutor2"
    }
  ]
}
```

#### [Processos.JSON](https://github.com/pet-ads/homepage-pet-qui/blob/main/public/data/processos.json)

Assim como na alteração do arquivo Home.json, o conteúdo dentro de Processos.json não deve ter objetos adicionados ou removidos, apenas os valores das chaves existentes devem ser modificados. O arquivo contém três objetos principais: cabecalho, requisitos, e inscricao, que armazenam os textos exibidos em cada seção da tela de "Processo Seletivo".

Antes:

```json
{
    "cabecalho":
        {
            "titulo":"Processo Seletivo",
            "texto":"Todos os estudantes regularmente matriculados no curso de Licenciatura em Química do IFSP câmpus São Sertãozinho podem participar dos processos seletivos do PetQuímica. O grupo é composto por até doze bolsistas e até seis voluntários.  Os processos seletivos são regidos por editais publicados periodicamente."
        }
    ,
    "requisitos":
        {
            "titulo":"Requisitos",
            "texto":"Para se inscrever no processo seletivo, o candidato deverá:",
            "item_1":"Estar regularmente matriculado no curso de Licenciatura em Química.",
            "item_2":"Possuir disponibilidade para se dedicar 20 horas semanais ao Pet/Química.",
            "item_3":"Apresentar média geral (IRA) igual ou superior a 6,0."
        }
    ,
    "inscricao":
        {
        "titulo":"Inscrições",
        "texto_1":"As inscrições devem ser realizadas pelo e-mail",
        "email":"petquisrt@gmail.com",
        "texto_2":"Prazo de inscrição:",
        "data":"11 a 15 de março de 2024",
        "estado":"encerrado",
        "texto_3":"Clique no botão abaixo para baixar os detalhes sobre documentos necessários, critérios, cronograma e outras informações:"
    }
}
```

Depois:

```json
{
    "cabecalho": {
        "titulo":"Processo Seletivo",
        "texto":"Todos os estudantes regularmente matriculados no curso de Licenciatura em Química do IFSP câmpus São Sertãozinho podem participar dos processos seletivos do PetQuímica. O grupo é composto por até doze bolsistas e até seis voluntários.  Os processos seletivos são regidos por editais publicados periodicamente."
    },
    "requisitos": {
        "titulo":"Requisitos",
        "texto":"Para se inscrever no processo seletivo, o candidato deverá:",
        "item_1":"Estar regularmente matriculado no curso de Licenciatura em Química.",
        "item_2":"Possuir disponibilidade para se dedicar 20 horas semanais ao Pet/Química.",
        "item_3":"Apresentar média geral (IRA) igual ou superior a 6,5."
    },
    "inscricao": {
        "titulo":"Inscrições",
        "texto_1":"As inscrições devem ser realizadas pelo e-mail",
        "email":"petquisrt@gmail.com",
        "texto_2":"Prazo de inscrição:",
        "data":"02 a 06 de setembro de 2024",
        "estado":"aberto",
        "texto_3":"Clique no botão abaixo para baixar os detalhes sobre documentos necessários, critérios, cronograma e outras informações:"
    }
}
```

#### [FAQ.JSON](https://github.com/pet-ads/homepage-pet-qui/blob/main/public/data/faq.json)

Antes:

```json
{
  "faqs": [
    {
      "id": "1",
      "trigger": "O que é o PetQuímica?",
      "resposta": "O PET, Programa de Educação Tutorial, visa desenvolver atividades e projetos de ensino e pesquisa que sejam relacionados à química sob a tutoria de um docente."
    }
  ]
}
```

Depois:

```json
{
  "faqs": [
    {
      "id": "2",
      "trigger": "O que é o PetQuímica?",
      "resposta": "O PET, Programa de Educação Tutorial, visa desenvolver atividades e projetos de ensino e pesquisa que sejam relacionados à química sob a tutoria de um docente."
    }
  ]
}
```

### 4.3 Excluindo itens no JSON

Para excluir um item de um arquivo JSON, localize o objeto específico que deseja remover dentro do vetor e apague-o, juntamente com a vírgula que o separa de outros itens, se aplicável. Mantenha a estrutura JSON correta para evitar erros.

#### [Projetos.JS](https://github.com/pet-ads/homepage-pet-qui/blob/main/public/data/projetos.json)

Antes:

```json
{
  "projetos": [
    {
      "id": "1",
      "tipo": "extensão",
      "link": "",
      "titulo": "Projeto teste",
      "status": "Em andamento",
      "descricao": "Produzir vídeos curtos com especialistas para disseminar conhecimento e incentivar a busca por ajuda, além de oferecer atividades relaxantes para o corpo e mente.",
      "expandido": "Organizar vídeos no Instagram e redes sociais para abordar problemas que afetam estudantes e as comunidades interna e externa do IFSP, contribuindo para seu aprendizado e bem-estar. Além disso, oferecer oficinas de relaxamento para promover a socialização e o entretenimento, ajudando os participantes a relaxar e focar em si mesmos, aliviando as pressões e preocupações diárias.",
      "tecnologias": ""
    },
    {
      "id": "2",
      "tipo": "pesquisa",
      "link": "",
      "titulo": "Novo Projeto",
      "status": "Planejado",
      "descricao": "Descrição do novo projeto.",
      "expandido": "Mais detalhes sobre o novo projeto.",
      "tecnologias": ""
    }
  ]
}
```

Depois:

```json
{
  "projetos": [
    {
      "id": "1",
      "tipo": "extensão",
      "link": "",
      "titulo": "Projeto teste",
      "status": "Em andamento",
      "descricao": "Produzir vídeos curtos com especialistas para disseminar conhecimento e incentivar a busca por ajuda, além de oferecer atividades relaxantes para o corpo e mente.",
      "expandido": "Organizar vídeos no Instagram e redes sociais para abordar problemas que afetam estudantes e as comunidades interna e externa do IFSP, contribuindo para seu aprendizado e bem-estar. Além disso, oferecer oficinas de relaxamento para promover a socialização e o entretenimento, ajudando os participantes a relaxar e focar em si mesmos, aliviando as pressões e preocupações diárias.",
      "tecnologias": ""
    }
  ]
}
```

#### [Integrantes.JSON](https://github.com/pet-ads/homepage-pet-qui/blob/main/public/data/integrantes.json)

##### Atributos do objeto "Aluno":

Antes:

```json
{
  "aluno": [
    {
      "id": "1",
      "nome": "Aluno1",
      "foto": "./images/fotos_alunos/aluno1.jpeg",
      "tipo": "Voluntária",
      "ano": "2024",
      "github": "https://github.com",
      "linkedin": "https://www.linkedin.com"
    },
    {
      "id": "2",
      "nome": "Aluno2",
      "foto": "./images/fotos_alunos/aluno2.jpeg",
      "tipo": "Voluntária",
      "ano": "2024",
      "github": "https://github.com",
      "linkedin": "https://www.linkedin.com"
    }
  ]
}
```

Depois:

```json
{
  "aluno": [
    {
      "id": "1",
      "nome": "Aluno1",
      "foto": "./images/fotos_alunos/aluno1.jpeg",
      "tipo": "Voluntária",
      "ano": "2024",
      "github": "https://github.com",
      "linkedin": "https://www.linkedin.com"
    }
  ]
}
```

##### Atributos do objeto "exaluno":

Antes:

```json
{
  "exAlunos": [
    {
      "id": "1",
      "nome": "Aluno1",
      "foto": "./images/fotos_alunos/Aluno1.jpeg",
      "linkedin": "https://www.linkedin.com"
    },
    {
      "id": "2",
      "nome": "Aluno2",
      "foto": "./images/fotos_alunos/Aluno2.jpeg",
      "linkedin": "https://www.linkedin.com"
    }
  ]
}
```

Depois:

```json
{
  "exAlunos": [
    {
      "id": "1",
      "nome": "Aluno1",
      "foto": "./images/fotos_alunos/Aluno1.jpeg",
      "linkedin": "https://www.linkedin.com"
    }
  ]
}
```

##### Atributos do objeto "tutores":

Antes:

```json
{
  "tutores": [
    {
      "id": "1",
      "nomeTutor": "Tutor1",
      "tipo": "Tutor",
      "foto": "./images/fotos_tutores/Tutor1.jpg",
      "ano": "2021",
      "github": "https://github.com",
      "linkedin": "https://www.linkedin.com"
    },
    {
      "id": "2",
      "nomeTutor": "Tutor2",
      "tipo": "Tutor",
      "foto": "./images/fotos_tutores/Tutor2.jpg",
      "ano": "2024",
      "github": "https://github.com",
      "linkedin": "https://www.linkedin.com"
    }
  ]
}
```

Depois:

```json
{
  "tutores": [
    {
      "id": "1",
      "nomeTutor": "Tutor1",
      "tipo": "Tutor",
      "foto": "./images/fotos_tutores/Tutor1.jpg",
      "ano": "2021",
      "github": "https://github.com",
      "linkedin": "https://www.linkedin.com"
    }
  ]
}
```

##### Atributos do objeto "extutores":

Antes:

```json
{
  "exTutores": [
    {
      "id": "1",
      "nomeTutor": "Tutor1",
      "foto": "./images/fotos_tutores/Tutor1.jpg",
      "ano": "2021",
      "github": "https://github.com",
      "linkedin": "https://www.linkedin.com"
    },
    {
      "id": "2",
      "nomeTutor": "Tutor2",
      "foto": "./images/fotos_tutores/Tutor2.jpg",
      "ano": "2024",
      "github": "https://github.com",
      "linkedin": "https://www.linkedin.com"
    }
  ]
}
```

Depois:

```json
{
  "exTutores": [
    {
      "id": "1",
      "nomeTutor": "Tutor1",
      "foto": "./images/fotos_tutores/Tutor1.jpg",
      "ano": "2021",
      "github": "https://github.com",
      "linkedin": "https://www.linkedin.com"
    }
  ]
}
```

#### [FAQ.JSON](https://github.com/pet-ads/homepage-pet-qui/blob/main/public/data/faq.json)

Antes:

```json
{
  "faqs": [
    {
      "id": "1",
      "trigger": "O que é o PetQuímica?",
      "resposta": "O PET, Programa de Educação Tutorial, visa desenvolver atividades e projetos de ensino e pesquisa que sejam relacionados à química sob a tutoria de um docente."
    },
    {
      "id": "2",
      "trigger": "Quais são as responsabilidades de um petiano?",
      "resposta": "Os membros devem dedicar-se integralmente às atividades acadêmicas do grupo, além de suas atividades acadêmicas regulares. As atividades do grupo são definidas em conjunto com o tutor, e podem incluir o desenvolvimento de planos de estudos, a criação de atividades de extensão com membros da comunidade acadêmica, desenvolvimento de projetos de pesquisa, a implementação de projetos internos ao PET, entre outras."
    }
  ]
}
```

Depois:

```json
{
  "faqs": [
    {
      "id": "1",
      "trigger": "O que é o PetQuímica?",
      "resposta": "O PET, Programa de Educação Tutorial, visa desenvolver atividades e projetos de ensino e pesquisa que sejam relacionados à química sob a tutoria de um docente."
    }
  ]
}
```

### 5. Commit das Alterações

- Após fazer as modificações (adicionar, alterar ou excluir um elemento no arquivo JSON), vá até a seção chamada "**Commit changes**".
- Adicione uma mensagem descritiva para o commit, como **"Atualiza valores das chaves no arquivo JSON"**. Os projetos seguem a notação de Conventional Commits, que de modo simples segue a estrutura: `<tipo>(escopo): <descrição>. Exemplo: chore: Atualização de dados dos ex-alunos. `
- Selecione a nova branch (por exemplo, `update-json-values`) como destino do commit.
- Clique no botão "**Commit changes**" para salvar as alterações.

### 6. Criar um Pull Request

- Depois de confirmar as alterações, deve-se criar um pull request para solicitar que as mudanças sejam integradas ao repositório original.
- Navegue até a página de Pull Requests do repositório bifurcado e clique no botão **"New pull request"**.
- Selecione a branch com as mudanças (por exemplo, `update-json-values`) e clique em **"Create pull request"**.
- Adicione uma descrição e clique em **"Create pull request"** novamente para finalizar.

### 7. Revisar e Mergear o Pull Request

- A equipe responsável pelo repositório original pode revisar o pull request e, se aprovado, mesclar as alterações na branch principal do repositório original.

# Como rodar o projeto

### 1. Clonando o Repositório:

- Primeiro, clone o repositório para sua máquina local:

```bash
git clone https://github.com/pet-ads/homepage-pet-qui.git
cd homepage-pet-qui
```

### 2. Instalando Dependências:

- Após acessar o diretório do projeto, instale o gerenciador de pacotes Yarn ou Npm e todas as dependências necessárias:

```bash
yarn install
```

```bash
npm install
```

### 3. Iniciando o Projeto:

- Para iniciar o servidor de desenvolvimento, execute o comando yarn start ou npm start:

```bash
yarn start
```

```bash
npm start
```

## Boas práticas:

- Sempre que realizar um git clone ou git pull, execute o comando yarn install ou npm install para garantir que todas as dependências estejam atualizadas.

```bash
yarn install
```

```bash
npm install
```

- Antes de enviar suas alterações para o repositório remoto, certifique-se de construir o projeto utilizando o comando:

```bash
yarn build
```

```bash
npm build
```

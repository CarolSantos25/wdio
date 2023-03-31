## WDIO
# Organização de pastas
- pasta pageobjects
    - todo arquivo criado deve receber a extenção <nome_do_arquino>.page.js
    - arquivos contem as fuções da automação

- pasta specs
    - pasta responsável por conter os testes 
    - arquivos sempre criados com a extenção <nome_do_arquivo>.e2e.js     

# Comandos
- Rodar o projeto
    - npm run wdio (terminal)

## Comando Git
- Iniciar Git (OBS.: Só é usado uma vez para iniciar a subida do código.)
    - git init
- Adicionar arquivos
    - git add .
- Comentar commit
    - git commit -m '<nome_do_commit>'
- Subir código para o Git (PUSH)
    - git push 
    - OBS.: Caso o projeto só tenha uma Branch(ambiente), só é preciso o push
    - caso o projeto tenha mais de uma Branch 
        - git push origin <nome_da_branch>                 
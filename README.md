### Passos após clonar o repositório.

### Comando para importar o Swagger para o projeto
cds import RESTAPI_CEP_Swagger.json --as cds

### Criar a estrutura do serviço usando Joule use o prompt
/cap-gen-model Create a simple address data model. fields will be Postal Code Numeric with Length 8, Street, Province, State and Region, all of which should be of type string.Additionally, define the necessary validations and constraints for each field to ensure data integrity.

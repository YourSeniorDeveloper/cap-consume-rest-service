### Passos após clonar o repositório.

### Comando para importar o Swagger para o projeto
cds import RESTAPI_CEP_Swagger.json --as cds

### Criar a estrutura do serviço usando Joule use o prompt
/cap-gen-model Create a simple address data model. fields will be Postal Code Numeric with Length 8, Street, Province, State and Region, all of which should be of type string.Additionally, define the necessary validations and constraints for each field to ensure data integrity.

### Adicionar o action para preenchimento do endereço no serviço

action updateEndereco(postalCode: String(8)) returns Addresses;

### Criar a destination para criar o serviço

### Adicionar os parametros no package.json

    "OpenCEP.API": {
    "kind": "rest",
    "model": "srv/external/RESTAPI_CEP_Swagger",
    "[production]": {
        "credentials": {
        "destination": "OpenCEP"
        }
    },
    "[hybrid]": {
        "credentials": {
        "destination": "OpenCEP"
        }
    }
    }

### Habilitar os servicos para consumir o destination
cf login --sso
cf create-service xsuaa application cap_rest_service-xsuaa
cf create-service-key cap_rest_service-xsuaa cap_rest_service-xsuaa-key
cf create-service destination lite cap_rest_service-destination
cf create-service-key cap_rest_service-destination cap_rest_service-destination-key
cds bind -2 cap_rest_service-xsuaa,cap_rest_service-destination

### Adicionar o serviço no .cdsrc-private.json
      "OpenCEP.API": {
        "kind": "rest",
        "model": "srv/external/RESTAPI_CEP_Swagger",
        "credentials": {
          "destination": "OpenCEP"
        }
      }

### Adicionar a configuração de Launch do App
"args": [
        "watch",
        "--profile",
        "hybrid"
      ],

### Lógica para conectar no serviço

	const openCEPAPI = await cds.connect.to("OpenCEP.API");

	let res = openCEPAPI.tx(request).get(`/v1/15050305`);

        let final_data =
        res.then( async (data) => {
            return data;
         });
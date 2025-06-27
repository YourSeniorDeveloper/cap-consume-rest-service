### Passos após clonar o repositório.

### Comando para importar o Swagger para o projeto
cds import RESTAPI_CEP_Swagger.json --as cds

### Criar a estrutura do serviço usando Joule use o prompt
/cap-gen-model Create a simple address data model. fields will be Postal Code Numeric with Length 8, Street, Province, State and Region, all of which should be of type string.Additionally, define the necessary validations and constraints for each field to ensure data integrity.

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


### Lógica para conectar no serviço
const weatherAPI = await cds.connect.to("weatherservice");
        // Using template literals
        let res = weatherAPI.tx(req).get(`/data/2.5/weather?units=metric&appid=<ApiID>&lat=${results[0].latitude}&lon=${results[0].longitude}`);

        let final_data =
        res.then( async (data) => {
            let results1 = await db.update(Location).set({temperature: data.main.temp}).where({city:city});
            return data.main.temp;
         });
        
        return final_data;

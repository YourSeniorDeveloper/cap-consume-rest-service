/* checksum : 3ab2532dbd144b7bcf72ae748543fde8 */
@Capabilities.BatchSupported : false
@Capabilities.KeyAsSegmentSupported : true
@Core.Description : 'OpenCEP API'
@Core.SchemaVersion : '1.0.0'
@Core.LongDescription : 'API para consulta de informações de um CEP brasileiro.'
service OpenCEP.API {};

@Core.Description : 'Consulta informações de um CEP'
@openapi.path : '/{cep}'
function OpenCEP.API._(
  @description : 'CEP no formato 00000-000 ou apenas números (ex: 15050305)'
  @openapi.in : 'path'
  cep : String
) returns {
  @Core.Example.$Type : 'Core.PrimitiveExampleValue'
  @Core.Example.Value : '15050-305'
  cep : String;
  @Core.Example.$Type : 'Core.PrimitiveExampleValue'
  @Core.Example.Value : 'Rua Josina Teixeira de Carvalho'
  logradouro : String;
  complemento : String;
  unidade : String;
  @Core.Example.$Type : 'Core.PrimitiveExampleValue'
  @Core.Example.Value : 'Vila Anchieta'
  bairro : String;
  @Core.Example.$Type : 'Core.PrimitiveExampleValue'
  @Core.Example.Value : 'São José do Rio Preto'
  localidade : String;
  @Core.Example.$Type : 'Core.PrimitiveExampleValue'
  @Core.Example.Value : 'SP'
  uf : String;
  @Core.Example.$Type : 'Core.PrimitiveExampleValue'
  @Core.Example.Value : 'São Paulo'
  estado : String;
  @Core.Example.$Type : 'Core.PrimitiveExampleValue'
  @Core.Example.Value : 'Sudeste'
  regiao : String;
  @Core.Example.$Type : 'Core.PrimitiveExampleValue'
  @Core.Example.Value : '3549805'
  ibge : String;
};


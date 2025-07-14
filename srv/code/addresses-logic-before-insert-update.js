/**
 * 
 * @Before(event = { "CREATE","UPDATE" }, entity = "cap_rest_serviceSrv.Addresses")
 * @param {cds.Request} request - User information, tenant-specific CDS model, headers and query parameters
*/
module.exports = async function(request) {

	try {
		let registroID = request.data.ID;
		let registroPostalCode = request.data.postalCode;
		if ( registroID == undefined || registroPostalCode == undefined ){
			return;
		}
		const openCEPAPI = await cds.connect.to("OpenCEP.API");

		let results = await openCEPAPI.tx(request).get(`/v1/` + registroPostalCode);
		request.data.street = results.logradouro;
		request.data.province = results.bairro;
		request.data.state = results.localidade;
		request.data.region = results.uf;
		console.log(results);
	
	} catch (error) {
		console.log("Erro" + error.message);
		request.error(error)
	}	

}
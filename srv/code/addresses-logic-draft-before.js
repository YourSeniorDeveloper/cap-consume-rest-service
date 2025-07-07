/**
 * 
 * @Before(event = { "UPDATE","CREATE" }, entity = "cap_rest_serviceSrv.Addresses")
 * @param {cds.Request} request - User information, tenant-specific CDS model, headers and query parameters
*/
module.exports = async function(request) {
	// Your code here

	try {
		let registroID = request.data.ID;
		let registroPostalCode = request.data.postalCode;
		if ( registroID == undefined || registroPostalCode == undefined ){
			return next();
		}
		const openCEPAPI = await cds.connect.to("OpenCEP.API");

		let results = await openCEPAPI.tx(request).get(`/v1/` + registroPostalCode);
		request.data.street = results.logradouro;
		console.log(results);
	
	} catch (error) {
		console.log("Erro" + error);
		request.error("Teste")
	}


}
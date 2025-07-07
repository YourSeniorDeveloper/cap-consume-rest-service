/**
 * 
 * @After(event = { "UPDATE","CREATE" }, entity = "cap_rest_serviceSrv.Addresses")
 * @param {(Object|Object[])} results - For the After phase only: the results of the event processing
 * @param {cds.Request} request - User information, tenant-specific CDS model, headers and query parameters
*/
module.exports = async function(results, request) {

	/*
	try {
		let registroID = request.data.ID;
		let registroPostalCode = request.data.postalCode;
		if ( registroID == undefined || registroPostalCode == undefined ){
			return next();
		}
		const openCEPAPI = await cds.connect.to("OpenCEP.API");

		let api_results = await openCEPAPI.tx(request).get(`/v1/` + registroPostalCode);
		//request.data.street = results.logradouro;
		//console.log(results);
	
	} catch (error) {
		console.log("Erro" + error);
	}
	*/
	// Your code here
}
/**
 * 
 * @On(event = { "CREATE","UPDATE" }, entity = "cap_rest_serviceSrv.Addresses")
 * @param {cds.Request} request - User information, tenant-specific CDS model, headers and query parameters
 * @param {Function} next - Callback function to the next handler
*/
module.exports = async function(request, next) {
	// Your code here
	/*
	const db = await cds.connect.to ('db');
    let {Addresses} = db.entities;

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
	}
	*/
	
	return next();
}
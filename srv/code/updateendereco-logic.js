/**
 * 
 * @On(event = { "updateEndereco" })
 * @param {cds.Request} request - User information, tenant-specific CDS model, headers and query parameters
*/
module.exports = async function(request) {
	const db = await cds.connect.to ('db');
    let {Addresses} = db.entities;

	const openCEPAPI = await cds.connect.to("OpenCEP.API");

	let res = openCEPAPI.tx(request).get(`/v1/15050305`);

	let final_data =
	res.then( async (data) => {
		let results1 = await db.update(Addresses).set({street: data.logradouro}).where({postalCode:postalCode});
		
		return data;
	});	

	/*
  postalCode: String(8);
  street: String(100);
  province: String(50);
  state: String(50);
  region: String(50);
	*/

	




}
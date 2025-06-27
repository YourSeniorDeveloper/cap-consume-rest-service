using { cap_rest_service as my } from '../db/schema.cds';

@path: '/service/cap_rest_service'
@requires: 'authenticated-user'
service cap_rest_serviceSrv {
  @odata.draft.enabled
  entity Addresses as projection on my.Addresses;

  action updateEndereco(postalCode: String(8)) returns Addresses;

}
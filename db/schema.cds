namespace cap_rest_service;
using { cuid } from '@sap/cds/common';

entity Addresses : cuid {
  @mandatory
  postalCode: String(8);
  street: String(100);
  province: String(50);
  state: String(50);
  region: String(50);
}


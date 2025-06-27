using { cap_rest_serviceSrv } from '../srv/service.cds';

annotate cap_rest_serviceSrv.Addresses with @UI.HeaderInfo: { TypeName: 'Address', TypeNamePlural: 'Addresses' };
annotate cap_rest_serviceSrv.Addresses with @UI.DataPoint #postalCode: {
  Value: postalCode,
  Title: 'Postal Code',
};
annotate cap_rest_serviceSrv.Addresses with @UI.DataPoint #street: {
  Value: street,
  Title: 'Street',
};
annotate cap_rest_serviceSrv.Addresses with {
  postalCode @title: 'Postal Code';
  street @title: 'Street';
  province @title: 'Province';
  state @title: 'State';
  region @title: 'Region'
};

annotate cap_rest_serviceSrv.Addresses with @UI.LineItem: [
 { $Type: 'UI.DataField', Value: postalCode },
 { $Type: 'UI.DataField', Value: street },
 { $Type: 'UI.DataField', Value: province },
 { $Type: 'UI.DataField', Value: state },
 { $Type: 'UI.DataField', Value: region }
];

annotate cap_rest_serviceSrv.Addresses with @UI.FieldGroup #Main: {
  $Type: 'UI.FieldGroupType', Data: [
 { $Type: 'UI.DataField', Value: postalCode },
 { $Type: 'UI.DataField', Value: street },
 { $Type: 'UI.DataField', Value: province },
 { $Type: 'UI.DataField', Value: state },
 { $Type: 'UI.DataField', Value: region }
  ]
};

annotate cap_rest_serviceSrv.Addresses with @UI.HeaderFacets: [
 { $Type : 'UI.ReferenceFacet', Target : '@UI.DataPoint#postalCode' },
 { $Type : 'UI.ReferenceFacet', Target : '@UI.DataPoint#street' }
];

annotate cap_rest_serviceSrv.Addresses with @UI.Facets: [
  { $Type: 'UI.ReferenceFacet', ID: 'Main', Label: 'General Information', Target: '@UI.FieldGroup#Main' }
];


using cap_rest_serviceSrv as service from '../../srv/service';

annotate service.Addresses with {
    province @Common.FieldControl : #ReadOnly
};

annotate service.Addresses with {
    state @Common.FieldControl : #ReadOnly
};

annotate service.Addresses with {
    region @Common.FieldControl : #ReadOnly
};

annotate service.Addresses with {
    street @Common.FieldControl : #ReadOnly
};


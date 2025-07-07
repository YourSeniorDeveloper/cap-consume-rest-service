sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'caprestservice/myaddressapp/test/integration/FirstJourney',
		'caprestservice/myaddressapp/test/integration/pages/AddressesList',
		'caprestservice/myaddressapp/test/integration/pages/AddressesObjectPage'
    ],
    function(JourneyRunner, opaJourney, AddressesList, AddressesObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('caprestservice/myaddressapp') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheAddressesList: AddressesList,
					onTheAddressesObjectPage: AddressesObjectPage
                }
            },
            opaJourney.run
        );
    }
);
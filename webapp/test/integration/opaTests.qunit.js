sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'mdgcountry/mdgcountryui/test/integration/FirstJourney',
		'mdgcountry/mdgcountryui/test/integration/pages/CountryList',
		'mdgcountry/mdgcountryui/test/integration/pages/CountryObjectPage',
		'mdgcountry/mdgcountryui/test/integration/pages/CountryTextObjectPage'
    ],
    function(JourneyRunner, opaJourney, CountryList, CountryObjectPage, CountryTextObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('mdgcountry/mdgcountryui') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheCountryList: CountryList,
					onTheCountryObjectPage: CountryObjectPage,
					onTheCountryTextObjectPage: CountryTextObjectPage
                }
            },
            opaJourney.run
        );
    }
);
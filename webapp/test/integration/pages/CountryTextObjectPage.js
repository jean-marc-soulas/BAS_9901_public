sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'mdgcountry.mdgcountryui',
            componentId: 'CountryTextObjectPage',
            contextPath: '/Country/_CountryText'
        },
        CustomPageDefinitions
    );
});
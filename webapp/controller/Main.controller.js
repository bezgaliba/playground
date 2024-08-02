sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "playground/model/myICS"
], function (Controller, JSONModel, myICS) {
    "use strict";

    return Controller.extend("playground.controller.Main", {
        onInit: function () {
            var oModel = new JSONModel(myICS.data);
            this.getView().setModel(oModel, "myICS");
        },

        onAfterRendering: function () {
            var oTreeTable = this.byId("TreeTable");
            for (var i = 0; i < oTreeTable.getRows().length; i++) {
                oTreeTable.expandToLevel(i);
            }
        }
    });
});
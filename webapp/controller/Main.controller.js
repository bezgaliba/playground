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
        }
    });
});
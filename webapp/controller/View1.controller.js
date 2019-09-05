sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("ovly.two-way.controller.View1", {
		onInit: function () {
			var oModelo = new sap.ui.model.json.JSONModel({
				nome: "Fabio",
				sobrenome: "Pagoti"
			});
			this.getView().setModel(oModelo);
			
			window._oModelo = oModelo;
			
		}
	});
});



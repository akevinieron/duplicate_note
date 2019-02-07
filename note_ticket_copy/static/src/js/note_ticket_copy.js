odoo.define('pos_print_note_ticket', function (require) {
    var models = require('point_of_sale.models');

    models.Order = models.Order.extend({
        printChanges: function(){
            this._super();
            var printers = this.pos.printers;
            for(var i = 0; i < printers.length; i++){
                var changes = this.computeChanges(printers[i].config.product_categories_ids);
                if ( changes['new'].length > 0 || changes['cancelled'].length > 0){
                    var receipt = QWeb.render('OrderChangeReceiptCopy',{changes:changes, widget:this});
                    printers[i].print(receipt);
                }
            }
        }
    });
});

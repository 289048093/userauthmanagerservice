/**
 * Created by king on 13-12-23
 */

Ext.define('Supplier.view.win.AddGoodWin', {
    extend: 'Ext.window.Window',
    alias: 'widget.addGood',
    title: '增加商品',
    collapsible: true,
    closeAction: 'destroy',
    id: 'addGoodWin',
    autoShow: false,
    modal: true,
    layout: 'border',
    width: 900,
    height: 450,
    initComponent: function () {
        this.items = [
            {xtype: 'goodList'},
            {xtype: 'goodCart'}
        ];
        this.buttons = {
            layout: {
                pack: 'center'
            },
            items: [
                {text: '确定', itemId: 'submit'},
                {text: '重置', itemId: 'cancel'}
            ]
        };
        this.callParent(arguments);
    }
})
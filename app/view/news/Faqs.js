Ext.define('WireFrameTwo.view.news.Faqs', {
    extend: 'Ext.Panel',
    xtype: 'faqs',
    requires: ['WireFrameTwo.view.ToolBar','Ext.Button','Ext.dataview.List',
  'WireFrameTwo.store.FaqStore'],
    config: {
      layout: 'fit',
        items: [
            {
                xtype : 'toolbarmenu',
                title : 'Home',
                items : [
                  {
                    xtype : 'button',
                    text : 'Main',
                    action : 'toFeeds',
                    ui : 'back'
                  }
                ]
            },{
              xtype : 'list',
              height : '100%',
              itemTpl: '<h5>{question}</h5><p>{answer}</p>',
              styleHtmlContent : true,
              store : {
                  type : 'faqStore'
              },
              disableSelection : true
            }
        ]
    },
    initialize : function(){
        console.log('faq view created');
    }
});

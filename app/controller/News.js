Ext.define('WireFrameTwo.controller.News',{
    extend : 'Ext.app.Controller',
    config : {
        views : ['WireFrameTwo.view.news.FeedsPage',
        'WireFrameTwo.view.news.mediaGallery','WireFrameTwo.view.news.Faqs',
      'WireFrameTwo.view.news.DietPlanner'],
        refs : {
            //views
            mediaGallery : 'mediaGallery',
            feedsHome : 'feedsHome',
            faqs : 'faqs',
            dietPlanner : 'dietPlanner',
            //content

            //buttons
            backToFeeds : 'toolbarmenu button[action="toFeeds"]',

            //feeds list page
            feedTopic1 : 'feedsHome panel',
            feedTopic23 : 'feedsHome panel panel'
        },

        control : {
          backToFeeds : {
            tap : 'onBackButtonTap'
          },
            feedTopic1 : {
              onGalleryClick : 'onGalleryTap'
            },
            feedTopic23 : {
              onFaqClick : 'onFaqTap',
              onPlannerClick : 'onPlannerTap'
            }

        }
    },
    onBackButtonTap : function(){
      console.log("go back to Main");
      var FeedsHome = this.getFeedsHome();
      Ext.Viewport.animateActiveItem(FeedsHome,{
          type : 'slide',
          direction : 'right'
      });
    },
    onPlannerTap : function(){
      console.log("planner tapped");
      Ext.Viewport.add(Ext.create('WireFrameTwo.view.news.DietPlanner'));
      var dietPlannerView = this.getDietPlanner();

      Ext.Viewport.animateActiveItem(dietPlannerView,{
        type : 'slide',
        direction : 'left'
      });
    },

    onFaqTap : function(e){
      console.log("FAQ tapped");
      Ext.Viewport.add(Ext.create('WireFrameTwo.view.news.Faqs'));
      var faqView = this.getFaqs();

      Ext.Viewport.animateActiveItem(faqView,{
        type : 'slide',
        direction : 'left'
      });
    },

    onGalleryTap : function(){
      console.log("gallery tapped");
      Ext.Viewport.add(Ext.create('WireFrameTwo.view.news.mediaGallery'));
      var MediaGallery = this.getMediaGallery();
      Ext.Viewport.animateActiveItem(MediaGallery,{
          type : 'slide',
          direction : 'left'
      });
    }
})

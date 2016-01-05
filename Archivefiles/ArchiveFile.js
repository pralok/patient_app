Ext.define('WireFrameTwo.controller.News',{
    extend : 'Ext.app.Controller',
    config : {
        views : ['WireFrameTwo.view.news.newslist','WireFrameTwo.view.news.newsdetails',
      'WireFrameTwo.view.news.FeedsPage','WireFrameTwo.view.news.mediaGallery'],
        refs : {
            //views
            detailView : 'detailnews',
            listView : 'newslist',
            mediaGallery : 'mediaGallery',

            //content
            detailContent : 'detailnews panel',
            //buttons
            newslist : 'newslist list',
            backToList : 'detailnews toolbar button[ui="back"]',

            //feeds list page
            feedTopic1 : 'feedsHome panel',
            feedTopic23 : 'feedsHome panel panel'
        },

        control : {
            newslist : {
                itemtap : 'onNewsListTap'
            },
            backToList : {
                tap : 'backToList'
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
    onPlannerTap : function(){
      console.log("planner tapped");
    },

    onFaqTap : function(e){
      console.log("FAQ tapped");
    },

    onGalleryTap : function(){
      console.log("gallery tapped");

      Ext.Viewport.add(Ext.create('WireFrameTwo.view.news.mediaGallery'));

      var MediaGallery = this.getMediaGallery();
      Ext.Viewport.animateActiveItem(MediaGallery,{
          type : 'slide',
          direction : 'left'
      });

    },

    DetailsViewGenerate : function(){
        Ext.Viewport.add(Ext.create('WireFrameTwo.view.news.newsdetails'));
    },

    onNewsListTap : function(btn,index,target,record){
        this.DetailsViewGenerate();
        var content = record.get('content');
        var DetailsPage = this.getDetailView();
        var DetailsContent = this.getDetailContent();//DetailView();
        DetailsContent.setHtml('<div class="detail-image"><img src="resources/startup/320x460.jpg"></div>' + content );
        Ext.Viewport.animateActiveItem(DetailsPage,{
            type : 'slide',
            direction : 'left'
        });
    },
    backToList : function(){
        var NewsList = this.getListView();
        Ext.Viewport.animateActiveItem(NewsList,{
            type : 'slide',
            direction : 'right'
        });
    }
})

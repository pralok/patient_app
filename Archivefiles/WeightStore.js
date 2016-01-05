Ext.define('WireFrameTwo.store.WeightStore',{
    extend : 'Ext.data.Store',
    requires : ['WireFrameTwo.model.WeightModel'],
    alias : 'store.WeightStore',
    config : {
        storeId : 'WeightStore',
        model : 'WireFrameTwo.model.WeightModel',
//        filters : { property : "type", value : "type1"},
        autoLoad : true
    }
})

//      <activity android:configChanges="orientation|keyboardHidden|keyboard|screenSize|locale" android:label="@string/activity_name" android:launchMode="singleTop" android:name="MainActivity" android:theme="@android:style/Theme.Black.NoTitleBar" android:windowSoftInputMode="adjustResize">

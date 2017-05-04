Ext.define('tallySys.store.Expense', {  
  extend : 'Ext.data.Store',  
  xtype : 'expense',  
  fields : [ 'cat', 'spent' ],  
  data : [ {  
    "cat" : "衣物",  
    "spent" : 100  
  }, {  
    "cat" : "食品",  
    "spent" : 150  
  }, {  
    "cat" : "居住",  
    "spent" : 500  
  }, {  
    "cat" : "出行",  
    "spent" : 1000  
  }, {  
    "cat" : "人情",  
    "spent" : 400  
  }, {  
    "cat" : "其它",  
    "spent" : 300  
  } ]  
});  
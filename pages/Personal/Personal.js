var app = getApp()
Page({

  onLoad: function () {
    var nowDate = new Date();

    var year = nowDate.getFullYear(), month = nowDate.getMonth() + 1
    
    this.setData({

      "date": `${year}-${month}`
       
    })

  },

  bindDateChange: function (e) {
 
   
    this.setData({
      date: e.detail.value
    })
  },

  add(){
    this.setData({
     display:"flex",
     dis:"none"
    })
  },

  close() {
    this.setData({
     display:"none",
      dis: "flex",
    
    })
  },

data:{

lists:[{
  top:"100",
  primary: "支出",
  typeprimary: "服饰",
  date: "2020-02",
  shuru: "100",
}]

 
},

  expend:function(e){
  
      this.setData({
        primary: e.currentTarget.dataset.id,
        
      })    
  },
  income: function (e){

      this.setData({
        primary: e.currentTarget.dataset.id,
       
      })  
  },
  typ1: function (e) {
    this.setData({
      typeprimary: e.currentTarget.dataset.id,
     
    })
  },
  typ2: function (e) {
    this.setData({
      typeprimary: e.currentTarget.dataset.id,
      
    })
  },
  typ3: function (e) {
    this.setData({
      typeprimary: e.currentTarget.dataset.id,
     
    })
  },
  typ4: function (e) {
    this.setData({
      typeprimary: e.currentTarget.dataset.id,
    
    })
  }
  ,
  typ5: function (e) {
    this.setData({
      typeprimary: e.currentTarget.dataset.id,
      
    })
  }
  ,
  typ6: function (e) {
    this.setData({
      typeprimary: e.currentTarget.dataset.id,

    })
  },

  inp:function(e){
    this.setData({
      shuru: e.detail.value     
    })
  
  
  },

  tianjia:function(e){
    
   app.globalData.index++

    console.log(app.globalData.index)
    var topp = this.data.lists[app.globalData.index].top
    topp = topp-100+190
    console.log(topp)
    var lists = this.data.lists;
    var newData = {
     "top":topp,
      "primary": this.data.primary,
      "typeprimary": this.data.typeprimary,
      "date": this.data.date,
      "shuru": this.data.shuru
    };


    lists.push(newData);
    this.setData({
      lists: lists,
  
    })

    

    // console.log(this.data.date)
    // console.log(this.data.primary)
    // console.log(this.data.shuru)
    // console.log(this.data.typeprimary)

    

}
})
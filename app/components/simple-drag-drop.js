import Ember from 'ember';

export default Ember.Component.extend({
	colArray:[],
	rowArray:[],
	keyList: Ember.A([]),
  	columnKeyList:Ember.A([{'title':'Drag Field Here','value':''}]),
  	rowKeyList:Ember.A([{'title':'Drag Field Here','value':''}]),
	didInsertElement(){

	},
	didUpdateAttrs(){
		this._super(...arguments);
	},
	didReceiveAttrs(){
		this._super(...arguments);
		this.set('keyList',Ember.A(this.get('jsonKeys')));
		this.notifyPropertyChange('keyList');
	},
	sendNotification:function(){
      	let keyList=this.get('keyList');
    	let columnKeyList=this.get('columnKeyList');
    	let rowKeyList=this.get('rowKeyList');
      	let colArray=[];
      	let rowArray=[];
      	for(let i=0;i<columnKeyList.length;i++){
      		if(columnKeyList[i].value!=''){
      			colArray.push(columnKeyList[i].value);
      		}
      	}
      	for(let i=0;i<rowKeyList.length;i++){
      		if(rowKeyList[i].value!=''){
      			rowArray.push(rowKeyList[i].value);
      		}
      	}
      	console.info('STEP-2',{colArray:colArray,rowArray:rowArray});
      	this.sendAction('keysChanged',{colArray:colArray,rowArray:rowArray});
  	},
	actions:{
		// dragResultForRows: function(obj,ops) {
	 //      	const row=obj;
		// 	let rowArray=this.get('rowArray');
		// 	if(rowArray.indexOf(row['title'])<0){
		// 		rowArray.push(row['title']);
		//       	this.set('rowArray',rowArray);
		//       	this.notifyPropertyChange('rowArray');
		//       	this.sendAction('rowChanged',rowArray);
		// 	}
	 //    },
	 //    dragResultForCols: function(obj,ops) {
	 //      	const col=obj;
		// 	let colArray=this.get('colArray');
		// 	if(colArray.indexOf(col['title'])<0){
		// 		colArray.push(col['title']);
		//       	this.set('colArray',colArray);
		//       	this.notifyPropertyChange('colArray');
		//       	this.sendAction('colChanged',colArray);
		// 	}
	 //    },
	 //    dragStart: function() {
	      
	 //    },
	 //    dragEnd: function() {
	      
	 //    },
	 //    draggingOverTarget: function() {
	      
	 //    },
	 //    leftDragTarget: function() {
	      
	 //    },
	    
	    sortEndAction:function(){
	    	console.info('Step-1: Main',this.get('keyList'));
	    	this.sendNotification();
	  	},
	    sortEndActionForCol: function() {			
	    	console.info('Step-1: Col',this.get('columnKeyList'));
	    	this.sendNotification();
	    },
	    sortEndActionForRow: function() {
	    	console.info('Step-1: Row',this.get('rowKeyList'));
	    	this.sendNotification();
	    }
	}
});

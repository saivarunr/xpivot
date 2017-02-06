import Ember from 'ember';

export default Ember.Component.extend({
	jsonArray:[],
	jsonKeys:[],
	rows:[],
	cols:[],
	actions:{
		keysChanged:function(data){	
			this.set('rows',data['rowArray']);
			this.set('cols',data['colArray']);
			this.notifyPropertyChange('rows');
			this.notifyPropertyChange('cols');
			console.info('STEP-3: notify keys changed from x-pivot',data);
		}
	},
	didInsertElement(){
		const x  =  [
			{subject : 1, day : 1, value : 31.25, treatment : 'A' },
			{subject : 1, day : 2, value : 31.25, treatment : 'C' },
			{subject : 1, day : 3, value : 33.12, treatment : 'B' },
			{subject : 2, day : 1, value : 25.87, treatment : 'C' },
			{subject : 2, day : 2, value : 26.63, treatment : 'A' },
			{subject : 2, day : 3, value : 26.00, treatment : 'B' },
			{subject : 3, day : 1, value : 23.75, treatment : 'C' },
			{subject : 3, day : 2, value : 26.13, treatment : 'B' },
			{subject : 3, day : 3, value : 24.87, treatment : 'A' },
			{subject : 4, day : 1, value : 28.75, treatment : 'A' },
			{subject : 4, day : 2, value : 29.63, treatment : 'B' },
			{subject : 4, day : 3, value : 29.87, treatment : 'C' },
			{subject : 5, day : 1, value : 24.50, treatment : 'C' },
			{subject : 5, day : 2, value : 28.63, treatment : 'A' },
			{subject : 5, day : 3, value : 28.37, treatment : 'B' },
			{subject : 6, day : 1, value : 31.25, treatment : 'B' },
			{subject : 6, day : 2, value : 30.63, treatment : 'A' },
			{subject : 6, day : 3, value : 29.37, treatment : 'C' },
			{subject : 7, day : 1, value : 25.50, treatment : 'B' },
			{subject : 7, day : 2, value : 23.87, treatment : 'C' },
			{subject : 7, day : 3, value : 24.00, treatment : 'A' },
			{subject : 8, day : 1, value : 28.50, treatment : 'B' },
			{subject : 8, day : 2, value : 27.87, treatment : 'C' },
			{subject : 8, day : 3, value : 30.12, treatment : 'A' },
			{subject : 9, day : 1, value : 25.13, treatment : 'A' },
			{subject : 9, day : 2, value : 27.00, treatment : 'B' },
			{subject : 9, day : 3, value : 24.63, treatment : 'C' }
		];
		this.set('jsonArray',x);
		let keys=[];
		for(let i=0;i<x.length;i++){
			let _keys=Object.keys(x[i]);
			for(let j=0;j<_keys.length;j++){
				if(keys.indexOf(_keys[j])<0){
		  			keys.push(_keys[j]);
				}
			}
		}
		let finalJson=[];
		for(let i=0;i<keys.length;i++){
			finalJson.push({title:keys[i],value:keys[i]});
		}
		this.set('jsonKeys',finalJson);
	}
});

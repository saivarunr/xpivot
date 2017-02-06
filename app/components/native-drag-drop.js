import Ember from 'ember';

export default Ember.Component.extend({	
	keys:['subject','day','value','treatment'],
	jsonArray:[
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
		],
	mainKeysContainer:[],
	columnKeysContainer:[],
	rowKeysContainer:[],
	didInsertElement(){
		let _keys=this.get('keys');
		this.set('mainKeysContainer',_keys);
		this.notifyPropertyChange('mainKeysContainer');
	},
	updateModels(attribute,from,to){
		var _from=this.get(from);
		var _to=this.get(to);
		if(_to.indexOf(attribute)<0){
			_from.splice(_from.indexOf(attribute),1);
			_to.push(attribute);
			this.set(from,_from);
			this.set(to,_to);
			this.notifyPropertyChange(from);
			this.notifyPropertyChange(to);			
		}
	},
	actions:{
		dropOnMain:function(event){
			let from=event.dataTransfer.getData('from');
			if(from=='mainKeysContainer'){
				alert('Yet to work on it');
			}
			else{
				let pivotKey=event.dataTransfer.getData('x_PivotKey');
				this.updateModels(pivotKey,from,'mainKeysContainer');
			}
		},
		dropOnCol:function(event){
			let from=event.dataTransfer.getData('from');
			if(from=='columnKeysContainer'){
				
			}
			else{
				let pivotKey=event.dataTransfer.getData('x_PivotKey');
				this.updateModels(pivotKey,from,'columnKeysContainer');
			}
		},
		dropOnRow:function(event){
			let from=event.dataTransfer.getData('from');
			if(from=='rowKeysContainer'){
				alert('Yet to work on it');
			}
			else{
				let pivotKey=event.dataTransfer.getData('x_PivotKey');
				this.updateModels(pivotKey,from,'rowKeysContainer');
			}
		},
		allowDrop:function(event){
			event.preventDefault();
		},
		drag:function(event){
			let x_PivotKey=event.target.attributes.getNamedItem('x-pivotKey').value;
			let from=event.target.attributes.getNamedItem('from').value;
			event.dataTransfer.setData("x_PivotKey", x_PivotKey);
			event.dataTransfer.setData('from',from);
		},
		reorderColumn:function(itemModels,draggedModel){
			this.set('columnKeysContainer',itemModels);
			this.notifyPropertyChange('columnKeysContainer');
		},
		reorderRow:function(itemModels,draggedModel){
			this.set('rowKeysContainer',itemModels);
			this.notifyPropertyChange('rowKeysContainer');	
		}
	}
});

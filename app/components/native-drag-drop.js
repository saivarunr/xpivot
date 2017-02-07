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
		let _from=this.get(from);
		let _to=this.get(to);
		if(_to.indexOf(attribute)<0){
			_from.splice(_from.indexOf(attribute),1);
			_to.push(attribute);
			this.set(from,_from);
			this.set(to,_to);
			this.notifyPropertyChange(from);
			this.notifyPropertyChange(to);			
		}
	},
	pushCardAtPosition(targetCard,pivotKey,toModel,fromModel,order){
		let _toModel=this.get(toModel);
		let _fromModel=this.get(fromModel);
		_fromModel.splice(_fromModel.indexOf(pivotKey),1);
		this.set(fromModel,_fromModel);
		this.notifyPropertyChange(fromModel);
		if(order){
			_toModel.splice(_toModel.indexOf(targetCard),0,pivotKey);	
		}
		else{
			_toModel.splice(_toModel.indexOf(targetCard)+1,0,pivotKey);
		}
		
		this.set(toModel,_toModel);
		this.notifyPropertyChange(toModel);
	},
	dropOnCard:function(cKey,event,model){
		event.stopPropagation();
		// Referenced  not used
		// const xAxis=event.dataTransfer.getData('xAxis');
		const yAxis=event.dataTransfer.getData('yAxis');
		// Referenced not used
		// const currentXAxis=event.clientX; 
		const currentYAxis=event.clientY;
		let order=true;
		if(currentYAxis>=yAxis){
			order=false;				
		}
		const _targetCard=cKey;
		const pivotKey=event.dataTransfer.getData('x_PivotKey');
		const from=event.dataTransfer.getData('from');
		this.pushCardAtPosition(_targetCard,pivotKey,model,from,order);
	},
	actions:{
		dropOnMain:function(event){
			let from=event.dataTransfer.getData('from');
			let pivotKey=event.dataTransfer.getData('x_PivotKey');
			this.updateModels(pivotKey,from,'mainKeysContainer');
		},
		dropOnCol:function(event){
			let from=event.dataTransfer.getData('from');
			let pivotKey=event.dataTransfer.getData('x_PivotKey');
			if(from ==='columnKeysContainer'){
				let columnKeysContainer=this.get('columnKeysContainer');
				const lastKey=columnKeysContainer[columnKeysContainer.length-1];
				this.pushCardAtPosition(lastKey,pivotKey,'columnKeysContainer','columnKeysContainer',false);
			}
			else{
				this.updateModels(pivotKey,from,'columnKeysContainer');
			}
		},
		dropOnRow:function(event){
			let from=event.dataTransfer.getData('from');
			let pivotKey=event.dataTransfer.getData('x_PivotKey');
			if(from ==='rowKeysContainer'){
				let rowKeysContainer=this.get('rowKeysContainer');
				const lastKey=rowKeysContainer[rowKeysContainer.length-1];
				this.pushCardAtPosition(lastKey,pivotKey,'rowKeysContainer','rowKeysContainer',false);
			}
			else{
				this.updateModels(pivotKey,from,'rowKeysContainer');	
			}
		},
		dropOnColCard:function(cKey,event){
			this.dropOnCard(cKey,event,'columnKeysContainer');

		},
		dropOnRowCard:function(cKey,event){
			this.dropOnCard(cKey,event,'rowKeysContainer');	
		},
		allowDrop:function(event){
			event.preventDefault();
		},
		drag:function(event){
			let x_PivotKey=event.target.attributes.getNamedItem('x-pivotKey').value;
			let from=event.target.attributes.getNamedItem('from').value;
			const xAxis=event.clientX;
			const yAxis=event.clientY;
			event.dataTransfer.setData("x_PivotKey", x_PivotKey);
			event.dataTransfer.setData('from',from);
			event.dataTransfer.setData('xAxis',xAxis);
			event.dataTransfer.setData('yAxis',yAxis);
		}
	}
});

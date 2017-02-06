import Ember from 'ember';

export default Ember.Component.extend({
	model:{'items':[1,2,3,4,5,6]},
	actions: {
    reorderItems(itemModels, draggedModel) {
    	console.log('itemModels',itemModels);
    	console.log('draggedModel',draggedModel);
      // this.set('currentModel.items', itemModels);
      // this.set('currentModel.justDragged', draggedModel);
    }
  }
});

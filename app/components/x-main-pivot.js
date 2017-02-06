import Ember from 'ember';

export default Ember.Component.extend({
	drawPivot(){
      const x=this.get('jsonArray');
      let utils = $.pivotUtilities;
      let cols=this.get('columnKeysContainer');
      let rows=this.get('rowKeysContainer');
      let sum1=utils.aggregators["Sum"];
      this.$().pivot(
        x, {
          rows: rows,
          cols: cols
        });
    },
    didInsertElement(){
    	this.drawPivot();
    },
    didRender(){
      
    },
    didUpdateAttrs() {
      this._super(...arguments);
      this.drawPivot();
    },
});

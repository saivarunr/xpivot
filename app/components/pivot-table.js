import Ember from 'ember';
import $ from 'jquery';
export default Ember.Component.extend({
    drawPivot(){
      const x=this.get('jsonArray');
      let utils = $.pivotUtilities;
      let cols=this.get('cols');
      let rows=this.get('rows');
      let sum1=utils.aggregators["Sum"];
        this.$().pivot(
        x, {
          rows: rows,
          cols: cols
        });
    },
    didInsertElement(){
    
    },
    didRender(){
      
    },
    didUpdateAttrs() {
      this._super(...arguments);
      let cols=this.get('cols');
      let rows=this.get('rows');
      console.info('STEP-4: call draw pivot (pivot-table didUpdateAttrs)',{colArray:cols,rowArray:rows});
      // this.drawPivot();
    },
});
// 
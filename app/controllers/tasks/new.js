import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addTask: function(){
      // title will be value give in the button
      var title = this.get('title');
      var description = this.get('description');
      var date = this.get('date');

      //create New Task
      

    }
  }
});

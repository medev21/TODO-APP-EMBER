import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addTask: function(){
      // title will be value give in the button
      var title = this.get('title');
      var description = this.get('description');
      var date = this.get('date');

      //create New Task
      // pass in task model to createRecord
      var newTask = this.store.createRecord('task', {
        title: title,
        description: description,
        date: new Date(date)
      });

      //save to Database
      newTask.save();

      //clear form
      this.setProperties({
        title: '',
        description: '',
        date: ''
      });

    }
  }
});

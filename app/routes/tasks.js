import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    console.log(this.store.findAll('task'));
		return this.store.findAll('task');
	}
});

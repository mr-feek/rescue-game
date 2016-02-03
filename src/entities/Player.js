var Player = Juicy.Entity.extend({
	components: ['Box', 'PlayerMovement', 'Physics'],

	hasFlag: false,

	init: function() {
		this.transform.height = 0.8;
		this.transform.width = 1.4;
		this.getComponent('Box').fillStyle = 'lawngreen';
	},

	render: function(context) {
		this.getComponent('Box').render(context, this.transform.position.x, this.transform.position.y, this.transform.width, this.transform.height);
	}
});

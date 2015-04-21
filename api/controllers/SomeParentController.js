/**
 * SomeParentController
 *
 * @description :: Server-side logic for managing Someparents
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	testFilters: function(req, res) {
		var parent = {
			someProperty: '1',
			name: 'hoo hah, fix up look sharp',
			children: [{
				name: 'i wish i was a little bit taller'
			}, {
				name: 'child 2'
			}]
		};

		SomeParent.create(parent, function(err, model) {
			if (err) {
				console.log('the parents have gone down the pub, they cant be saved today');
			}

			var query = SomeParent.find({
				children: {
					name: {
						startsWith: 'child'
					}
				}
			});

			query.populate('children').exec(function(err, results) {
				if (err) {
					console.log('weve lost the whole family - this is turning into a saga');
					console.log(err);
				}

				return res.ok(results);
			});


		});
	}
};

import $ from 'jquery';
import ga from 'ga';
class Index {
	init() {
		this._ga();
	}
	_ga() {
		ga();
	}
}
new Index().init();
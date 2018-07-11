const getProductInControllers = require('./../common/get-product-in-controllers');

module.exports = (geeService) => {
	return ($scope, $element, $attrs, $ctrls) => {
		$element.on('click', () => {
			const products = $scope.products || getProductInControllers($ctrls);
			if (products) {
				const productsCopy = angular.copy(products instanceof Array ? products : [products]);
				geeService.triggerRemoveFromCart({
					products: productsCopy,
					list: 'Cart'
				});
			}
		});
	};
};

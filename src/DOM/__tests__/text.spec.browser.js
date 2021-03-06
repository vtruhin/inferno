import { render } from './../rendering';

describe('Text', () => {
	let container;

	beforeEach(() => {
		container = document.createElement('div');
	});

	afterEach(() => {
		render(null, container);
	});

	const emptyDefinitions = [{
		name: 'normal text',
		value: 'Hello, World!',
		expected: 'Hello, World!'
	}, {
		name: 'number value (cast to string)',
		value: 123,
		expected: '123'
	}, {
		name: 'number value (Addition)',
		value: 123 + 123,
		expected: '246'
	}, {
		name: 'number value (subtraction)',
		value: 123 - 122,
		expected: '1'
	}, {
		name: 'number value (Associative of Addition)',
		value: '(a + b) + c = a + (b + c)',
		expected: '(a + b) + c = a + (b + c)'
	}, {
		name: 'number and text',
		value: 123 + 'Hello',
		expected: '123Hello'
	}, {
		name: 'number',
		value: '123',
		expected: '123'
	}, {
		name: 'math',
		value: 44 - 44 * 3 - 333,
		expected: '-421'
	}, {
		name: 'chinese',
		value: '您好',
		expected: '您好'
	}, {
		name: 'multiple whitespace',
		value: '         ',
		expected: '         '
	}, {
		name: 'multiple whitespace and single number',
		value: '         ' + 123,
		expected: '         123'
	}, {
		name: 'empty string with whitespace',
		value: ' ',
		expected: ' '
	}, {
		name: 'empty string with double whitespace',
		value: '  ',
		expected: '  '
	}, {
		name: 'empty string with triple whitespaces',
		value: '   ',
		expected: '   '
	}, {
		name: 'empty string with one whitespace to left',
		value: ' a',
		expected: ' a'
	}, {
		name: 'empty string with triple whitespaces to left',
		value: '   a',
		expected: '   a'
	}
	];


	emptyDefinitions.forEach((arg) => {

		[{
			description: 'should create a static text node with ' + arg.name,
			template: () => ({
				tag: 'div',
				children: arg.value
			})
		}].forEach((test) => {

			it(test.description, () => {

				render(test.template(), container);
				expect(container.firstChild.nodeType).to.equal(1);
				expect(container.childNodes.length).to.equal(1);
				expect(container.firstChild.textContent).to.equal(arg.expected);

				render(test.template(), container);
				expect(container.firstChild.nodeType).to.equal(1);
				expect(container.childNodes.length).to.equal(1);
				expect(container.firstChild.textContent).to.equal(arg.expected);

			});
		});
	});

	emptyDefinitions.forEach((arg) => {

		[{
			description: 'should create a static text node with null',
			template: () => ({
				tag: 'div',
				children: null
			})
		}].forEach((test) => {

			it(test.description, () => {

				render(test.template(), container);
				expect(container.firstChild.nodeType).to.equal(1);
				expect(container.childNodes.length).to.equal(1);
				expect(container.firstChild.textContent).to.equal('');

				render(test.template(), container);
				expect(container.firstChild.nodeType).to.equal(1);
				expect(container.childNodes.length).to.equal(1);
				expect(container.firstChild.textContent).to.equal('');
			});
		});
	});

	emptyDefinitions.forEach((arg) => {

		[{
			description: 'should create a dynamic text node with ' + arg.name + ' - text property',
			template: (text) => ({
				tag: 'div',
				children: text
			})
		}].forEach((test) => {

			it(test.description, () => {

				render(test.template(arg.value), container);
				expect(container.firstChild.nodeType).to.equal(1);
				expect(container.childNodes.length).to.equal(1);
				expect(container.firstChild.textContent).to.equal(arg.expected);

				render(test.template(arg.value), container);
				expect(container.firstChild.nodeType).to.equal(1);
				expect(container.childNodes.length).to.equal(1);
				expect(container.firstChild.textContent).to.equal(arg.expected);
			});

			it(test.description, () => {

				render(test.template(null), container);
				expect(container.firstChild.nodeType).to.equal(1);
				expect(container.childNodes.length).to.equal(1);
				expect(container.firstChild.textContent).to.equal('');

				render(test.template(arg.value), container);
				expect(container.firstChild.nodeType).to.equal(1);
				expect(container.childNodes.length).to.equal(1);
				expect(container.firstChild.textContent).to.equal(arg.expected);
			});
		});
	});

	emptyDefinitions.forEach((arg) => {

		[{
			description: 'should create a dynamic text node with ' + arg.name + ' - children node text',
			template: (text) => ({
				tag: 'div',
				children: {
					tag: 'span',
					children: text
				}
			})
		}].forEach((test) => {

			it(test.description, () => {

				render(test.template(arg.value), container);
				expect(container.firstChild.nodeType).to.equal(1);
				expect(container.childNodes.length).to.equal(1);
				expect(container.firstChild.childNodes.length).to.equal(1);
				expect(container.firstChild.firstChild.textContent).to.equal(arg.expected);

				render(test.template(arg.value), container);
				expect(container.firstChild.nodeType).to.equal(1);
				expect(container.childNodes.length).to.equal(1);
				expect(container.firstChild.childNodes.length).to.equal(1);
				expect(container.firstChild.firstChild.textContent).to.equal(arg.expected);
			});
		});
	});

	emptyDefinitions.forEach((arg) => {

		[{
			description: 'should create a dynamic text node with ' + arg.name + ' - single child with text ',
			template: (text) => ({
				tag: 'div',
				children: text
			})
		}].forEach((test) => {

			it(test.description, () => {

				render(test.template(arg.value), container);
				expect(container.firstChild.nodeType).to.equal(1);
				expect(container.childNodes.length).to.equal(1);
				expect(container.firstChild.childNodes.length).to.equal(1);
				expect(container.firstChild.textContent).to.equal(arg.expected);

				render(test.template(arg.value), container);
				expect(container.firstChild.nodeType).to.equal(1);
				expect(container.childNodes.length).to.equal(1);
				expect(container.firstChild.childNodes.length).to.equal(1);
				expect(container.firstChild.textContent).to.equal(arg.expected);

			});
		});
	});

	emptyDefinitions.forEach((arg) => {

		[{
			description: 'should create a dynamic text node with ' + arg.name + ' - deep child with text property ',
			template: (text) => ({
				tag: 'div',
				children: {
					tag: 'span',
					children: text
				}
			})
		}].forEach((test) => {

			it(test.description, () => {

				render(test.template(arg.value), container);
				expect(container.firstChild.nodeType).to.equal(1);
				expect(container.childNodes.length).to.equal(1);
				expect(container.firstChild.childNodes.length).to.equal(1);
				expect(container.firstChild.textContent).to.equal(arg.expected);

				render(test.template(arg.value), container);
				expect(container.firstChild.nodeType).to.equal(1);
				expect(container.childNodes.length).to.equal(1);
				expect(container.firstChild.childNodes.length).to.equal(1);
				expect(container.firstChild.textContent).to.equal(arg.expected);
			});
		});
	});

	emptyDefinitions.forEach((arg) => {

		[{
			description: 'should create a dynamic text node with ' + arg.name + ' - deeper child with text property ',
			template: (text) => ({
				tag: 'div',
				children: {
					tag: 'span',
					children: {
						tag: 'b',
						children: text
					}
				}
			})
		}].forEach((test) => {

			it(test.description, () => {

				render(test.template(arg.value), container);
				expect(container.firstChild.nodeType).to.equal(1);
				expect(container.childNodes.length).to.equal(1);
				expect(container.firstChild.childNodes.length).to.equal(1);
				expect(container.firstChild.textContent).to.equal(arg.expected);

				render(test.template(arg.value), container);
				expect(container.firstChild.nodeType).to.equal(1);
				expect(container.childNodes.length).to.equal(1);
				expect(container.firstChild.childNodes.length).to.equal(1);
				expect(container.firstChild.textContent).to.equal(arg.expected);
			});

			it(test.description, () => {

				render(test.template(null), container);
				expect(container.firstChild.nodeType).to.equal(1);
				expect(container.childNodes.length).to.equal(1);
				expect(container.firstChild.childNodes.length).to.equal(1);
				expect(container.firstChild.textContent).to.equal('');

				render(test.template(arg.value), container);
				expect(container.firstChild.nodeType).to.equal(1);
				expect(container.childNodes.length).to.equal(1);
				expect(container.firstChild.childNodes.length).to.equal(1);
				expect(container.firstChild.textContent).to.equal(arg.expected);
			});

			it(test.description, () => {

				render(test.template(arg.value), container);
				expect(container.firstChild.nodeType).to.equal(1);
				expect(container.childNodes.length).to.equal(1);
				expect(container.firstChild.childNodes.length).to.equal(1);
				expect(container.firstChild.textContent).to.equal(arg.expected);

				render(test.template(null), container);
				expect(container.firstChild.nodeType).to.equal(1);
				expect(container.childNodes.length).to.equal(1);
				expect(container.firstChild.childNodes.length).to.equal(1);
				expect(container.firstChild.textContent).to.equal('');

			});

			it(test.description, () => {

				render(test.template(null), container);
				expect(container.firstChild.nodeType).to.equal(1);
				expect(container.childNodes.length).to.equal(1);
				expect(container.firstChild.childNodes.length).to.equal(1);
				expect(container.firstChild.textContent).to.equal('');

				render(test.template(null), container);
				expect(container.firstChild.nodeType).to.equal(1);
				expect(container.childNodes.length).to.equal(1);
				expect(container.firstChild.childNodes.length).to.equal(1);
				expect(container.firstChild.textContent).to.equal('');

			});
		});
	});

	const multiArray = [{
		name: 'multiple text',
		value: [ 'Hello', ' World' ],
		expected: 'Hello World',
		children: 2
	}, {
		name: 'multiple numbers (cast to string)',
		value: [ '12', '3' ],
		expected: '123',
		children: 2
	}, {
		name: 'multiple numbers',
		value: [ 12, 3 ],
		expected: '123',
		children: 2
	}, {
		name: 'null value',
		value: null,
		expected: '',
		children: 0
	}, {
		name: 'undefined value',
		value: undefined,
		expected: '',
		children: 0
	}, {
		name: 'empty string',
		value: '',
		expected: '',
		children: 1
	}, {
		name: 'string with whitespace',
		value: ' ',
		expected: ' ',
		children: 1
	}, {
		name: 'string as null',
		value: null,
		expected: '',
		children: 0
	}, {
		name: 'string as undefined',
		value: null,
		expected: '',
		children: 0
	}, {
		name: 'empty array',
		value: [],
		expected: '',
		children: 0
	}, {
		name: 'number',
		value: 123,
		expected: '123',
		children: 1
	}, {
		name: 'multiple numbers (Addition)',
		value: [ 12 + 3, 3 ],
		expected: '153',
		children: 2
	}, {
		name: 'multiple numbers (subtraction)',
		value: [ 12 - 3, 3 ],
		expected: '93',
		children: 2
	}, {
		name: 'multiple numbers (math)',
		value: [12 - 3 - 3 * 4 - 1],
		expected: '-4',
		children: 1
	}, {
		name: 'multiple numbers (mixed math)',
		value: [ 12 - 3, 3 * 4 - 1 ],
		expected: '911',
		children: 2
	}
	];

	multiArray.forEach((arg) => {

		[{
			description: 'should create a children property with ' + arg.name,
			template: (textVar) => ({
				tag: 'div',
				children: textVar
			})
		}].forEach((test) => {

			it(test.description, () => {

				render(test.template(arg.value), container);
				expect(container.firstChild.nodeType).to.equal(1);
				expect(container.childNodes.length).to.equal(1);
				expect(container.firstChild.childNodes.length).to.equal(arg.children);
				expect(container.firstChild.textContent).to.equal(arg.expected);

				render(test.template(arg.value), container);
				expect(container.firstChild.nodeType).to.equal(1);
				expect(container.childNodes.length).to.equal(1);
				expect(container.firstChild.childNodes.length).to.equal(arg.children);
				expect(container.firstChild.textContent).to.equal(arg.expected);

			});
		});
	});
});

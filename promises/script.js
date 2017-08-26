describe('Protractor Promises Examples', function(){
    
    it('Promises', function(){
        browser.waitForAngularEnabled(false);
        browser.get('https://wild-bead.surge.sh');

        // how many elements are there?

        element.all(by.xpath('//li')).count().then(count =>{
            console.log('Number of elements: ' + count);
        });

        // print out each inner text

        element.all(by.xpath('//li')).then(foundElements => {
            foundElements.map(nextElement => {
                nextElement.getText().then(text => {
                    console.log(text);
                })
            })
        });

        // filter example

        element.all(by.xpath('//li')).filter(function(elem, index) {
            return elem.getText().then(function(text) {
                return text === 'Three';
            });
        }).first().click();

        // reduce example

        let value = element.all(by.xpath('//li')).reduce(function(acc, elem) {
            return elem.getText().then(function(text) {
                return acc + text + ' ';
            });
        }, '');

        value.then(text =>{
            console.log(text);
        });
    });
});


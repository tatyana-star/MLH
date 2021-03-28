import sel from "../../data/selectors";

describe('My Little Hero', function () {
    describe('Getting to the page', function () {

        before('Open App', function () {
            browser.url('');
        });

        it('TC-001 Page Title is MLH trial', function () { //define test title by passing a string
            let title = browser.getTitle(); //get page title and assign it to the "title" variable
            browser.pause(2000); //just pause to visually see that something is happening on the page
            expect(title).toEqual('MLH trial'); //compare {title} (actual) and "MLH trial" (expected)
        });

    });

    describe('Elements exist', function () { //define sub-suite title by passing a string

        it('TC-002 Header is present', function () {
            let header = $(sel.header).isDisplayed();
            expect(header).toEqual(true);
        });

        it('TC-003 Instruction is present', function () {
            let instruction = $(sel.instruction).isDisplayed();
            expect(instruction).toEqual(true);
        });

        it('TC-004 Name field label is present', function () {
            let label = $$(sel.requiredLabel)[0].isDisplayed();
            expect(label).toEqual(true); // $('label[for=name]')
        });

        it('TC-005 Name field is present', function () {
            let name = $(sel.name).isDisplayed(); //id name
            expect(name).toEqual(true);
        });
        it('TC-006 Gender radio buttons label is present', function () {
            let label = $$(sel.requiredLabel)[1].isDisplayed();
            expect(label).toEqual(true);
        });


        it('TC-007.a Gender radio buttons 1 are present', function () {
            let buttonHe = $$(sel.radioButtons)[0].isDisplayed();
            expect(buttonHe).toEqual(true);
        });

        it('TC-007.b Gender radio buttons 2 are present', function () {
            let buttonShe = $$(sel.radioButtons)[1].isDisplayed();
            expect(buttonShe).toEqual(true);
        });

        it('TC-007.c Gender radio buttons 3 are present', function () {
            let buttonIt = $$(sel.radioButtons)[2].isDisplayed();
            expect(buttonIt).toEqual(true);
        });


        it('TC-008 Age label is present', function () {
            let label = $$(sel.requiredLabel)[2].isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-009 Age field is present', function () {
            let age = $(sel.age).isDisplayed();
            expect(age).toEqual(true);
        });

        it('TC-010 Story Type label is present', function () {
            let label = $$(sel.requiredLabel)[3].isDisplayed();
            expect(label).toEqual(true);
        });
        it('TC-011 Story Type dropdown is present', function () {
            let dropdown = $(sel.storyType).isDisplayed();
            expect(dropdown).toEqual(true);
        });

        it('TC-012 Image field label is present', function () {
            let label = $$(sel.imageLabel)[4].isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-013 Image field is present', function () {
            let image = $(sel.image).isDisplayed();
            expect(image).toEqual(true);
        });

        it('TC-014 Submit button is present', function () {
            let submit = $(sel.submit).isDisplayed();
            expect(submit).toEqual(true);
        });


    });
});

import sel from "../../data/selectors";
import exp from "../../data/expected.json";

describe('Labels are Correct', function () {


    before('Open App', function () {
        browser.url('');
    });

    it('TC-015 Header = My Little Hero', function () {
        let header = $(sel.header).getText();
        expect(header).toEqual(exp.header);
    });

        it('TC-016 Instruction = "Let\'s create your own HERO! It\'s super easy with our application!"', function () {
            let instruction = $(sel.instruction).getText();
            expect(instruction).toEqual(exp.instruction);
        });

        it('TC-017 Name field label = "1. What is your Hero\'s name?"', function () {
            let label = $$(sel.requiredLabel)[0].getText();
            expect(label).toEqual(exp.nameLabel); // $('label[for=name]')
        });
    it('TC-018 Gender field Label = "2. Please choose a gender."', function () {
        let label = $$(sel.requiredLabel)[1].getText();
        expect(label).toEqual(exp.genderLabel);
    });

    it('TC-019 The first button label = "he"', function () {
        let buttonHe = $$(sel.radioButtonsLabel)[0].getText();
        expect(buttonHe).toEqual(exp.heLabel);
    });

    it('TC-020 The second button label = "she"', function () {
        let buttonShe = $$(sel.radioButtonsLabel)[1].getText();
        expect(buttonShe).toEqual(exp.sheLabel);
    });

    it('TC-021 The third button label = "it"', function () {
        let buttonIt = $$(sel.radioButtonsLabel)[2].getText();
        expect(buttonIt).toEqual(exp.itLabel);
    });

    it('TC-022 Age field Label = "3. How old is your hero?"', function () {
            let label = $$(sel.requiredLabel)[2].getText();
            expect(label).toEqual(exp.ageLabel);
        });

    it('TC-023 Type of story Label = "4. What type of story would you like to read?"', function () {
        let label = $$(sel.requiredLabel)[3].getText();
        expect(label).toEqual(exp.storyLabel);
    });

    it('TC-024 Image Label = "5. Upload an image (optional)"', function () {
        let label = $$(sel.imageLabel)[4].getText();
        expect(label).toEqual(exp.imageLabel);
    });

    it('TC-025 Submit button label = "Create!"', function () {
        let submit = $(sel.submit).getText();
        expect(submit).toEqual(exp.submitText);
    });
});


    /*
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


        }); */


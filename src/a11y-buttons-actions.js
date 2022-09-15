// A11Y BUTTONS ACTIONS SCRIPT
// This file holds the logic of each button and their behaviour.

/**
 * This routine checks if the page document is loaded.
 * We do this to be able to make sure elements are already
 * present in DOM.
 */
const performWhenDocumentIsLoaded = callback => {
    if (/comp|inter|loaded/.test(document.readyState))
        cb();
    else
        document.addEventListener('DOMContentLoaded', callback, false);
}

/**
 * Updated the root html element font-size, based on action.
 * We don't update session storage when the action is 'set' because
 * in this situation we're coming from the initial session storage
 * check.
 */
function updateFontSize(action = 'increase', setValue) {

    const htmlElement = document.getElementsByTagName('html')[0];
    
    if (action == 'reset') {
        htmlElement.style.fontSize = '';
        sessionStorage.removeItem('a11y-buttons-font-size');
        return;
    }

    if (action == 'set' && setValue) {
        htmlElement.style.fontSize = setValue;
        return;
    }

    const computedFontSize = window.getComputedStyle(htmlElement).fontSize;
    const regex = /[\d]*/gm;
    const values = computedFontSize.match(regex);
    let fontSizeValue = values.length && !isNaN(values[0]) ? Number(values[0]) : 16;

    if (action == 'increase' && fontSizeValue <= 64)
        fontSizeValue += 4;
    else if (action == 'decrease' && fontSizeValue >= 8)
        fontSizeValue -= 4;
    else
        return;

    const fontSizeUnit = (values.length && !isNaN(values[0]) && computedFontSize.split(values['0']) && isNaN(computedFontSize.split(values['0'])[1])) ? computedFontSize.split(values['0'])[1] : 'px';
    const newFontSize = fontSizeValue + fontSizeUnit;
    htmlElement.style.fontSize = newFontSize;

    // Save data to sessionStorage
    sessionStorage.setItem('a11y-buttons-font-size', newFontSize);
}

/**
 * Adds a class to the root html element to color different
 * elements based on our high contrast stylesheet.
 */
function toggleHighContrast() {
    const htmlElement = document.getElementsByTagName('html')[0];
    const isContrastModeEnabled = htmlElement.classList.toggle('a11y-buttons-high-contrast-mode');

    // Save data to sessionStorage
    sessionStorage.setItem('a11y-buttons-high-contrast-mode', isContrastModeEnabled);
}

/**
 * Run this when loading the page to see if any values where
 * set previously. This way we keep settings across pages.
 */
function updateStateFromStorage() {
    // Get saved data from sessionStorage
    const customFontSize = sessionStorage.getItem('a11y-buttons-font-size');
    if (customFontSize)
        updateFontSize('set', customFontSize);

    // Get saved data from sessionStorage
    const isContrastModeEnabled = sessionStorage.getItem('a11y-buttons-high-contrast-mode') == 'true';
    if (isContrastModeEnabled)
        toggleHighContrast();
}

/**
 * Look for a111Buttons elements to set their proper actions
 */
function addActionsToButtons() {
    const a11yButtonsWrappers = document.getElementsByClassName('wp-block-a11y-buttons-a11y-button');

    if (!a11yButtonsWrappers || !a11yButtonsWrappers.length)
        return;

    let a11yButtons = [];
    for (let a11yButton of a11yButtonsWrappers) {
        if (a11yButton.childNodes && a11yButton.childNodes[0] && a11yButton.childNodes[0].tagName == 'BUTTON' && a11yButton.childNodes[0].dataset['action'])
            a11yButtons.push(a11yButton.childNodes[0]);
    };
    for (let a11yButton of a11yButtons) {
        a11yButton.addEventListener("click", () => {
            switch (a11yButton.dataset['action']) {
                case 'increase-font-size':
                    updateFontSize('increase');
                    break;
                case 'decrease-font-size':
                    updateFontSize('decrease');
                    break;
                case 'reset-font-size':
                    updateFontSize('reset');
                    break;
                case 'toggle-high-contrast':
                    toggleHighContrast();
                    break;
            }
        });
    }
}

/* 
 * Waiting the page to be loaded to initialize things
 */
performWhenDocumentIsLoaded(() => {
    updateStateFromStorage();
    addActionsToButtons();
});

/* eslint-disable no-console */
const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = tabs.querySelectorAll('[role="tabpanel"]');

function handleTabClick(event) {
        // hide all tab panels
        tabPanels.forEach(panel => {
                panel.hidden = true;
        });
        // mark all tabs as unselected
        tabButtons.forEach(tab => {
                // tab.ariaSelected = false;
                tab.setAttribute('aria-selected', false);
        });
        // mark the clicked tab as selected
        event.currentTarget.setAttribute('aria-selected', true);
        // find the associated tabPanel and show it!
        const { id } = event.currentTarget;

        /* METHOD 1
        const tabPanel = tabs.querySelector(`[aria-labelledby="${id}"]`);
        console.log(tabPanel);
        tabPanel.hidden = false; */

        // METHOD 2
}
tabButtons.forEach(button => button.addEventListener('click', handleTabClick));

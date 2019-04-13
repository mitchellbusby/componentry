const TAB_HIDDEN_CLASS = 'tab-content-hidden';

const Tabs = ({
    rootId
}) => {
    const tabsRoot = document.getElementById(rootId);

    const tabContentItems = tabsRoot.getElementsByClassName('tab-content');
    
    const onSelectTab = tabId => {
        console.log(`Selected item ${tabId}`);
        [...tabContentItems].forEach(item => {
            if (item.getAttribute('data-tab-content') === tabId) {
                item.classList.remove(TAB_HIDDEN_CLASS);
            }
            else {
                item.classList.add(TAB_HIDDEN_CLASS);
            }
        });
    }

    const tabNavItems = tabsRoot.getElementsByClassName('tab');

    // Add event listeners
    [...tabNavItems].forEach(item => {
        item.addEventListener('click', () => onSelectTab(item.getAttribute('data-tab-content')));
    });

    // Preselected item, else preselect the first
    onSelectTab(tabNavItems[0].getAttribute('data-tab-content'));
}

export {Tabs}
// helper function open a URL
export const openURL = newURL => () => chrome.tabs.create({ url: newURL });

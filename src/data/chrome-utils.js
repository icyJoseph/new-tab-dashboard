// helper function open a URL
export const openURL = newURL => () => chrome.tabs.create({ url: newURL });

// helper function to store to the chrome local storage
export const storeURLs = urls => chrome.storage.local.set({ urls });

// get url's from storage and execute callback
export const getURLs = callback =>
  chrome.storage.local.get(["urls"], ({ urls }) => callback(urls));

// attach a listener to changes to the storage
export const addURLsChangeListener = listener =>
  chrome.storage.onChanged.addListener(listener);

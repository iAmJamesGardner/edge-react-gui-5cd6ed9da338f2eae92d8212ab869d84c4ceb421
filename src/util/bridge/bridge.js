/* global window, Event */

import { Bridge, bridgifyObject } from 'yaob'

function setupBridge() {
  // We have already run once in this context:
  if (window.bridge != null) return

  // Define our API for the GUI to call:
  const workerApi = {
    setEdgeProvider: function (provider) {
      window.edgeProvider = provider

      // Tell anybody waiting that we are ready:
      document.dispatchEvent(new Event('edgeProviderReady'))
    }
  }
  bridgifyObject(workerApi)

  // Open a conneciton to the GUI:
  window.bridge = new Bridge({
    hideProperties: ['allKeys', 'displayPrivateSeed', 'displayPublicSeed', 'keys', 'otpKey', 'loginKey', 'publicWalletInfo', 'recoveryKey'],
    sendMessage: function (message) {
      window.ReactNativeWebView.postMessage(JSON.stringify(message))
    }
  })
  window.bridge.sendRoot(workerApi)
}

setupBridge()

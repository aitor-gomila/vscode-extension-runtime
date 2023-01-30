import vscode from 'vscode';

import { ExtensionHostStarter } from 'vs/platform/extensions/electron-main/extensionHostStarter'

var extHost = new ExtensionHostStarter(null, null, null, null);
extHost.createExtensionHost(false);
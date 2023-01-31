# 🎃 VSCode-Extension-Runtime

This is a VSCode compatibility layer that lets you run VSCode extensions inside other IDEs.

## Hub of knowledge

- [❓ Reasoning](#❓-reasoning)
- [🛠️ Implement on your own code editor](#🛠️-implement-on-your-own-code-editor)
- [🙌 Contributing guide](#🙌-contribution-guide)
- [📡 Get in touch](#📡-get-in-touch)

## ❓ Reasoning

### Why

VSCode is becoming just another Microsoft monopoly. Here's how we stop it.

Other IDEs may be more aesthetically pleasing, run faster, or people may just prefer other IDEs for the privacy. You name it. But without VSCode's extension ecosystem, they have nothing to do.

In particular, programming language support is key.

### How

In the background, VSCode-ECL is running just the necessary parts of VSCode in order to run the extensions (Extension host).

Extension host runs each extension in a separate process, and communicates the extensions and VSCode using IPC.

VSC-ECL is just a middleman between the extension and the IDE. Instead of displaying a GUI, and sending all that info to the GUI so it's rendered, it's sent to the IDE and I get to forget about it!


## 🛠️ Implement on your own code editor



## 🙌 Contribution guide



## 📡 Get in touch

- [🌐 Website](https://aitorgomila.dev)
- [🪛 GitHub](https://github.com/dragonDScript)
- [✉️ Email](mailto:agomila96@gmail.com)

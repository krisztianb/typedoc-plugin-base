# typedoc-plugin-base

**An example plugin with some helper classes to simplify plugin development for typedoc.**

### Installation

This module can be installed using [npm](https://www.npmjs.com/):

```sh
$ npm install typedoc-plugin-base --save-dev
```

### Description

After installing the module you can use (import) its classes and use them in your own plugin.

**1. Create a plugin class just like ExamplePlugin**

Your plugin class can extend the base class `TypeDocPluginBase`.
You can define your options and subscribe to the necessary events of TypeDoc just like the `ExamplePlugin` class does.
All of your plugin's code can go into this file or other files that you import.

**2. Create an index.ts file that exports a function called load**

TypeDoc is looking for a function named `load` to load your plugin. So you should define one in your module's
main entry point - `index.ts` in this example. The function could be as simple as this:

```typescript
export function load(host: PluginHost): void {
    new ExamplePlugin().initialize(host.application);
}
```

### TypeDoc background knowledge

The TypeDoc `Application` uses a `Converter` to scan the source files and create a `ProjectReflection`.
Then the `Application` uses the `Renderer` (and a `Theme`) to create the doc output from the `ProjectReflection`.

The `Application` uses a `PluginHost` to search and load plugins.
A plugin is loaded via a function call by the `PluginHost` passing itself as an argument.
Using the `PluginHost.application` getter the plugin can access the `Application`.

The plugin can use the `Application.options` to add declarations (TypeDoc parameters) and later get their values.

The `Converter` and the `Renderer` emit events during their work.
The plugin can register itself for events of the `Converter` and the `Renderer` to modify the output.

Please take a look at the TypeDoc API for detailed information: https://typedoc.org/api/
Any more questions? Please ask them on Gitter here: https://gitter.im/TypeStrong/typedoc

### License

Internet Systems Consortium (ISC)

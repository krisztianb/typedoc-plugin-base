# typedoc-plugin-base

**An example plugin for typedoc.**

**UPDATE:** The update of typedoc 0.17.6 added all the functionality that this project provided.
So I now encourage not to use earlier versions of this project, but use the native declaration options
of typedoc instead. Therefore NO installation is needed. Just look at the code instead.

## Usage

In the file `exaple_plugin.ts` you will see a typedoc example plugin using some plugin options.
The plugin subscribes to all typedoc events to show you which ones are available.
Normally you let your plugin only subscribe to the events that are needed.

Typedoc is looking for a function called `load` to load your plugin. So you should define one in your module's
main entry point - `index.ts` in this example. The function could be as simple as this:

```typescript
export function load(host: PluginHost): void {
    new ExamplePlugin().initialize(host.application);
}
```

## Installation (deprecated)

Former versions of this project can be installed using NPM [npm](https://www.npmjs.com/):

```sh
$ npm install typedoc-plugin-base
```

## Usage if you installed the npm module (deprecated)

After installing the module you can import its classes and use them in your own plugin project.
Declaration files are also included, so that you can import classes in your TypeScript code like this:

```typescript
import { PluginBase } from "typedoc-plugin-base/dist/plugin_base";
```

Your plugin class can extend the base class `PluginBase`.
You can define your options and subscribe to the necessary events of typedoc just like the `ExamplePlugin` class does.
All of your plugin's code can go into this file or other files that you import.

Create a function called `load` to load your plugin as described above.

## typedoc background knowledge

The typedoc `Application` uses a `Converter` to scan the source files and create a `ProjectReflection`.
Then the `Application` uses the `Renderer` (and a `Theme`) to create the doc output from the `ProjectReflection`.

The `Application` uses a `PluginHost` to search and load plugins.
A plugin is loaded via a function call by the `PluginHost` passing itself as an argument.
Using the `PluginHost.application` getter the plugin can access the `Application`.

The plugin can use the `Application.options` to add declarations (typedoc parameters) and later get their values.

The `Converter` and the `Renderer` emit events during their work.
The plugin can register itself for events of the `Converter` and the `Renderer` to modify the output.

Please take a look at the typedoc API for detailed information: https://typedoc.org/api/

Any more questions? Please ask them on Gitter here: https://gitter.im/TypeStrong/typedoc

## License

Internet Systems Consortium (ISC)

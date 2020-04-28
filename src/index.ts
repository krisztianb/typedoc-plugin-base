import { PluginHost } from "typedoc/dist/lib/utils";
import { ExamplePlugin } from "./example_plugin";

/**
 * Initializes the plugin.
 * @param host Reference to the host that is loading the plugin.
 */
export function load(host: PluginHost): void {
    new ExamplePlugin().initialize(host.application);
}

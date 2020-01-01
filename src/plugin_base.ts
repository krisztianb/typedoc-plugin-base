import { Application } from "typedoc";

/**
 * Base class for a TypeDoc plugin.
 */
export abstract class PluginBase {
    /**
     * Initializes the plugin.
     * @param typedoc The TypeDoc application.
     */
    public initialize(typedoc: Application): void {
        this.addOptionsToApplication(typedoc);
        this.subscribeToApplicationEvents(typedoc);
    }

    /**
     * Adds the plugin's options to the application's options.
     * @param typedoc The TypeDoc application.
     */
    protected abstract addOptionsToApplication(typedoc: Application): void;

    /**
     * Subscribes to events of the application so that the plugin can do its work
     * in the particular doc generation phases.
     * @param typedoc The TypeDoc application.
     */
    protected abstract subscribeToApplicationEvents(typedoc: Application): void;
}

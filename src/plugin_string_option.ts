import { Application, ParameterType } from "typedoc";
import { PluginOptionBase } from "./plugin_option_base";

/**
 * Class for a TypeDoc plugin option that has a string as its value.
 */
export class PluginStringOption extends PluginOptionBase<string> {
    /**
     * Initializes a new option.
     * @param nameInCommandLine Name of the command line parameter used for this option.
     * @param helpInCommandLine Help message for the option in the command line.
     * @param defaultValue Default value of the option.
     */
    constructor(nameInCommandLine: string, helpInCommandLine: string, defaultValue: string) {
        super(nameInCommandLine, helpInCommandLine, defaultValue);
    }

    /**
     * Adds the option to the application's options.
     * @param typedoc The TypeDoc application.
     */
    public addToApplication(typedoc: Application): void {
        typedoc.options.addDeclaration({
            defaultValue: this.defaultValue,
            help: this.helpInCommandLine,
            name: this.nameInCommandLine,
            type: ParameterType.String,
        });
    }

    /**
     * Reads the value of the option from the application's options.
     * @param typedoc The TypeDoc application.
     */
    public readValueFromApplication(typedoc: Application): void {
        this.value = typedoc.options.getValue(this.nameInCommandLine) as string;
    }
}

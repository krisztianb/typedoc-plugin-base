import { Application } from "typedoc";
import { TypeDocPluginOptionBase } from "./typedoc_plugin_option_base";

/**
 * Class for a TypeDoc plugin option that has a string as its value.
 */
export class TypeDocPluginStringOption extends TypeDocPluginOptionBase<string> {
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
        // tslint:disable:object-literal-sort-keys
        typedoc.options.addDeclaration({
            name: this.nameInCommandLine,
            help: this.helpInCommandLine,
            defaultValue: this.defaultValue,
        });
    }

    /**
     * Reads the value of the option from the application's options.
     * @param typedoc The TypeDoc application.
     */
    public readValueFromApplication(typedoc: Application): void {
        const valueFromCommandLine = String(typedoc.options.getValue(this.nameInCommandLine));

        if (valueFromCommandLine) {
            this.value = valueFromCommandLine;
        }
    }
}

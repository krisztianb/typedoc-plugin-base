import { ParameterType, StringDeclarationOption } from "typedoc";
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
     * Returns a declaration option representing the plugin option.
     * @returns The declaration option representing the plugin option.
     */
    get asDeclaration(): StringDeclarationOption {
        return {
            type: ParameterType.String,
            name: this.nameInCommandLine,
            help: this.helpInCommandLine,
            defaultValue: this.defaultValue,
        };
    }
}

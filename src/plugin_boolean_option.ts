import { BooleanDeclarationOption, ParameterType } from "typedoc";
import { PluginOptionBase } from "./plugin_option_base";

/**
 * Class for a TypeDoc plugin option that has a boolean as its value.
 */
export class PluginBooleanOption extends PluginOptionBase<boolean> {
    /**
     * Initializes a new option.
     * @param nameInCommandLine Name of the command line parameter used for this option.
     * @param helpInCommandLine Help message for the option in the command line.
     * @param defaultValue Default value of the option.
     */
    constructor(nameInCommandLine: string, helpInCommandLine: string, defaultValue: boolean) {
        super(nameInCommandLine, helpInCommandLine, defaultValue);
    }

    /**
     * Returns a declaration option representing the plugin option.
     * @returns The declaration option representing the plugin option.
     */
    get asDeclaration(): BooleanDeclarationOption {
        return {
            type: ParameterType.Boolean,
            name: this.nameInCommandLine,
            help: this.helpInCommandLine,
            defaultValue: this.defaultValue,
        };
    }
}

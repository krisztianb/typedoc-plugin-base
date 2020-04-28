import { NumberDeclarationOption, ParameterType } from "typedoc";
import { PluginOptionBase } from "./plugin_option_base";

/**
 * Class for a TypeDoc plugin option that has a number as its value.
 */
export class PluginNumberOption extends PluginOptionBase<number> {
    /** The lowest allowed value. */
    protected minValue?: number;

    /** The highest allowed value. */
    protected maxValue?: number;

    /**
     * Initializes a new option.
     * @param nameInCommandLine Name of the command line parameter used for this option.
     * @param helpInCommandLine Help message for the option in the command line.
     * @param defaultValue Default value of the option.
     * @param minValue The lowest allowed value.
     * @param maxValue The highest allowed value.
     */
    constructor(
        nameInCommandLine: string,
        helpInCommandLine: string,
        defaultValue: number,
        minValue?: number,
        maxValue?: number
    ) {
        super(nameInCommandLine, helpInCommandLine, defaultValue);

        this.minValue = minValue;
        this.maxValue = maxValue;
    }

    /**
     * Returns a declaration option representing the plugin option.
     * @returns The declaration option representing the plugin option.
     */
    get asDeclaration(): NumberDeclarationOption {
        return {
            type: ParameterType.Number,
            name: this.nameInCommandLine,
            help: this.helpInCommandLine,
            defaultValue: this.defaultValue,
            minValue: this.minValue,
            maxValue: this.maxValue,
        };
    }
}

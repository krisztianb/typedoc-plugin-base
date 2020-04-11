import { Application, ParameterType } from "typedoc";
import { PluginOptionBase } from "./plugin_option_base";

/**
 * Class for a TypeDoc plugin option that has a number as its value.
 */
export class PluginNumberOption extends PluginOptionBase<number> {
    /** The lowest allowed value. */
    protected minValue: number;

    /** The highest allowed value. */
    protected maxValue: number;

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
        minValue: number,
        maxValue: number
    ) {
        super(nameInCommandLine, helpInCommandLine, defaultValue);

        this.minValue = minValue;
        this.maxValue = maxValue;
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
            type: ParameterType.Number,
        });
    }

    /**
     * Reads the value of the option from the application's options.
     * @param typedoc The TypeDoc application.
     */
    public readValueFromApplication(typedoc: Application): void {
        const numValueFromCommandLine = typedoc.options.getValue(this.nameInCommandLine) as number;

        if (
            !Number.isNaN(numValueFromCommandLine) &&
            numValueFromCommandLine >= this.minValue &&
            numValueFromCommandLine <= this.maxValue
        ) {
            this.value = numValueFromCommandLine;
        }
    }
}

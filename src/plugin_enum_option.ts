import { Application, ParameterType } from "typedoc";
import { PluginOptionBase } from "./plugin_option_base";

/**
 * Class for a TypeDoc plugin option that can have one value from a list of predefined values.
 * Use this class if your values are specified via an enumeration.
 * @typeparam T The enum type used for the values of this option.
 */
export class PluginEnumOption<T> extends PluginOptionBase<T> {
    /** Mapping of possible command line values to real option values. */
    protected stringToValueMap: Map<string, T>;

    /**
     * Initializes a new option.
     * @param nameInCommandLine Name of the command line parameter used for this option.
     * @param helpInCommandLine Help message for the option in the command line.
     * @param defaultValue Default value of the option.
     * @param stringToValueMap Mapping of possible command line values to real option values.
     */
    constructor(
        nameInCommandLine: string,
        helpInCommandLine: string,
        defaultValue: T,
        stringToValueMap: Map<string, T>
    ) {
        super(nameInCommandLine, helpInCommandLine, defaultValue);

        this.stringToValueMap = stringToValueMap;
    }

    /**
     * Adds the option to the application's options.
     * @param typedoc The TypeDoc application.
     */
    public addToApplication(typedoc: Application): void {
        // tslint:disable:object-literal-sort-keys
        typedoc.options.addDeclaration({
            type: ParameterType.Map,
            name: this.nameInCommandLine,
            help: this.helpInCommandLine,
            map: this.stringToValueMap,
            defaultValue: this.defaultValue,
        });
    }

    /**
     * Reads the value of the option from the application's options.
     * @param typedoc The TypeDoc application.
     */
    public readValueFromApplication(typedoc: Application): void {
        this.value = typedoc.options.getValue(this.nameInCommandLine) as T;
    }
}

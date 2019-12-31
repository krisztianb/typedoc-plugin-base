import { Application } from "typedoc";
import { TypeDocPluginOptionBase } from "./typedoc_plugin_option_base";

/**
 * Class for a TypeDoc plugin option that can have one value from a list of predefined values.
 * Use this class if your values are specified via an enumeration.
 * @typeparam The enum type used for the values of this option.
 */
export class TypeDocPluginEnumOption<T> extends TypeDocPluginOptionBase<T> {
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
        let commandLineDefaultValue: string | undefined;

        // get the default value in the command line
        if (this.stringToValueMap) {
            for (const [key, value] of Object.entries(this.stringToValueMap)) {
                if (value === this.defaultValue) {
                    commandLineDefaultValue = key;
                }
            }
        }

        // tslint:disable:object-literal-sort-keys
        typedoc.options.addDeclaration({
            name: this.nameInCommandLine,
            help: this.helpInCommandLine,
            defaultValue: commandLineDefaultValue,
        });
    }

    /**
     * Reads the value of the option from the application's options.
     * @param typedoc The TypeDoc application.
     */
    public readValueFromApplication(typedoc: Application): void {
        let valueFromCommandLine = String(typedoc.options.getValue(this.nameInCommandLine));

        if (valueFromCommandLine) {
            valueFromCommandLine = valueFromCommandLine.toLowerCase();

            if (this.stringToValueMap.has(valueFromCommandLine)) {
                this.value = this.stringToValueMap.get(valueFromCommandLine) ?? this.defaultValue;
            }
        }
    }
}

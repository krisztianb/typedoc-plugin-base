import { Application } from "typedoc";
import { Context, Converter } from "typedoc/dist/lib/converter";
import { PageEvent, RendererEvent } from "typedoc/dist/lib/output/events";
import { PluginBase } from "./plugin_base";
import { PluginBooleanOption } from "./plugin_boolean_option";
import { PluginEnumOption } from "./plugin_enum_option";
import { PluginNumberOption } from "./plugin_number_option";
import { PluginStringOption } from "./plugin_string_option";

/**
 * A simple enum used in one of the example plugin's options.
 */
enum ExampleEnum {
    Top = 1,
    Right = 2,
    Bottom = 3,
    Left = 4,
}

/**
 * An example TypeDoc plugin.
 */
export class ExamplePlugin extends PluginBase {
    /** A boolean option of this plugin. */
    protected pluginBoolenOption = new PluginBooleanOption(
        "booleanOptionNameInCommandLine",
        "A boolean that specifies something.",
        false
    );

    /** A number option of this plugin. */
    protected pluginNumberOption = new PluginNumberOption(
        "numberOptionNameInCommandLine",
        "A number that specifies something.",
        16,
        0,
        256
    );

    /** A string option of this plugin. */
    protected pluginStringOption = new PluginStringOption(
        "stringOptionNameInCommandLine",
        "A string that specifies something.",
        "none"
    );

    /** An enum option of this plugin. */
    protected pluginEnumOption = new PluginEnumOption<ExampleEnum>(
        "enumOptionNameInCommandLine",
        "A value that specifies something.",
        ExampleEnum.Top,
        new Map([
            ["top", ExampleEnum.Top],
            ["right", ExampleEnum.Right],
            ["bottom", ExampleEnum.Bottom],
            ["left", ExampleEnum.Left],
        ])
    );

    /**
     * Adds the plugin's options to the application's options.
     * @param typedoc The TypeDoc application.
     */
    protected addOptionsToApplication(typedoc: Application): void {
        typedoc.options.addDeclaration(this.pluginBoolenOption.asDeclaration);
        typedoc.options.addDeclaration(this.pluginNumberOption.asDeclaration);
        typedoc.options.addDeclaration(this.pluginStringOption.asDeclaration);
        typedoc.options.addDeclaration(this.pluginEnumOption.asDeclaration);
    }

    /**
     * Subscribes to events of the application so the plugin can do its work in the particular doc generation phases.
     * @param typedoc The TypeDoc application.
     */
    // prettier-ignore
    protected subscribeToApplicationEvents(typedoc: Application): void {
        // tslint:disable:max-line-length
        typedoc.converter.on(Converter.EVENT_BEGIN, (context: Context) => this.onConverterBegin(context));
        typedoc.converter.on(Converter.EVENT_FILE_BEGIN, (context: Context) => this.onConverterFileBegin(context));
        typedoc.converter.on(Converter.EVENT_CREATE_DECLARATION, (context: Context) => this.onConverterCreateDeclaration(context));
        typedoc.converter.on(Converter.EVENT_CREATE_PARAMETER, (context: Context) => this.onConverterCreateParameter(context));
        typedoc.converter.on(Converter.EVENT_CREATE_SIGNATURE, (context: Context) => this.onConverterCreateSignature(context));
        typedoc.converter.on(Converter.EVENT_CREATE_TYPE_PARAMETER, (context: Context) => this.onConverterCreateTypeParameter(context));
        typedoc.converter.on(Converter.EVENT_FUNCTION_IMPLEMENTATION, (context: Context) => this.onConverterFunctionImplementation(context));
        typedoc.converter.on(Converter.EVENT_RESOLVE_BEGIN, (context: Context) => this.onConverterResolveBegin(context));
        typedoc.converter.on(Converter.EVENT_RESOLVE, (context: Context) => this.onConverterResolve(context));
        typedoc.converter.on(Converter.EVENT_RESOLVE_END, (context: Context) => this.onConverterResolveEnd(context));
        typedoc.converter.on(Converter.EVENT_END, (context: Context) => this.onConverterEnd(context));

        typedoc.renderer.on(RendererEvent.BEGIN, (event: RendererEvent) => this.onRendererBegin(event));
        typedoc.renderer.on(PageEvent.BEGIN, (event: PageEvent) => this.onRendererBeginPage(event));
        typedoc.renderer.on(PageEvent.END, (event: PageEvent) => this.onRendererEndPage(event));
        typedoc.renderer.on(RendererEvent.END, (event: RendererEvent) => this.onRendererEnd(event));
        // tslint:enable:max-line-length
    }

    /**
     * Triggered when the converter begins converting a project.
     * @param context Describes the current state the converter is in.
     */
    public onConverterBegin(context: Context): void {
        const typedoc = context.converter.owner.application;

        // a good place to get the values for our options
        this.pluginBoolenOption.value = typedoc.options.getValue(this.pluginBoolenOption.name) as boolean;
        this.pluginNumberOption.value = typedoc.options.getValue(this.pluginNumberOption.name) as number;
        this.pluginStringOption.value = typedoc.options.getValue(this.pluginStringOption.name) as string;
        this.pluginEnumOption.value = typedoc.options.getValue(this.pluginEnumOption.name) as ExampleEnum;
    }

    /**
     * Triggered when the converter begins converting a source file.
     * @param context Describes the current state the converter is in.
     */
    public onConverterFileBegin(context: Context): void {
        // do something
    }

    /**
     * Triggered when the converter has created a declaration reflection.
     * @param context Describes the current state the converter is in.
     */
    public onConverterCreateDeclaration(context: Context): void {
        // do something
    }

    /**
     * Triggered when the converter has created a parameter reflection.
     * @param context Describes the current state the converter is in.
     */
    public onConverterCreateParameter(context: Context): void {
        // do something
    }

    /**
     * Triggered when the converter has created a signature reflection.
     * @param context Describes the current state the converter is in.
     */
    public onConverterCreateSignature(context: Context): void {
        // do something
    }

    /**
     * Triggered when the converter has created a type parameter reflection.
     * @param context Describes the current state the converter is in.
     */
    public onConverterCreateTypeParameter(context: Context): void {
        // do something
    }

    /**
     * Triggered when the converter has found a function implementation.
     * @param context Describes the current state the converter is in.
     */
    public onConverterFunctionImplementation(context: Context): void {
        // do something
    }

    /**
     * Triggered when the TypeDoc converter begins resolving a project.
     * @param context Describes the current state the converter is in.
     */
    public onConverterResolveBegin(context: Context): void {
        // do something
    }

    /**
     * Triggered when the converter resolves a reflection.
     * @param context Describes the current state the converter is in.
     */
    public onConverterResolve(context: Context): void {
        // do something
    }

    /**
     * Triggered when the TypeDoc converter has finished resolving a project.
     * @param context Describes the current state the converter is in.
     */
    public onConverterResolveEnd(context: Context): void {
        // do something
    }

    /**
     * Triggered when the converter has finished converting a project.
     * @param context Describes the current state the converter is in.
     */
    public onConverterEnd(context: Context): void {
        // do something
    }

    /**
     * Triggered before the renderer starts rendering a project.
     * @param event The event emitted by the renderer class.
     */
    public onRendererBegin(event: RendererEvent): void {
        // do something
    }

    /**
     * Triggered before a document will be rendered.
     * @param event The event emitted by the renderer class.
     */
    public onRendererBeginPage(event: PageEvent): void {
        // do something
    }

    /**
     * Triggered after a document has been rendered, just before it is written to disc.
     * @param event The event emitted by the renderer class.
     */
    public onRendererEndPage(event: PageEvent): void {
        // do something
    }

    /**
     * Triggered after the renderer has written all documents.
     * @param event The event emitted by the renderer class.
     */
    public onRendererEnd(event: RendererEvent): void {
        // do something
    }
}

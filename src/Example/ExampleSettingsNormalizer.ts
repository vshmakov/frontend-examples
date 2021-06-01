import {getValueBetween, getValueLessThan} from "../NumberManipulator";
import {ExampleSettings} from "./ExampleSettings";

export class ExampleSettingsNormalizer {
    public normalizeAddSettings(exampleSettings: ExampleSettings): void {
        exampleSettings.minValue = getValueLessThan(exampleSettings.minValue, exampleSettings.maxValue)
        exampleSettings.minResult = getValueBetween(exampleSettings.minResult, exampleSettings.minValue * 2, exampleSettings.minValue + exampleSettings.maxValue)
        exampleSettings.maxResult = getValueBetween(exampleSettings.maxResult, exampleSettings.minValue + exampleSettings.maxValue, exampleSettings.maxValue * 2)
            }
}

import {getValueBetween, getValueLessThan} from "../NumberManipulator";
import {ExampleSettings} from "./ExampleSettings";

export class ExampleSettingsNormalizer {
    public normalizeAddSettings(exampleSettings: ExampleSettings): void {
        exampleSettings.minValue = getValueLessThan(exampleSettings.minValue, exampleSettings.maxValue)
        const upperBound = exampleSettings.maxValue + exampleSettings.minValue
        exampleSettings.minResult = getValueBetween(exampleSettings.minResult, exampleSettings.minValue * 2, upperBound)
        exampleSettings.maxResult = getValueBetween(exampleSettings.maxResult, upperBound, exampleSettings.maxValue * 2)
    }

    public normalizeMultSettings(exampleSettings: ExampleSettings): void {
        exampleSettings.minValue = getValueLessThan(exampleSettings.minValue, exampleSettings.maxValue)
        const upperBound = exampleSettings.maxValue * exampleSettings.minValue
        exampleSettings.minResult = getValueBetween(exampleSettings.minResult, exampleSettings.minValue ** 2, upperBound)
        exampleSettings.maxResult = getValueBetween(exampleSettings.maxResult, upperBound, exampleSettings.maxValue ** 2)
    }
}

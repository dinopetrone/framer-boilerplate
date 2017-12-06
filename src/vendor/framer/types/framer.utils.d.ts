declare namespace Framer.Utils {
    // Utils.reset = ->
    export function reset(): void;

    // Utils.getValue = (value) ->
    export function getValue(value: any): any;

    // Utils.getValueForKeyPath = (obj, key) ->
    export function getValueForKeyPath(obj: any, key: any): any;

    // Utils.setValueForKeyPath = (obj, path, val) ->
    export function setValueForKeyPath(obj: any, path: any, val: any): void;

    // Utils.valueOrDefault = (value, defaultValue) ->
    export function valueOrDefault(value: any, defaultValue: any): any;

    // Utils.arrayNext = (arr, item) ->
    export function arrayNext(array: any, item: any): any;

    // Utils.arrayPrev = (arr, item) ->
    export function arrayPrev(array: any, item: any): any;

    // Utils.webkitPerspectiveForValue =  (value) ->
    export function webkitPerspectiveForValue(value: any): any|null;

    // Math
    // Utils.sum = (arr) ->
    export function sum(arr: number[]): number;

    // Utils.average = (arr) ->
    export function average(arr: number[]): number;

    // Utils.mean = Utils.average
    export function mean(arr: number[]): number;

    // Utils.randomNumber = (a=0, b=1) ->
    export function randomNumber(a: number, b: number): number;

    // Utils.median = (x) ->
    export function median(x: number[]): number;

    // Utils.nearestIncrement = (x, increment) ->
    export function nearestIncrement(x: number, increment: number): number

    // Animation
    // Utils.getTime ->
    export function getTime(): number;

    // Utils.delay = (time, f) ->
    export function delay(time: number, f: () => void): number;

    // Utils.interval = (time, f) ->
    export function interval(time: number, f: () => void): number;

    // Utils.debounce = (threshold=0.1, fn, immediate) ->
    export function debounce(threshold: number, fn: () => void, immediate: boolean): void;

    // Utils.throttle = (delay, fn) ->
    export function throttle(delay: number, fn: () => void): (...args: any[]) => void;

    // Utils.memoize = (fn) -> ->
    export function memoize(fn: () => void): any

    // Handy Functions
    // Utils.randomColor = (alpha = 1.0) ->
    export function randomColor(alpha: number): any

    // Utils.randomChoice = (arr) ->
    export function randomChoice(arr: any[]): any
}
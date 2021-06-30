import { Options } from 'vue-class-component';
import { ComponentBase, EJComponentDecorator, getProps, allVue, gh } from '@syncfusion/ej2-vue-base';
import { isNullOrUndefined } from '@syncfusion/ej2-base';

import { ProgressBar } from '@syncfusion/ej2-progressbar';
import { ProgressBarAnnotationsDirective, ProgressBarAnnotationDirective, ProgressBarAnnotationsPlugin, ProgressBarAnnotationPlugin } from './annotations.directive'


// {{VueImport}}
export const properties: string[] = ['animation', 'annotations', 'cornerRadius', 'enablePersistence', 'enablePieProgress', 'enableProgressSegments', 'enableRtl', 'endAngle', 'gapWidth', 'height', 'innerRadius', 'isActive', 'isGradient', 'isIndeterminate', 'isStriped', 'labelOnTrack', 'labelStyle', 'locale', 'margin', 'maximum', 'minimum', 'progressColor', 'progressThickness', 'radius', 'rangeColors', 'role', 'secondaryProgress', 'segmentColor', 'segmentCount', 'showProgressValue', 'startAngle', 'theme', 'trackColor', 'trackThickness', 'type', 'value', 'width', 'animationComplete', 'load', 'loaded', 'mouseClick', 'mouseDown', 'mouseLeave', 'mouseMove', 'mouseUp', 'progressCompleted', 'textRender', 'valueChanged'];
export const modelProps: string[] = [];

export const testProp: any = getProps({props: properties});
export const props = testProp[0];
export const watch = testProp[1];

export const emitProbs: any = Object.keys(watch);
emitProbs.push('modelchanged');
for (let props of modelProps) {
    emitProbs.push(
        'update:'+props
    );
}

export const isExecute: any = gh ? false : true;

export let tempProxy: any;

/**
 * Represents Vuejs ProgressBar Component
 * ```vue
 * <ejs-progressbar></ejs-progressbar>
 * ```
 */
@EJComponentDecorator({
    props: properties
},isExecute)

/* Start Options({
    props: props,
    watch: watch,
    emits: emitProbs
}) End */

export class ProgressBarComponent extends ComponentBase {
    
    public ej2Instances: any;
    public propKeys: string[] = properties;
    public models: string[] = modelProps;
    public hasChildDirective: boolean = true;
    protected hasInjectedModules: boolean = true;
    public tagMapper: { [key: string]: Object } = {"e-progressbar-annotations":"e-progressbar-annotation"};
    public tagNameMapper: Object = {"e-progressbar-annotations":"e-annotations"};
    public isVue3: boolean;
    
    constructor() {
        super(arguments);
        this.isVue3 = !isExecute;
        this.ej2Instances = new ProgressBar({});
        this.bindProperties();
        this.ej2Instances._setProperties = this.ej2Instances.setProperties;
        this.ej2Instances.setProperties = this.setProperties;
        tempProxy = this;
    }
    public setProperties(prop: any, muteOnChange: boolean): void {
        if(this.isVue3) {
            this.models = !this.models ? this.ej2Instances.referModels : this.models;
        }
        if (this.ej2Instances && this.ej2Instances._setProperties) {
            this.ej2Instances._setProperties(prop, muteOnChange);
        }
        if (prop && this.models && this.models.length) {
            Object.keys(prop).map((key: string): void => {
                this.models.map((model: string): void => {
                    if ((key === model) && !(/datasource/i.test(key))) {
                        if (this.isVue3) {
                            this.ej2Instances.vueInstance.$emit('update:' + key, prop[key]);
                        } else {
                            (this as any).$emit('update:' + key, prop[key]);
                        }
                    }
                });
            });
        }
    }

    public render(createElement: any) {
        let h: any = gh || createElement;
        let slots: any = null;
        if(!isNullOrUndefined((this as any).$slots.default)) {
            slots = gh ? (this as any).$slots.default() : (this as any).$slots.default;
        }
        return h('div', slots);
    }
    
    public calculateProgressRange(value: number, minimum?: number, maximum?: number): number {
        return this.ej2Instances.calculateProgressRange(value, minimum, maximum);
    }

    public calculateSegmentSize(width: number, thickness: number): string {
        return this.ej2Instances.calculateSegmentSize(width, thickness);
    }

    public createClipPath(clipPath?: Object, range?: number, d?: string, refresh?: boolean, thickness?: number, isLabel?: boolean, isMaximum?: boolean): Object {
        return this.ej2Instances.createClipPath(clipPath, range, d, refresh, thickness, isLabel, isMaximum);
    }

    public getPathLine(x: number, width: number, thickness: number): string {
        return this.ej2Instances.getPathLine(x, width, thickness);
    }

    public hide(): void {
        return this.ej2Instances.hide();
    }

    public removeSvg(): void {
        return this.ej2Instances.removeSvg();
    }

    public requiredModules(): Object[] {
        return this.ej2Instances.requiredModules();
    }

    public show(): void {
        return this.ej2Instances.show();
    }
}

export const ProgressBarPlugin = {
    name: 'ejs-progressbar',
    install(Vue: any) {
        Vue.component(ProgressBarPlugin.name, ProgressBarComponent);
        Vue.component(ProgressBarAnnotationPlugin.name, ProgressBarAnnotationDirective);
        Vue.component(ProgressBarAnnotationsPlugin.name, ProgressBarAnnotationsDirective);

    }
}

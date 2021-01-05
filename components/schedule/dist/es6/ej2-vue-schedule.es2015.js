import { RecurrenceEditor, Schedule } from '@syncfusion/ej2-schedule';
import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';
import { isUndefined } from '@syncfusion/ej2-base';

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let ViewsDirective = class ViewsDirective extends Vue {
    render() {
        return;
    }
};
ViewsDirective = __decorate([
    EJComponentDecorator({})
], ViewsDirective);
const ViewsPlugin = {
    name: 'e-views',
    install(Vue$$1) {
        Vue$$1.component(ViewsPlugin.name, ViewsDirective);
    }
};
/**
 * `e-views` directive represent a view of the VueJS Schedule.
 * It must be contained in a Schedule component(`ejs-schedule`).
 * ```vue
 * <ejs-schedule>
 *   <e-views>
 *    <e-view option='day' dateFormat='dd MMM'></e-view>
 *    <e-view option='week'></e-view>
 *   </e-views>
 * </ejs-schedule>
 * ```
 */
let ViewDirective = class ViewDirective extends Vue {
    render() {
        return;
    }
};
ViewDirective = __decorate([
    EJComponentDecorator({})
], ViewDirective);
const ViewPlugin = {
    name: 'e-view',
    install(Vue$$1) {
        Vue$$1.component(ViewPlugin.name, ViewDirective);
    }
};

var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let ResourcesDirective = class ResourcesDirective extends Vue {
    render() {
        return;
    }
};
ResourcesDirective = __decorate$1([
    EJComponentDecorator({})
], ResourcesDirective);
const ResourcesPlugin = {
    name: 'e-resources',
    install(Vue$$1) {
        Vue$$1.component(ResourcesPlugin.name, ResourcesDirective);
    }
};
/**
 * `e-resources` directive represent a resources of the VueJS Schedule.
 * It must be contained in a Schedule component(`ejs-schedule`).
 * ```vue
 * <ejs-schedule>
 *   <e-resources>
 *    <e-resource field='RoomId' name='Rooms'></e-resource>
 *    <e-resource field='OwnerId' name='Owners'></e-resource>
 *   </e-resources>
 * </ejs-schedule>
 * ```
 */
let ResourceDirective = class ResourceDirective extends Vue {
    render() {
        return;
    }
};
ResourceDirective = __decorate$1([
    EJComponentDecorator({})
], ResourceDirective);
const ResourcePlugin = {
    name: 'e-resource',
    install(Vue$$1) {
        Vue$$1.component(ResourcePlugin.name, ResourceDirective);
    }
};

var __decorate$2 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let HeaderRowsDirective = class HeaderRowsDirective extends Vue {
    render() {
        return;
    }
};
HeaderRowsDirective = __decorate$2([
    EJComponentDecorator({})
], HeaderRowsDirective);
const HeaderRowsPlugin = {
    name: 'e-header-rows',
    install(Vue$$1) {
        Vue$$1.component(HeaderRowsPlugin.name, HeaderRowsDirective);
    }
};
/**
 * `e-header-rows` directive represent a header rows of the VueJS Schedule.
 * It must be contained in a Schedule component(`ejs-schedule`).
 * ```vue
 * <ejs-schedule>
 *   <e-header-rows>
 *    <e-header-row option='Week'></e-header-row>
 *    <e-header-row option='Date'></e-header-row>
 *   </e-header-rows>
 * </ejs-schedule>
 * ```
 */
let HeaderRowDirective = class HeaderRowDirective extends Vue {
    render() {
        return;
    }
};
HeaderRowDirective = __decorate$2([
    EJComponentDecorator({})
], HeaderRowDirective);
const HeaderRowPlugin = {
    name: 'e-header-row',
    install(Vue$$1) {
        Vue$$1.component(HeaderRowPlugin.name, HeaderRowDirective);
    }
};

var __decorate$3 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const properties = ['agendaDaysCount', 'allowDragAndDrop', 'allowInline', 'allowKeyboardInteraction', 'allowMultiCellSelection', 'allowMultiRowSelection', 'allowResizing', 'calendarMode', 'cellHeaderTemplate', 'cellTemplate', 'cssClass', 'currentView', 'dateFormat', 'dateHeaderTemplate', 'editorTemplate', 'enablePersistence', 'enableRecurrenceValidation', 'enableRtl', 'endHour', 'eventDragArea', 'eventSettings', 'firstDayOfWeek', 'group', 'headerRows', 'height', 'hideEmptyAgendaDays', 'locale', 'maxDate', 'minDate', 'quickInfoOnSelectionEnd', 'quickInfoTemplates', 'readonly', 'resourceHeaderTemplate', 'resources', 'rowAutoHeight', 'selectedDate', 'showHeaderBar', 'showQuickInfo', 'showTimeIndicator', 'showWeekNumber', 'showWeekend', 'startHour', 'timeScale', 'timezone', 'views', 'width', 'workDays', 'workHours', 'actionBegin', 'actionComplete', 'actionFailure', 'cellClick', 'cellDoubleClick', 'created', 'dataBinding', 'dataBound', 'destroyed', 'drag', 'dragStart', 'dragStop', 'eventClick', 'eventRendered', 'hover', 'moreEventsClick', 'navigating', 'popupClose', 'popupOpen', 'renderCell', 'resizeStart', 'resizeStop', 'resizing', 'select'];
const modelProps = ['currentView', 'selectedDate'];
/**
 * `ej-schedule` represents the VueJS Schedule Component.
 * ```vue
 * <ejs-schedule></ejs-schedule>
 * ```
 */
let ScheduleComponent = class ScheduleComponent extends ComponentBase {
    constructor() {
        super();
        this.propKeys = properties;
        this.models = modelProps;
        this.hasChildDirective = true;
        this.hasInjectedModules = true;
        this.tagMapper = { "e-views": "e-view", "e-resources": "e-resource", "e-header-rows": "e-header-row" };
        this.tagNameMapper = { "e-header-rows": "e-headerRows" };
        this.ej2Instances = new Schedule({});
        this.ej2Instances._trigger = this.ej2Instances.trigger;
        this.ej2Instances.trigger = this.trigger;
        this.bindProperties();
        this.ej2Instances._setProperties = this.ej2Instances.setProperties;
        this.ej2Instances.setProperties = this.setProperties;
    }
    setProperties(prop, muteOnChange) {
        if (this.ej2Instances && this.ej2Instances._setProperties) {
            this.ej2Instances._setProperties(prop, muteOnChange);
        }
        if (prop && this.models && this.models.length) {
            Object.keys(prop).map((key) => {
                this.models.map((model) => {
                    if ((key === model) && !(/datasource/i.test(key))) {
                        this.$emit('update:' + key, prop[key]);
                    }
                });
            });
        }
    }
    trigger(eventName, eventProp, successHandler) {
        if ((eventName === 'change' || eventName === 'input') && this.models && (this.models.length !== 0)) {
            let key = this.models.toString().match(/checked|value/) || [];
            let propKey = key[0];
            if (eventProp && key && !isUndefined(eventProp[propKey])) {
                this.$emit('update:' + propKey, eventProp[propKey]);
                this.$emit('modelchanged', eventProp[propKey]);
            }
        }
        else if ((eventName === 'actionBegin' && eventProp.requestType === 'dateNavigate') && this.models && (this.models.length !== 0)) {
            let key = this.models.toString().match(/currentView|selectedDate/) || [];
            let propKey = key[0];
            if (eventProp && key && !isUndefined(eventProp[propKey])) {
                this.$emit('update:' + propKey, eventProp[propKey]);
                this.$emit('modelchanged', eventProp[propKey]);
            }
        }
        if (this.ej2Instances && this.ej2Instances._trigger) {
            this.ej2Instances._trigger(eventName, eventProp, successHandler);
        }
    }
    render(createElement) {
        return createElement('div', this.$slots.default);
    }
    addEvent(data) {
        return this.ej2Instances.addEvent(data);
    }
    addResource(resources, name, index) {
        return this.ej2Instances.addResource(resources, name, index);
    }
    changeCurrentView(viewName, viewIndex) {
        return this.ej2Instances.changeCurrentView(viewName, viewIndex);
    }
    closeEditor() {
        return this.ej2Instances.closeEditor();
    }
    closeQuickInfoPopup() {
        return this.ej2Instances.closeQuickInfoPopup();
    }
    collapseResource(resourceId, name) {
        return this.ej2Instances.collapseResource(resourceId, name);
    }
    deleteEvent(id, currentAction) {
        return this.ej2Instances.deleteEvent(id, currentAction);
    }
    expandResource(resourceId, name) {
        return this.ej2Instances.expandResource(resourceId, name);
    }
    exportToExcel(excelExportOptions) {
        return this.ej2Instances.exportToExcel(excelExportOptions);
    }
    exportToICalendar(fileName, customData) {
        return this.ej2Instances.exportToICalendar(fileName, customData);
    }
    getBlockEvents(startDate, endDate, includeOccurrences) {
        return this.ej2Instances.getBlockEvents(startDate, endDate, includeOccurrences);
    }
    getCellDetails(tdCol) {
        return this.ej2Instances.getCellDetails(tdCol);
    }
    getCurrentViewDates() {
        return this.ej2Instances.getCurrentViewDates();
    }
    getCurrentViewEvents() {
        return this.ej2Instances.getCurrentViewEvents();
    }
    getCurrentViewIndex() {
        return this.ej2Instances.getCurrentViewIndex();
    }
    getDeletedOccurrences(recurrenceData) {
        return this.ej2Instances.getDeletedOccurrences(recurrenceData);
    }
    getEventDetails(element) {
        return this.ej2Instances.getEventDetails(element);
    }
    getEventMaxID() {
        return this.ej2Instances.getEventMaxID();
    }
    getEvents(startDate, endDate, includeOccurrences) {
        return this.ej2Instances.getEvents(startDate, endDate, includeOccurrences);
    }
    getOccurrencesByID(eventID) {
        return this.ej2Instances.getOccurrencesByID(eventID);
    }
    getOccurrencesByRange(startTime, endTime) {
        return this.ej2Instances.getOccurrencesByRange(startTime, endTime);
    }
    getResourceCollections() {
        return this.ej2Instances.getResourceCollections();
    }
    getResourcesByIndex(index) {
        return this.ej2Instances.getResourcesByIndex(index);
    }
    getSelectedElements() {
        return this.ej2Instances.getSelectedElements();
    }
    hideSpinner() {
        return this.ej2Instances.hideSpinner();
    }
    importICalendar(fileContent) {
        return this.ej2Instances.importICalendar(fileContent);
    }
    isSlotAvailable(startTime, endTime, groupIndex) {
        return this.ej2Instances.isSlotAvailable(startTime, endTime, groupIndex);
    }
    openEditor(data, action, isEventData, repeatType) {
        return this.ej2Instances.openEditor(data, action, isEventData, repeatType);
    }
    print() {
        return this.ej2Instances.print();
    }
    refresh() {
        return this.ej2Instances.refresh();
    }
    refreshEvents() {
        return this.ej2Instances.refreshEvents();
    }
    removeResource(resourceId, name) {
        return this.ej2Instances.removeResource(resourceId, name);
    }
    renderTemplates() {
        return this.ej2Instances.renderTemplates();
    }
    resetTemplates(templates) {
        return this.ej2Instances.resetTemplates(templates);
    }
    resetWorkHours(dates, start, end, groupIndex) {
        return this.ej2Instances.resetWorkHours(dates, start, end, groupIndex);
    }
    saveEvent(data, currentAction) {
        return this.ej2Instances.saveEvent(data, currentAction);
    }
    scrollTo(hour, scrollDate) {
        return this.ej2Instances.scrollTo(hour, scrollDate);
    }
    scrollToResource(resourceId, groupName) {
        return this.ej2Instances.scrollToResource(resourceId, groupName);
    }
    setRecurrenceEditor(recurrenceEditor) {
        return this.ej2Instances.setRecurrenceEditor(recurrenceEditor);
    }
    setResourceCollections(resourceCol) {
        return this.ej2Instances.setResourceCollections(resourceCol);
    }
    setWorkHours(dates, start, end, groupIndex) {
        return this.ej2Instances.setWorkHours(dates, start, end, groupIndex);
    }
    showSpinner() {
        return this.ej2Instances.showSpinner();
    }
};
ScheduleComponent = __decorate$3([
    EJComponentDecorator({
        props: properties,
        model: {
            event: 'modelchanged'
        }
    })
], ScheduleComponent);
const SchedulePlugin = {
    name: 'ejs-schedule',
    install(Vue$$1) {
        Vue$$1.component(SchedulePlugin.name, ScheduleComponent);
        Vue$$1.component(ViewPlugin.name, ViewDirective);
        Vue$$1.component(ViewsPlugin.name, ViewsDirective);
        Vue$$1.component(ResourcePlugin.name, ResourceDirective);
        Vue$$1.component(ResourcesPlugin.name, ResourcesDirective);
        Vue$$1.component(HeaderRowPlugin.name, HeaderRowDirective);
        Vue$$1.component(HeaderRowsPlugin.name, HeaderRowsDirective);
    }
};

var __decorate$4 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const properties$1 = ['calendarMode', 'cssClass', 'dateFormat', 'enablePersistence', 'enableRtl', 'firstDayOfWeek', 'frequencies', 'locale', 'maxDate', 'minDate', 'selectedType', 'startDate', 'value', 'change'];
const modelProps$1 = [];
/**
 * `ejs-recurrenceeditor` represents the VueJS RecurrenceEditor Component.
 * ```vue
 * <ejs-recurrenceeditor></ejs-recurrenceeditor>
 * ```
 */
let RecurrenceEditorComponent = class RecurrenceEditorComponent extends ComponentBase {
    constructor() {
        super();
        this.propKeys = properties$1;
        this.models = modelProps$1;
        this.hasChildDirective = false;
        this.hasInjectedModules = false;
        this.tagMapper = {};
        this.tagNameMapper = {};
        this.ej2Instances = new RecurrenceEditor({});
        this.bindProperties();
        this.ej2Instances._setProperties = this.ej2Instances.setProperties;
        this.ej2Instances.setProperties = this.setProperties;
    }
    setProperties(prop, muteOnChange) {
        if (this.ej2Instances && this.ej2Instances._setProperties) {
            this.ej2Instances._setProperties(prop, muteOnChange);
        }
        if (prop && this.models && this.models.length) {
            Object.keys(prop).map((key) => {
                this.models.map((model) => {
                    if ((key === model) && !(/datasource/i.test(key))) {
                        this.$emit('update:' + key, prop[key]);
                    }
                });
            });
        }
    }
    render(createElement) {
        return createElement('div', this.$slots.default);
    }
    getRecurrenceDates(startDate, rule, excludeDate, maximumCount, viewDate) {
        return this.ej2Instances.getRecurrenceDates(startDate, rule, excludeDate, maximumCount, viewDate);
    }
    getRecurrenceRule() {
        return this.ej2Instances.getRecurrenceRule();
    }
    getRuleSummary(rule) {
        return this.ej2Instances.getRuleSummary(rule);
    }
    setRecurrenceRule(rule, startDate) {
        return this.ej2Instances.setRecurrenceRule(rule, startDate);
    }
    updateRuleUntilDate(startDate) {
        return this.ej2Instances.updateRuleUntilDate(startDate);
    }
};
RecurrenceEditorComponent = __decorate$4([
    EJComponentDecorator({
        props: properties$1
    })
], RecurrenceEditorComponent);
const RecurrenceEditorPlugin = {
    name: 'ejs-recurrenceeditor',
    install(Vue$$1) {
        Vue$$1.component(RecurrenceEditorPlugin.name, RecurrenceEditorComponent);
    }
};

export { ViewsDirective, ViewDirective, ViewsPlugin, ViewPlugin, ResourcesDirective, ResourceDirective, ResourcesPlugin, ResourcePlugin, HeaderRowsDirective, HeaderRowDirective, HeaderRowsPlugin, HeaderRowPlugin, ScheduleComponent, SchedulePlugin, RecurrenceEditorComponent, RecurrenceEditorPlugin };
export * from '@syncfusion/ej2-schedule';
//# sourceMappingURL=ej2-vue-schedule.es2015.js.map

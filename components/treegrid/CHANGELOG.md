# Changelog

## [Unreleased]

## 23.2.7 (2023-12-05)

### TreeGrid

#### Bug Fixes

- `#I517211` - Exception throws on dynamically changing the stacked column and normal column.
- `#FB48417` - Fixed the issue where a Script Error was thrown when searching for an invalid value and when rendering empty data.

## 23.2.6 (2023-11-28)

### TreeGrid

#### Bug Fixes

- `#I522828` - Fixed an issue where the Excel export datasource properties were not being applied correctly for remote data binding.
- `#I523652` - Fixed an issue where the cell saving functionality was not working correctly after pressing enter or update in the treegrid.

## 23.2.4 (2023-11-20)

### TreeGrid

#### Bug Fixes

- `#I511389` - Fixed an issue where the expand all/collapse all functionality was not working correctly when the `EnableCollapseAll` property enabled in the virtualization feature.
- `#I507506` - Fixed an issue where the template was not rendered when using frozen columns in a treegrid.
- `#I512641` - Fixed the issue where the header checkbox was not functioning correctly in the checkbox column.
- `#I520059` - Fixed an issue where the clipboard functionality (Copy/Paste) on excel would paste hidden column values when selecting a row.

## 23.1.43 (2023-10-31)

### TreeGrid

#### Bug Fixes

- `#I499002` - Fixed a bug where a script error would occur when editing and focusing out on a record.
- `#I502660` - Fixed issue with external filter not working properly when using virtualization feature.

## 23.1.39 (2023-10-04)

### Tree Grid

#### Bug Fixes

- `#I502102` - Fixed the issue where the drop index was displaying as `Nan` when dropping a row in white space.

## 23.1.36 (2023-09-15)

### Tree Grid

#### Features

- `#I341079` - Provided support for exporting data to PDF, CSV, and Excel formats using server-side functionality. Please find the demo [here](https://ej2.syncfusion.com/aspnetcore/TreeGrid/ServerSideExporting#/material3).
- Added support for the new `fixed` mode within the `freeze` property of column settings. When a column is set as `fixed`, it will stay within the viewport during horizontal scrolling, enhancing the user experience with improved visibility and efficiency.

- Provided support for inline editing with virtualization enabled. Please find the demo [here](https://ej2.syncfusion.com/vue/demos/#/bootstrap5/tree-grid/virtual-scrolling.html).
- `#I323425`, `#I332700`, `#I344742`, `#I375307` - Provided support for frozen column with virtualization enabled.

#### Breaking changes

- Optimized the frozen columns feature in Tree Grid and thus changed the dom structure of tree grid from two table to single table architecture. Also, the following methods have been deprecated, and it's recommended to use the following alternatives instead.

| Deprecated Methods | Previous | Current | Suggested Alternative Methods | 
|---|---|---|---|
|  | `getMoavableRows` | This method returns only the movable table rows `(tr's)`. | This method will return all table rows `(tr's)` of the entire table. The movable cells within the tr element can be selected using the `e-unfreeze` class. | `getRows()` |  | 
| `getFrozenRightRows()` | This method returns only the table rows `(tr's)` from the freeze right table. | This method will return all the rows `(tr’s)` of the entire table. The frozen right cells can be selected using the `e-rightfreeze` class. | `getRows()` | 
| `getMovableRowByIndex()` <br> `getFrozenRightRowByIndex()` | * `getMovableRowByIndex` - select a movable row <br> *`getFrozenRightRowByIndex` - select a right freeze row. | This method will return the table row `(tr)` based on the given index. Additionally, class names for table cells `(td's)` have been separated as follows: <br> * Left-Freeze: `e-leftfreeze` <br> * Movable: `e-unfreeze` <br> | `getRowByIndex()` | 
| `getMovableCellFromIndex()` <br> `getFrozenRightCellFromIndex()` | * `getMovableCellFromIndex()` - select a particular cell in the movable table. <br> *`getFrozenRightCellFromIndex()` - select a particular cell in the right freeze table. | No change | `getCellFromIndex()` | 
| `getMovableDataRows()` <br> `getFrozenRightDataRows()` | These methods return the viewport data rows for the freeze, movable tables separately. | This method, will return the entire viewport data rows. | `getDataRows()` | 
| `getMovableColumnHeaderByIndex()` <br> `getFrozenRightColumnHeaderByIndex()` <br> `getFrozenLeftColumnHeaderByIndex()` | These methods select the movable, right freeze, and left freeze headers from the table separately. | No change | `getColumnHeaderByIndex`() | 

## 20.2.36 (2022-06-30)

### Tree Grid

#### Features

- Provided support for inline editing with virtualization enabled. Please find the demo [here](https://ej2.syncfusion.com/demos/#/bootstrap5/tree-grid/virtual-scrolling.html).
- `#I323425`, `#I332700`, `#I344742`, `#I375307` - Provided support for frozen column with virtualization enabled.

- `#I334966`, `#I373929`, `#I332693`, `#I342835`, `#F172606`, `#F171250`, `#F171248` - Provided row drag and drop support with virtualization feature enabled.
- `#I367483` - Provided support for row indent and outdent functionality. Please find the demo link [here](https://ej2.syncfusion.com/vue/demos/#/bootstrap5/tree-grid/inline-editing).

## 19.2.44 (2021-06-30)

### Tree Grid

#### Bug Fixes

- `#332604` - Resolved white space issue while using less number of records with Virtualization.

- `#I329350` - Immutable mode works fine for date values and row reordering.
- `#I329988`, `#I331155` - Editing a newly added child record works fine with self referential data.

## 18.4.30 (2020-12-17)

### Tree Grid

#### New Features

- `#294082` - Provided Immutable Support to refresh specific rows while perform Tree Grid actions.
- `#283491` - Provided error handling support to easily rectify errors in sample side.
- `#298682`, `#299561` - Added getVisibleRecords API to get the visible records based on collapsed rows state.

#### Bug Fixes

- `#F157882`- After editing the row using `updateRow` method, `getCurrentViewRecords` method updated properly.
- `#F157882`- When editing with a double click, it works fine when we only have one record.
- `#289600` - Records get expanded properly after collapsing all records using `collapseAtLevel` method in observable binding.
- `#F157099` - Virtualization with Aggregates works fine with large number of records.
- `#296233` - Row Drag and Drop within treegrid works fine.
- `#297986` - Row Drag and drop within treegrid works fine with checkbox enabled.
- `#F158886` - Cell editing with frozen columns works fine.
- `#299761` - Treegrid column width renders fine in Internet Explorer when Virtualization is enabled.
- `#301861` - Tree Grid dataSource updated properly while using setCellValue method.
- `#F159697` -  Order of child records are displayed correctly after editing in remote data binding.
- `292453` - Treegrid refresh method works fine after updating the data.

- `#F157882`- After editing the row using `updateRow` method, `getCurrentViewRecords` method updated properly.
- `#F157882`- When editing with a double click, it works fine when we only have one record.

## 18.3.35 (2020-10-01)

### TreeGrid

#### Bug Fixes

- `#F157258` - `updateRow` method works fine for updating collapsed data.
- `#292933` - checkbox rendered properly while using  the template column.
- `#289685` - Aggregate Column Formatting is working fine
- `#288542` - The Expand / Collapse icon has been rendered properly while enabling expand state mapping and adding a new record.
- `#287235` - While enabling expand state mapping the Expand / Collapse icon works fine at nested child levels.
- `#285434`- Column SortComparer function works fine with null values for RemoteSaveAdaptor datasource.
- `#284987`- Records rendered properly while using remote save adaptor in created event.
- `#285434`- Column SortComparer function works fine with null values in datasource.
- `#F155077`- Records rendered properly while using remote data with jQuery unobtrusive library.

## 18.2.44 (2020-07-07)

### TreeGrid

#### Bug Fixes

- `#279109` - Checkbox checked properly for child records in remote data.
- `#277364`, `#279732` - Checkbox with `allowRowDragAndDrop` property rendered properly after editing and cancelling in cell edit mode.
- `#277364` - Checkbox with `autoCheckHierarchy` property rendered properly after editing and cancelling in cell edit mode.
- `#278266` - Edit type `dropdownedit` is working properly in cell edit mode when enter key is pressed.
- `#272026` - `updateRow` method works fine for updating treegrid data source.
- `#273309` - Editing the zeroth level added record works fine in Batch mode.
- `#277361` - Auto generated columns work fine when two treegrids are rendered on the same page.

#### New Features

- `#258863`, `#271677` - Expand & Collapse child rows support has been provided in Excel Export.
- Columnchooser support has been provided that allows user to show or hide columns dynamically.
- Provided support for Editing with Virtualization feature.

#### Breaking Changes

- Now `data`, `row` these Tree Grid selection event arguments are get array values only when we perform multi selection. Please find modified event arguments and it types from the below table,

| `Properties` | `Type` | 
|---|---|
| `data` | `Object or Object[]` | 
| `rowIndex` | `number` | 
| `rowIndexes` | `number[]` | 
| `row` | `Element or Element[]` | 

## 17.4.39 (2019-12-17)

### TreeGrid

#### New Features

- AutoFill support has been provided that allows users to copy the data of selected cells and paste it to another cells by dragging.

#### Breaking Changes

- Default value of column's `disableHtmlEncode` is set to true, so the HTML tags can be displayed in the Grid header and content by default. To display it as html content `disableHtmlEncode` need to be set as false.

- Default value of column's `disableHtmlEncode` is set to true, so the HTML tags can be displayed in the Grid header and content by default. To display it as html content `disableHtmlEncode` need to be set as false.


## 17.2.48-beta (2019-08-28)

### TreeGrid

#### New Features

- Checkbox selection support has been provided that allows users to select rows using checkbox.
- Checkbox Column support has been provided that allows users to check rows using checkbox in treegrid column.

#### Bug Fixes

- Change detection for properties `dataSource` and `query` were handled for remote data.
- Edited records can be searched/filtered.
- Inner level records will be collapsed/expanded after filtering/searching actions.

## 17.1.1-beta (2019-01-29)

### TreeGrid

#### Bug Fixes

- `Query` maintenance support provided for `refresh` method after expanding any child rows.
- Property change support for `height` property has been provided.
- Expand icon is prevented from displaying for the root/zeroth level record which has `hasChildMapping` field as false.
- Child records of third level or its successor displays properly based on their hierarchy relation in self reference data binding.

#### New Features

- `Excel-Like Filtering` support is provided that allows users to create complex filter criteria for a column by allowing users to select possible filter values from a checkbox list. The advanced filter can be used to build complex filter criteria.

## 16.4.45 (2019-01-02)

### TreeGrid

#### Bug Fixes

- Added events for the column menu feature and added `columnMenuItems` API to modify the column menu items in column menu.
- Added `sortComparer` API to perform custom sorting in TreeGrid.

## 16.4.44 (2018-12-24)

### TreeGrid

#### Bug Fixes

- Expanding and Collapsing records is working fine when `pageSizeMode` is set as `All`.
- `expandAtLevel`, `collapseAtLevel`, `expandAll` and `collapseAll` methods are working fine when `pageSizeMode` is set as `All`.


## 19.1.54 (2021-03-30)

### Tree Grid

#### New Features

- `#274416, #274607, #313192, #F159014` - Provided Infinite Scrolling support for Tree Grid which allows you to lazy load data when scroller reaches the near end.
- `#280065` - Provided support to maintain Expand/Collapse state of Tree Grid while exporting the data.


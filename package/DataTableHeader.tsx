import { createStyles, type CSSObject } from '@mantine/core';
import { forwardRef, type CSSProperties, type ForwardedRef } from 'react';
import DataTableColumnGroupHeaderCell from './DataTableColumnGroupHeaderCell';
import DataTableHeaderCell from './DataTableHeaderCell';
import DataTableHeaderSelectorCell from './DataTableHeaderSelectorCell';
import type { DataTableColumn, DataTableSortProps } from './types';
import type { DataTableColumnGroup } from './types/DataTableColumnGroup';

const useStyles = createStyles((theme) => ({
  root: {
    zIndex: 2,
    position: 'sticky',
    top: 0,
    background: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },
  textSelectionDisabled: {
    userSelect: 'none',
  },
}));

type DataTableHeaderProps<T> = {
  className?: string;
  style?: CSSObject;
  sortStatus: DataTableSortProps['sortStatus'];
  sortIcons: DataTableSortProps['sortIcons'];
  onSortStatusChange: DataTableSortProps['onSortStatusChange'];
  columns: DataTableColumn<T>[];
  groups: readonly DataTableColumnGroup<T>[] | undefined;
  selectionVisible: boolean;
  selectionChecked: boolean;
  selectionIndeterminate: boolean;
  onSelectionChange: (() => void) | undefined;
  selectionCheckboxProps: Record<string, unknown>;
  leftShadowVisible: boolean;
};

export default forwardRef(function DataTableHeader<T>(
  {
    className,
    style,
    sortStatus,
    sortIcons,
    onSortStatusChange,
    columns,
    groups,
    selectionVisible,
    selectionChecked,
    selectionIndeterminate,
    onSelectionChange,
    selectionCheckboxProps,
    leftShadowVisible,
  }: DataTableHeaderProps<T>,
  ref: ForwardedRef<HTMLTableSectionElement>
) {
  const { classes, cx } = useStyles();

  const selectAll = selectionVisible ? (
    <DataTableHeaderSelectorCell
      shadowVisible={leftShadowVisible}
      checked={selectionChecked}
      indeterminate={selectionIndeterminate}
      checkboxProps={selectionCheckboxProps}
      onChange={onSelectionChange}
      rowSpan={groups ? 2 : undefined}
    />
  ) : null;

  return (
    <thead className={cx(classes.root, className)} style={style as CSSProperties} ref={ref}>
      {groups && (
        <tr>
          {selectAll}
          {groups.map((group) => (
            <DataTableColumnGroupHeaderCell key={group.id} group={group} />
          ))}
        </tr>
      )}
      <tr>
        {!groups && selectAll}
        {columns.map(
          ({
            accessor,
            hidden,
            visibleMediaQuery,
            textAlignment,
            width,
            title,
            sortable,
            titleClassName,
            titleStyle,
            titleSx,
            filter,
            filtering,
          }) =>
            hidden ? null : (
              <DataTableHeaderCell<T>
                key={accessor}
                className={titleClassName}
                style={titleStyle}
                sx={titleSx}
                accessor={accessor}
                visibleMediaQuery={visibleMediaQuery}
                textAlignment={textAlignment}
                width={width}
                title={title}
                sortable={sortable}
                sortStatus={sortStatus}
                sortIcons={sortIcons}
                onSortStatusChange={onSortStatusChange}
                filter={filter}
                filtering={filtering}
              />
            )
        )}
      </tr>
    </thead>
  );
}) as <T>(props: DataTableHeaderProps<T> & { ref: ForwardedRef<HTMLTableSectionElement> }) => JSX.Element;

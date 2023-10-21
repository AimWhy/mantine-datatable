import { MantineSize } from '@mantine/core';
import { DataTable, DataTableVerticalAlignment } from '__PACKAGE__';
import companies from '~/data/companies.json';

const records = companies.slice(0, 5);

export function BasicTablePropertiesExample({
  withTableBorder,
  withRowBorders,
  noHeader,
  customizeBorderRadius,
  borderRadius,
  customizeShadow,
  shadow,
  withColumnBorders,
  striped,
  highlightOnHover,
  customizeHorizontalSpacing,
  horizontalSpacing,
  customizeVerticalSpacing,
  verticalSpacing,
  customizeFz,
  fz,
  customizeVerticalAlignment,
  verticalAlignment,
}: {
  withTableBorder: boolean;
  withRowBorders: boolean;
  noHeader: boolean;
  customizeBorderRadius: boolean;
  borderRadius: MantineSize;
  customizeShadow: boolean;
  shadow: MantineSize;
  withColumnBorders: boolean;
  striped: boolean;
  highlightOnHover: boolean;
  customizeHorizontalSpacing: boolean;
  horizontalSpacing: MantineSize;
  customizeVerticalSpacing: boolean;
  verticalSpacing: MantineSize;
  customizeFz: boolean;
  fz: MantineSize;
  customizeVerticalAlignment: boolean;
  verticalAlignment: DataTableVerticalAlignment;
}) {
  // example-start
  return (
    // prettier-ignore
    <DataTable
      withTableBorder={withTableBorder}
      noHeader={noHeader}
      borderRadius={customizeBorderRadius ? borderRadius : undefined}
      shadow={customizeShadow ? shadow : undefined}
      withRowBorders={withRowBorders}
      withColumnBorders={withColumnBorders}
      striped={striped}
      highlightOnHover={highlightOnHover}
      horizontalSpacing={customizeHorizontalSpacing ? horizontalSpacing : undefined}
      verticalSpacing={customizeVerticalSpacing ? verticalSpacing : undefined}
      fz={customizeFz ? fz : undefined}
      verticalAlignment={customizeVerticalAlignment ? verticalAlignment : undefined}
      columns={[
        { accessor: 'name' },
        { accessor: 'missionStatement', width: 150 },
        { accessor: 'streetAddress' },
        { accessor: 'city' },
        { accessor: 'state' }
      ]}
      records={records}
    />
  );
  // example-end
}

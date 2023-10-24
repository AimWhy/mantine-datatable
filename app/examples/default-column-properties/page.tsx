import { Code } from '@mantine/core';
import { CodeBlock } from '~/components/CodeBlock';
import { InternalLink } from '~/components/InternalLink';
import { PageNavigation } from '~/components/PageNavigation';
import { PageTitle } from '~/components/PageTitle';
import { Txt } from '~/components/Txt';
import { readCodeFile } from '~/lib/code';
import { getRouteMetadata } from '~/lib/utils';
import { DefaultColumnPropertiesExample } from './DefaultColumnPropertiesExample';

const PATH = '/examples/default-column-properties';

export const metadata = getRouteMetadata(PATH);

export default async function DefaultColumnPropertiesExamplePage() {
  const code = await readCodeFile<string>(`${PATH}/DefaultColumnPropertiesExample.tsx`);

  return (
    <>
      <PageTitle of={PATH} />
      <Txt>
        If you find yourself repeating the same properties over and over again for multiple columns, you can use{' '}
        <Code>defaultColumnProps</Code> (which accepts a subset of{' '}
        <InternalLink to="/examples/column-properties">column properties</InternalLink>) to set them once and use as a
        fallback for all columns:
      </Txt>
      <CodeBlock code={code} />
      <Txt>The code above will produce the following result:</Txt>
      <DefaultColumnPropertiesExample />
      <Txt>
        In certain scenarios, you can also use a render fallback function. Head over to the next example to learn more.
      </Txt>
      <PageNavigation of={PATH} />
    </>
  );
}

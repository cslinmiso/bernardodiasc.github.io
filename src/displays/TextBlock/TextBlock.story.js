import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs/react'
import Docs from 'stories/containers/Docs'
import HTMLSample from 'stories/samples/HTMLSample'

import TextBlock from './TextBlock'
import TextBlockReadme from './README.md'
storiesOf('Displays/TextBlock', module)
  .addDecorator(withKnobs)
  .add('Info', () => <Docs>{TextBlockReadme}</Docs>)
  .add('Example', () => (
    <TextBlock>
      <HTMLSample />
    </TextBlock>
  ))
  .add('Pure HTML', () => <HTMLSample />)
  .add('Minimal render', () => <TextBlock />)

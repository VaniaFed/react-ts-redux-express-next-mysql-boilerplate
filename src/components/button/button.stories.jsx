import React from 'react';
import { storiesOf } from '@storybook/react';

import { Button } from './index';

storiesOf('Button', module).add('regular', () => <Button text="Hello" />);

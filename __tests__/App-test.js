/**
 * @format
 */

import 'react-native';
import React from 'react';
import AppNative from '../App.Native';
import AppWeb from '../App.Web'
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('mobile renders correctly', () => {
  renderer.create(<AppNative />);
});

it('web renders correctly', () => {
  renderer.create(<AppWeb />);
});

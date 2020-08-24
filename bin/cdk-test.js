#!/usr/bin/env node

const cdk = require('@aws-cdk/core');
const { CdkTestStack } = require('../lib/cdk-test-stack');

const app = new cdk.App();
new CdkTestStack(app, 'CdkTestStack');

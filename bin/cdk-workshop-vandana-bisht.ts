#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { CdkWorkshopVandanaBishtStack } from '../lib/cdk-workshop-vandana-bisht-stack';

const app = new cdk.App();
new CdkWorkshopVandanaBishtStack(app, 'CdkWorkshopVandanaBishtStack');

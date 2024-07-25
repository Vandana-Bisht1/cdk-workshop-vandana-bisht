import * as cdk from 'aws-cdk-lib';
import * as codecommit from 'aws-cdk-lib/aws-codecommit';
import { Construct } from 'constructs';

export class WorkshopPipelineStack extends cdk.Stack {
    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        // Creates a CodeCommit repository called 'WorkshopRepoVandanaBisht'
        new codecommit.Repository(this, 'WorkshopRepoVandanaBisht', {
            repositoryName: "WorkshopRepoVandanaBisht"
        });

        // Pipeline code goes here
    }
}
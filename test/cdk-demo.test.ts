import { Template}from '@aws-cdk/assertions';
import * as cdk from '@aws-cdk/core';
import * as cdkdemo from '../lib/cdk-demo-stack'
import { SynthUtils} from '@aws-cdk/assert';

// unit testing 
const app = new cdk.App();
// fine grained

test('test to check the queue name',()=>{

const stack = new cdkdemo.CdkDemoStack(app,'Myteststack');

const template = Template.fromStack(stack);

template.hasResourceProperties('AWS::SQS::Queue',{
    QueueName: 'demo-jan29'
});

});


// snapshot

test('test app for snapshot',()=>{
    const stack = new cdkdemo.CdkDemoStack(app,'snapshottest');
    expect(SynthUtils.toCloudFormation(stack)).toMatchSnapshot();

});
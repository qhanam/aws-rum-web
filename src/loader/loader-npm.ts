import { showRequestClientBuilder } from '../test-utils/mock-http-handler';
import {
    Orchestration as AwsRum,
    PartialConfig as AwsRumConfig
} from '../orchestration/Orchestration';

try {
    const config: AwsRumConfig = {
        allowCookies: true,
        dispatchInterval: 0,
        telemetries: ['errors', 'performance'],
        clientBuilder: showRequestClientBuilder
    };

    const APPLICATION_ID: string = '993ae0b3-ae57-4b24-a029-573f9c76ed9e';
    const APPLICATION_VERSION: string = '1.0.0';
    const APPLICATION_REGION: string = 'us-west-2';

    const awsRum: AwsRum = new AwsRum(
        APPLICATION_ID,
        APPLICATION_VERSION,
        APPLICATION_REGION,
        config
    );

    awsRum.setAwsCredentials({
        accessKeyId: 'a',
        secretAccessKey: 'b',
        sessionToken: 'c'
    });

    // @ts-ignore Make this available the the application as a global
    window.cwr = awsRum;
} catch (error) {
    // Ignore errors thrown during CloudWatch RUM web client initialization
}

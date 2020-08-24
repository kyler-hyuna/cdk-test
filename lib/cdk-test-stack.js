const cdk = require('@aws-cdk/core');
const { Bucket } = require('@aws-cdk/aws-s3')

class CdkTestStack extends cdk.Stack {
  /**
   *
   * @param {cdk.Construct} scope
   * @param {string} id
   * @param {cdk.StackProps=} props
   */
  constructor(scope, id, props) {
    super(scope, id, props);

    // The code that defines your stack goes here

    new Bucket(this, 'test-bucket', {})
  }
}

module.exports = { CdkTestStack }

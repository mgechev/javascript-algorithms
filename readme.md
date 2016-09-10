[![Testspace](http://www.testspace.com/public/img/testspace_logo.png)](http://www.testspace.com)
***

## JavaScript/Jasmine sample for demonstrating Testspace based on the [javascript-algorithms repo](https://github.com/mgechev/javascript-algorithms)

Sample demonstrates techniques for using Testspace with Javascript code and the [Jasmine test framework](http://jasmine.github.io/) together with [Istanbul code coverage tool](https://gotwarlost.github.io/istanbul/) and [Gulp JS build system](http://gulpjs.com/).

*** 
Using Multiple Online CI Services:

[![Build Status](https://travis-ci.org/testspace-samples/javascript.jasmine.svg?branch=master)](https://travis-ci.org/testspace-samples/javascript.jasmine)
[![CircleCI](https://circleci.com/gh/testspace-samples/javascript.jasmine.svg?style=svg)](https://circleci.com/gh/testspace-samples/javascript.jasmine)
[![Run Status](https://api.shippable.com/projects/5707eeda2a8192902e1bd7b4/badge?branch=master)](https://app.shippable.com/projects/5707eeda2a8192902e1bd7b4)

***
Publising **Test Content** using www.testspace.com

[![Space Health](https://samples.testspace.com/projects/114/spaces/431/badge)](https://samples.testspace.com/projects/114/spaces/431 "Test Cases")
[![Space Metric](https://samples.testspace.com/projects/114/spaces/431/metrics/238/badge)](https://samples.testspace.com/spaces/431/schema/Code%20Coverage "Code Coverage (branches)")
[![Space Metric](https://samples.testspace.com/projects/114/spaces/431/metrics/239/badge)](https://samples.testspace.com/spaces/431/schema/Code%20Coverage "Code Coverage (methods)")
[![Space Metric](https://samples.testspace.com/projects/114/spaces/431/metrics/241/badge)](https://samples.testspace.com/spaces/431/schema/Static%20Analysis "Static Analysis (issues)")

***

In order to run this sample you will need a host workstation with installed npm.

<pre>
npm install -g gulp
npm install
gulp build
</pre>

Publishing results example: 

<pre>
curl -s https://testspace-client.s3.amazonaws.com/testspace-linux.tgz | sudo tar -zxvf- -C /usr/local/bin
CI_REPORTS=$PWD/test/reports testspace @.testspace $TESTSPACE_TOKEN/$BRANCH_NAME
</pre> 

Checkout the [Space](http://samples.testspace.com/projects/javascript.jasmine). 

***

To replicate this sample: 
  - Account at www.testspace.com.
  - CI Environment Variable called **TESTSPACE_TOKEN** required:
    -  `TESTSPACE_TOKEN` = `credentials@my-org-name.testspace.com/my-project`
    - `credentials` set to `username:password` or your [access token](http://help.testspace.com/using-your-organization:user-settings).
    - `my-org-name.testspace.com/my-project` based on your *subdomain* and *project* names. Refer [here](http://help.testspace.com/reference:runner-reference#login-credentials) for more details. 
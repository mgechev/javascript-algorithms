[![Testspace](http://www.testspace.com/img/Testspace.png)](http://www.testspace.com)

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

[![Space Health](https://samples.testspace.com/projects/165/spaces/804/badge)](https://samples.testspace.com/projects/165/spaces/804 "Test Cases")
[![Space Metric](https://samples.testspace.com/projects/165/spaces/804/metrics/755/badge)](https://samples.testspace.com/spaces/804/schema/Code%20Coverage "Code Coverage (branches)")
[![Space Metric](https://samples.testspace.com/projects/165/spaces/804/metrics/756/badge)](https://samples.testspace.com/spaces/804/schema/Code%20Coverage "Code Coverage (methods)")
[![Space Metric](https://samples.testspace.com/projects/165/spaces/804/metrics/758/badge)](https://samples.testspace.com/spaces/804/schema/Static%20Analysis "Static Analysis (issues)")



***

In order to run this sample you will need a host workstation with installed npm.

<pre>
npm install -g gulp
npm install
gulp build
</pre>

Push Content using **Testspace client**: 

<pre>
curl -s https://testspace-client.s3.amazonaws.com/testspace-linux.tgz | sudo tar -zxvf- -C /usr/local/bin
testspace @.testspace.txt $TESTSPACE_TOKEN/$GITHUB_ORG:$REPO_NAME/$BRANCH_NAME#$BUILD_NUMBER
</pre> 

Checkout the published [Test Content](https://samples.testspace.com/projects/testspace-samples:python.unittest). Note that the `.testspace.txt` file contains the [set of files](http://help.testspace.com/how-to:publish-content#publishing-via-content-list-file) to publish. 

***

To replicate this sample: 
  - Setup account at www.testspace.com.
  - Create a Environment variable called `TESTSPACE_TOKEN`
     - `TESTSPACE_TOKEN` = `credentials@Your-Org-Name.testspace.com`
     - `credentials` set to `username:password` or your [access token](http://help.testspace.com/reference:client-reference#login-credentials)
     - To [use Testspace with a CI system](http://help.testspace.com/how-to:add-to-ci-workflow), store `TESTSPACE_TOKEN` as a secure environment variable
     

[![Testspace](http://www.testspace.com/public/img/testspace_logo.png)](http://www.testspace.com)
***

## JavaScript/Jasmine sample for demonstrating Testspace based on the [javascript-algorithms repo](https://github.com/mgechev/javascript-algorithms)

Sample demonstrates techniques for using Testspace with Javascript code and the [Jasmine test framework](http://jasmine.github.io/) together with [Istanbul code coverage tool](https://gotwarlost.github.io/istanbul/) and [Gulp JS build system](http://gulpjs.com/).

*** 
Using Multiple Online CI Services:

[![Build Status](https://travis-ci.org/munderseth/javascript.jasmine.svg?branch=master)](https://travis-ci.org/munderseth/javascript.jasmine)
[![CircleCI](https://circleci.com/gh/munderseth/javascript.jasmine.svg?style=svg)](https://circleci.com/gh/munderseth/javascript.jasmine)
[![Run Status](https://api.shippable.com/projects/576c51343be4f4faa56a78e5/badge?branch=master)](https://app.shippable.com/projects/576c51343be4f4faa56a78e5)


***
Publising **Test Content** using www.testspace.com

[![Space Health](http://munderseth.stridespace.com/projects/278/spaces/910/badge)](http://munderseth.stridespace.com/projects/278/spaces/910 "Test Cases")
[![Space Metric](http://munderseth.stridespace.com/projects/278/spaces/910/metrics/363/badge)](http://munderseth.stridespace.com/spaces/910/schema/Code%20Coverage "Code Coverage (branches)")
[![Space Metric](http://munderseth.stridespace.com/projects/278/spaces/911/metrics/367/badge)](http://munderseth.stridespace.com/spaces/911/schema/Code%20Coverage "Code Coverage (methods)")
[![Space Metric](http://munderseth.stridespace.com/projects/278/spaces/911/metrics/390/badge)](http://munderseth.stridespace.com/spaces/911/schema/Static%20Analysis "Static Analysis (issues)")

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
CI_REPORTS=$PWD/test/reports testspace publish @.testspace $TESTSPACE_TOKEN/$BRANCH_NAME
</pre> 

Checkout the [Space](http://munderseth.stridespace.com/projects/javascript.jasmine/spaces/master). 

***

To replicate this sample: 
  - Account at www.testspace.com.
  - Environment Variable called `TESTSPACE_TOKEN`:
    - `credentials` set to `username:password` or your [access token](http://help.testspace.com/using-your-organization:user-settings).
    - `my-org-name.testspace.com/my-project/my-space` based on your subdomain, project, and space names. Refer [here](http://help.testspace.com/reference:runner-reference#login-credentials) for more details. 
  
   
 

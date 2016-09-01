[![Testspace](http://www.testspace.com/public/img/testspace_logo.png)](http://www.testspace.com)
***

## JavaScript/Jasmine sample for demonstrating Testspace based on the [javascript-algorithms repo](https://github.com/mgechev/javascript-algorithms)

Sample demonstrates techniques for using Testspace with Javascript code and the [Jasmine test framework](http://jasmine.github.io/) together with [Istanbul code coverage tool](https://gotwarlost.github.io/istanbul/) and [Gulp JS build system](http://gulpjs.com/).

[![Build Status](https://travis-ci.org/testspace-samples/javascript.jasmine.svg?branch=master)](https://travis-ci.org/testspace-samples/php.phpunit)
[![Space Health](https://samples.testspace.com/projects/89/spaces/298/badge)](https://samples.testspace.com/projects/89/spaces/298 "Test Cases")
[![Space Metric](https://samples.testspace.com/projects/89/spaces/298/metrics/191/badge)](https://samples.testspace.com/projects/89/spaces/298/metrics#metric-191 "Line/Statement Coverage")
[![Space Metric](https://samples.testspace.com/projects/89/spaces/298/metrics/198/badge)](https://samples.testspace.com/projects/89/spaces/298/metrics#metric-198 "Branch/Condition Coverage")


***

In order to run this sample you will need a host workstation with installed npm.

<pre>
npm install -g minimatch@3.0.2
npm install -g gulp
npm install
gulp build
</pre>

Publishing results example: 

<pre>
testspace publish [Tests]test/reports/junitresults.xml{test} test/reports/coverage/clover.xml
</pre> 

Checkout the [Space](https://samples.testspace.com/projects/javascript/spaces/jasmine). 

***

To fork this example using Travis requires:
  - Account at www.testspace.com.
  - Travis Environment Variable: 
    - `TESTSPACE_URL` = `credentials:@my-org-name.testspace.com/my-project/my-space`
    - `credentials` set to `username:password` or your [access token](http://help.testspace.com/using-your-organization:user-settings).
    - `my-org-name.testspace.com/my-project/my-space` based on your subdomain, project, and space names. Refer [here](http://help.testspace.com/reference:runner-reference#login-credentials) for more details. 
    

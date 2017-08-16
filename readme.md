[![Testspace](https://www.testspace.com/img/Testspace.png)](https://www.testspace.com)

***

## JavaScript/Jasmine sample for demonstrating Testspace based on the [javascript-algorithms repo](https://github.com/mgechev/javascript-algorithms)

Sample demonstrates techniques for using Testspace with Javascript code and the [Jasmine test framework](http://jasmine.github.io/) together with [Istanbul code coverage tool](https://gotwarlost.github.io/istanbul/) and [Gulp JS build system](http://gulpjs.com/).

  * Using a Testspace Project that is `connected` with this GitHub Repo
  * Using 3 Online CI services for demonstration purposes only
  * Can review the Results at [testspace-samples:javascript.jasmine](https://samples.testspace.com/projects/testspace-samples:javascript.jasmine)  
  * Refer to our [Getting Started](https://help.testspace.com/getting-started) help articles for more information

*** 

Using Multiple Online CI Services:

[![Build Status](https://travis-ci.org/testspace-samples/javascript.jasmine.svg?branch=master)](https://travis-ci.org/testspace-samples/javascript.jasmine)
[![CircleCI](https://circleci.com/gh/testspace-samples/javascript.jasmine.svg?style=svg)](https://circleci.com/gh/testspace-samples/javascript.jasmine)
[![Run Status](https://api.shippable.com/projects/5707eeda2a8192902e1bd7b4/badge?branch=master)](https://app.shippable.com/github/testspace-samples/javascript.jasmine)

*** 
Publishing **Test Content** using www.testspace.com.

[![Space Health](https://samples.testspace.com/spaces/804/badge?token=92bafa7b581dddbf949ba27529b021e97c8c202e)](https://samples.testspace.com/spaces/804 "Test Cases")
[![Space Metric](https://samples.testspace.com/spaces/804/metrics/757/badge?token=f071330ee6ad6f79e06fd559da954dd39d118840)](https://samples.testspace.com/spaces/804/schema/Code%20Coverage "Code Coverage (statements)")
[![Space Metric](https://samples.testspace.com/spaces/804/metrics/758/badge?token=594794eb54ea687bee71f446d377465366fbf4b4)](https://samples.testspace.com/spaces/804/schema/Static%20Analysis "Static Analysis (issues)")


***

Download and configure the Testspace client 

<pre>
mkdir -p $HOME/bin
curl -s https://testspace-client.s3.amazonaws.com/testspace-linux.tgz | tar -zxvf- -C $HOME/bin
testspace config url samples.testspace.com
</pre>

In order to run this sample you will need a host workstation with installed npm.

<pre>
npm install -g gulp
npm install
gulp build
</pre>

Push Content using Testspace client 

<pre>
testspace @.testspace.txt 
</pre> 


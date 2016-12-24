[![Testspace](http://www.testspace.com/img/Testspace.png)](http://www.testspace.com)

***

## JavaScript/Jasmine sample for demonstrating Testspace based on the [javascript-algorithms repo](https://github.com/mgechev/javascript-algorithms)

Sample demonstrates techniques for using Testspace with Javascript code and the [Jasmine test framework](http://jasmine.github.io/) together with [Istanbul code coverage tool](https://gotwarlost.github.io/istanbul/) and [Gulp JS build system](http://gulpjs.com/).

*** 
Example branching only: **development**

* Reference article: [git branching workflow](https://git-scm.com/book/en/v1/Git-Branching-Branching-Workflows)

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
     

Feature: Velocity API

  Background: A new Meteor app
    Given I create a fresh meteor project called "myApp"
    And   I install the generic testing framework in "myApp"

  Scenario: Calling the "velocity/copySampleTests" API writes files to the to the test directory
    Given I started meteor
    When  I call "velocity/copySampleTests" via DDP
    Then  I should see the file "tests/generic/sample.js"

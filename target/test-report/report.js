$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Calculations.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 20,
  "name": "Addition Feature",
  "description": "I want to perform calculation of two numbers",
  "id": "addition-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 19,
      "name": "@functional_tests"
    }
  ]
});
formatter.scenarioOutline({
  "line": 27,
  "name": "Addition tests",
  "description": "",
  "id": "addition-feature;addition-tests",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@addition_happy_path"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "I pass \u003cfirstNumber\u003e and pass \u003csecondNumber\u003e into addition method",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I should get \u003cresult\u003e for Additions",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "I calculator instance will not be null",
  "keyword": "But "
});
formatter.examples({
  "line": 32,
  "name": "",
  "description": "",
  "id": "addition-feature;addition-tests;",
  "rows": [
    {
      "cells": [
        "firstNumber",
        "secondNumber",
        "result"
      ],
      "line": 33,
      "id": "addition-feature;addition-tests;;1"
    },
    {
      "cells": [
        "0",
        "5",
        "5"
      ],
      "line": 34,
      "id": "addition-feature;addition-tests;;2"
    },
    {
      "cells": [
        "2",
        "5",
        "7"
      ],
      "line": 35,
      "id": "addition-feature;addition-tests;;3"
    },
    {
      "cells": [
        "7",
        "7",
        "14"
      ],
      "line": 36,
      "id": "addition-feature;addition-tests;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 23,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 24,
  "name": "I have Calculator instance",
  "keyword": "Given "
});
formatter.match({
  "location": "CalculationTests.i_have_Calculator_instance()"
});
formatter.result({
  "duration": 123143198,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Addition tests",
  "description": "",
  "id": "addition-feature;addition-tests;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@functional_tests"
    },
    {
      "line": 26,
      "name": "@addition_happy_path"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "I pass 0 and pass 5 into addition method",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I should get 5 for Additions",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "I calculator instance will not be null",
  "keyword": "But "
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 7
    },
    {
      "val": "5",
      "offset": 18
    }
  ],
  "location": "CalculationTests.i_pass_and_pass_into_addition_method(int,int)"
});
formatter.result({
  "duration": 2477890,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 13
    }
  ],
  "location": "CalculationTests.i_should_get_for_Additions(int)"
});
formatter.result({
  "duration": 2091613,
  "status": "passed"
});
formatter.match({
  "location": "CalculationTests.i_calculator_instance_will_not_be_null()"
});
formatter.result({
  "duration": 104142,
  "status": "passed"
});
formatter.background({
  "line": 23,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 24,
  "name": "I have Calculator instance",
  "keyword": "Given "
});
formatter.match({
  "location": "CalculationTests.i_have_Calculator_instance()"
});
formatter.result({
  "duration": 123086,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Addition tests",
  "description": "",
  "id": "addition-feature;addition-tests;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@functional_tests"
    },
    {
      "line": 26,
      "name": "@addition_happy_path"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "I pass 2 and pass 5 into addition method",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I should get 7 for Additions",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "I calculator instance will not be null",
  "keyword": "But "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 7
    },
    {
      "val": "5",
      "offset": 18
    }
  ],
  "location": "CalculationTests.i_pass_and_pass_into_addition_method(int,int)"
});
formatter.result({
  "duration": 138459,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7",
      "offset": 13
    }
  ],
  "location": "CalculationTests.i_should_get_for_Additions(int)"
});
formatter.result({
  "duration": 118495,
  "status": "passed"
});
formatter.match({
  "location": "CalculationTests.i_calculator_instance_will_not_be_null()"
});
formatter.result({
  "duration": 43679,
  "status": "passed"
});
formatter.background({
  "line": 23,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 24,
  "name": "I have Calculator instance",
  "keyword": "Given "
});
formatter.match({
  "location": "CalculationTests.i_have_Calculator_instance()"
});
formatter.result({
  "duration": 120819,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Addition tests",
  "description": "",
  "id": "addition-feature;addition-tests;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@functional_tests"
    },
    {
      "line": 26,
      "name": "@addition_happy_path"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "I pass 7 and pass 7 into addition method",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I should get 14 for Additions",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "I calculator instance will not be null",
  "keyword": "But "
});
formatter.match({
  "arguments": [
    {
      "val": "7",
      "offset": 7
    },
    {
      "val": "7",
      "offset": 18
    }
  ],
  "location": "CalculationTests.i_pass_and_pass_into_addition_method(int,int)"
});
formatter.result({
  "duration": 161370,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "14",
      "offset": 13
    }
  ],
  "location": "CalculationTests.i_should_get_for_Additions(int)"
});
formatter.result({
  "duration": 112307,
  "status": "passed"
});
formatter.match({
  "location": "CalculationTests.i_calculator_instance_will_not_be_null()"
});
formatter.result({
  "duration": 55899,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 39,
  "name": "Substraction tests",
  "description": "",
  "id": "addition-feature;substraction-tests",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 38,
      "name": "@substraction_happy_path"
    }
  ]
});
formatter.step({
  "line": 40,
  "name": "I pass \u003cfirstNumber\u003e and pass \u003csecondNumber\u003e into substraction method",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "I should get \u003cresult\u003e for Subtractions",
  "keyword": "Then "
});
formatter.examples({
  "line": 43,
  "name": "",
  "description": "",
  "id": "addition-feature;substraction-tests;",
  "rows": [
    {
      "cells": [
        "firstNumber",
        "secondNumber",
        "result"
      ],
      "line": 44,
      "id": "addition-feature;substraction-tests;;1"
    },
    {
      "cells": [
        "50",
        "5",
        "45"
      ],
      "line": 45,
      "id": "addition-feature;substraction-tests;;2"
    },
    {
      "cells": [
        "12",
        "5",
        "7"
      ],
      "line": 46,
      "id": "addition-feature;substraction-tests;;3"
    },
    {
      "cells": [
        "27",
        "7",
        "20"
      ],
      "line": 47,
      "id": "addition-feature;substraction-tests;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 23,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 24,
  "name": "I have Calculator instance",
  "keyword": "Given "
});
formatter.match({
  "location": "CalculationTests.i_have_Calculator_instance()"
});
formatter.result({
  "duration": 166414,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "Substraction tests",
  "description": "",
  "id": "addition-feature;substraction-tests;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 38,
      "name": "@substraction_happy_path"
    },
    {
      "line": 19,
      "name": "@functional_tests"
    }
  ]
});
formatter.step({
  "line": 40,
  "name": "I pass 50 and pass 5 into substraction method",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "I should get 45 for Subtractions",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 7
    },
    {
      "val": "5",
      "offset": 19
    }
  ],
  "location": "CalculationTests.i_pass_and_pass_into_substraction_method(int,int)"
});
formatter.result({
  "duration": 332599,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "45",
      "offset": 13
    }
  ],
  "location": "CalculationTests.i_should_get_for_Subtractions(int)"
});
formatter.result({
  "duration": 144832,
  "status": "passed"
});
formatter.background({
  "line": 23,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 24,
  "name": "I have Calculator instance",
  "keyword": "Given "
});
formatter.match({
  "location": "CalculationTests.i_have_Calculator_instance()"
});
formatter.result({
  "duration": 113744,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "Substraction tests",
  "description": "",
  "id": "addition-feature;substraction-tests;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 38,
      "name": "@substraction_happy_path"
    },
    {
      "line": 19,
      "name": "@functional_tests"
    }
  ]
});
formatter.step({
  "line": 40,
  "name": "I pass 12 and pass 5 into substraction method",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "I should get 7 for Subtractions",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 7
    },
    {
      "val": "5",
      "offset": 19
    }
  ],
  "location": "CalculationTests.i_pass_and_pass_into_substraction_method(int,int)"
});
formatter.result({
  "duration": 625531,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7",
      "offset": 13
    }
  ],
  "location": "CalculationTests.i_should_get_for_Subtractions(int)"
});
formatter.result({
  "duration": 114782,
  "status": "passed"
});
formatter.background({
  "line": 23,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 24,
  "name": "I have Calculator instance",
  "keyword": "Given "
});
formatter.match({
  "location": "CalculationTests.i_have_Calculator_instance()"
});
formatter.result({
  "duration": 104303,
  "status": "passed"
});
formatter.scenario({
  "line": 47,
  "name": "Substraction tests",
  "description": "",
  "id": "addition-feature;substraction-tests;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 38,
      "name": "@substraction_happy_path"
    },
    {
      "line": 19,
      "name": "@functional_tests"
    }
  ]
});
formatter.step({
  "line": 40,
  "name": "I pass 27 and pass 7 into substraction method",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "I should get 20 for Subtractions",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "27",
      "offset": 7
    },
    {
      "val": "7",
      "offset": 19
    }
  ],
  "location": "CalculationTests.i_pass_and_pass_into_substraction_method(int,int)"
});
formatter.result({
  "duration": 205644,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 13
    }
  ],
  "location": "CalculationTests.i_should_get_for_Subtractions(int)"
});
formatter.result({
  "duration": 112760,
  "status": "passed"
});
formatter.uri("withDrawal.feature");
formatter.feature({
  "line": 2,
  "name": "cash withdrawal feature",
  "description": "I want to use this template for my feature file",
  "id": "cash-withdrawal-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@functional_tests"
    }
  ]
});
formatter.scenario({
  "line": 6,
  "name": "Successful withdrawal from an account in credit",
  "description": "",
  "id": "cash-withdrawal-feature;successful-withdrawal-from-an-account-in-credit",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@happy_path"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I have deposited $100 in my account",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I request $20",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "$20 should be dispensed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 18
    }
  ],
  "location": "BankingSteps.i_have_deposited_$_in_my_account(int)"
});
formatter.result({
  "duration": 415320,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 11
    }
  ],
  "location": "BankingSteps.i_request_$(int)"
});
formatter.result({
  "duration": 11061722,
  "error_message": "cucumber.api.PendingException: TODO: implement me\n\tat steps.BankingSteps.i_request_$(BankingSteps.java:24)\n\tat ✽.When I request $20(withDrawal.feature:8)\n",
  "status": "pending"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 1
    }
  ],
  "location": "BankingSteps.$_should_be_dispensed(int)"
});
formatter.result({
  "status": "skipped"
});
});
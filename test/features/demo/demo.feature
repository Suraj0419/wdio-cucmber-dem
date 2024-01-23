Feature: Demo Feature

    Feature that opens the browser and selects the appopriate website pointing to first serch result.
    Scenario Outline: Run Demo Feature
    Given Browser is opened
    When Search with <SearchValue>
    Then Click on the first result 
    Then Check whether it matches <ExpectedValue>
   Examples:
       | TestId | SearchValue  | ExpectedValue |
       | demo_001  | Typescript  | https://www.typescriptlang.org/  |
    
    
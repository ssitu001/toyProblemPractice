//filterFamilyMembers.js
// `filterFamilyMembers` accepts two arguments, a family tree object, and a truth test. `filterFamilyMembers` returns an array, in any order, of the full names of family members who pass the passed in truth test. You will need to use recursion in your solution in order to handle nested familty trees.


// EXAMPLE:

var familyTree = {
  'firstName': 'Simon',
  'lastName': 'Smith',
  'location': 'San Francisco',
  'children': [
    {
      'firstName': 'Bob',
      'lastName': 'Smith',
      'location': 'San Francisco',
      'children': [
        {
        'firstName': 'Sam',
        'lastName': 'Smith',
        'location': 'Tokyo',
        'children': []
      } 
      ]
    },
    {
      'firstName': 'Stacy',
      'lastName': 'Williams',
      'location': 'San Francisco',
      'children': [
      {
        'firstName': 'Sean',
        'lastName': 'Williams',
        'location': 'San Francisco',
        'children': []
      } 
      ]
    }
  ]
};

var livesInSF = function (familyMember) {
  return familyMember.location === 'San Francisco';
}

var filterFamilyMembers = function (tree, truthTest) {
  var result = [];
  var inner = function(trees, truthTests) {
    
    if (truthTests(trees)) {
        result.push(trees.firstName + ' ' + trees.lastName);
    } 
    
    if (trees.children.length) {
      for(var i = 0; i < trees.children.length; i++) {
        inner(trees.children[i], truthTest);
      }
    }
 
  };
  inner(tree, truthTest);
  return result;
};

filterFamilyMembers(familyTree, livesInSF);

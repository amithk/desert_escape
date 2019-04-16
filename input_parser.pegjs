{
        function processStmt(v, n) {
                return v(n);
        }
}

STMT
  = WS v:VERB WS n:NOUN WS {
      return processStmt(v, n);
  }
  / "help" {
      	  return "Help was called";
  }

WS
  = [ \t\n\r]*

VERB
  = t:"type" {
        return function(n) {
        	return "Type function called " + n;
        };
  }

NOUN
  = n:[a-z]+ { return n; }


/**
 * File generated at  2018-05-18 10:03:15 PST 
 * Client: Bank-of-america (10004750)
 */
define("Automatons/automatons/2001", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2001,
    type: "automatons",
    attributes: {
      name: "Prototype - BAC Automatons",
      ariaEnabled: true,
      style: "style::2002"
    }
  };
});
define("Automatons/automatons/2002", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2002,
    type: "automatons",
    attributes: {
      name: "ECS Back Office Internal Pre-chat Survey",
      automatonAttributes: {
        type: "guide",
        sub_type: "pre-chat"
      },
      initialNode: "node::2019",
      proto: "automaton::2001"
    }
  };
});
define("Automatons/automatons/2003", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2003,
    type: "automatons",
    attributes: {
      name: "WFM Internal Pre-chat Survey",
      automatonAttributes: {
        type: "guide",
        sub_type: "pre-chat"
      },
      initialNode: "node::2025",
      proto: "automaton::2001"
    }
  };
});
define("Automatons/automatons/2004", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2004,
    type: "automatons",
    attributes: {
      name: "Provisioning Internal PreChat - Survey",
      automatonAttributes: {
        type: "guide",
        sub_type: "pre-chat"
      },
      initialNode: "node::2036",
      proto: "automaton::2001"
    }
  };
});
define("Automatons/automatons/2005", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2005,
    type: "automatons",
    attributes: {
      name: "Purchasing and Expenses Internal Pre-chat Survey",
      automatonAttributes: {
        type: "guide",
        sub_type: "pre-chat"
      },
      initialNode: "node::2043",
      proto: "automaton::2001"
    }
  };
});
define("Automatons/automatons/2006", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2006,
    type: "automatons",
    attributes: {
      name: "Sales-Deposit Guide",
      automatonAttributes: {
        type: "guide",
        sub_type: "routing"
      },
      initialNode: "node::2054",
      proto: "automaton::2001"
    }
  };
});
define("Automatons/automatons/2007", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2007,
    type: "automatons",
    attributes: {
      name: "CSV-Card vs Deposits Guide",
      automatonAttributes: {
        type: "guide",
        sub_type: "routing"
      },
      initialNode: "node::2067",
      proto: "automaton::2001"
    }
  };
});
define("Automatons/automatons/2008", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2008,
    type: "automatons",
    attributes: {
      name: "HRSC Internal Pre-chat Survey",
      chatRouter: {
        businessUnit: 19000977
      },
      automatonAttributes: {
        type: "guide",
        sub_type: "pre-chat"
      },
      initialNode: "node::2072",
      proto: "automaton::2001"
    }
  };
});
define("Automatons/automatons/2009", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2009,
    type: "automatons",
    attributes: {
      name: "Preferred-Small Business Service-Deposit Guide",
      automatonAttributes: {
        type: "guide",
        sub_type: "routing"
      },
      initialNode: "node::2081",
      proto: "automaton::2001"
    }
  };
});
define("Automatons/automatons/2010", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2010,
    type: "automatons",
    attributes: {
      name: "Preferred Service-Card Guide",
      automatonAttributes: {
        type: "guide",
        sub_type: "routing"
      },
      initialNode: "node::2101",
      proto: "automaton::2001"
    }
  };
});
define("Automatons/automatons/2011", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2011,
    type: "automatons",
    attributes: {
      name: "Sales-Auto Loan Guide",
      automatonAttributes: {
        type: "guide",
        sub_type: "routing"
      },
      initialNode: "node::2116",
      proto: "automaton::2001"
    }
  };
});
define("Automatons/automatons/2012", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2012,
    type: "automatons",
    attributes: {
      name: "Sales-Home Loan Guide",
      automatonAttributes: {
        type: "guide",
        sub_type: "routing"
      },
      initialNode: "node::2123",
      proto: "automaton::2001"
    }
  };
});
define("Automatons/automatons/2013", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2013,
    type: "automatons",
    attributes: {
      name: "Employee Relations Pre-chat Survey",
      automatonAttributes: {
        type: "guide",
        sub_type: "pre-chat"
      },
      initialNode: "node::2134",
      proto: "automaton::2001"
    }
  };
});
define("Automatons/automatons/2014", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2014,
    type: "automatons",
    attributes: {
      name: "BOL Pre-chat Survey",
      automatonAttributes: {
        type: "pre-chat",
        sub_type: "survey"
      },
      initialNode: "node::2139",
      proto: "automaton::2001"
    }
  };
});
define("Automatons/automatons/2015", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2015,
    type: "automatons",
    attributes: {
      name: "Sales-Card Guide",
      automatonAttributes: {
        type: "guide",
        sub_type: "routing"
      },
      initialNode: "node::2147",
      proto: "automaton::2001"
    }
  };
});
define("Automatons/automatons/2016", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2016,
    type: "automatons",
    attributes: {
      name: "Formify Test",
      ariaEnabled: true,
      initialNode: "node::2001",
      style: "style::2003"
    }
  };
});
define("Automatons/automatons/2022", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2022,
    type: "automatons",
    attributes: {
      name: "Benefits-Online Post Chat Survey",
      type: "satisfactionSurvey",
      ariaEnabled: true,
      description: "CMRASI-567",
      initialNode: "node::2211",
      style: "style::2006"
    }
  };
});
define("Automatons/automatons/2023", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2023,
    type: "automatons",
    attributes: {
      name: "Merrill-Edge-Sales Post Chat Survey",
      type: "satisfactionSurvey",
      ariaEnabled: true,
      description: "CMRASI-590",
      initialNode: "node::2213",
      style: "style::2007"
    }
  };
});
define("Automatons/automatons/2024", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2024,
    type: "automatons",
    attributes: {
      name: "Merrill-Edge-Service Post Chat Survey",
      type: "satisfactionSurvey",
      ariaEnabled: true,
      description: "CMRASI-591",
      initialNode: "node::2215",
      style: "style::2006"
    }
  };
});
define("Automatons/automatons/2025", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2025,
    type: "automatons",
    attributes: {
      name: "Small-Business-Sales Post Chat Survey",
      type: "satisfactionSurvey",
      ariaEnabled: true,
      description: "CMRASI-592",
      initialNode: "node::2217",
      style: "style::2006"
    }
  };
});
define("Automatons/automatons/2026", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2026,
    type: "automatons",
    attributes: {
      name: "Small-Business-Service Post Chat Survey",
      type: "satisfactionSurvey",
      ariaEnabled: true,
      description: "CMRASI-593",
      initialNode: "node::2219",
      style: "style::2006"
    }
  };
});
define("Automatons/automatons/2027", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2027,
    type: "automatons",
    attributes: {
      name: "Home-Loan-Sales Post Chat Survey",
      type: "satisfactionSurvey",
      ariaEnabled: true,
      description: "CMRASI-594",
      initialNode: "node::2221",
      style: "style::2007"
    }
  };
});
define("Automatons/automatons/2028", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2028,
    type: "automatons",
    attributes: {
      name: "Consumer-OAS Post Chat Survey",
      type: "satisfactionSurvey",
      ariaEnabled: true,
      description: "CMRASI-595",
      initialNode: "node::2223",
      style: "style::2007"
    }
  };
});
define("Automatons/automatons/2029", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2029,
    type: "automatons",
    attributes: {
      name: "Preferred-Service Post Chat Survey",
      type: "satisfactionSurvey",
      ariaEnabled: true,
      description: "CMRASI-596",
      initialNode: "node::2225",
      style: "style::2007"
    }
  };
});
define("Automatons/automatons/2030", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2030,
    type: "automatons",
    attributes: {
      name: "Card-Collections-EN Post Chat Survey",
      type: "satisfactionSurvey",
      ariaEnabled: true,
      description: "CMRASI-597",
      initialNode: "node::2227",
      style: "style::2007"
    }
  };
});
define("Automatons/automatons/2031", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2031,
    type: "automatons",
    attributes: {
      name: "Card-Collections-SP Post Chat Survey",
      type: "satisfactionSurvey",
      ariaEnabled: true,
      description: "CMRASI-598",
      initialNode: "node::2229",
      style: "style::2007"
    }
  };
});
define("Automatons/automatons/2032", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2032,
    type: "automatons",
    attributes: {
      name: "WMCS_Service Post Chat Survey",
      type: "satisfactionSurvey",
      ariaEnabled: true,
      description: "CMRASI-599",
      initialNode: "node::2231",
      style: "style::2011"
    }
  };
});
define("Automatons/automatons/2033", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2033,
    type: "automatons",
    attributes: {
      name: "Consumer-Service Post Chat Survey",
      type: "satisfactionSurvey",
      ariaEnabled: true,
      description: "CMRASI-600",
      initialNode: "node::2234",
      style: "style::2011"
    }
  };
});
define("Automatons/automatons/2034", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2034,
    type: "automatons",
    attributes: {
      name: "UK-Card-MBNA Post Chat Survey",
      type: "satisfactionSurvey",
      ariaEnabled: true,
      description: "CMRASI-601",
      initialNode: "node::2236",
      style: "style::2008"
    }
  };
});
define("Automatons/automatons/2035", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2035,
    type: "automatons",
    attributes: {
      name: "UK-Card-VAA Post Chat Survey",
      type: "satisfactionSurvey",
      ariaEnabled: true,
      description: "CMRASI-602",
      initialNode: "node::2238",
      style: "style::2008"
    }
  };
});
define("Automatons/automatons/2036", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2036,
    type: "automatons",
    attributes: {
      name: "HRSC-Internal Post Chat Survey",
      type: "satisfactionSurvey",
      ariaEnabled: true,
      description: "CMRASI-603",
      initialNode: "node::2240",
      style: "style::2011"
    }
  };
});
define("Automatons/automatons/2037", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2037,
    type: "automatons",
    attributes: {
      name: "Provisioning Post Chat Survey",
      type: "satisfactionSurvey",
      ariaEnabled: true,
      description: "CMRASI-604",
      initialNode: "node::2242",
      style: "style::2011"
    }
  };
});
define("Automatons/automatons/2038", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2038,
    type: "automatons",
    attributes: {
      name: "Employee-Relations Post Chat Survey",
      type: "satisfactionSurvey",
      ariaEnabled: true,
      description: "CMRASI-605",
      initialNode: "node::2244",
      style: "style::2011"
    }
  };
});
define("Automatons/automatons/2039", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2039,
    type: "automatons",
    attributes: {
      name: "Workforce-Management Post Chat Survey",
      type: "satisfactionSurvey",
      ariaEnabled: true,
      description: "CMRASI-606",
      initialNode: "node::2246",
      style: "style::2009"
    }
  };
});
define("Automatons/automatons/2040", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2040,
    type: "automatons",
    attributes: {
      name: "Purchasing-Expenses Post Chat Survey",
      type: "satisfactionSurvey",
      ariaEnabled: true,
      description: "CMRASI-607",
      initialNode: "node::2248",
      style: "style::2011"
    }
  };
});
define("Automatons/automatons/2041", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2041,
    type: "automatons",
    attributes: {
      name: "Purchasing-Expenses-ThirdPartySupport Post Chat Survey",
      type: "satisfactionSurvey",
      ariaEnabled: true,
      description: "CMRASI-608",
      initialNode: "node::2250",
      style: "style::2011"
    }
  };
});
define("Automatons/automatons/2042", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2042,
    type: "automatons",
    attributes: {
      name: "ECS-Escalation-Gate-Back-Office Post Chat Survey",
      type: "satisfactionSurvey",
      ariaEnabled: true,
      description: "CMRASI-609",
      initialNode: "node::2252",
      style: "style::2011"
    }
  };
});
define("Automatons/automatons/2046", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2046,
    type: "automatons",
    attributes: {
      name: "HRSC Internal Pre-chat Survey EMEA",
      chatRouter: {
        businessUnit: 19000977
      },
      automatonAttributes: {
        type: "guide",
        sub_type: "pre-chat"
      },
      description: "CMRASI-1474",
      initialNode: "node::2256",
      proto: "automaton::2001"
    }
  };
});
define("Automatons/automatons/2050", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2050,
    type: "automatons",
    attributes: {
      name: "SBS-Auth-OfferRule-Guide",
      ariaEnabled: true,
      automatonAttributes: {
        type: "guide",
        sub_type: "routing"
      },
      initialNode: "node::2260",
      style: "style::2012"
    }
  };
});
define("Automatons/nodes/2001", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2001,
    type: "nodes",
    attributes: {
      name: "Formify (Initial)",
      type: "list",
      formify: {
        fields: [{
          name: "questionFieldsetId8435147",
          type: "radio",
          label: "1. Considering your most recent chat experience with our product specialist, please rate your overall satisfaction on a scale of 1 to 5 where 1 is &ldquo;Extremely Dissatisfied&rdquo; and 5 is &ldquo;Extremely Satisfied&rdquo;.",
          options: [1, 2, 3, 4, 5]
        }, {
          name: "questionFieldsetId8435149",
          type: "radio",
          label: "3. How much do you agree with the following statements where 1 is &ldqou;Strongly Disagree,&rdquo; 3 is &ldquo;Neither Agree nor Disagree&rdqou; and 5 is &ldquo;Strongly Agree.&rdquo;",
          options: ["Online specialist responded in a timely manner", "Online specialist provided thorough and helpful information", "Chat experience saved me a call, email or visit to a store", "I would use or recommend your chat service in the future"],
          scale: [1, 2, 3, 4, 5]
        }, {
          name: "Email Address",
          type: "email"
        }, {
          name: "Likert Scale",
          type: "radio",
          options: ["Question 1", "Question 2", "Question 3"],
          scale: [1, 2, 3, 4, 5]
        }],
        heading: "Thank you for visiting Best Brands. Please take a moment to complete the following four question survey. We appreciate your input.",
        next: 2002
      },
      template: "template::2007"
    }
  };
});
define("Automatons/nodes/2002", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2002,
    type: "nodes",
    attributes: {
      name: "SS-DepSvc Guide - Topics",
      type: "List",
      breadcrumb: "api.forms['account_type']",
      template: "template::2496",
      transitions: {
        route_DEP_SERVICE_chat: []
      }
    }
  };
});
define("Automatons/nodes/2003", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2003,
    type: "nodes",
    attributes: {
      name: "SS-DepSvc - Notify - Upcoming Travel - Self-Help",
      type: "Self-Help",
      breadcrumb: "Upcoming Travel",
      template: "template::2490"
    }
  };
});
define("Automatons/nodes/2004", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2004,
    type: "nodes",
    attributes: {
      name: "SS-DepSvc - Notify - Report Fraud - Self-Help",
      type: "Self-Help",
      breadcrumb: "Report Fraud",
      template: "template::2492"
    }
  };
});
define("Automatons/nodes/2005", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2005,
    type: "nodes",
    attributes: {
      name: "SS-DepSvc - Dispute - Transactions - Self-Help",
      type: "Self-Help",
      breadcrumb: "Transactions",
      template: "template::2494"
    }
  };
});
define("Automatons/nodes/2006", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2006,
    type: "nodes",
    attributes: {
      name: "SS-DepSvc - Dispute - Fee - Self-Help",
      type: "Self-Help",
      breadcrumb: "Dispute Fee",
      template: "template::2493"
    }
  };
});
define("Automatons/nodes/2007", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2007,
    type: "nodes",
    attributes: {
      name: "SS-DepSvc - Fraud - Lost Stolen Card - Self-Help",
      type: "Self-Help",
      breadcrumb: "Lost or Stolen Card",
      template: "template::2495"
    }
  };
});
define("Automatons/nodes/2008", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2008,
    type: "nodes",
    attributes: {
      name: "SS-DepSvc - Account - Overdraft Maint Fee - Self-Help",
      type: "Self-Help",
      breadcrumb: "Overdraft Fee",
      template: "template::2491"
    }
  };
});
define("Automatons/nodes/2009", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2009,
    type: "nodes",
    attributes: {
      name: "Agent Group - CSV-DEP_SERVICE - Chat",
      type: "Chat",
      chatRouter: {
        agentGroup: 10004954,
        agentsBusyNode: "node::2096",
        businessUnit: 19000929,
        checkAgentAvailability: true,
        clientOutcome: "Hi, how can I help you today?",
        outsideHopNode: "node::2097",
        scriptTree: 12200805
      },
      isOutcomeNode: 1
    }
  };
});
define("Automatons/nodes/2010", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2010,
    type: "nodes",
    attributes: {
      name: "Agent Group - SBV-DEP_SERVICE - Chat",
      type: "Chat",
      chatRouter: {
        agentGroup: 10004954,
        agentsBusyNode: "node::2098",
        businessUnit: 19000929,
        checkAgentAvailability: true,
        clientOutcome: "Hi, I'm a Bank of America specialist and can help answer questions you may have. Before we begin, what is your full name and ZIP code please?",
        outsideHopNode: "node::2099",
        scriptTree: 12200805
      },
      isOutcomeNode: 1
    }
  };
});
define("Automatons/nodes/2011", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2011,
    type: "nodes",
    attributes: {
      name: "SS-DepSvc - Account - Bill Pay - Self-Help",
      type: "Self-Help",
      breadcrumb: "Bill Pay",
      template: "template::2487"
    }
  };
});
define("Automatons/nodes/2012", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2012,
    type: "nodes",
    attributes: {
      name: "SS-DepSvc - Account - BankAmeriDeals - Self-Help",
      type: "Self-Help",
      breadcrumb: "BankAmeriDeals",
      template: "template::2489"
    }
  };
});
define("Automatons/nodes/2013", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2013,
    type: "nodes",
    attributes: {
      name: "Agent Busy Backup Node - Help and Support",
      type: "Backup",
      isOutcomeNode: 1,
      nodes: [{
        label: "Credit card FAQs",
        node_id: "node::2064"
      }, {
        label: "Checking/Savings FAQs",
        node_id: "node::2063"
      }],
      template: "template::2376"
    }
  };
});
define("Automatons/nodes/2014", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2014,
    type: "nodes",
    attributes: {
      name: "Outside HOP Backup Node - Help and Support",
      type: "Outside HOP",
      isOutcomeNode: 1,
      nodes: [{
        label: "Credit card FAQs",
        node_id: "node::2064"
      }, {
        label: "Checking/Savings FAQs",
        node_id: "node::2063"
      }],
      template: "template::2416"
    }
  };
});
define("Automatons/nodes/2015", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2015,
    type: "nodes",
    attributes: {
      name: "SS-DepSvc - Help and Support - Redirect and Exit",
      type: "Redirect and Exit",
      isExitNode: 1,
      proto: "node::2066",
      redirectTarget: "current",
      redirectUrl: "https://secure.bankofamerica.com/customer/help-support.go"
    }
  };
});
define("Automatons/nodes/2016", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2016,
    type: "nodes",
    attributes: {
      name: "SS-DepSev - Help with BankAmeriDeals - Redirect and Exit",
      type: "Redirect and Exit",
      isExitNode: 1,
      proto: "node::2066",
      redirectTarget: "current",
      redirectUrl: "https://secure.bankofamerica.com/myrewards/deals/recommended.go?returnSiteIndicator=GAIMW&request_locale=en-us"
    }
  };
});
define("Automatons/nodes/2017", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2017,
    type: "nodes",
    attributes: {
      name: "SS-DepSev - Lost or stolen card online - Redirect and Exit",
      type: "Redirect and Exit",
      isExitNode: 1,
      proto: "node::2066",
      redirectTarget: "current",
      redirectUrl: "https://secure.bankofamerica.com/customer/help-support/hsAcctSelTopic.go?topic=report_lost"
    }
  };
});
define("Automatons/nodes/2018", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2018,
    type: "nodes",
    attributes: {
      name: "SS-DepSvc - Set your travel notice - Redirect and Exit",
      type: "Redirect and Exit",
      isExitNode: 1,
      proto: "node::2066",
      redirectTarget: "current",
      redirectUrl: "https://secure.bankofamerica.com/customer/help-support/hsStaticTopic.go?topic=travel_notice"
    }
  };
});
define("Automatons/nodes/2019", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2019,
    type: "nodes",
    attributes: {
      name: "ECS Back Office Internal PreChat",
      type: "Survey",
      form: {
        fieldsets: [{
          name: "NbkID",
          label: "Your NbkID"
        }, {
          name: "First Name"
        }, {
          name: "Last Name"
        }, {
          name: "ATM/Debit Claims",
          type: "select",
          options: ["Tampa", "Phoenix", "Kennesaw"]
        }, {
          name: "Claims Resolution Area",
          type: "select",
          options: ["ACH", "ATM/ATA", "Debit"]
        }, {
          name: "Claim / Dispute Number",
          label: "Claim or Dispute Number"
        }, {
          name: "Comments",
          type: "textarea",
          required: false
        }],
        heading: "Please provide the following information so the Claims Resolutions Escalation team can better assist you."
      },
      template: "template::2004",
      transitions: {
        submit: [{
          condition: "_.claims_resolution_area === 'ach'",
          target: "node::2022"
        }, {
          condition: "_.claims_resolution_area === 'atm_ata'",
          target: "node::2023"
        }, {
          condition: "_.claims_resolution_area === 'debit'",
          target: "node::2024"
        }]
      }
    }
  };
});
define("Automatons/nodes/2020", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2020,
    type: "nodes",
    attributes: {
      name: "ECS Agents Busy Backup Node",
      type: "Backup",
      isOutcomeNode: 1,
      template: "template::2391"
    }
  };
});
define("Automatons/nodes/2021", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2021,
    type: "nodes",
    attributes: {
      name: "ECS Outside HOP Backup Node",
      type: "Outside HOP",
      isOutcomeNode: 1,
      template: "template::2390"
    }
  };
});
define("Automatons/nodes/2022", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2022,
    type: "nodes",
    attributes: {
      name: "Agent Group - EGB-ECS_ACH_BO_NONFR_CLAIMS - Chat",
      type: "Chat",
      chatRouter: {
        agentGroup: 10004998,
        agentsBusyNode: "node::2020",
        businessUnit: 19000941,
        checkAgentAvailability: true,
        clientOutcome: "Hi! How can I help you today?",
        outsideHopNode: "node::2021",
        scriptTree: 12200825
      },
      isOutcomeNode: 1
    }
  };
});
define("Automatons/nodes/2023", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2023,
    type: "nodes",
    attributes: {
      name: "Agent Group - EGB-ECS_BO_NONFR_CLAIMS - Chat",
      type: "Chat",
      chatRouter: {
        agentGroup: 10005000,
        agentsBusyNode: "node::2020",
        businessUnit: 19000941,
        checkAgentAvailability: true,
        clientOutcome: "Hi! How can I help you today?",
        outsideHopNode: "node::2021",
        scriptTree: 12200827
      },
      isOutcomeNode: 1
    }
  };
});
define("Automatons/nodes/2024", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2024,
    type: "nodes",
    attributes: {
      name: "Agent Group - EGB-ECS_DEBIT_BO_NONFR_CLAIMS - Chat",
      type: "Chat",
      chatRouter: {
        agentGroup: 10004999,
        agentsBusyNode: "node::2020",
        businessUnit: 19000941,
        checkAgentAvailability: true,
        clientOutcome: "Hi! How can I help you today?",
        outsideHopNode: "node::2021",
        scriptTree: 12200826
      },
      isOutcomeNode: 1
    }
  };
});
define("Automatons/nodes/2025", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2025,
    type: "nodes",
    attributes: {
      name: "WFM Internal Pre-chat Survey",
      type: "Survey",
      form: {
        fieldsets: [{
          name: "Name",
          label: "What is your name?",
          required_error: "Your Name is a required field."
        }, {
          name: "E-mail Address",
          type: "email",
          label: "Bankofamerica.com E-mail Address",
          required_error: "Your Bankofamerica.com E-mail Address is a required field"
        }, {
          name: "Line of Business",
          type: "select",
          autoscroll: true,
          label: "What line of business are you from?",
          options: ["ATA", "Billing Disputes", "CD IRA", "CFM Fraud", "CVL Servicing", "Digital Services", "Home Loans", "National Service &amp; Solutions", "Preferred Sales", "Preferred Servicing", "PSB Fraud", "Retail", "Retail Fraud Servicing", "Sales &amp; Fulfillment", "Small Business"],
          required_error: "Line of Business is a required field."
        }, {
          name: "CFM Fraud topic",
          type: "select",
          dynamic: {
            check: "Line of Business",
            value: "CFM Fraud"
          },
          label: "Please select a CFM Fraud topic",
          options: ["CFM - Emerging Risk", "CFM - Retail Fraud Detection (RFD)"],
          required_error: "CFM Fraud topic is a required field."
        }, {
          name: "Preferred Sales topic",
          type: "select",
          dynamic: {
            check: "Line of Business",
            value: "Preferred Sales"
          },
          label: "Please select a Preferred Sales topic",
          options: ["Sales Card", "Sales Core", "Sales Deposits"],
          required_error: "Preferred Sales topic is a required field."
        }, {
          name: "Preferred Servicing topic",
          type: "select",
          dynamic: {
            check: "Line of Business",
            value: "Preferred Servicing"
          },
          label: "Please select a Preferred Servicing topic",
          options: ["Preferred Chat", "Preferred Servicing"],
          required_error: "Preferred Servicing topic is a required field."
        }, {
          name: "Retail topic",
          type: "select",
          dynamic: {
            check: "Line of Business",
            value: "Retail"
          },
          label: "Please select a Retail topic",
          options: ["Blended Asian", "Retail Chat - Email", "Retail Consumer Card - Deposits"],
          required_error: "Retail topic is a required field."
        }, {
          name: "Small Business topic",
          type: "select",
          dynamic: {
            check: "Line of Business",
            value: "Small Business"
          },
          label: "Please select a Small Business topic",
          options: ["Business Card", "SB Deposits &amp; SBPST", "Small Business Chat", "Small Business RST", "Small Business Segment"],
          required_error: "Small Business topic is a required field."
        }, {
          name: "Site",
          type: "select",
          label: "What site are you from?",
          options: ["Alpharetta", "Anaheim", "Annapolis", "Atlanta", "Bedford", "Belfast", "Brea", "Brunswick", "Chandler", "Chandler &amp; Alma School", "Charlotte", "Concord", "Dallas", "East Providence", "Ft Worth", "Fullerton", "Garden Grove", "Glendale", "Greenville Ave", "Gwinnet Place", "Hunt Valley", "Irvine", "Jacksonville", "Kennesaw", "Las Vegas", "Lincoln", "Los Angeles", "Mesa Main", "Midwest", "Newark", "New Bedford", "North Attleboro", "North Kingstown", "North Quincy", "Oak Cliff", "Pasadena", "Phoenix", "Plano", "Pomona", "Providence", "Quincy", "Richmond", "Rio Rancho", "Roxbury", "San Antonio", "Scottsdale", "Scranton", "Simi Valley", "South Portland", "St Charles", "Sun City", "Superstition Springs", "Tampa", "Tech Park", "University Drive", "Utica", "Westbrook", "West Fullerton Ave", "West Seneca", "Whittier"],
          required_error: "Site is a required field."
        }, {
          name: "MU",
          label: "What is your MU?",
          required_error: "Your MU is a required field."
        }, {
          name: "BAC Reason for chat",
          type: "select",
          dynamic: {
            check: "Line of Business",
            "if": "any",
            value: "ATA;CD IRA;CVL Servicing;Digital Services;Home Loans;National Service & Solutions;Preferred Servicing;Retail;Preferred Sales;Sales & Fulfillment;Small Business"
          },
          label: "What would you like to chat with Workforce about?",
          options: [{
            name: "Time Off Request (vacation, personal, volunteer)",
            value: "Time Off Request"
          }, "Future day off phone request", "Same day Flex, OT, OJT, or schedule adj", {
            name: "Console Realtime Off Phone Approvals (Activities ie. meetings, trainings, coaching)",
            value: "Same day Off Phone Request"
          }, {
            name: "Console Realtime Skill Change Request (Genesys,CMS,Aspect)",
            value: "Skill Change Request"
          }, {
            name: "Reporting an error with an Associates schedule",
            value: "Reporting an Error"
          }, {
            name: "General Question",
            value: "General Question"
          }],
          required_error: "Reason for chat is a required field."
        }, {
          name: "Fraud and Claims Reason for chat",
          type: "select",
          dynamic: {
            check: "Line of Business",
            "if": "any",
            value: "CFM Fraud;Billing Disputes;Fraud Client Managed Segments;Retail Fraud Servicing;PSB Fraud"
          },
          label: "What would you like to chat with Workforce about?",
          options: [{
            name: "Time Off Request (vacation, personal, volunteer)",
            value: "Time Off Request"
          }, "Future day off phone request", "Same day Flex, OT, OJT, or schedule adj", {
            name: "Console Realtime Off Phone Approvals (Activities ie. meetings, trainings, coaching)",
            value: "Same day Off Phone Request"
          }, {
            name: "Console Realtime Skill Change Request (Genesys,CMS,Aspect)",
            value: "Skill Change Request"
          }, {
            name: "Reporting an error with an Associates schedule",
            value: "Reporting an Error"
          }, {
            name: "General Question",
            value: "General Question"
          }],
          required_error: "Reason for chat is a required field."
        }, {
          name: "Chat regarding",
          type: "select",
          label: "Is this chat regarding:",
          options: ["New Request", {
            name: "Prior Request that has Changed, and not a Result of WF Error",
            value: "Prior Request"
          }, {
            name: "Result of a Workforce Error on a Prior Request",
            value: "Workforce Error"
          }],
          required_error: "This is a required field."
        }],
        heading: "Please provide the following information so the Workforce Management Team can better assist you."
      },
      template: "template::2004",
      transitions: {
        submit: [{
          condition: "api.automatonDataMap.force_ohop && _.line_of_business.match(/cfm_fraud|billing_disputes|retail_fraud_servicing|psb_fraud/) && _.fraud_and_claims_reason_for_chat.match(/same_day_off_phone_request|skill_change_request/)",
          target: "node::2034"
        }, {
          condition: "api.automatonDataMap.force_ohop && _.line_of_business.match(/ata|cd_ira|cvl_servicing|digital_services|home_loans|national_service_solutions|preferred_sales|preferred_servicing|retail|sales_fulfillment|small_business/) && _.bac_reason_for_chat.match(/same_day_off_phone_request|skill_change_request/)",
          target: "node::2034"
        }, {
          condition: "_.line_of_business.match(/cfm_fraud|billing_disputes|retail_fraud_servicing|psb_fraud/) && _.fraud_and_claims_reason_for_chat.match(/same_day_off_phone_request|skill_change_request/)",
          target: "node::2032"
        }, {
          condition: "_.line_of_business.match(/ata|cd_ira|cvl_servicing|digital_services|home_loans|national_service_solutions|preferred_sales|preferred_servicing|retail|sales_fulfillment|small_business/) && _.bac_reason_for_chat.match(/same_day_off_phone_request|skill_change_request/)",
          target: "node::2031"
        }, {
          condition: "_.line_of_business.match(/billing_disputes|retail_fraud_servicing/)",
          target: "node::2028"
        }, {
          condition: "_.line_of_business.match(/psb_fraud/)",
          target: "node::2027"
        }, {
          condition: "_.line_of_business.match(/cfm_fraud/)",
          target: "node::2254"
        }, {
          condition: "_.line_of_business.match(/ata|cd_ira|cvl_servicing|digital_services|home_loans|national_service_solutions|preferred_sales|preferred_servicing|retail|sales_fulfillment|small_business/)",
          target: "node::2026"
        }]
      }
    }
  };
});
define("Automatons/nodes/2026", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2026,
    type: "nodes",
    attributes: {
      name: "Agent Group - WFM-BAC_GURUGRAM_STATESIDE - Chat",
      type: "Chat",
      chatRouter: {
        agentGroup: 10004971,
        businessUnit: 19000936,
        checkAgentAvailability: true,
        clientOutcome: "Thank You for contacting Workforce Management, how may I assist you today?",
        outsideHopNode: "node::2034",
        qThreshold: 999,
        scriptTree: 12200828
      },
      isOutcomeNode: 1,
      onEntryTransition: "checkAA",
      transitions: {
        checkAA: [{
          chatSlots: false,
          condition: "api.getPreviousNode().id !== 2033",
          queueSlots: true,
          target: "node::2033",
          targetChatNode: "node::2026"
        }, {
          chatSlots: false,
          condition: "api.getPreviousNode().id !== 2033",
          queueSlots: false,
          target: "node::2163",
          targetChatNode: "node::2026"
        }]
      }
    }
  };
});
define("Automatons/nodes/2027", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2027,
    type: "nodes",
    attributes: {
      name: "Agent Group - WFM-PSB_FRAUD - Chat",
      type: "Chat",
      chatRouter: {
        agentGroup: 10004976,
        businessUnit: 19000936,
        checkAgentAvailability: true,
        clientOutcome: "Thank You for contacting Workforce Management, how may I assist you today?",
        outsideHopNode: "node::2034",
        qThreshold: 999,
        scriptTree: 12200833
      },
      isOutcomeNode: 1,
      onEntryTransition: "checkAA",
      transitions: {
        checkAA: [{
          chatSlots: false,
          condition: "api.getPreviousNode().id !== 2033",
          queueSlots: true,
          target: "node::2033",
          targetChatNode: "node::2027"
        }, {
          chatSlots: false,
          condition: "api.getPreviousNode().id !== 2033",
          queueSlots: false,
          target: "node::2163",
          targetChatNode: "node::2027"
        }]
      }
    }
  };
});
define("Automatons/nodes/2028", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2028,
    type: "nodes",
    attributes: {
      name: "Agent Group - WFM-FRAUD_AND_CLAIMS - Chat",
      type: "Chat",
      chatRouter: {
        agentGroup: 10004974,
        businessUnit: 19000936,
        checkAgentAvailability: true,
        clientOutcome: "Thank You for contacting Workforce Management, how may I assist you today?",
        outsideHopNode: "node::2034",
        qThreshold: 999,
        scriptTree: 12200831
      },
      isOutcomeNode: 1,
      onEntryTransition: "checkAA",
      transitions: {
        checkAA: [{
          chatSlots: false,
          condition: "api.getPreviousNode().id !== 2033",
          queueSlots: true,
          target: "node::2033",
          targetChatNode: "node::2028"
        }, {
          chatSlots: false,
          condition: "api.getPreviousNode().id !== 2033",
          queueSlots: false,
          target: "node::2163",
          targetChatNode: "node::2028"
        }]
      }
    }
  };
});
define("Automatons/nodes/2029", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2029,
    type: "nodes",
    attributes: {
      name: "Agent Group - WFM-CLAIMS_CRRR - Chat",
      type: "Chat",
      chatRouter: {
        agentGroup: 10004972,
        agentsBusyNode: "node::2033",
        businessUnit: 19000936,
        checkAgentAvailability: true,
        clientOutcome: "Thank You for contacting Workforce Management, how may I assist you today?",
        outsideHopNode: "node::2034",
        scriptTree: 12200829
      },
      isOutcomeNode: 1
    }
  };
});
define("Automatons/nodes/2030", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2030,
    type: "nodes",
    attributes: {
      name: "Agent Group - WFM-SYSTEM_ACCESS - Chat",
      type: "Chat",
      chatRouter: {
        agentGroup: 10004977,
        agentsBusyNode: "node::2033",
        businessUnit: 19000936,
        checkAgentAvailability: true,
        clientOutcome: "Thank You for contacting Workforce Management, how may I assist you today?",
        outsideHopNode: "node::2034",
        scriptTree: 12200849
      },
      isOutcomeNode: 1
    }
  };
});
define("Automatons/nodes/2031", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2031,
    type: "nodes",
    attributes: {
      name: "Agent Group - WFM-CONSOLE - Chat",
      type: "Chat",
      chatRouter: {
        agentGroup: 10004973,
        businessUnit: 19000936,
        checkAgentAvailability: true,
        clientOutcome: "Thank You for contacting Workforce Management, how may I assist you today?",
        outsideHopNode: "node::2034",
        qThreshold: 999,
        scriptTree: 12200830
      },
      isOutcomeNode: 1,
      onEntryTransition: "checkAA",
      transitions: {
        checkAA: [{
          chatSlots: false,
          condition: "api.getPreviousNode().id !== 2033",
          queueSlots: true,
          target: "node::2033",
          targetChatNode: "node::2031"
        }, {
          chatSlots: false,
          condition: "api.getPreviousNode().id !== 2033",
          queueSlots: false,
          target: "node::2163",
          targetChatNode: "node::2031"
        }]
      }
    }
  };
});
define("Automatons/nodes/2032", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2032,
    type: "nodes",
    attributes: {
      name: "Agent Group - WFM-FRAUD_CLAIMS_CORE - Chat",
      type: "Chat",
      chatRouter: {
        agentGroup: 10004975,
        businessUnit: 19000936,
        checkAgentAvailability: true,
        clientOutcome: "Thank You for contacting Workforce Management, how may I assist you today?",
        outsideHopNode: "node::2034",
        qThreshold: 999,
        scriptTree: 12200832
      },
      isOutcomeNode: 1,
      onEntryTransition: "checkAA",
      transitions: {
        checkAA: [{
          chatSlots: false,
          condition: "api.getPreviousNode().id !== 2033",
          queueSlots: true,
          target: "node::2033",
          targetChatNode: "node::2032"
        }, {
          chatSlots: false,
          condition: "api.getPreviousNode().id !== 2033",
          queueSlots: false,
          target: "node::2163",
          targetChatNode: "node::2032"
        }]
      }
    }
  };
});
define("Automatons/nodes/2033", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2033,
    type: "nodes",
    attributes: {
      name: "Agents Busy - Continue to Target Chat",
      type: "Backup",
      isOutcomeNode: 1,
      template: "template::2380"
    }
  };
});
define("Automatons/nodes/2034", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2034,
    type: "nodes",
    attributes: {
      name: "Outside HOP - Line of Business",
      type: "Outside HOP",
      isOutcomeNode: 1,
      template: "template::2418",
      wfm_groups: {
        ata: {
          greeting: "ATA Workforce Management",
          hop: "M-F 7:00am - 9:00pm ET"
        },
        atm_debit_fraud_claims: {
          greeting: "ATM Debit Fraud Claims Workforce Management",
          hop: "M-F 7:00am - 9:00pm ET"
        },
        cd_ira: {
          greeting: "CD IRA Workforce Management",
          hop: "M-F 7:00am - 9:00pm ET"
        },
        cfm_fraud: {
          greeting: "CFM Fraud Workforce Management",
          hop: "M-F 10:30am - 7:00pm ET"
        },
        check_fraud_claims: {
          greeting: "Check Fraud Claims Workforce Management",
          hop: "M-F 7:00am - 9:00pm ET"
        },
        credit_card_fraud_claims: {
          greeting: "Credit Card Fraud Claims Workforce Management",
          hop: "M-F 7:00am - 9:00pm ET"
        },
        cvl_servicing: {
          greeting: "Workforce Management",
          hop: "M-F 7:00am - 9:00pm ET"
        },
        digital_services: {
          greeting: "Digital Services Workforce Management",
          hop: "M-F 7:00am - 9:00pm ET"
        },
        home_loans: {
          greeting: "Home Loans Workforce Management",
          hop: "M-F 7:00am - 9:00pm ET"
        },
        national_service_solutions: {
          greeting: "National Service & Solutions Workforce Management",
          hop: "M-F 7:00am - 9:00pm ET"
        },
        preferred_sales: {
          greeting: "Preferred Sales Workforce Management",
          hop: "M-F 7:00am - 9:00pm ET"
        },
        preferred_servicing: {
          greeting: "Preferred Servicing Workforce Management",
          hop: "M-F 7:00am - 9:00pm ET"
        },
        psb_fraud: {
          greeting: "PSB Fraud Workforce Management",
          hop: "M-F 7:00am - 9:00pm ET"
        },
        retail: {
          greeting: "Retail Workforce Management",
          hop: "M-F 7:00am - 9:00pm ET"
        },
        retail_fraud_servicing: {
          greeting: "Retail Fraud Servicing Workforce Management",
          hop: "M-F 7:00am - 9:00pm ET"
        },
        sales_fulfillment: {
          greeting: "Workforce Management",
          hop: "M-F 7:00am - 9:00pm ET"
        },
        small_business: {
          greeting: "Small Business Workforce Management",
          hop: "M-F 7:00am - 9:00pm ET"
        },
        system_access: {
          greeting: "System Access Team",
          hop: "M-F 8:30am - 4:00pm ET"
        }
      }
    }
  };
});
define("Automatons/nodes/2036", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2036,
    type: "nodes",
    attributes: {
      name: "Provisioning Internal PreChat - Survey",
      type: "Survey",
      form: {
        fieldsets: [{
          name: "Question Related To",
          type: "select",
          label: "Do you have a question related to a:",
          options: ["Financial Center application", "Home Loans application", "Consumer application"],
          required_error: "&ldquo;Do you have a question related to a&rdquo; is a required field."
        }, {
          name: "Application Name"
        }, {
          name: "Reason for Chat",
          type: "select",
          label: "What would you like to chat about today?",
          options: ["Password Reset", "Support Issue", "Re-Work Issue", "Leave of Absence Return", "Other"],
          required_error: "&ldquo;What would you like to chat about today?&rdquo; is a required field."
        }, {
          name: "Other Reason for Chat",
          type: "textarea",
          dynamic: {
            check: "Reason for Chat",
            value: "Other"
          },
          label: "Please describe what you would like to chat about today:",
          required_error: "&ldquo;Please describe what you would like to chat about today&rdquo; is a required field."
        }, {
          name: "Full name",
          type: "text",
          label: "What is your full name?",
          required_error: "Your full name is a required field."
        }, {
          name: "NBK ID",
          type: "text",
          label: "What is your NBK ID?",
          required_error: "Your NBK ID is a required field."
        }]
      },
      template: "template::2004",
      transitions: {
        submit: [{
          condition: "_.question_related_to === 'financial_center_application'",
          target: "node::2037"
        }, {
          condition: "_.question_related_to === 'home_loans_application'",
          target: "node::2038"
        }, {
          condition: "_.question_related_to === 'consumer_application'",
          target: "node::2039"
        }]
      }
    }
  };
});
define("Automatons/nodes/2037", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2037,
    type: "nodes",
    attributes: {
      name: "Agent Group - PROV-FCC - Chat",
      type: "Chat",
      chatRouter: {
        agentGroup: 10004978,
        agentsBusyNode: "node::2040",
        businessUnit: 19000937,
        checkAgentAvailability: true,
        clientOutcome: "Hi! How can I help you today?",
        outsideHopNode: "node::2041",
        scriptTree: 12200834
      },
      isOutcomeNode: 1
    }
  };
});
define("Automatons/nodes/2038", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2038,
    type: "nodes",
    attributes: {
      name: "Agent Group - PROV-HLI - Chat",
      type: "Chat",
      chatRouter: {
        agentGroup: 10004979,
        agentsBusyNode: "node::2040",
        businessUnit: 19000937,
        checkAgentAvailability: true,
        clientOutcome: "Hi! How can I help you today?",
        outsideHopNode: "node::2041",
        scriptTree: 12200850
      },
      isOutcomeNode: 1
    }
  };
});
define("Automatons/nodes/2039", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2039,
    type: "nodes",
    attributes: {
      name: "Agent Group - PROV-Consumer - Chat",
      type: "Chat",
      chatRouter: {
        agentGroup: 10004980,
        agentsBusyNode: "node::2040",
        businessUnit: 19000937,
        checkAgentAvailability: true,
        clientOutcome: "Hi! How can I help you today?",
        outsideHopNode: "node::2041",
        scriptTree: 12200851
      },
      isOutcomeNode: 1
    }
  };
});
define("Automatons/nodes/2040", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2040,
    type: "nodes",
    attributes: {
      name: "Provisioning Agents Busy Backup Node",
      type: "Backup",
      isOutcomeNode: 1,
      template: "template::2455"
    }
  };
});
define("Automatons/nodes/2041", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2041,
    type: "nodes",
    attributes: {
      name: "Provisioning Outside HOP Backup Node",
      type: "Outside HOP",
      isOutcomeNode: 1,
      template: "template::2454"
    }
  };
});
define("Automatons/nodes/2042", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2042,
    type: "nodes",
    attributes: {
      name: "User Reference Library Redirect",
      type: "Redirect and Exit",
      proto: "node::2066",
      redirectTarget: "current",
      redirectUrl: "http://sharepoint.bankofamerica.com/sites/PowerUsers/ask/default.aspx"
    }
  };
});
define("Automatons/nodes/2043", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2043,
    type: "nodes",
    attributes: {
      name: "Purchasing and Expenses Internal PreChat - Survey",
      type: "Survey",
      form: {
        fieldsets: [{
          name: "Standard ID",
          label: "What is your Standard ID?",
          required_error: "Standard ID is a required field."
        }, {
          name: "Question pertains to",
          type: "select",
          label: "Please select the area your question pertains to:",
          options: ["Ariba / eRequest Support", {
            name: "Accounts Payable (eVDM, invoice research)",
            value: "Accounts Payable"
          }, "Data Entry", "Security/Access", "MySource", "Concur"],
          required_error: "An area your question pertains to is a required field."
        }]
      },
      template: "template::2004",
      transitions: {
        submit: [{
          condition: "api.forms._question_pertains_to.match(/ariba_e_request_support|accounts_payable/)",
          target: "node::2044"
        }, {
          condition: "api.forms._question_pertains_to.match(/my_source/)",
          target: "node::2046"
        }, {
          condition: "api.forms._question_pertains_to.match(/concur/)",
          target: "node::2257"
        }, {
          condition: "api.forms._question_pertains_to.match(/data_entry|security_access/)",
          target: "node::2047"
        }]
      }
    }
  };
});
define("Automatons/nodes/2044", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2044,
    type: "nodes",
    attributes: {
      name: "Agent Group - PNE-GLOBAL_AP - Chat",
      type: "Chat",
      chatRouter: {
        agentGroup: 10004967,
        businessUnit: 19000935,
        checkAgentAvailability: true,
        clientOutcome: "Hi, how may I assist you today?",
        outsideHopNode: "node::2049",
        qThreshold: 999,
        scriptTree: 12200835
      },
      isOutcomeNode: 1,
      onEntryTransition: "checkAA",
      transitions: {
        checkAA: [{
          chatSlots: false,
          condition: "api.getPreviousNode().id !== 2264",
          queueSlots: true,
          target: "node::2264",
          targetChatNode: "node::2044"
        }, {
          chatSlots: false,
          condition: "api.getPreviousNode().id !== 2264",
          queueSlots: false,
          target: "node::2265",
          targetChatNode: "node::2044"
        }]
      }
    }
  };
});
define("Automatons/nodes/2045", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2045,
    type: "nodes",
    attributes: {
      name: "Agent Group - PNE-FINANCE - Chat",
      type: "Chat",
      chatRouter: {
        agentGroup: 10004968,
        agentsBusyNode: "node::2050",
        businessUnit: 19000935,
        checkAgentAvailability: true,
        clientOutcome: "Hi, how may I assist you today?",
        outsideHopNode: "node::2051",
        scriptTree: 12200836
      },
      isOutcomeNode: 1
    }
  };
});
define("Automatons/nodes/2046", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2046,
    type: "nodes",
    attributes: {
      name: "Agent Group - PNE-ASK_TPA - Chat",
      type: "Chat",
      chatRouter: {
        agentGroup: 10004969,
        businessUnit: 19000935,
        checkAgentAvailability: true,
        clientOutcome: "Hi, how may I assist you today?",
        outsideHopNode: "node::2053",
        qThreshold: 999,
        scriptTree: 12200945
      },
      isOutcomeNode: 1,
      onEntryTransition: "checkAA",
      transitions: {
        checkAA: [{
          chatSlots: false,
          condition: "api.getPreviousNode().id !== 2264",
          queueSlots: true,
          target: "node::2264",
          targetChatNode: "node::2046"
        }, {
          chatSlots: false,
          condition: "api.getPreviousNode().id !== 2264",
          queueSlots: false,
          target: "node::2265",
          targetChatNode: "node::2046"
        }]
      }
    }
  };
});
define("Automatons/nodes/2047", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2047,
    type: "nodes",
    attributes: {
      name: "Agent Group - PNE-SHARED_FINANCE_SUPPORT - Chat",
      type: "Chat",
      chatRouter: {
        agentGroup: 10004970,
        businessUnit: 19000935,
        checkAgentAvailability: true,
        clientOutcome: "Hi, how may I assist you today?",
        outsideHopNode: "node::2051",
        qThreshold: 999,
        scriptTree: 12200852
      },
      isOutcomeNode: 1,
      onEntryTransition: "checkAA",
      transitions: {
        checkAA: [{
          chatSlots: false,
          condition: "api.getPreviousNode().id !== 2264",
          queueSlots: true,
          target: "node::2264",
          targetChatNode: "node::2047"
        }, {
          chatSlots: false,
          condition: "api.getPreviousNode().id !== 2264",
          queueSlots: false,
          target: "node::2265",
          targetChatNode: "node::2047"
        }]
      }
    }
  };
});
define("Automatons/nodes/2048", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2048,
    type: "nodes",
    attributes: {
      name: "PNE-GLOBAL_AP Agents Busy Backup Node",
      type: "Backup",
      isOutcomeNode: 1,
      template: "template::2421"
    }
  };
});
define("Automatons/nodes/2049", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2049,
    type: "nodes",
    attributes: {
      name: "PNE-GLOBAL_AP Outside HOP Backup Node",
      type: "Outside HOP",
      isOutcomeNode: 1,
      template: "template::2424"
    }
  };
});
define("Automatons/nodes/2050", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2050,
    type: "nodes",
    attributes: {
      name: "PNE-FINANCE Agents Busy Backup Node",
      type: "Backup",
      isOutcomeNode: 1,
      template: "template::2422"
    }
  };
});
define("Automatons/nodes/2051", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2051,
    type: "nodes",
    attributes: {
      name: "PNE-FINANCE Outside HOP Backup Node",
      type: "Outside HOP",
      isOutcomeNode: 1,
      template: "template::2423"
    }
  };
});
define("Automatons/nodes/2052", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2052,
    type: "nodes",
    attributes: {
      name: "PNE-ASK_TPA Agents Busy Backup Node",
      type: "Backup",
      isOutcomeNode: 1,
      template: "template::2420"
    }
  };
});
define("Automatons/nodes/2053", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2053,
    type: "nodes",
    attributes: {
      name: "PNE-ASK_TPA Outside HOP Backup Node",
      type: "Outside HOP",
      isOutcomeNode: 1,
      template: "template::2419"
    }
  };
});
define("Automatons/nodes/2054", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2054,
    type: "nodes",
    attributes: {
      name: "Sales-Deposit - Topics (Initial)",
      type: "List",
      breadcrumb: "Sales & Deposit Topics",
      form_field_name: "sales_deposit_topics",
      nodes: [{
        label: "Personal - checking or savings",
        node_id: "node::2055"
      }, {
        label: "Small Business - checking or savings",
        node_id: "node::2056"
      }, {
        label: "Online Banking enrollment",
        node_id: "node::2057"
      }],
      template: "template::2479"
    }
  };
});
define("Automatons/nodes/2055", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2055,
    type: "nodes",
    attributes: {
      name: "Sales-Deposit - Personal - Checking and Savings Topics",
      type: "List",
      breadcrumb: "Personal Checking or Savings",
      form_field_name: "sales_deposit_personal_topics",
      nodes: [{
        label: "Apply for a new account",
        node_id: "node::2060"
      }, {
        label: "Check my application status",
        node_id: "node::2058"
      }, {
        label: "Help with an existing account",
        node_id: "node::2009"
      }],
      template: "template::2475"
    }
  };
});
define("Automatons/nodes/2056", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2056,
    type: "nodes",
    attributes: {
      name: "Sales-Deposit - Small Business - Checking and Savings Topics",
      type: "List",
      breadcrumb: "Small Business Checking & Savings",
      form_field_name: "sales_deposit_small_business_topics",
      nodes: [{
        label: "Apply for a new account",
        node_id: "node::2061"
      }, {
        label: "Help with an existing account",
        node_id: "node::2062"
      }],
      template: "template::2476"
    }
  };
});
define("Automatons/nodes/2057", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2057,
    type: "nodes",
    attributes: {
      name: "Sales-Deposit - Online Banking and Enrollment - Self-Help",
      type: "Self-Help",
      breadcrumb: "Small Business Checking & Savings",
      form_field_name: "online_banking_enrollment",
      nodes: [{
        label: "Enroll in Online Banking",
        node_id: "node::2059"
      }],
      template: "template::2473"
    }
  };
});
define("Automatons/nodes/2058", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2058,
    type: "nodes",
    attributes: {
      name: "Sales-Deposit - Personal Checking Savings - Check Application - Self-Help",
      type: "Self-Help",
      template: "template::2474"
    }
  };
});
define("Automatons/nodes/2059", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2059,
    type: "nodes",
    attributes: {
      name: "Sales-Deposit - Online Banking and Enrollment - Redirect",
      type: "Redirect and Exit",
      isOutcomeNode: 1,
      proto: "node::2066",
      redirectTarget: "popup",
      redirectUrl: "https://www.bankofamerica.com/onlinebanking/online-banking.go"
    }
  };
});
define("Automatons/nodes/2060", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2060,
    type: "nodes",
    attributes: {
      name: "Agent Group - COS-DEPOSIT_OAS - Chat",
      type: "Chat",
      chatRouter: {
        agentGroup: 10004947,
        agentsBusyNode: "node::2013",
        businessUnit: 19000925,
        checkAgentAvailability: true,
        clientOutcome: "Hi, I'm a Bank of America specialist and can help answer questions you may have. Before we begin, what is your full name and ZIP code please?",
        outsideHopNode: "node::2014",
        scriptTree: 12200797
      },
      isOutcomeNode: 1
    }
  };
});
define("Automatons/nodes/2061", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2061,
    type: "nodes",
    attributes: {
      name: "Agent Group - SBS-UNAUTH - Chat",
      type: "Chat",
      chatRouter: {
        agentGroup: 10004993,
        agentsBusyNode: "node::2013",
        businessUnit: 19000928,
        checkAgentAvailability: true,
        clientOutcome: "Hi, I'm a Small Business specialist and can help answer questions you may have. Before we begin, what is your full name and ZIP code please?",
        outsideHopNode: "node::2014",
        scriptTree: 12200803
      },
      isOutcomeNode: 1
    }
  };
});
define("Automatons/nodes/2062", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2062,
    type: "nodes",
    attributes: {
      name: "Agent Group - SBS-AUTH - Chat",
      type: "Chat",
      chatRouter: {
        agentGroup: 10004992,
        agentsBusyNode: "node::2013",
        businessUnit: 19000928,
        checkAgentAvailability: true,
        clientOutcome: "Hi, I'm a Small Business specialist and can help answer questions you may have. Before we begin, what is your full name and ZIP code please?",
        outsideHopNode: "node::2014",
        scriptTree: 12200802
      },
      isOutcomeNode: 1
    }
  };
});
define("Automatons/nodes/2063", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2063,
    type: "nodes",
    attributes: {
      name: "Sales-Deposit - Checking Savings FAQs - Redirect and Exit",
      type: "Redirect and Exit",
      isOutcomeNode: 1,
      proto: "node::2066",
      redirectTarget: "current",
      redirectUrl: "https://www.bankofamerica.com/deposits/manage/faq-applying-for-accounts.go"
    }
  };
});
define("Automatons/nodes/2064", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2064,
    type: "nodes",
    attributes: {
      name: "Sales-Deposit - Credit Card FAQs - Redirect",
      type: "Redirect and Exit",
      isOutcomeNode: 1,
      proto: "node::2066",
      redirectTarget: "current",
      redirectUrl: "https://www.bankofamerica.com/smallbusiness/credit-cards/business-credit-card-faqs/"
    }
  };
});
define("Automatons/nodes/2065", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2065,
    type: "nodes",
    attributes: {
      name: "Redirect - Checking Savings",
      type: "Redirect and Exit",
      isOutcomeNode: 1,
      proto: "node::2066",
      redirectTarget: "current",
      redirectUrl: "https://www.bankofamerica.com/help/bus_deposits.go"
    }
  };
});
define("Automatons/nodes/2066", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2066,
    type: "nodes",
    attributes: {
      name: "Prototype - Redirect - Route Test URLs",
      type: "Prototype",
      onEntry: function onEntry() {
        if (api.automatonDataMap.is_test_env) {

          var parser = document.createElement('a');
          parser.href = this.redirectUrl;

          switch (parser.hostname) {
            case 'www.bankofamerica.com':
              parser.hostname = 'www-cert1.ecnp.bankofamerica.com';
              break;
            case 'secure.bankofamerica.com':
              parser.hostname = 'secure-cert1.ecnp.bankofamerica.com';
              break;
          }

          this.redirectUrl = parser.href;
        }
      }
    }
  };
});
define("Automatons/nodes/2067", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2067,
    type: "nodes",
    attributes: {
      name: "CSV-Card vs Deposits Guide - Topics (Initial)",
      type: "List",
      breadcrumb: "Sales & Deposit Topics",
      form_field_name: "sales_deposit_topics",
      nodes: [{
        label: "Deposits",
        node_id: "node::2009"
      }, {
        label: "Card Inquiry",
        node_id: "node::2068"
      }],
      template: "template::2385"
    }
  };
});
define("Automatons/nodes/2068", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2068,
    type: "nodes",
    attributes: {
      name: "Agent Group - CSV-CARD_SERVICE - Chat",
      type: "Chat",
      chatRouter: {
        agentGroup: 10004956,
        agentsBusyNode: "node::2070",
        businessUnit: 19000929,
        checkAgentAvailability: true,
        clientOutcome: "Hi, how can I help you today?",
        outsideHopNode: "node::2071",
        scriptTree: 12200807
      },
      isOutcomeNode: 1
    }
  };
});
define("Automatons/nodes/2070", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2070,
    type: "nodes",
    attributes: {
      name: "Sales-Deposit Card - Agents Busy Backup Node",
      type: "Backup",
      isOutcomeNode: 1,
      template: "template::2477"
    }
  };
});
define("Automatons/nodes/2071", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2071,
    type: "nodes",
    attributes: {
      name: "Sales-Deposit Card - Outside HOP Backup Node",
      type: "Outside HOP",
      isOutcomeNode: 1,
      template: "template::2480"
    }
  };
});
define("Automatons/nodes/2072", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2072,
    type: "nodes",
    attributes: {
      name: "HRSC Pre-chat Survey",
      type: "Survey",
      form: {
        fieldsets: [{
          name: "Standard ID",
          label: "Please provide your Standard ID (NBKXXXX)",
          required_error: "Your Standard ID (NBKXXXX) is a required field."
        }, {
          name: "Reason for Inquiry",
          type: "select",
          label: "Which of the following applies to your inquiry?",
          options: [{
            name: "I am submitting an enquiry for myself",
            value: "For Myself"
          }, {
            name: "I am a manager/proxy submitting an enquiry for another employee(s)",
            value: "For Another"
          }],
          required_error: "This is a required field."
        }, {
          name: "Employee(s) Name or ID",
          dynamic: {
            check: "Reason for Inquiry",
            value: "For Another"
          },
          label: "Please provide us with their name or ID",
          required_error: "Employee(s) name or ID is a required field."
        }, {
          name: "Category",
          type: "select",
          label: "Choose a Category that best describes your query:",
          options: ["HR Applications", "HR Policies and Procedures", "Payroll", "References and Letters", "Ticket Status"]
        }, {
          name: "Ticket Number",
          dynamic: {
            check: "Category",
            value: "Ticket Status"
          },
          label: "Please provide your ticket number:",
          required: false
        }],
        heading: "As part of ongoing efforts to improve service quality from the HR Service Centre, we would like to ask your assistance in completing the following questions designed to help us triage your query more effectively."
      },
      template: "template::2004",
      transitions: {
        submit: [{
          condition: "api.automatonDataMap.agent_group_id === 10004964",
          target: "node::2073"
        }, {
          condition: "api.automatonDataMap.agent_group_id === 10005177",
          target: "node::2075"
        }, {
          condition: "api.automatonDataMap.agent_group_id === 10005178",
          target: "node::2076"
        }, {
          condition: "api.automatonDataMap.agent_group_id === 10005179",
          target: "node::2077"
        }, {
          condition: "api.automatonDataMap.agent_group_id === 10004966",
          target: "node::2078"
        }]
      }
    }
  };
});
define("Automatons/nodes/2073", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2073,
    type: "nodes",
    attributes: {
      name: "Agent Group - HRSC-Japan - Chat",
      type: "Chat",
      chatRouter: {
        agentGroup: 10004964,
        agentsBusyNode: "node::2079",
        checkAgentAvailability: true,
        clientOutcome: "Thank you for choosing to chat with us. How may we help you?",
        outsideHopNode: "node::2080",
        scriptTree: 12200838
      },
      isOutcomeNode: 1
    }
  };
});
define("Automatons/nodes/2074", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2074,
    type: "nodes",
    attributes: {
      name: "Agent Group - HRSC-EMEA - Chat",
      type: "Chat",
      chatRouter: {
        agentGroup: 10004965,
        agentsBusyNode: "node::2079",
        checkAgentAvailability: true,
        clientOutcome: "Thank you for choosing to chat with us. How may we help you?",
        outsideHopNode: "node::2080",
        scriptTree: 12200839
      },
      isOutcomeNode: 1
    }
  };
});
define("Automatons/nodes/2075", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2075,
    type: "nodes",
    attributes: {
      name: "Agent Group - HRSC-INDIA_GDCE - Chat",
      type: "Chat",
      chatRouter: {
        agentGroup: 10005177,
        agentsBusyNode: "node::2079",
        checkAgentAvailability: true,
        clientOutcome: "Thank you for choosing to chat with us. How may we help you?",
        outsideHopNode: "node::2080",
        scriptTree: 12200840
      },
      isOutcomeNode: 1
    }
  };
});
define("Automatons/nodes/2076", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2076,
    type: "nodes",
    attributes: {
      name: "Agent Group - HRSC-INDIA_BANA_DSP - Chat",
      type: "Chat",
      chatRouter: {
        agentGroup: 10005178,
        agentsBusyNode: "node::2079",
        checkAgentAvailability: true,
        clientOutcome: "Thank you for choosing to chat with us. How may we help you?",
        outsideHopNode: "node::2080",
        scriptTree: 12200840
      },
      isOutcomeNode: 1
    }
  };
});
define("Automatons/nodes/2077", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2077,
    type: "nodes",
    attributes: {
      name: "Agent Group - HRSC-APAC - Chat",
      type: "Chat",
      chatRouter: {
        agentGroup: 10005179,
        agentsBusyNode: "node::2079",
        checkAgentAvailability: true,
        clientOutcome: "Thank you for choosing to chat with us. How may we help you?",
        outsideHopNode: "node::2080",
        scriptTree: 12200841
      },
      isOutcomeNode: 1
    }
  };
});
define("Automatons/nodes/2078", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2078,
    type: "nodes",
    attributes: {
      name: "Agent Group - HRSC-AMERICAS - Chat",
      type: "Chat",
      chatRouter: {
        agentGroup: 10004966,
        agentsBusyNode: "node::2079",
        checkAgentAvailability: true,
        clientOutcome: "Thank you for choosing to chat with us. How may we help you?",
        outsideHopNode: "node::2080",
        scriptTree: 12200842
      },
      isOutcomeNode: 1
    }
  };
});
define("Automatons/nodes/2079", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2079,
    type: "nodes",
    attributes: {
      name: "HRSC Agents Busy",
      type: "Backup",
      template: "template::2406"
    }
  };
});
define("Automatons/nodes/2080", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2080,
    type: "nodes",
    attributes: {
      name: "HRSC Outside HOP",
      type: "Outside HOP",
      template: "template::2407"
    }
  };
});
define("Automatons/nodes/2081", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2081,
    type: "nodes",
    attributes: {
      name: "Preferred-Small Business Service-Deposit - Account Type (Initial Node)",
      type: "List",
      breadcrumb: "Account Type",
      form_field_name: "account_type",
      nodes: [{
        label: "Personal",
        node_id: "node::2082"
      }, {
        label: "Small Business",
        node_id: "node::2082"
      }],
      template: "template::2441"
    }
  };
});
define("Automatons/nodes/2082", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2082,
    type: "nodes",
    attributes: {
      name: "Preferred-Small Business Service-Deposit - Topics",
      type: "List",
      breadcrumb: "Account Type Topics",
      form_field_name: "account_type_topics",
      nodes: [{
        label: "Notify us",
        node_id: "node::2083"
      }, {
        label: "Dispute transaction or fees",
        node_id: "node::2084"
      }, {
        label: "Fraud or lost/stolen card",
        node_id: "node::2085"
      }, {
        label: "Account help",
        node_id: "node::2086"
      }],
      template: "template::2452"
    }
  };
});
define("Automatons/nodes/2083", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2083,
    type: "nodes",
    attributes: {
      name: "Preferred-Small Business Service-Deposit - Notify Us - Topics",
      type: "List",
      breadcrumb: "Notify Us",
      form_field_name: "notify_us",
      nodes: [{
        label: "Notify you about upcoming travel",
        node_id: "node::2087"
      }, {
        label: "Report fraud",
        node_id: "node::2088"
      }],
      template: "template::2450"
    }
  };
});
define("Automatons/nodes/2084", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2084,
    type: "nodes",
    attributes: {
      name: "Preferred-Small Business Service-Deposit - Dispute transaction or fees",
      type: "List",
      breadcrumb: "Dispute transaction or fees",
      form_field_name: "dispute_transaction_or_fees",
      nodes: [{
        label: "Dispute checking/savings transactions",
        node_id: "node::2089"
      }, {
        label: "Dispute a fee",
        node_id: "node::2090"
      }],
      template: "template::2445"
    }
  };
});
define("Automatons/nodes/2085", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2085,
    type: "nodes",
    attributes: {
      name: "Preferred-Small Business Service-Deposit - Fraud or lost-stolen card - Self Service",
      type: "Self-Help",
      template: "template::2448"
    }
  };
});
define("Automatons/nodes/2086", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2086,
    type: "nodes",
    attributes: {
      name: "Preferred-Small Business Service-Deposit - Account Help - Topics",
      type: "List",
      breadcrumb: "Account Help",
      form_field_name: "account_help",
      nodes: [{
        label: "Overdraft / Maintenance Fee",
        node_id: "node::2091"
      }, {
        label: "Replace a damaged card online.",
        node_id: "node::2092"
      }, {
        label: "Change account type",
        node_transition: "chat_routing"
      }, {
        label: "Stop a payment other than Bill Pay online.",
        node_id: "node::2093"
      }, {
        label: "Help with Bill Pay",
        node_id: "node::2094"
      }, {
        label: "Help with BankAmeriDeals",
        node_id: "node::2095"
      }, {
        label: "Manage my account",
        node_transition: "chat_routing"
      }],
      template: "template::2442",
      transitions: {
        chat_routing: [{
          condition: "_.account_type === 'personal' && api.automatonDataMap.customer_lob === 'bs'",
          target: "node::2010"
        }, {
          condition: "_.account_type === 'personal'",
          target: "node::2100"
        }, {
          condition: "_.account_type === 'small_business'",
          target: "node::2009"
        }]
      }
    }
  };
});
define("Automatons/nodes/2087", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2087,
    type: "nodes",
    attributes: {
      name: "Preferred-Small Business Service-Deposit - Upcoming Travel - Self Service",
      type: "Self-Help",
      template: "template::2453"
    }
  };
});
define("Automatons/nodes/2088", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2088,
    type: "nodes",
    attributes: {
      name: "Preferred-Small Business Service-Deposit - Report Fraud - Self Service",
      type: "Self-Help",
      isOutcomeNode: 1,
      template: "template::2451"
    }
  };
});
define("Automatons/nodes/2089", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2089,
    type: "nodes",
    attributes: {
      name: "Preferred-Small Business Service-Deposit - Dispute checking-savings transactions - Self Service",
      type: "Self-Help",
      isOutcomeNode: 1,
      template: "template::2446"
    }
  };
});
define("Automatons/nodes/2090", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2090,
    type: "nodes",
    attributes: {
      name: "Preferred-Small Business Service-Deposit - Dispute a fee - Self Service",
      type: "Self-Help",
      isOutcomeNode: 1,
      template: "template::2447"
    }
  };
});
define("Automatons/nodes/2091", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2091,
    type: "nodes",
    attributes: {
      name: "Preferred-Small Business Service-Deposit - Overdraft-Maintenance Fee - Self Service",
      type: "Self-Help",
      isOutcomeNode: 1,
      template: "template::2449"
    }
  };
});
define("Automatons/nodes/2092", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2092,
    type: "nodes",
    attributes: {
      name: "Redirect - Preferred-Small Business Service-Deposit - Replace a damaged card online",
      type: "Redirect and Exit",
      isExitNode: 1,
      proto: "node::2066",
      redirectTarget: "current",
      redirectUrl: "https://secure.bankofamerica.com/administer-accounts/resource-items/eforms/cardOrderAuthentication.go"
    }
  };
});
define("Automatons/nodes/2093", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2093,
    type: "nodes",
    attributes: {
      name: "Redirect - Preferred-Small Business Service-Deposit - Stop a Payment",
      type: "Redirect and Exit",
      isExitNode: 1,
      proto: "node::2066",
      redirectTarget: "current",
      redirectUrl: "https://secure.bankofamerica.com/administer-accounts/custsvc/stopcheckpayment.go"
    }
  };
});
define("Automatons/nodes/2094", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2094,
    type: "nodes",
    attributes: {
      name: "Preferred-Small Business Service-Deposit - Help with Bill Pay - Self Service",
      type: "Self-Help",
      isOutcomeNode: 1,
      template: "template::2443"
    }
  };
});
define("Automatons/nodes/2095", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2095,
    type: "nodes",
    attributes: {
      name: "Preferred-Small Business-Deposit - Help with BankAmeriDeals - Self Service",
      type: "Self-Help",
      isOutcomeNode: 1,
      template: "template::2456"
    }
  };
});
define("Automatons/nodes/2096", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2096,
    type: "nodes",
    attributes: {
      name: "Preferred Service-SB Service Deposit - Agents Busy",
      type: "Backup",
      nodes: [{
        label: "Help & Support",
        node_id: "node::2015"
      }],
      template: "template::2437"
    }
  };
});
define("Automatons/nodes/2097", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2097,
    type: "nodes",
    attributes: {
      name: "Preferred Service-SB Service Deposit - Outside HOP",
      type: "Outside HOP",
      nodes: [{
        label: "Help & Support",
        node_id: "node::2015"
      }],
      template: "template::2439"
    }
  };
});
define("Automatons/nodes/2098", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2098,
    type: "nodes",
    attributes: {
      name: "CSV-DEP_SERVICE - Agents Busy",
      type: "Backup",
      isOutcomeNode: 1,
      template: "template::2382"
    }
  };
});
define("Automatons/nodes/2099", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2099,
    type: "nodes",
    attributes: {
      name: "CSV-DEP_SERVICE - Outside HOP",
      type: "Outside HOP",
      isOutcomeNode: 1,
      template: "template::2383"
    }
  };
});
define("Automatons/nodes/2100", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2100,
    type: "nodes",
    attributes: {
      name: "Agent Group - PSV-PREFERRED_SERVICE - Chat",
      type: "Chat",
      chatRouter: {
        agentGroup: 10004994,
        agentsBusyNode: "node::2096",
        businessUnit: 19000939,
        checkAgentAvailability: true,
        clientOutcome: "Hi, I'm a Preferred Rewards specialist and will be more than happy to assist with any questions you have today. Before we begin, may I have your full name, please?",
        outsideHopNode: "node::2097",
        scriptTree: 12200815
      },
      isOutcomeNode: 1
    }
  };
});
define("Automatons/nodes/2101", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2101,
    type: "nodes",
    attributes: {
      name: "Preferred Service-Card - Account Type (Initial)",
      type: "List",
      breadcrumb: "Account Type",
      form_field_name: "account_type",
      nodes: [{
        label: "Personal",
        node_id: "node::2103"
      }, {
        label: "Small Business",
        node_id: "node::2102"
      }],
      template: "template::2427"
    }
  };
});
define("Automatons/nodes/2102", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2102,
    type: "nodes",
    attributes: {
      name: "Preferred Service-Card - Small Business - Self-Help",
      type: "Self-Help",
      template: "template::2430"
    }
  };
});
define("Automatons/nodes/2103", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2103,
    type: "nodes",
    attributes: {
      name: "Preferred Service-Card - Topics",
      type: "List",
      breadcrumb: "Personal",
      form_field_name: "account_type_topics",
      nodes: [{
        label: "Notify us",
        node_id: "node::2104"
      }, {
        label: "Dispute transaction or fees",
        node_id: "node::2105"
      }, {
        label: "Fraud or lost/stolen card",
        node_id: "node::2106"
      }, {
        label: "Account help",
        node_id: "node::2107"
      }],
      template: "template::2435"
    }
  };
});
define("Automatons/nodes/2104", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2104,
    type: "nodes",
    attributes: {
      name: "Preferred Service-Card - Topics - Notify Us",
      type: "List",
      breadcrumb: "Notify Us",
      form_field_name: "notify_us",
      nodes: [{
        label: "Notify you about upcoming travel",
        node_id: "node::2108"
      }, {
        label: "Report fraud",
        node_id: "node::2109"
      }],
      template: "template::2436"
    }
  };
});
define("Automatons/nodes/2105", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2105,
    type: "nodes",
    attributes: {
      name: "Preferred Service-Card - Topics - Dispute transaction or fees",
      type: "List",
      breadcrumb: "Dispute transaction or fees",
      form_field_name: "dispute_transaction_or_fees",
      nodes: [{
        label: "Dispute checking/savings transactions",
        node_id: "node::2110"
      }, {
        label: "Dispute a fee",
        node_id: "node::2112"
      }],
      template: "template::2434"
    }
  };
});
define("Automatons/nodes/2106", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2106,
    type: "nodes",
    attributes: {
      name: "Preferred Service-Card - Fraud or lost-stolen card - Self Service",
      type: "Self-Help",
      template: "template::2426"
    }
  };
});
define("Automatons/nodes/2107", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2107,
    type: "nodes",
    attributes: {
      name: "Preferred Service-Card - Topics - Account Help",
      type: "List",
      breadcrumb: "Account Help",
      form_field_name: "account_help",
      nodes: [{
        label: "Request a credit line increase",
        node_id: "node::2113"
      }, {
        label: "Interest Rate questions",
        node_id: "node::2100"
      }, {
        label: "Help with BankAmeriDeals",
        node_id: "node::2115"
      }, {
        label: "Manage my account",
        node_id: "node::2100"
      }],
      template: "template::2432"
    }
  };
});
define("Automatons/nodes/2108", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2108,
    type: "nodes",
    attributes: {
      name: "Preferred Service-Card - Upcoming Travel - Self Service",
      type: "Self-Help",
      isOutcomeNode: 1,
      template: "template::2438"
    }
  };
});
define("Automatons/nodes/2109", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2109,
    type: "nodes",
    attributes: {
      name: "Preferred Service-Card - Report Fraud - Self Service",
      type: "Self-Help",
      isOutcomeNode: 1,
      template: "template::2431"
    }
  };
});
define("Automatons/nodes/2110", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2110,
    type: "nodes",
    attributes: {
      name: "Preferred Service-Card - Dispute Credit Card Transactions - Self Service",
      type: "Self-Help",
      template: "template::2428"
    }
  };
});
define("Automatons/nodes/2111", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2111,
    type: "nodes",
    attributes: {
      name: "Redirect - Dispute Credit Card Transaction",
      type: "Redirect and Exit",
      isExitNode: 1,
      proto: "node::2066",
      redirectTarget: "current",
      redirectUrl: "https://secure.bankofamerica.com/customer/help-support/hsAcctSelTopic.go?topic=dispute_credit_card_transaction&category=credit_cards"
    }
  };
});
define("Automatons/nodes/2112", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2112,
    type: "nodes",
    attributes: {
      name: "Preferred Service-Card - Dispute a fee - Self Service",
      type: "Self-Help",
      isOutcomeNode: 1,
      template: "template::2425"
    }
  };
});
define("Automatons/nodes/2113", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2113,
    type: "nodes",
    attributes: {
      name: "Preferred Service-Card - Request a credit line increase - Self Service",
      type: "Self-Help",
      template: "template::2433"
    }
  };
});
define("Automatons/nodes/2114", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2114,
    type: "nodes",
    attributes: {
      name: "Redirect - Request a Credit Line Increase",
      type: "Redirect and Exit",
      isExitNode: 1,
      isOutcomeNode: 1,
      proto: "node::2066",
      redirectTarget: "current",
      redirectUrl: "https://secure.bankofamerica.com/administer-accounts/eforms/creditLineIncrease.go"
    }
  };
});
define("Automatons/nodes/2115", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2115,
    type: "nodes",
    attributes: {
      name: "Preferred Service-Card - Help with BankAmeriDeals - Self Service",
      type: "Self-Help",
      template: "template::2429"
    }
  };
});
define("Automatons/nodes/2116", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2116,
    type: "nodes",
    attributes: {
      name: "Sales-Auto Loan - Topics (Initial)",
      type: "List",
      form_field_name: "auto_loan_topics",
      nodes: [{
        label: "New auto loan",
        node_id: "2117"
      }, {
        label: "Existing account",
        node_id: "2121"
      }],
      template: "template::2470"
    }
  };
});
define("Automatons/nodes/2117", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2117,
    type: "nodes",
    attributes: {
      name: "Agent Group - COS-CVL_OAS - Chat",
      type: "Chat",
      chatRouter: {
        agentGroup: 10004949,
        agentsBusyNode: "node::2118",
        businessUnit: 19000925,
        checkAgentAvailability: true,
        clientOutcome: "Hi, how can I help you today?",
        outsideHopNode: "node::2119",
        scriptTree: 12200799
      },
      isOutcomeNode: 1
    }
  };
});
define("Automatons/nodes/2118", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2118,
    type: "nodes",
    attributes: {
      name: "COS-CVL_OAS Agents Busy Backup Node",
      type: "Backup",
      template: "template::2386"
    }
  };
});
define("Automatons/nodes/2119", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2119,
    type: "nodes",
    attributes: {
      name: "COS-CVL_OAS Outside HOP Backup Node",
      type: "Outside HOP",
      template: "template::2393"
    }
  };
});
define("Automatons/nodes/2120", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2120,
    type: "nodes",
    attributes: {
      name: "Redirect - Auto Loan FAQS",
      type: "Redirect and Exit",
      isOutcomeNode: 1,
      proto: "node::2066",
      redirectTarget: "current",
      redirectUrl: "https://www.bankofamerica.com/auto-loans/service/getting-a-loan-faq.go"
    }
  };
});
define("Automatons/nodes/2121", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2121,
    type: "nodes",
    attributes: {
      name: "Sales-Auto Loan - Existing Account - Self-Help",
      type: "Self-Help",
      template: "template::2465"
    }
  };
});
define("Automatons/nodes/2122", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2122,
    type: "nodes",
    attributes: {
      name: "Redirect - Status of Application",
      type: "Redirect and Exit",
      isExitNode: 1,
      isOutcomeNode: 1,
      proto: "node::2066",
      redirectTarget: "current",
      redirectUrl: "https://secure.bankofamerica.com/applynow/initialize-workflow.go?requesttype=VLSTATUS"
    }
  };
});
define("Automatons/nodes/2123", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2123,
    type: "nodes",
    attributes: {
      name: "Sales-Home Loan - Topics (Initial)",
      type: "List",
      form_field_name: "home_loan_topics",
      nodes: [{
        label: "Home equity line of credit",
        node_id: "2124"
      }, {
        label: "Home equity line increase",
        node_id: "2124"
      }, {
        label: "Interested in a product recommendation",
        node_id: "2124"
      }, {
        label: "Purchase a new home or refinance my current first mortgage",
        node_id: "2127"
      }, {
        label: "Information about my current mortgage account",
        node_id: "2132"
      }, {
        label: "Information about my current home equity account",
        node_id: "2133"
      }],
      template: "template::2482"
    }
  };
});
define("Automatons/nodes/2124", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2124,
    type: "nodes",
    attributes: {
      name: "Agent Group - HLS-HOME_EQUITY_SALES - Chat",
      type: "Chat",
      chatRouter: {
        agentGroup: 10004951,
        agentsBusyNode: "node::2125",
        businessUnit: 19000926,
        checkAgentAvailability: true,
        clientOutcome: "Hi, how may I help you today?",
        outsideHopNode: "node::2126",
        scriptTree: 12200801
      },
      isOutcomeNode: 1
    }
  };
});
define("Automatons/nodes/2125", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2125,
    type: "nodes",
    attributes: {
      name: "HLS-HOME_EQUITY_SALES Agents Busy Backup Node",
      type: "Backup",
      template: "template::2403"
    }
  };
});
define("Automatons/nodes/2126", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2126,
    type: "nodes",
    attributes: {
      name: "HLS-HOME_EQUITY_SALES Outside HOP Backup Node",
      type: "Outside HOP",
      template: "template::2402"
    }
  };
});
define("Automatons/nodes/2127", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2127,
    type: "nodes",
    attributes: {
      name: "Agent Group - HLS-MORTGAGE_SALES - Chat",
      type: "Chat",
      chatRouter: {
        agentGroup: 10004950,
        agentsBusyNode: "node::2128",
        businessUnit: 19000926,
        checkAgentAvailability: true,
        clientOutcome: "Hi, how may I help you today?",
        outsideHopNode: "node::2129",
        scriptTree: 12200800
      },
      isOutcomeNode: 1
    }
  };
});
define("Automatons/nodes/2128", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2128,
    type: "nodes",
    attributes: {
      name: "HLS-MORTGAGE_SALES Agents Busy Backup Node",
      type: "Backup",
      template: "template::2401"
    }
  };
});
define("Automatons/nodes/2129", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2129,
    type: "nodes",
    attributes: {
      name: "HLS-MORTGAGE_SALES Outside HOP Backup Node",
      type: "Outside HOP",
      template: "template::2404"
    }
  };
});
define("Automatons/nodes/2130", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2130,
    type: "nodes",
    attributes: {
      name: "Redirect - Home Equity FAQs",
      type: "Redirect and Exit",
      isOutcomeNode: 1,
      proto: "node::2066",
      redirectTarget: "current",
      redirectUrl: "https://www.bankofamerica.com/home-loans/home-equity/basics.go"
    }
  };
});
define("Automatons/nodes/2131", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2131,
    type: "nodes",
    attributes: {
      name: "Redirect - Home Loan FAQs",
      type: "Redirect and Exit",
      isOutcomeNode: 1,
      proto: "node::2066",
      redirectTarget: "current",
      redirectUrl: "https://www.bankofamerica.com/home-loans/mortgage/budgeting-for-home.go"
    }
  };
});
define("Automatons/nodes/2132", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2132,
    type: "nodes",
    attributes: {
      name: "Sales-Home Loan - Current Mortgage - Self-Help",
      type: "Self-Help",
      template: "template::2481"
    }
  };
});
define("Automatons/nodes/2133", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2133,
    type: "nodes",
    attributes: {
      name: "Sales-Home Loan - Current Home Equity Account - Self-Help",
      type: "Self-Help",
      template: "template::2478"
    }
  };
});
define("Automatons/nodes/2134", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2134,
    type: "nodes",
    attributes: {
      name: "Employee Relations Pre-chat Survey - Survey",
      type: "Survey",
      form: {
        fieldsets: [{
          name: "Inquiry type",
          type: "select",
          label: "Choose a Category that best describes your inquiry:",
          options: ["Advice and Counsel Online Navigation or Tools", "Clarifying Employee Policies", "I'm not sure / Other"],
          required_error: "A category that best describes your inquiry is a required field."
        }, {
          name: "Additional remarks",
          type: "textarea",
          label: "Please add any additional remarks regarding your inquiry:",
          required: false
        }],
        heading: "<span style='font-weight: normal;'>ACO Chat is available to help you navigate the site, use ACO tools and clarify employee policies. If you have questions regarding an employee issue related to attendance, behavior, performance or workplace concerns, call the GHR Service Center at 800.556.6044 and say &ldquo;Employee Relations&rdquo;. To help us triage your inquiry more effectively, answer the following questions:</span>"
      },
      template: "template::2004",
      transitions: {
        submit: [{
          condition: "api.automatonDataMap.agent_group_id === 10004981",
          target: "node::2135"
        }, {
          condition: "api.automatonDataMap.agent_group_id === 10004982",
          target: "node::2136"
        }, {
          condition: "api.automatonDataMap.agent_group_id === 10004983",
          target: "node::2137"
        }]
      }
    }
  };
});
define("Automatons/nodes/2135", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2135,
    type: "nodes",
    attributes: {
      name: "Agent Group - EMP-HR_GWIM - Chat",
      type: "Chat",
      chatRouter: {
        agentGroup: 10004981,
        agentsBusyNode: "node::2159",
        businessUnit: 19000938,
        checkAgentAvailability: true,
        clientOutcome: "Hi, how may I assist you today?",
        outsideHopNode: "node::2138",
        scriptTree: 12200843
      },
      isOutcomeNode: 1
    }
  };
});
define("Automatons/nodes/2136", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2136,
    type: "nodes",
    attributes: {
      name: "Agent Group - EMP-HR_OTHER_LOBS - Chat",
      type: "Chat",
      chatRouter: {
        agentGroup: 10004982,
        agentsBusyNode: "node::2160",
        businessUnit: 19000938,
        checkAgentAvailability: true,
        clientOutcome: "Hi, how may I assist you today?",
        outsideHopNode: "node::2138",
        scriptTree: 12200844
      },
      isOutcomeNode: 1
    }
  };
});
define("Automatons/nodes/2137", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2137,
    type: "nodes",
    attributes: {
      name: "Agent Group - EMP-HR_GBAM - Chat",
      type: "Chat",
      chatRouter: {
        agentGroup: 10004983,
        agentsBusyNode: "node::2161",
        businessUnit: 19000938,
        checkAgentAvailability: true,
        clientOutcome: "Hi, how may I assist you today?",
        outsideHopNode: "node::2138",
        scriptTree: 12200845
      },
      isOutcomeNode: 1
    }
  };
});
define("Automatons/nodes/2138", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2138,
    type: "nodes",
    attributes: {
      name: "Employee Relations Agents Unavailable Node",
      type: "Backup",
      template: "template::2399"
    }
  };
});
define("Automatons/nodes/2139", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2139,
    type: "nodes",
    attributes: {
      name: "BOL Pre-chat Survey",
      type: "Survey",
      form: {
        fieldsets: [{
          name: "First Name",
          label: "Please enter your first name",
          required: true,
          required_error: "Your first name is a required field."
        }, {
          name: "Last Name",
          label: "Please enter your last name",
          required: true,
          required_error: "Your last name is a required field."
        }, {
          name: "Employer",
          label: "For the plan account you are accessing through Benefits Online, who is the employer?",
          required: false
        }],
        heading: "<span style='font-weight: normal;'>Our chat representatives can help you navigate through Benefits Online and answer general questions.</span><small>Please note, chat representatives have limited access to your account and are not able to provide account specific details or process transactions, including resetting your account password.</small>"
      },
      template: "template::2004",
      transitions: {
        submit: [{
          condition: "api.automatonDataMap.agent_group_id === 10005115",
          target: "node::2140"
        }, {
          condition: "api.automatonDataMap.agent_group_id === 10005116",
          target: "node::2141"
        }, {
          condition: "api.automatonDataMap.agent_group_id === 10005117",
          target: "node::2142"
        }, {
          condition: "api.automatonDataMap.agent_group_id === 10005118",
          target: "node::2143"
        }, {
          condition: "api.automatonDataMap.agent_group_id === 10005119",
          target: "node::2144"
        }]
      }
    }
  };
});
define("Automatons/nodes/2140", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2140,
    type: "nodes",
    attributes: {
      name: "Agent Group - BOL-401K - Chat",
      type: "Chat",
      chatRouter: {
        agentGroup: 10005115,
        businessUnit: 19000959,
        checkAgentAvailability: true,
        outsideHopNode: "node::2146",
        scriptTree: 12200819
      },
      isOutcomeNode: 1
    }
  };
});
define("Automatons/nodes/2141", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2141,
    type: "nodes",
    attributes: {
      name: "Agent Group - BOL-LOGIN - Chat",
      type: "Chat",
      chatRouter: {
        agentGroup: 10005116,
        businessUnit: 19000959,
        checkAgentAvailability: true,
        outsideHopNode: "node::2146",
        scriptTree: 12200819
      },
      isOutcomeNode: 1
    }
  };
});
define("Automatons/nodes/2142", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2142,
    type: "nodes",
    attributes: {
      name: "Agent Group - BOL-XSOP - Chat",
      type: "Chat",
      chatRouter: {
        agentGroup: 10005117,
        businessUnit: 19000959,
        checkAgentAvailability: true,
        outsideHopNode: "node::2146",
        scriptTree: 12200819
      },
      isOutcomeNode: 1
    }
  };
});
define("Automatons/nodes/2143", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2143,
    type: "nodes",
    attributes: {
      name: "Agent Group - BOL-XSOP-RETENTION - Chat",
      type: "Chat",
      chatRouter: {
        agentGroup: 10005118,
        businessUnit: 19000959,
        checkAgentAvailability: true,
        outsideHopNode: "node::2146",
        scriptTree: 12200819
      },
      isOutcomeNode: 1
    }
  };
});
define("Automatons/nodes/2144", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2144,
    type: "nodes",
    attributes: {
      name: "Agent Group - BOL-401K-RETENTION - Chat",
      type: "Chat",
      chatRouter: {
        agentGroup: 10005119,
        businessUnit: 19000959,
        checkAgentAvailability: true,
        outsideHopNode: "node::2146",
        scriptTree: 12200819
      },
      isOutcomeNode: 1
    }
  };
});
define("Automatons/nodes/2145", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2145,
    type: "nodes",
    attributes: {
      name: "MRL-BENEFITS_ONLINE - Agents Busy",
      type: "Backup",
      isOutcomeNode: 1,
      template: "template::2413"
    }
  };
});
define("Automatons/nodes/2146", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2146,
    type: "nodes",
    attributes: {
      name: "MRL-BENEFITS_ONLINE - Outside HOP",
      type: "Outside HOP",
      isOutcomeNode: 1,
      template: "template::2417"
    }
  };
});
define("Automatons/nodes/2147", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2147,
    type: "nodes",
    attributes: {
      name: "Sales-Card - Topics (Initial)",
      type: "List",
      form_field_name: "sales_card_topics",
      nodes: [{
        label: "Personal - credit cards",
        node_id: "node::2148"
      }, {
        label: "Small Business - credit cards",
        node_id: "node::2149"
      }, {
        label: "Online Banking enrollment",
        node_id: "node::2150"
      }],
      template: "template::2457"
    }
  };
});
define("Automatons/nodes/2148", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2148,
    type: "nodes",
    attributes: {
      name: "Sales-Card - Personal - Credit Cards Topics",
      type: "List",
      form_field_name: "sales_card_personal",
      nodes: [{
        label: "Apply for a new account",
        node_id: "node::2155"
      }, {
        label: "Check my application status",
        node_id: "node::2151"
      }, {
        label: "Help with an existing account",
        node_id: "node::2068"
      }],
      template: "template::2460"
    }
  };
});
define("Automatons/nodes/2149", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2149,
    type: "nodes",
    attributes: {
      name: "Sales-Card - Small Business - Credit Cards Topics",
      type: "List",
      form_field_name: "sales_card_small_business",
      nodes: [{
        label: "Apply for a new account",
        node_id: "node::2061"
      }, {
        label: "Help with an existing account",
        node_id: "node::2152"
      }],
      template: "template::2469"
    }
  };
});
define("Automatons/nodes/2150", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2150,
    type: "nodes",
    attributes: {
      name: "Sales-Card - Online Banking and Enrollment - Self-Help",
      type: "Self-Help",
      template: "template::2464"
    }
  };
});
define("Automatons/nodes/2151", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2151,
    type: "nodes",
    attributes: {
      name: "Sales-Card - Personal Credit Cards - Check Application - Self-Help",
      type: "Self-Help",
      template: "template::2468"
    }
  };
});
define("Automatons/nodes/2152", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2152,
    type: "nodes",
    attributes: {
      name: "Sales-Card - SB Credit Cards - Existing Account - Self-Help",
      type: "Self-Help",
      template: "template::2459"
    }
  };
});
define("Automatons/nodes/2153", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2153,
    type: "nodes",
    attributes: {
      name: "Redirect - Check Credit Card App Status",
      type: "Redirect and Exit",
      isOutcomeNode: 1,
      proto: "node::2066",
      redirectTarget: "current",
      redirectUrl: "https://www.bankofamerica.com/credit-cards/application-status/app-status-form.go#tabs-2"
    }
  };
});
define("Automatons/nodes/2154", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2154,
    type: "nodes",
    attributes: {
      name: "Redirect - Credit Card FAQs",
      type: "Redirect and Exit",
      isOutcomeNode: 1,
      proto: "node::2066",
      redirectTarget: "current",
      redirectUrl: "https://www.bankofamerica.com/credit-cards/accounts-faq.go"
    }
  };
});
define("Automatons/nodes/2155", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2155,
    type: "nodes",
    attributes: {
      name: "Agent Group - COS-CARD_OAS - Chat",
      type: "Chat",
      chatRouter: {
        agentGroup: 10004948,
        agentsBusyNode: "node::2156",
        businessUnit: 19000925,
        checkAgentAvailability: true,
        clientOutcome: "Hi, I'm a Bank of America specialist and can help answer questions you may have. Before we begin, what is your full name and ZIP code please?",
        outsideHopNode: "node::2157",
        scriptTree: 12200798
      },
      isOutcomeNode: 1
    }
  };
});
define("Automatons/nodes/2156", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2156,
    type: "nodes",
    attributes: {
      name: "Sales-Card CARD Agents Busy Backup Node",
      type: "Backup",
      template: "template::2472"
    }
  };
});
define("Automatons/nodes/2157", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2157,
    type: "nodes",
    attributes: {
      name: "Sales-Card CARD Outside HOP Backup Node",
      type: "Outside HOP",
      template: "template::2471"
    }
  };
});
define("Automatons/nodes/2158", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2158,
    type: "nodes",
    attributes: {
      name: "Scale Test",
      type: "Form",
      template: "template::2484"
    }
  };
});
define("Automatons/nodes/2159", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2159,
    type: "nodes",
    attributes: {
      name: "Agent Group - EMP-HR_GWIM - Queued",
      type: "Chat",
      chatRouter: {
        agentGroup: 10004981,
        businessUnit: 19000938,
        checkAgentAvailability: false,
        clientOutcome: "Please hold while we establish a secure connection.",
        scriptTree: 12200843
      },
      isOutcomeNode: 1
    }
  };
});
define("Automatons/nodes/2160", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2160,
    type: "nodes",
    attributes: {
      name: "Agent Group - EMP-HR_OTHER_LOBS - Queued",
      type: "Chat",
      chatRouter: {
        agentGroup: 10004982,
        businessUnit: 19000938,
        checkAgentAvailability: false,
        clientOutcome: "Please hold while we establish a secure connection.",
        scriptTree: 12200844
      },
      isOutcomeNode: 1
    }
  };
});
define("Automatons/nodes/2161", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2161,
    type: "nodes",
    attributes: {
      name: "Agent Group - EMP-HR_GBAM - Queued",
      type: "Chat",
      chatRouter: {
        agentGroup: 10004983,
        businessUnit: 19000938,
        checkAgentAvailability: false,
        clientOutcome: "Please hold while we establish a secure connection.",
        scriptTree: 12200845
      },
      isOutcomeNode: 1
    }
  };
});
define("Automatons/nodes/2163", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2163,
    type: "nodes",
    attributes: {
      name: "Agents Busy - No Queue Slot Available",
      type: "Backup",
      isOutcomeNode: 1,
      template: "template::2379"
    }
  };
});
define("Automatons/nodes/2211", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2211,
    type: "nodes",
    attributes: {
      name: "Benefits-Online Post Chat Survey",
      type: "survey",
      formify: {
        caret: true,
        fields: [{
          id: "question1",
          type: "select",
          label: "What is your level of satisfaction with Benefits Online?",
          options: ["7 - Extremely Satisfied", "6", "5", "4", "3", "2", "1 - Extremely Dissatisfied"],
          placeholder: "Please select one...",
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "question2",
          type: "select",
          label: "What is your level of satisfaction with the representative that just assisted you?",
          options: ["7 - Extremely Satisfied", "6", "5", "4", "3", "2", "1 - Extremely Dissatisfied"],
          placeholder: "Please select one...",
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "question3",
          type: "select",
          label: "What is your level of satisfaction with the technology Merrill Lynch Wealth Management uses for chatting online?",
          options: ["7 - Extremely Satisfied", "6", "5", "4", "3", "2", "1 - Extremely Dissatisfied"],
          placeholder: "Please select one...",
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "question4",
          type: "select",
          label: "Did this chat session help provide a resolution or steps to a resolution for your inquiry?",
          options: ["7 - Extremely Satisfied", "6", "5", "4", "3", "2", "1 - Extremely Dissatisfied"],
          placeholder: "Please select one...",
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "question5",
          type: "select",
          label: "Chat experience saved me a call to resolve my inquiry?",
          options: ["Yes", "No"],
          placeholder: "Please select one...",
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "question6",
          type: "textarea",
          label: "Thank you for taking time to complete our survey. Your feedback is important, and we welcome any additional comments or suggestions you have to help us improve our chat service in the future."
        }],
        heading: "Thank you for chatting. Please provide us with your feedback so we may serve you better.",
        next: "submit"
      },
      surveyAlerts: [{
        name: "Benefits Online",
        conditions: {
          or: [{
            or: ["question2 contains any 1, 2, 3, 4, 5"]
          }, "question5 equals No"]
        },
        emailSpecName: "BenefitsOnline",
        emailSubject: "C2C - Low Survey Response Alert!",
        emailTemplate: "template::2013"
      }],
      template: "template::2395",
      transitions: {
        submit: {
          target: "node::2212"
        }
      }
    }
  };
});
define("Automatons/nodes/2212", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2212,
    type: "nodes",
    attributes: {
      name: "Benefits-Online Post Chat Thank you",
      type: "thankyou",
      isOutcomeNode: 1,
      template: "template::2392"
    }
  };
});
define("Automatons/nodes/2213", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2213,
    type: "nodes",
    attributes: {
      name: "Merrill-Edge-Sales Post Chat Survey",
      type: "survey",
      formify: {
        caret: true,
        fields: [{
          id: "question1",
          type: "select",
          label: "What is your level of satisfaction with Merrill Edge?",
          options: ["10 - Extremely Satisfied", "9", "8", "7", "6", "5", "4", "3", "2", "1 - Extremely Dissatisfied"],
          placeholder: "Please select one...",
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "question2",
          type: "select",
          label: "What is your level of satisfaction with the representative that just assisted you?",
          options: ["10 - Extremely Satisfied", "9", "8", "7", "6", "5", "4", "3", "2", "1 - Extremely Dissatisfied"],
          placeholder: "Please select one...",
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "question3",
          type: "select",
          label: "What is your level of satisfaction with the technology Merrill Edge uses for chatting online?",
          options: ["10 - Extremely Satisfied", "9", "8", "7", "6", "5", "4", "3", "2", "1 - Extremely Dissatisfied"],
          placeholder: "Please select one...",
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          fields: [{
            id: "question4",
            type: "checkbox",
            label: "When you selected our chat service today, what type of assistance did you expect? (Please select all that apply)",
            options: ["Information about brokerage accounts", "Information about retirement accounts", "Help with the online applications", "Validation of my investment selections", "Help with my existing brokerage accounts", "Quotes and information on specific securities", "Direction on transferring accounts from another investment firm", "Other"],
            required: true,
            requiredError: "Please answer the following question:"
          }, {
            id: "question4other",
            type: "text",
            dynamic: {
              check: "question4",
              logic: "contains",
              value: "Other"
            },
            label: "Other:",
            required: true,
            requiredError: "Please answer the following question:"
          }],
          group: ""
        }, {
          id: "question5",
          type: "textarea",
          label: "Thank you for taking time to complete our survey. Your feedback is important, and we welcome any additional comments or suggestions you have to help us improve our chat service in the future."
        }],
        heading: "Thank you for chatting. Please provide us with your feedback so we may serve you better.",
        next: "submit"
      },
      surveyAlerts: [{
        name: "Merrill Edge Sales",
        conditions: {
          or: ["question1 equals 1 - Extremely Dissatisfied", "question2 equals 1 - Extremely Dissatisfied", "question3 equals 1 - Extremely Dissatisfied"]
        },
        emailSpecName: "MerrillEdgeSales",
        emailSubject: "Chat Survey Response Alert!",
        emailTemplate: "template::2014"
      }],
      template: "template::2412",
      transitions: {
        submit: {
          target: "node::2214"
        }
      }
    }
  };
});
define("Automatons/nodes/2214", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2214,
    type: "nodes",
    attributes: {
      name: "Merrill-Edge-Sales Post Chat Thank you",
      type: "thankyou",
      isOutcomeNode: 1,
      template: "template::2411"
    }
  };
});
define("Automatons/nodes/2215", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2215,
    type: "nodes",
    attributes: {
      name: "Merrill-Edge-Service Post Chat Survey",
      type: "survey",
      formify: {
        caret: true,
        fields: [{
          fields: [{
            id: "question1",
            type: "select",
            label: "Please think about your entire experience with the chat service today. Considering everything, how satisfied are you with that experience?",
            options: ["10 - Extremely Satisfied", "9", "8", "7", "6", "5", "4", "3", "2", "1 - Extremely Dissatisfied"],
            placeholder: "Please select one..."
          }, {
            id: "question1a",
            type: "textarea",
            dynamic: {
              check: "question1",
              logic: "any",
              value: "8;7;6;5;4;3;2;1 - Extremely Dissatisfied"
            },
            label: "Please provide any additional details as to why you chose your score."
          }],
          group: ""
        }, {
          fields: [{
            id: "question2",
            type: "select",
            label: "Was the reason for your chat resolved during that conversation?",
            options: ["Yes", "No"],
            placeholder: "Please select one..."
          }, {
            id: "question2a",
            type: "textarea",
            dynamic: {
              check: "question2",
              logic: "equals",
              value: "No"
            },
            label: "Please provide any additional feedback as to how the associate could have provided additional help."
          }],
          group: ""
        }, {
          fields: [{
            id: "question3",
            type: "select",
            label: "For this next question, we want you to think only about the LAST associate you chatted with today. Overall, how satisfied are you with the associate?",
            options: ["10 - Extremely Satisfied", "9", "8", "7", "6", "5", "4", "3", "2", "1 - Extremely Dissatisfied"],
            placeholder: "Please select one..."
          }, {
            id: "question3a",
            type: "textarea",
            dynamic: {
              check: "question3",
              logic: "any",
              value: "8;7;6;5;4;3;2;1 - Extremely Dissatisfied"
            },
            label: "Please tell us more about the reason for your rating regarding the associate you chatted with today."
          }],
          group: ""
        }, {
          id: "question4",
          type: "select",
          label: "Had Chat not been available today, would you have:",
          options: ["1. Continued to self-service online", "2. Sent us an email", "3. Called an Investment Center Representative"]
        }, {
          id: "question5",
          type: "textarea",
          label: "Thank you for taking time to complete our survey. Your feedback is important, and we welcome any additional comments or suggestions you have to help us improve our chat service in the future."
        }],
        heading: "Thank you for chatting. Please provide us with your feedback so we may serve you better.",
        next: "submit"
      },
      surveyAlerts: [{
        name: "Merrill Edge Service",
        conditions: {
          or: ["question3 equals 1 - Extremely Dissatisfied", "question3 equals 2", "question3 equals 3", "question3 equals 4", "question3 equals 5", "question3 equals 6", "question3 equals 7"]
        },
        emailSpecName: "MerrillEdgeService",
        emailSubject: "Service - Chat Survey Response Alert!",
        emailTemplate: "template::2017"
      }],
      template: "template::2414",
      transitions: {
        submit: {
          target: "node::2216"
        }
      }
    }
  };
});
define("Automatons/nodes/2216", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2216,
    type: "nodes",
    attributes: {
      name: "Merrill-Edge-Service Post Chat Thank you",
      type: "thankyou",
      isOutcomeNode: 1,
      template: "template::2410"
    }
  };
});
define("Automatons/nodes/2217", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2217,
    type: "nodes",
    attributes: {
      name: "Small-Business-Sales Post Chat Survey",
      type: "survey",
      formify: {
        caret: true,
        fields: [{
          id: "question1",
          type: "select",
          label: "Please think about your entire chat experience today. How would you rate your overall experience?",
          options: ["10 - Extremely Satisfied", "9", "8", "7", "6", "5", "4", "3", "2", "1 - Extremely Dissatisfied"],
          placeholder: "Please select one...",
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "question2",
          type: "select",
          label: "Think about the last person who handled your chat, how would you rate your satisfaction with the representative on overall quality of service?",
          options: ["10 - Extremely Satisfied", "9", "8", "7", "6", "5", "4", "3", "2", "1 - Extremely Dissatisfied"],
          placeholder: "Please select one...",
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "question3",
          type: "select",
          label: "Is this the first time you contacted Bank of America about this same exact question or issue?",
          options: ["Yes", "No"],
          placeholder: "Please select one...",
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "question4",
          type: "select",
          dynamic: {
            check: "question3",
            logic: "equals",
            value: "No"
          },
          label: "Which of the following was the first action you took regarding this question or issue?",
          options: ["1. Called Bank of America to speak to a representative", "2. Used the automated phone system", "3. Visited a branch location", "4. Called a branch location", "5. Used the bankofamerica.com website", "6. Used the Bank of America mobile app", "7. Contacted Bank of America through Social Media (i.e. Twitter, Facebook, etc.)", "8. Sent an email to Bank of America", "9. Contacted Bank of America via Chat", "10. Some other action"],
          placeholder: "Please select one...",
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "question5",
          type: "select",
          label: "Did the information provided resolve the reason for your chat?",
          options: ["Yes", "No"],
          placeholder: "Please select one...",
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "question6",
          type: "select",
          dynamic: {
            check: "question5",
            logic: "equals",
            value: "No"
          },
          label: "Which one of the following best categorizes the nature of your chat?",
          options: ["1. General account inquiry or request", "2. Make a change to account or service", "3. Obtain product information", "4. Resolve a problem or correct an error with an account or service"],
          placeholder: "Please select one...",
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "question7",
          type: "select",
          label: "Had Chat not been available today, would you have:",
          options: ["1. Called Bank of America to speak to a representative", "2. Used the automated phone system", "3. Visited a branch or bank location", "4. Called a branch or bank location", "5. Searched the bankofamerica.com website", "6. Searched the web (outside of the bankofamerica.com website)", "7. Sent an email to Bank of America", "8. Some other action"],
          placeholder: "Please select one...",
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "question8",
          type: "textarea",
          label: "We are always looking for opportunities to improve this service. Please provide us with your feedback."
        }],
        heading: "Thank you for chatting. Please provide us with your feedback so we may serve you better.",
        next: "submit"
      },
      surveyAlerts: [{
        name: "SB Sales",
        conditions: {
          or: ["question2 equals 1 - Extremely Dissatisfied", "question2 equals 2", "question2 equals 3", "question2 equals 4", "question2 equals 5"]
        },
        emailSpecName: "SBSales",
        emailSubject: "SB Sales Chat Survey Alert",
        emailTemplate: "template::2018"
      }],
      template: "template::2485",
      transitions: {
        submit: {
          target: "node::2218"
        }
      }
    }
  };
});
define("Automatons/nodes/2218", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2218,
    type: "nodes",
    attributes: {
      name: "Small-Business-Sales Post Chat Thank you",
      type: "thankyou",
      isOutcomeNode: 1,
      template: "template::2486"
    }
  };
});
define("Automatons/nodes/2219", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2219,
    type: "nodes",
    attributes: {
      name: "Small-Business-Service Post Chat Survey",
      type: "survey",
      formify: {
        caret: true,
        fields: [{
          id: "question1",
          type: "select",
          label: "Please think about your entire chat experience today. How would you rate your overall experience?",
          options: ["10 - Extremely Satisfied", "9", "8", "7", "6", "5", "4", "3", "2", "1 - Extremely Dissatisfied"],
          placeholder: "Please select one...",
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "question2",
          type: "select",
          label: "Think about the last person who handled your chat, how would you rate your satisfaction with the representative on overall quality of service?",
          options: ["10 - Extremely Satisfied", "9", "8", "7", "6", "5", "4", "3", "2", "1 - Extremely Dissatisfied"],
          placeholder: "Please select one...",
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "question3",
          type: "select",
          label: "Think about the last person who handled your chat, how would you rate your satisfaction with the representative on demonstrating a willingness to resolve your question or concern?",
          options: ["10 - Extremely Satisfied", "9", "8", "7", "6", "5", "4", "3", "2", "1 - Extremely Dissatisfied"],
          placeholder: "Please select one...",
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "question4",
          type: "select",
          label: "How much do you agree with the following statement? I feel confident the last chat representative handled my request correctly.",
          options: ["10 - Extremely Confident", "9", "8", "7", "6", "5 - Neutral", "4", "3", "2", "1 - Not At All Confident"],
          placeholder: "Please select one...",
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "question5",
          type: "select",
          label: "Is this the first time you contacted Bank of America about this same exact question or issue?",
          options: ["Yes", "No"],
          placeholder: "Please select one...",
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "question6",
          type: "select",
          dynamic: {
            check: "question5",
            logic: "equals",
            value: "No"
          },
          label: "Which of the following was the first action you took regarding this question or issue?",
          options: ["1. Called Bank of America to speak to a representative", "2. Used the automated phone system", "3. Visited a branch location", "4. Called a branch location", "5. Used the bankofamerica.com website", "6. Used the Bank of America mobile app", "7. Contacted Bank of America through Social Media (i.e. Twitter, Facebook, etc.)", "8. Sent an email to Bank of America", "9. Contacted Bank of America via Chat", "10. Some other action"],
          placeholder: "Please select one...",
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "question7",
          type: "select",
          label: "Did the information provided resolve the reason for your chat?",
          options: ["Yes", "No"],
          placeholder: "Please select one...",
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "question8",
          type: "select",
          label: "Had Chat not been available today, would you have:",
          options: ["1. Called Bank of America to speak to a representative", "2. Used the automated phone system", "3. Visited a branch or bank location", "4. Called a branch or bank location", "5. Searched the bankofamerica.com website", "6. Searched the web (outside of the bankofamerica.com website)", "7. Sent an email to Bank of America", "8. Some other action"],
          placeholder: "Please select one...",
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "question9",
          type: "textarea",
          label: "We are always looking for opportunities to improve this service. Please provide us with your feedback."
        }],
        heading: "Thank you for chatting. Please provide us with your feedback so we may serve you better.",
        next: "submit"
      },
      surveyAlerts: [{
        name: "SB Service",
        conditions: {
          or: [{
            or: ["question1 equals 1 - Extremely Dissatisfied", "question1 equals 2", "question1 equals 3", "question1 equals 4", "question1 equals 5", "question1 equals 6", "question1 equals 7", "question1 equals 8"]
          }, {
            or: ["question2 equals 1 - Extremely Dissatisfied", "question2 equals 2", "question2 equals 3", "question2 equals 4", "question2 equals 5", "question2 equals 6", "question2 equals 7", "question2 equals 8"]
          }]
        },
        emailSpecName: "SBService",
        emailSubject: "Chat Survey Response Alert!",
        emailTemplate: "template::2019"
      }],
      template: "template::2483",
      transitions: {
        submit: {
          target: "node::2220"
        }
      }
    }
  };
});
define("Automatons/nodes/2220", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2220,
    type: "nodes",
    attributes: {
      name: "Small-Business-Service Post Chat Thank you",
      type: "thankyou",
      isOutcomeNode: 1,
      template: "template::2488"
    }
  };
});
define("Automatons/nodes/2221", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2221,
    type: "nodes",
    attributes: {
      name: "Home-Loan-Sales Post Chat Survey",
      type: "survey",
      formify: {
        caret: true,
        fields: [{
          id: "question1",
          type: "select",
          label: "What is your level of satisfaction with Bank of America?",
          options: ["10 - Extremely Satisfied", "9", "8", "7", "6", "5", "4", "3", "2", "1 - Extremely Dissatisfied"],
          placeholder: "Please select one...",
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "question2",
          type: "select",
          label: "What is your level of satisfaction as it relates specifically to the chat associate who just assisted you?",
          options: ["10 - Extremely Satisfied", "9", "8", "7", "6", "5", "4", "3", "2", "1 - Extremely Dissatisfied"],
          placeholder: "Please select one...",
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "question3",
          type: "select",
          label: "What is your level of satisfaction as it relates specifically to the Bank of America technology used for chatting online?",
          options: ["10 - Extremely Satisfied", "9", "8", "7", "6", "5", "4", "3", "2", "1 - Extremely Dissatisfied"],
          placeholder: "Please select one...",
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "question4",
          type: "select",
          label: "What is your preferred method of communicating with Bank of America?",
          options: ["1. In person (Banking Centers)", "2. Telephone", "3. Email", "4. Text chat", "5. Self-service on the web"],
          placeholder: "Please select one...",
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "question5",
          type: "select",
          label: "If I hadn't chatted with a Bank of America Mortgage specialist today, I would have:",
          options: ["1. Visited a Bank of America branch", "2. Called the toll-free number", "3. Tried to find out the answer on the website", "4. Not contacted Bank of America"],
          placeholder: "Please select one...",
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "question6",
          type: "select",
          label: "How did Mortgage Chat influence your loan decision?",
          options: ["1. I will apply because of my chat experience", "2. I will apply independent of chat", "3. I am not sure if I'll apply, but chat was helpful", "4. I am not sure if I'll apply, but chat was not helpful", "5. I do not plan to apply due to poor chat customer service", "6. I do not plan to apply because product does not meet my needs"],
          placeholder: "Please select one...",
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "question7",
          type: "textarea",
          label: "What can we do to make your chat experience better?"
        }],
        heading: "Thank you for chatting. Please provide us with your feedback so we may serve you better.",
        next: "submit"
      },
      surveyAlerts: [{
        name: "Home Loan Sales",
        conditions: {
          or: [{
            or: ["question2 equals 1 - Extremely Dissatisfied", "question2 equals 2", "question2 equals 3", "question2 equals 4", "question2 equals 5"]
          }, {
            or: ["question3 equals 1 - Extremely Dissatisfied", "question3 equals 2", "question3 equals 3", "question3 equals 4", "question3 equals 5"]
          }]
        },
        emailSpecName: "HomeLoanSales",
        emailSubject: "Chat - Survey Response Alert!",
        emailTemplate: "template::2020"
      }],
      template: "template::2405",
      transitions: {
        submit: {
          target: "node::2222"
        }
      }
    }
  };
});
define("Automatons/nodes/2222", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2222,
    type: "nodes",
    attributes: {
      name: "Home-Loan-Sales Post Chat Thank you",
      type: "thankyou",
      isOutcomeNode: 1,
      template: "template::2408"
    }
  };
});
define("Automatons/nodes/2223", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2223,
    type: "nodes",
    attributes: {
      name: "Consumer-OAS Post Chat Survey",
      type: "survey",
      formify: {
        caret: true,
        fields: [{
          id: "question1",
          type: "select",
          label: "Please think about your entire chat experience today. How would you rate your overall experience?",
          options: ["10 - Extremely Satisfied", "9", "8", "7", "6", "5", "4", "3", "2", "1 - Extremely Dissatisfied"],
          placeholder: "Please select one...",
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "question2",
          type: "select",
          label: "Think about the last person who handled your chat, how would you rate your satisfaction with the representative on overall quality of service?",
          options: ["10 - Extremely Satisfied", "9", "8", "7", "6", "5", "4", "3", "2", "1 - Extremely Dissatisfied"],
          placeholder: "Please select one...",
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "question3",
          type: "select",
          label: "Is this the first time you contacted Bank of America about this same exact question or issue?",
          options: ["Yes", "No"],
          placeholder: "Please select one...",
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "question4",
          type: "select",
          dynamic: {
            check: "question3",
            logic: "equals",
            value: "No"
          },
          label: "Which of the following was the first action you took regarding this question or issue?",
          options: ["1. Called Bank of America to speak to a representative", "2. Used the automated phone system", "3. Visited a branch location", "4. Called a branch location", "5. Used the bankofamerica.com website", "6. Used the Bank of America mobile app", "7. Contacted Bank of America through Social Media (i.e. Twitter, Facebook, etc.)", "8. Sent an email to Bank of America", "9. Contacted Bank of America via Chat", "10. Some other action"],
          placeholder: "Please select one...",
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "question5",
          type: "select",
          label: "Did the information provided resolve the reason for your chat?",
          options: ["Yes", "No"],
          placeholder: "Please select one...",
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "question6",
          type: "select",
          dynamic: {
            check: "question5",
            logic: "equals",
            value: "No"
          },
          label: "Which one of the following best categorizes the nature of your chat?",
          options: ["1. General account inquiry or request", "2. Make a change to account or service", "3. Obtain product information", "4. Resolve a problem or correct an error with an account or service"],
          placeholder: "Please select one...",
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "question7",
          type: "select",
          label: "Had Chat not been available today, would you have:",
          options: ["1. Called Bank of America to speak to a representative", "2. Used the automated phone system", "3. Visited a branch or bank location", "4. Called a branch or bank location", "5. Searched the bankofamerica.com website", "6. Searched the web (outside of the bankofamerica.com website)", "7. Sent an email to Bank of America", "8. Some other action"],
          placeholder: "Please select one...",
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "question8",
          type: "textarea",
          label: "We are always looking for opportunities to improve this service. Please provide us with your feedback."
        }],
        heading: "Thank you for chatting. Please provide us with your feedback so we may serve you better.",
        next: "submit"
      },
      surveyAlerts: [{
        name: "Consumer Sales",
        conditions: {
          and: ["question1 contains any 1, 2, 3, 4, 5", "agent-attribute.AgentLocation equals Concord"]
        },
        emailSpecName: "ConsumerSales",
        emailSubject: "Consumer Sales Chat Survey Alert",
        emailTemplate: "template::3286"
      }],
      template: "template::2387",
      transitions: {
        submit: {
          target: "node::2224"
        }
      }
    }
  };
});
define("Automatons/nodes/2224", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2224,
    type: "nodes",
    attributes: {
      name: "Consumer-OAS Post Chat Thank you",
      type: "thankyou",
      isOutcomeNode: 1,
      template: "template::2388"
    }
  };
});
define("Automatons/nodes/2225", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2225,
    type: "nodes",
    attributes: {
      name: "Preferred-Service Post Chat Survey",
      type: "survey",
      formify: {
        caret: true,
        fields: [{
          id: "question1",
          type: "select",
          label: "Please think about your entire chat experience today. How would you rate your overall experience?",
          options: ["10 - Extremely Satisfied", "9", "8", "7", "6", "5", "4", "3", "2", "1 - Extremely Dissatisfied"],
          placeholder: "Please select one...",
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "question2",
          type: "select",
          label: "Think about the last person who handled your chat, how would you rate your satisfaction with the representative on overall quality of service?",
          options: ["10 - Extremely Satisfied", "9", "8", "7", "6", "5", "4", "3", "2", "1 - Extremely Dissatisfied"],
          placeholder: "Please select one...",
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "question3",
          type: "select",
          label: "Think about the last person who handled your chat, how would you rate your satisfaction with the representative on demonstrating a willingness to resolve your question or concern?",
          options: ["10 - Extremely Satisfied", "9", "8", "7", "6", "5", "4", "3", "2", "1 - Extremely Dissatisfied"],
          placeholder: "Please select one...",
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "question4",
          type: "select",
          label: "How much do you agree with the following statement? I feel confident the last chat representative handled my request correctly.",
          options: ["10 - Extremely Confident", "9", "8", "7", "6", "5 - Neutral", "4", "3", "2", "1 - Not At All Confident"],
          placeholder: "Please select one...",
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "question5",
          type: "select",
          label: "Is this the first time you contacted Bank of America about this same exact question or issue?",
          options: ["Yes", "No"],
          placeholder: "Please select one...",
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "question6",
          type: "select",
          dynamic: {
            check: "question5",
            logic: "equals",
            value: "No"
          },
          label: "Which of the following was the first action you took regarding this question or issue?",
          options: ["1. Called Bank of America to speak to a representative", "2. Used the automated phone system", "3. Visited a branch location", "4. Called a branch location", "5. Used the bankofamerica.com website", "6. Used the Bank of America mobile app", "7. Contacted Bank of America through Social Media (i.e. Twitter, Facebook, etc.)", "8. Sent an email to Bank of America", "9. Contacted Bank of America via Chat", "10. Some other action"],
          placeholder: "Please select one...",
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "question7",
          type: "select",
          label: "Did the information provided resolve the reason for your chat?",
          options: ["Yes", "No"],
          placeholder: "Please select one...",
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "question8",
          type: "select",
          label: "Had Chat not been available today, would you have:",
          options: ["1. Called Bank of America to speak to a representative", "2. Used the automated phone system", "3. Visited a branch or bank location", "4. Called a branch or bank location", "5. Searched the bankofamerica.com website", "6. Searched the web (outside of the bankofamerica.com website)", "7. Sent an email to Bank of America", "8. Some other action"],
          placeholder: "Please select one...",
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "question9",
          type: "textarea",
          label: "We are always looking for opportunities to improve this service. Please provide us with your feedback."
        }],
        heading: "Thank you for chatting. Please provide us with your feedback so we may serve you better.",
        next: "submit"
      },
      surveyAlerts: [{
        name: "Preferred Service",
        conditions: ["question1 equals 1 - Extremely Dissatisfied"],
        emailSpecName: "PreferredService",
        emailSubject: "Preferred - Survey Response Alert!",
        emailTemplate: "template::2021"
      }],
      template: "template::2440",
      transitions: {
        submit: {
          target: "node::2226"
        }
      }
    }
  };
});
define("Automatons/nodes/2226", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2226,
    type: "nodes",
    attributes: {
      name: "Preferred-Service Post Chat Thank you",
      type: "thankyou",
      isOutcomeNode: 1,
      template: "template::2444"
    }
  };
});
define("Automatons/nodes/2227", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2227,
    type: "nodes",
    attributes: {
      name: "Card-Collections-EN Post Chat Survey",
      type: "survey",
      formify: {
        caret: true,
        fields: [{
          id: "question1",
          type: "select",
          label: "Overall, how satisfied are you with Bank of America, in general?",
          options: ["10 - Extremely Satisfied", "9", "8", "7", "6", "5", "4", "3", "2", "1 - Extremely Dissatisfied"],
          placeholder: "Please select one..."
        }, {
          id: "question2",
          type: "select",
          label: "Based on your most recent experience, how likely are you to continue to do business with Bank of America in the future?",
          options: ["10 - Extremely Likely", "9", "8", "7", "6", "5", "4", "3", "2", "1 - Extremely Unlikely"],
          placeholder: "Please select one..."
        }, {
          id: "question3",
          type: "select",
          label: "Which one of the following best categorizes the nature of your chat?",
          options: ["1. General account inquiry or request", "2. Make a change to account or service", "3. Obtain product information", "4. Resolve a problem or correct an error with an account or service"],
          placeholder: "Please select one..."
        }, {
          id: "question4",
          type: "select",
          label: "Please think about the entire experience of your chat today, from the Bank of America technology used for chatting online, through the completion of your chat. How would you rate your satisfaction with the overall quality of the service you received?",
          options: ["10 - Extremely Satisfied", "9", "8", "7", "6", "5", "4", "3", "2", "1 - Extremely Dissatisfied"],
          placeholder: "Please select one..."
        }, {
          id: "question5",
          type: "select",
          label: "Think about the last person who handled your chat, how would you rate your satisfaction with the representative on overall quality of service?",
          options: ["10 - Extremely Satisfied", "9", "8", "7", "6", "5", "4", "3", "2", "1 - Extremely Dissatisfied"],
          placeholder: "Please select one..."
        }, {
          id: "question6",
          type: "select",
          label: "Think about the last person who handled your chat, how would you rate your satisfaction with the representative treating you professionally?",
          options: ["10 - Extremely Satisfied", "9", "8", "7", "6", "5", "4", "3", "2", "1 - Extremely Dissatisfied"],
          placeholder: "Please select one..."
        }, {
          id: "question7",
          type: "select",
          label: "How many times have you chatted with Bank of America regarding this same exact question or issue?",
          options: ["1 time", "2 or more times"],
          placeholder: "Please select one..."
        }, {
          id: "question8",
          type: "select",
          label: "Did the information provided resolve the reason for your chat?",
          options: ["Yes", "No"],
          placeholder: "Please select one..."
        }, {
          id: "question9",
          type: "select",
          label: "How satisfied are you that an appropriate solution was provided for your situation?",
          options: ["10 - Extremely Satisfied", "9", "8", "7", "6", "5", "4", "3", "2", "1 - Extremely Dissatisfied"],
          placeholder: "Please select one..."
        }, {
          id: "question10",
          type: "select",
          label: "Had Chat not been available today, would you have:",
          options: ["1. Contacted us via a customer service telephone number", "2. Sent us an email for support", "3. Visited one of our banking centers", "4. Tried to resolve the issue on your own"],
          placeholder: "Please select one..."
        }, {
          id: "question11",
          type: "textarea",
          label: "We are always looking for opportunities to improve this service. Please provide us with your feedback."
        }],
        heading: "Thank you for chatting. Please provide us with your feedback so we may serve you better.",
        next: "submit"
      },
      surveyAlerts: [{
        name: "Collections English",
        conditions: {
          or: ["question4 equals 1 - Extremely Dissatisfied", {
            and: ["question4 equals 1 - Extremely Dissatisfied", "question11 is not blank"]
          }]
        },
        emailSpecName: "CollectionsEnglish",
        emailSubject: "Collections English - Survey Response Alert!",
        emailTemplate: "template::2022"
      }],
      template: "template::2394",
      transitions: {
        submit: {
          target: "node::2228"
        }
      }
    }
  };
});
define("Automatons/nodes/2228", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2228,
    type: "nodes",
    attributes: {
      name: "Card-Collections-EN Post Chat Thank you",
      type: "thankyou",
      isOutcomeNode: 1,
      template: "template::2378"
    }
  };
});
define("Automatons/nodes/2229", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2229,
    type: "nodes",
    attributes: {
      name: "Card-Collections-SP Post Chat Survey",
      type: "survey",
      formify: {
        caret: true,
        fields: [{
          id: "question1",
          type: "select",
          label: "En general, ¿cuál es su grado de satisfacción con Bank of America?",
          options: ["10 - Completamente satisfechoa", "9", "8", "7", "6", "5", "4", "3", "2", "1 - Terriblemente insatisfechoa"],
          placeholder: "Por favor escoja uno"
        }, {
          id: "question2",
          type: "select",
          label: "Según su experiencia más reciente, ¿cuál es la probabilidad de que usted continúe realizando negocios con Bank of America en el futuro?",
          options: ["10 - Muy probable", "9", "8", "7", "6", "5", "4", "3", "2", "1 - Muy improbable"],
          placeholder: "Por favor escoja uno"
        }, {
          id: "question3",
          type: "select",
          label: "¿Cuál de los siguientes enunciados refleja mejor la índole de su chat?",
          options: ["1. Consulta o solicitud general sobre cuenta", "2. Realizar un cambio a una cuenta o servicio", "3. Obtener información sobre productos", "4. Resolver un problema o corregir un error"],
          placeholder: "Por favor escoja uno"
        }, {
          id: "question4",
          type: "select",
          label: "Por favor, piense en la experiencia de su chat de hoy en forma total, desde la tecnología de Bank of America utilizada para el chat en línea, hasta la finalización de su chat. ¿Cómo calificaría su satisfacción con la calidad servicio que recibió en su totalidad?",
          options: ["10 - Completamente satisfechoa", "9", "8", "7", "6", "5", "4", "3", "2", "1 - Terriblemente insatisfechoa"],
          placeholder: "Por favor escoja uno"
        }, {
          id: "question5",
          type: "select",
          label: "Pensando en la última persona que manejó en su charla, ¿cómo calificaría su satisfacción con el la representante en cuanto a la calidad del servicio en general?",
          options: ["10 - Completamente satisfechoa", "9", "8", "7", "6", "5", "4", "3", "2", "1 - Terriblemente insatisfechoa"],
          placeholder: "Por favor escoja uno"
        }, {
          id: "question6",
          type: "select",
          label: "Pensando en la última persona que manejó en su charla, ¿cómo calificaría su satisfacción con el la representante en cuanto al trato profesional que le brindó?",
          options: ["10 - Completamente satisfechoa", "9", "8", "7", "6", "5", "4", "3", "2", "1 - Terriblemente insatisfechoa"],
          placeholder: "Por favor escoja uno"
        }, {
          id: "question7",
          type: "select",
          label: "¿Cuántas veces ha conversado con Bank of America exactamente sobre la misma pregunta o el mismo problema?",
          options: ["1. Vez", "2. ó más veces"],
          placeholder: "Por favor escoja uno"
        }, {
          id: "question8",
          type: "select",
          label: "¿La información proporcionada resolvió el motivo de su chat?",
          options: ["Sí", "No"],
          placeholder: "Por favor escoja uno"
        }, {
          id: "question9",
          type: "select",
          label: "¿Cuál es su grado de satisfacción por haber recibido una solución apropiada para su situación?",
          options: ["10 - Completamente satisfechoa", "9", "8", "7", "6", "5", "4", "3", "2", "1 - Terriblemente insatisfechoa"],
          placeholder: "Por favor escoja uno"
        }, {
          id: "question10",
          type: "select",
          label: "Si el servicio de chat no hubiera estado disponible hoy, habría:",
          options: ["1. Contactado al banco mediante el telefono de servicio al cliente", "2. Enviado un correo electrónico al banco para obtener ayuda", "3. Visitado una de nuestras sucursales", "4. Tratado de resolver el problema por su cuenta"],
          placeholder: "Por favor escoja uno"
        }, {
          id: "question11",
          type: "textarea",
          label: "Constantemente buscamos oportunidades para mejorar este servicio. por favor, proporcione sus comentarios."
        }],
        heading: "Gracias por utilizar nuestro servicio de Chat.",
        next: "submit",
        requiredHeading: "Obligatorio *.",
        submit: "Enviar"
      },
      surveyAlerts: [{
        name: "Collections Spanish",
        conditions: {
          or: ["question4 equals 1 - Terriblemente insatisfechoa", {
            and: ["question4 equals 1 - Terriblemente insatisfechoa", "question11 is not blank"]
          }]
        },
        emailSpecName: "CollectionsSpanish",
        emailSubject: "Collections Spanish - Survey Response Alert!",
        emailTemplate: "template::2023"
      }],
      template: "template::2377",
      transitions: {
        submit: {
          target: "node::2230"
        }
      }
    }
  };
});
define("Automatons/nodes/2230", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2230,
    type: "nodes",
    attributes: {
      name: "Card-Collections-SP Post Chat Thank you",
      type: "thankyou",
      isOutcomeNode: 1,
      template: "template::2384"
    }
  };
});
define("Automatons/nodes/2231", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2231,
    type: "nodes",
    attributes: {
      name: "WMCS_Service Post Chat Survey - Initial",
      type: "survey",
      formify: {
        caret: true,
        fields: [{
          id: "question1",
          type: "select",
          label: "Please think about your entire chat experience today. How would you rate your overall experience?",
          options: ["10 - Extremely Satisfied", "9", "8", "7", "6", "5", "4", "3", "2", "1 - Extremely Dissatisfied"],
          placeholder: "Please select one...",
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "question2",
          type: "select",
          label: "Think about the last person who handled your chat, how would you rate your satisfaction with the representative on overall quality of service?",
          options: ["10 - Extremely Satisfied", "9", "8", "7", "6", "5", "4", "3", "2", "1 - Extremely Dissatisfied"],
          placeholder: "Please select one...",
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "question3",
          type: "select",
          label: "Is this the first time you contacted Bank of America about this same exact question or issue?",
          options: ["Yes", "No"],
          placeholder: "Please select one...",
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "question4",
          type: "select",
          dynamic: {
            check: "question3",
            logic: "equals",
            value: "No"
          },
          label: "Which of the following was the first action you took regarding this question or issue?",
          options: ["1. Called Bank of America to speak to a representative", "2. Used the automated phone system", "3. Visited a branch location", "4. Called a branch location", "5. Used the bankofamerica.com website", "6. Used the Bank of America mobile app", "7. Contacted Bank of America through Social Media (i.e. Twitter, Facebook, etc.)", "8. Sent an email to Bank of America", "9. Contacted Bank of America via Chat", "10. Some other action"],
          placeholder: "Please select one...",
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "question5",
          type: "select",
          label: "Did the information provided resolve the reason for your chat?",
          options: ["Yes", "No"],
          placeholder: "Please select one...",
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "question6",
          type: "select",
          label: "Had Chat not been available today, would you have:",
          options: ["1. Called Bank of America to speak to a representative", "2. Used the automated phone system", "3. Visited a branch or bank location", "4. Called a branch or bank location", "5. Searched the bankofamerica.com website", "6. Searched the web (outside of the bankofamerica.com website)", "7. Sent an email to Bank of America", "8. Some other action"],
          placeholder: "Please select one...",
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "question7",
          type: "textarea",
          label: "We are always looking for opportunities to improve this service. Please provide us with your feedback."
        }],
        heading: "Thank you for chatting. Please provide us with your feedback so we may serve you better.",
        next: "submit"
      },
      surveyAlerts: [{
        name: "WMCS Service",
        conditions: {
          or: ["question2 contains any 1 - Extremely Dissatisfied, 2", "question5 equals No"]
        },
        emailSpecName: "WMCS-Service",
        emailSubject: "Chat - Survey Response Alert!",
        emailTemplate: "template::2024"
      }],
      template: "template::2500",
      transitions: {
        submit: {
          target: "node::2233"
        }
      }
    }
  };
});
define("Automatons/nodes/2232", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2232,
    type: "nodes",
    attributes: {
      name: "WMCS_Service Post Chat Survey Initial",
      type: "survey",
      formify: {
        caret: true,
        fields: [{
          id: "question1",
          type: "select",
          label: "Please think about your entire chat experience today. How would you rate your overall experience?",
          options: ["10 - Extremely Satisfied", "9", "8", "7", "6", "5", "4", "3", "2", "1 - Extremely Dissatisfied"],
          placeholder: "Please select one...",
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "question2",
          type: "select",
          label: "Think about the last person who handled your chat, how would you rate your satisfaction with the representative on overall quality of service?",
          options: ["10 - Extremely Satisfied", "9", "8", "7", "6", "5", "4", "3", "2", "1 - Extremely Dissatisfied"],
          placeholder: "Please select one...",
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "question3",
          type: "select",
          label: "Is this the first time you contacted Bank of America about this same exact question or issue?",
          options: ["Yes", "No"],
          placeholder: "Please select one...",
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "question4",
          type: "select",
          label: "Did the information provided resolve the reason for your chat?",
          options: ["Yes", "No"],
          placeholder: "Please select one...",
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "question5",
          type: "select",
          label: "Had Chat not been available today, would you have:",
          options: ["1. Called Bank of America to speak to a representative", "2. Used the automated phone system", "3. Visited a branch or bank location", "4. Called a branch or bank location", "5. Searched the bankofamerica.com website", "6. Searched the web (outside of the bankofamerica.com website)", "7. Sent an email to Bank of America", "8. Some other action"],
          placeholder: "Please select one...",
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "question6",
          type: "textarea",
          label: "We are always looking for opportunities to improve this service. Please provide us with your feedback."
        }],
        heading: "Thank you for chatting. Please provide us with your feedback so we may serve you better.",
        next: "submit"
      },
      surveyAlerts: [{
        name: "Benefits Online",
        conditions: {
          or: ["question2 contains any 10 - Extremely Satisfied, 9", "question5 equals No"]
        },
        emailSpecName: "",
        emailSubject: "Chat - Survey Response Alert!",
        emailTemplate: "template::2013"
      }],
      template: "template::2501",
      transitions: {
        submit: {
          target: "node::2212"
        }
      }
    }
  };
});
define("Automatons/nodes/2233", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2233,
    type: "nodes",
    attributes: {
      name: "WMCS_Service Post Chat Thank you",
      type: "thankyou",
      isOutcomeNode: 1,
      template: "template::2502"
    }
  };
});
define("Automatons/nodes/2234", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2234,
    type: "nodes",
    attributes: {
      name: "Consumer-Service Post Chat Survey - Initial",
      type: "survey",
      formify: {
        caret: true,
        fields: [{
          id: "question1",
          type: "select",
          label: "Please think about your entire chat experience today. How would you rate your overall experience?",
          options: ["10 - Extremely Satisfied", "9", "8", "7", "6", "5", "4", "3", "2", "1 - Extremely Dissatisfied"],
          placeholder: "Please select one...",
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "question2",
          type: "select",
          label: "Think about the last person who handled your chat, how would you rate your satisfaction with the representative on overall quality of service?",
          options: ["10 - Extremely Satisfied", "9", "8", "7", "6", "5", "4", "3", "2", "1 - Extremely Dissatisfied"],
          placeholder: "Please select one...",
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "question3",
          type: "select",
          label: "Is this the first time you contacted Bank of America about this same exact question or issue?",
          options: ["Yes", "No"],
          placeholder: "Please select one...",
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "question4",
          type: "select",
          dynamic: {
            check: "question3",
            logic: "equals",
            value: "No"
          },
          label: "Which of the following was the first action you took regarding this question or issue?",
          options: ["1. Called Bank of America to speak to a representative", "2. Used the automated phone system", "3. Visited a branch location", "4. Called a branch location", "5. Used the bankofamerica.com website", "6. Used the Bank of America mobile app", "7. Contacted Bank of America through Social Media (i.e. Twitter, Facebook, etc.)", "8. Sent an email to Bank of America", "9. Contacted Bank of America via Chat", "10. Some other action"],
          placeholder: "Please select one...",
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "question5",
          type: "select",
          label: "Did the information provided resolve the reason for your chat?",
          options: ["Yes", "No"],
          placeholder: "Please select one...",
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "question6",
          type: "select",
          label: "Had Chat not been available today, would you have:",
          options: ["1. Called Bank of America to speak to a representative", "2. Used the automated phone system", "3. Visited a branch or bank location", "4. Called a branch or bank location", "5. Searched the bankofamerica.com website", "6. Searched the web (outside of the bankofamerica.com website)", "7. Sent an email to Bank of America", "8. Some other action"],
          placeholder: "Please select one...",
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "question7",
          type: "textarea",
          label: "We are always looking for opportunities to improve this service. Please provide us with your feedback."
        }],
        heading: "Thank you for chatting. Please provide us with your feedback so we may serve you better.",
        next: "submit"
      },
      surveyAlerts: [{
        name: "Consumer Service",
        conditions: ["question1 equals 1 - Extremely Dissatisfied"],
        emailSpecName: "Consumer-Service",
        emailSubject: "Consumer Service - Survey Response Alert!",
        emailTemplate: "template::2025"
      }],
      template: "template::2389",
      transitions: {
        submit: {
          target: "node::2235"
        }
      }
    }
  };
});
define("Automatons/nodes/2235", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2235,
    type: "nodes",
    attributes: {
      name: "Consumer-Service Post Chat Thank you",
      type: "thankyou",
      isOutcomeNode: 1,
      template: "template::2381"
    }
  };
});
define("Automatons/nodes/2236", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2236,
    type: "nodes",
    attributes: {
      name: "UK-Card-MBNA Post Chat Survey - Initial",
      type: "survey",
      formify: {
        fields: [{
          fields: [{
            id: "question1",
            type: "select",
            label: "Based on your experience today, on a scale of 0-10 (where 0 is extremely unlikely and 10 is extremely likely) how likely are you to recommend us to a friend, relative or colleague?",
            options: ["10 - Extremely Likely", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0 - Extremely Unlikely"],
            placeholder: "Please select one...",
            required: true,
            requiredError: "Please answer the following question:"
          }, {
            id: "question1a",
            type: "textarea",
            dynamic: {
              check: "question1",
              logic: "any",
              value: "6;5;4;3;2;1;0 - Extremely Unlikely"
            },
            label: "We are sorry to hear that you would not recommend the service you received today, we'd like to know more about the reason for your scores please can you provide back any comments to help us improve our service.",
            required: true,
            requiredError: "Please answer the following question:"
          }],
          group: ""
        }, {
          id: "question2",
          type: "select",
          label: "On a scale of 1-10 (10 being extremely satisfied) how satisfied were you with the overall service you received?",
          options: ["10 - Extremely Satisfied", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0 - Extremely Dissatisfied"],
          placeholder: "Please select one...",
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "question3",
          type: "select",
          label: "If you hadn't been able to chat to one of our credit card experts would you have called into our call centre?",
          options: ["Yes", "No"],
          placeholder: "Please select one...",
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "question4",
          type: "textarea",
          label: "Thank you, your feedback is important to us and we review each customer comment to help us to deliver improvements to our service. Please feel free to leave any additional comments about your experience today."
        }],
        heading: "Thank you for chatting. Please provide us with your feedback so we may serve you better.",
        next: "submit"
      },
      surveyAlerts: [{
        name: "UK Card MBNA Alert",
        conditions: {
          or: ["question1 equals 0 - Extremely Unlikely", "question1 equals 1", "question1 equals 2", "question1 equals 3", "question1 equals 4", "question1 equals 5", "question1 equals 6"]
        },
        emailSpecName: "UK-Card-MBNA-Alert",
        emailSubject: "Customer Exit Survey Notification - MBNA",
        emailTemplate: "template::2026"
      }],
      template: "template::2498",
      transitions: {
        submit: {
          target: "node::2237"
        }
      }
    }
  };
});
define("Automatons/nodes/2237", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2237,
    type: "nodes",
    attributes: {
      name: "UK-Card-MBNA Post Chat Thank you",
      type: "survey",
      isOutcomeNode: 1,
      template: "template::2497"
    }
  };
});
define("Automatons/nodes/2238", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2238,
    type: "nodes",
    attributes: {
      name: "UK-Card-VAA Post Chat Survey - Initial",
      type: "survey",
      formify: {
        fields: [{
          fields: [{
            id: "question1",
            type: "select",
            label: "Based on your experience today, on a scale of 0-10 (where 0 is extremely unlikely and 10 is extremely likely) how likely are you to recommend us to a friend, relative or colleague?",
            options: ["10 - Extremely Likely", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0 - Extremely Unlikely"],
            placeholder: "Please select one...",
            required: true,
            requiredError: "Please answer the following question:"
          }, {
            id: "question1a",
            type: "textarea",
            dynamic: {
              check: "question1",
              logic: "any",
              value: "6;5;4;3;2;1;0 - Extremely Unlikely"
            },
            label: "We are sorry to hear that you would not recommend the service you received today, we'd like to know more about the reason for your scores please can you provide back any comments to help us improve our service.",
            required: true,
            requiredError: "Please answer the following question:"
          }],
          group: ""
        }, {
          id: "question2",
          type: "select",
          label: "On a scale of 1-10 (10 being extremely satisfied) how satisfied were you with the overall service you received?",
          options: ["10 - Extremely Satisfied", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0 - Extremely Dissatisfied"],
          placeholder: "Please select one...",
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "question3",
          type: "select",
          label: "If you hadn't been able to chat to one of our credit card experts would you have called into our call centre?",
          options: ["Yes", "No"],
          placeholder: "Please select one...",
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "question4",
          type: "textarea",
          label: "Thank you, your feedback is important to us and we review each customer comment to help us to deliver improvements to our service. Please feel free to leave any additional comments about your experience today."
        }],
        heading: "Thank you for chatting. Please provide us with your feedback so we may serve you better.",
        next: "submit"
      },
      surveyAlerts: [{
        name: "UK Card VAA Alert",
        conditions: {
          or: ["question1 equals 0 - Extremely Unlikely", "question1 equals 1", "question1 equals 2", "question1 equals 3", "question1 equals 4", "question1 equals 5", "question1 equals 6"]
        },
        emailSpecName: "UK-Card-VAA-Alert",
        emailSubject: "Customer Exit Survey Notification - VAA",
        emailTemplate: "template::2027"
      }],
      template: "template::2499",
      transitions: {
        submit: {
          target: "node::2239"
        }
      }
    }
  };
});
define("Automatons/nodes/2239", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2239,
    type: "nodes",
    attributes: {
      name: "UK-Card-VAA Post Chat Thank you",
      type: "thankyou",
      isOutcomeNode: 1,
      template: "template::2503"
    }
  };
});
define("Automatons/nodes/2240", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2240,
    type: "nodes",
    attributes: {
      name: "HRSC-Internal Post Chat Survey - Initial",
      type: "survey",
      formify: {
        caret: true,
        fields: [{
          id: "question1",
          type: "select",
          label: "Overall, how satisfied are you with your recent contact with the HR Service Centre?",
          options: ["Very satisfied", "Somewhat satisfied", "Neither satisfied nor dissatisfied", "Somewhat dissatisfied", "Very dissatisfied"],
          placeholder: "Please select one...",
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "question2",
          type: "select",
          label: "How satisfied were you with the service you received from the representative?",
          options: ["Very satisfied", "Somewhat satisfied", "Neither satisfied nor dissatisfied", "Somewhat dissatisfied", "Very dissatisfied"],
          placeholder: "Please select one...",
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "question3",
          type: "select",
          label: "How satisfied were you with the representative's level of knowledge regarding your query/or issue?",
          options: ["Very satisfied", "Somewhat satisfied", "Neither satisfied nor dissatisfied", "Somewhat dissatisfied", "Very dissatisfied"],
          placeholder: "Please select one...",
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "question4",
          type: "select",
          label: "Were you able to accomplish what you wanted to during the chat?",
          options: ["Yes", "No"],
          placeholder: "Please select one...",
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "question5",
          type: "select",
          label: "Would you use the 'Chat Now' channel again?",
          options: ["Yes", "No"],
          placeholder: "Please select one...",
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "question6",
          type: "select",
          label: "During your chat, did you experience any technical difficulties?",
          options: ["Yes", "No"],
          placeholder: "Please select one...",
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "question7",
          type: "textarea",
          label: "Please add any additional remarks to support your answers above."
        }],
        heading: "Thank you for chatting. Please provide us with your feedback so we may serve you better.",
        next: "submit"
      },
      template: "template::2415",
      transitions: {
        submit: {
          target: "node::2241"
        }
      }
    }
  };
});
define("Automatons/nodes/2241", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2241,
    type: "nodes",
    attributes: {
      name: "HRSC-Internal Post Chat Thank you",
      type: "thankyou",
      isOutcomeNode: 1,
      template: "template::2409"
    }
  };
});
define("Automatons/nodes/2242", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2242,
    type: "nodes",
    attributes: {
      name: "Provisioning Post Chat Survey - Initial",
      type: "survey",
      formify: {
        caret: true,
        fields: [{
          id: "question1",
          type: "select",
          label: "Overall, how satisfied are you with the service you received during your chat today?",
          options: ["Very satisfied", "Somewhat satisfied", "Neither satisfied nor dissatisfied", "Somewhat dissatisfied", "Very dissatisfied"],
          placeholder: "Please select one...",
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "question2",
          type: "select",
          label: "Was the request you contacted us about resolved during this chat session?",
          options: ["Yes, the issue was resolved", "No, the issue was not resolved"],
          placeholder: "Please select one...",
          required: true,
          requiredError: "Please answer the following question:"
        }],
        heading: "Thank you for chatting. Please provide us with your feedback so we may serve you better.",
        next: "submit"
      },
      template: "template::2466",
      transitions: {
        submit: {
          target: "node::2243"
        }
      }
    }
  };
});
define("Automatons/nodes/2243", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2243,
    type: "nodes",
    attributes: {
      name: "Provisioning Post Chat Survey Thank you",
      type: "thankyou",
      isOutcomeNode: 1,
      template: "template::2462"
    }
  };
});
define("Automatons/nodes/2244", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2244,
    type: "nodes",
    attributes: {
      name: "Employee-Relations Post Chat Survey - Intial",
      type: "survey",
      formify: {
        caret: true,
        fields: [{
          id: "question1",
          type: "select",
          label: "How satisfied are you with your most recent ACO Chat session overall? (1 = Very Dissatisfied to 5 = Very Satisfied)",
          options: ["5 - Very Satisfied", "4", "3", "2", "1 - Very Dissatisfied"],
          placeholder: "Please select one...",
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          fields: [{
            id: "question2",
            type: "select",
            label: "Was the ACO Chat feature easy to use?",
            options: ["Yes", "No"],
            placeholder: "Please select one...",
            required: true,
            requiredError: "Please answer the following question:"
          }, {
            id: "question2a",
            type: "textarea",
            dynamic: {
              check: "question2",
              logic: "equals",
              value: "No"
            },
            label: "If you didn't find ACO Chat easy to use, why not?",
            required: true,
            requiredError: "Please answer the following question:"
          }],
          group: ""
        }, {
          fields: [{
            id: "question3",
            type: "select",
            label: "Was the ACO Chat Advisor able to answer you question, or direct you to the appropriate resource?",
            options: ["Yes", "No"],
            placeholder: "Please select one...",
            required: true,
            requiredError: "Please answer the following question:"
          }, {
            id: "question3a",
            type: "textarea",
            dynamic: {
              check: "question3",
              logic: "equals",
              value: "No"
            },
            label: "If your ACO Chat Advisor wasn't able to help you, tell us what they could have done to better assist you.",
            required: true,
            requiredError: "Please answer the following question:"
          }],
          group: ""
        }, {
          fields: [{
            id: "question4",
            type: "select",
            label: "Would you use ACO Chat again?",
            options: ["Yes", "No"],
            placeholder: "Please select one...",
            required: true,
            requiredError: "Please answer the following question:"
          }, {
            id: "question4a",
            type: "textarea",
            dynamic: {
              check: "question4",
              logic: "equals",
              value: "No"
            },
            label: "If you wouldn't use ACO Chat again, why not?",
            required: true,
            requiredError: "Please answer the following question:"
          }],
          group: ""
        }, {
          id: "question5",
          type: "select",
          label: "How often do you visit the ACO site (including to use tools, review online resources, schedule consultations, and chat with an advisor) for employee relations concerns?",
          options: ["Daily", "Often (2-3 times per week)", "Occasionally (2-3 times per month)", "Rarely (Less than once per month)"],
          placeholder: "Please select one...",
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "question6",
          type: "select",
          label: "Overall, how satisfied are you with the features and content of ACO, including the tools, online resources, ability to schedule consultations, and chat? (1 = Very Dissatisfied to 5 = Very Satisfied)",
          options: ["5 - Very Satisfied", "4", "3", "2", "1 - Very Dissatisfied"],
          placeholder: "Please select one...",
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "question7",
          type: "textarea",
          label: "We are always looking for opportunities to improve Advice & Counsel Online. Please let us know how we can improve the site or any of our ACO tools and resources."
        }],
        heading: "Thank you for chatting. Please provide us with your feedback so we may serve you better.",
        next: "submit"
      },
      template: "template::2398",
      transitions: {
        submit: {
          target: "node::2245"
        }
      }
    }
  };
});
define("Automatons/nodes/2245", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2245,
    type: "nodes",
    attributes: {
      name: "Employee-Relations Post Chat Thank you",
      type: "thankyou",
      isOutcomeNode: 1,
      template: "template::2400"
    }
  };
});
define("Automatons/nodes/2246", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2246,
    type: "nodes",
    attributes: {
      name: "Workforce-Management Post Chat Survey - Intial",
      type: "survey",
      formify: {
        caret: true,
        fields: [{
          id: "question1",
          type: "select",
          label: "Please rate your satisfaction with the Workforce support you have received.",
          options: ["Extremely Satisfied", "Satisfied", "Dissatisfied", "Very Dissatisfied"],
          placeholder: "Please select one..."
        }, {
          id: "question2",
          type: "textarea",
          label: "Please provide comments for the WF support you have received:"
        }, {
          id: "question3",
          type: "select",
          label: "Please help us better serve you by assisting to identify any area of opportunity:",
          options: ["No opportunities identified", "Speed to answer chat", "Overall chat length", "Accuracy of completed chat", "Other"],
          placeholder: "Please select one..."
        }, {
          id: "question4",
          type: "textarea",
          label: "Comments:"
        }],
        heading: "Thank you for chatting. Please provide us with your feedback so we may serve you better.",
        next: "submit"
      },
      template: "template::2504",
      transitions: {
        submit: {
          target: "node::2247"
        }
      }
    }
  };
});
define("Automatons/nodes/2247", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2247,
    type: "nodes",
    attributes: {
      name: "Workforce-Management Post Chat Thank you",
      type: "thankyou",
      isOutcomeNode: 1,
      template: "template::2505"
    }
  };
});
define("Automatons/nodes/2248", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2248,
    type: "nodes",
    attributes: {
      name: "Purchasing-Expenses Post Chat Survey - Initial",
      type: "survey",
      formify: {
        caret: true,
        fields: [{
          id: "question1",
          type: "select",
          label: "Was the Live Chat service easy to find and use?",
          options: ["Strongly Agree", "Somewhat Agree", "Somewhat Disagree", "Strongly Disagree"],
          placeholder: "Please select one...",
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "question2",
          type: "select",
          label: "Was the Live Chat agent knowledgeable and professional during the chat session?",
          options: ["Strongly Agree", "Somewhat Agree", "Somewhat Disagree", "Strongly Disagree"],
          placeholder: "Please select one...",
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "question3",
          type: "select",
          label: "Was the Live Chat response received in a timely manner?",
          options: ["Strongly Agree", "Somewhat Agree", "Somewhat Disagree", "Strongly Disagree"],
          placeholder: "Please select one...",
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "question4",
          type: "select",
          label: "Did the Live Chat provide the required information and/or help?",
          options: ["Strongly Agree", "Somewhat Agree", "Somewhat Disagree", "Strongly Disagree"],
          placeholder: "Please select one...",
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "question5",
          type: "select",
          label: "Did the overall Live Chat experience meet and/or exceed expectations?",
          options: ["Strongly Agree", "Somewhat Agree", "Somewhat Disagree", "Strongly Disagree"],
          placeholder: "Please select one...",
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "question6",
          type: "select",
          label: "Will you use Live Chat services again?",
          options: ["Strongly Agree", "Somewhat Agree", "Somewhat Disagree", "Strongly Disagree"],
          placeholder: "Please select one...",
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "question7",
          type: "textarea",
          label: "Please add any additional comments. Thank you"
        }],
        heading: "Thank you for chatting. Please provide us with your feedback so we may serve you better.",
        next: "submit"
      },
      template: "template::2467",
      transitions: {
        submit: {
          target: "node::2249"
        }
      }
    }
  };
});
define("Automatons/nodes/2249", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2249,
    type: "nodes",
    attributes: {
      name: "Purchasing-Expenses Post Chat Thank you",
      type: "thankyou",
      isOutcomeNode: 1,
      template: "template::2461"
    }
  };
});
define("Automatons/nodes/2250", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2250,
    type: "nodes",
    attributes: {
      name: "Purchasing-Expenses-ThirdPartySupport Post Chat Survey - Initial",
      type: "survey",
      formify: {
        caret: true,
        fields: [{
          id: "question1",
          type: "select",
          label: "Was the mySource LiveChat link easy to find?",
          options: ["Strongly Agree", "Somewhat Agree", "No Opinion", "Somewhat Disagree", "Strongly Disagree"],
          placeholder: "Please select one...",
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "question2",
          type: "select",
          label: "Was the LiveChat agent knowledgeable?",
          options: ["Strongly Agree", "Somewhat Agree", "No Opinion", "Somewhat Disagree", "Strongly Disagree"],
          placeholder: "Please select one...",
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "question3",
          type: "select",
          label: "Was your question answered to your satisfaction?",
          options: ["Strongly Agree", "Somewhat Agree", "No Opinion", "Somewhat Disagree", "Strongly Disagree"],
          placeholder: "Please select one...",
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "question4",
          type: "select",
          label: "How would you rate the overall mySource Live Chat experience?",
          options: ["Excellent", "Very Good", "Good", "Fair", "Poor"],
          placeholder: "Please select one...",
          required: true,
          requiredError: "Please answer the following question:"
        }, {
          id: "question5",
          type: "textarea",
          label: "Please add any additional comments. Thank you"
        }],
        heading: "Thank you for chatting. Please provide us with your feedback so we may serve you better.",
        next: "submit"
      },
      template: "template::2463",
      transitions: {
        submit: {
          target: "node::2251"
        }
      }
    }
  };
});
define("Automatons/nodes/2251", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2251,
    type: "nodes",
    attributes: {
      name: "Purchasing-Expenses-ThirdPartySupport Post Chat Thank you",
      type: "thankyou",
      isOutcomeNode: 1,
      template: "template::2458"
    }
  };
});
define("Automatons/nodes/2252", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2252,
    type: "nodes",
    attributes: {
      name: "ECS-Escalation-Gate-Back-Office Post Chat Survey - Initial",
      type: "survey",
      formify: {
        caret: true,
        fields: [{
          fields: [{
            id: "question1",
            type: "select",
            label: "Was your issue resolved?",
            options: ["Yes", "No"],
            placeholder: "Please select one...",
            required: true,
            requiredError: "Please answer the following question:"
          }, {
            id: "question2",
            type: "textarea",
            dynamic: {
              check: "question1",
              logic: "equals",
              value: "No"
            },
            label: "Please help us understand what was not resolved with your issue:",
            required: true,
            requiredError: "Please answer the following question:"
          }],
          group: ""
        }],
        heading: "Thank you for chatting. Please provide us with your feedback so we may serve you better.",
        next: "submit"
      },
      template: "template::2397",
      transitions: {
        submit: {
          target: "node::2253"
        }
      }
    }
  };
});
define("Automatons/nodes/2253", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2253,
    type: "nodes",
    attributes: {
      name: "ECS-Escalation-Gate-Back-Office Post Chat Thank you",
      type: "thankyou",
      isOutcomeNode: 1,
      template: "template::2396"
    }
  };
});
define("Automatons/nodes/2254", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2254,
    type: "nodes",
    attributes: {
      name: "Agent Group - WFM-CFM_FRAUD - Chat",
      type: "Chat",
      chatRouter: {
        agentGroup: 10004972,
        businessUnit: 19000936,
        checkAgentAvailability: true,
        clientOutcome: "Thank You for contacting Workforce Management, how may I assist you today?",
        outsideHopNode: "node::2034",
        qThreshold: 999,
        scriptTree: 12200829
      },
      isOutcomeNode: 1,
      onEntryTransition: "checkAA",
      transitions: {
        checkAA: [{
          chatSlots: false,
          condition: "api.getPreviousNode().id !== 2033",
          queueSlots: true,
          target: "node::2033",
          targetChatNode: "node::2254"
        }, {
          chatSlots: false,
          condition: "api.getPreviousNode().id !== 2033",
          queueSlots: false,
          target: "node::2163",
          targetChatNode: "node::2254"
        }]
      }
    }
  };
});
define("Automatons/nodes/2256", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2256,
    type: "nodes",
    attributes: {
      name: "HRSC Pre-chat Survey",
      type: "Survey",
      form: {
        fieldsets: [{
          name: "Standard ID",
          label: "Please provide your Standard ID (NBKXXXX)",
          required_error: "Your Standard ID (NBKXXXX) is a required field."
        }, {
          name: "Reason for Inquiry",
          type: "select",
          label: "Which of the following applies to your inquiry?",
          options: [{
            name: "I am submitting an enquiry for myself",
            value: "For Myself"
          }, {
            name: "I am a manager/proxy submitting an enquiry for another employee(s)",
            value: "For Another"
          }],
          required_error: "This is a required field."
        }, {
          name: "Employee(s) Name or ID",
          dynamic: {
            check: "Reason for Inquiry",
            value: "For Another"
          },
          label: "Please provide us with their name or ID",
          required_error: "Employee(s) name or ID is a required field."
        }, {
          name: "Category",
          type: "select",
          label: "Choose a Category that best describes your query:",
          options: ["HR Applications", "HR Policies and Procedures", "Payroll", "References and Letters", "Ticket Status"]
        }, {
          name: "Ticket Number",
          dynamic: {
            check: "Category",
            value: "Ticket Status"
          },
          label: "Please provide your ticket number:",
          required: false
        }],
        footing: "Webchat conversations are recorded and are subject to the applicable privacy laws. Bank of America Merrill Lynch provides every employee and contractor with a Data Protection Notice outlining our practices regarding collection, use and sharing of your personal information. <br>If you require further detail, please read through the <a href=\"http://discovery.bankofamerica.com/discovery/livelink/fetch/2001/3082/75107467/81521585/90051880/Info_Protection_DPN_Launch_Page.docx.pdf?nodeid=90139186&vernum=-2\">Data Protection</a> Notice for the jurisdiction and / or entity where you are employed.",
        heading: "As part of ongoing efforts to improve service quality from the HR Service Centre, we would like to ask your assistance in completing the following questions designed to help us triage your query more effectively."
      },
      template: "template::2004",
      transitions: {
        submit: {
          target: "node::2074"
        }
      }
    }
  };
});
define("Automatons/nodes/2257", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2257,
    type: "nodes",
    attributes: {
      name: "Agent Group - PNE-CONCUR - Chat",
      type: "Chat",
      chatRouter: {
        agentGroup: 10005688,
        agentsBusyNode: "node::2258",
        businessUnit: 19000935,
        checkAgentAvailability: true,
        clientOutcome: "Hi, how may I assist you today?",
        outsideHopNode: "node::2259",
        scriptTree: 12201178
      },
      isOutcomeNode: 1
    }
  };
});
define("Automatons/nodes/2258", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2258,
    type: "nodes",
    attributes: {
      name: "PNE-CONCUR Agents Busy Backup Node",
      type: "Backup",
      isOutcomeNode: 1,
      template: "template::2421"
    }
  };
});
define("Automatons/nodes/2259", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2259,
    type: "nodes",
    attributes: {
      name: "PNE-CONCUR Outside HOP Backup Node",
      type: "Outside HOP",
      isOutcomeNode: 1,
      template: "template::2424"
    }
  };
});
define("Automatons/nodes/2260", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2260,
    type: "nodes",
    attributes: {
      name: "SBS-Auth-OfferRule",
      type: "List",
      nodes: [{
        label: "Yes, I'd like to speak to a representative",
        node_id: "node::2261"
      }, {
        label: "No, Thanks",
        node_id: "node::2262"
      }],
      template: "template::2506"
    }
  };
});
define("Automatons/nodes/2261", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2261,
    type: "nodes",
    attributes: {
      name: "SBS-Auth-Yes-SpeakToRepresentative",
      type: "Chat",
      chatRouter: {
        agentGroup: 10004992,
        businessUnit: 19000928,
        clientOutcome: "A Small Business specialist will be with you shortly to review the features and benefits of our Account Management service.",
        scriptTree: 12200802
      },
      isOutcomeNode: 1
    }
  };
});
define("Automatons/nodes/2262", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2262,
    type: "nodes",
    attributes: {
      name: "SBS-Auth-NoThanks",
      type: "thankyou",
      isExitNode: 1,
      isOutcomeNode: 1
    }
  };
});
define("Automatons/nodes/2264", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2264,
    type: "nodes",
    attributes: {
      name: "PNE - Agents Busy - Continue to Target Chat",
      type: "Backup",
      isOutcomeNode: 1,
      template: "template::3288"
    }
  };
});
define("Automatons/nodes/2265", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = {
    id: 2265,
    type: "nodes",
    attributes: {
      name: "PNE - Agents Busy - No Queue Slot Available",
      type: "Backup",
      isOutcomeNode: 1,
      template: "template::3289"
    }
  };
});
define('Automatons/styles/2002', ['exports', 'module'], function (exports, module) {
  'use strict';

  module.exports = '#viewport {  }#viewport body,#viewport div,#viewport dl,#viewport dt,#viewport dd,#viewport ul,#viewport ol,#viewport li,#viewport h1,#viewport h2,#viewport h3,#viewport h4,#viewport h5,#viewport h6,#viewport pre,#viewport code,#viewport form,#viewport fieldset,#viewport legend,#viewport input,#viewport textarea,#viewport p,#viewport blockquote,#viewport th,#viewport td,#viewport button,#viewport a {  margin: 0;  padding: 0;  border: none;}#viewport table {  border-collapse: collapse;  border-spacing: 0;}#viewport fieldset,#viewport img {  border: 0;}#viewport em,#viewport strong,#viewport th {  font-style: normal;  font-weight: normal;}#viewport ol,#viewport ul {  list-style: none;}#viewport th {  text-align: left;}#viewport h1,#viewport h2,#viewport h3,#viewport h4,#viewport h5,#viewport h6 {  font-size: 100%;  font-weight: normal;}#viewport abbr,#viewport acronym {  border: 0;  font-variant: normal;}#viewport sup {  vertical-align: text-top;}#viewport sub {  vertical-align: text-bottom;}#viewport input,#viewport textarea,#viewport select {  font-family: inherit;  font-size: inherit;  font-weight: inherit;}#viewport input,#viewport textarea,#viewport select {  *font-size: 100%;}#viewport .view-container {  -webkit-box-sizing: border-box;  -moz-box-sizing: border-box;  box-sizing: border-box;}#viewport *,#viewport *:before,#viewport *:after {  -webkit-box-sizing: inherit;  -moz-box-sizing: inherit;  box-sizing: inherit;}#viewport .view-container {  font-family: "cnx-medium", arial, sans-serif;  background: #ece6dd;  color: #333;}#viewport p,#viewport button {  font-size: 14px;}#viewport strong,#viewport b {  font-weight: bold;}#viewport h1 {  font-weight: bold;}#viewport h1 small {  margin-top: 15px;  display: block;  font-weight: normal;  font-size: .9em;}#viewport h1,#viewport .node-head {  font-size: 14px;  font-weight: bold;  margin-bottom: 15px;}#viewport h2,#viewport h3,#viewport .node-subhead {  font-size: 14px;  margin: 15px 0px 0px;}#viewport h3 {  font-weight: bold;}#viewport .view-container,#viewport .viewport {  height: 100%;  position: relative;}#viewport [acif-action] button,#viewport [acif-node] button,#viewport [acif-transition] button {  cursor: pointer;  background: transparent;  color: #0052c2;  text-decoration: none;  font-weight: inherit;}#viewport [acif-action] button:hover,#viewport [acif-node] button:hover,#viewport [acif-transition] button:hover,#viewport [acif-action] button:focus,#viewport [acif-node] button:focus,#viewport [acif-transition] button:focus {  text-decoration: underline;  outline: none;  color: #012169;}#viewport hr {  display: block;  height: 1px;  background: #857363;  border: 0px;  margin: 20px 0;}#viewport .has-icon {  line-height: 40px;  padding-left: 60px;  margin-left: 10px;}#viewport .breadcrumbs {  position: relative;  background-color: #D1C9C0;  line-height: 28px;  list-style: none;  padding: 0 10px;  margin: 0;  color: #333;  z-index: 100;}#viewport .breadcrumb,#viewport .breadcrumb button {  display: inline-block;  font-size: 12px;  background: transparent;}#viewport .breadcrumb button {  color: #0052c2;}#viewport .breadcrumb button:hover {  color: #012169;}#viewport .breadcrumb:first-child:after,#viewport .breadcrumb:after {  content: " / ";  margin-left: .35em;  display: inline-block;}#viewport .breadcrumb:last-child:after {  display: none;}#viewport form {  position: absolute;  top: 0;  bottom: 0;  left: 0;  right: 0;}#viewport [acif-template="2001"] + form,#viewport [acif-template="2001"] + .scroll-area,#viewport [acif-template="2001"] + .formify-form_area {  margin-top: 28px;}#viewport .formify-form_area,#viewport .scroll-area {  position: absolute;  top: 0;  bottom: 0;  left: 0;  right: 0;  overflow-y: auto;  overflow-x: hidden;  display: block;  padding: 45px 10px;}#viewport form .scroll-area,#viewport form .formify-form_area {  padding-bottom: 0px;  margin-bottom: 65px;}#viewport .footer {  display: block;  margin: 15px 0;}#viewport .scroll-area + .footer,#viewport .scroll-area + div > .footer,#viewport .formify-form_area + .footer,#viewport .formify-form_area + div > .footer {  position: absolute;  right: 0;  bottom: 0;  left: 0;  margin: 20px 10px 15px;}#viewport fieldset {  display: block;  position: relative;  margin: 15px 0;  -webkit-transition: margin .25s ease;  -moz-transition: margin .25s ease;  -ms-transition: margin .25s ease;  -o-transition: margin .25s ease;  transition: margin .25s ease;}#viewport fieldset.invalid {  margin-bottom: 25px;}#viewport label,#viewport legend {  display: block;  font-size: 13px;  color: #333;  margin: 0 0 5px;}#viewport input,#viewport select,#viewport textarea {  border: 0px;  padding: 8px 10px;  font-size: 14px;  color: #524940;}#viewport input[type="text"],#viewport input[type="email"],#viewport select,#viewport textarea {  width: 100%;}#viewport .field--radio {  vertical-align: middle;}#viewport .field--radio span {  display: inline-block;}#viewport .field--radio input {  display: inline-block;}#viewport textarea {  resize: vertical;}#viewport select {  -webkit-appearance: none;  -moz-appearance: none;  cursor: pointer;  position: relative;  background: white url(https://media-bofa.inq.com/media/sites/10004750/flash/BAC-Common-Assets/images/bac-down-chevron.png) calc(100% - 10px) calc(100% - 50%) no-repeat;  background-size: 14px;  -webkit-border-radius: 0px;  -moz-border-radius: 0px;  border-radius: 0px;}#viewport select::-ms-expand {  display: none;}#viewport .required {  color: #c41230;}#viewport .required label:first-child:after,#viewport .required legend:first-child:after {  content: " *";  color: #c41230;  display: inline;}#viewport .required.msg {  font-size: 11px;}#viewport fieldset .required.msg {  text-align: right;  margin: 0.25em 0 -1.35em;}#viewport .btn {  color: white;  background: #0073CF;  padding: 0px 15px;  display: inline-block;  line-height: 30px;  font-size: 16px;  cursor: pointer;  width: auto;  overflow: visible;}#viewport .btn:hover {  background: #0052c2;}#viewport .btn.back {  color: #0073CF;  background: white;}#viewport .btn.back:hover {  background: white;}#viewport .btn[disabled] {  cursor: default;  background-color: gray;}#viewport .routing-list {  margin: 20px 0;  text-align: left;}#viewport hr + ul,#viewport hr + .routing-list {  margin-top: 5px;}#viewport .routing-list__item {  margin: 8px 0;}#viewport .routing-list__item button {  text-align: left;}#viewport .outcome-wrapper {  padding: 15px 10px;}#viewport .outcome-wrapper p {  margin: 15px 0 10px;}#viewport .bold {  font-weight: bold;}';
});
define('Automatons/styles/2003', ['exports', 'module'], function (exports, module) {
  'use strict';

  module.exports = '#viewport {  }#viewport body,#viewport div,#viewport dl,#viewport dt,#viewport dd,#viewport ul,#viewport ol,#viewport li,#viewport h1,#viewport h2,#viewport h3,#viewport h4,#viewport h5,#viewport h6,#viewport pre,#viewport code,#viewport form,#viewport fieldset,#viewport legend,#viewport input,#viewport textarea,#viewport p,#viewport blockquote,#viewport th,#viewport td,#viewport button,#viewport a {  margin: 0;  padding: 0;  border: none;}#viewport table {  border-collapse: collapse;  border-spacing: 0;}#viewport fieldset,#viewport img {  border: 0;}#viewport em,#viewport strong,#viewport th {  font-style: normal;  font-weight: normal;}#viewport ol,#viewport ul {  list-style: none;}#viewport th {  text-align: left;}#viewport h1,#viewport h2,#viewport h3,#viewport h4,#viewport h5,#viewport h6 {  font-size: 100%;  font-weight: normal;}#viewport abbr,#viewport acronym {  border: 0;  font-variant: normal;}#viewport sup {  vertical-align: text-top;}#viewport sub {  vertical-align: text-bottom;}#viewport input,#viewport textarea,#viewport select {  font-family: inherit;  font-size: inherit;  font-weight: inherit;}#viewport input,#viewport textarea,#viewport select {  *font-size: 100%;}#viewport .view-container {  -webkit-box-sizing: border-box;  -moz-box-sizing: border-box;  box-sizing: border-box;}#viewport *,#viewport *:before,#viewport *:after {  -webkit-box-sizing: inherit;  -moz-box-sizing: inherit;  box-sizing: inherit;}#viewport .view-container {  background: #eee;  overflow-y: auto;  position: absolute;  top: 0;  bottom: 0;  right: 0;  left: 0;  padding: 20px;}#viewport .required {  color: red;}#viewport legend {  float: left;  width: 100%;}#viewport input[type="text"],#viewport input[type="email"],#viewport input[type="tel"],#viewport textarea,#viewport select {  background: white;  border: 0;}#viewport [acif-fieldset-group] {  display: block;  position: static;  border: 1px solid blue;  margin: 10px 0;  padding: 5px;}#viewport fieldset {  padding: 5px;  position: relative;  border: 1px solid green;  margin: 5px;}#viewport [acif-fieldset-group] fieldset {  display: block;  position: static;}#viewport [acif-fieldset-group] label {  display: inline-block;}';
});
define('Automatons/styles/2006', ['exports', 'module'], function (exports, module) {
  'use strict';

  module.exports = '#viewport {    /* Base Formify Styles */}#viewport body,#viewport div,#viewport dl,#viewport dt,#viewport dd,#viewport ul,#viewport ol,#viewport li,#viewport h1,#viewport h2,#viewport h3,#viewport h4,#viewport h5,#viewport h6,#viewport pre,#viewport code,#viewport form,#viewport fieldset,#viewport legend,#viewport input,#viewport textarea,#viewport p,#viewport blockquote,#viewport th,#viewport td,#viewport button,#viewport a {  margin: 0;  padding: 0;  border: none;}#viewport table {  border-collapse: collapse;  border-spacing: 0;}#viewport fieldset,#viewport img {  border: 0;}#viewport em,#viewport strong,#viewport th {  font-style: normal;  font-weight: normal;}#viewport ol,#viewport ul {  list-style: none;}#viewport th {  text-align: left;}#viewport h1,#viewport h2,#viewport h3,#viewport h4,#viewport h5,#viewport h6 {  font-size: 100%;  font-weight: normal;}#viewport abbr,#viewport acronym {  border: 0;  font-variant: normal;}#viewport sup {  vertical-align: text-top;}#viewport sub {  vertical-align: text-bottom;}#viewport input,#viewport textarea,#viewport select {  font-family: inherit;  font-size: inherit;  font-weight: inherit;}#viewport input,#viewport textarea,#viewport select {  *font-size: 100%;}#viewport .view-container {  -webkit-box-sizing: border-box;  -moz-box-sizing: border-box;  box-sizing: border-box;}#viewport *,#viewport *:before,#viewport *:after {  -webkit-box-sizing: inherit;  -moz-box-sizing: inherit;  box-sizing: inherit;}#viewport a,#viewport blockquote,#viewport button,#viewport fieldset,#viewport form,#viewport h1,#viewport h2,#viewport h3,#viewport h4,#viewport h5,#viewport h6,#viewport input,#viewport legend,#viewport li,#viewport ol,#viewport p,#viewport pre,#viewport td,#viewport textarea,#viewport th,#viewport ul {  margin: 0;  padding: 0;  border: none;}#viewport table {  border-collapse: collapse;  border-spacing: 0;}#viewport fieldset,#viewport img {  border: 0;}#viewport em,#viewport strong,#viewport th {  font-style: normal;  font-weight: normal;}#viewport ol,#viewport ul {  list-style: none;}#viewport th {  text-align: left;}#viewport h1,#viewport h2,#viewport h3,#viewport h4,#viewport h5,#viewport h6 {  font-size: 100%;  font-weight: normal;}#viewport abbr,#viewport acronym {  border: 0;  font-variant: normal;}#viewport sup {  vertical-align: text-top;}#viewport sub {  vertical-align: text-bottom;}#viewport input,#viewport select,#viewport textarea {  font-family: inherit;  font-size: inherit;  font-weight: inherit;}#viewport input,#viewport select,#viewport textarea {  *font-size: 100%;}#viewport .view-container {  -webkit-box-sizing: border-box;  -moz-box-sizing: border-box;  box-sizing: border-box;}#viewport *,#viewport *:after,#viewport *:before,#viewport [class*="formify-"] {  -webkit-box-sizing: inherit;  -moz-box-sizing: inherit;  box-sizing: inherit;}#viewport .view-container {  overflow-y: auto;  position: absolute;  top: 0;  bottom: 0;  right: 0;  left: 0;  padding: 20px;}#viewport .formify-form-body {  display: block;  margin-bottom: 1em;}#viewport .formify-heading {  font-weight: bold;  margin-bottom: 1em;  font-size: 1.125em;  line-height: 1.4em;}#viewport .formify-header {  display: block;  height: auto;  margin-bottom: 1em;}#viewport .formify-fieldset-radio .formify-label,#viewport .formify-fieldset-checkbox .formify-label {  display: block;  float: left;  clear: left;  margin: 0.5em 0;  vertical-align: middle;}#viewport .formify-fieldset-radio .formify-label .formify-input,#viewport .formify-fieldset-checkbox .formify-label .formify-input,#viewport .formify-fieldset-radio .formify-label span,#viewport .formify-fieldset-checkbox .formify-label span {  display: inline-block;  vertical-align: middle;}#viewport .formify-fieldset-radio .formify-label span,#viewport .formify-fieldset-checkbox .formify-label span {  margin-left: 0.125em;}#viewport .formify-fieldset-inline .formify-label {  clear: none;  margin: 0.5em 1.5em 0.5em 0;}#viewport .formify-legend {  float: left;  width: 100%;  margin-bottom: 1em;}#viewport .formify-scale-statement .formify-legend {  margin-bottom: 0;  padding: 0.25em 0;}#viewport .formify-label,#viewport .formify-legend {  font-weight: normal;  font-size: 1em;  line-height: 1.4em;}#viewport .formify-fieldset-email .formify-input,#viewport .formify-fieldset-select .formify-input,#viewport .formify-fieldset-text .formify-input,#viewport .formify-fieldset-textarea .formify-input {  margin-top: 0.5em;  clear: left;  background-color: white;  border: 1px solid #aaa;  display: block;  border-radius: 3px;  padding: 0.25em;  width: 100%;}@media only screen and (min-width: 320px) {  #viewport .formify-input {    max-width: 240px;  }}#viewport .formify-fieldset-textarea .formify-input {  width: 100%;  max-width: 100%;  height: 180px;}#viewport .formify-fieldset-radio .formify-input,#viewport .formify-fieldset-checkbox .formify-input,#viewport .formify-fieldset-radio .formify-label,#viewport .formify-fieldset-checkbox .formify-label,#viewport .formify-scale-input,#viewport .formify-scale-option,#viewport .formify-select .formify-input,#viewport .formify-submit {  cursor: pointer;}#viewport .formify-submit {  display: block;  width: 100%;  padding: 1em;  border-radius: 3px;  background: #666;  color: #fff;  margin-left: auto;  margin-right: auto;}#viewport .formify-submit:focus {  outline-offset: -4px;  outline: 1px dotted #000;}#viewport .formify-group {  display: block;  position: static;  border-top: 1px solid #ccc;  padding: 10px 0;  margin: 0;}#viewport .formify-group [class*="formify-fieldset"] {  border-top: 0;}#viewport [class*="formify-fieldset"] {  padding: 10px 0;  margin: 0;  position: relative;  border-top: 1px solid #ccc;}#viewport .formify-scale-row.formify-scale-header {  display: none;}#viewport .formify-scale-cell {  font-weight: normal;  display: block;  margin: 1em 0;  font-size: 1em;}#viewport .formify-scale-option span {  display: inline-block;  vertical-align: middle;}#viewport .formify-scale-input {  display: inline-block;  vertical-align: middle;}@media only screen and (min-width: 320px) {  #viewport .formify-scale-body {    margin-top: 1em;  }  #viewport .formify-scale-row {    margin-top: 0.5em;    display: table;    width: 100%;    border-collapse: collapse;  }  #viewport .formify-scale-row.formify-scale-header {    display: table;    margin-top: 1em;  }  #viewport .formify-scale-cell {    display: table-cell;    width: auto;    float: none;    text-align: center;    vertical-align: middle;  }  #viewport .formify-scale-statement {    display: table-cell;    width: 50%;    text-align: left;  }  #viewport .formify-scale-option span {    display: none;  }}#viewport #view-container {  font-size: 12px;  text-align: left;  font-family: sans-serif;  /* validation styles */}#viewport #view-container textarea[class$="formify-input"] {  height: 100px;}#viewport #view-container .formify-submit {  background: #012169;  border-radius: 0;  font-weight: bold;  height: 35px;  padding: 0;  width: 115px;}#viewport #view-container button > svg {  fill: white;  left: 10px;  position: relative;  top: 2px;}#viewport #view-container .formify-fieldset-radio .formify-label span,#viewport #view-container .formify-fieldset-checkbox .formify-label span {  margin-left: 0.5em;}#viewport #view-container .formify-heading-required {  color: #c6040b;}#viewport #view-container fieldset[class*="formify-fieldset"][acif-required="true"][class*="invalid"] {  padding-top: 30px;}#viewport #view-container p[acif-invalid="required"] {  color: #c6040b;  font-size: 0.85em;  font-style: italic;  position: absolute;  top: 10px;}#viewport #view-container fieldset[class*="formify-fieldset"][acif-required="true"][acif-field-type="radio"] > legend::after,#viewport #view-container fieldset[class*="formify-fieldset"][acif-required="true"][acif-field-type="checkbox"] > legend::after {  content: " *";  color: #c6040b;}#viewport #view-container fieldset[class*="formify-fieldset"][acif-required="true"][acif-fieldset-group] > h2::after {  content: " *";  color: #c6040b;}#viewport #view-container fieldset[class*="formify-fieldset"][acif-required="true"][acif-field-type="text"] > label::after,#viewport #view-container fieldset[class*="formify-fieldset"][acif-required="true"][acif-field-type="email"] > label::after,#viewport #view-container fieldset[class*="formify-fieldset"][acif-required="true"][acif-field-type="select"] > label::after,#viewport #view-container fieldset[class*="formify-fieldset"][acif-required="true"][acif-field-type="textarea"] > label::after {  content: " *";  color: #c6040b;}#viewport #thankYou {  font-size: 16px;  text-align: center;  display: table;  height: 100%;  width: 100%;}#viewport #thankYou p.lead {  font-size: 24px;  color: #ccc;  margin-bottom: 10%;}#viewport #thankYou p.lead ~ p {  font-size: 18px;  margin-bottom: 10%;}#viewport #thankYou div.center-container {  display: table-cell;  vertical-align: middle;}#viewport #thankYou button {  background-color: #012169;  border-radius: 0;  color: white;  cursor: pointer;  font-weight: bold;  height: 35px;  width: 135px;}';
});
define('Automatons/styles/2007', ['exports', 'module'], function (exports, module) {
  'use strict';

  module.exports = '#viewport {    /* Base Formify Styles */  /* BAC Formify Styles */}#viewport body,#viewport div,#viewport dl,#viewport dt,#viewport dd,#viewport ul,#viewport ol,#viewport li,#viewport h1,#viewport h2,#viewport h3,#viewport h4,#viewport h5,#viewport h6,#viewport pre,#viewport code,#viewport form,#viewport fieldset,#viewport legend,#viewport input,#viewport textarea,#viewport p,#viewport blockquote,#viewport th,#viewport td,#viewport button,#viewport a {  margin: 0;  padding: 0;  border: none;}#viewport table {  border-collapse: collapse;  border-spacing: 0;}#viewport fieldset,#viewport img {  border: 0;}#viewport em,#viewport strong,#viewport th {  font-style: normal;  font-weight: normal;}#viewport ol,#viewport ul {  list-style: none;}#viewport th {  text-align: left;}#viewport h1,#viewport h2,#viewport h3,#viewport h4,#viewport h5,#viewport h6 {  font-size: 100%;  font-weight: normal;}#viewport abbr,#viewport acronym {  border: 0;  font-variant: normal;}#viewport sup {  vertical-align: text-top;}#viewport sub {  vertical-align: text-bottom;}#viewport input,#viewport textarea,#viewport select {  font-family: inherit;  font-size: inherit;  font-weight: inherit;}#viewport input,#viewport textarea,#viewport select {  *font-size: 100%;}#viewport .view-container {  -webkit-box-sizing: border-box;  -moz-box-sizing: border-box;  box-sizing: border-box;}#viewport *,#viewport *:before,#viewport *:after {  -webkit-box-sizing: inherit;  -moz-box-sizing: inherit;  box-sizing: inherit;}#viewport a,#viewport blockquote,#viewport button,#viewport fieldset,#viewport form,#viewport h1,#viewport h2,#viewport h3,#viewport h4,#viewport h5,#viewport h6,#viewport input,#viewport legend,#viewport li,#viewport ol,#viewport p,#viewport pre,#viewport td,#viewport textarea,#viewport th,#viewport ul {  margin: 0;  padding: 0;  border: none;}#viewport table {  border-collapse: collapse;  border-spacing: 0;}#viewport fieldset,#viewport img {  border: 0;}#viewport em,#viewport strong,#viewport th {  font-style: normal;  font-weight: normal;}#viewport ol,#viewport ul {  list-style: none;}#viewport th {  text-align: left;}#viewport h1,#viewport h2,#viewport h3,#viewport h4,#viewport h5,#viewport h6 {  font-size: 100%;  font-weight: normal;}#viewport abbr,#viewport acronym {  border: 0;  font-variant: normal;}#viewport sup {  vertical-align: text-top;}#viewport sub {  vertical-align: text-bottom;}#viewport input,#viewport select,#viewport textarea {  font-family: inherit;  font-size: inherit;  font-weight: inherit;}#viewport input,#viewport select,#viewport textarea {  *font-size: 100%;}#viewport .view-container {  -webkit-box-sizing: border-box;  -moz-box-sizing: border-box;  box-sizing: border-box;}#viewport *,#viewport *:after,#viewport *:before,#viewport [class*="formify-"] {  -webkit-box-sizing: inherit;  -moz-box-sizing: inherit;  box-sizing: inherit;}#viewport .view-container {  overflow-y: auto;  position: absolute;  top: 0;  bottom: 0;  right: 0;  left: 0;  padding: 20px;}#viewport .formify-form-body {  display: block;  margin-bottom: 1em;}#viewport .formify-heading {  font-weight: bold;  margin-bottom: 1em;  font-size: 1.125em;  line-height: 1.4em;}#viewport .formify-header {  display: block;  height: auto;  margin-bottom: 1em;}#viewport .formify-fieldset-radio .formify-label,#viewport .formify-fieldset-checkbox .formify-label {  display: block;  float: left;  clear: left;  margin: 0.5em 0;  vertical-align: middle;}#viewport .formify-fieldset-radio .formify-label .formify-input,#viewport .formify-fieldset-checkbox .formify-label .formify-input,#viewport .formify-fieldset-radio .formify-label span,#viewport .formify-fieldset-checkbox .formify-label span {  display: inline-block;  vertical-align: middle;}#viewport .formify-fieldset-radio .formify-label span,#viewport .formify-fieldset-checkbox .formify-label span {  margin-left: 0.125em;}#viewport .formify-fieldset-inline .formify-label {  clear: none;  margin: 0.5em 1.5em 0.5em 0;}#viewport .formify-legend {  float: left;  width: 100%;  margin-bottom: 1em;}#viewport .formify-scale-statement .formify-legend {  margin-bottom: 0;  padding: 0.25em 0;}#viewport .formify-label,#viewport .formify-legend {  font-weight: normal;  font-size: 1em;  line-height: 1.4em;}#viewport .formify-fieldset-email .formify-input,#viewport .formify-fieldset-select .formify-input,#viewport .formify-fieldset-text .formify-input,#viewport .formify-fieldset-textarea .formify-input {  margin-top: 0.5em;  clear: left;  background-color: white;  border: 1px solid #aaa;  display: block;  border-radius: 3px;  padding: 0.25em;  width: 100%;}@media only screen and (min-width: 320px) {  #viewport .formify-input {    max-width: 240px;  }}#viewport .formify-fieldset-textarea .formify-input {  width: 100%;  max-width: 100%;  height: 180px;}#viewport .formify-fieldset-radio .formify-input,#viewport .formify-fieldset-checkbox .formify-input,#viewport .formify-fieldset-radio .formify-label,#viewport .formify-fieldset-checkbox .formify-label,#viewport .formify-scale-input,#viewport .formify-scale-option,#viewport .formify-select .formify-input,#viewport .formify-submit {  cursor: pointer;}#viewport .formify-submit {  display: block;  width: 100%;  padding: 1em;  border-radius: 3px;  background: #666;  color: #fff;  margin-left: auto;  margin-right: auto;}#viewport .formify-submit:focus {  outline-offset: -4px;  outline: 1px dotted #000;}#viewport .formify-group {  display: block;  position: static;  border-top: 1px solid #ccc;  padding: 10px 0;  margin: 0;}#viewport .formify-group [class*="formify-fieldset"] {  border-top: 0;}#viewport [class*="formify-fieldset"] {  padding: 10px 0;  margin: 0;  position: relative;  border-top: 1px solid #ccc;}#viewport .formify-scale-row.formify-scale-header {  display: none;}#viewport .formify-scale-cell {  font-weight: normal;  display: block;  margin: 1em 0;  font-size: 1em;}#viewport .formify-scale-option span {  display: inline-block;  vertical-align: middle;}#viewport .formify-scale-input {  display: inline-block;  vertical-align: middle;}@media only screen and (min-width: 320px) {  #viewport .formify-scale-body {    margin-top: 1em;  }  #viewport .formify-scale-row {    margin-top: 0.5em;    display: table;    width: 100%;    border-collapse: collapse;  }  #viewport .formify-scale-row.formify-scale-header {    display: table;    margin-top: 1em;  }  #viewport .formify-scale-cell {    display: table-cell;    width: auto;    float: none;    text-align: center;    vertical-align: middle;  }  #viewport .formify-scale-statement {    display: table-cell;    width: 50%;    text-align: left;  }  #viewport .formify-scale-option span {    display: none;  }}#viewport #view-container {  font-size: 12px;  text-align: left;  font-family: sans-serif;  /* validation styles */}#viewport #view-container textarea[class$="formify-input"] {  height: 100px;}#viewport #view-container .formify-submit {  background: #012169;  border-radius: 0;  font-weight: bold;  height: 35px;  padding: 0;  width: 115px;}#viewport #view-container button > svg {  fill: white;  left: 10px;  position: relative;  top: 2px;}#viewport #view-container .formify-fieldset-radio .formify-label span,#viewport #view-container .formify-fieldset-checkbox .formify-label span {  margin-left: 0.5em;}#viewport #view-container .formify-heading-required {  color: #c6040b;}#viewport #view-container fieldset[class*="formify-fieldset"][acif-required="true"][class*="invalid"] {  padding-top: 30px;}#viewport #view-container p[acif-invalid="required"] {  color: #c6040b;  font-size: 0.85em;  font-style: italic;  position: absolute;  top: 10px;}#viewport #view-container fieldset[class*="formify-fieldset"][acif-required="true"][acif-field-type="radio"] > legend::after,#viewport #view-container fieldset[class*="formify-fieldset"][acif-required="true"][acif-field-type="checkbox"] > legend::after {  content: " *";  color: #c6040b;}#viewport #view-container fieldset[class*="formify-fieldset"][acif-required="true"][acif-fieldset-group] > h2::after {  content: " *";  color: #c6040b;}#viewport #view-container fieldset[class*="formify-fieldset"][acif-required="true"][acif-field-type="text"] > label::after,#viewport #view-container fieldset[class*="formify-fieldset"][acif-required="true"][acif-field-type="email"] > label::after,#viewport #view-container fieldset[class*="formify-fieldset"][acif-required="true"][acif-field-type="select"] > label::after,#viewport #view-container fieldset[class*="formify-fieldset"][acif-required="true"][acif-field-type="textarea"] > label::after {  content: " *";  color: #c6040b;}#viewport #thankYou {  font-size: 16px;  text-align: center;  display: table;  height: 100%;  width: 100%;}#viewport #thankYou p.lead {  font-size: 24px;  color: #ccc;  margin-bottom: 10%;}#viewport #thankYou p.lead ~ p {  font-size: 18px;  margin-bottom: 10%;}#viewport #thankYou div.center-container {  display: table-cell;  vertical-align: middle;}#viewport #thankYou button {  background-color: #012169;  border-radius: 0;  color: white;  cursor: pointer;  font-weight: bold;  height: 35px;  width: 135px;}#viewport #view-container .formify-submit {  background: #0073cf;}#viewport #thankYou p.lead ~ p {  font-size: 18px;  margin-bottom: 10%;}#viewport #thankYou button {  background: #0073cf;}';
});
define('Automatons/styles/2008', ['exports', 'module'], function (exports, module) {
  'use strict';

  module.exports = '#viewport {    /* Base Formify Styles */  /* BAC Formify Styles */}#viewport body,#viewport div,#viewport dl,#viewport dt,#viewport dd,#viewport ul,#viewport ol,#viewport li,#viewport h1,#viewport h2,#viewport h3,#viewport h4,#viewport h5,#viewport h6,#viewport pre,#viewport code,#viewport form,#viewport fieldset,#viewport legend,#viewport input,#viewport textarea,#viewport p,#viewport blockquote,#viewport th,#viewport td,#viewport button,#viewport a {  margin: 0;  padding: 0;  border: none;}#viewport table {  border-collapse: collapse;  border-spacing: 0;}#viewport fieldset,#viewport img {  border: 0;}#viewport em,#viewport strong,#viewport th {  font-style: normal;  font-weight: normal;}#viewport ol,#viewport ul {  list-style: none;}#viewport th {  text-align: left;}#viewport h1,#viewport h2,#viewport h3,#viewport h4,#viewport h5,#viewport h6 {  font-size: 100%;  font-weight: normal;}#viewport abbr,#viewport acronym {  border: 0;  font-variant: normal;}#viewport sup {  vertical-align: text-top;}#viewport sub {  vertical-align: text-bottom;}#viewport input,#viewport textarea,#viewport select {  font-family: inherit;  font-size: inherit;  font-weight: inherit;}#viewport input,#viewport textarea,#viewport select {  *font-size: 100%;}#viewport .view-container {  -webkit-box-sizing: border-box;  -moz-box-sizing: border-box;  box-sizing: border-box;}#viewport *,#viewport *:before,#viewport *:after {  -webkit-box-sizing: inherit;  -moz-box-sizing: inherit;  box-sizing: inherit;}#viewport a,#viewport blockquote,#viewport button,#viewport fieldset,#viewport form,#viewport h1,#viewport h2,#viewport h3,#viewport h4,#viewport h5,#viewport h6,#viewport input,#viewport legend,#viewport li,#viewport ol,#viewport p,#viewport pre,#viewport td,#viewport textarea,#viewport th,#viewport ul {  margin: 0;  padding: 0;  border: none;}#viewport table {  border-collapse: collapse;  border-spacing: 0;}#viewport fieldset,#viewport img {  border: 0;}#viewport em,#viewport strong,#viewport th {  font-style: normal;  font-weight: normal;}#viewport ol,#viewport ul {  list-style: none;}#viewport th {  text-align: left;}#viewport h1,#viewport h2,#viewport h3,#viewport h4,#viewport h5,#viewport h6 {  font-size: 100%;  font-weight: normal;}#viewport abbr,#viewport acronym {  border: 0;  font-variant: normal;}#viewport sup {  vertical-align: text-top;}#viewport sub {  vertical-align: text-bottom;}#viewport input,#viewport select,#viewport textarea {  font-family: inherit;  font-size: inherit;  font-weight: inherit;}#viewport input,#viewport select,#viewport textarea {  *font-size: 100%;}#viewport .view-container {  -webkit-box-sizing: border-box;  -moz-box-sizing: border-box;  box-sizing: border-box;}#viewport *,#viewport *:after,#viewport *:before,#viewport [class*="formify-"] {  -webkit-box-sizing: inherit;  -moz-box-sizing: inherit;  box-sizing: inherit;}#viewport .view-container {  overflow-y: auto;  position: absolute;  top: 0;  bottom: 0;  right: 0;  left: 0;  padding: 20px;}#viewport .formify-form-body {  display: block;  margin-bottom: 1em;}#viewport .formify-heading {  font-weight: bold;  margin-bottom: 1em;  font-size: 1.125em;  line-height: 1.4em;}#viewport .formify-header {  display: block;  height: auto;  margin-bottom: 1em;}#viewport .formify-fieldset-radio .formify-label,#viewport .formify-fieldset-checkbox .formify-label {  display: block;  float: left;  clear: left;  margin: 0.5em 0;  vertical-align: middle;}#viewport .formify-fieldset-radio .formify-label .formify-input,#viewport .formify-fieldset-checkbox .formify-label .formify-input,#viewport .formify-fieldset-radio .formify-label span,#viewport .formify-fieldset-checkbox .formify-label span {  display: inline-block;  vertical-align: middle;}#viewport .formify-fieldset-radio .formify-label span,#viewport .formify-fieldset-checkbox .formify-label span {  margin-left: 0.125em;}#viewport .formify-fieldset-inline .formify-label {  clear: none;  margin: 0.5em 1.5em 0.5em 0;}#viewport .formify-legend {  float: left;  width: 100%;  margin-bottom: 1em;}#viewport .formify-scale-statement .formify-legend {  margin-bottom: 0;  padding: 0.25em 0;}#viewport .formify-label,#viewport .formify-legend {  font-weight: normal;  font-size: 1em;  line-height: 1.4em;}#viewport .formify-fieldset-email .formify-input,#viewport .formify-fieldset-select .formify-input,#viewport .formify-fieldset-text .formify-input,#viewport .formify-fieldset-textarea .formify-input {  margin-top: 0.5em;  clear: left;  background-color: white;  border: 1px solid #aaa;  display: block;  border-radius: 3px;  padding: 0.25em;  width: 100%;}@media only screen and (min-width: 320px) {  #viewport .formify-input {    max-width: 240px;  }}#viewport .formify-fieldset-textarea .formify-input {  width: 100%;  max-width: 100%;  height: 180px;}#viewport .formify-fieldset-radio .formify-input,#viewport .formify-fieldset-checkbox .formify-input,#viewport .formify-fieldset-radio .formify-label,#viewport .formify-fieldset-checkbox .formify-label,#viewport .formify-scale-input,#viewport .formify-scale-option,#viewport .formify-select .formify-input,#viewport .formify-submit {  cursor: pointer;}#viewport .formify-submit {  display: block;  width: 100%;  padding: 1em;  border-radius: 3px;  background: #666;  color: #fff;  margin-left: auto;  margin-right: auto;}#viewport .formify-submit:focus {  outline-offset: -4px;  outline: 1px dotted #000;}#viewport .formify-group {  display: block;  position: static;  border-top: 1px solid #ccc;  padding: 10px 0;  margin: 0;}#viewport .formify-group [class*="formify-fieldset"] {  border-top: 0;}#viewport [class*="formify-fieldset"] {  padding: 10px 0;  margin: 0;  position: relative;  border-top: 1px solid #ccc;}#viewport .formify-scale-row.formify-scale-header {  display: none;}#viewport .formify-scale-cell {  font-weight: normal;  display: block;  margin: 1em 0;  font-size: 1em;}#viewport .formify-scale-option span {  display: inline-block;  vertical-align: middle;}#viewport .formify-scale-input {  display: inline-block;  vertical-align: middle;}@media only screen and (min-width: 320px) {  #viewport .formify-scale-body {    margin-top: 1em;  }  #viewport .formify-scale-row {    margin-top: 0.5em;    display: table;    width: 100%;    border-collapse: collapse;  }  #viewport .formify-scale-row.formify-scale-header {    display: table;    margin-top: 1em;  }  #viewport .formify-scale-cell {    display: table-cell;    width: auto;    float: none;    text-align: center;    vertical-align: middle;  }  #viewport .formify-scale-statement {    display: table-cell;    width: 50%;    text-align: left;  }  #viewport .formify-scale-option span {    display: none;  }}#viewport #view-container {  font-family: sans-serif;  font-size: 12px;  text-align: left;}#viewport #view-container textarea[class$="formify-input"] {  height: 80px;}#viewport #view-container select[class$="formify-input"] {  width: auto;  max-width: 240px;}#viewport #view-container select,#viewport #view-container textarea {  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.06) inset;  webkit-box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.06) inset;  -moz-box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.06) inset;}#viewport #view-container .formify-heading {  font-size: 1.1em;}#viewport #view-container .formify-submit {  background: #0073cf;  border-radius: 0;  font-weight: bold;  height: 35px;  line-height: 1.2em;  padding: 0;  width: 115px;}#viewport #view-container button > svg {  fill: white;  left: 10px;  position: relative;  top: 3px;}#viewport #view-container .formify-heading-required {  color: #ff0000;}#viewport #view-container fieldset[class*="formify-fieldset"][acif-required="true"][class*="invalid"] {  padding-top: 30px;}#viewport #view-container p[acif-invalid="required"] {  color: #ff0000;  font-size: 1em;  position: absolute;  top: 10px;}#viewport #view-container fieldset[class*="formify-fieldset"][acif-required="true"] > legend::after,#viewport #view-container fieldset[class*="formify-fieldset"][acif-required="true"] > label::after {  content: " *";  color: #ff0000;}#viewport #thankYou {  font-size: 16px;  text-align: center;  display: table;  height: 100%;  width: 100%;}#viewport #thankYou p.lead {  font-size: 1em;  color: #9c9a9c;  margin-bottom: 40px;}#viewport #thankYou p.lead ~ p {  margin-bottom: 10%;}#viewport #thankYou div.center-container {  display: table-cell;  vertical-align: middle;}#viewport #thankYou button {  background-color: #0073cf;  border-radius: 0;  color: white;  cursor: pointer;  font-weight: bold;  height: 35px;  width: 115px;}#viewport #view-container .formify-submit {  background: #62BB47;}#viewport #thankYou button {  background: #62BB47;}';
});
define('Automatons/styles/2009', ['exports', 'module'], function (exports, module) {
  'use strict';

  module.exports = '#viewport {    /* Base Formify Styles */  /* BAC Formify Styles */}#viewport body,#viewport div,#viewport dl,#viewport dt,#viewport dd,#viewport ul,#viewport ol,#viewport li,#viewport h1,#viewport h2,#viewport h3,#viewport h4,#viewport h5,#viewport h6,#viewport pre,#viewport code,#viewport form,#viewport fieldset,#viewport legend,#viewport input,#viewport textarea,#viewport p,#viewport blockquote,#viewport th,#viewport td,#viewport button,#viewport a {  margin: 0;  padding: 0;  border: none;}#viewport table {  border-collapse: collapse;  border-spacing: 0;}#viewport fieldset,#viewport img {  border: 0;}#viewport em,#viewport strong,#viewport th {  font-style: normal;  font-weight: normal;}#viewport ol,#viewport ul {  list-style: none;}#viewport th {  text-align: left;}#viewport h1,#viewport h2,#viewport h3,#viewport h4,#viewport h5,#viewport h6 {  font-size: 100%;  font-weight: normal;}#viewport abbr,#viewport acronym {  border: 0;  font-variant: normal;}#viewport sup {  vertical-align: text-top;}#viewport sub {  vertical-align: text-bottom;}#viewport input,#viewport textarea,#viewport select {  font-family: inherit;  font-size: inherit;  font-weight: inherit;}#viewport input,#viewport textarea,#viewport select {  *font-size: 100%;}#viewport .view-container {  -webkit-box-sizing: border-box;  -moz-box-sizing: border-box;  box-sizing: border-box;}#viewport *,#viewport *:before,#viewport *:after {  -webkit-box-sizing: inherit;  -moz-box-sizing: inherit;  box-sizing: inherit;}#viewport a,#viewport blockquote,#viewport button,#viewport fieldset,#viewport form,#viewport h1,#viewport h2,#viewport h3,#viewport h4,#viewport h5,#viewport h6,#viewport input,#viewport legend,#viewport li,#viewport ol,#viewport p,#viewport pre,#viewport td,#viewport textarea,#viewport th,#viewport ul {  margin: 0;  padding: 0;  border: none;}#viewport table {  border-collapse: collapse;  border-spacing: 0;}#viewport fieldset,#viewport img {  border: 0;}#viewport em,#viewport strong,#viewport th {  font-style: normal;  font-weight: normal;}#viewport ol,#viewport ul {  list-style: none;}#viewport th {  text-align: left;}#viewport h1,#viewport h2,#viewport h3,#viewport h4,#viewport h5,#viewport h6 {  font-size: 100%;  font-weight: normal;}#viewport abbr,#viewport acronym {  border: 0;  font-variant: normal;}#viewport sup {  vertical-align: text-top;}#viewport sub {  vertical-align: text-bottom;}#viewport input,#viewport select,#viewport textarea {  font-family: inherit;  font-size: inherit;  font-weight: inherit;}#viewport input,#viewport select,#viewport textarea {  *font-size: 100%;}#viewport .view-container {  -webkit-box-sizing: border-box;  -moz-box-sizing: border-box;  box-sizing: border-box;}#viewport *,#viewport *:after,#viewport *:before,#viewport [class*="formify-"] {  -webkit-box-sizing: inherit;  -moz-box-sizing: inherit;  box-sizing: inherit;}#viewport .view-container {  overflow-y: auto;  position: absolute;  top: 0;  bottom: 0;  right: 0;  left: 0;  padding: 20px;}#viewport .formify-form-body {  display: block;  margin-bottom: 1em;}#viewport .formify-heading {  font-weight: bold;  margin-bottom: 1em;  font-size: 1.125em;  line-height: 1.4em;}#viewport .formify-header {  display: block;  height: auto;  margin-bottom: 1em;}#viewport .formify-fieldset-radio .formify-label,#viewport .formify-fieldset-checkbox .formify-label {  display: block;  float: left;  clear: left;  margin: 0.5em 0;  vertical-align: middle;}#viewport .formify-fieldset-radio .formify-label .formify-input,#viewport .formify-fieldset-checkbox .formify-label .formify-input,#viewport .formify-fieldset-radio .formify-label span,#viewport .formify-fieldset-checkbox .formify-label span {  display: inline-block;  vertical-align: middle;}#viewport .formify-fieldset-radio .formify-label span,#viewport .formify-fieldset-checkbox .formify-label span {  margin-left: 0.125em;}#viewport .formify-fieldset-inline .formify-label {  clear: none;  margin: 0.5em 1.5em 0.5em 0;}#viewport .formify-legend {  float: left;  width: 100%;  margin-bottom: 1em;}#viewport .formify-scale-statement .formify-legend {  margin-bottom: 0;  padding: 0.25em 0;}#viewport .formify-label,#viewport .formify-legend {  font-weight: normal;  font-size: 1em;  line-height: 1.4em;}#viewport .formify-fieldset-email .formify-input,#viewport .formify-fieldset-select .formify-input,#viewport .formify-fieldset-text .formify-input,#viewport .formify-fieldset-textarea .formify-input {  margin-top: 0.5em;  clear: left;  background-color: white;  border: 1px solid #aaa;  display: block;  border-radius: 3px;  padding: 0.25em;  width: 100%;}@media only screen and (min-width: 320px) {  #viewport .formify-input {    max-width: 240px;  }}#viewport .formify-fieldset-textarea .formify-input {  width: 100%;  max-width: 100%;  height: 180px;}#viewport .formify-fieldset-radio .formify-input,#viewport .formify-fieldset-checkbox .formify-input,#viewport .formify-fieldset-radio .formify-label,#viewport .formify-fieldset-checkbox .formify-label,#viewport .formify-scale-input,#viewport .formify-scale-option,#viewport .formify-select .formify-input,#viewport .formify-submit {  cursor: pointer;}#viewport .formify-submit {  display: block;  width: 100%;  padding: 1em;  border-radius: 3px;  background: #666;  color: #fff;  margin-left: auto;  margin-right: auto;}#viewport .formify-submit:focus {  outline-offset: -4px;  outline: 1px dotted #000;}#viewport .formify-group {  display: block;  position: static;  border-top: 1px solid #ccc;  padding: 10px 0;  margin: 0;}#viewport .formify-group [class*="formify-fieldset"] {  border-top: 0;}#viewport [class*="formify-fieldset"] {  padding: 10px 0;  margin: 0;  position: relative;  border-top: 1px solid #ccc;}#viewport .formify-scale-row.formify-scale-header {  display: none;}#viewport .formify-scale-cell {  font-weight: normal;  display: block;  margin: 1em 0;  font-size: 1em;}#viewport .formify-scale-option span {  display: inline-block;  vertical-align: middle;}#viewport .formify-scale-input {  display: inline-block;  vertical-align: middle;}@media only screen and (min-width: 320px) {  #viewport .formify-scale-body {    margin-top: 1em;  }  #viewport .formify-scale-row {    margin-top: 0.5em;    display: table;    width: 100%;    border-collapse: collapse;  }  #viewport .formify-scale-row.formify-scale-header {    display: table;    margin-top: 1em;  }  #viewport .formify-scale-cell {    display: table-cell;    width: auto;    float: none;    text-align: center;    vertical-align: middle;  }  #viewport .formify-scale-statement {    display: table-cell;    width: 50%;    text-align: left;  }  #viewport .formify-scale-option span {    display: none;  }}#viewport #view-container {  font-family: sans-serif;  font-size: 12px;  text-align: left;}#viewport #view-container textarea[class$="formify-input"] {  height: 80px;}#viewport #view-container select[class$="formify-input"] {  width: auto;  max-width: 240px;}#viewport #view-container select,#viewport #view-container textarea {  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.06) inset;  webkit-box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.06) inset;  -moz-box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.06) inset;}#viewport #view-container .formify-heading {  font-size: 1.1em;}#viewport #view-container .formify-submit {  background: #0073cf;  border-radius: 0;  font-weight: bold;  height: 35px;  line-height: 1.2em;  padding: 0;  width: 115px;}#viewport #view-container button > svg {  fill: white;  left: 10px;  position: relative;  top: 3px;}#viewport #view-container .formify-heading-required {  color: #ff0000;}#viewport #view-container fieldset[class*="formify-fieldset"][acif-required="true"][class*="invalid"] {  padding-top: 30px;}#viewport #view-container p[acif-invalid="required"] {  color: #ff0000;  font-size: 1em;  position: absolute;  top: 10px;}#viewport #view-container fieldset[class*="formify-fieldset"][acif-required="true"] > legend::after,#viewport #view-container fieldset[class*="formify-fieldset"][acif-required="true"] > label::after {  content: " *";  color: #ff0000;}#viewport #thankYou {  font-size: 16px;  text-align: center;  display: table;  height: 100%;  width: 100%;}#viewport #thankYou p.lead {  font-size: 1em;  color: #9c9a9c;  margin-bottom: 40px;}#viewport #thankYou p.lead ~ p {  margin-bottom: 10%;}#viewport #thankYou div.center-container {  display: table-cell;  vertical-align: middle;}#viewport #thankYou button {  background-color: #0073cf;  border-radius: 0;  color: white;  cursor: pointer;  font-weight: bold;  height: 35px;  width: 115px;}#viewport .formify-heading-required {  display: none;}';
});
define('Automatons/styles/2011', ['exports', 'module'], function (exports, module) {
  'use strict';

  module.exports = '#viewport {    /* Base Formify Styles */}#viewport body,#viewport div,#viewport dl,#viewport dt,#viewport dd,#viewport ul,#viewport ol,#viewport li,#viewport h1,#viewport h2,#viewport h3,#viewport h4,#viewport h5,#viewport h6,#viewport pre,#viewport code,#viewport form,#viewport fieldset,#viewport legend,#viewport input,#viewport textarea,#viewport p,#viewport blockquote,#viewport th,#viewport td,#viewport button,#viewport a {  margin: 0;  padding: 0;  border: none;}#viewport table {  border-collapse: collapse;  border-spacing: 0;}#viewport fieldset,#viewport img {  border: 0;}#viewport em,#viewport strong,#viewport th {  font-style: normal;  font-weight: normal;}#viewport ol,#viewport ul {  list-style: none;}#viewport th {  text-align: left;}#viewport h1,#viewport h2,#viewport h3,#viewport h4,#viewport h5,#viewport h6 {  font-size: 100%;  font-weight: normal;}#viewport abbr,#viewport acronym {  border: 0;  font-variant: normal;}#viewport sup {  vertical-align: text-top;}#viewport sub {  vertical-align: text-bottom;}#viewport input,#viewport textarea,#viewport select {  font-family: inherit;  font-size: inherit;  font-weight: inherit;}#viewport input,#viewport textarea,#viewport select {  *font-size: 100%;}#viewport .view-container {  -webkit-box-sizing: border-box;  -moz-box-sizing: border-box;  box-sizing: border-box;}#viewport *,#viewport *:before,#viewport *:after {  -webkit-box-sizing: inherit;  -moz-box-sizing: inherit;  box-sizing: inherit;}#viewport a,#viewport blockquote,#viewport button,#viewport fieldset,#viewport form,#viewport h1,#viewport h2,#viewport h3,#viewport h4,#viewport h5,#viewport h6,#viewport input,#viewport legend,#viewport li,#viewport ol,#viewport p,#viewport pre,#viewport td,#viewport textarea,#viewport th,#viewport ul {  margin: 0;  padding: 0;  border: none;}#viewport table {  border-collapse: collapse;  border-spacing: 0;}#viewport fieldset,#viewport img {  border: 0;}#viewport em,#viewport strong,#viewport th {  font-style: normal;  font-weight: normal;}#viewport ol,#viewport ul {  list-style: none;}#viewport th {  text-align: left;}#viewport h1,#viewport h2,#viewport h3,#viewport h4,#viewport h5,#viewport h6 {  font-size: 100%;  font-weight: normal;}#viewport abbr,#viewport acronym {  border: 0;  font-variant: normal;}#viewport sup {  vertical-align: text-top;}#viewport sub {  vertical-align: text-bottom;}#viewport input,#viewport select,#viewport textarea {  font-family: inherit;  font-size: inherit;  font-weight: inherit;}#viewport input,#viewport select,#viewport textarea {  *font-size: 100%;}#viewport .view-container {  -webkit-box-sizing: border-box;  -moz-box-sizing: border-box;  box-sizing: border-box;}#viewport *,#viewport *:after,#viewport *:before,#viewport [class*="formify-"] {  -webkit-box-sizing: inherit;  -moz-box-sizing: inherit;  box-sizing: inherit;}#viewport .view-container {  overflow-y: auto;  position: absolute;  top: 0;  bottom: 0;  right: 0;  left: 0;  padding: 20px;}#viewport .formify-form-body {  display: block;  margin-bottom: 1em;}#viewport .formify-heading {  font-weight: bold;  margin-bottom: 1em;  font-size: 1.125em;  line-height: 1.4em;}#viewport .formify-header {  display: block;  height: auto;  margin-bottom: 1em;}#viewport .formify-fieldset-radio .formify-label,#viewport .formify-fieldset-checkbox .formify-label {  display: block;  float: left;  clear: left;  margin: 0.5em 0;  vertical-align: middle;}#viewport .formify-fieldset-radio .formify-label .formify-input,#viewport .formify-fieldset-checkbox .formify-label .formify-input,#viewport .formify-fieldset-radio .formify-label span,#viewport .formify-fieldset-checkbox .formify-label span {  display: inline-block;  vertical-align: middle;}#viewport .formify-fieldset-radio .formify-label span,#viewport .formify-fieldset-checkbox .formify-label span {  margin-left: 0.125em;}#viewport .formify-fieldset-inline .formify-label {  clear: none;  margin: 0.5em 1.5em 0.5em 0;}#viewport .formify-legend {  float: left;  width: 100%;  margin-bottom: 1em;}#viewport .formify-scale-statement .formify-legend {  margin-bottom: 0;  padding: 0.25em 0;}#viewport .formify-label,#viewport .formify-legend {  font-weight: normal;  font-size: 1em;  line-height: 1.4em;}#viewport .formify-fieldset-email .formify-input,#viewport .formify-fieldset-select .formify-input,#viewport .formify-fieldset-text .formify-input,#viewport .formify-fieldset-textarea .formify-input {  margin-top: 0.5em;  clear: left;  background-color: white;  border: 1px solid #aaa;  display: block;  border-radius: 3px;  padding: 0.25em;  width: 100%;}@media only screen and (min-width: 320px) {  #viewport .formify-input {    max-width: 240px;  }}#viewport .formify-fieldset-textarea .formify-input {  width: 100%;  max-width: 100%;  height: 180px;}#viewport .formify-fieldset-radio .formify-input,#viewport .formify-fieldset-checkbox .formify-input,#viewport .formify-fieldset-radio .formify-label,#viewport .formify-fieldset-checkbox .formify-label,#viewport .formify-scale-input,#viewport .formify-scale-option,#viewport .formify-select .formify-input,#viewport .formify-submit {  cursor: pointer;}#viewport .formify-submit {  display: block;  width: 100%;  padding: 1em;  border-radius: 3px;  background: #666;  color: #fff;  margin-left: auto;  margin-right: auto;}#viewport .formify-submit:focus {  outline-offset: -4px;  outline: 1px dotted #000;}#viewport .formify-group {  display: block;  position: static;  border-top: 1px solid #ccc;  padding: 10px 0;  margin: 0;}#viewport .formify-group [class*="formify-fieldset"] {  border-top: 0;}#viewport [class*="formify-fieldset"] {  padding: 10px 0;  margin: 0;  position: relative;  border-top: 1px solid #ccc;}#viewport .formify-scale-row.formify-scale-header {  display: none;}#viewport .formify-scale-cell {  font-weight: normal;  display: block;  margin: 1em 0;  font-size: 1em;}#viewport .formify-scale-option span {  display: inline-block;  vertical-align: middle;}#viewport .formify-scale-input {  display: inline-block;  vertical-align: middle;}@media only screen and (min-width: 320px) {  #viewport .formify-scale-body {    margin-top: 1em;  }  #viewport .formify-scale-row {    margin-top: 0.5em;    display: table;    width: 100%;    border-collapse: collapse;  }  #viewport .formify-scale-row.formify-scale-header {    display: table;    margin-top: 1em;  }  #viewport .formify-scale-cell {    display: table-cell;    width: auto;    float: none;    text-align: center;    vertical-align: middle;  }  #viewport .formify-scale-statement {    display: table-cell;    width: 50%;    text-align: left;  }  #viewport .formify-scale-option span {    display: none;  }}#viewport #view-container {  font-family: sans-serif;  font-size: 12px;  text-align: left;}#viewport #view-container textarea[class$="formify-input"] {  height: 80px;}#viewport #view-container select[class$="formify-input"] {  width: auto;  max-width: 240px;}#viewport #view-container select,#viewport #view-container textarea {  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.06) inset;  webkit-box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.06) inset;  -moz-box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.06) inset;}#viewport #view-container .formify-heading {  font-size: 1.1em;}#viewport #view-container .formify-submit {  background: #0073cf;  border-radius: 0;  font-weight: bold;  height: 35px;  line-height: 1.2em;  padding: 0;  width: 115px;}#viewport #view-container button > svg {  fill: white;  left: 10px;  position: relative;  top: 3px;}#viewport #view-container .formify-heading-required {  color: #ff0000;}#viewport #view-container fieldset[class*="formify-fieldset"][acif-required="true"][class*="invalid"] {  padding-top: 30px;}#viewport #view-container p[acif-invalid="required"] {  color: #ff0000;  font-size: 1em;  position: absolute;  top: 10px;}#viewport #view-container fieldset[class*="formify-fieldset"][acif-required="true"] > legend::after,#viewport #view-container fieldset[class*="formify-fieldset"][acif-required="true"] > label::after {  content: " *";  color: #ff0000;}#viewport #thankYou {  font-size: 16px;  text-align: center;  display: table;  height: 100%;  width: 100%;}#viewport #thankYou p.lead {  font-size: 1em;  color: #9c9a9c;  margin-bottom: 40px;}#viewport #thankYou p.lead ~ p {  margin-bottom: 10%;}#viewport #thankYou div.center-container {  display: table-cell;  vertical-align: middle;}#viewport #thankYou button {  background-color: #0073cf;  border-radius: 0;  color: white;  cursor: pointer;  font-weight: bold;  height: 35px;  width: 115px;}';
});
define('Automatons/styles/2012', ['exports', 'module'], function (exports, module) {
  'use strict';

  module.exports = '#viewport {  }#viewport body,#viewport div,#viewport dl,#viewport dt,#viewport dd,#viewport ul,#viewport ol,#viewport li,#viewport h1,#viewport h2,#viewport h3,#viewport h4,#viewport h5,#viewport h6,#viewport pre,#viewport code,#viewport form,#viewport fieldset,#viewport legend,#viewport input,#viewport textarea,#viewport p,#viewport blockquote,#viewport th,#viewport td,#viewport button,#viewport a {  margin: 0;  padding: 0;  border: none;}#viewport table {  border-collapse: collapse;  border-spacing: 0;}#viewport fieldset,#viewport img {  border: 0;}#viewport em,#viewport strong,#viewport th {  font-style: normal;  font-weight: normal;}#viewport ol,#viewport ul {  list-style: none;}#viewport th {  text-align: left;}#viewport h1,#viewport h2,#viewport h3,#viewport h4,#viewport h5,#viewport h6 {  font-size: 100%;  font-weight: normal;}#viewport abbr,#viewport acronym {  border: 0;  font-variant: normal;}#viewport sup {  vertical-align: text-top;}#viewport sub {  vertical-align: text-bottom;}#viewport input,#viewport textarea,#viewport select {  font-family: inherit;  font-size: inherit;  font-weight: inherit;}#viewport input,#viewport textarea,#viewport select {  *font-size: 100%;}#viewport .view-container {  -webkit-box-sizing: border-box;  -moz-box-sizing: border-box;  box-sizing: border-box;}#viewport *,#viewport *:before,#viewport *:after {  -webkit-box-sizing: inherit;  -moz-box-sizing: inherit;  box-sizing: inherit;}#viewport .view-container {  font-family: "cnx-medium", arial, sans-serif;  background: #ece6dd;  color: #333;}#viewport p,#viewport button {  font-size: 14px;}#viewport strong,#viewport b {  font-weight: bold;}#viewport h1 {  font-weight: bold;}#viewport h1 small {  margin-top: 15px;  display: block;  font-weight: normal;  font-size: .9em;}#viewport h1,#viewport .node-head {  font-size: 14px;  font-weight: bold;  margin-bottom: 15px;}#viewport h2,#viewport h3,#viewport .node-subhead {  font-size: 14px;  margin: 15px 0px 0px;}#viewport h3 {  font-weight: bold;}#viewport .view-container,#viewport .viewport {  height: 100%;  position: relative;}#viewport [acif-action] button,#viewport [acif-node] button,#viewport [acif-transition] button {  cursor: pointer;  background: transparent;  color: #0052c2;  text-decoration: none;  font-weight: inherit;}#viewport [acif-action] button:hover,#viewport [acif-node] button:hover,#viewport [acif-transition] button:hover,#viewport [acif-action] button:focus,#viewport [acif-node] button:focus,#viewport [acif-transition] button:focus {  text-decoration: underline;  outline: none;  color: #012169;}#viewport hr {  display: block;  height: 1px;  background: #857363;  border: 0px;  margin: 20px 0;}#viewport .has-icon {  line-height: 40px;  padding-left: 60px;  margin-left: 10px;}#viewport .breadcrumbs {  position: relative;  background-color: #D1C9C0;  line-height: 28px;  list-style: none;  padding: 0 10px;  margin: 0;  color: #333;  z-index: 100;}#viewport .breadcrumb,#viewport .breadcrumb button {  display: inline-block;  font-size: 12px;  background: transparent;}#viewport .breadcrumb button {  color: #0052c2;}#viewport .breadcrumb button:hover {  color: #012169;}#viewport .breadcrumb:first-child:after,#viewport .breadcrumb:after {  content: " / ";  margin-left: .35em;  display: inline-block;}#viewport .breadcrumb:last-child:after {  display: none;}#viewport form {  position: absolute;  top: 0;  bottom: 0;  left: 0;  right: 0;}#viewport [acif-template="2001"] + form,#viewport [acif-template="2001"] + .scroll-area,#viewport [acif-template="2001"] + .formify-form_area {  margin-top: 28px;}#viewport .formify-form_area,#viewport .scroll-area {  position: absolute;  top: 0;  bottom: 0;  left: 0;  right: 0;  overflow-y: auto;  overflow-x: hidden;  display: block;  padding: 45px 10px;}#viewport form .scroll-area,#viewport form .formify-form_area {  padding-bottom: 0px;  margin-bottom: 65px;}#viewport .footer {  display: block;  margin: 15px 0;}#viewport .scroll-area + .footer,#viewport .scroll-area + div > .footer,#viewport .formify-form_area + .footer,#viewport .formify-form_area + div > .footer {  position: absolute;  right: 0;  bottom: 0;  left: 0;  margin: 20px 10px 15px;}#viewport fieldset {  display: block;  position: relative;  margin: 15px 0;  -webkit-transition: margin .25s ease;  -moz-transition: margin .25s ease;  -ms-transition: margin .25s ease;  -o-transition: margin .25s ease;  transition: margin .25s ease;}#viewport fieldset.invalid {  margin-bottom: 25px;}#viewport label,#viewport legend {  display: block;  font-size: 13px;  color: #333;  margin: 0 0 5px;}#viewport input,#viewport select,#viewport textarea {  border: 0px;  padding: 8px 10px;  font-size: 14px;  color: #524940;}#viewport input[type="text"],#viewport input[type="email"],#viewport select,#viewport textarea {  width: 100%;}#viewport .field--radio {  vertical-align: middle;}#viewport .field--radio span {  display: inline-block;}#viewport .field--radio input {  display: inline-block;}#viewport textarea {  resize: vertical;}#viewport select {  -webkit-appearance: none;  -moz-appearance: none;  cursor: pointer;  position: relative;  background: white url(https://media-bofa.inq.com/media/sites/10004750/flash/BAC-Common-Assets/images/bac-down-chevron.png) calc(100% - 10px) calc(100% - 50%) no-repeat;  background-size: 14px;  -webkit-border-radius: 0px;  -moz-border-radius: 0px;  border-radius: 0px;}#viewport select::-ms-expand {  display: none;}#viewport .required {  color: #c41230;}#viewport .required label:first-child:after,#viewport .required legend:first-child:after {  content: " *";  color: #c41230;  display: inline;}#viewport .required.msg {  font-size: 11px;}#viewport fieldset .required.msg {  text-align: right;  margin: 0.25em 0 -1.35em;}#viewport .btn,#viewport #view-container .scroll-area ul.routing-list li button {  color: white;  background: #0073CF;  padding: 0px 15px;  display: inline-block;  line-height: 30px;  font-size: 16px;  cursor: pointer;  width: auto;  overflow: visible;}#viewport .btn:hover {  background: #0052c2;}#viewport .btn.back {  color: #0073CF;  background: white;}#viewport .btn.back:hover {  background: white;}#viewport .btn[disabled] {  cursor: default;  background-color: gray;}#viewport .routing-list {  margin: 20px 0;  text-align: left;}#viewport hr + ul,#viewport hr + .routing-list {  margin-top: 5px;}#viewport .routing-list__item {  margin: 8px 0;}#viewport .routing-list__item button {  text-align: left;}#viewport .outcome-wrapper {  padding: 15px 10px;}#viewport .outcome-wrapper p {  margin: 15px 0 10px;}#viewport .bold {  font-weight: bold;}#viewport #view-container h1 {  line-height: 1.4em;  font-size: 1.3em;}#viewport #view-container .scroll-area .heading {  text-align: center;}#viewport #view-container .scroll-area ul.routing-list {  display: flex;  justify-content: center;}#viewport #view-container .scroll-area ul.routing-list li {  width: 49%;  text-align: center;  margin-right: 1%;}#viewport #view-container .scroll-area ul.routing-list li:last-child {  margin-right: 0;  margin-left: 1%;}#viewport #view-container .scroll-area ul.routing-list li button {  background: #c41230;  margin-right: 1%;  text-align: center;  padding: 6px;  line-height: 1.3em;  width: 100%;  height: 100%;}';
});
define("Automatons/templates/2001", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<ol role=\"navigation\" class=\"breadcrumbs\"><% if (api.automaton.id === 2009) { %>\t<% _.each(breadcrumbs, function(node, i) { %>\t    <% if (node.breadcrumb) { %>\t        <% if (i === 0) { %>\t        <li class=\"breadcrumb\" acif-node=\"<%= node.id %>\">Home</li><span></span>\t        <% } else if (i === 1) { %>\t        <li class=\"breadcrumb\" acif-node=\"<%= node.id %>\"><%= api.forms.account_type %></li>\t        <% } else if (i === breadcrumbs.length - 1) { %>\t        <li class=\"breadcrumb\"><%= node.breadcrumb %></li>\t        <% } else { %>\t        <li class=\"breadcrumb\" acif-node=\"<%= node.id %>\"><%= node.breadcrumb %></li>\t        <% } %>\t    <% } %>\t<% }); %><% } else { %>\t<% _.each(breadcrumbs, function(node, i) { %>\t    <% if (node.breadcrumb) { %>\t        <% if (i === 0) { %>\t        <li class=\"breadcrumb\" acif-node=\"<%= node.id %>\">Home</li>\t        <% } else if (i === breadcrumbs.length - 1) { %>\t        <li class=\"breadcrumb\"><%= node.breadcrumb %></li>\t        <% } else { %>\t        <li class=\"breadcrumb\" acif-node=\"<%= node.id %>\"><%= node.breadcrumb %></li>\t        <% } %>\t    <% } %>\t<% }); %><% } %></ol>";
});
define("Automatons/templates/2002", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<ul class=\"routing-list\">    <% _.each(nodes, function(node) { %>    \t<% if (node.node_transition) { %>            <li class=\"routing-list__item\" acif-transition=\"<%= node.node_transition %>\"><%= node.label %></li>    \t<% } else if (node.node_id) { %>            <li class=\"routing-list__item\" acif-node=\"<%= node.node_id %>\"><%= node.label %></li>    \t<% } else { %>            <li class=\"routing-list__item\"><%= node.label %></li>    \t<% } %>    <% }); %></ul>";
});
define("Automatons/templates/2003", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<footer class=\"footer\">    <button class=\"btn\" type=\"submit\" data-toggle-disabled-submit>Start Chat</button></footer>";
});
define("Automatons/templates/2004", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<%    form.heading = form.heading || 'To help us serve you better, please provide some information before we begin your chat.';    form.transition = form.transition || 'submit';    form['submit'] = form['submit']  || 'Start Chat';%><form acif-next-transition=\"<%= form.transition %>\" <%= form['data-submit-on-click'] %> novalidate>   <div class=\"scroll-area\" role=\"main\">    <div acif-aria-speak>        <h1><%= form.heading %></h1>        <h2 class=\"required msg\">Required items indicated with *.</h2>   </div>    <% _.each(form.fieldsets, function(fieldset) {        fieldset.label = fieldset.label || fieldset.name;        fieldset.type = fieldset.type || 'text';        fieldset['default'] = fieldset['default'] || 'Select One&#8230;';        fieldset.autoscroll_attr = (fieldset.autoscroll) ? ' data-scroll-on-change ' : '';        fieldset.required = (fieldset.required !== false) ? true : false;        fieldset.required_error = fieldset.required_error || fieldset.label + ' is a required field.';        fieldset.required_attr = (fieldset.required) ? ' required class=\"required\" ' : '';        fieldset.tagname = (fieldset.type.match(/\\b(radio|checkbox)\\b/)) ? 'legend' : 'label';        fieldset.placeholder_attr = (fieldset.placeholder) ? ' placeholder=\"' + fieldset.placeholder + '\" ' : '';        fieldset.dynamic = fieldset.dynamic || '';        fieldset.dynamic.check = fieldset.dynamic.check || '';        fieldset.dynamic['if'] = fieldset.dynamic['if'] || 'equals';        fieldset.dynamic.value = fieldset.dynamic.value || '';        fieldset.dynamic_value_prop = (fieldset.dynamic['if'] === 'equals') ? ' acif-base-field-value' : ' acif-base-field-value-' + fieldset.dynamic['if'];        fieldset.dynamic_check_attr = (fieldset.dynamic) ? ' acif-base-field-name=\"' + fieldset.dynamic.check + '\" ' : '';        fieldset.dynamic_value_attr = (fieldset.dynamic) ? fieldset.dynamic_value_prop + '=\"' + fieldset.dynamic.value + '\" ' : '';        fieldset.dynamic_attr = fieldset.dynamic_check_attr + fieldset.dynamic_value_attr;    %>    <fieldset name=\"<%= fieldset.name %>\" data-field-type=\"<%= fieldset.type %>\" <%= fieldset.required_attr + fieldset.dynamic_attr + fieldset.autoscroll_attr %>>        <%= '<' + fieldset.tagname + '>' + fieldset.label + '</' + fieldset.tagname + '>' %>        <% if (fieldset.type.match(/\\b(text|email)\\b/)) { %>            <input type=\"<%= fieldset.type %>\" <%= fieldset.placeholder_attr %> />        <% } else if (fieldset.type === 'textarea') { %>            <textarea <%= fieldset.placeholder_attr %>></textarea>        <% } else if (fieldset.type === 'select') { %>            <select>                <option value=\"\"><%= fieldset['default'] %></option>                <% _.each(fieldset.options, function(option) { %>                    <% if (option.value) { %>                        <option value=\"<%= option.value %>\"><%= option.name %></option>                    <% } else { %>                        <option><%= option %></option>                    <% } %>                <% }); %>            </select>        <% } else if (fieldset.type.match(/\\b(radio|checkbox)\\b/)) { %>            <% _.each(fieldset.options, function(option) { %>                <label>                    <input type=\"<%= fieldset.type %>\" name=\"<%= fieldset.name %>\" value=\"<%= option %>\" />                    <span><%= option %></span>                </label>            <% }); %>        <% } %>        <% if (fieldset.required) { %>            <p acif-invalid=\"required\" class=\"required msg\"><%= fieldset.required_error %></p>            <% if (fieldset.type === 'email') { %>                <p acif-invalid=\"pattern\" class=\"required msg\">Please enter a valid email address.</p>            <% } %>        <% } %>    </fieldset><% }); %>    <p>      <%= form.footing %>    </p>    </div>    <footer class=\"footer\">        <button class=\"btn\" type=\"submit\" data-toggle-disabled-submit><%= form['submit']%></button>    </footer></form>";
});
define("Automatons/templates/2005", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<%    //    // Formify v2.2.0    // - Any Formify variables created by this template are in underscore format    // - Any Formify variables defined by the data model are in camelCase    //    formify = formify || {};    formify.next = formify.next || 'submit';    formify._next_isNumber = (_.isNumber(formify.next));    formify._next_type = (formify._next_isNumber) ? 'data-next-node' : 'data-next-transition';    formify._next_attr = formify._next_type + '=\"' + formify.next + '\" ';    formify.heading = formify.heading || 'This is a custom heading';    formify.submit = formify.submit  || 'Start Chat';    formify.toggle = formify.toggle || false;    formify._toggle_attr = (formify.toggle) ? ' data-toggle-disabled-submit ' : '';    formify.submitOnClick = formify.submitOnClick || false;    formify._submitOnClick_attr = (formify.submitOnClick) ? ' data-submit-on-click ' : '';    formify._attrs = formify._next_attr + formify._submitOnClick_attr;%><form <%= formify._attrs %> novalidate>\t<div class=\"formify-form_area\" role=\"main\">    <header acif-aria-speak>        <h1><%= formify.heading %></h1>        <h2 class=\"required msg\">Required items indicated with *.</h2>   </header>    <% _.each(formify.fields, function(field) {        field.validate = field.validate || {};        field.label = field.label || field.name;        field.type = field.type || 'text';        field._type_attr = (field.type === 'scale') ? 'radio' : field.type;        // Setting: data-scroll-on-change        field.autoscroll = field.autoscroll || false;        field._autoscroll_attr = (field.autoscroll) ? ' data-scroll-on-change ' : '';        // Setting: mask fields in transcript        field.masked = field.masked || false;        field._masked_attr =  (field.masked) ? ' data-masked ' : '';        // Setting: omit fields from datapass        field.omit = field.omit || false;        field._omit_attr = (field.omit) ? ' data-omit-datapass ' : '';        // Set input placeholder or default dropdown value.        field.placeholder = (field.type === 'select') ? (field.placeholder || 'Select One&#8230;') : (field.placeholder || '');        field._placeholder_attr = (field.placeholder) ? ' placeholder=\"' + field.placeholder + '\" ' : '';        field.multiple = (field.type === 'select' && field.validate.min) ? true : field.multiple || false;        field._multiple_attr = (field.multiple) ? ' multiple ' : '';        // Conditional Field logic        field.dynamic = field.dynamic || '';        field.dynamic.check = field.dynamic.check || '';        field.dynamic.logic = field.dynamic.logic || 'equals';        field.dynamic.value = field.dynamic.value || '';        field._dynamic_value_prop = (field.dynamic.logic === 'equals') ? ' acif-base-field-value' : ' acif-base-field-value-' + field.dynamic.logic;        field._dynamic_check_attr = (field.dynamic) ? ' acif-base-field-name=\"' + field.dynamic.check + '\" ' : '';        field._dynamic_value_attr = (field.dynamic) ? field._dynamic_value_prop + '=\"' + field.dynamic.value + '\" ' : '';        field._dynamic_attr = field._dynamic_check_attr + field._dynamic_value_attr;        // Field Validation: Error Types        field.required = field.validate.required || field.required || true;        field.validate._error_types = ['required','min','max','pattern','minlength','maxlength'];        field.validate._html = '';        field.validate.required = field.required;        field.validate.min = field.validate.min || false;        field.validate.max = field.validate.max || false;        field.validate.pattern = field.validate.pattern || false;        field.validate.minlength = field.validate.minlength || false;        field.validate.maxlength = field.validate.maxlength || false;        // Field Validation: Error Messages & Defaults        field.validate.requiredError = field.validate.requiredError || field.requiredError || 'This is a required field';        field.validate.minError = field.validate.minError || 'You must select at least ' + field.validate.min + ' options.';        field.validate.maxError = field.validate.maxError || 'You cannot select more than ' + field.validate.min + ' options.';        field.validate.patternError = field.validate.patternError || 'Please enter a valid ' + field.label + '.';        field.validate.minlengthError = field.validate.minlengthError || field.label + ' must be at least ' + field.validate.minlength  + ' characters.';        field.validate.maxlengthError = field.validate.maxlengthError || field.label + ' must be at less than ' + field.validate.maxlength  + ' characters.';        // Field Validation: Assemble error message tags for field        // Then assemble lists of fieldset-level and field-level attributes that need to be applied, and add them to the appropriate places.        // Call validation message chunk of code at the bottom of the page.        _.each(field.validate._error_types, function(_error_type) {          if(field.validate[_error_type]) {            _error_name = _error_type + 'Error';            field.validate._html += '<p acif-invalid=\"' + _error_type + '\">';            field.validate._html += field.validate[_error_name];            field.validate._html += '</p>\\n';          }        });        field._required_attr = (field.required) ? ' required class=\"required\" ' : '';        field._pattern_attr = (field.validate.pattern) ? ' pattern=\"' + field.validate.pattern + '\" ' : '';        field._min_attr = (field.validate.min) ? ' min=\"' + field.validate.min + '\" ' : '';        field._max_attr = (field.validate.max) ? ' max=\"' + field.validate.max + '\" ' : '';        field._minlength_attr = (field.validate.minlength) ? ' minlength=\"' + field.validate.minlength + '\" ' : '';        field._maxlength_attr = (field.validate.maxlength) ? ' maxlength=\"' + field.validate.maxlength + '\" ' : '';        field.validate._attrs = field._pattern_attr + field._min_attr + field._max_attr + field._minlength_attr + field._maxlength_attr;        // Field Groups: If current field is listed in a group...        // 1. Capture name of parent group        // 2. Capture field's position in group        // 3. Capture total items in group        // 4. Capture group heading        field._group = false;        field._group_heading = false;        field._order = false;        field._order_last = false;        _.each(formify.groups, function(group) {            order = _.indexOf(group.items, field.name);            if (order >= 0) {                field._group = group.name;                field._order = order;                field._order_last = group.items.length;                field._group_heading = group.heading;            }        });        // Put attributes with same destination into a single variable        field._attrs = field._required_attr + field._dynamic_attr + field._autoscroll_attr + field._masked_attr + field._omit_attr;    %>    <% if (field._order === 0) { %>        <div data-fieldset-group=\"<%= field.group %>\">        <h1 class=\"formify-group_heading\"><%= field._group_heading %></h1>    <% } %>    <% if (!field.scale) { %>        <fieldset name=\"<%= field.name %>\" data-field-type=\"<%= field.type_attr %>\" <%= field._attrs %>>    <% } %>    <% if (field.type === 'text') { %>        <label><%= field.label %></label>        <input type=\"<%= field.type %>\" <%= field.validate._attrs + field._placeholder_attr %> />    <% } else if (field.type === 'email') { %>        <label><%= field.label %></label>        <input type=\"<%= field.type %>\" <%= field.validate._attrs + field._placeholder_attr %> />    <% } else if (field.type === 'textarea') { %>        <label><%= field.label %></label>        <textarea <%= field._placeholder_attr %>></textarea>    <% } else if (field.type === 'select') { %>        <label><%= field.label %></label>        <select <%= field._multiple_attr + field._min_attr %> >          <% if (!field.multiple) { %>            <option value=\"\"><%= field.placeholder %></option>          <% } %>          <% _.each(field.options, function(option) { %>              <% if (option.value) { %>                  <option value=\"<%= option.value %>\"><%= option.name %></option>              <% } else { %>                  <option><%= option %></option>              <% } %>          <% }); %>        </select>    <% } else if (field.type === 'radio') { %>        <% if (field.scale) { %>                <ul class=\"formify-scale_headings\">                <% _.each(field.scale, function(scaleItem) {%>                    <li><%= scaleItem %></li>                <% }); %>                </ul>                <% _.each(field.options, function(option, i) { %>                    <fieldset type=\"radio\" name=\"<%= field.name + ' - Q' + (i++) %>\" <%= field._required_attr %> >                        <legend><%= option %></legend>                        <% _.each(field.scale, function(scaleItem) {%>                            <label class=\"formify-scale_bubble\">                                <input value=\"<%= scaleItem %>\" />                                <%= scaleItem %>                            </label>                        <% }); %>                    </fieldset>                <% }); %>        <% } else { %>            <legend><%= field.label %></legend>            <% _.each(field.options, function(option) { %>                <label>                    <input type=\"<%= field.type %>\" name=\"<%= field.name %>\" value=\"<%= option %>\" />                    <%= option %>                </label>            <% }); %>        <% } %>    <% } else if (field.type === 'checkbox') { %>        <legend><%= field.label %></legend>        <% _.each(field.options, function(option) { %>            <label>                <input type=\"<%= field.type %>\" name=\"<%= field.name %>\" value=\"<%= option %>\" />                <%= option %>            </label>        <% }); %>    <% } %>    <% if (field.required) { %>        <%= field.validate._html %>    <% } %>    <% if (!field.scale) { %> </fieldset> <% } %>    <% if (field._order === field._order_last - 1) { %> </div> <% } %><% }); %>    </div>    <% if (!formify.submitOnClick) { %>    <footer class=\"footer\">        <button class=\"btn\" type=\"submit\" <%= formify._toggle_attr %>> <%= formify.submit %> </button>    </footer>    <% } %></form>";
});
define("Automatons/templates/2006", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<ul><% _.each(fieldsets.scale, function(scale_item) {%>\t    <li><%= scale_item %></li><% }); %></ul>";
});
define("Automatons/templates/2007", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<%    //    // Formify v3.0.0    //    formify = formify || {};    formify.next = formify.next || 'submit';    formify._next_isNumber = (_.isNumber(formify.next));    formify._next_type = (formify._next_isNumber) ? 'data-next-node' : 'data-next-transition';    formify._next_attr = formify._next_type + '=\"' + formify.next + '\" ';    formify.heading = formify.heading || 'This is a custom heading';    formify.submit = formify.submit  || 'Start Chat';    formify.toggle = formify.toggle || false;    formify._toggle_attr = (formify.toggle) ? ' data-toggle-disabled-submit ' : '';    formify.submitOnClick = formify.submitOnClick || false;    formify._submitOnClick_attr = (formify.submitOnClick) ? ' data-submit-on-click ' : '';    formify._attrs = formify._next_attr + formify._submitOnClick_attr;%><form <%= formify._attrs %> novalidate>\t<div class=\"formify-form_area\" role=\"main\">    <header acif-aria-speak>        <h1><%= formify.heading %></h1>        <h2 class=\"required msg\">Required items indicated with *.</h2>   </header>    <% _.each(formify.fields, function(field) {        field.validate = field.validate || {};        field.label = field.label || field.name;        field.type = field.type || 'text';        field._type_attr = (field.type === 'scale') ? 'radio' : field.type;        // Setting: data-scroll-on-change        field.autoscroll = field.autoscroll || false;        field._autoscroll_attr = (field.autoscroll) ? ' data-scroll-on-change ' : '';        // Setting: mask fields in transcript        field.masked = field.masked || false;        field._masked_attr =  (field.masked) ? ' data-masked ' : '';        // Setting: omit fields from datapass        field.omit = field.omit || false;        field._omit_attr = (field.omit) ? ' data-omit-datapass ' : '';        // Set input placeholder or default dropdown value.        field.placeholder = (field.type === 'select') ? (field.placeholder || 'Select One&#8230;') : (field.placeholder || '');        field._placeholder_attr = (field.placeholder) ? ' placeholder=\"' + field.placeholder + '\" ' : '';        field.multiple = (field.type === 'select' && field.validate.min) ? true : field.multiple || false;        field._multiple_attr = (field.multiple) ? ' multiple ' : '';        // Conditional Field logic        field.dynamic = field.dynamic || '';        field.dynamic.check = field.dynamic.check || '';        field.dynamic.logic = field.dynamic.logic || 'equals';        field.dynamic.value = field.dynamic.value || '';        field._dynamic_value_prop = (field.dynamic.logic === 'equals') ? ' acif-base-field-value' : ' acif-base-field-value-' + field.dynamic.logic;        field._dynamic_check_attr = (field.dynamic) ? ' acif-base-field-name=\"' + field.dynamic.check + '\" ' : '';        field._dynamic_value_attr = (field.dynamic) ? field._dynamic_value_prop + '=\"' + field.dynamic.value + '\" ' : '';        field._dynamic_attr = field._dynamic_check_attr + field._dynamic_value_attr;        // Field Validation: Error Types        field.required = field.validate.required || field.required || true;        field.validate._error_types = ['required','min','max','pattern','minlength','maxlength'];        field.validate._html = '';        field.validate.required = field.required;        field.validate.min = field.validate.min || false;        field.validate.max = field.validate.max || false;        field.validate.pattern = field.validate.pattern || false;        field.validate.minlength = field.validate.minlength || false;        field.validate.maxlength = field.validate.maxlength || false;        // Field Validation: Error Messages & Defaults        field.validate.requiredError = field.validate.requiredError || field.requiredError || 'This is a required field';        field.validate.minError = field.validate.minError || 'You must select at least ' + field.validate.min + ' options.';        field.validate.maxError = field.validate.maxError || 'You cannot select more than ' + field.validate.min + ' options.';        field.validate.patternError = field.validate.patternError || 'Please enter a valid ' + field.label + '.';        field.validate.minlengthError = field.validate.minlengthError || field.label + ' must be at least ' + field.validate.minlength  + ' characters.';        field.validate.maxlengthError = field.validate.maxlengthError || field.label + ' must be at less than ' + field.validate.maxlength  + ' characters.';        // Field Validation: Assemble error message tags for field        // Then assemble lists of fieldset-level and field-level attributes that need to be applied, and add them to the appropriate places.        // Call validation message chunk of code at the bottom of the page.        _.each(field.validate._error_types, function(_error_type) {          if(field.validate[_error_type]) {            _error_name = _error_type + 'Error';            field.validate._html += '<p acif-invalid=\"' + _error_type + '\">';            field.validate._html += field.validate[_error_name];            field.validate._html += '</p>\\n';          }        });        field._required_attr = (field.required) ? ' required class=\"required\" ' : '';        field._pattern_attr = (field.validate.pattern) ? ' pattern=\"' + field.validate.pattern + '\" ' : '';        field._min_attr = (field.validate.min) ? ' min=\"' + field.validate.min + '\" ' : '';        field._max_attr = (field.validate.max) ? ' max=\"' + field.validate.max + '\" ' : '';        field._minlength_attr = (field.validate.minlength) ? ' minlength=\"' + field.validate.minlength + '\" ' : '';        field._maxlength_attr = (field.validate.maxlength) ? ' maxlength=\"' + field.validate.maxlength + '\" ' : '';        field.validate._attrs = field._pattern_attr + field._min_attr + field._max_attr + field._minlength_attr + field._maxlength_attr;        // Field Groups: If current field is listed in a group...        // 1. Capture name of parent group        // 2. Capture field's position in group        // 3. Capture total items in group        // 4. Capture group heading        field._group = false;        field._group_heading = false;        field._order = false;        field._order_last = false;        _.each(formify.groups, function(group) {            order = _.indexOf(group.items, field.name);            if (order >= 0) {                field._group = group.name;                field._order = order;                field._order_last = group.items.length;                field._group_heading = group.heading;            }        });        // Put attributes with same destination into a single variable        field._attrs = field._required_attr + field._dynamic_attr + field._autoscroll_attr + field._masked_attr + field._omit_attr;    %>    <% if (field._order === 0) { %>        <div data-fieldset-group=\"<%= field.group %>\">        <h1 class=\"formify-group_heading\"><%= field._group_heading %></h1>    <% } %>    <% if (!field.scale) { %>        <fieldset name=\"<%= field.name %>\" data-field-type=\"<%= field.type_attr %>\" <%= field._attrs %>>    <% } %>    <% if (field.type === 'text') { %>        <label><%= field.label %></label>        <input type=\"<%= field.type %>\" <%= field.validate._attrs + field._placeholder_attr %> />    <% } else if (field.type === 'email') { %>        <label><%= field.label %></label>        <input type=\"<%= field.type %>\" <%= field.validate._attrs + field._placeholder_attr %> />    <% } else if (field.type === 'textarea') { %>        <label><%= field.label %></label>        <textarea <%= field._placeholder_attr %>></textarea>    <% } else if (field.type === 'select') { %>        <label><%= field.label %></label>        <select <%= field._multiple_attr + field._min_attr %> >          <% if (!field.multiple) { %>            <option value=\"\"><%= field.placeholder %></option>          <% } %>          <% _.each(field.options, function(option) { %>              <% if (option.value) { %>                  <option value=\"<%= option.value %>\"><%= option.name %></option>              <% } else { %>                  <option><%= option %></option>              <% } %>          <% }); %>        </select>    <% } else if (field.type === 'radio') { %>        <% if (field.scale) { %>                <ul class=\"formify-scale_headings\">                <% _.each(field.scale, function(scaleItem) {%>                    <li><%= scaleItem %></li>                <% }); %>                </ul>                <% _.each(field.options, function(option, i) { %>                    <fieldset type=\"radio\" name=\"<%= field.name + ' - Q' + (i++) %>\" <%= field._required_attr %> >                        <legend><%= option %></legend>                        <% _.each(field.scale, function(scaleItem) {%>                            <label class=\"formify-scale_bubble\">                                <input value=\"<%= scaleItem %>\" />                                <%= scaleItem %>                            </label>                        <% }); %>                    </fieldset>                <% }); %>        <% } else { %>            <legend><%= field.label %></legend>            <% _.each(field.options, function(option) { %>                <label>                    <input type=\"<%= field.type %>\" name=\"<%= field.name %>\" value=\"<%= option %>\" />                    <%= option %>                </label>            <% }); %>        <% } %>    <% } else if (field.type === 'checkbox') { %>        <legend><%= field.label %></legend>        <% _.each(field.options, function(option) { %>            <label>                <input type=\"<%= field.type %>\" name=\"<%= field.name %>\" value=\"<%= option %>\" />                <%= option %>            </label>        <% }); %>    <% } %>    <% if (field.required) { %>        <%= field.validate._html %>    <% } %>    <% if (!field.scale) { %> </fieldset> <% } %>    <% if (field._order === field._order_last - 1) { %> </div> <% } %><% }); %>    </div>    <% if (!formify.submitOnClick) { %>    <footer class=\"footer\">        <button class=\"btn\" type=\"submit\" <%= formify._toggle_attr %>> <%= formify.submit %> </button>    </footer>    <% } %></form>";
});
define("Automatons/templates/2008", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<%    formify.heading = formify.heading || 'This is a custom heading';    formify.next = formify.next || 'submit';    formify.next_isNumber = (_.isNumber(formify.next));    formify.next_type = (formify.next_isNumber) ? 'data-next-node' : 'data-next-transition';    formify.next_attr = formify.next_type + '=\"' + formify.next + '\" ';    formify.submit = formify.submit  || 'Start Chat';    formify.toggle = formify.toggle || false;    formify.toggle_attr = (formify.toggle) ? ' data-toggle-disabled-submit ' : '';    formify.submitOnClick = formify.submitOnClick || false;    formify.submitOnClick_attr = (formify.submitOnClick) ? ' data-submit-on-click ' : '';    formify.all_attr = formify.next_attr + formify.submitOnClick_attr;%><form <%= formify.all_attr %> novalidate>\t<div class=\"formify-form_area\" role=\"main\">    <header acif-aria-speak>        <h1><%= formify.heading %></h1>        <h2 class=\"required msg\">Required items indicated with *.</h2>   </header>    <% _.each(formify.fieldsets, function(fieldset) {        fieldset.label = fieldset.label || fieldset.name;        fieldset.type = fieldset.type || 'text';        fieldset.type_attr = (fieldset.type === 'scale') ? 'radio' : fieldset.type;        fieldset.autoscroll = fieldset.autoscroll || false;        fieldset.autoscroll_attr = (fieldset.autoscroll) ? ' data-scroll-on-change ' : '';        fieldset.masked = fieldset.masked || false;        fieldset.masked_attr =  (fieldset.masked) ? ' data-masked ' : '';        fieldset.omit = fieldset.omit || false;        fieldset.omit_attr = (fieldset.omit) ? ' data-omit-datapass ' : '';        fieldset.required = fieldset.required || true;        fieldset.required_error = fieldset.required_error || 'This is a required field.';        fieldset.required_attr = (fieldset.required) ? ' required class=\"required\" ' : '';        fieldset.placeholder = (fieldset.type === 'select') ? (fieldset.placeholder || 'Select One&#8230;') : (fieldset.placeholder || '');        fieldset.placeholder_attr = (fieldset.placeholder) ? ' placeholder=\"' + fieldset.placeholder + '\" ' : '';        fieldset.dynamic = fieldset.dynamic || '';        fieldset.dynamic.check = fieldset.dynamic.check || '';        fieldset.dynamic.logic = fieldset.dynamic.logic || 'equals';        fieldset.dynamic.value = fieldset.dynamic.value || '';        fieldset.dynamic_value_prop = (fieldset.dynamic.logic === 'equals') ? ' acif-base-field-value' : ' acif-base-field-value-' + fieldset.dynamic.logic;        fieldset.dynamic_check_attr = (fieldset.dynamic) ? ' acif-base-field-name=\"' + fieldset.dynamic.check + '\" ' : '';        fieldset.dynamic_value_attr = (fieldset.dynamic) ? fieldset.dynamic_value_prop + '=\"' + fieldset.dynamic.value + '\" ' : '';        fieldset.dynamic_attr = fieldset.dynamic_check_attr + fieldset.dynamic_value_attr;        fieldset.group = false;        fieldset.group_heading = false;        fieldset.index = false;        fieldset.index_last = false;        _.each(formify.groups, function(group) {            index = _.indexOf(group.items, fieldset.name);            if (index >= 0) {                fieldset.group = group.name;                fieldset.index = index;                fieldset.index_last = group.items.length;                fieldset.group_heading = group.heading;            }        });        fieldset.all_attr = fieldset.required_attr + fieldset.dynamic_attr + fieldset.autoscroll_attr + fieldset.masked_attr + fieldset.omit_attr;    %>    <% if (fieldset.index === 0) { %>        <div data-fieldset-group=\"<%= fieldset.group %>\">        <h1 class=\"formify-group_heading\"><%= fieldset.group_heading %></h1>    <% } %>    <% if (!fieldset.scale) { %>        <fieldset name=\"<%= fieldset.name %>\" data-field-type=\"<%= fieldset.type_attr %>\" <%= fieldset.all_attr %>>    <% } %>    <% if (fieldset.type === 'text') { %>        <label><%= fieldset.label %></label>        <input type=\"<%= fieldset.type %>\" <%= fieldset.placeholder_attr %> />    <% } else if (fieldset.type === 'email') { %>        <label><%= fieldset.label %></label>        <input type=\"<%= fieldset.type %>\" <%= fieldset.placeholder_attr %> />    <% } else if (fieldset.type === 'textarea') { %>        <label><%= fieldset.label %></label>        <textarea <%= fieldset.placeholder_attr %>></textarea>    <% } else if (fieldset.type === 'select') { %>        <label><%= fieldset.label %></label>        <select>          <option value=\"\"><%= fieldset.placeholder %></option>          <% _.each(fieldset.options, function(option) { %>              <% if (option.value) { %>                  <option value=\"<%= option.value %>\"><%= option.name %></option>              <% } else { %>                  <option><%= option %></option>              <% } %>          <% }); %>        </select>    <% } else if (fieldset.type === 'radio') { %>        <% if (fieldset.scale) { %>                <ul class=\"formify-scale_headings\">                <% _.each(fieldset.scale, function(scale_item) {%>                    <li><%= scale_item %></li>                <% }); %>                </ul>                <% _.each(fieldset.options, function(option, i) { %>                    <fieldset type=\"radio\" name=\"<%= fieldset.name + ' - Q' + (i++) %>\" required>                        <legend><%= option %></legend>                        <% _.each(fieldset.scale, function(scale_item) {%>                            <label class=\"formify-scale_bubble\">                                <input value=\"<%= scale_item %>\" />                                <%= scale_item %>                            </label>                        <% }); %>                    </fieldset>                <% }); %>        <% } else { %>            <legend><%= fieldset.label %></legend>            <% _.each(fieldset.options, function(option) { %>                <label>                    <input type=\"<%= fieldset.type %>\" name=\"<%= fieldset.name %>\" value=\"<%= option %>\" />                    <%= option %>                </label>            <% }); %>        <% } %>    <% } else if (fieldset.type === 'checkbox') { %>        <legend><%= fieldset.label %></legend>        <% _.each(fieldset.options, function(option) { %>            <label>                <input type=\"<%= fieldset.type %>\" name=\"<%= fieldset.name %>\" value=\"<%= option %>\" />                <%= option %>            </label>        <% }); %>    <% } %>    <% if (fieldset.required) { %>        <p acif-invalid=\"required\" class=\"required msg\"><%= fieldset.required_error %></p>        <% if (fieldset.type === 'email') { %>            <p acif-invalid=\"pattern\" class=\"required msg\">              Please enter a valid email address.            </p>        <% } %>    <% } %>    <% if (!fieldset.scale) { %></fieldset><% } %>    <% if (fieldset.index === fieldset.index_last - 1) { %></div><% } %><% }); %>    </div>    <% if (!formify.submitOnClick) { %>    <footer class=\"footer\">        <button class=\"btn\" type=\"submit\" <%= formify.toggle_attr %>><%= formify.submit %></button>    </footer>    <% } %></form>";
});
define("Automatons/templates/2009", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<%    formify.heading = formify.heading || 'To help us serve you better, please provide some information before we begin your chat.';    formify.next = formify.next || 'submit';    formify.next_attr = (_.isNumber(formify.next)) ? ' acif-next-node=\"' + formify.next + '\" ': ' acif-next-transition=\"' + formify.next + '\" ';    formify.submit = formify.submit  || 'Start Chat';    formify.toggle = formify.toggle || false;    formify.toggle_attr = (formify.toggle) ? ' data-toggle-disabled-submit ' : '';%><form <%= formify.next_attr %> novalidate>\t<div class=\"formify-form_area\" role=\"main\">    <header acif-aria-speak>        <h1><%= formify.heading %></h1>        <h2 class=\"required msg\">Required items indicated with *.</h2>   </header>    <% _.each(formify.fieldsets, function(fieldset) {        fieldset.label = fieldset.label || fieldset.name;        fieldset.type = fieldset.type || 'text';        fieldset.type_attr = (fieldset.type === 'scale') ? 'radio' : fieldset.type;        fieldset.placeholder = fieldset.placeholder || 'Select One&#8230;';        fieldset.autoscroll = fieldset.autoscroll || false;        fieldset.autoscroll_attr = (fieldset.autoscroll) ? ' data-scroll-on-change ' : '';        fieldset.masked = fieldset.masked || false;        fieldset.masked_attr =  (fieldset.masked) ? ' data-masked ' : '';        fieldset.omit = fieldset.omit || false;        fieldset.omit_attr = (fieldset.omit) ? ' data-omit-datapass ' : '';        fieldset.required = fieldset.required || true;        fieldset.required_error = fieldset.required_error || 'This is a required field.';        fieldset.required_attr = (fieldset.required) ? ' required class=\"required\" ' : '';        fieldset.placeholder_attr = (fieldset.placeholder) ? ' placeholder=\"' + fieldset.placeholder + '\" ' : '';        fieldset.dynamic = fieldset.dynamic || '';        fieldset.dynamic.check = fieldset.dynamic.check || '';        fieldset.dynamic.logic = fieldset.dynamic.logic || 'equals';        fieldset.dynamic.value = fieldset.dynamic.value || '';        fieldset.dynamic_value_prop = (fieldset.dynamic.logic === 'equals') ? ' acif-base-field-value' : ' acif-base-field-value-' + fieldset.dynamic.logic;        fieldset.dynamic_check_attr = (fieldset.dynamic) ? ' acif-base-field-name=\"' + fieldset.dynamic.check + '\" ' : '';        fieldset.dynamic_value_attr = (fieldset.dynamic) ? fieldset.dynamic_value_prop + '=\"' + fieldset.dynamic.value + '\" ' : '';        fieldset.dynamic_attr = fieldset.dynamic_check_attr + fieldset.dynamic_value_attr;        fieldset.group = false;        fieldset.group_heading = false;        fieldset.index = false;        fieldset.index_last = false;        _.each(formify.groups, function(group) {            index = _.indexOf(group.items, fieldset.name);            if (index >= 0) {                fieldset.group = group.name;                fieldset.index = index;                fieldset.index_last = group.items.length;                fieldset.group_heading = group.heading;            }        });        fieldset.all_attr = fieldset.required_attr + fieldset.dynamic_attr + fieldset.autoscroll_attr + fieldset.masked_attr + fieldset.omit_attr;    %>    <% if (fieldset.index === 0) { %>        <div data-fieldset-group=\"<%= fieldset.group %>\">        <h1 class=\"formify-group_heading\"><%= fieldset.group_heading %></h1>    <% } %>    <% if (!fieldset.scale) { %>        <fieldset name=\"<%= fieldset.name %>\" data-field-type=\"<%= fieldset.type_attr %>\" <%= fieldset.all_attr %>>    <% } %>    <% if (fieldset.type === 'text') { %>        <label><%= fieldset.label %></label>        <input type=\"<%= fieldset.type %>\" <%= fieldset.placeholder_attr %> />    <% } else if (fieldset.type === 'email') { %>        <label><%= fieldset.label %></label>        <input type=\"<%= fieldset.type %>\" <%= fieldset.placeholder_attr %> />    <% } else if (fieldset.type === 'textarea') { %>        <label><%= fieldset.label %></label>        <textarea <%= fieldset.placeholder_attr %>></textarea>    <% } else if (fieldset.type === 'select') { %>        <label><%= fieldset.label %></label>        <select>          <option value=\"\"><%= fieldset.default %></option>          <% _.each(fieldset.options, function(option) { %>              <% if (option.value) { %>                  <option value=\"<%= option.value %>\"><%= option.name %></option>              <% } else { %>                            <option><%= option %></option>              <% } %>          <% }); %>        </select>    <% } else if (fieldset.type === 'radio') { %>        <% if (fieldset.scale) { %>                <ul class=\"formify-scale_headings\">                <% _.each(fieldset.scale, function(scale_item) {%>                    <li><%= scale_item %></li>                <% }); %>                </ul>                <% _.each(fieldset.options, function(option, i) { %>                    <fieldset type=\"radio\" name=\"<%= fieldset.name + ' - Q' + (i++) %>\" required>                        <legend><%= option %></legend>                        <% _.each(fieldset.scale, function(scale_item) {%>                            <label class=\"formify-scale_bubble\">                                <input value=\"<%= scale_item %>\" />                                <%= scale_item %>                            </label>                        <% }); %>                    </fieldset>                <% }); %>        <% } else { %>            <legend><%= fieldset.label %></legend>            <% _.each(fieldset.options, function(option) { %>                <label>                    <input type=\"<%= fieldset.type %>\" name=\"<%= fieldset.name %>\" value=\"<%= option %>\" />                    <%= option %>                </label>            <% }); %>        <% } %>    <% } else if (fieldset.type === 'checkbox') { %>        <legend><%= fieldset.label %></legend>        <% _.each(fieldset.options, function(option) { %>            <label>                <input type=\"<%= fieldset.type %>\" name=\"<%= fieldset.name %>\" value=\"<%= option %>\" />                <%= option %>            </label>        <% }); %>    <% } %>    <% if (fieldset.required) { %>        <p acif-invalid=\"required\" class=\"required msg\"><%= fieldset.required_error %></p>        <% if (fieldset.type === 'email') { %>            <p acif-invalid=\"pattern\" class=\"required msg\">              Please enter a valid email address.            </p>        <% } %>    <% } %>    <% if (!fieldset.scale) { %></fieldset><% } %>    <% if (fieldset.index === fieldset.index_last - 1) { %></div><% } %><% }); %>    </div>    <footer class=\"footer\">        <button class=\"btn\" type=\"submit\" <%= formify.toggle_attr %>><%= formify.submit %></button>    </footer></form>";
});
define("Automatons/templates/2010", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<textarea <%= fieldset.placeholder_attr %>></textarea>";
});
define("Automatons/templates/2011", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<input type=\"<%= fieldset.type %>\" <%= fieldset.placeholder_attr %> />";
});
define("Automatons/templates/2012", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<%\tvar type = typeof type !== 'undefined' ? type : 'guide';%><!-- Sidebar --><aside class=\"sidebar\">    <img src=\"https://static.inq.com/sites/10004750/assets/automatons/images/debit-credit-icon.png\"/></aside><main class=\"content\">        <!-- Header (bold) -->    <% if (typeof header !== 'undefined') { %>    \t<p class=\"node-head\"><%= header %></p>    <% } %>        <!-- Step X: STEP_TEXT -->    <% if (typeof step !== 'undefined') { %>    \t<p>            <% if(typeof number !== 'undefined') { %>            \t<span class=\"bold\">Step <%= number %>:&nbsp;</span>            <% } %>            <%= step %>    \t</p>    <% } %>        <!-- Screenshot -->    <% if(typeof screenshot !== 'undefined') { %>        <div class=\"screenshot\">            <img src=\"<%= screenshot %>\"/>        </div>    <% } %>        <!-- Body (Misc Content) -->    <% if(typeof body !== 'undefined') { %>    \t<p><%= body %></p>    <% } %>        <!-- Buttons -->    <% if(typeof buttons !== 'undefined') { %>    <div class=\"buttons\">    \t<% _.each(buttons, function(button) { %>    \t\t<button acif-node=\"<%= button.node_id %>\"><%= button.text %></button>    \t<% }); %>    </div>    <% } %>        <!-- Next Node -->    <% if(typeof node_id !== 'undefined') { %>    <div class=\"bottom-right\">        <div class=\"next\">            <% if (type === 'initial') { %>                <button class=\"next-button\" acif-node=\"<%= node_id %>\">Take me there</button>            <% } else { %>                <p class=\"next-text\">Click \"Next\" once you're ready to go on to the next step.</p>                <button class=\"next-button\" acif-node=\"<%= node_id %>\">Next</button>            <% } %>        </div>    </div>    <% } %></main>";
});
define("Automatons/templates/2013", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<p>This is an auto-generated email to inform you a respondent provided a \"[question2]\" rating for Q2 and a \"[question5]\" rating for Q5. Please click on the following link to view the survey:    <br/>To view the transcript, please click <a href=\"https://portal-bofa.touchcommerce.com/portal/portal.jsp#transcript_10004750_engagementID:[engagement-id]:transcript\">here</a>.    <br/>ChatID: [engagement-id]    <br/>AgentID: [agent-id]</p>";
});
define("Automatons/templates/2014", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<p>This is an auto-generated email to inform you a respondent provided a \"[question1]\" rating for Q1, a \"[question2]\" rating for Q2 and a \"[question3]\" for Q3. Please click on the following link to view the survey:    <br/>To view the transcript, please click <a href=\"https://portal-bofa.touchcommerce.com/portal/portal.jsp#transcript_10004750_engagementID:[engagement-id]:transcript\">here</a>.    <br/>ChatID: [engagement-id]    <br/>AgentID: [agent-id]</p>";
});
define("Automatons/templates/2015", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<footer class=\"formify-footer\">  <button class=\"formify-submit\" type=\"submit\" <%= formify._toggle_attr %>><%= formify.submit %> <% if (formify.caret) { %> <div acif-template=\"template::2016\"></div> <% } %></button></footer>";
});
define("Automatons/templates/2016", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<svg class=\"caret\" xmlns=\"http://www.w3.org/2000/svg\" width=\"10.53\" height=\"14.66\" viewBox=\"0 0 10.53 14.66\"><title>vzw-caret</title><path d=\"M1.17,0a1.16,1.16,0,0,1,.72.25l8.64,6.81L1.92,14.39A1.16,1.16,0,1,1,.41,12.61L6.85,7.13,0.44,2.08A1.16,1.16,0,0,1,1.17,0\" /></svg>";
});
define("Automatons/templates/2017", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<p>This is an auto-generated email to inform you a respondent provided a \"[question3]\" rating for Q3. Please click on the following link to view the survey:    <br/>To view the transcript, please click <a href=\"https://portal-bofa.touchcommerce.com/portal/portal.jsp#transcript_10004750_engagementID:[engagement-id]:transcript\">here</a>.    <br/>ChatID: [engagement-id]    <br/>AgentID: [agent-id]</p>";
});
define("Automatons/templates/2018", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<p>This is an auto-generated email to inform you a respondent provided a \"[question2]\" rating for Q2. Please click on the following link to view the survey:    <br/>To view the transcript, please click <a href=\"https://portal-bofa.touchcommerce.com/portal/portal.jsp#transcript_10004750_engagementID:[engagement-id]:transcript\">here</a>.    <br/>ChatID: [engagement-id]    <br/>AgentID: [agent-id]</p>";
});
define("Automatons/templates/2019", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<p>This is an auto-generated email to inform you a respondent provided a \"[question1]\" rating for Q1 and a \"[question2]\" for Q2. Please click on the following link to view the survey:    <br/>To view the transcript, please click <a href=\"https://portal-bofa.touchcommerce.com/portal/portal.jsp#transcript_10004750_engagementID:[engagement-id]:transcript\">here</a>.    <br/>ChatID: [engagement-id]    <br/>AgentID: [agent-id]</p>";
});
define("Automatons/templates/2020", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<p>This is an auto-generated email to inform you a respondent provided a \"[question2]\" rating for Q2 and a \"[question3]\" rating for Q3. Please click on the following link to view the survey:    <br/>To view the transcript, please click <a href=\"https://portal-bofa.touchcommerce.com/portal/portal.jsp#transcript_10004750_engagementID:[engagement-id]:transcript\">here</a>.    <br/>ChatID: [engagement-id]    <br/>AgentID: [agent-id]</p>";
});
define("Automatons/templates/2021", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<p>This is an auto-generated email to inform you a respondent provided a \"1\" rating for Q1. Please click on the following link to view the survey:    <br/>To view the transcript, please click <a href=\"https://portal-bofa.touchcommerce.com/portal/portal.jsp#transcript_10004750_engagementID:[engagement-id]:transcript\">here</a>.    <br/>ChatID: [engagement-id]    <br/>AgentID: [agent-id]</p>";
});
define("Automatons/templates/2022", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<p>This is an auto-generated email to inform you a respondent provided a \"[question4]\" rating for Q1.  Please click on the following link to view the survey:    <br/>To view the transcript, please click <a href=\"https://portal-bofa.touchcommerce.com/portal/portal.jsp#transcript_10004750_engagementID:[engagement-id]:transcript\">here</a>.    <br/>ChatID: [engagement-id]    <br/>AgentID: [agent-id]</p>";
});
define("Automatons/templates/2023", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<p>This is an auto-generated email to inform you a respondent provided a \"[question4]\" rating for Q1.  Please click on the following link to view the survey:    <br/>To view the transcript, please click <a href=\"https://portal-bofa.touchcommerce.com/portal/portal.jsp#transcript_10004750_engagementID:[engagement-id]:transcript\">here</a>.    <br/>ChatID: [engagement-id]    <br/>AgentID: [agent-id]    <br/>Comments: [question11]</p>";
});
define("Automatons/templates/2024", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<p>This is an auto-generated email to inform you a respondent provided a \"[question2]\" rating for Q2 and a \"[question5]\" rating for Q4. Please click on the following link to view the survey:    <br/>To view the transcript, please click <a href=\"https://portal-bofa.touchcommerce.com/portal/portal.jsp#transcript_10004750_engagementID:[engagement-id]:transcript\">here</a>.    <br/>ChatID: [engagement-id]    <br/>AgentID: [agent-id]</p>";
});
define("Automatons/templates/2025", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<p>This is an auto-generated email to inform you a respondent provided a \"[question1]\" rating for Q1. Please click on the following link to view the survey:    <br/>To view the transcript, please click <a href=\"https://portal-bofa.touchcommerce.com/portal/portal.jsp#transcript_10004750_engagementID:[engagement-id]:transcript\">here</a>.    <br/>ChatID: [engagement-id]    <br/>AgentID: [agent-id]</p>";
});
define("Automatons/templates/2026", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<p>This is an auto-generated email to inform you a respondent provided a \"[question1]\" for Q1. Please click on the following link to view the survey:     <br/>To view the transcript, please click <a href=\"https://portal-bofa.touchcommerce.com/portal/portal.jsp#transcript_10004750_engagementID:[engagement-id]:transcript\">here</a>.    <br/>ChatID: [engagement-id]    <br/>AgentID: [agent-id]</p>";
});
define("Automatons/templates/2027", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<p>This is an auto-generated email to inform you a respondent provided a \"[question1]\" for Q1. Please click on the following link to view the survey:     <br/>To view the transcript, please click <a href=\"https://portal-bofa.touchcommerce.com/portal/portal.jsp#transcript_10004750_engagementID:[engagement-id]:transcript\">here</a>.    <br/>ChatID: [engagement-id]    <br/>AgentID: [agent-id]</p>";
});
define("Automatons/templates/2115", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<header class=\"formify-header\" acif-aria-speak>    <% if (formify.heading) { %>    <h1 class=\"formify-heading\"><%= formify.heading %></h1>    <% } %>    <% if (formify.requiredHeading) { %>    <p class=\"formify-heading-required\"><%= formify.requiredHeading %></p>    <% } else { %>    <p class=\"formify-heading-required\">Required items indicated with *.</p>    <% } %></header>";
});
define("Automatons/templates/2376", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div class=\"outcome-wrapper\">    <h1 class=\"required\">Sorry, all Chat Representatives are currently assisting other customers.</h1>        <% if (api.forms._sales_deposit_personal_topics === 'apply_for_a_new_account') { %>            <p>At any time, you can <span acif-node=\"node::2063\">review checking/savings FAQs.</span></p>        <% } else if (api.forms._sales_deposit_small_business_topics === 'apply_for_a_new_account') { %>            <p>Here are some useful links that may help:</p>        <div acif-template=\"template::2002\" />    <% } %>        <p>Or, if you'd like, you can <span acif-node=\"<%= api.getTargetChatNode() %>\" acif-ignore-aa>chat with the next Representative</span> when one becomes available.</p></div>";
});
define("Automatons/templates/2377", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div acif-template=\"formify\"></div>";
});
define("Automatons/templates/2378", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div id=\"thankYou\">    <div class=\"center-container\">        <span id=\"thanks-message\">            <p class=\"lead\">Your feedback has been submitted!</p>            <p>Thank you for your time and participation.</p>            <button acif-action=\"exit\" aria-labelledby=\"thanks-message\" aria-live=\"assertive\">Close</button>        </span>    </div></div>";
});
define("Automatons/templates/2379", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div class=\"outcome-wrapper\">  <p>All agents are currently unavailable. Please try again during our hours of operation 7:00 am ET - 8:45 pm ET.<p>    </div>";
});
define("Automatons/templates/2380", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<%var nodeId = 0;if (api.forms._line_of_business.match(/cfm_fraud|billing_disputes|retail_fraud_servicing|psb_fraud/) && api.forms._fraud_and_claims_reason_for_chat.match(/same_day_off_phone_request|skill_change_request/)) {\tnodeId = 2032;} else if(api.forms._line_of_business.match(/ata|cd_ira|cvl_servicing|digital_services|home_loans|national_service_solutions|preferred_sales|preferred_servicing|retail|sales_fulfillment|small_business/) && api.forms._bac_reason_for_chat.match(/same_day_off_phone_request|skill_change_request/)) {\tnodeId = 2031;} else if(api.forms._line_of_business.match(/billing_disputes|retail_fraud_servicing/)) {\tnodeId = 2028;} else if(api.forms._line_of_business.match(/psb_fraud/)) {\tnodeId = 2027;} else if(api.forms._line_of_business.match(/cfm_fraud/)) {  nodeId = 2254;} else if(api.forms._line_of_business.match(/ata|cd_ira|cvl_servicing|digital_services|home_loans|national_service_solutions|preferred_sales|preferred_servicing|retail|sales_fulfillment|small_business/)) {\tnodeId = 2026;}%><div class=\"outcome-wrapper\">    <h1>We will be with you shortly.</h1>    <p>We are currently assisting other customers; you may experience a delay.<p>    <p>If you are still interested in chatting, please click \"Continue\" to be placed in the queue.</p>    <footer class=\"footer\">        <button class=\"btn\" acif-node=\"<%= nodeId %>\" acif-ignore-aa>Continue</button>    </footer></div>";
});
define("Automatons/templates/2381", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div id=\"thankYou\">    <div class=\"center-container\">        <span id=\"thanks-message\">            <p class=\"lead\">Your feedback has been submitted!</p>            <p>Thank you for your time and participation.</p>            <button acif-action=\"exit\" aria-labelledby=\"thanks-message\" aria-live=\"assertive\">Close</button>        </span>    </div></div>";
});
define("Automatons/templates/2382", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div class=\"outcome-wrapper\">        <h1 class=\"required\">Currently, all Chat Representatives are assisting other customers.</h1>    <p>Or if you'd like, you can chat with the next Representative when one becomes available.</p>    <footer class=\"footer\">        <button class=\"btn\" acif-node=\"<%= api.getTargetChatNode() %>\" acif-ignore-aa>Continue</button>    </footer></div>";
});
define("Automatons/templates/2383", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div class=\"outcome-wrapper\">        <h1 class=\"required\">Sorry, it's currently outside of the operating hours of our Chat Representatives.</h1>    <p>Please try back later.</p></div>";
});
define("Automatons/templates/2384", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div id=\"thankYou\">    <div class=\"center-container\">        <span id=\"thanks-message\">            <p class=\"lead\">Tus comentarios ya fueron enviados.</p>            <p>Gracias por tu tiempo y tu participación.</p>            <button acif-action=\"exit\" aria-labelledby=\"thanks-message\" aria-live=\"assertive\">Cerrar</button>        </span>    </div></div>";
});
define("Automatons/templates/2385", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<% if (breadcrumbs.length) { %>     <div acif-template=\"template::2001\" /><% } %><div class=\"scroll-area\" role=\"main\">    <div acif-aria-speak>        <h1>To help us serve you better, please provide some information before we begin your chat.</h1>        <h2>To get started, please select a topic below.</h2>    </div>    <hr>    <div acif-template=\"template::2002\" /></div>";
});
define("Automatons/templates/2386", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div class=\"outcome-wrapper\">        <h1 class=\"required\">Sorry, all Chat Representatives are currently assisting other customers.</h1>    <p>At any time, you can <span acif-node=\"node::2120\">review the auto loan FAQs</span>.</p>    <p>Or, if you'd like, you can <span acif-node=\"<%= api.getTargetChatNode() %>\" acif-ignore-aa>chat with the next Representative</span> when one becomes available.</p></div>";
});
define("Automatons/templates/2387", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div acif-template=\"formify\"></div>";
});
define("Automatons/templates/2388", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div id=\"thankYou\">    <div class=\"center-container\">        <span id=\"thanks-message\">            <p class=\"lead\">Your feedback has been submitted!</p>            <p>Thank you for your time and participation.</p>            <button acif-action=\"exit\" aria-labelledby=\"thanks-message\" aria-live=\"assertive\">Close</button>        </span>    </div></div>";
});
define("Automatons/templates/2389", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div acif-template=\"formify\"></div>";
});
define("Automatons/templates/2390", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div class=\"outcome-wrapper\">        <h1 class=\"required\">Thank you for contacting the claims area. Agents are currently not available at this time. </h1>    <p>Sorry for any inconvenience.</p>    </div>";
});
define("Automatons/templates/2391", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div class=\"outcome-wrapper\">        <h1 class=\"required\">Thank you for contacting the claims area. Agents are currently not available at this time.</h1>    <p>Sorry for any inconvenience.</p>    </div>";
});
define("Automatons/templates/2392", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div id=\"thankYou\">    <div class=\"center-container\">        <span id=\"thanks-message\">            <p class=\"lead\">Thanks, we appreciate your feedback!</p>            <button acif-action=\"exit\" aria-labelledby=\"thanks-message\" aria-live=\"assertive\">Close</button>        </span>    </div></div>";
});
define("Automatons/templates/2393", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div class=\"outcome-wrapper\">        <h1 class=\"required\">Sorry, it's currently outside of the operating hours of our Chat Representatives.</h1>    <p>Please try back later.</p>    <p>At any time, you can <span acif-node=\"node::2120\">review the auto loan FAQs</span>.</p></div>";
});
define("Automatons/templates/2394", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div acif-template=\"formify\"></div>";
});
define("Automatons/templates/2395", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div acif-template=\"formify\"></div>";
});
define("Automatons/templates/2396", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div id=\"thankYou\">    <div class=\"center-container\">        <span id=\"thanks-message\">            <p class=\"lead\">Thanks, we appreciate your feedback!</p>            <button acif-action=\"exit\" aria-labelledby=\"thanks-message\" aria-live=\"assertive\">Close</button>        </span>    </div></div>";
});
define("Automatons/templates/2397", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div acif-template=\"formify\"></div>";
});
define("Automatons/templates/2398", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div acif-template=\"formify\"></div>";
});
define("Automatons/templates/2399", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div class=\"outcome-wrapper\">    <h1 class=\"required\">Thank you for using ACO Chat. Advisors are currently unavailable.</h1>    <p>We apologize for any inconvenience.</p></div>";
});
define("Automatons/templates/2400", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div id=\"thankYou\">    <div class=\"center-container\">        <span id=\"thanks-message\">            <p class=\"lead\">Your feedback has been submitted!</p>            <p>Thank you for your time and participation.</p>            <button acif-action=\"exit\" aria-labelledby=\"thanks-message\" aria-live=\"assertive\">Close</button>        </span>    </div></div>";
});
define("Automatons/templates/2401", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div class=\"outcome-wrapper\">        <h1 class=\"required\">Sorry, all Chat Representatives are currently assisting other customers.</h1>    <p>At any time, you can <span acif-node=\"node::2131\">review the home loan FAQs</span>.</p>    <p>Or, if you'd like, you can <span acif-node=\"<%= api.getTargetChatNode() %>\" acif-ignore-aa>chat with the next Representative</span> when one becomes available.</p></div>";
});
define("Automatons/templates/2402", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div class=\"outcome-wrapper\">        <h1 class=\"required\">Sorry, it's currently outside of the operating hours of our Chat Representatives.</h1>    <p>Please try back later.</p>    <p>At any time, you can <span acif-node=\"node::2130\">review the home equity FAQs</span>.</p></div>";
});
define("Automatons/templates/2403", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div class=\"outcome-wrapper\">        <h1 class=\"required\">Sorry, all Chat Representatives are currently assisting other customers.</h1>    <p>At any time, you can <span acif-node=\"node::2130\">review the home equity FAQs</span>.</p>    <p>Or, if you'd like, you can <span acif-node=\"<%= api.getTargetChatNode() %>\" acif-ignore-aa>chat with the next Representative</span> when one becomes available.</p></div>";
});
define("Automatons/templates/2404", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div class=\"outcome-wrapper\">        <h1 class=\"required\">Sorry, it's currently outside of the operating hours of our Chat Representatives.</h1>    <p>Please try back later.</p>    <p>At any time, you can <span acif-node=\"node::2131\">review the home loan FAQs</span>.</p></div>";
});
define("Automatons/templates/2405", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div acif-template=\"formify\"></div>";
});
define("Automatons/templates/2406", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div class=\"outcome-wrapper\">        <h1 class=\"required\">HR Service Centre operators are currently unavailable.</h1>    <p>Please submit your query using the Ask HR form.</p></div>";
});
define("Automatons/templates/2407", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div class=\"outcome-wrapper\">        <h1 class=\"required\">HR Service Centre operators are currently unavailable. </h1>    <p>Please submit your query using the Ask HR form.</p>    </div>";
});
define("Automatons/templates/2408", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div id=\"thankYou\">    <div class=\"center-container\">        <span id=\"thanks-message\">            <p class=\"lead\">Your feedback has been submitted!</p>            <p>Thank you for your time and participation.</p>            <button acif-action=\"exit\" aria-labelledby=\"thanks-message\" aria-live=\"assertive\">Close</button>        </span>    </div></div>";
});
define("Automatons/templates/2409", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div id=\"thankYou\">    <div class=\"center-container\">        <span id=\"thanks-message\">            <p class=\"lead\">Thanks, we appreciate your feedback!</p>            <button acif-action=\"exit\" aria-labelledby=\"thanks-message\" aria-live=\"assertive\">Close</button>        </span>    </div></div>";
});
define("Automatons/templates/2410", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div id=\"thankYou\">    <div class=\"center-container\">        <span id=\"thanks-message\">            <p class=\"lead\">Thanks for choosing Merrill Edge.</p>            <p>Your feedback is appreciated!</p>            <button acif-action=\"exit\" aria-labelledby=\"thanks-message\" aria-live=\"assertive\">Close</button>        </span>    </div></div>";
});
define("Automatons/templates/2411", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div id=\"thankYou\">    <div class=\"center-container\">        <span id=\"thanks-message\">            <p class=\"lead\">Thanks for choosing Merrill Edge.</p>            <p>Your feedback is appreciated!</p>            <button acif-action=\"exit\" aria-labelledby=\"thanks-message\" aria-live=\"assertive\">Close</button>        </span>    </div></div>";
});
define("Automatons/templates/2412", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div acif-template=\"formify\"></div>";
});
define("Automatons/templates/2413", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div class=\"outcome-wrapper\">        <h1>Thank you for initiating an online chat session through Benefits Online.</h1>    <p>We apologize for the inconvenience, but currently, there are no agents available to accept your chat.</p>    <p>Please try back later.</p>    <p>If you require the assistance of a Participant Services Representative, please contact our Retirement &amp; Benefits Contact Center at 800.228.4015 during business hours.</p>    </div>";
});
define("Automatons/templates/2414", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div acif-template=\"formify\"></div>";
});
define("Automatons/templates/2415", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div acif-template=\"formify\"></div>";
});
define("Automatons/templates/2416", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div class=\"outcome-wrapper\">        <h1 class=\"required\">Sorry, it's currently outside of the operating hours of our Chat Representatives.</h1>        <% if (api.forms._sales_deposit_personal_topics === 'apply_for_a_new_account') { %>            <p>Please try back later.</p>        <p>At any time, you can <span acif-node=\"node::2063\">review checking/savings FAQs.</span></p>        <% } else if (api.forms._sales_deposit_small_business_topics === 'apply_for_a_new_account') { %>            <p>Here are some useful links that may help:</p>        <div acif-template=\"template::2002\" />    <% } else { %>            <p>Please try back later</p>        <% } %>    </div>";
});
define("Automatons/templates/2417", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div class=\"outcome-wrapper\">        <h1>Thank you for initiating an online chat session through Benefits Online.</h1>    <p>We apologize for the inconvenience, but currently, there are no agents available to accept your chat.</p>    <p>Please try back later.</p>    <p>If you require the assistance of a Participant Services Representative, please contact our Retirement &amp; Benefits Contact Center at 800.228.4015 during business hours.</p>    </div>";
});
define("Automatons/templates/2418", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div class=\"outcome-wrapper\"><% if (api.forms._bac_reason_for_chat && api.forms._bac_reason_for_chat.match(/same_day_off_phone_request|skill_change_request/)) { %>\t<h1>Thank you for contacting the Console.</h1>\t<p>Our hours of support are:<br>\t<strong>M-F 7:00am - 1:00am</strong><br>\t<strong>Sat-Sun 8:00am - 8:00pm ET</strong><br>\tTo contact the Console please call 800-754-3047</p><% } else if (api.forms._fraud_and_claims_reason_for_chat && api.forms._fraud_and_claims_reason_for_chat.match(/same_day_off_phone_request|skill_change_request/)) { %>\t<h1>Thank you for contacting Fraud &amp; Billing Disputes Core Team Workforce Management.</h1>\t<p>Our hours of support are:<br>\t<strong>M-F 7:00 am ET - 1:00am ET</strong><br>    <strong>Sat, Sun 8:00am - 8:00pm ET</strong></p>    <p>To contact Fraud &amp; Billing Disputes Core Team Workforce Management please call 800-754-3047</p><% } else if (api.forms._line_of_business === \"billing_disputes\") { %>    <h1>Thank you for contacting Billing Disputes.</h1>    <p>Our hours of support are:<br>    <strong>M-F 7:00am - 9:00pm ET</strong></p>    <% } else if (api.forms._line_of_business.length) { %>    <h1>Thank you for contacting <%= wfm_groups[api.forms._line_of_business][\"greeting\"] %>.</h1>    <p>Our hours of support are:<br>    <strong><%= wfm_groups[api.forms._line_of_business][\"hop\"] %></strong></p><% } else { %>\t<h1 class=\"required\">Currently, it is outside the operating hours of our Chat Representatives.</h1>\t<p>Please try back later.<p>\t<p>Below may be a useful link that will open in a new window.</p>\t<p><button acif-node=\"node::2015\">Help &amp; Support</button></p><% } %></div>";
});
define("Automatons/templates/2419", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div class=\"outcome-wrapper\">        <h1 class=\"required\">ASK Global Procurement subject matter experts are currently unavailable.</h1>    <p>Please click the ASK Global Procurement link in the contact us section in mySource to ask a question or submit a request.</p>\t<p>Thank you.</p>    </div>";
});
define("Automatons/templates/2420", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div class=\"outcome-wrapper\">    <h1 class=\"required\">ASK Global Procurement subject matter experts are currently busy helping other employees.</h1>    <p>Please click the ASK Global Procurement link in the Contact Us section to ask a question or submit a request.</p>\t<p>Thank you.</p></div>";
});
define("Automatons/templates/2421", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div class=\"outcome-wrapper\">    <h1>Thank you for contacting Live Chat.</h1>    <p>Our hours of operations are:</p>    <p><b>Mon-Fri 8:30 a.m. to 5:00 p.m. EST</b></p>    <p>Your inquiry is important to us. Please consider leaving us a voicemail message by calling:</p>    <p><b>1.888.550.6433</b></p>    <p>or sending us an email at:</p>    <p><a href=\"mailto:Accounts_Payable_Help@bankofamerica.com\" target=\"_blank\">Accounts_Payable_Help@bankofamerica.com</a></p>    <p>Thank you.</p>    <hr></div>";
});
define("Automatons/templates/2422", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div class=\"outcome-wrapper\">    <h1>Thank you for contacting Live Chat.</h1>    <p>Our hours of operations are:</p>    <p><b>Mon-Fri 8:30 a.m. to 5:00 p.m. EST</b></p>    <p>Your inquiry is important to us. Please consider leaving us a voicemail message by calling:</p>    <p><b>1.888.550.6433</b></p>    <p>or sending us an email at:</p>    <p><a href=\"mailto:eLedgerhelp@bankofamerica.com\" target=\"_blank\">eLedgerhelp@bankofamerica.com</a></p>    <p>Thank you.</p>    <hr></div>";
});
define("Automatons/templates/2423", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div class=\"outcome-wrapper\">        <h1>Thank you for contacting Live Chat.</h1>    <p>Our hours of operations are:</p>    <p><b>Mon-Fri 8:30 a.m. to 5:00 p.m. EST</b></p>    <p>Your inquiry is important to us. Please consider leaving us a voicemail message by calling:</p>    <p><b>1.888.550.6433</b></p>    <p>or sending us an email at:</p>    <p><a href=\"mailto:eLedgerhelp@bankofamerica.com\" target=\"_blank\">eLedgerhelp@bankofamerica.com</a></p>    <p>Thank you.</p>    </div>";
});
define("Automatons/templates/2424", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div class=\"outcome-wrapper\">        <h1>Thank you for contacting Live Chat.</h1>        <p>Our hours of operations are:</p>    <p><b>Mon-Fri 8:30 a.m. to 5:00 p.m. EST</b></p>        <p>Your inquiry is important to us. Please consider leaving us a voicemail message by calling:</p>    <p><b>1.888.550.6433</b></p>    <p>or sending us an email at:</p>    <p><a href=\"mailto:Accounts_Payable_Help@bankofamerica.com\" target=\"_blank\">Accounts_Payable_Help@bankofamerica.com</a></p>    <p>Thank you.</p>    </div>";
});
define("Automatons/templates/2425", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div class=\"outcome-wrapper\">    <h1>Call us at 800.421.2110</h1></div>";
});
define("Automatons/templates/2426", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div class=\"outcome-wrapper\">    <h1><span acif-node=\"node::2017\">Report a lost or stolen card online.</span></h1></div>";
});
define("Automatons/templates/2427", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<% if (breadcrumbs.length) { %>     <div acif-template=\"template::2001\" /><% } %><div class=\"scroll-area\" role=\"main\">    <div acif-aria-speak>        <h1>To help us serve you better, please provide some information before we begin your chat.</h1>        <h2>Please select an account type below.</h2>    </div>    <hr>    <div acif-template=\"template::2002\" /></div>";
});
define("Automatons/templates/2428", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div class=\"outcome-wrapper\">    <h1><span acif-node=\"node::2111\">Dispute your credit card transaction online.</span></h1></div>";
});
define("Automatons/templates/2429", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div class=\"outcome-wrapper\">    <h1>Learn more about <span acif-node=\"node::2016\">BankAmeriDeals</span>.</h1></div>";
});
define("Automatons/templates/2430", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div class=\"outcome-wrapper\">    <h1 class=\"required\">We're sorry, Representatives are currently unavailable via chat.</h1>    <p>For assistance, please call us at 1.866.758.5972.</p></div>";
});
define("Automatons/templates/2431", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div class=\"outcome-wrapper\">        <h1>Report it immediately to us at 866.706.0448 if you suspect that you are a victim of fraud</h1>\t</div>";
});
define("Automatons/templates/2432", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<% if (breadcrumbs.length) { %>     <div acif-template=\"template::2001\" /><% } %><div class=\"scroll-area\" role=\"main\">    <div acif-aria-speak>        <h1>Which of these can we help you with today?</h1>    </div>    <hr>    <div acif-template=\"template::2002\" />    <footer class=\"footer\">        <button class=\"btn back\" acif-action=\"back\">Back</button>    </footer></div>";
});
define("Automatons/templates/2433", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div class=\"outcome-wrapper\">    <h1><span acif-node=\"node::2114\">Request a credit line increase.</span></h1></div>";
});
define("Automatons/templates/2434", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<% if (breadcrumbs.length) { %>     <div acif-template=\"template::2001\" /><% } %><div class=\"scroll-area\" role=\"main\">    <div acif-aria-speak>        <h1>Which of these can we help you with today?</h1>    </div>    <hr>    <div acif-template=\"template::2002\" />    <footer class=\"footer\">        <button class=\"btn back\" acif-action=\"back\">Back</button>    </footer></div>";
});
define("Automatons/templates/2435", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<% if (breadcrumbs.length) { %>     <div acif-template=\"template::2001\" /><% } %><div class=\"scroll-area\" role=\"main\">    <div acif-aria-speak>        <h1>Please select a topic below.</h1>    </div>    <hr>    <div acif-template=\"template::2002\" /></div>";
});
define("Automatons/templates/2436", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<% if (breadcrumbs.length) { %>     <div acif-template=\"template::2001\" /><% } %><div class=\"scroll-area\" role=\"main\">    <div acif-aria-speak>        <h1>Which of these can we help you with today?</h1>    </div>    <hr>    <div acif-template=\"template::2002\" />    <footer class=\"footer\">        <button class=\"btn back\" acif-action=\"back\">Back</button>    </footer></div>";
});
define("Automatons/templates/2437", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div class=\"outcome-wrapper\">        <h1 class=\"required\">Currently, all Chat Representatives are assisting other customers.</h1>    <p>Below may be a useful link that will open in a new window.</p>    <div acif-template=\"template::2002\" />    <p>Or if you'd like, you can chat with the next Representative when one becomes available.</p>    <footer class=\"footer\">        <button class=\"btn\" acif-node=\"<%= api.getTargetChatNode() %>\" acif-ignore-aa>Continue</button>    </footer></div>";
});
define("Automatons/templates/2438", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div class=\"outcome-wrapper\">    <h1>Visit our <span acif-node=\"node::2018\">Travel Notice</span> page to set your travel notice.</h1></div>";
});
define("Automatons/templates/2439", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div class=\"outcome-wrapper\">        <h1 class=\"required\">Currently, it is outside the operating hours of our Chat Representatives.</h1>    <p>Please try back later.</p>    <p>Below may be a useful link that will open in a new window.</p>    <div acif-template=\"template::2002\" /></div>";
});
define("Automatons/templates/2440", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div acif-template=\"formify\"></div>";
});
define("Automatons/templates/2441", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<% if (breadcrumbs.length) { %>     <div acif-template=\"template::2001\" /><% } %><div class=\"scroll-area\" role=\"main\">    <div acif-aria-speak>        <h1>To help us serve you better, please provide some information before we begin your chat.</h1>        <h2>Please select an account type below.</h2>    </div>    <hr>    <div acif-template=\"template::2002\" /></div>";
});
define("Automatons/templates/2442", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<% if (breadcrumbs.length) { %>     <div acif-template=\"template::2001\" /><% } %><div class=\"scroll-area\" role=\"main\">    <div acif-aria-speak>        <h1>Which of these can we help you with today?</h1>    </div>    <hr>    <div acif-template=\"template::2002\" />    <footer class=\"footer\">        <button class=\"btn back\" acif-action=\"back\">Back</button>    </footer></div>";
});
define("Automatons/templates/2443", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div class=\"outcome-wrapper\">        <h1>Call us at 800.933.6262</h1>\t</div>";
});
define("Automatons/templates/2444", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div id=\"thankYou\">    <div class=\"center-container\">        <span id=\"thanks-message\">            <p class=\"lead\">Your feedback has been submitted!</p>            <p>Thank you for your time and participation.</p>            <button acif-action=\"exit\" aria-labelledby=\"thanks-message\" aria-live=\"assertive\">Close</button>        </span>    </div></div>";
});
define("Automatons/templates/2445", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<% if (breadcrumbs.length) { %>     <div acif-template=\"template::2001\" /><% } %><div class=\"scroll-area\" role=\"main\">    <div acif-aria-speak>        <h1>Which of these can we help you with today?</h1>    </div>    <hr>    <div acif-template=\"template::2002\" />    <footer class=\"footer\">        <button class=\"btn back\" acif-action=\"back\">Back</button>    </footer></div>";
});
define("Automatons/templates/2446", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div class=\"outcome-wrapper\">        <h1>Call us at <%= (api.forms._account_type === \"personal\") ? '877.366.1121' : '888.287.4637' %></h1>\t</div>";
});
define("Automatons/templates/2447", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div class=\"outcome-wrapper\">        <h1>Call us at <%= (api.forms._account_type === \"personal\") ? '888.562.1000' : '888.287.4637' %></h1>\t</div>";
});
define("Automatons/templates/2448", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div class=\"outcome-wrapper\">    <h1><span acif-node=\"node::2017\">Report a lost or stolen card online.</span></h1></div>";
});
define("Automatons/templates/2449", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div class=\"outcome-wrapper\">        <h1>Call us at <%= (api.forms._account_type === \"personal\") ? '888.562.1000' : '888.287.4637' %></h1>\t</div>";
});
define("Automatons/templates/2450", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<% if (breadcrumbs.length) { %>     <div acif-template=\"template::2001\" /><% } %><div class=\"scroll-area\" role=\"main\">    <div acif-aria-speak>        <h1>Which of these can we help you with today?</h1>    </div>    <hr>    <div acif-template=\"template::2002\" />    <footer class=\"footer\">        <button class=\"btn back\" acif-action=\"back\">Back</button>    </footer></div>";
});
define("Automatons/templates/2451", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div class=\"outcome-wrapper\">        <h1>Report it immediately to us at <%= (api.forms._account_type === \"personal\") ? '866.706.0448' : '877.436.0960' %> if you suspect that you are a victim of fraud</h1>\t</div>";
});
define("Automatons/templates/2452", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<% if (breadcrumbs.length) { %>     <div acif-template=\"template::2001\" /><% } %><div class=\"scroll-area\" role=\"main\">    <div acif-aria-speak>        <h1>Please select a topic below.</h1>    </div>    <hr>    <div acif-template=\"template::2002\" /></div>";
});
define("Automatons/templates/2453", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div class=\"outcome-wrapper\">    <h1>Visit our <span acif-node=\"node::2018\">Travel Notice</span> page to set your travel notice.</h1></div>";
});
define("Automatons/templates/2454", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div class=\"outcome-wrapper\">        <h1 class=\"required\">Provisioning Advisors are not available to assist you at this time.</h1>    <p>Please refer to the User Reference Library site via the link below.</p>    <p><span acif-node=\"node::2042\">Click here for the User Reference Library Site</span></p>    </div>";
});
define("Automatons/templates/2455", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div class=\"outcome-wrapper\">    <h1 class=\"required\">Provisioning Advisors are not available to assist you at this time.</h1>    <p>Please refer to the User Reference Library site via the link below.</p>    <p><span acif-node=\"node::2042\">Click here for the User Reference Library Site</span></p></div>";
});
define("Automatons/templates/2456", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div class=\"outcome-wrapper\">        <h1>Learn more about <span acif-node=\"node::2016\">BankAmeriDeals</span>.</h1>\t</div>";
});
define("Automatons/templates/2457", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<% if (breadcrumbs.length) { %>     <div acif-template=\"template::2001\" /><% } %><div class=\"scroll-area\" role=\"main\">    <div acif-aria-speak>        <h1>To help us serve you better, please provide some information before we begin your chat.</h1>        <h2>Which of these can we help you with today?</h2>    </div>    <hr>    <div acif-template=\"template::2002\" /></div>";
});
define("Automatons/templates/2458", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div id=\"thankYou\">    <div class=\"center-container\">        <span id=\"thanks-message\">            <p class=\"lead\">Thanks, we appreciate your feedback!</p>            <button acif-action=\"exit\" aria-labelledby=\"thanks-message\" aria-live=\"assertive\">Close</button>        </span>    </div></div>";
});
define("Automatons/templates/2459", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div class=\"outcome-wrapper\">    <h1>Please call us at 1.800.892.3219 if you have any questions about existing business credit card accounts, 24 hours a day, 7 days a week.</h1></div>";
});
define("Automatons/templates/2460", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<% if (breadcrumbs.length) { %>     <div acif-template=\"template::2001\" /><% } %><div class=\"scroll-area\" role=\"main\">    <div acif-aria-speak>        <h1>Which credit card topic can we help you with today?</h1>    </div>    <hr>    <div acif-template=\"template::2002\" /></div>";
});
define("Automatons/templates/2461", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div id=\"thankYou\">    <div class=\"center-container\">        <span id=\"thanks-message\">            <p class=\"lead\">Thanks, we appreciate your feedback!</p>            <button acif-action=\"exit\" aria-labelledby=\"thanks-message\" aria-live=\"assertive\">Close</button>        </span>    </div></div>";
});
define("Automatons/templates/2462", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div id=\"thankYou\">    <div class=\"center-container\">        <span id=\"thanks-message\">            <p class=\"lead\">Thanks, we appreciate your feedback!</p>            <button acif-action=\"exit\" aria-labelledby=\"thanks-message\" aria-live=\"assertive\">Close</button>        </span>    </div></div>";
});
define("Automatons/templates/2463", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div acif-template=\"formify\"></div>";
});
define("Automatons/templates/2464", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div class=\"outcome-wrapper\">    <h1>Not an Online Banking user?</h1>    <p><span acif-node=\"node::2059\">Enroll in Online Banking</span></p></div>";
});
define("Automatons/templates/2465", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div class=\"outcome-wrapper\" role=\"main\">    <h1>For help with your existing account, please call us at 1.800.215.6195.</h1>    <p>        Monday-Friday 9 a.m. - 8 p.m. ET<br>\t\tSaturday 9:30 a.m - 6 p.m ET    </p>    <p><span acif-node=\"node::2122\">Check the status of your application</span></p>    <p>        Not an Online Banking user?<br>        <span acif-node=\"node::2059\">Enroll in Online Banking</span>    </p></div>";
});
define("Automatons/templates/2466", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div acif-template=\"formify\"></div>";
});
define("Automatons/templates/2467", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div acif-template=\"formify\"></div>";
});
define("Automatons/templates/2468", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div class=\"outcome-wrapper\">    <h1>Sign in to  <span acif-node=\"node::2153\">check your application status</span>.</h1></div>";
});
define("Automatons/templates/2469", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<% if (breadcrumbs.length) { %>     <div acif-template=\"template::2001\" /><% } %><div class=\"scroll-area\" role=\"main\">    <div acif-aria-speak>        <h1>Which credit card topic can we help you with today?</h1>    </div>    <hr>    <div acif-template=\"template::2002\" /></div>";
});
define("Automatons/templates/2470", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<% if (breadcrumbs.length) { %>     <div acif-template=\"template::2001\" /><% } %><div class=\"scroll-area\" role=\"main\">    <div acif-aria-speak>        <h1>To help us serve you better, please provide some information before we begin your chat.</h1>        <h2>Which of these can we help you with today?</h2>    </div>    <hr>    <div acif-template=\"template::2002\" /></div>";
});
define("Automatons/templates/2471", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<p>Sorry, it's currently outside of the operating hours of our Chat Representatives.</p><p>Please try back later.</p><p>At any time, you can review the credit card FAQs.</p>";
});
define("Automatons/templates/2472", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div class=\"outcome-wrapper\">    <h1 class=\"required\">Sorry, all Chat Representatives are currently assisting other customers.</h1>        <p>At any time, you can <span acif-node=\"node::2154\">review credit card FAQs</span>.</p>    <p>Or if you'd like, you can <span acif-node=\"<%= api.getTargetChatNode() %>\" acif-ignore-aa>chat with the next Representative</span> when one becomes available.</p></div>";
});
define("Automatons/templates/2473", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<% if (breadcrumbs.length) { %>     <div acif-template=\"template::2001\" /><% } %><div class=\"scroll-area\" role=\"main\">    <div acif-aria-speak>        <h1>Not an Online Banking user?</h1>    </div>    <hr>    <div acif-template=\"template::2002\" />    <footer class=\"footer\">        <button class=\"btn back\" acif-action=\"back\">Back</button>    </footer></div>";
});
define("Automatons/templates/2474", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div class=\"outcome-wrapper\" role=\"main\">    <h1>Please call us at 1.888.383.7500 if you have any questions about your application.</h1>    <p>Our hours are Monday through Friday, 8 a.m. to 9 p.m. ET and Saturday, 9 a.m. to 5:30 p.m. ET.</p>    <p>If you have additional questions about other Bank of America products or services, please call us at 1.800.432.1000.</p></div>";
});
define("Automatons/templates/2475", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<% if (breadcrumbs.length) { %>     <div acif-template=\"template::2001\" /><% } %><div class=\"scroll-area\" role=\"main\">    <div acif-aria-speak>        <h1>Which checking or savings topic can we help you with today?</h1>    </div>    <hr>    <div acif-template=\"template::2002\" />    <button class=\"btn back\" acif-action=\"back\">Back</button></div>";
});
define("Automatons/templates/2476", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<% if (breadcrumbs.length) { %>     <div acif-template=\"template::2001\" /><% } %><div class=\"scroll-area\" role=\"main\">    <div acif-aria-speak>        <h1>Which Small Business checking or savings topic can we help you with today?</h1>    </div>    <hr>\t<div acif-template=\"template::2002\" />    <button class=\"btn back\" acif-action=\"back\">Back</button></div>";
});
define("Automatons/templates/2477", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div class=\"outcome-wrapper\">        <h1 class=\"required\">Sorry, all Chat Representatives are currently assisting other customers.</h1>    <p>If you'd like, you can <span acif-node=\"<%= api.getTargetChatNode() %>\" acif-ignore-aa>chat with the next Representative</span> when one becomes available.</p></div>";
});
define("Automatons/templates/2478", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div class=\"outcome-wrapper\">    <h1>For assistance with your current home equity line of credit or loan, please call 1.800.934.5626.</h1>    <h2>Our Servicing Department can answer questions about current rates and payment options.</h2>    <p>Hours: Monday-Friday 7 a.m.-7 p.m. Local Time</p></div>";
});
define("Automatons/templates/2479", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<% if (breadcrumbs.length) { %>     <div acif-template=\"template::2001\" /><% } %><div class=\"scroll-area\" role=\"main\">    <div acif-aria-speak>        <h1>To help us serve you better, please provide some information before we begin your chat.</h1>        <h2>Which of these can we help you with today?</h2>    </div>    <hr>    <div acif-template=\"template::2002\" /></div>";
});
define("Automatons/templates/2480", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div class=\"outcome-wrapper\">        <h1>Sorry, it's currently outside of the operating hours of our Chat Representatives.</h1>    <p>Please try back later</p>    </div>";
});
define("Automatons/templates/2481", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div class=\"outcome-wrapper\">    <h1>For assistance with your current mortgage, please call 1.800.669.6607.</h1>    <h2>Our Servicing Department can answer questions about current rates and payment options.</h2>    <p>Hours: Monday-Friday 7 a.m.-7 p.m. Local Time</p></div>";
});
define("Automatons/templates/2482", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<% if (breadcrumbs.length) { %>     <div acif-template=\"template::2001\" /><% } %><div class=\"scroll-area\" role=\"main\">    <div acif-aria-speak>        <h1>To help us serve you better, please provide some information before we begin your chat.</h1>        <h2>Select one of the following products or topics:</h2>    </div>    <hr>    <div acif-template=\"template::2002\" /></div>";
});
define("Automatons/templates/2483", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div acif-template=\"formify\"></div>";
});
define("Automatons/templates/2484", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<form acif-next-node=\"node::2050\" novalidate>\t\t<div class=\"scale\">\t\t            <fieldset name=\"scale1\" type=\"radio\" required>                <legend>This is a label for the first thing.</legend>                <label><input value=\"1\"><span>Label 1</span></label>                <label><input value=\"2\"><span>Label 2</span></label>                <label><input value=\"3\"><span>Label 3</span></label>                <label><input value=\"4\"><span>Label 4</span></label>                <label><input value=\"5\"><span>Label 5</span></label>                <p acif-invalid=\"required\">This is a required field.</p>            </fieldset>            <fieldset name=\"scale2\" type=\"radio\" required>                <legend>Pick some things from this scale!</legend>                <label><input value=\"1\"><span>Label 1</span></label>                <label><input value=\"2\"><span>Label 2</span></label>                <label><input value=\"3\"><span>Label 3</span></label>                <label><input value=\"4\"><span>Label 4</span></label>                <label><input value=\"5\"><span>Label 5</span></label>                <p acif-invalid=\"required\">This is a required field.</p>            </fieldset>    </div>    <button type=\"submit\">Start Chat</button></form>";
});
define("Automatons/templates/2485", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div acif-template=\"formify\"></div>";
});
define("Automatons/templates/2486", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div id=\"thankYou\">    <div class=\"center-container\">        <span id=\"thanks-message\">            <p class=\"lead\">Your feedback has been submitted!</p>            <p>Thank you for your time and participation.</p>            <button acif-action=\"exit\" aria-labelledby=\"thanks-message\" aria-live=\"assertive\">Close</button>        </span>    </div></div>";
});
define("Automatons/templates/2487", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div class=\"outcome-wrapper\">        <h1 class=\"required\">Chat is not available for this topic.</h1>    <p>Call us at <b>800.933.6262</b></p>    </div>";
});
define("Automatons/templates/2488", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div id=\"thankYou\">    <div class=\"center-container\">        <span id=\"thanks-message\">            <p class=\"lead\">Your feedback has been submitted!</p>            <p>Thank you for your time and participation.</p>            <button acif-action=\"exit\" aria-labelledby=\"thanks-message\" aria-live=\"assertive\">Close</button>        </span>    </div></div>";
});
define("Automatons/templates/2489", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div class=\"outcome-wrapper\">    <h1 class=\"required\">Chat is not available for this topic</h1>    <% if (api.forms._account_type !== 'small_business') { %>        <p class=\"has-icon\">Call us at <b>800.933.6262</b></p>    <% } %>    <p class=\"has-icon\"><b>Learn more about <span acif-node=\"node::2016\">BankAmeriDeals</span>.</b></p></div>";
});
define("Automatons/templates/2490", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div class=\"outcome-wrapper\">    <h1 class=\"required\">Chat is not available for this topic.</h1>    <p><b>Visit our Travel Notice page to <span acif-node=\"node::2018\">set your travel notice</span>.</b></p>    <% if (api.forms._account_type !== 'small_business') { %>        <p>Call us at <b>800.432.1000</b> for more help.</p>    <% } %></div>";
});
define("Automatons/templates/2491", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div class=\"outcome-wrapper\">    <h1 class=\"required\">Chat is not available for this topic.</h1>    <p>Call us at <b><%= (api.forms._account_type === \"personal\") ? '800.432.1000' : '888.287.4637' %></b>.</p>    </div>";
});
define("Automatons/templates/2492", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div class=\"outcome-wrapper\">        <h1 class=\"required\">Chat is not available for this topic.</h1>    <p>Report it immediately to us at <b><%= (api.forms._account_type === \"personal\") ? '800.421.2110' : '877.436.0960' %></b> if you suspect that you are a victim of fraud.</p></div>";
});
define("Automatons/templates/2493", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div class=\"outcome-wrapper\">        <h1 class=\"required\">Chat is not available for this topic.</h1>    <p>Call us at <b><%= (api.forms._account_type === \"personal\") ? '800.432.1000' : '888.287.4637' %></b>.</p>    </div>";
});
define("Automatons/templates/2494", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div class=\"outcome-wrapper\">    <h1 class=\"required\">Chat is not available for this topic.</h1>    <p>Call us at <b><%= (api.forms._account_type === \"personal\") ? '800.432.1000' : '888.287.4637' %></b>.</p></div>";
});
define("Automatons/templates/2495", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div class=\"outcome-wrapper\">    <h1 class=\"required\">Chat is not available for this topic.</h1>    <p><b>Report a <span acif-node=\"node::2017\">lost or stolen card online</span>.</b></p>    <% if (api.forms._account_type !== 'small_business') { %>    <p>Call us at <b>800.732.9194</b> for more help.</p>    <% } %></div>";
});
define("Automatons/templates/2496", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div acif-template=\"template::2001\"/><div role=\"main\">    <h1 class=\"node-head\">Welcome to &hellip; !</h1>    <h2 class=\"node-subhead\">To get started, please select a topic below.</h2>    <hr>    <h3 class=\"node-subhead\">Notify us</h3>    <ul>        <li acif-node=\"node::2003\">Notify you about upcoming travel</li>        <li acif-node=\"node::2004\">Report fraud</li>    </ul>    <h3 class=\"node-subhead\">Dispute Transaction or fees</h3>    <ul>        <li acif-node=\"node::2005\">Dispute checking/savings transactions</li>        <li acif-node=\"node::2006\">Dispute a fee</li>    </ul>    <h3 class=\"node-subhead\">Fraud or lost/stolen card</h3>    <ul>        <li acif-node=\"node::2007\">Report a lost/stolen card</li>    </ul>    <h3 class=\"node-subhead\">Account help</h3>    <ul>        <li acif-node=\"node::2008\">Overdraft / Maintenance Fee</li>        <li acif-transition=\"route_DEP_SERVICE_chat\">Replace a damaged card</li>        <li acif-transition=\"route_DEP_SERVICE_chat\">Change account type</li>        <li acif-transition=\"route_DEP_SERVICE_chat\">Stop a payment other than Bill Pay</li>        <li acif-node=\"node::2011\">Help with Bill Pay</li>        <li acif-transition=\"route_DEP_SERVICE_chat\">General account information</li>        <li acif-node=\"node::2012\">Help with BankAmeriDeals</li>        <li acif-transition=\"route_DEP_SERVICE_chat\">Manage my account</li>    </ul>    <hr>    <span acif-action=\"back\">&#10094;&nbsp;Back</span></div>";
});
define("Automatons/templates/2497", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div id=\"thankYou\">    <div class=\"center-container\">        <span id=\"thanks-message\">            <p class=\"lead\">Your feedback has been submitted!</p>            <p>Thank you for your time and participation.</p>            <button acif-action=\"exit\" aria-labelledby=\"thanks-message\" aria-live=\"assertive\">Close</button>        </span>    </div></div>";
});
define("Automatons/templates/2498", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div acif-template=\"formify\"></div>";
});
define("Automatons/templates/2499", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div acif-template=\"formify\"></div>";
});
define("Automatons/templates/2500", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div acif-template=\"formify\"></div>";
});
define("Automatons/templates/2501", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div acif-template=\"formify\"></div>";
});
define("Automatons/templates/2502", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div id=\"thankYou\">    <div class=\"center-container\">        <span id=\"thanks-message\">            <p class=\"lead\">Your feedback has been submitted!</p>            <p>Thank you for your time and participation.</p>            <button acif-action=\"exit\" aria-labelledby=\"thanks-message\" aria-live=\"assertive\">Close</button>        </span>    </div></div>";
});
define("Automatons/templates/2503", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div id=\"thankYou\">    <div class=\"center-container\">        <span id=\"thanks-message\">            <p class=\"lead\">Your feedback has been submitted!</p>            <p>Thank you for your time and participation.</p>            <button acif-action=\"exit\" aria-labelledby=\"thanks-message\" aria-live=\"assertive\">Close</button>        </span>    </div></div>";
});
define("Automatons/templates/2504", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div acif-template=\"formify\"></div>";
});
define("Automatons/templates/2505", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div id=\"thankYou\">    <div class=\"center-container\">        <span id=\"thanks-message\">            <p class=\"lead\">Thanks, we appreciate your feedback!</p>            <button acif-action=\"exit\" aria-labelledby=\"thanks-message\" aria-live=\"assertive\">Close</button>        </span>    </div></div>";
});
define("Automatons/templates/2506", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div class=\"scroll-area\" role=\"main\">    <div class=\"heading\" acif-aria-speak>        <h1>Our chat agents are here to help review the features and benefits of our Account Management service. Would you like to chat with an Account management specialist today?</h1>    </div>    <hr />    <div acif-template=\"template::2002\" /></div>";
});
define("Automatons/templates/3286", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<p>This is an auto-generated email to inform you a respondent provided a \"[question1]\" rating for overall chat satisfaction. Please click on the following link to view the survey.    <br/>To view the transcript, please click <a href=\"https://portal-bofa.touchcommerce.com/portal/portal.jsp#transcript_10004750_engagementID:[engagement-id]:transcript\">here</a>.    <br/>ChatID: [engagement-id]    <br/>AgentID: [agent-id]    <br/>Comments: [question8]</p>";
});
define("Automatons/templates/3288", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<%var nodeId = 0;if (api.forms._question_pertains_to.match(/ariba_e_request_support|accounts_payable/)) {\tnodeId = 2044;} else if(api.forms._question_pertains_to.match(/my_source/)) {\tnodeId = 2046;} else if(api.forms._question_pertains_to.match(/data_entry|security_access/)) {  nodeId = 2047;}%><div class=\"outcome-wrapper\">    <h1>We will be with you shortly.</h1>    <p>We are currently assisting other customers; you may experience a delay.<p>    <p>If you are still interested in chatting, please click \"Continue\" to be placed in the queue.</p>    <footer class=\"footer\">        <button class=\"btn\" acif-node=\"<%= nodeId %>\" acif-ignore-aa>Continue</button>    </footer></div>";
});
define("Automatons/templates/3289", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = "<div class=\"outcome-wrapper\">  <p>All agents are currently unavailable. Please try again during our hours of operation 8:30 am ET - 5:00 pm ET.<p>    </div>";
});
define("Automatons/templates/formify-map", ["exports", "module"], function (exports, module) {
  "use strict";

  module.exports = { "formify-footer": 2015, "formify-header": 2115 };
});
ACIF.onConfigsReady.resolve();
//# sourceMappingURL=acif-configs.map

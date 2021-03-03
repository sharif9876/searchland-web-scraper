import { Site } from "./Site"

export const WealdenSite: Site = {
  URL:
    "https://planning.wealden.gov.uk/disclaimer.aspx?returnURL=%2fplandisp.aspx%3frecno%3d151488",
  REFERENCE_SELECTOR:
    "#planningdetails_wrapper .leftcol:nth-of-type(1) p:nth-of-type(1)",
  CASE_OFFICER_SELECTOR:
    "#planningdetails_wrapper .leftcol:nth-of-type(1) p:nth-of-type(2)",
  STATUS_SELECTOR:
    "#planningdetails_wrapper .leftcol:nth-of-type(1) p:nth-of-type(3)",
  PROPOSAL_SELECTOR: "#planningdetails_wrapper #proposal p.proposaldata",
  RECEIVED_DATE_SELECTOR:
    "#planningdetails_wrapper .leftcol#uprn p:nth-of-type(1)",
  DECISION_SELECTOR: "#planningdetails_wrapper .leftcol#uprn p:nth-of-type(4)",
  DATE_VALIDATED_SELECTOR:
    "#planningdetails_wrapper .rightcol:last-of-type p:nth-of-type(1)",
  ISSUE_DATE_SELECTOR:
    "#planningdetails_wrapper .rightcol:last-of-type p:nth-of-type(3)",
  APPLICATION_TYPE_SELECTOR:
    "#planningdetails_wrapper div:nth-of-type(2) p:nth-of-type(1)",
  ADDRESS_SELECTOR:
    "#ctl00_ContentPlaceHolder1_pvLocation .leftcol p:nth-of-type(1)",
  UPRN_SELECTOR:
    "#ctl00_ContentPlaceHolder1_pvLocation .leftcol p:nth-of-type(2)",
  EASTING_SELECTOR:
    "#ctl00_ContentPlaceHolder1_pvLocation .leftcol p:nth-of-type(3)",
  NORTHING_SELECTOR:
    "#ctl00_ContentPlaceHolder1_pvLocation .leftcol p:nth-of-type(4)",
  WARD_SELECTOR:
    "#ctl00_ContentPlaceHolder1_pvLocation .rightcol p:nth-of-type(1)",
  PARISH_SELECTOR:
    "#ctl00_ContentPlaceHolder1_pvLocation .rightcol p:nth-of-type(3)",
}

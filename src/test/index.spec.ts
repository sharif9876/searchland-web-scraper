import * as cheerio from "cheerio"
import * as fs from "fs"
import { getText } from "../index"
import { WealdenSite } from "../sites/Wealden"

describe("Wealden site selectors", () => {
  const bodyHTML = fs.readFileSync("src/test/test_response.html", "utf8")
  const $ = cheerio.load(bodyHTML)

  it("reference should be found correctly", () => {
    expect(getText($(WealdenSite.REFERENCE_SELECTOR))).toEqual(
      "TM/2020/0313/TPO"
    )
  })
  it("caseOfficer should be found correctly", () => {
    expect(getText($(WealdenSite.CASE_OFFICER_SELECTOR))).toEqual(
      "Mr D Massheder"
    )
  })
  it("status should be found correctly", () => {
    expect(getText($(WealdenSite.STATUS_SELECTOR))).toEqual("Decision Issued")
  })
  it("proposal should be found correctly", () => {
    expect(getText($(WealdenSite.PROPOSAL_SELECTOR))).toEqual(
      "1X HORSE CHESTNUT (T3) THIN MIDDLE, LIFT ROAD SIDE TO 4M, CLEAR PHONE LINES AND 20% CROWN REDUCTION TO GROWTH POINTS AND SHAPE WITHIN TREE PRESERVATION ORDER (CHALVINGTON/RIPE) TPO/2016/0014"
    )
  })
  it("dateReceived should be found correctly", () => {
    expect(getText($(WealdenSite.RECEIVED_DATE_SELECTOR))).toEqual("13/10/2020")
  })
  it("decision should be found correctly,", () => {
    expect(getText($(WealdenSite.DECISION_SELECTOR))).toEqual("No objections")
  })
  it("validDate should be found correctly,", () => {
    expect(getText($(WealdenSite.DATE_VALIDATED_SELECTOR))).toEqual(
      "27/10/2020"
    )
  })
  it("issueDate should be found correctly,", () => {
    expect(getText($(WealdenSite.ISSUE_DATE_SELECTOR))).toEqual("14/12/2020")
  })
  it("applicationType should be found correctly,", () => {
    expect(getText($(WealdenSite.APPLICATION_TYPE_SELECTOR))).toEqual(
      "Tree with Preservation Order"
    )
  })
  it("address should be found correctly,", () => {
    expect(getText($(WealdenSite.ADDRESS_SELECTOR))).toEqual(
      "6 CARRIAGE MEWS, CHURCH LANE, RIPE, BN8 6AS"
    )
  })
  it("uprn should be found correctly,", () => {
    expect(getText($(WealdenSite.UPRN_SELECTOR))).toEqual("")
  })
  it("easting should be found correctly,", () => {
    expect(getText($(WealdenSite.EASTING_SELECTOR))).toEqual("551100")
  })
  it("northing should be found correctly,", () => {
    expect(getText($(WealdenSite.NORTHING_SELECTOR))).toEqual("110063")
  })
  it("ward should be found correctly,", () => {
    expect(getText($(WealdenSite.WARD_SELECTOR))).toEqual("Arlington")
  })
  it("parish should be found correctly,", () => {
    expect(getText($(WealdenSite.PARISH_SELECTOR))).toEqual(
      "Chalvington & Ripe"
    )
  })
})

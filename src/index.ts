import * as puppeteer from "puppeteer"
import * as cheerio from "cheerio"
import { JobPlanningResponse } from "./JobPlanningResponse"
import { WealdenSite } from "./sites/Wealden"
import { Site } from "./sites/Site"

export const getResponse = async (site: Site): Promise<JobPlanningResponse> => {
  const browser = await puppeteer.launch({ headless: true })
  const page = await browser.newPage()
  await page.goto(site.URL)
  await page.click('[type="submit"]')
  await page.waitForSelector(".tabcontainer")
  const bodyHTML = await page.evaluate(() => document.body.innerHTML)
  await browser.close()

  const $ = cheerio.load(bodyHTML)

  return {
    url: site.URL,
    reference: getText($(site.REFERENCE_SELECTOR)),
    caseOfficer: getText($(site.CASE_OFFICER_SELECTOR)),
    status: getText($(site.STATUS_SELECTOR)),
    proposal: getText($(site.PROPOSAL_SELECTOR)),
    dateReceived: toDate(getText($(site.RECEIVED_DATE_SELECTOR))),
    decision: getText($(site.DECISION_SELECTOR)),
    dateValidated: toDate(getText($(site.DATE_VALIDATED_SELECTOR))),
    decisionIssuedDate: toDate(getText($(site.ISSUE_DATE_SELECTOR))),
    applicationType: getText($(site.APPLICATION_TYPE_SELECTOR)),
    address: getText($(site.ADDRESS_SELECTOR)),
    uprn: parseInt(getText($(site.UPRN_SELECTOR))),
    easting: parseInt(getText($(site.EASTING_SELECTOR))),
    northing: parseInt(getText($(site.NORTHING_SELECTOR))),
    ward: getText($(site.WARD_SELECTOR)),
    parish: getText($(site.PARISH_SELECTOR)),
  }
}

const toDate = (dateString: string): Date => {
  const parts = dateString.split("/")
  return new Date(
    parseInt(parts[2], 10),
    parseInt(parts[1], 10) - 1,
    parseInt(parts[0], 10)
  )
}

export const getText = (element: cheerio.Cheerio) => {
  return element
    .text()
    .replace(/(\r\n|\n|\r)/gm, "")
    .trim()
}

getResponse(WealdenSite).then((data) => console.log(data))

export interface JobPlanningResponse {
    reference: string

    address: string

    decision?: string

    keyVal?: string

    proposal?: string

    url?: string

    /**
     * This is the date that the application was recieved by the council
     */
    dateReceived?: Date

    dateValidated?: Date

    decisionIssuedDate?: Date

    status: string

    applicationTypeCode?: string

    applicationType: string

    /**
     * Only exists after the application has been approved
     * might not be on the website and might have a different
     * name as well
     */
    permissionExpiryDate?: Date

    /**
     * Decision by date
     */
    determinationDeadline?: Date

    appealStatus?: string

    appealDecision?: string

    decisionLevel?: string

    caseOfficer: string

    parish: string

    ward: string

    conditions?: string

    // UPRN should definitely be a number
    uprn?: number

    longitude?: number

    latitude?: number

    easting?: number

    northing?: number
}

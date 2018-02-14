export class SchoolDetails {
    public schoolName: string;
    public webSite: string;
    public gender: string;
    public format: string;
    public contactName: string;
    public constactNumber: number;
    public country: string;

    constructor(schoolName: string, website: string, gender: string, format: string, contactName: string, 
        contactNo: number, country: string ) {
            this.schoolName = schoolName;
            this.webSite = website;
            this.gender = gender;
            this.format = format;
            this.contactName = contactName;
            this.constactNumber = contactNo;
            this.country = country;

    }
}

export class SchoolDetails {
    public schoolName: string;
    public webSite: string;
    public gender: string;
    public format: string;
    public contactName: string;
    public contactNumber: number;
    public email: string;
    public country: string;

    constructor(schoolName: string, website: string, gender: string, format: string, contactName: string,
        contactNo: number, email: string, country: string) {
        this.schoolName = schoolName;
        this.webSite = website;
        this.gender = gender;
        this.format = format;
        this.contactName = contactName;
        this.contactNumber = contactNo;
        this.email = email;
        this.country = country;

    }
}

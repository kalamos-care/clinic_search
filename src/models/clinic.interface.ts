export interface ClinicType {
  "data": {
    "id": string,
    "created_at": string,
    "updated_at": string,
    "nid": string,
    "title": string,
    "name1": string,
    "name2": string,
    "last_updated": string,
    "email": string,
    "npin_link": string,
    "elligibility": string,
    "location": {
      "street1": string,
      "street2": string,
      "city": string,
      "county": string,
      "state": string,
      "zipcode": string,
      "latitude": number,
      "longitude": number,
      "country": string
    },
    "phone_numbers": string[],
    "services": {
      "care": string[],
      "prevention": string[],
      "support": string[],
      "testing": string[]
    },
    "websites": string[],
    "audience": string[],
    "languages": string[],
    "type": string[]
  }
};
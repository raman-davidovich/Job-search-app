type IdAndTitle = {
  id: number;
  title: string;
};

type Position = IdAndTitle & { key: number };

type Catalogue = {
  id: number;
  key: number;
  positions: Array<Position>;
};

type Phone = {
  number: string;
  timebeg?: string;
  timeend?: string;
};

type Address = {
  addressString: string;
  latitude: number;
  longitude: number;
  phones?: Array<Phone>;
};

type Town = {
  declension: string;
  genitive: string;
  hasMetro: boolean;
  id: number;
  title: string;
};

interface Client {
  address: string;
  addresses: Array<Address>;
  client_logo: string;
  description: string;
  id: number;
  industry: Array<IdAndTitle>;
  is_blocked: boolean;
  link: string;
  registered_date: number;
  short_reg: boolean;
  staff_count: string;
  title: string;
  town: Town;
  url: string;
  vacancy_count: number;
}

type Language = [IdAndTitle, IdAndTitle];

type Metro = IdAndTitle & { id_metro_line: number };

type Phones = {
  number: string;
  additionalNumber: any;
};

export interface VacancyType {
  address?: string;
  age_from?: number;
  age_to?: number;
  agency: IdAndTitle;
  agreement?: boolean;
  already_sent_on_vacancy?: boolean;
  anonymous?: boolean;
  canEdit: boolean;
  candidat?: string;
  catalogues: Array<Catalogue>;
  children?: IdAndTitle;
  client?: Client;
  client_logo?: string;
  compensation?: string;
  covid_vaccination_requirement?: IdAndTitle;
  currency: string;
  date_archived: number;
  date_pub_to: number;
  date_published: number;
  driving_licence?: Array<String>;
  education: IdAndTitle;
  experience?: IdAndTitle;
  fax?: string;
  faxex?: string;
  firm_activity: string;
  firm_name: string;
  gender: IdAndTitle;
  highlight?: boolean;
  id: number;
  id_client?: number;
  is_archive: boolean;
  is_closed?: boolean;
  is_storage: boolean;
  languages?: Array<Language>;
  latitude?: unknown;
  link: string;
  longitude?: unknown;
  maritalstatus?: IdAndTitle;
  metro?: Array<Metro>;
  moveable?: boolean;
  payment_from?: number;
  payment_to?: number;
  phone?: string;
  phones?: Array<Phones>;
  place_of_work: IdAndTitle;
  profession: string;
  rejected?: boolean;
  response_info?: any;
  town: Town;
  type_of_work: IdAndTitle;
  vacancyRichText?: string;
  work?: string;
}

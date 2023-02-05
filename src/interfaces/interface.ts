export interface CurrentStatus {
  state: string;
  timestamp: Date | any;
}

export interface TransitEvent {
  state: string;
  timestamp: Date | any;
  hub: string;
  reason: string;
}

export interface RootObject {
  provider: string;
  CurrentStatus: CurrentStatus;
  PromisedDate: Date | any;
  TrackingNumber: string;
  TrackingURL: string;
  SupportPhoneNumbers: string[];
  TransitEvents: TransitEvent[];
  CreateDate: Date | any;
  loaded: boolean;
  language: string;
  languagePopUp: boolean;
  searchBar: string;
}

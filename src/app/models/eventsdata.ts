export interface EventData {
  id?: number;
  title: string;
  file: File | null;  // Can be either a URL string or File object for upload
  description: string;
  eventdatetime?: Date;
  location: string;
  filePath?: string;    
  fileName?: string; 
}


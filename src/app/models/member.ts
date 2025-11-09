export interface Member {
    name: string;
    surname: string;
    mobile: string;
    email: string;
    yearFrom: number;
    yearTo: number;
    batch: string;
    profession: string;
    profilePhoto?:string | null;
    profileImg?: File | null;
    comments?: string;
    joinedDate?: Date;    // Additional field for tracking when member joined
    modifiedDate?: Date;  // Additional field for tracking last modification date
    lastTs?: Date; // Additional field for tracking last timestamp
    id?: string;          // For database reference
    fullName?: string;    // Computed property (name + surname)
    isActive?: boolean;   // For tracking active/inactive status
    filePath?: string;    
    fileName?: string;
    roleId?: number | null; 
}

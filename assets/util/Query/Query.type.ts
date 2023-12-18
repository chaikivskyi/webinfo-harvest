export interface ApiResponse {
    "@context": string;
    "@id": string;
    "@type": string;
    "hydra:totalItems": number;
    "hydra:member": ResponseMembers[];
}

export interface ResponseMembers {
}

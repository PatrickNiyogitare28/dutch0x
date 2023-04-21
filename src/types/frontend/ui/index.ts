export type Tab = {
    label: string;
    isActive: boolean;
    status?: string;
}

export type Feature = {
    label: string;
    bgColor: string;
    iconName: string;
}

export type Action = {
    name: 'Running' | 'Interrupted' | 'Completed' | 'Pending' | 'Canceled'
}
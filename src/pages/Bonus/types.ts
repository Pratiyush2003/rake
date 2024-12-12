export interface TableHeadItem {
    key: string;
    icon: string;
}

export interface TableBodyItem {
    key: string;
    tableData: Array<{
        type: 'string' | 'image';
        title?: string;
    }>;
}
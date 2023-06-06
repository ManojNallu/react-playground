export interface WishProps {
    userName: string;
    callParent: () => void;
}

export interface WishState {
    wishMessage: string
    wishMessageTxt: string
}
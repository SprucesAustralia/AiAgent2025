export const formatPhoneNumber = (phoneNumber: string): string => {
    if (phoneNumber.startsWith('0')) {
        return '+61' + phoneNumber.slice(1);
    }
    return phoneNumber;
};
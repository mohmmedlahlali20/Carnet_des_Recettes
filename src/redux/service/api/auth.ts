import { User } from '../../../types/type.ts';

const registerApi = async (Data: User) => {
    try {
        const res = await fetch('https://recipes-api-green.vercel.app/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(Data),
        });

        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const responseData = await res.json();
        return responseData;
    } catch (error) {
        console.error('Error in registerApi:', error);
        throw error;
    }
};

export default registerApi;

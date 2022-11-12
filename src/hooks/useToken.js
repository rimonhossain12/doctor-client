import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const useToken = (user) => {
    const [token, setToken] = useState('');

    useEffect(() => {
        const email = user?.user.email;
        const currentUser = { email: email };
        if (email) {
            const url = `http://localhost:5000/users/${email}`;
            console.log('url = ', url);
            fetch(url, {
                method: "PUT",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.upsertedCount > 0) {
                        toast.success('user store in database')
                    } else {
                        toast.warning('user already store in database')
                    }
                })
        }

    }, [user]);

    return [token];
}

export default useToken;
"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
    useEffect(()=> {
        Crisp.configure("46240dd5-5b7a-4add-a330-9b0ee8a626e9");
    }, []);

    return null;
}
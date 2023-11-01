import React from "react";
import { useState, useRef } from "react";
import "./App.css";

const Dragbar = () => {
    const sidebarRef = useRef(null);
    const [isResizing, setIsResizing] = useState(false);
    const [sidebarWidth, setSidebarWidth] = useState(268);

    const startResizing = React.useCallback(() => {

    }, []);

    const stopResizing = React.useCallback(() => {

    }, []);

    const resize = React.useCallback(() => {}, []);

    React.useEffect(() => {}, []);

    return (
        <div></div>
    );
}

export default Dragbar;
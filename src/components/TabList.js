import React, { useEffect } from "react";

const TabList = ({ tabContents, active }) => {
    useEffect(() => {
        console.log("탭컨텐츠", tabContents);
    }, [tabContents, active]);

    return (
        <div className={`tab-content ${active ? "active" : ""}`}>
            {tabContents}
        </div>
    );
};

export default React.memo(TabList);
